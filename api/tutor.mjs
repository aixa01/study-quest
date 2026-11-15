// Study Quest Tutor: a LangChain deep agent that builds a custom lesson module.
//
// The main "Lesson Architect" agent plans with write_todos, delegates to three
// sub-agents (writer, quiz maker, fact checker), keeps drafts in its virtual
// file system, and writes the finished lesson to /module.json.
// The fact checker can call Wolfram|Alpha to verify numbers and science facts.
//
// Needs GEMINI_API_KEY and WOLFRAM_APP_ID (set on Vercel). GEMINI_MODEL is optional.

import { createDeepAgent } from 'deepagents';
import { ChatGoogleGenerativeAI } from '@langchain/google-genai';
import { convertToOpenAITool } from '@langchain/core/utils/function_calling';
import { tool } from '@langchain/core/tools';
import { z } from 'zod';

// ---------- tool: Wolfram|Alpha ----------
const askWolfram = tool(
    async ({ question }) => {
        const url = 'https://www.wolframalpha.com/api/v1/llm-api'
            + '?input=' + encodeURIComponent(question)
            + '&maxchars=600'
            + '&appid=' + process.env.WOLFRAM_APP_ID;
        try {
            const r = await fetch(url);
            return (await r.text()).slice(0, 1500);
        } catch {
            return 'Wolfram|Alpha could not be reached.';
        }
    },
    {
        name: 'ask_wolfram',
        description: 'Ask Wolfram|Alpha a factual, numeric, or scientific question (dates, formulas, constants, calculations, definitions) to verify a claim.',
        schema: z.object({ question: z.string().describe('A short, specific question, e.g. "speed of light in m/s"') }),
    }
);


// ---------- Gemini model ----------
// Gemini's API rejects a few JSON Schema features that deepagents' built-in tools use
// (type lists like ["string","null"], exclusiveMinimum, ...). Clean them before sending.
const UNSUPPORTED = ['exclusiveMinimum', 'exclusiveMaximum', '$schema', 'additionalProperties', 'default', 'examples', 'const'];

function cleanSchema(node) {
    if (Array.isArray(node)) return node.map(cleanSchema);
    if (!node || typeof node !== 'object') return node;
    const out = {};
    for (const [key, value] of Object.entries(node)) {
        if (UNSUPPORTED.includes(key)) continue;
        if (key === 'properties' && value && typeof value === 'object') {
            // property names are the tool's arguments: keep every name, clean each one's schema
            out.properties = Object.fromEntries(Object.entries(value).map(([name, sub]) => [name, cleanSchema(sub)]));
        } else {
            out[key] = cleanSchema(value);
        }
    }
    if (Array.isArray(out.type)) {
        const real = out.type.filter(t => t !== 'null');
        out.type = real[0] || 'string';
        if (real.length < out.type.length) out.nullable = true;
    }
    for (const k of ['anyOf', 'oneOf']) {
        if (Array.isArray(out[k])) {
            const real = out[k].filter(o => o && o.type !== 'null');
            if (real.length === 1) { Object.assign(out, real[0]); delete out[k]; out.nullable = true; }
        }
    }
    return out;
}

class GeminiChat extends ChatGoogleGenerativeAI {
    bindTools(tools, kwargs) {
        const cleaned = tools.map(t => {
            const fn = convertToOpenAITool(t);
            return { ...fn, function: { ...fn.function, parameters: cleanSchema(fn.function.parameters) } };
        });
        return super.bindTools(cleaned, kwargs);
    }
}

// ---------- prompts ----------
const MODULE_FORMAT = `{
  "title": "short lesson title",
  "pages": [ { "heading": "...", "paragraphs": ["...", "..."] } ],
  "quiz": [ { "q": "question?", "choices": ["A", "B", "C", "D"], "answer": 0, "explain": "one sentence why" } ]
}`;

const ARCHITECT_PROMPT = `You are the Lesson Architect for Study Quest, a gamified learning app for students.
Your job: build ONE short, accurate, friendly lesson module about the topic the student asks for.

Work like this:
1. Use write_todos to plan your steps before doing anything else.
2. Use the task tool to ask the "lesson-writer" sub-agent for the 3 lesson pages AND 3 quiz questions.
3. Save its draft with write_file to /draft.md.
4. Use the task tool to ask the "fact-checker" sub-agent to review the draft (pass it the full text). It checks facts with Wolfram|Alpha.
5. Apply any corrections the fact checker reports.
6. Write the final lesson with write_file to /module.json, as valid JSON in exactly this format:
${MODULE_FORMAT}
   - exactly 3 pages, each with 2-3 short paragraphs of plain text (no HTML, no markdown)
   - exactly 3 quiz questions, each with 4 choices, "answer" = index (0-3) of the correct choice
   - mix up which index is correct
7. Mark your todos complete, then reply with one short sentence saying the lesson is ready.

Keep everything appropriate for students. If the topic is inappropriate or harmful, write a lesson on a safe, related educational topic instead.`;

