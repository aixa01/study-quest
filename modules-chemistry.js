// Chemistry Modules 2–5 (Module 1 lives in modules.js)
// Module 5 has a hover-to-explore periodic table (`grid`) and an Ask Wolfram box.

const ELEMENTS = [
    { number: 1,  label: 'H',  title: 'Hydrogen',   group: 'nonmetal',   category: 'Nonmetal',
      lines: ['The lightest and most abundant element in the universe.', 'Stars like the Sun fuse hydrogen into helium to shine.'] },
    { number: 2,  label: 'He', title: 'Helium',     group: 'noble',      category: 'Noble gas',
      lines: ['Lighter than air, so it makes balloons float.', 'Named after Helios, the Greek Sun god, because it was first spotted in sunlight.'] },
    { number: 3,  label: 'Li', title: 'Lithium',    group: 'alkali',     category: 'Alkali metal',
      lines: ['The lightest metal. It is soft enough to cut with a knife.', 'Powers the lithium-ion battery in your phone.'] },
    { number: 6,  label: 'C',  title: 'Carbon',     group: 'nonmetal',   category: 'Nonmetal',
      lines: ['The backbone of every living thing.', 'Diamonds and pencil graphite are both pure carbon, just arranged differently.'] },
    { number: 7,  label: 'N',  title: 'Nitrogen',   group: 'nonmetal',   category: 'Nonmetal',
      lines: ['Makes up about 78% of the air you breathe.', 'Plants need it to grow, so it is a key ingredient in fertilizer.'] },
    { number: 8,  label: 'O',  title: 'Oxygen',     group: 'nonmetal',   category: 'Nonmetal',
      lines: ['About 21% of the air, and needed by your cells to release energy.', 'The most abundant element in Earth\'s crust (mostly locked in rocks).'] },
    { number: 10, label: 'Ne', title: 'Neon',       group: 'noble',      category: 'Noble gas',
      lines: ['Glows bright red-orange when electricity passes through it.', 'Used in classic glowing "neon" signs.'] },
    { number: 11, label: 'Na', title: 'Sodium',     group: 'alkali',     category: 'Alkali metal',
      lines: ['Reacts violently with water.', 'Its symbol comes from the Latin "natrium". With chlorine, it makes table salt (NaCl).'] },
    { number: 12, label: 'Mg', title: 'Magnesium',  group: 'alkaline',   category: 'Alkaline earth metal',
      lines: ['Burns with a blinding white light, used in fireworks and flares.', 'Sits at the center of chlorophyll, the green molecule in plants.'] },
    { number: 13, label: 'Al', title: 'Aluminum',   group: 'post',       category: 'Post-transition metal',
      lines: ['The most abundant metal in Earth\'s crust.', 'Light and rust-resistant: used in cans, foil, and airplanes.'] },
    { number: 14, label: 'Si', title: 'Silicon',    group: 'metalloid',  category: 'Metalloid',
      lines: ['The main ingredient of sand and glass.', 'Computer chips are made from it, which is how Silicon Valley got its name.'] },
    { number: 15, label: 'P',  title: 'Phosphorus', group: 'nonmetal',   category: 'Nonmetal',
      lines: ['Part of the backbone of DNA and of your bones and teeth.', 'Used on the strips of matchboxes.'] },
    { number: 16, label: 'S',  title: 'Sulfur',     group: 'nonmetal',   category: 'Nonmetal',
      lines: ['A yellow solid found near volcanoes.', 'Its compounds cause the "rotten egg" smell.'] },
    { number: 17, label: 'Cl', title: 'Chlorine',   group: 'halogen',    category: 'Halogen',
      lines: ['A toxic green gas on its own, but it keeps pools and drinking water free of germs.', 'Combined with sodium, it becomes harmless table salt.'] },
    { number: 19, label: 'K',  title: 'Potassium',  group: 'alkali',     category: 'Alkali metal',
      lines: ['Helps your nerves send signals and your muscles contract.', 'Bananas are famous for it. The symbol K comes from the Latin "kalium".'] },
    { number: 20, label: 'Ca', title: 'Calcium',    group: 'alkaline',   category: 'Alkaline earth metal',
      lines: ['Builds strong bones and teeth.', 'Also found in chalk, limestone, and seashells.'] },
    { number: 26, label: 'Fe', title: 'Iron',       group: 'transition', category: 'Transition metal',
      lines: ['Carries oxygen in your blood (inside hemoglobin).', 'The main ingredient of steel, and much of Earth\'s core. The symbol comes from the Latin "ferrum".'] },
    { number: 29, label: 'Cu', title: 'Copper',     group: 'transition', category: 'Transition metal',
      lines: ['Conducts electricity very well, so it is used in almost all wiring.', 'The Statue of Liberty is copper. It turned green as it reacted with air over the years.'] },
    { number: 47, label: 'Ag', title: 'Silver',     group: 'transition', category: 'Transition metal',
      lines: ['The best conductor of electricity of any element.', 'The symbol comes from the Latin "argentum".'] },
    { number: 79, label: 'Au', title: 'Gold',       group: 'transition', category: 'Transition metal',
      lines: ['Almost never rusts or tarnishes, so it stays shiny for thousands of years.', 'Used in electronics and jewelry. The symbol comes from the Latin "aurum".'] }
];

