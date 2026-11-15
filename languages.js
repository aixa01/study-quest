// CS Module 4: one mini-lesson per language. The player picks one to learn.
// `purpose` and `apps` show in the info panel when hovering a language.
// In `body` HTML, write < as &lt; inside code samples.

export const LANGUAGES = [
    {
        id: 'html',
        name: 'HTML',
        tags: ['Markup', 'Not a programming language'],
        purpose: 'Gives web pages their structure: headings, paragraphs, images, links, and buttons.',
        apps: ['Every website', 'Emails', 'Web apps (with CSS and JavaScript)'],
        pages: [
            {
                heading: 'Tags & elements',
                body: `<p>HTML marks up content with <strong>tags</strong> in angle brackets. Most come in pairs: an opening tag and a closing tag with a slash.</p>
                       <pre class="code">&lt;h1>Welcome!&lt;/h1>
&lt;p>This is a paragraph.&lt;/p></pre>
                       <p>A tag plus its content is called an <strong>element</strong>. Elements can be <strong>nested</strong> inside each other, like boxes inside boxes.</p>`
            },
            {
                heading: 'Page skeleton (boilerplate)',
                body: `<p>Every HTML page starts with the same basic structure:</p>
                       <pre class="code">&lt;!DOCTYPE html>
&lt;html>
  &lt;head>
    &lt;title>My Page&lt;/title>
  &lt;/head>
  &lt;body>
    &lt;h1>Hello, World!&lt;/h1>
  &lt;/body>
&lt;/html></pre>
                       <p><strong>&lt;head></strong> holds information about the page (title, styles). <strong>&lt;body></strong> holds everything you see.</p>`
            },
            {
                heading: 'Common tags',
                body: `<ul>
                         <li><code>&lt;h1></code> to <code>&lt;h6></code>: headings, from biggest to smallest</li>
                         <li><code>&lt;p></code>: paragraph</li>
                         <li><code>&lt;a></code>: link</li>
                         <li><code>&lt;img></code>: image (no closing tag)</li>
                         <li><code>&lt;ul></code> / <code>&lt;li></code>: bulleted list and its items</li>
                         <li><code>&lt;div></code>: a generic box for grouping</li>
                         <li><code>&lt;button></code>, <code>&lt;input></code>: things users click and type in</li>
                       </ul>`
            },
            {
                heading: 'Attributes',
                body: `<p><strong>Attributes</strong> add extra information inside the opening tag, written as <code>name="value"</code>.</p>
                       <pre class="code">&lt;a href="https://example.com">Visit&lt;/a>
&lt;img src="capybara.png" alt="A capybara">
&lt;div id="menu" class="box">...&lt;/div></pre>
                       <p><code>href</code> is where a link goes, <code>src</code> is an image's file, <code>alt</code> describes it for screen readers, and <code>id</code> / <code>class</code> let CSS and JavaScript find the element.</p>`
            }
        ],
        quiz: [
            { q: 'Which tag creates a paragraph?', choices: ['<h1>', '<p>', '<a>', '<div>'], answer: 1 },
            { q: 'Which attribute tells a link where to go?', choices: ['src', 'alt', 'href', 'id'], answer: 2 },
            { q: 'Where does the visible content of a page go?', choices: ['<body>', '<head>', '<title>', '<!DOCTYPE>'], answer: 0 }
        ]
    },
    {
        id: 'css',
        name: 'CSS',
        tags: ['Style sheet', 'Not a programming language'],
        purpose: 'Controls how web pages look: colors, fonts, spacing, layouts, and animations.',
        apps: ['Website design', 'Responsive layouts for phones', 'UI animations'],
        pages: [
            {
                heading: 'Rules: selector + declarations',
                body: `<p>CSS is a list of <strong>rules</strong>. Each rule picks elements with a <strong>selector</strong>, then sets <strong>properties</strong>:</p>
                       <pre class="code">h1 {
  color: purple;
  font-size: 32px;
}</pre>
                       <p>Each line inside the braces is a <strong>declaration</strong>: <code>property: value;</code>. Don't forget the colon and semicolon!</p>`
            },
            {
                heading: 'Selectors',
                body: `<pre class="code">p { }          /* every &lt;p> element */
.card { }      /* elements with class="card" */
#menu { }      /* the element with id="menu" */
nav a { }      /* links inside a &lt;nav> */
button:hover { } /* a button while the mouse is over it */</pre>
                       <p>A dot <code>.</code> means class and a hash <code>#</code> means id.</p>`
            },
            {
                heading: 'The box model',
                body: `<p>Every element is a box with four layers, from inside out:</p>
                       <ul>
                         <li><strong>Content:</strong> the text or image</li>
                         <li><strong>Padding:</strong> space inside the border</li>
                         <li><strong>Border:</strong> the outline</li>
                         <li><strong>Margin:</strong> space outside, pushing other boxes away</li>
                       </ul>
                       <pre class="code">.card {
  padding: 16px;
  border: 2px solid black;
  margin: 8px;
}</pre>`
            },
            {
                heading: 'Layout with Flexbox',
                body: `<p><strong>Flexbox</strong> lines up items in a row or column and spaces them out:</p>
                       <pre class="code">.toolbar {
  display: flex;
  justify-content: space-between; /* spread along the row */
  align-items: center;            /* center vertically */
  gap: 10px;
}</pre>
                       <p>For full page grids, CSS also has <code>display: grid</code>.</p>`
            }
        ],
        quiz: [
            { q: 'Which selector targets elements with class="card"?', choices: ['#card', 'card', '.card', '*card'], answer: 2 },
            { q: 'In the box model, what is the space outside the border called?', choices: ['Margin', 'Padding', 'Content', 'Gap'], answer: 0 },
            { q: 'Which declaration is written correctly?', choices: ['color = red', 'color: red;', 'color(red)', 'color -> red'], answer: 1 }
        ]
    },
    {
        id: 'javascript',
        name: 'JavaScript',
        tags: ['Interpreted (JIT)', 'Dynamic', 'Weak', 'Multi-paradigm'],
        purpose: 'The programming language of the web. It makes pages interactive and also runs servers.',
        apps: ['Interactive websites', 'Web servers (Node.js)', 'Mobile & desktop apps', 'Browser games'],
        pages: [
            {
                heading: 'Hello, World',
                body: `<pre class="code">console.log("Hello, World!");</pre>
                       <p><code>console.log</code> prints to the browser's developer console. Statements usually end with a semicolon <code>;</code>.</p>
                       <p>JavaScript runs right in your browser, so you can try it now: right-click a page, choose <strong>Inspect</strong>, open the <strong>Console</strong> tab, and type the line above.</p>`
            },
            {
                heading: 'Variables',
                body: `<pre class="code">let score = 0;          // can change later
const name = "Ada";     // can't be reassigned
score = score + 10;

let isWinner = true;
let pets = ["capybara", "duck"];       // array (list)
let player = { name: "Ada", level: 2 }; // object</pre>
                       <p>Use <strong>const</strong> by default and <strong>let</strong> when the value changes. You'll see the old keyword <strong>var</strong> in older code.</p>`
            },
            {
                heading: 'Decisions & loops',
                body: `<pre class="code">if (score >= 100) {
  console.log("Level up!");
} else if (score > 50) {
  console.log("Halfway there");
} else {
  console.log("Keep going");
}

for (let i = 0; i &lt; pets.length; i++) {
  console.log(pets[i]);
}</pre>
                       <p>Use <code>===</code> to compare. It checks value <em>and</em> type, avoiding weak-typing surprises.</p>`
            },
            {
                heading: 'Functions & the page',
                body: `<pre class="code">function greet(name) {
  return "Hi, " + name + "!";
}

const double = (n) => n * 2;   // arrow function

document.getElementById("login-btn")
  .addEventListener("click", () => {
    alert(greet("Ada"));
  });</pre>
                       <p><code>document</code> lets JavaScript find and change HTML, and <code>addEventListener</code> runs code when something happens, like a click.</p>`
            },
            {
                heading: 'Keywords to know',
                body: `<p><span class="tag">let</span> <span class="tag">const</span> <span class="tag">function</span> <span class="tag">return</span> <span class="tag">if</span> <span class="tag">else</span> <span class="tag">for</span> <span class="tag">while</span> <span class="tag">class</span> <span class="tag">new</span> <span class="tag">this</span> <span class="tag">true / false</span> <span class="tag">null</span> <span class="tag">undefined</span> <span class="tag">async / await</span> <span class="tag">import / export</span></p>
                       <p><strong>null</strong> means "intentionally empty", and <strong>undefined</strong> means "never given a value". <strong>async / await</strong> handle tasks that take time, like loading data from a server.</p>`
            }
        ],
        quiz: [
            { q: 'Which keyword declares a variable that can\'t be reassigned?', choices: ['let', 'var', 'const', 'fixed'], answer: 2 },
            { q: 'Which operator compares both value and type?', choices: ['===', '=', '==', '=>'], answer: 0 },
            { q: 'What does console.log("Hi") do?', choices: ['Creates a variable', 'Prints Hi to the console', 'Opens a popup', 'Deletes the page'], answer: 1 }
        ]
    },
    {
        id: 'python',
        name: 'Python',
        tags: ['Interpreted', 'Dynamic', 'Strong', 'Multi-paradigm'],
        purpose: 'A simple, readable language that is great for beginners and powerful for experts.',
        apps: ['AI & machine learning', 'Data science', 'Automation scripts', 'Web backends'],
        pages: [
            {
                heading: 'Hello, World',
                body: `<pre class="code">print("Hello, World!")</pre>
                       <p>That's a whole program! Python has no semicolons and no braces. It's designed to read almost like English.</p>`
            },
            {
                heading: 'Variables & types',
                body: `<pre class="code">name = "Ada"          # str (text)
level = 2             # int
xp = 75.5             # float
is_winner = True      # bool (capital T!)
pets = ["capybara", "duck"]           # list
player = {"name": "Ada", "level": 2}  # dict</pre>
                       <p>No type declarations needed. Python names variables in <strong>snake_case</strong>, and <code>#</code> starts a comment.</p>`
            },
            {
                heading: 'Indentation is the law',
                body: `<p>Python uses a colon <code>:</code> and <strong>indentation</strong> (usually 4 spaces) to mark blocks:</p>
                       <pre class="code">if xp >= 100:
    print("Level up!")
elif xp > 50:
    print("Halfway there")
else:
    print("Keep going")

for pet in pets:
    print(pet)</pre>
                       <p>Wrong indentation causes an <strong>IndentationError</strong>. Note the keyword <code>elif</code> (else if).</p>`
            },
            {
                heading: 'Functions & classes',
                body: `<pre class="code">def greet(name):
    return f"Hi, {name}!"

print(greet("Ada"))   # Hi, Ada!

class Pet:
    def __init__(self, name):
        self.name = name

capy = Pet("Capybara")</pre>
                       <p><code>def</code> defines a function. An <strong>f-string</strong> (<code>f"..."</code>) drops variables into text with <code>{ }</code>.</p>`
            },
            {
                heading: 'Keywords to know',
                body: `<p><span class="tag">def</span> <span class="tag">return</span> <span class="tag">if / elif / else</span> <span class="tag">for</span> <span class="tag">while</span> <span class="tag">in</span> <span class="tag">and / or / not</span> <span class="tag">True / False</span> <span class="tag">None</span> <span class="tag">class</span> <span class="tag">import</span> <span class="tag">try / except</span></p>
                       <p><strong>None</strong> means "no value". <strong>import</strong> loads libraries, like <code>import math</code>. <strong>try / except</strong> catches errors so your program doesn't crash.</p>`
            }
        ],
        quiz: [
            { q: 'Which keyword defines a function in Python?', choices: ['function', 'def', 'func', 'define'], answer: 1 },
            { q: 'How does Python mark a block of code?', choices: ['Braces { }', 'Semicolons', 'A colon and indentation', 'begin / end'], answer: 2 },
            { q: 'Which is Python\'s "else if"?', choices: ['elif', 'else if', 'elseif', 'otherwise'], answer: 0 }
        ]
    },
    {
        id: 'java',
        name: 'Java',
        tags: ['Bytecode (JVM)', 'Static', 'Strong', 'OOP'],
        purpose: '"Write once, run anywhere." A reliable, object-oriented language that runs on any device with a Java Virtual Machine.',
        apps: ['Android apps', 'Large business systems', 'Backend servers', 'Minecraft'],
        pages: [
            {
                heading: 'Hello, World',
                body: `<pre class="code">public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}</pre>
                       <p>In Java, <strong>all code lives inside a class</strong>. The program starts at the <code>main</code> method. <code>System.out.println</code> prints a line.</p>`
            },
            {
                heading: 'Variables & types',
                body: `<pre class="code">String name = "Ada";
int level = 2;
double xp = 75.5;
boolean isWinner = true;
int[] scores = {90, 85, 100};   // array</pre>
                       <p>Every variable needs a <strong>declared type</strong> (static typing). Every statement ends with a semicolon. Names use <strong>camelCase</strong>.</p>`
            },
            {
                heading: 'Decisions & loops',
                body: `<pre class="code">if (xp >= 100) {
    System.out.println("Level up!");
} else {
    System.out.println("Keep going");
}

for (int i = 0; i &lt; 3; i++) {
    System.out.println(i);
}

for (int s : scores) {   // "for each"
    System.out.println(s);
}</pre>`
            },
            {
                heading: 'Classes & objects',
                body: `<pre class="code">public class Pet {
    private String name;          // hidden data

    public Pet(String name) {     // constructor
        this.name = name;
    }

    public void speak() {
        System.out.println(name + " says hi!");
    }
}

Pet capy = new Pet("Capybara");
capy.speak();</pre>
                       <p><code>private</code> hides data (encapsulation), <code>new</code> creates an object, and <code>void</code> means a method returns nothing.</p>`
            },
            {
                heading: 'Keywords to know',
                body: `<p><span class="tag">public / private</span> <span class="tag">class</span> <span class="tag">static</span> <span class="tag">void</span> <span class="tag">new</span> <span class="tag">this</span> <span class="tag">return</span> <span class="tag">extends</span> <span class="tag">interface</span> <span class="tag">import</span> <span class="tag">int / double / boolean</span> <span class="tag">null</span></p>
                       <p><strong>extends</strong> makes a class inherit from another (inheritance). <strong>static</strong> means something belongs to the class itself, not to one object.</p>`
            }
        ],
        quiz: [
            { q: 'Where does a Java program start running?', choices: ['The first line', 'The main method', 'The constructor', 'Any class'], answer: 1 },
            { q: 'Which keyword creates a new object?', choices: ['make', 'class', 'this', 'new'], answer: 3 },
            { q: 'Which keyword lets a class inherit from another?', choices: ['extends', 'inherits', 'import', 'super'], answer: 0 }
        ]
    },
    {
        id: 'c',
        name: 'C',
        tags: ['Compiled', 'Static', 'Weak', 'Procedural'],
        purpose: 'A fast, low-level language that works close to the hardware and manages memory directly.',
        apps: ['Operating systems (Linux, Windows kernels)', 'Embedded devices & microcontrollers', 'Engines of other languages'],
        pages: [
            {
                heading: 'Hello, World',
                body: `<pre class="code">#include &lt;stdio.h>

int main(void) {
    printf("Hello, World!\\n");
    return 0;
}</pre>
                       <p><code>#include</code> loads a library (stdio = standard input/output). <code>printf</code> prints, and <code>\\n</code> starts a new line. <code>return 0</code> tells the system the program succeeded.</p>`
            },
            {
                heading: 'Variables & types',
                body: `<pre class="code">int level = 2;
float xp = 75.5;
char grade = 'A';          // a single character
int scores[3] = {90, 85, 100};

printf("Level %d\\n", level);   // %d = insert an int</pre>
                       <p>C has no built-in string or boolean type. Text is an array of characters, and true/false are just numbers (0 = false). Placeholders like <code>%d</code>, <code>%f</code>, and <code>%c</code> insert values when printing.</p>`
            },
            {
                heading: 'Decisions, loops & functions',
                body: `<pre class="code">int add(int a, int b) {
    return a + b;
}

int main(void) {
    for (int i = 0; i &lt; 3; i++) {
        if (i == 1) {
            printf("one\\n");
        }
    }
    return add(2, 3);
}</pre>
                       <p>Functions must declare the type they return (<code>int</code>) and the type of each parameter.</p>`
            },
            {
                heading: 'Pointers & memory',
                body: `<p>C's superpower (and danger) is <strong>pointers</strong>: variables that hold a <strong>memory address</strong>.</p>
                       <pre class="code">int x = 10;
int *p = &amp;x;    // p stores x's address
*p = 20;        // change x through the pointer
// now x is 20</pre>
                       <p><code>&amp;</code> means "address of" and <code>*</code> means "value at". C doesn't clean up memory for you, which makes it fast but easy to get wrong.</p>`
            },
            {
                heading: 'Keywords to know',
                body: `<p><span class="tag">int / float / double / char</span> <span class="tag">void</span> <span class="tag">return</span> <span class="tag">if / else</span> <span class="tag">for / while</span> <span class="tag">struct</span> <span class="tag">const</span> <span class="tag">sizeof</span> <span class="tag">#include</span></p>
                       <p><strong>struct</strong> groups related variables together, the closest thing C has to an object. <strong>sizeof</strong> tells you how many bytes something uses in memory.</p>`
            }
        ],
        quiz: [
            { q: 'What does a pointer store?', choices: ['A memory address', 'A string', 'A function name', 'A file'], answer: 0 },
            { q: 'Which function prints text in C?', choices: ['print', 'console.log', 'printf', 'echo'], answer: 2 },
            { q: 'Which C keyword groups related variables together?', choices: ['class', 'struct', 'group', 'object'], answer: 1 }
        ]
    },
    {
        id: 'cpp',
        name: 'C++',
        tags: ['Compiled', 'Static', 'Weak', 'OOP + procedural'],
        purpose: 'C with classes and much more. It gives you high performance plus tools for organizing big programs.',
        apps: ['Game engines (Unreal)', 'Web browsers', 'High-speed trading & simulations', 'Robotics'],
        pages: [
            {
                heading: 'Hello, World',
                body: `<pre class="code">#include &lt;iostream>

int main() {
    std::cout &lt;&lt; "Hello, World!" &lt;&lt; std::endl;
    return 0;
}</pre>
                       <p><code>std::cout</code> is the output stream, and <code>&lt;&lt;</code> sends text into it. <code>std::</code> means these come from the <strong>standard library</strong>.</p>`
            },
            {
                heading: 'Variables & types',
                body: `<pre class="code">#include &lt;string>
#include &lt;vector>

std::string name = "Ada";
int level = 2;
double xp = 75.5;
bool isWinner = true;
std::vector&lt;int> scores = {90, 85, 100};  // resizable list
auto total = level + 1;   // compiler figures out the type</pre>
                       <p>Unlike C, C++ has real <strong>strings</strong>, <strong>bool</strong>, and handy containers like <strong>vector</strong>.</p>`
            },
            {
                heading: 'Classes & objects',
                body: `<pre class="code">class Pet {
public:
    Pet(std::string n) : name(n) {}   // constructor

    void speak() {
        std::cout &lt;&lt; name &lt;&lt; " says hi!\\n";
    }

private:
    std::string name;
};

Pet capy("Capybara");
capy.speak();</pre>
                       <p>Note the semicolon after the class's closing brace. It's a classic C++ gotcha!</p>`
            },
            {
                heading: 'Keywords to know',
                body: `<p><span class="tag">class / struct</span> <span class="tag">public / private</span> <span class="tag">new / delete</span> <span class="tag">auto</span> <span class="tag">const</span> <span class="tag">namespace</span> <span class="tag">template</span> <span class="tag">virtual</span> <span class="tag">bool</span> <span class="tag">#include</span></p>
                       <p><strong>namespace</strong> groups names to avoid clashes (that's what <code>std</code> is). <strong>template</strong> writes code that works for any type. <strong>virtual</strong> enables polymorphism.</p>`
            }
        ],
        quiz: [
            { q: 'Which object prints output in C++?', choices: ['printf only', 'System.out', 'std::cout', 'print()'], answer: 2 },
            { q: 'What does std:: refer to?', choices: ['The standard library namespace', 'A string type', 'A loop', 'A comment'], answer: 0 },
            { q: 'Which keyword lets the compiler figure out a variable\'s type?', choices: ['var', 'auto', 'let', 'type'], answer: 1 }
        ]
    },
    {
        id: 'csharp',
        name: 'C#',
        tags: ['Bytecode (.NET)', 'Static', 'Strong', 'OOP'],
        purpose: 'Microsoft\'s modern, object-oriented language. Similar to Java, with lots of helpful shortcuts.',
        apps: ['Unity games', 'Windows desktop apps', 'Web backends (ASP.NET)', 'Cloud services'],
        pages: [
            {
                heading: 'Hello, World',
                body: `<pre class="code">using System;

class Program {
    static void Main() {
        Console.WriteLine("Hello, World!");
    }
}</pre>
                       <p><code>using</code> imports a namespace. <code>Console.WriteLine</code> prints a line, and the program starts at <code>Main</code> (capital M).</p>`
            },
            {
                heading: 'Variables & types',
                body: `<pre class="code">string name = "Ada";
int level = 2;
double xp = 75.5;
bool isWinner = true;
var pets = new List&lt;string> { "capybara", "duck" };

Console.WriteLine($"{name} is level {level}");</pre>
                       <p><code>var</code> lets the compiler infer the type, but it's still static. The <code>$"..."</code> string lets you drop variables in with <code>{ }</code>.</p>`
            },
            {
                heading: 'Classes & properties',
                body: `<pre class="code">public class Pet {
    public string Name { get; set; }   // property

    public Pet(string name) {
        Name = name;
    }

    public void Speak() {
        Console.WriteLine($"{Name} says hi!");
    }
}

var capy = new Pet("Capybara");
capy.Speak();</pre>
                       <p><strong>Properties</strong> (<code>{ get; set; }</code>) are C#'s tidy way to expose an object's data. Method names use <strong>PascalCase</strong>.</p>`
            },
            {
                heading: 'Keywords to know',
                body: `<p><span class="tag">using</span> <span class="tag">namespace</span> <span class="tag">class</span> <span class="tag">public / private</span> <span class="tag">static</span> <span class="tag">void</span> <span class="tag">var</span> <span class="tag">new</span> <span class="tag">get / set</span> <span class="tag">async / await</span> <span class="tag">foreach</span> <span class="tag">null</span></p>
                       <p><strong>foreach</strong> loops through every item in a list. In <strong>Unity</strong>, your game scripts are C# classes with methods like <code>Start()</code> and <code>Update()</code> that run every frame.</p>`
            }
        ],
        quiz: [
            { q: 'Which line prints text in C#?', choices: ['print("Hi")', 'Console.WriteLine("Hi");', 'cout << "Hi";', 'echo "Hi"'], answer: 1 },
            { q: 'Which popular game engine uses C#?', choices: ['Unity', 'Unreal', 'Godot only', 'Minecraft'], answer: 0 },
            { q: 'What does { get; set; } create in C#?', choices: ['A loop', 'A namespace', 'A property', 'A comment'], answer: 2 }
        ]
    }
];