const subagents = [
    {
        name: 'lesson-writer',
        description: 'Writes the 3 lesson pages and 3 quiz questions for a topic in Study Quest style.',
        systemPrompt: `You write lessons for Study Quest, a learning game for students.
For the given topic, write:
PAGES (exactly 3):
  1. "What is it?" - a clear definition and why it matters
  2. "How it works" - the key ideas, with one concrete example
  3. "In the real world" - where it shows up in everyday life or careers
  Each page: a short heading and 2 short, friendly paragraphs of plain text (no HTML, no markdown).
QUIZ (exactly 3 multiple-choice questions about facts in your pages):
  Each with 4 plausible choices, exactly one correct, and a one-sentence explanation.
Return everything as plain text in your final message.`,
    },
    {
        name: 'fact-checker',
        description: 'Checks lesson pages and quiz answers for factual errors, using Wolfram|Alpha.',
        systemPrompt: `You are a careful fact checker for Study Quest.
Review the lesson and quiz you are given. For every number, date, formula, constant, or scientific claim, use ask_wolfram to verify the most important ones (at most 2 lookups).
Also check that each quiz question has exactly one correct answer.
Return a short report: what you verified with Wolfram, and a list of any corrections needed (or "No corrections needed").`,
        tools: [askWolfram],
    },
];

// ---------- helpers ----------
const fileText = (f) => (f == null ? '' : Array.isArray(f.content) ? f.content.join('\n') : String(f.content ?? f));

const escapeHtml = (s) => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

function parseModule(text) {
    const start = text.indexOf('{');
    const end = text.lastIndexOf('}');
    if (start === -1 || end === -1) throw new Error('No JSON found');
    return JSON.parse(text.slice(start, end + 1));
}

// turn the agent's JSON into Study Quest's module format (plain text is escaped, so no HTML gets in)
function toStudyQuestModule(raw, topic) {
    const pages = (raw.pages || []).slice(0, 4).map(p => ({
        heading: String(p.heading || 'Lesson').slice(0, 80),
        body: (Array.isArray(p.paragraphs) ? p.paragraphs : [String(p.body || '')])
            .slice(0, 4).map(t => `<p>${escapeHtml(t)}</p>`).join(''),
    }));
    const quiz = (raw.quiz || []).slice(0, 4).filter(q =>
        Array.isArray(q.choices) && q.choices.length >= 2 &&
        Number.isInteger(q.answer) && q.answer >= 0 && q.answer < q.choices.length
    ).map(q => ({
        q: String(q.q).slice(0, 200),
        choices: q.choices.map(c => String(c).slice(0, 120)),
        answer: q.answer,
        explain: q.explain ? String(q.explain).slice(0, 240) : undefined,
    }));
    if (pages.length < 1 || quiz.length < 1) throw new Error('Lesson was incomplete');
    pages.push({
        heading: 'Key takeaway',
        body: `<p class="takeaway">You just explored ${escapeHtml(topic)}! This lesson was built by Study Quest's AI tutor and fact-checked with Wolfram|Alpha.</p><p>Ready to test what you learned?</p>`,
    });
    return { title: String(raw.title || topic).slice(0, 60), xp: 50, pages, quiz };
}

// readable summary of what the agent did, for the "watch the agent work" screen
function agentTrace(messages) {
    const steps = [];
    for (const m of messages || []) {
        for (const call of m.tool_calls || []) {
            const a = call.args || {};
            if (call.name === 'write_todos') steps.push({ type: 'plan', text: 'Planned the lesson' });
            else if (call.name === 'task') steps.push({ type: 'delegate', text: `Asked the ${a.subagent_type || a.subagentType || 'sub-agent'} for help` });
            else if (call.name === 'ask_wolfram') steps.push({ type: 'wolfram', text: `Checked with Wolfram: "${String(a.question).slice(0, 80)}"` });
            else if (call.name === 'write_file') steps.push({ type: 'file', text: `Saved ${a.file_path || a.path || 'a draft'}` });
        }
    }
    return steps;
}

// ---------- handler ----------
export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).json({ error: 'Use POST' });
    if (!process.env.GEMINI_API_KEY) return res.status(500).json({ error: 'The tutor is not set up yet (missing Gemini key).' });

    const topic = String(req.body?.topic || '').trim().slice(0, 80);
    if (topic.length < 2) return res.status(400).json({ error: 'Please enter a topic.' });

    const model = new GeminiChat({
        model: process.env.GEMINI_MODEL || 'gemini-3.8-flash',
        apiKey: process.env.GEMINI_API_KEY,
        temperature: 0.4,
        thinkingConfig: { thinkingLevel: 'LOW' },   // faster responses for a live demo
    });

    // the fact checker's Wolfram calls are traced from inside its own run
    const wolframCalls = [];
    const tracedWolfram = tool(
        async (args) => { wolframCalls.push(args.question); return askWolfram.invoke(args); },
        { name: askWolfram.name, description: askWolfram.description, schema: askWolfram.schema }
    );

    const agent = createDeepAgent({
        model,
        systemPrompt: ARCHITECT_PROMPT,
        subagents: subagents.map(s => s.tools ? { ...s, tools: [tracedWolfram] } : s),
    });

    try {
        const result = await agent.invoke(
            { messages: [{ role: 'user', content: `Build a Study Quest lesson about: ${topic}` }] },
            { recursionLimit: 60 }
        );
        const files = result.files || {};
        const moduleFile = files['/module.json'] || files['module.json'];
        const last = result.messages?.[result.messages.length - 1];
        const raw = parseModule(moduleFile ? fileText(moduleFile) : String(last?.content || ''));
        const module = toStudyQuestModule(raw, topic);

        const steps = agentTrace(result.messages);
        wolframCalls.forEach(q => steps.push({ type: 'wolfram', text: `Fact checker asked Wolfram: "${String(q).slice(0, 80)}"` }));
        const todos = (result.todos || []).map(t => ({ text: t.content, status: t.status }));

        return res.status(200).json({ module, todos, steps });
    } catch (err) {
        console.error('Tutor failed:', err);
        return res.status(500).json({ error: 'The tutor could not finish this lesson. Please try again or try another topic.' });
    }
}
