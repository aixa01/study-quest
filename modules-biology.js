// Biology Modules 2–5 (Module 1 lives in modules.js)
// Module 5 is a picker: each body system is its own mini-lesson.

const BODY_SYSTEMS = [
    {
        id: 'circulatory',
        name: 'Circulatory System',
        purpose: 'Pumps blood around your body, delivering oxygen and nutrients to every cell and carrying waste away.',
        apps: ['Heart', 'Arteries, veins & capillaries', 'Blood'],
        pages: [
            {
                heading: 'Your delivery network',
                body: `<p>The circulatory system is your body's transport network. The <strong>heart</strong> pumps <strong>blood</strong> through a huge web of <strong>blood vessels</strong>.</p>
                       <p>Blood delivers <strong>oxygen</strong> and <strong>nutrients</strong> to every cell, and carries away waste like carbon dioxide.</p>
                       <p>Your heart beats about <strong>100,000 times a day</strong> without you ever thinking about it.</p>`
            },
            {
                heading: 'The heart & vessels',
                body: `<p>The heart has <strong>four chambers</strong>: two <strong>atria</strong> on top that receive blood, and two <strong>ventricles</strong> below that pump it out.</p>
                       <ul>
                         <li><strong>Arteries</strong> carry blood <em>away</em> from the heart (think "A for away")</li>
                         <li><strong>Veins</strong> carry blood <em>back</em> to the heart</li>
                         <li><strong>Capillaries</strong> are tiny vessels where oxygen and nutrients pass into cells</li>
                       </ul>`
            },
            {
                heading: 'What blood is made of',
                body: `<ul>
                         <li><strong>Red blood cells</strong> carry oxygen using a protein called <strong>hemoglobin</strong>, which contains iron and makes blood red</li>
                         <li><strong>White blood cells</strong> fight infections</li>
                         <li><strong>Platelets</strong> form clots to stop bleeding</li>
                         <li><strong>Plasma</strong> is the yellowish liquid that carries everything</li>
                       </ul>
                       <p>Exercise, not smoking, and a healthy diet keep this system strong.</p>`
            }
        ],
        quiz: [
            { q: 'Which blood vessels carry blood away from the heart?', choices: ['Veins', 'Arteries', 'Capillaries', 'Nerves'], answer: 1 },
            { q: 'How many chambers does the human heart have?', choices: ['Two', 'Three', 'Four', 'Six'], answer: 2 },
            { q: 'Which part of the blood carries oxygen?', choices: ['Red blood cells', 'Platelets', 'Plasma', 'White blood cells'], answer: 0 }
        ]
    },
    {
        id: 'respiratory',
        name: 'Respiratory System',
        purpose: 'Brings oxygen into your body and removes carbon dioxide every time you breathe.',
        apps: ['Nose & mouth', 'Trachea (windpipe)', 'Lungs & alveoli', 'Diaphragm'],
        pages: [
            {
                heading: 'Breathing in and out',
                body: `<p>Every cell needs <strong>oxygen</strong> to release energy from food, and makes <strong>carbon dioxide</strong> as waste. The respiratory system swaps one for the other.</p>
                       <p>Air travels through your nose or mouth, down the <strong>trachea</strong> (windpipe), into two <strong>bronchi</strong>, and into your <strong>lungs</strong>.</p>`
            },
            {
                heading: 'Alveoli: where the swap happens',
                body: `<p>Inside your lungs, the airways branch into hundreds of millions of tiny air sacs called <strong>alveoli</strong>.</p>
                       <p>Each one is wrapped in capillaries. Oxygen passes from the air into the blood, and carbon dioxide passes out of the blood to be breathed out. This is called <strong>gas exchange</strong>.</p>
                       <p>Spread flat, the alveoli would cover roughly the area of a tennis court!</p>`
            },
            {
                heading: 'The diaphragm',
                body: `<p>The <strong>diaphragm</strong> is a dome-shaped muscle under your lungs.</p>
                       <ul>
                         <li><strong>Breathing in:</strong> it tightens and flattens, making room so air rushes in</li>
                         <li><strong>Breathing out:</strong> it relaxes and pushes air back out</li>
                       </ul>
                       <p>Hiccups are sudden, involuntary spasms of the diaphragm.</p>`
            }
        ],
        quiz: [
            { q: 'What are the tiny air sacs in the lungs called?', choices: ['Bronchi', 'Villi', 'Alveoli', 'Neurons'], answer: 2 },
            { q: 'Which gas do we breathe out as waste?', choices: ['Carbon dioxide', 'Oxygen', 'Nitrogen', 'Helium'], answer: 0 },
            { q: 'Which muscle powers breathing?', choices: ['The heart', 'The diaphragm', 'The biceps', 'The stomach'], answer: 1 }
        ]
    },
    {
        id: 'digestive',
        name: 'Digestive System',
        purpose: 'Breaks food down into nutrients your body can absorb and use for energy, growth, and repair.',
        apps: ['Mouth & esophagus', 'Stomach', 'Small & large intestine', 'Liver & pancreas'],
        pages: [
            {
                heading: 'From food to fuel',
                body: `<p>Digestion breaks food into molecules small enough to enter your blood: sugars, amino acids, and fats.</p>
                       <p>It's both <strong>mechanical</strong> (chewing and churning) and <strong>chemical</strong> (<strong>enzymes</strong> that split molecules apart). Saliva starts breaking down starch the moment food enters your mouth.</p>`
            },
            {
                heading: 'The journey',
                body: `<ol>
                         <li><strong>Mouth:</strong> teeth chew, saliva starts digestion</li>
                         <li><strong>Esophagus:</strong> muscles squeeze food down to the stomach</li>
                         <li><strong>Stomach:</strong> strong acid and enzymes break down proteins</li>
                         <li><strong>Small intestine:</strong> about 6 m long, where most nutrients are absorbed through finger-like <strong>villi</strong></li>
                         <li><strong>Large intestine:</strong> absorbs water and forms waste</li>
                       </ol>`
            },
            {
                heading: 'Helper organs',
                body: `<ul>
                         <li><strong>Liver:</strong> makes <strong>bile</strong> to break up fats, and filters toxins from blood</li>
                         <li><strong>Gallbladder:</strong> stores bile until it's needed</li>
                         <li><strong>Pancreas:</strong> releases digestive enzymes and the hormone <strong>insulin</strong>, which controls blood sugar</li>
                       </ul>
                       <p>Trillions of helpful <strong>gut bacteria</strong> also help digest food and support your immune system.</p>`
            }
        ],
        quiz: [
            { q: 'Where are most nutrients absorbed?', choices: ['Stomach', 'Large intestine', 'Esophagus', 'Small intestine'], answer: 3 },
            { q: 'What are the molecules that chemically break down food called?', choices: ['Enzymes', 'Hormones', 'Antibodies', 'Neurons'], answer: 0 },
            { q: 'Which organ makes insulin?', choices: ['Liver', 'Pancreas', 'Stomach', 'Gallbladder'], answer: 1 }
        ]
    },
    {
        id: 'nervous',
        name: 'Nervous System',
        purpose: 'Your body\'s control and communication network. It senses, thinks, and sends signals to every part of you.',
        apps: ['Brain', 'Spinal cord', 'Nerves & neurons', 'Senses'],
        pages: [
            {
                heading: 'Command center',
                body: `<p>The nervous system has two parts:</p>
                       <ul>
                         <li><strong>Central nervous system:</strong> the <strong>brain</strong> and <strong>spinal cord</strong>, which make decisions</li>
                         <li><strong>Peripheral nervous system:</strong> the <strong>nerves</strong> that branch out to the rest of your body, carrying messages back and forth</li>
                       </ul>`
            },
            {
                heading: 'Neurons',
                body: `<p>The nervous system is made of cells called <strong>neurons</strong>. Your brain has about <strong>86 billion</strong> of them.</p>
                       <p>Neurons send <strong>electrical signals</strong> along their length, then pass the message to the next neuron with chemicals called <strong>neurotransmitters</strong> across a tiny gap called a <strong>synapse</strong>.</p>
                       <p>The fastest signals travel over 100 m/s, faster than a race car.</p>`
            },
            {
                heading: 'Reflexes & the brain',
                body: `<p>A <strong>reflex</strong>, like jerking your hand off a hot stove, goes through your spinal cord <em>before</em> your brain even knows. That saves precious time.</p>
                       <p>Different brain areas have different jobs:</p>
                       <ul>
                         <li><strong>Cerebrum:</strong> thinking, memory, senses, and movement</li>
                         <li><strong>Cerebellum:</strong> balance and coordination</li>
                         <li><strong>Brainstem:</strong> automatic functions like breathing and heartbeat</li>
                       </ul>`
            }
        ],
        quiz: [
            { q: 'What are nerve cells called?', choices: ['Neurons', 'Alveoli', 'Platelets', 'Villi'], answer: 0 },
            { q: 'Which two organs make up the central nervous system?', choices: ['Heart and lungs', 'Brain and spinal cord', 'Eyes and ears', 'Stomach and liver'], answer: 1 },
            { q: 'Which part of the brain controls balance?', choices: ['Brainstem', 'Cerebrum', 'Cerebellum', 'Spinal cord'], answer: 2 }
        ]
    },
    {
        id: 'skeletal-muscular',
        name: 'Skeletal & Muscular System',
        purpose: 'Gives your body shape, protects your organs, and lets you move.',
        apps: ['Bones', 'Joints', 'Muscles', 'Tendons & ligaments'],
        pages: [
            {
                heading: 'Your skeleton',
                body: `<p>An adult skeleton has <strong>206 bones</strong>. Babies are born with closer to 300, and some fuse together as they grow.</p>
                       <p>Bones <strong>support</strong> your body, <strong>protect</strong> organs (your skull guards your brain, your ribs guard your heart and lungs), store <strong>calcium</strong>, and make new <strong>blood cells</strong> in their marrow.</p>
                       <p>The smallest bone, the stapes, is in your ear. The largest, the femur, is in your thigh.</p>`
            },
            {
                heading: 'Muscles',
                body: `<p>You have over <strong>600 muscles</strong>, in three types:</p>
                       <ul>
                         <li><strong>Skeletal:</strong> attached to bones; you control them (walking, smiling)</li>
                         <li><strong>Smooth:</strong> in organs like the stomach; they work automatically</li>
                         <li><strong>Cardiac:</strong> only in the heart; they never get tired</li>
                       </ul>
                       <p>Muscles can only <strong>pull</strong>, never push, so they work in pairs. When your biceps contracts, your triceps relaxes.</p>`
            },
            {
                heading: 'Joints & connectors',
                body: `<p><strong>Joints</strong> are where bones meet. <strong>Hinge joints</strong> (knees, elbows) bend one way, and <strong>ball-and-socket joints</strong> (shoulders, hips) rotate in many directions.</p>
                       <ul>
                         <li><strong>Tendons</strong> connect muscle to bone</li>
                         <li><strong>Ligaments</strong> connect bone to bone</li>
                         <li><strong>Cartilage</strong> cushions joints so bones don't grind together</li>
                       </ul>`
            }
        ],
        quiz: [
            { q: 'How many bones does an adult human have?', choices: ['106', '206', '300', '650'], answer: 1 },
            { q: 'What connects muscle to bone?', choices: ['Ligaments', 'Cartilage', 'Tendons', 'Nerves'], answer: 2 },
            { q: 'Which type of muscle is found only in the heart?', choices: ['Cardiac', 'Smooth', 'Skeletal', 'Voluntary'], answer: 0 }
        ]
    },
    {
        id: 'immune',
        name: 'Immune System',
        purpose: 'Defends your body against germs like bacteria and viruses, and remembers them to protect you next time.',
        apps: ['Skin & mucus', 'White blood cells', 'Antibodies', 'Lymph nodes'],
        pages: [
            {
                heading: 'Layers of defense',
                body: `<p>Your immune system protects you from <strong>pathogens</strong>: disease-causing germs like bacteria, viruses, and fungi.</p>
                       <ol>
                         <li><strong>Barriers:</strong> skin, mucus, tears, and stomach acid keep most germs out</li>
                         <li><strong>Innate response:</strong> fast, general defenders attack anything foreign. Fever and swelling are signs they're working.</li>
                         <li><strong>Adaptive response:</strong> slower but targeted. It learns the exact germ and remembers it.</li>
                       </ol>`
            },
            {
                heading: 'White blood cells & antibodies',
                body: `<ul>
                         <li><strong>Phagocytes</strong> swallow and digest invaders</li>
                         <li><strong>B cells</strong> make <strong>antibodies</strong>, Y-shaped proteins that lock onto one specific germ and mark it for destruction</li>
                         <li><strong>T cells</strong> coordinate the attack and destroy infected cells</li>
                       </ul>
                       <p><strong>Lymph nodes</strong>, like the ones in your neck, are where these cells gather. They often swell when you're sick.</p>`
            },
            {
                heading: 'Memory & vaccines',
                body: `<p>After fighting a germ, your body keeps <strong>memory cells</strong>. If the same germ returns, they respond so fast you often never feel sick. That's <strong>immunity</strong>.</p>
                       <p><strong>Vaccines</strong> train this memory safely. They show your immune system a harmless piece or blueprint of a germ, so it's ready before the real thing arrives.</p>`
            }
        ],
        quiz: [
            { q: 'Which proteins lock onto specific germs?', choices: ['Enzymes', 'Hormones', 'Antibodies', 'Platelets'], answer: 2 },
            { q: 'How do vaccines protect you?', choices: ['They train immune memory before real infection', 'They kill all bacteria in your body', 'They replace white blood cells', 'They make your skin thicker'], answer: 0 },
            { q: 'What is your body\'s first barrier against germs?', choices: ['Antibodies', 'Skin and mucus', 'T cells', 'Memory cells'], answer: 1 }
        ]
    }
];