export const CHEMISTRY_MODULES = [
    {
        id: 'chemistry-2',
        title: 'The Branches of Chemistry',
        xp: 50,
        pages: [
            {
                heading: 'Many ways to study matter',
                body: `<p>Chemistry is huge, so chemists specialize in <strong>branches</strong> depending on what kind of matter or question they focus on.</p>
                       <p>For each one, we'll look at <strong>what it studies</strong>, <strong>what it's for</strong>, and <strong>what it's intertwined with</strong>.</p>`
            },
            {
                heading: 'Organic Chemistry',
                body: `<p><strong>Studies:</strong> compounds built around <strong>carbon</strong>. Carbon can form long chains and rings, making millions of different molecules.</p>
                       <p><strong>Purpose:</strong> understanding and creating the molecules of life, plastics, fuels, and medicines.</p>
                       <p><strong>Intertwined with:</strong> biology, medicine (drug design), and materials like nylon and polyester.</p>`
            },
            {
                heading: 'Inorganic Chemistry',
                body: `<p><strong>Studies:</strong> everything that isn't carbon-based: metals, minerals, salts, and crystals.</p>
                       <p><strong>Purpose:</strong> creating catalysts, pigments, and materials for electronics.</p>
                       <p><strong>Intertwined with:</strong> geology, batteries, solar cells, and the semiconductors in computer chips.</p>`
            },
            {
                heading: 'Physical Chemistry',
                body: `<p><strong>Studies:</strong> the physics behind chemistry: energy, heat, and how fast reactions happen.</p>
                       <p><strong>Purpose:</strong> explaining <em>why</em> reactions happen, and how to speed them up or slow them down.</p>
                       <p><strong>Intertwined with:</strong> physics (thermodynamics and quantum mechanics), engineering, and battery design.</p>`
            },
            {
                heading: 'Analytical Chemistry',
                body: `<p><strong>Studies:</strong> how to figure out <strong>what</strong> is in a substance and <strong>how much</strong>.</p>
                       <p><strong>Purpose:</strong> testing and measuring with precision.</p>
                       <p><strong>Intertwined with:</strong> food safety, drug testing for athletes, crime labs, medical blood tests, and pollution monitoring.</p>`
            },
            {
                heading: 'Biochemistry',
                body: `<p><strong>Studies:</strong> the chemical reactions inside living things: how cells turn food into energy, and how DNA and proteins work.</p>
                       <p><strong>Purpose:</strong> understanding life at the molecular level and treating diseases.</p>
                       <p><strong>Intertwined with:</strong> biology, medicine, nutrition, and genetics. It's the bridge between chemistry and biology.</p>`
            },
            {
                heading: 'Other branches',
                body: `<ul>
                         <li><strong>Nuclear chemistry:</strong> radioactive elements, used in nuclear power, cancer treatment, and carbon dating</li>
                         <li><strong>Environmental chemistry:</strong> chemicals in air, water, and soil, used to track pollution and climate change</li>
                         <li><strong>Materials chemistry:</strong> designing new materials, like stronger plastics, better batteries, and graphene</li>
                       </ul>`
            },
            {
                heading: 'Key takeaway',
                body: `<p class="takeaway">From the carbon in your cells to the metals in your phone, each branch of chemistry explains a different kind of matter.</p>
                       <p>Ready to test what you learned?</p>`
            }
        ],
        quiz: [
            { q: 'Which branch of chemistry focuses on carbon-based compounds?', choices: ['Inorganic', 'Organic', 'Nuclear', 'Analytical'], answer: 1 },
            { q: 'Which branch figures out what is in a substance and how much?', choices: ['Analytical', 'Physical', 'Biochemistry', 'Organic'], answer: 0 },
            { q: 'Which branch is the bridge between chemistry and biology?', choices: ['Inorganic', 'Environmental', 'Biochemistry', 'Physical'], answer: 2 }
        ]
    },
    {
        id: 'chemistry-3',
        title: 'Key Concepts of Chemistry',
        xp: 50,
        pages: [
            {
                heading: 'The atom',
                body: `<p>Everything is made of <strong>atoms</strong>. Each one has a tiny center called the <strong>nucleus</strong>, surrounded by a cloud of <strong>electrons</strong>.</p>
                       <ul>
                         <li><strong>Protons</strong> (+) are in the nucleus. Their number, the <strong>atomic number</strong>, decides which element it is.</li>
                         <li><strong>Neutrons</strong> (no charge) are also in the nucleus and add mass</li>
                         <li><strong>Electrons</strong> (−) orbit the nucleus and do the bonding</li>
                       </ul>
                       <p>Example: every carbon atom has <strong>6 protons</strong>. Add one more and it becomes nitrogen.</p>`
            },
            {
                heading: 'The periodic table',
                body: `<p>The periodic table lists all <strong>118</strong> known elements in order of atomic number.</p>
                       <ul>
                         <li><strong>Rows (periods):</strong> each new row adds a new layer of electrons</li>
                         <li><strong>Columns (groups):</strong> elements in the same column behave alike. Group 1 metals all react strongly with water.</li>
                         <li><strong>Metals</strong> are on the left (shiny, conduct electricity), <strong>nonmetals</strong> on the right, and <strong>noble gases</strong> in the last column barely react at all.</li>
                       </ul>`
            },
            {
                heading: 'Chemical bonds',
                body: `<p>Atoms bond to become more stable, usually by getting a full outer layer of electrons.</p>
                       <ul>
                         <li><strong>Ionic bonds:</strong> one atom <em>gives</em> electrons to another, and the opposite charges attract. Example: table salt, <strong>NaCl</strong>.</li>
                         <li><strong>Covalent bonds:</strong> atoms <em>share</em> electrons. Example: water, <strong>H₂O</strong>.</li>
                         <li><strong>Metallic bonds:</strong> metal atoms share a "sea" of electrons, which is why metals conduct electricity.</li>
                       </ul>`
            },
            {
                heading: 'States of matter',
                body: `<ul>
                         <li><strong>Solid:</strong> particles locked in place, so it keeps its shape</li>
                         <li><strong>Liquid:</strong> particles slide past each other, so it takes the container's shape</li>
                         <li><strong>Gas:</strong> particles fly apart and fill any space</li>
                         <li><strong>Plasma:</strong> super-hot gas whose electrons are stripped away, as in lightning and stars</li>
                       </ul>
                       <p>Adding heat moves matter up this list: melting, then boiling. Water melts at 0 °C and boils at 100 °C at sea level.</p>`
            },
            {
                heading: 'Reactions & balancing equations',
                body: `<p>In a chemical reaction, <strong>reactants</strong> rearrange into new <strong>products</strong>. Atoms are never created or destroyed (<strong>conservation of mass</strong>), so equations must <strong>balance</strong>.</p>
                       <p class="eq">2H₂ + O₂ → 2H₂O</p>
                       <p>Count them: 4 hydrogen and 2 oxygen atoms on the left, and 4 hydrogen and 2 oxygen atoms on the right ✓</p>
                       <p>The big numbers in front (coefficients) say how many molecules. The small numbers (subscripts) say how many atoms are in each molecule.</p>`
            },
            {
                heading: 'Acids, bases & pH',
                body: `<p>The <strong>pH scale</strong> runs from 0 to 14:</p>
                       <ul>
                         <li><strong>Below 7: acidic.</strong> Lemon juice ≈ 2, coffee ≈ 5</li>
                         <li><strong>7: neutral.</strong> Pure water</li>
                         <li><strong>Above 7: basic.</strong> Baking soda ≈ 9, bleach ≈ 13</li>
                       </ul>
                       <p>Each step is <strong>10 times</strong> stronger: pH 3 is ten times more acidic than pH 4. Acids and bases cancel each other out in a <strong>neutralization</strong> reaction.</p>`
            },
            {
                heading: 'The mole',
                body: `<p>Atoms are so tiny that chemists count them in huge batches called <strong>moles</strong>, like a "dozen" but much bigger:</p>
                       <p class="eq">1 mole = 6.022 × 10²³ particles</p>
                       <p>That's Avogadro's number. One mole of water molecules weighs only about <strong>18 grams</strong>, roughly a tablespoon of water.</p>
                       <p>Moles let chemists measure out exactly the right amount of each ingredient for a reaction.</p>`
            },
            {
                heading: 'Key takeaway',
                body: `<p class="takeaway">Atoms, the periodic table, bonds, reactions, and pH are the core ideas that explain how all substances behave.</p>
                       <p>Ready to test what you learned?</p>`
            }
        ],
        quiz: [
            { q: 'What decides which element an atom is?', choices: ['Number of neutrons', 'Number of protons', 'Its color', 'Its weight only'], answer: 1 },
            { q: 'In a covalent bond, atoms...', choices: ['share electrons', 'give away electrons', 'lose protons', 'turn into gas'], answer: 0 },
            { q: 'Which pH value is the most acidic?', choices: ['7', '13', '9', '2'], answer: 3 },
            { q: 'Why must chemical equations be balanced?', choices: ['To look neat', 'Because reactions are fast', 'Atoms are never created or destroyed', 'Because of pH'], answer: 2 }
        ]
    },
    {
        id: 'chemistry-4',
        title: 'Chemistry in the Real World',
        xp: 50,
        pages: [
            {
                heading: 'Cooking',
                body: `<ul>
                         <li><strong>Browning:</strong> the golden crust on toast, steak, and cookies comes from the <strong>Maillard reaction</strong> between sugars and proteins at high heat. It creates hundreds of flavor molecules.</li>
                         <li><strong>Rising:</strong> baking soda (a base) reacts with an acid like buttermilk to release <strong>carbon dioxide</strong> bubbles that puff up cakes and pancakes.</li>
                         <li><strong>Eggs:</strong> heat unfolds their proteins, which tangle together and turn solid.</li>
                       </ul>`
            },
            {
                heading: 'Cleaning',
                body: `<p><strong>Soap</strong> molecules have two ends: one loves water and one loves grease. They surround grease and trap it so water can wash it away.</p>
                       <p><strong>Safety rule:</strong> never mix <strong>bleach</strong> with <strong>ammonia</strong> (found in some glass cleaners) or with acids like vinegar. They react to release <strong>toxic gases</strong>.</p>
                       <p>That's why cleaning labels carry warnings: chemistry happens whether you mean it to or not!</p>`
            },
            {
                heading: 'Batteries',
                body: `<p>A battery stores energy in chemicals and releases it as electricity through a <strong>redox reaction</strong>, where electrons move from one material to another.</p>
                       <p>In a <strong>lithium-ion battery</strong>, lithium ions shuttle between two electrodes. Charging pushes them one way, and using the phone lets them flow back, sending electrons through the circuit.</p>
                       <p>Better battery chemistry is the key to longer-lasting phones and electric cars.</p>`
            },
            {
                heading: 'Medicine',
                body: `<p>Chemists design medicine molecules with exactly the right shape to fit a target in your body, like a key in a lock.</p>
                       <p><strong>Aspirin</strong> was developed from a compound found in willow bark, which people chewed for pain for thousands of years.</p>
                       <p><strong>Dosage</strong> matters because the same chemical can help or harm depending on the amount. As the saying goes, "the dose makes the poison."</p>`
            },
            {
                heading: 'Environment',
                body: `<ul>
                         <li><strong>Acid rain:</strong> sulfur and nitrogen gases from burning fuel mix with rain to make acids that damage forests and buildings</li>
                         <li><strong>Ocean acidification:</strong> oceans absorb CO₂, which makes the water more acidic and harms coral and shellfish</li>
                         <li><strong>The ozone layer:</strong> chemicals called CFCs were destroying it. The 1987 Montreal Protocol banned them, and the ozone layer is now slowly healing, a chemistry success story!</li>
                       </ul>`
            },
            {
                heading: 'Fire & fireworks',
                body: `<p><strong>Fire</strong> is a fast reaction called <strong>combustion</strong>. It needs three things, the "fire triangle": <strong>fuel</strong>, <strong>oxygen</strong>, and <strong>heat</strong>. Remove any one and the fire goes out.</p>
                       <p><strong>Firework colors</strong> come from different metal elements glowing when heated:</p>
                       <p><span class="tag">Strontium: red</span> <span class="tag">Sodium: yellow</span> <span class="tag">Barium: green</span> <span class="tag">Copper: blue</span></p>`
            },
            {
                heading: 'Key takeaway',
                body: `<p class="takeaway">Chemistry is happening in your kitchen, your phone, your medicine cabinet, and the sky every day.</p>
                       <p>Ready to test what you learned?</p>`
            }
        ],
        quiz: [
            { q: 'What makes cakes rise when baking soda reacts with an acid?', choices: ['Oxygen gas', 'Carbon dioxide bubbles', 'Steam only', 'Melted sugar'], answer: 1 },
            { q: 'Which pair of cleaners should never be mixed?', choices: ['Bleach and ammonia', 'Soap and water', 'Water and vinegar', 'Baking soda and water'], answer: 0 },
            { q: 'Which three things make up the fire triangle?', choices: ['Water, air, earth', 'Fuel, water, light', 'Fuel, oxygen, heat', 'Heat, sound, light'], answer: 2 }
        ]
    },
    {
        id: 'chemistry-5',
        title: 'Periodic Table Explorer',
        xp: 50,
        pages: [
            {
                heading: 'Reading an element tile',
                body: `<p>Every element on the periodic table has a tile with two key pieces of information:</p>
                       <ul>
                         <li><strong>Atomic number:</strong> the number of protons, written at the top</li>
                         <li><strong>Symbol:</strong> a one- or two-letter code. The first letter is always a capital.</li>
                       </ul>
                       <p>Most symbols match the English name (O = oxygen), but some come from <strong>Latin</strong>: Na (natrium) = sodium, Fe (ferrum) = iron, Au (aurum) = gold.</p>
                       <p>On the next page, hover over or tap the tiles to explore 20 important elements. Colors show each element's family.</p>`
            },
            {
                heading: 'Explore the elements',
                body: '',
                grid: ELEMENTS
            },
            {
                heading: 'Ask Wolfram|Alpha',
                body: `<p>Look up real data for <strong>any</strong> element or compound with <strong>Wolfram|Alpha</strong>. Try one of the examples, or ask your own question:</p>`,
                wolfram: {
                    placeholder: 'e.g. melting point of iron',
                    examples: [
                        'atomic mass of gold',
                        'boiling point of water',
                        'molar mass of NaCl',
                        'how many protons does oxygen have'
                    ]
                }
            },
            {
                heading: 'Key takeaway',
                body: `<p class="takeaway">The periodic table is chemistry's map. Each element's number, symbol, and position tell you how it behaves.</p>
                       <p>Ready to test what you learned?</p>`
            }
        ],
        quiz: [
            { q: 'Which element has the symbol Na?', choices: ['Nitrogen', 'Neon', 'Sodium', 'Nickel'], answer: 2 },
            { q: 'Which element is the backbone of every living thing?', choices: ['Carbon', 'Gold', 'Helium', 'Iron'], answer: 0 },
            { q: 'Which element makes up about 78% of the air?', choices: ['Oxygen', 'Nitrogen', 'Carbon', 'Hydrogen'], answer: 1 },
            { q: 'What does Au stand for?', choices: ['Silver', 'Aluminum', 'Copper', 'Gold'], answer: 3 }
        ]
    }
];
