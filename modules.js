// Module content. Each module: reading pages, then a short quiz.
// `answer` is the index of the correct choice.
// A module with `options` (CS Module 4, Biology Module 5) lets the player pick what to learn;
// each option is a mini-lesson with its own pages and quiz.
// A page can also have `grid` (hover-to-explore tiles) or `wolfram` (an Ask Wolfram box).

import { LANGUAGES } from './languages.js';
import { PHYSICS_MODULES } from './modules-physics.js';
import { BIOLOGY_MODULES } from './modules-biology.js';
import { CHEMISTRY_MODULES } from './modules-chemistry.js';

export const MODULES = {
    math: [
        {
            id: 'math-1',
            title: 'What is Mathematics?',
            xp: 50,
            pages: [
                {
                    heading: 'What is it?',
                    body: `<p>Mathematics is the study of <strong>patterns, quantity, structure, space, and change</strong>.</p>
                           <p>It uses numbers, symbols, and logic to describe how things relate to each other, and then <strong>proves</strong> those relationships are true with step-by-step reasoning.</p>
                           <p>Unlike most sciences, math doesn't rely on experiments. Once something is proven, it stays true forever.</p>`
                },
                {
                    heading: 'What is it used for?',
                    body: `<ul>
                             <li><strong>Everyday life:</strong> budgeting, cooking, telling time, measuring</li>
                             <li><strong>Science &amp; engineering:</strong> building bridges, launching rockets, predicting weather</li>
                             <li><strong>Technology:</strong> encryption that protects your passwords, video game graphics, AI</li>
                             <li><strong>Economics &amp; medicine:</strong> modeling markets, testing whether a new drug works</li>
                           </ul>`
                },
                {
                    heading: 'Where does it overlap?',
                    body: `<p>Math is often called the <strong>language of science</strong>.</p>
                           <p>Physics describes the universe with equations, computer science is built on logic and algorithms, and biology uses statistics to study populations.</p>
                           <p>Math even shows up in <strong>music</strong> (rhythm and harmony) and <strong>art</strong> (symmetry and perspective).</p>`
                },
                {
                    heading: 'A crash course in history',
                    body: `<ul class="timeline">
                             <li><span>~3000 BCE</span> Egyptians and Babylonians use math to measure land, track seasons, and trade. Babylonians count in base 60, which is why an hour has 60 minutes.</li>
                             <li><span>~300 BCE</span> Euclid writes <em>Elements</em>, building geometry from basic rules with proofs. It was a textbook for over 2,000 years.</li>
                             <li><span>~600 CE</span> Indian mathematicians like Brahmagupta treat <strong>zero</strong> as a number and develop the decimal system we use today.</li>
                             <li><span>~820 CE</span> In Baghdad, al-Khwarizmi writes the book that gives us the word <strong>algebra</strong>. "Algorithm" comes from his name.</li>
                             <li><span>Late 1600s</span> Newton and Leibniz each invent <strong>calculus</strong>, the math of change and motion.</li>
                             <li><span>Today</span> Math powers statistics, data science, cryptography, and AI.</li>
                           </ul>`
                },
                {
                    heading: 'Key takeaway',
                    body: `<p class="takeaway">Math is a toolkit for thinking clearly, and it's hidden inside almost everything around you.</p>
                           <p>Ready to test what you learned?</p>`
                }
            ],
            quiz: [
                {
                    q: 'What makes math different from most sciences?',
                    choices: ['It only uses numbers', 'Proven results stay true forever', 'It was invented recently', 'It requires a lab'],
                    answer: 1
                },
                {
                    q: 'The word "algebra" comes from a book by which mathematician?',
                    choices: ['Euclid', 'Newton', 'al-Khwarizmi', 'Brahmagupta'],
                    answer: 2
                },
                {
                    q: 'Why does an hour have 60 minutes?',
                    choices: ['The Babylonians counted in base 60', 'Newton chose it', 'It comes from calculus', 'Clocks have 60 gears'],
                    answer: 0
                }
            ]
        },
        {
            id: 'math-2',
            title: 'The Branches of Math',
            xp: 50,
            pages: [
                {
                    heading: 'Math is a ladder',
                    body: `<p>Math isn't one subject. It's a family of <strong>branches</strong>, and many of them build on each other like rungs on a ladder.</p>
                           <p>A common path through school looks like this:</p>
                           <p class="eq">Algebra → Geometry &amp; Trig → Precalculus → Calculus → Differential Equations</p>
                           <p>Alongside that ladder sit other branches, like <strong>statistics</strong>, <strong>linear algebra</strong>, and <strong>discrete math</strong>, that power data science and computing.</p>`
                },
                {
                    heading: 'Algebra',
                    body: `<p><strong>What it is:</strong> using letters (<strong>variables</strong>) like <em>x</em> to stand for unknown numbers, and following rules to solve for them.</p>
                           <p><strong>Purpose:</strong> it lets you describe relationships in general. Instead of one answer, you get a rule that works every time.</p>
                           <p><strong>Intertwined with:</strong> nearly everything. Algebra is the language every later branch of math is written in, and it's used constantly in physics, chemistry, economics, and programming.</p>`
                },
                {
                    heading: 'Geometry & Trigonometry',
                    body: `<p><strong>Geometry</strong> studies shapes, sizes, angles, and space: triangles, circles, areas, and volumes.</p>
                           <p><strong>Trigonometry</strong> zooms in on the relationships between the angles and sides of triangles, using <strong>sine</strong>, <strong>cosine</strong>, and <strong>tangent</strong>. Those same functions also describe anything that repeats in <strong>waves</strong>, like sound and light.</p>
                           <p><strong>Intertwined with:</strong> architecture, engineering, navigation, physics, music, and 3D graphics in video games.</p>`
                },
                {
                    heading: 'Precalculus',
                    body: `<p><strong>What it is:</strong> a deep study of <strong>functions</strong>, rules that turn an input into an output, like <em>f(x) = 2x + 1</em>.</p>
                           <p>You learn the main families: linear, polynomial, <strong>exponential</strong> (fast growth), <strong>logarithmic</strong> (the reverse of exponential), and trigonometric.</p>
                           <p><strong>Purpose:</strong> it's the bridge to calculus. Calculus asks how functions <em>change</em>, so you first need to know the functions well.</p>`
                },
                {
                    heading: 'Calculus',
                    body: `<p><strong>What it is:</strong> the math of <strong>change</strong> and <strong>accumulation</strong>. It has two big ideas:</p>
                           <ul>
                             <li><strong>Derivatives</strong> measure how fast something is changing at an instant, like your exact speed right now.</li>
                             <li><strong>Integrals</strong> add up tiny pieces to find a total, like the distance traveled over a whole trip.</li>
                           </ul>
                           <p><strong>Intertwined with:</strong> physics (motion and forces), engineering, economics (marginal cost and profit), medicine, and machine learning.</p>`
                },
                {
                    heading: 'Differential Equations',
                    body: `<p><strong>What it is:</strong> equations that involve <strong>rates of change</strong>. Instead of solving for a number, you solve for a whole function that describes how something evolves over time.</p>
                           <p><strong>Purpose:</strong> modeling the real world. Population growth, the spread of disease, cooling coffee, swinging pendulums, and electrical circuits are all described this way.</p>
                           <p><strong>Intertwined with:</strong> physics, biology, epidemiology, chemistry, and every branch of engineering.</p>`
                },
                {
                    heading: 'Beyond the ladder',
                    body: `<ul>
                             <li><strong>Statistics &amp; Probability:</strong> collecting data, measuring uncertainty, and making predictions. Used in medicine, sports, polling, and AI.</li>
                             <li><strong>Linear Algebra:</strong> working with <strong>vectors</strong> and <strong>matrices</strong> (grids of numbers). It powers computer graphics, Google search, and neural networks.</li>
                             <li><strong>Discrete Math:</strong> logic, counting, and networks (graphs). It's the foundation of computer science, cryptography, and algorithms.</li>
                           </ul>`
                },
                {
                    heading: 'Key takeaway',
                    body: `<p class="takeaway">Each branch of math is a tool for a different kind of question, and the deeper branches are built from the earlier ones.</p>
                           <p>Ready to test what you learned?</p>`
                }
            ],
            quiz: [
                {
                    q: 'Which branch of math studies change, using derivatives and integrals?',
                    choices: ['Algebra', 'Calculus', 'Geometry', 'Statistics'],
                    answer: 1
                },
                {
                    q: 'What is the main purpose of precalculus?',
                    choices: ['Learning to count', 'Studying only triangles', 'Mastering functions as a bridge to calculus', 'Collecting data'],
                    answer: 2
                },
                {
                    q: 'Which branch works with vectors and matrices and powers neural networks?',
                    choices: ['Linear algebra', 'Trigonometry', 'Differential equations', 'Geometry'],
                    answer: 0
                }
            ]
        },
        {
            id: 'math-3',
            title: 'Key Ideas & Equations',
            xp: 50,
            pages: [
                {
                    heading: 'Algebra: lines',
                    body: `<p>The equation of a straight line:</p>
                           <p class="eq">y = mx + b</p>
                           <p><strong>m</strong> is the <strong>slope</strong> (how steep the line is) and <strong>b</strong> is the <strong>y-intercept</strong> (where it crosses the y-axis).</p>
                           <p>Solving an equation means doing the same thing to both sides until <em>x</em> is alone:</p>
                           <p class="eq">2x + 3 = 11 → 2x = 8 → x = 4</p>`
                },
                {
                    heading: 'Algebra: the quadratic formula',
                    body: `<p>A <strong>quadratic</strong> equation has an <em>x²</em> term: <em>ax² + bx + c = 0</em>. Its graph is a U-shaped curve called a <strong>parabola</strong>.</p>
                           <p>Any quadratic can be solved with:</p>
                           <p class="eq">x = (−b ± √(b² − 4ac)) / 2a</p>
                           <p>The ± means there are usually <strong>two</strong> answers, the two places the parabola crosses the x-axis.</p>`
                },
                {
                    heading: 'Geometry & Trig: triangles',
                    body: `<p>For any right triangle, the <strong>Pythagorean theorem</strong> links the two short sides (<em>a</em>, <em>b</em>) to the longest side (<em>c</em>):</p>
                           <p class="eq">a² + b² = c²</p>
                           <p>Example: sides of 3 and 4 give 9 + 16 = 25, so <em>c</em> = 5.</p>
                           <p>Trig ratios connect an angle θ to the sides, remembered as <strong>SOH-CAH-TOA</strong>:</p>
                           <p class="eq">sin θ = opp / hyp &nbsp; cos θ = adj / hyp &nbsp; tan θ = opp / adj</p>`
                },
                {
                    heading: 'Precalc: exponents & logs',
                    body: `<p><strong>Exponential growth</strong> multiplies by the same amount over and over:</p>
                           <p class="eq">y = a · bˣ</p>
                           <p>Here <em>a</em> is the starting value and <em>b</em> is the growth factor. If <em>b</em> = 2, the amount doubles each step.</p>
                           <p>A <strong>logarithm</strong> undoes an exponent. It asks, "what power do I need?"</p>
                           <p class="eq">2³ = 8 &nbsp;⟷&nbsp; log₂ 8 = 3</p>`
                },
                {
                    heading: 'Calculus: derivatives',
                    body: `<p>The <strong>derivative</strong> gives the slope of a curve at a single point, its instant rate of change. It's written <em>d/dx</em> or <em>f′(x)</em>.</p>
                           <p>The most useful shortcut is the <strong>power rule</strong>:</p>
                           <p class="eq">d/dx (xⁿ) = n · xⁿ⁻¹</p>
                           <p>Example: the derivative of <em>x²</em> is <em>2x</em>. At <em>x</em> = 3, the curve <em>y = x²</em> is rising with a slope of 6.</p>`
                },
                {
                    heading: 'Calculus: integrals',
                    body: `<p>The <strong>integral</strong> finds the total <strong>area under a curve</strong> by adding up infinitely many thin slices.</p>
                           <p>It works like the derivative in reverse:</p>
                           <p class="eq">∫ xⁿ dx = xⁿ⁺¹ / (n + 1) + C</p>
                           <p>The <strong>Fundamental Theorem of Calculus</strong> says derivatives and integrals are opposites, which links the two halves of calculus together.</p>`
                },
                {
                    heading: 'Differential equations',
                    body: `<p>The simplest and most famous one says that something grows at a rate <strong>proportional to its size</strong>:</p>
                           <p class="eq">dy/dt = k · y</p>
                           <p>Its solution is exponential growth (or decay, if <em>k</em> is negative):</p>
                           <p class="eq">y = y₀ · eᵏᵗ</p>
                           <p>Here <em>y₀</em> is the starting amount and <em>e</em> ≈ 2.718 is a special constant. This one equation models populations, savings, radioactive decay, and cooling.</p>`
                },
                {
                    heading: 'Key takeaway',
                    body: `<p class="takeaway">A handful of core equations, like lines, triangles, growth, and rates of change, show up again and again across all of math and science.</p>
                           <p>Ready to test what you learned?</p>`
                }
            ],
            quiz: [
                {
                    q: 'Solve for x: 2x + 5 = 13',
                    choices: ['x = 9', 'x = 4', 'x = 6.5', 'x = 3'],
                    answer: 1
                },
                {
                    q: 'A right triangle has short sides of 6 and 8. How long is the longest side?',
                    choices: ['10', '14', '12', '48'],
                    answer: 0
                },
                {
                    q: 'Using the power rule, what is the derivative of x³?',
                    choices: ['x²', '3x', 'x⁴ / 4', '3x²'],
                    answer: 3
                },
                {
                    q: 'What is log₁₀ 1000?',
                    choices: ['100', '10', '3', '30'],
                    answer: 2
                }
            ]
        },
        {
            id: 'math-4',
            title: 'Math in the Real World',
            xp: 50,
            pages: [
                {
                    heading: 'Money: compound interest',
                    body: `<p>Banks grow savings (and loans) with <strong>compound interest</strong>, where you earn interest on your interest:</p>
                           <p class="eq">A = P (1 + r/n)ⁿᵗ</p>
                           <p><em>P</em> = starting amount, <em>r</em> = yearly rate, <em>n</em> = times compounded per year, <em>t</em> = years.</p>
                           <p><strong>Example:</strong> $1,000 at 5% compounded yearly for 10 years:</p>
                           <p class="eq">1000 × 1.05¹⁰ ≈ $1,628.89</p>
                           <p>That's exponential growth from precalculus, working on your bank account.</p>`
                },
                {
                    heading: 'Physics: motion & falling',
                    body: `<p>At a steady speed, distance is simple algebra:</p>
                           <p class="eq">distance = speed × time</p>
                           <p>A dropped object speeds up as it falls. Ignoring air resistance, the distance it falls is:</p>
                           <p class="eq">d = ½ g t² &nbsp; (g ≈ 9.8 m/s²)</p>
                           <p><strong>Example:</strong> after 2 seconds, ½ × 9.8 × 2² = <strong>19.6 meters</strong>.</p>
                           <p>Calculus connects these: <strong>velocity</strong> is the derivative of position, and <strong>acceleration</strong> is the derivative of velocity.</p>`
                },
                {
                    heading: 'Building: measuring heights',
                    body: `<p>Surveyors and engineers use trigonometry to measure things they can't reach.</p>
                           <p>Stand a known distance from a building, measure the angle up to the top, and use tangent:</p>
                           <p class="eq">height = distance × tan(angle)</p>
                           <p><strong>Example:</strong> 20 meters away at a 45° angle: 20 × tan 45° = 20 × 1 = <strong>20 meters</strong> tall.</p>
                           <p>The Pythagorean theorem helps builders check that corners are square and calculate ramp and roof lengths.</p>`
                },
                {
                    heading: 'Biology & medicine: growth and decay',
                    body: `<p>Bacteria that double every <em>d</em> minutes follow exponential growth:</p>
                           <p class="eq">N = N₀ · 2^(t / d)</p>
                           <p><strong>Example:</strong> 100 bacteria doubling every 20 minutes. After 60 minutes: 100 × 2³ = <strong>800</strong>.</p>
                           <p>Medicines leave the body by <strong>half-life</strong>, the reverse process:</p>
                           <p class="eq">amount = A₀ · (½)^(t / h)</p>
                           <p>Doctors use this to decide how often to give a dose.</p>`
                },
                {
                    heading: 'Data & AI',
                    body: `<p><strong>Statistics</strong> finds patterns in data. The simplest is the <strong>average (mean)</strong>: add the values and divide by how many there are.</p>
                           <p>To spot a trend, data scientists fit a <strong>line of best fit</strong>, the same <em>y = mx + b</em> from algebra, through scattered data points.</p>
                           <p><strong>AI</strong> models learn using <strong>linear algebra</strong> (huge grids of numbers) and <strong>calculus</strong>. A method called <strong>gradient descent</strong> uses derivatives to nudge the model, step by step, toward fewer mistakes.</p>`
                },
                {
                    heading: 'Games & graphics',
                    body: `<p>Every object in a video game has <strong>coordinates</strong> (x, y, z) and moves using <strong>vectors</strong>.</p>
                           <p>To rotate a character or swing a camera in a circle, games use trig:</p>
                           <p class="eq">x = r · cos θ &nbsp; y = r · sin θ</p>
                           <p>Physics engines use calculus to simulate gravity, jumps, and collisions many times every second.</p>`
                },
                {
                    heading: 'Key takeaway',
                    body: `<p class="takeaway">The same equations you learn in class are quietly running your bank account, your medicine, your games, and the AI on your phone.</p>
                           <p>Ready to test what you learned?</p>`
                }
            ],
            quiz: [
                {
                    q: '100 bacteria double every 20 minutes. How many are there after 1 hour?',
                    choices: ['300', '600', '800', '400'],
                    answer: 2
                },
                {
                    q: 'Ignoring air resistance, about how far does a dropped object fall in 2 seconds? (d = ½gt², g ≈ 9.8)',
                    choices: ['19.6 m', '9.8 m', '4.9 m', '39.2 m'],
                    answer: 0
                },
                {
                    q: 'Which formula describes savings that earn interest on interest?',
                    choices: ['a² + b² = c²', 'A = P(1 + r/n)ⁿᵗ', 'y = mx + b', 'd = speed × time'],
                    answer: 1
                },
                {
                    q: 'What does AI use derivatives for in gradient descent?',
                    choices: ['Drawing triangles', 'Counting data points', 'Storing images', 'Nudging the model toward fewer mistakes'],
                    answer: 3
                }
            ]
        }
    ],

    cs: [
        {
            id: 'cs-1',
            title: 'What is Computer Science?',
            xp: 50,
            pages: [
                {
                    heading: 'What is it?',
                    body: `<p>Computer science is the study of <strong>computation</strong>: how to solve problems by breaking them into clear steps (<strong>algorithms</strong>), and how to represent and process information (<strong>data</strong>).</p>
                           <p>It's not only about computers. Computers are the tool; <strong>problem-solving</strong> is the heart of it.</p>`
                },
                {
                    heading: 'What is it used for?',
                    body: `<ul>
                             <li><strong>Software &amp; apps:</strong> everything on your phone, from games to messaging</li>
                             <li><strong>The internet:</strong> websites, search engines, streaming</li>
                             <li><strong>Artificial intelligence:</strong> voice assistants, recommendations, self-driving cars</li>
                             <li><strong>Science &amp; health:</strong> simulating climates, mapping DNA, analyzing medical scans</li>
                             <li><strong>Security:</strong> protecting data and stopping hackers</li>
                           </ul>`
                },
                {
                    heading: 'Where does it overlap?',
                    body: `<p>CS grew out of <strong>math and logic</strong>, and still depends on them.</p>
                           <p>It works with <strong>engineering</strong> to build hardware, with <strong>psychology and design</strong> to make apps easy to use, and with almost every other field. Biology, finance, art, and music all use computing today.</p>`
                },
                {
                    heading: 'A crash course in history',
                    body: `<ul class="timeline">
                             <li><span>1830s–40s</span> Charles Babbage designs the Analytical Engine, a mechanical computer. <strong>Ada Lovelace</strong> writes what's considered the first computer program for it.</li>
                             <li><span>1850s</span> George Boole develops <strong>Boolean logic</strong> (true/false), the foundation of every digital circuit.</li>
                             <li><span>1936</span> Alan Turing describes the <strong>Turing machine</strong>, a model of what any computer can do.</li>
                             <li><span>1940s</span> The first electronic computers, like ENIAC, fill whole rooms. The <strong>transistor</strong> (1947) makes computers far smaller.</li>
                             <li><span>1950s</span> <strong>Grace Hopper</strong> builds one of the first compilers, letting people program in words instead of raw numbers.</li>
                             <li><span>1969–89</span> ARPANET connects its first computers, the ancestor of the internet. In 1989, Tim Berners-Lee invents the <strong>World Wide Web</strong>.</li>
                             <li><span>Today</span> Smartphones, cloud computing, and AI.</li>
                           </ul>`
                },
                {
                    heading: 'Key takeaway',
                    body: `<p class="takeaway">Computer science is about teaching machines to solve problems, and learning to think step by step yourself.</p>
                           <p>Ready to test what you learned?</p>`
                }
            ],
            quiz: [
                {
                    q: 'What is an algorithm?',
                    choices: ['A type of computer chip', 'A clear set of steps to solve a problem', 'A programming language', 'A kind of website'],
                    answer: 1
                },
                {
                    q: 'Who is credited with writing the first computer program?',
                    choices: ['Alan Turing', 'Grace Hopper', 'Tim Berners-Lee', 'Ada Lovelace'],
                    answer: 3
                },
                {
                    q: 'Boolean logic is built on which two values?',
                    choices: ['True and false', 'Big and small', 'Input and output', 'Left and right'],
                    answer: 0
                }
            ]
        },
        {
            id: 'cs-2',
            title: 'Types of Programming Languages',
            xp: 50,
            pages: [
                {
                    heading: 'Why so many languages?',
                    body: `<p>There are thousands of programming languages, but they all do the same basic job: turn human instructions into something a computer can run.</p>
                           <p>They differ in three big ways:</p>
                           <ul>
                             <li><strong>How they run:</strong> compiled or interpreted</li>
                             <li><strong>How they handle types:</strong> static or dynamic, strong or weak</li>
                             <li><strong>Their style (paradigm):</strong> procedural, object-oriented, or functional</li>
                           </ul>
                           <p>Each choice trades off speed, safety, and ease of writing.</p>`
                },
                {
                    heading: 'Compiled vs. interpreted',
                    body: `<p><strong>Compiled</strong> languages are translated <em>all at once</em> into machine code before the program runs. The result is fast, but you must recompile after every change. <span class="tag">C</span> <span class="tag">C++</span></p>
                           <p><strong>Interpreted</strong> languages are read and run <em>line by line</em> by another program (the interpreter). They're quicker to test and change, but usually slower. <span class="tag">Python</span> <span class="tag">JavaScript</span></p>
                           <p><strong>Hybrid:</strong> some languages compile to an in-between form called <strong>bytecode</strong>, which a virtual machine runs on any computer. <span class="tag">Java</span> <span class="tag">C#</span></p>`
                },
                {
                    heading: 'Static vs. dynamic typing',
                    body: `<p>A <strong>type</strong> is the kind of data a value is: a number, text (a <em>string</em>), true/false (a <em>boolean</em>), and so on.</p>
                           <p><strong>Statically typed:</strong> you declare each variable's type, and it's checked <em>before</em> the program runs. Mistakes are caught early.</p>
                           <pre class="code">int age = 20;        // Java: age must always be a whole number</pre>
                           <p><strong>Dynamically typed:</strong> types are figured out <em>while</em> the program runs, and a variable can hold any type. Faster to write, but some mistakes only show up later.</p>
                           <pre class="code">age = 20             # Python: no type needed
age = "twenty"       # ...and this is allowed too</pre>`
                },
                {
                    heading: 'Strong vs. weak typing',
                    body: `<p>This is about how strictly a language treats mixing types.</p>
                           <p><strong>Strongly typed</strong> languages refuse to mix types without you asking. In Python:</p>
                           <pre class="code">"5" + 1     # Error: can't add text and a number</pre>
                           <p><strong>Weakly typed</strong> languages quietly convert types for you, which is convenient but can cause surprises. In JavaScript:</p>
                           <pre class="code">"5" + 1     // "51"  (the 1 became text)
"5" - 1     // 4     (the "5" became a number)</pre>
                           <p>Note: static/dynamic and strong/weak are <strong>separate</strong> ideas. Python is dynamic <em>and</em> strong.</p>`
                },
                {
                    heading: 'Paradigms: coding styles',
                    body: `<ul>
                             <li><strong>Procedural:</strong> a program is a list of steps grouped into functions. <span class="tag">C</span></li>
                             <li><strong>Object-oriented (OOP):</strong> a program is built from <strong>objects</strong>, bundles of data and the actions that work on it, created from blueprints called <strong>classes</strong>. <span class="tag">Java</span> <span class="tag">C#</span> <span class="tag">C++</span></li>
                             <li><strong>Functional:</strong> a program is built by combining small functions that avoid changing data. <span class="tag">Haskell</span></li>
                           </ul>
                           <p>Many modern languages are <strong>multi-paradigm</strong>. Python and JavaScript let you mix all three.</p>`
                },
                {
                    heading: 'The 4 pillars of OOP',
                    body: `<ul>
                             <li><strong>Encapsulation:</strong> keep an object's data and actions together, and hide the inner details. A car's driver uses the pedals, not the engine wiring.</li>
                             <li><strong>Abstraction:</strong> show only what matters. You call <em>sendMessage()</em> without knowing how networking works.</li>
                             <li><strong>Inheritance:</strong> a class can build on another. A <em>Dog</em> class can inherit everything from an <em>Animal</em> class.</li>
                             <li><strong>Polymorphism:</strong> different objects can respond to the same action in their own way. <em>speak()</em> makes a dog bark and a cat meow.</li>
                           </ul>`
                },
                {
                    heading: 'Not every language is for programming',
                    body: `<p><strong>HTML</strong> is a <strong>markup language</strong>: it labels the <em>structure</em> of a web page (headings, paragraphs, images, buttons). It has no logic like loops or math.</p>
                           <p><strong>CSS</strong> is a <strong>style sheet language</strong>: it controls how that structure <em>looks</em> (colors, fonts, layout, animations).</p>
                           <p><strong>JavaScript</strong> is the <strong>programming language</strong> of the web: it makes pages <em>interactive</em>.</p>
                           <p>Together they're the three layers of every website: <strong>structure, style, behavior</strong>. This app is built with all three!</p>`
                },
                {
                    heading: 'Popular languages: the web',
                    body: `<div class="lang-card"><h4>HTML</h4><p><span class="tag">Markup</span> <span class="tag">Not a programming language</span></p><p>Structures web pages. Every website uses it.</p></div>
                           <div class="lang-card"><h4>CSS</h4><p><span class="tag">Style sheet</span> <span class="tag">Not a programming language</span></p><p>Styles web pages: colors, fonts, layouts, animations.</p></div>
                           <div class="lang-card"><h4>JavaScript</h4><p><span class="tag">Interpreted (JIT)</span> <span class="tag">Dynamic</span> <span class="tag">Weak</span> <span class="tag">Multi-paradigm</span></p><p>Makes websites interactive. Also runs servers (Node.js) and mobile and desktop apps.</p></div>`
                },
                {
                    heading: 'Popular languages: the C family',
                    body: `<div class="lang-card"><h4>C</h4><p><span class="tag">Compiled</span> <span class="tag">Static</span> <span class="tag">Weak</span> <span class="tag">Procedural</span></p><p>Fast and close to the hardware. Used for operating systems, embedded devices, and other languages' engines.</p></div>
                           <div class="lang-card"><h4>C++</h4><p><span class="tag">Compiled</span> <span class="tag">Static</span> <span class="tag">Weak</span> <span class="tag">OOP + procedural</span></p><p>C with classes and more. Used for game engines, browsers, and high-performance software.</p></div>
                           <div class="lang-card"><h4>C#</h4><p><span class="tag">Bytecode (.NET)</span> <span class="tag">Static</span> <span class="tag">Strong</span> <span class="tag">OOP</span></p><p>Microsoft's language. Used for Unity games, Windows apps, and web backends.</p></div>`
                },
                {
                    heading: 'Popular languages: Java & Python',
                    body: `<div class="lang-card"><h4>Java</h4><p><span class="tag">Bytecode (JVM)</span> <span class="tag">Static</span> <span class="tag">Strong</span> <span class="tag">OOP</span></p><p>"Write once, run anywhere." Used for Android apps, large business systems, and Minecraft.</p></div>
                           <div class="lang-card"><h4>Python</h4><p><span class="tag">Interpreted</span> <span class="tag">Dynamic</span> <span class="tag">Strong</span> <span class="tag">Multi-paradigm</span></p><p>Simple, readable syntax. Used for AI, data science, automation, and web backends. A favorite first language.</p></div>`
                },
                {
                    heading: 'Key takeaway',
                    body: `<p class="takeaway">Languages differ in how they run, how strict they are about types, and how they organize code. Pick the one that fits the job.</p>
                           <p>Ready to test what you learned?</p>`
                }
            ],
            quiz: [
                {
                    q: 'Which of these is a markup language, not a programming language?',
                    choices: ['Python', 'HTML', 'Java', 'C'],
                    answer: 1
                },
                {
                    q: 'In Python, "5" + 1 causes an error. What does this show?',
                    choices: ['Python is weakly typed', 'Python is compiled', 'Python is strongly typed', 'Python is procedural only'],
                    answer: 2
                },
                {
                    q: 'In OOP, what is a class?',
                    choices: ['A blueprint for creating objects', 'A type of loop', 'A compiled file', 'A web page layout'],
                    answer: 0
                },
                {
                    q: 'Which language is mainly used to build games in Unity?',
                    choices: ['HTML', 'Python', 'C', 'C#'],
                    answer: 3
                }
            ]
        },
        {
            id: 'cs-3',
            title: 'General Language Syntax',
            xp: 50,
            pages: [
                {
                    heading: 'What is syntax?',
                    body: `<p><strong>Syntax</strong> is the set of rules for how code must be written, like grammar and punctuation for a programming language.</p>
                           <p>Break the rules and you get a <strong>syntax error</strong>: the computer can't understand your code, so it won't run.</p>
                           <p>The good news: most languages share the same core building blocks. Learn them once, and every new language is mostly new spelling.</p>`
                },
                {
                    heading: 'Variables & data types',
                    body: `<p>A <strong>variable</strong> is a named box that stores a value. The common <strong>data types</strong> are:</p>
                           <ul>
                             <li><strong>Integer:</strong> whole numbers, like 42</li>
                             <li><strong>Float / double:</strong> decimals, like 3.14</li>
                             <li><strong>String:</strong> text, like "hello"</li>
                             <li><strong>Boolean:</strong> true or false</li>
                           </ul>
                           <pre class="code">name = "Ada"           # Python
let name = "Ada";      // JavaScript
String name = "Ada";   // Java</pre>`
                },
                {
                    heading: 'Operators',
                    body: `<ul>
                             <li><strong>Arithmetic:</strong> <code>+  -  *  /</code> and <code>%</code> (remainder: 7 % 3 is 1)</li>
                             <li><strong>Assignment:</strong> <code>=</code> puts a value in a variable</li>
                             <li><strong>Comparison:</strong> <code>==</code> (equal), <code>!=</code> (not equal), <code>&lt;  &gt;  &lt;=  &gt;=</code></li>
                             <li><strong>Logical:</strong> <code>&amp;&amp;</code> (and), <code>||</code> (or), <code>!</code> (not). Python spells them <code>and</code>, <code>or</code>, <code>not</code>.</li>
                           </ul>
                           <p><strong>Watch out:</strong> <code>=</code> <em>sets</em> a value, while <code>==</code> <em>compares</em> two values. Mixing them up is one of the most common beginner bugs.</p>`
                },
                {
                    heading: 'Conditionals: making decisions',
                    body: `<p><strong>if / else</strong> runs different code depending on whether something is true.</p>
                           <pre class="code">// JavaScript: braces { } mark the block
if (score >= 90) {
    console.log("A");
} else {
    console.log("Keep going!");
}</pre>
                           <pre class="code"># Python: indentation marks the block
if score >= 90:
    print("A")
else:
    print("Keep going!")</pre>`
                },
                {
                    heading: 'Loops: repeating work',
                    body: `<p>A <strong>for</strong> loop repeats a set number of times. A <strong>while</strong> loop repeats as long as a condition is true.</p>
                           <pre class="code">// JavaScript: prints 0, 1, 2
for (let i = 0; i &lt; 3; i++) {
    console.log(i);
}</pre>
                           <pre class="code"># Python: prints 0, 1, 2
for i in range(3):
    print(i)

count = 3
while count > 0:
    count = count - 1</pre>`
                },
                {
                    heading: 'Functions: reusable code',
                    body: `<p>A <strong>function</strong> is a named block of code you can run again and again. It can take inputs (<strong>parameters</strong>) and give back a result with <strong>return</strong>.</p>
                           <pre class="code">// JavaScript
function add(a, b) {
    return a + b;
}
add(2, 3);   // 5</pre>
                           <pre class="code"># Python
def add(a, b):
    return a + b

add(2, 3)    # 5</pre>`
                },
                {
                    heading: 'Keywords & comments',
                    body: `<p><strong>Keywords</strong> are reserved words with a special meaning. You can't use them as variable names. Many appear in almost every language:</p>
                           <p><span class="tag">if</span> <span class="tag">else</span> <span class="tag">for</span> <span class="tag">while</span> <span class="tag">return</span> <span class="tag">class</span> <span class="tag">true / false</span> <span class="tag">break</span> <span class="tag">import</span></p>
                           <p><strong>Comments</strong> are notes for humans that the computer ignores:</p>
                           <pre class="code">// one line in JavaScript, Java, C, C++, C#
/* several lines */
# one line in Python</pre>`
                },
                {
                    heading: 'Classes & objects',
                    body: `<p>In OOP languages, a <strong>class</strong> is a blueprint, and an <strong>object</strong> is one thing built from it.</p>
                           <pre class="code"># Python
class Pet:
    def __init__(self, name):
        self.name = name

    def speak(self):
        print(self.name + " says hi!")

capy = Pet("Capybara")
capy.speak()   # Capybara says hi!</pre>
                           <p><code>__init__</code> sets up a new object, and <code>self</code> means "this object".</p>`
                },
                {
                    heading: 'Key takeaway',
                    body: `<p class="takeaway">Variables, operators, conditionals, loops, functions, and classes are the building blocks of nearly every language. Only the spelling changes.</p>
                           <p>Ready to test what you learned?</p>`
                }
            ],
            quiz: [
                {
                    q: 'What happens when code breaks a language\'s syntax rules?',
                    choices: ['It runs slower', 'A syntax error stops it from running', 'It deletes itself', 'It runs normally'],
                    answer: 1
                },
                {
                    q: 'What is the difference between = and ==?',
                    choices: ['There is no difference', '== sets a value, = compares', '= sets a value, == compares', 'Both are for math'],
                    answer: 2
                },
                {
                    q: 'What does Python use to mark a block of code instead of braces { }?',
                    choices: ['Indentation', 'Semicolons', 'Parentheses', 'Keywords'],
                    answer: 0
                },
                {
                    q: 'Which keyword sends a result back from a function?',
                    choices: ['break', 'class', 'import', 'return'],
                    answer: 3
                }
            ]
        },
        {
            id: 'cs-4',
            title: 'Choose Your Language',
            xp: 50,
            pickPrompt: 'Which language do you want to learn?',
            pickVerb: 'Learn',
            infoHeading: 'Used for:',
            options: LANGUAGES
        }
    ],

    physics: [
        {
            id: 'physics-1',
            title: 'What is Physics?',
            xp: 50,
            pages: [
                {
                    heading: 'What is it?',
                    body: `<p>Physics is the study of <strong>matter, energy, motion, and forces</strong>, and how they interact across space and time.</p>
                           <p>It asks the most basic questions about the universe: Why do things fall? What is light? What are atoms made of? How did the universe begin?</p>
                           <p>Physicists answer these questions by <strong>observing</strong>, running <strong>experiments</strong>, and describing what they find with <strong>mathematical laws</strong>.</p>`
                },
                {
                    heading: 'What is it used for?',
                    body: `<ul>
                             <li><strong>Engineering:</strong> designing cars, planes, bridges, and roller coasters that are safe</li>
                             <li><strong>Electronics:</strong> phones, computers, and screens all rely on how electricity and materials behave</li>
                             <li><strong>Energy:</strong> solar panels, wind turbines, batteries, and power plants</li>
                             <li><strong>Medicine:</strong> X-rays, MRI scans, and radiation therapy for cancer</li>
                             <li><strong>Space:</strong> launching satellites, landing rovers on Mars, and GPS navigation</li>
                           </ul>`
                },
                {
                    heading: 'Where does it overlap?',
                    body: `<p>Physics is often called the <strong>most fundamental science</strong>, because other sciences build on it.</p>
                           <p><strong>Chemistry</strong> explains reactions using the physics of atoms, <strong>biology</strong> uses it to understand how muscles and nerves work, and <strong>astronomy</strong> is physics applied to stars and galaxies.</p>
                           <p>It also depends heavily on <strong>math</strong> to describe its laws, and on <strong>computer science</strong> to run simulations too complex to solve by hand.</p>`
                },
                {
                    heading: 'A crash course in history',
                    body: `<ul class="timeline">
                             <li><span>~350 BCE</span> Aristotle tries to explain motion and the heavens using reasoning, though many of his ideas were later proven wrong.</li>
                             <li><span>~250 BCE</span> Archimedes discovers the principle of <strong>buoyancy</strong> (why things float) and the law of the lever.</li>
                             <li><span>~1021 CE</span> Ibn al-Haytham writes the <em>Book of Optics</em>, explaining how we see and championing testing ideas with <strong>experiments</strong>.</li>
                             <li><span>Early 1600s</span> Galileo studies falling objects and points a telescope at the sky, discovering moons around Jupiter.</li>
                             <li><span>1687</span> Isaac Newton publishes his <strong>laws of motion</strong> and the law of <strong>universal gravitation</strong>.</li>
                             <li><span>1860s</span> James Clerk Maxwell unites electricity, magnetism, and light into one theory of <strong>electromagnetism</strong>.</li>
                             <li><span>1905–1920s</span> Einstein's <strong>relativity</strong> changes our ideas of space and time, and <strong>quantum mechanics</strong> explains the world of atoms.</li>
                             <li><span>Today</span> Physicists probe particles at CERN, detect gravitational waves, and develop quantum computers.</li>
                           </ul>`
                },
                {
                    heading: 'Key takeaway',
                    body: `<p class="takeaway">Physics explains how everything in the universe moves and interacts, from the tiniest particles to the largest galaxies.</p>
                           <p>Ready to test what you learned?</p>`
                }
            ],
            quiz: [
                {
                    q: 'What does physics study?',
                    choices: ['Only planets and stars', 'Living organisms', 'Matter, energy, motion, and forces', 'Chemical reactions only'],
                    answer: 2
                },
                {
                    q: 'Who published the laws of motion and universal gravitation in 1687?',
                    choices: ['Galileo', 'Isaac Newton', 'Albert Einstein', 'Archimedes'],
                    answer: 1
                },
                {
                    q: 'What did Archimedes discover about why things float?',
                    choices: ['Buoyancy', 'Gravity waves', 'Electromagnetism', 'Relativity'],
                    answer: 0
                }
            ]
        },
        ...PHYSICS_MODULES
    ],

    biology: [
        {
            id: 'biology-1',
            title: 'What is Biology?',
            xp: 50,
            pages: [
                {
                    heading: 'What is it?',
                    body: `<p>Biology is the study of <strong>life and living things</strong>: how they are built, how they work, how they grow and reproduce, and how they interact with each other and their environment.</p>
                           <p>It covers everything from tiny <strong>cells</strong> and <strong>DNA</strong> to whole <strong>ecosystems</strong> like rainforests and coral reefs.</p>
                           <p>All living things share some features: they are made of cells, use energy, grow, respond to their surroundings, and pass traits to their offspring.</p>`
                },
                {
                    heading: 'What is it used for?',
                    body: `<ul>
                             <li><strong>Medicine:</strong> understanding diseases, developing vaccines and treatments</li>
                             <li><strong>Food &amp; farming:</strong> growing healthier crops and raising animals sustainably</li>
                             <li><strong>Environment:</strong> protecting endangered species and studying climate change</li>
                             <li><strong>Genetics:</strong> DNA testing, tracing ancestry, and treating inherited conditions</li>
                             <li><strong>Biotechnology:</strong> using living cells to make insulin, biofuels, and new materials</li>
                           </ul>`
                },
                {
                    heading: 'Where does it overlap?',
                    body: `<p>Biology connects with almost every science.</p>
                           <p><strong>Chemistry</strong> explains the reactions inside cells (biochemistry), <strong>physics</strong> explains how hearts pump and nerves send signals, and <strong>math and computer science</strong> help analyze DNA and model how diseases spread (bioinformatics).</p>
                           <p>It also shapes fields like <strong>psychology</strong>, <strong>nutrition</strong>, and <strong>ecology</strong>.</p>`
                },
                {
                    heading: 'A crash course in history',
                    body: `<ul class="timeline">
                             <li><span>~350 BCE</span> Aristotle observes and classifies hundreds of animals, one of the first attempts to organize life.</li>
                             <li><span>1665</span> Robert Hooke looks at cork under a microscope and names the tiny compartments <strong>cells</strong>.</li>
                             <li><span>1670s</span> Antonie van Leeuwenhoek sees living <strong>microorganisms</strong> for the first time.</li>
                             <li><span>1859</span> Charles Darwin publishes <em>On the Origin of Species</em>, explaining <strong>evolution by natural selection</strong>.</li>
                             <li><span>1866</span> Gregor Mendel's pea plant experiments reveal the rules of <strong>heredity</strong>.</li>
                             <li><span>1928</span> Alexander Fleming discovers <strong>penicillin</strong>, the first widely used antibiotic.</li>
                             <li><span>1953</span> Using Rosalind Franklin's X-ray images, Watson and Crick describe the <strong>double helix</strong> structure of DNA.</li>
                             <li><span>Today</span> The human genome has been mapped, and tools like CRISPR let scientists edit genes.</li>
                           </ul>`
                },
                {
                    heading: 'Key takeaway',
                    body: `<p class="takeaway">Biology helps us understand life itself, from the cells inside you to every living thing on Earth.</p>
                           <p>Ready to test what you learned?</p>`
                }
            ],
            quiz: [
                {
                    q: 'What is the basic unit that all living things are made of?',
                    choices: ['Atoms only', 'Cells', 'Organs', 'Molecules of water'],
                    answer: 1
                },
                {
                    q: 'Who explained evolution by natural selection in 1859?',
                    choices: ['Gregor Mendel', 'Robert Hooke', 'Charles Darwin', 'Alexander Fleming'],
                    answer: 2
                },
                {
                    q: 'What did Alexander Fleming discover in 1928?',
                    choices: ['Penicillin', 'The structure of DNA', 'Cells', 'Microorganisms'],
                    answer: 0
                }
            ]
        },
        ...BIOLOGY_MODULES
    ],

    chemistry: [
        {
            id: 'chemistry-1',
            title: 'What is Chemistry?',
            xp: 50,
            pages: [
                {
                    heading: 'What is it?',
                    body: `<p>Chemistry is the study of <strong>matter</strong>: what things are made of, how they are put together, and how they <strong>change</strong> when they react with each other.</p>
                           <p>Everything around you, including air, water, food, and your own body, is made of <strong>atoms</strong> joined into <strong>molecules</strong>.</p>
                           <p>Chemists study how atoms bond, break apart, and rearrange to form new substances.</p>`
                },
                {
                    heading: 'What is it used for?',
                    body: `<ul>
                             <li><strong>Cooking:</strong> baking, browning, and fermenting are all chemical reactions</li>
                             <li><strong>Medicine:</strong> designing and making drugs, from pain relievers to vaccines</li>
                             <li><strong>Materials:</strong> plastics, fabrics, glass, and the metals in your phone</li>
                             <li><strong>Energy:</strong> batteries, fuels, and solar cells</li>
                             <li><strong>Environment:</strong> cleaning water, measuring pollution, and recycling</li>
                           </ul>`
                },
                {
                    heading: 'Where does it overlap?',
                    body: `<p>Chemistry is called the <strong>central science</strong> because it links physics and biology.</p>
                           <p>It uses <strong>physics</strong> to explain how atoms behave, and it explains the <strong>biology</strong> of digestion, breathing, and DNA (biochemistry).</p>
                           <p>It also overlaps with <strong>geology</strong> (minerals and rocks), <strong>medicine</strong> (pharmacology), and <strong>engineering</strong> (materials science).</p>`
                },
                {
                    heading: 'A crash course in history',
                    body: `<ul class="timeline">
                             <li><span>~400 BCE</span> Greek thinkers like Democritus suggest that everything is made of tiny, uncuttable pieces called <strong>atoms</strong>.</li>
                             <li><span>~800 CE</span> Jabir ibn Hayyan and other alchemists develop lab techniques like <strong>distillation</strong> and crystallization.</li>
                             <li><span>1661</span> Robert Boyle's <em>The Sceptical Chymist</em> pushes chemistry toward careful experiments.</li>
                             <li><span>1789</span> Antoine Lavoisier shows that mass is <strong>conserved</strong> in reactions and helps name oxygen and hydrogen.</li>
                             <li><span>1808</span> John Dalton proposes a modern <strong>atomic theory</strong>.</li>
                             <li><span>1869</span> Dmitri Mendeleev creates the <strong>periodic table</strong>, even predicting elements not yet discovered.</li>
                             <li><span>1898</span> Marie and Pierre Curie discover the radioactive elements <strong>polonium</strong> and <strong>radium</strong>.</li>
                             <li><span>Today</span> Chemists design new medicines, better batteries, and materials like graphene.</li>
                           </ul>`
                },
                {
                    heading: 'Key takeaway',
                    body: `<p class="takeaway">Chemistry explains what everything is made of and how one substance can turn into another.</p>
                           <p>Ready to test what you learned?</p>`
                }
            ],
            quiz: [
                {
                    q: 'What does chemistry mainly study?',
                    choices: ['Matter and how it changes', 'Only living things', 'The motion of planets', 'Computer programs'],
                    answer: 0
                },
                {
                    q: 'Who created the periodic table in 1869?',
                    choices: ['John Dalton', 'Marie Curie', 'Antoine Lavoisier', 'Dmitri Mendeleev'],
                    answer: 3
                },
                {
                    q: 'Why is chemistry called the "central science"?',
                    choices: ['It was the first science', 'It links physics and biology', 'It is studied in the center of a lab', 'It only uses the periodic table'],
                    answer: 1
                }
            ]
        },
        ...CHEMISTRY_MODULES
    ]
};