export const BIOLOGY_MODULES = [
    {
        id: 'biology-2',
        title: 'The Branches of Biology',
        xp: 50,
        pages: [
            {
                heading: 'The study of life, divided',
                body: `<p>Life is incredibly varied, from bacteria to blue whales, so biologists specialize in <strong>branches</strong>.</p>
                       <p>For each one, we'll look at <strong>what it studies</strong>, <strong>what it's for</strong>, and <strong>what it's intertwined with</strong>.</p>`
            },
            {
                heading: 'Cell & Molecular Biology',
                body: `<p><strong>Studies:</strong> cells, the smallest units of life, and the molecules inside them, like DNA and proteins.</p>
                       <p><strong>Purpose:</strong> understanding how cells work, and what goes wrong in diseases like cancer.</p>
                       <p><strong>Intertwined with:</strong> chemistry (biochemistry), medicine, and drug design.</p>`
            },
            {
                heading: 'Genetics',
                body: `<p><strong>Studies:</strong> <strong>genes</strong> (instructions written in DNA) and how traits pass from parents to children.</p>
                       <p><strong>Purpose:</strong> explaining why you have your eye color, and how inherited diseases happen.</p>
                       <p><strong>Intertwined with:</strong> medicine, ancestry testing, forensics, farming, and computer science (analyzing billions of DNA letters).</p>`
            },
            {
                heading: 'Evolution',
                body: `<p><strong>Studies:</strong> how species change over many generations through <strong>natural selection</strong>.</p>
                       <p><strong>Purpose:</strong> explaining the diversity of life and how all living things are related.</p>
                       <p><strong>Intertwined with:</strong> genetics, geology (fossils), and medicine. Bacteria evolving resistance to antibiotics is evolution happening right now.</p>`
            },
            {
                heading: 'Anatomy & Physiology',
                body: `<p><strong>Anatomy</strong> studies the <em>structure</em> of the body: its organs, bones, and tissues.</p>
                       <p><strong>Physiology</strong> studies how those parts <em>work</em>: how the heart pumps, how muscles contract, how nerves signal.</p>
                       <p><strong>Intertwined with:</strong> medicine, nursing, physical therapy, sports science, and physics.</p>`
            },
            {
                heading: 'Microbiology',
                body: `<p><strong>Studies:</strong> microorganisms: bacteria, viruses, fungi, and other life too small to see.</p>
                       <p><strong>Purpose:</strong> fighting infections, making vaccines and antibiotics, and putting microbes to work.</p>
                       <p><strong>Intertwined with:</strong> medicine, public health, and food. Yogurt, cheese, bread, and soy sauce all depend on microbes.</p>`
            },
            {
                heading: 'Botany, Zoology & Ecology',
                body: `<ul>
                         <li><strong>Botany:</strong> plants, which make the oxygen we breathe and the food we eat. Linked to farming and medicine (many drugs come from plants).</li>
                         <li><strong>Zoology:</strong> animals: their behavior, bodies, and habitats. Linked to conservation and veterinary science.</li>
                         <li><strong>Ecology:</strong> how living things interact with each other and their environment. Linked to climate science and protecting endangered species.</li>
                       </ul>`
            },
            {
                heading: 'Key takeaway',
                body: `<p class="takeaway">Biology zooms from molecules to whole ecosystems, and each branch helps us understand and protect life.</p>
                       <p>Ready to test what you learned?</p>`
            }
        ],
        quiz: [
            { q: 'Which branch studies genes and heredity?', choices: ['Ecology', 'Genetics', 'Botany', 'Anatomy'], answer: 1 },
            { q: 'Which branch studies bacteria and viruses?', choices: ['Microbiology', 'Zoology', 'Physiology', 'Evolution'], answer: 0 },
            { q: 'Which branch studies how living things interact with their environment?', choices: ['Anatomy', 'Genetics', 'Ecology', 'Cell biology'], answer: 2 }
        ]
    },
    {
        id: 'biology-3',
        title: 'Key Concepts of Life',
        xp: 50,
        pages: [
            {
                heading: 'Cell theory',
                body: `<p>Three big ideas form <strong>cell theory</strong>:</p>
                       <ol>
                         <li>All living things are made of one or more <strong>cells</strong></li>
                         <li>The cell is the basic unit of life</li>
                         <li>All cells come from existing cells</li>
                       </ol>
                       <p><strong>Prokaryotic</strong> cells (bacteria) are simple and have no nucleus. <strong>Eukaryotic</strong> cells (plants, animals, fungi) are larger and keep their DNA inside a <strong>nucleus</strong>.</p>`
            },
            {
                heading: 'Inside the cell',
                body: `<ul>
                         <li><strong>Nucleus:</strong> the control center that holds the DNA</li>
                         <li><strong>Mitochondria:</strong> the "powerhouse" that releases energy from food</li>
                         <li><strong>Ribosomes:</strong> build proteins</li>
                         <li><strong>Cell membrane:</strong> controls what goes in and out</li>
                         <li><strong>Chloroplasts</strong> (plants only): capture sunlight for photosynthesis</li>
                         <li><strong>Cell wall</strong> (plants, fungi, bacteria): a rigid outer layer for support</li>
                       </ul>`
            },
            {
                heading: 'DNA → RNA → Protein',
                body: `<p><strong>DNA</strong> is a double helix written in four chemical "letters": <strong>A, T, C, G</strong>. A section of DNA that codes for something is a <strong>gene</strong>.</p>
                       <p>Biology's <strong>central dogma</strong> describes how genes become traits:</p>
                       <p class="eq">DNA → (transcription) → RNA → (translation) → Protein</p>
                       <p>Proteins do most of the work in your body: building muscle, carrying oxygen, fighting germs. Different genes → different proteins → different traits.</p>`
            },
            {
                heading: 'Heredity & Punnett squares',
                body: `<p>You get two copies of each gene, one from each parent. A <strong>dominant</strong> version (B) shows up even with just one copy. A <strong>recessive</strong> version (b) only shows when there are two copies (bb).</p>
                       <p>If two parents are both <strong>Bb</strong>, a <strong>Punnett square</strong> shows the possible children:</p>
                       <p class="eq">BB &nbsp;·&nbsp; Bb &nbsp;·&nbsp; Bb &nbsp;·&nbsp; bb</p>
                       <p>So there's a <strong>25%</strong> chance (1 in 4) a child shows the recessive trait.</p>`
            },
            {
                heading: 'Cell division',
                body: `<p><strong>Mitosis</strong> makes two <strong>identical</strong> copies of a cell. It's how you grow and heal a cut.</p>
                       <p><strong>Meiosis</strong> makes <strong>sex cells</strong> (eggs and sperm) with <strong>half</strong> the usual DNA, each one a unique mix. When two combine, the baby gets a full set, half from each parent.</p>
                       <p>That shuffling is why siblings look different from each other.</p>`
            },
            {
                heading: 'Photosynthesis & respiration',
                body: `<p>Plants capture sunlight to make sugar in <strong>photosynthesis</strong>:</p>
                       <p class="eq">6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂</p>
                       <p>Almost all living cells release that energy with <strong>cellular respiration</strong>, the reverse reaction:</p>
                       <p class="eq">C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energy</p>
                       <p>Plants and animals are partners: each makes what the other needs.</p>`
            },
            {
                heading: 'Natural selection',
                body: `<p>Darwin's idea works in four steps:</p>
                       <ol>
                         <li><strong>Variation:</strong> individuals differ (some rabbits are faster)</li>
                         <li><strong>Competition:</strong> there aren't enough resources for everyone</li>
                         <li><strong>Survival:</strong> those with helpful traits survive more often</li>
                         <li><strong>Inheritance:</strong> survivors pass those traits to their offspring</li>
                       </ol>
                       <p>Over many generations, helpful traits become common and species change.</p>`
            },
            {
                heading: 'Levels of organization',
                body: `<p>Life is organized in levels, each built from the one before:</p>
                       <p class="eq">cell → tissue → organ → organ system → organism</p>
                       <p>Example: muscle <strong>cells</strong> form muscle <strong>tissue</strong>, which forms the <strong>heart</strong>, part of the <strong>circulatory system</strong>, inside <strong>you</strong>.</p>
                       <p>Zooming out further: organisms form <strong>populations</strong>, then <strong>communities</strong>, then <strong>ecosystems</strong>.</p>`
            },
            {
                heading: 'Key takeaway',
                body: `<p class="takeaway">Cells, DNA, heredity, energy, and evolution are the big ideas that tie all of biology together.</p>
                       <p>Ready to test what you learned?</p>`
            }
        ],
        quiz: [
            { q: 'Which organelle is called the "powerhouse" of the cell?', choices: ['Nucleus', 'Ribosome', 'Mitochondria', 'Cell wall'], answer: 2 },
            { q: 'Two Bb parents have a child. What is the chance it shows the recessive trait (bb)?', choices: ['25%', '50%', '75%', '0%'], answer: 0 },
            { q: 'Which type of cell division makes eggs and sperm?', choices: ['Mitosis', 'Photosynthesis', 'Respiration', 'Meiosis'], answer: 3 },
            { q: 'What do plants produce during photosynthesis?', choices: ['Carbon dioxide and water', 'Sugar and oxygen', 'Protein and DNA', 'Only energy'], answer: 1 }
        ]
    },
    {
        id: 'biology-4',
        title: 'Biology in the Real World',
        xp: 50,
        pages: [
            {
                heading: 'Vaccines',
                body: `<p>Vaccines train your immune system to recognize a germ <strong>before</strong> you ever meet it.</p>
                       <p><strong>mRNA vaccines</strong>, like several COVID-19 vaccines, deliver a short set of instructions that tell your cells to make one harmless piece of the virus. Your immune system learns to recognize it, and the mRNA itself breaks down within days.</p>
                       <p>Vaccines have wiped out smallpox and nearly eliminated polio.</p>`
            },
            {
                heading: 'Antibiotic resistance',
                body: `<p>Antibiotics kill bacteria, but if a few bacteria happen to survive, they multiply and pass on their resistance. That's <strong>natural selection</strong> in fast-forward.</p>
                       <p>Over time, "superbugs" appear that most drugs can't stop.</p>
                       <p>This is why doctors say to <strong>finish your prescription</strong>, and why antibiotics don't work against viruses like the flu.</p>`
            },
            {
                heading: 'DNA testing',
                body: `<p>Everyone's DNA is unique, except identical twins.</p>
                       <ul>
                         <li><strong>Ancestry kits</strong> compare your DNA with people around the world to trace where your family came from</li>
                         <li><strong>Forensics</strong> matches DNA from hair, skin, or blood at a crime scene to a suspect</li>
                         <li><strong>Medical tests</strong> check for genes linked to diseases, so people can take action early</li>
                       </ul>`
            },
            {
                heading: 'CRISPR gene editing',
                body: `<p><strong>CRISPR</strong> is a tool borrowed from bacteria that works like "find and replace" for DNA. It can cut a gene at an exact spot so scientists can fix or change it.</p>
                       <p>In 2023, the first CRISPR-based treatment was approved for <strong>sickle cell disease</strong>, an inherited blood disorder.</p>
                       <p>It also raises big ethical questions: should we ever edit genes that get passed to future generations?</p>`
            },
            {
                heading: 'Food & farming',
                body: `<ul>
                         <li><strong>Fermentation:</strong> yeast makes bread rise by releasing carbon dioxide, and bacteria turn milk into yogurt and cheese</li>
                         <li><strong>Selective breeding:</strong> farmers have shaped crops for thousands of years. Broccoli, cabbage, and kale all come from one wild plant!</li>
                         <li><strong>GMOs:</strong> crops with edited genes that resist pests or survive drought</li>
                       </ul>`
            },
            {
                heading: 'Ecosystems',
                body: `<p>In a <strong>food chain</strong>, energy flows from producers (plants) to consumers (animals) to decomposers (fungi and bacteria that recycle nutrients).</p>
                       <p>Removing one species can ripple through everything. When wolves returned to Yellowstone in 1995, they controlled the elk population, which let trees regrow along rivers and brought back birds and beavers.</p>
                       <p><strong>Bees</strong> pollinate many of the crops we eat, which is why their decline worries scientists.</p>`
            },
            {
                heading: 'Key takeaway',
                body: `<p class="takeaway">Biology protects our health, feeds the world, solves crimes, and helps us care for the planet.</p>
                       <p>Ready to test what you learned?</p>`
            }
        ],
        quiz: [
            { q: 'How do bacteria become resistant to antibiotics?', choices: ['They learn from doctors', 'Survivors with resistance multiply (natural selection)', 'Antibiotics turn into bacteria', 'They become viruses'], answer: 1 },
            { q: 'What does CRISPR let scientists do?', choices: ['Edit DNA at exact spots', 'Make vaccines without cells', 'Clone dinosaurs', 'Grow plants without light'], answer: 0 },
            { q: 'What makes bread rise?', choices: ['Salt', 'Oxygen from the oven', 'Carbon dioxide from yeast', 'Water evaporating'], answer: 2 }
        ]
    },
    {
        id: 'biology-5',
        title: 'Body Systems Explorer',
        xp: 50,
        pickPrompt: 'Which body system do you want to explore?',
        pickVerb: 'Explore the',
        infoHeading: 'Key parts:',
        options: BODY_SYSTEMS
    }
];
