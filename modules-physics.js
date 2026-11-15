// Physics Modules 2–5 (Module 1 lives in modules.js)

export const PHYSICS_MODULES = [
    {
        id: 'physics-2',
        title: 'The Branches of Physics',
        xp: 50,
        pages: [
            {
                heading: 'One science, many branches',
                body: `<p>Physics covers everything from atoms to galaxies, so physicists split it into <strong>branches</strong>. Each one zooms in on a different part of nature.</p>
                       <p>For each branch, we'll look at <strong>what it studies</strong>, <strong>what it's for</strong>, and <strong>what it's intertwined with</strong>.</p>`
            },
            {
                heading: 'Mechanics',
                body: `<p><strong>Studies:</strong> motion, forces, and gravity: how things move and why.</p>
                       <p><strong>Purpose:</strong> predicting how objects behave, from a thrown ball to a rocket heading to Mars. Newton's laws are the heart of it.</p>
                       <p><strong>Intertwined with:</strong> engineering (bridges, cars, buildings), sports science, and space travel.</p>`
            },
            {
                heading: 'Thermodynamics',
                body: `<p><strong>Studies:</strong> heat, temperature, and how energy moves and changes form.</p>
                       <p><strong>Purpose:</strong> explaining why hot things cool down, how engines turn fuel into motion, and why no machine is 100% efficient.</p>
                       <p><strong>Intertwined with:</strong> chemistry (reactions release or absorb heat), climate science, car engines, and refrigerators.</p>`
            },
            {
                heading: 'Waves & Sound',
                body: `<p><strong>Studies:</strong> vibrations that carry energy from place to place, like ripples in water or sound in air.</p>
                       <p><strong>Purpose:</strong> understanding pitch, loudness, echoes, and how waves bounce and bend.</p>
                       <p><strong>Intertwined with:</strong> music, architecture (concert hall acoustics), sonar, earthquake science, and medical ultrasound.</p>`
            },
            {
                heading: 'Electricity & Magnetism',
                body: `<p><strong>Studies:</strong> electric charges, currents, circuits, and magnets. In the 1860s, Maxwell showed they're two sides of the same force: <strong>electromagnetism</strong>.</p>
                       <p><strong>Purpose:</strong> generating and using electricity, and sending signals without wires.</p>
                       <p><strong>Intertwined with:</strong> every electronic device, motors, power grids, radio, Wi-Fi, and computer science.</p>`
            },
            {
                heading: 'Optics',
                body: `<p><strong>Studies:</strong> light: how it reflects, bends (refracts), splits into colors, and forms images.</p>
                       <p><strong>Purpose:</strong> designing anything that captures or guides light.</p>
                       <p><strong>Intertwined with:</strong> cameras, glasses and contact lenses, microscopes, telescopes, lasers, and the fiber-optic cables that carry the internet.</p>`
            },
            {
                heading: 'Modern Physics',
                body: `<p><strong>Relativity</strong> (Einstein) studies things that move very fast or are very massive. Time actually slows down at high speeds and near strong gravity.</p>
                       <p><strong>Quantum mechanics</strong> studies the very small: atoms and particles, where things behave like both particles and waves.</p>
                       <p><strong>Intertwined with:</strong> GPS satellites, computer chips, lasers, solar panels, and quantum computers.</p>`
            },
            {
                heading: 'Nuclear, Particle & Astrophysics',
                body: `<ul>
                         <li><strong>Nuclear physics:</strong> the core (nucleus) of atoms. Powers nuclear energy and medical scans, and explains radioactivity.</li>
                         <li><strong>Particle physics:</strong> the smallest building blocks, like quarks and the Higgs boson, studied in giant colliders such as CERN.</li>
                         <li><strong>Astrophysics:</strong> physics applied to stars, black holes, galaxies, and the Big Bang.</li>
                       </ul>`
            },
            {
                heading: 'Key takeaway',
                body: `<p class="takeaway">Each branch of physics explains a different part of nature, and together they power nearly every piece of modern technology.</p>
                       <p>Ready to test what you learned?</p>`
            }
        ],
        quiz: [
            { q: 'Which branch of physics studies motion, forces, and gravity?', choices: ['Optics', 'Mechanics', 'Thermodynamics', 'Nuclear physics'], answer: 1 },
            { q: 'Which branch studies heat and how energy changes form?', choices: ['Thermodynamics', 'Astrophysics', 'Optics', 'Waves & Sound'], answer: 0 },
            { q: 'Which branch explains how atoms and tiny particles behave?', choices: ['Mechanics', 'Optics', 'Quantum mechanics', 'Thermodynamics'], answer: 2 }
        ]
    },
    {
        id: 'physics-3',
        title: 'Key Concepts & Equations',
        xp: 50,
        pages: [
            {
                heading: 'Units, scalars & vectors',
                body: `<p>Physicists measure with standard <strong>SI units</strong>: meters (m) for distance, seconds (s) for time, kilograms (kg) for mass, and newtons (N) for force.</p>
                       <p>A <strong>scalar</strong> has only a size, like 50 km/h (speed). A <strong>vector</strong> has a size <em>and</em> a direction, like 50 km/h north (velocity).</p>
                       <p>Forces are vectors too: pushing left and pushing right can cancel out.</p>`
            },
            {
                heading: 'Motion',
                body: `<p><strong>Speed</strong> is distance divided by time:</p>
                       <p class="eq">v = d / t</p>
                       <p>Example: running 100 m in 20 s → 100 ÷ 20 = <strong>5 m/s</strong>.</p>
                       <p><strong>Acceleration</strong> is how quickly velocity changes:</p>
                       <p class="eq">a = Δv / t</p>
                       <p>Example: a car going from 0 to 20 m/s in 4 s → 20 ÷ 4 = <strong>5 m/s²</strong>. (Δ means "change in".)</p>`
            },
            {
                heading: "Newton's three laws",
                body: `<ol>
                         <li><strong>Inertia:</strong> an object stays at rest, or keeps moving in a straight line, unless a force acts on it. That's why you lurch forward when a bus brakes.</li>
                         <li><strong>Force = mass × acceleration:</strong> <span class="eq-inline">F = ma</span>. A 1,000 kg car accelerating at 3 m/s² needs 1,000 × 3 = <strong>3,000 N</strong>.</li>
                         <li><strong>Action–reaction:</strong> every force has an equal and opposite force. A rocket pushes gas down, and the gas pushes the rocket up.</li>
                       </ol>`
            },
            {
                heading: 'Gravity & weight',
                body: `<p>Mass is how much matter something has (kg). <strong>Weight</strong> is the force of gravity pulling on that mass (N):</p>
                       <p class="eq">W = m · g &nbsp; (g ≈ 9.8 m/s² on Earth)</p>
                       <p>Example: a 50 kg person weighs 50 × 9.8 = <strong>490 N</strong> on Earth.</p>
                       <p>On the Moon, g is only about 1.6 m/s². Your mass stays the same, but you'd weigh about one-sixth as much.</p>`
            },
            {
                heading: 'Energy',
                body: `<p><strong>Kinetic energy</strong> is the energy of motion:</p>
                       <p class="eq">KE = ½ m v²</p>
                       <p>Example: a 2 kg ball at 5 m/s → ½ × 2 × 5² = <strong>25 J</strong> (joules).</p>
                       <p><strong>Potential energy</strong> is stored energy from height:</p>
                       <p class="eq">PE = m g h</p>
                       <p>The <strong>law of conservation of energy</strong> says energy is never created or destroyed. It only changes form, like PE turning into KE as something falls.</p>`
            },
            {
                heading: 'Momentum, work & power',
                body: `<p><strong>Momentum</strong> is mass in motion. It's harder to stop a truck than a bike at the same speed:</p>
                       <p class="eq">p = m · v</p>
                       <p><strong>Work</strong> is done when a force moves something over a distance:</p>
                       <p class="eq">W = F · d</p>
                       <p><strong>Power</strong> is how fast work is done, measured in watts (W):</p>
                       <p class="eq">P = W / t</p>
                       <p>Example: 50 J of work in 10 s → <strong>5 W</strong>.</p>`
            },
            {
                heading: 'Waves',
                body: `<p>Every wave has a <strong>frequency</strong> (f, how many waves pass each second, in hertz) and a <strong>wavelength</strong> (λ, the length of one wave).</p>
                       <p class="eq">v = f · λ</p>
                       <p>Example: sound travels about 343 m/s in air. The musical note A has a frequency of 440 Hz, so its wavelength is 343 ÷ 440 ≈ <strong>0.78 m</strong>.</p>
                       <p>Higher frequency means a higher pitch for sound, or a bluer color for light.</p>`
            },
            {
                heading: 'Electricity',
                body: `<p><strong>Ohm's law</strong> links voltage (V, the "push"), current (I, the flow), and resistance (R):</p>
                       <p class="eq">V = I · R</p>
                       <p>Example: a 9 V battery across a 3 Ω resistor → I = 9 ÷ 3 = <strong>3 A</strong> (amps).</p>
                       <p><strong>Electrical power</strong>:</p>
                       <p class="eq">P = V · I</p>
                       <p>A 120 V lamp drawing 0.5 A uses 120 × 0.5 = <strong>60 W</strong>.</p>`
            },
            {
                heading: "Einstein's famous equation",
                body: `<p class="eq">E = m c²</p>
                       <p>Mass and energy are two forms of the same thing. <em>c</em> is the speed of light (3 × 10⁸ m/s), and squaring it makes a huge number.</p>
                       <p>So a tiny bit of mass holds enormous energy: just <strong>1 gram</strong> of mass equals about 9 × 10¹³ J, roughly the energy of a large power plant running for a day.</p>
                       <p>This is what powers the Sun and nuclear reactors.</p>`
            },
            {
                heading: 'Key takeaway',
                body: `<p class="takeaway">A small set of equations, covering motion, force, energy, waves, and electricity, explains how most of the everyday world works.</p>
                       <p>Ready to test what you learned?</p>`
            }
        ],
        quiz: [
            { q: 'A car speeds up from 0 to 30 m/s in 6 seconds. What is its acceleration?', choices: ['180 m/s²', '5 m/s²', '36 m/s²', '0.2 m/s²'], answer: 1 },
            { q: 'Which equation is Newton\'s second law?', choices: ['E = mc²', 'V = IR', 'F = ma', 'p = mv'], answer: 2 },
            { q: 'What is the kinetic energy of a 4 kg ball moving at 3 m/s?', choices: ['18 J', '12 J', '36 J', '6 J'], answer: 0 },
            { q: 'What happens to your mass on the Moon?', choices: ['It drops to one-sixth', 'It doubles', 'It disappears', 'It stays the same'], answer: 3 }
        ]
    },
    {
        id: 'physics-4',
        title: 'Physics in the Real World',
        xp: 50,
        pages: [
            {
                heading: 'Car safety',
                body: `<p>In a crash, your momentum has to drop to zero. The force on you depends on <strong>how quickly</strong> that happens:</p>
                       <p class="eq">F · t = Δp &nbsp; (force × time = change in momentum)</p>
                       <p>If the stop takes <strong>longer</strong>, the force is <strong>smaller</strong>. That's the trick behind:</p>
                       <ul>
                         <li><strong>Crumple zones</strong> that fold slowly instead of stopping instantly</li>
                         <li><strong>Airbags</strong> that cushion your stop</li>
                         <li><strong>Seatbelts</strong> that stretch slightly and stop your body moving forward (inertia!)</li>
                       </ul>`
            },
            {
                heading: 'Sports',
                body: `<p>A thrown or kicked ball follows a curved path called a <strong>projectile</strong>: gravity pulls it down while it keeps moving forward.</p>
                       <p>On flat ground and ignoring air, a launch angle of <strong>45°</strong> gives the longest distance. It's the best balance between going up and going forward.</p>
                       <p>Spin matters too. A spinning ball drags air around it, creating a sideways force that makes <strong>curveballs</strong> and bending soccer kicks curve. This is called the Magnus effect.</p>`
            },
            {
                heading: 'Roller coasters',
                body: `<p>A coaster has no engine after the first climb. It runs on <strong>energy conservation</strong>: potential energy at the top turns into kinetic energy on the way down.</p>
                       <p>Setting <em>mgh = ½mv²</em>, the mass cancels out and the speed at the bottom of a drop is:</p>
                       <p class="eq">v = √(2 g h)</p>
                       <p>Example: a 20 m drop → √(2 × 9.8 × 20) ≈ <strong>19.8 m/s</strong> (about 71 km/h).</p>
                       <p>Since friction steals a little energy, every later hill must be <strong>shorter</strong> than the first.</p>`
            },
            {
                heading: 'Your electricity bill',
                body: `<p>Power companies charge for energy in <strong>kilowatt-hours (kWh)</strong>: power (in kW) × hours used.</p>
                       <p class="eq">energy = P × t</p>
                       <p>Example: a 1,000 W (1 kW) space heater running for 3 hours uses <strong>3 kWh</strong>. At $0.15 per kWh, that costs about <strong>$0.45</strong>.</p>
                       <p>An LED bulb gives the same light as an old 60 W bulb while using only about 9 W, which is why it saves money.</p>`
            },
            {
                heading: 'Music',
                body: `<p>Instruments make sound by making something <strong>vibrate</strong>: a string, a drum skin, or a column of air.</p>
                       <p>On a guitar, pressing a string against a fret makes the vibrating part <strong>shorter</strong>. Shorter waves have a higher frequency, so you hear a <strong>higher note</strong> (<em>v = fλ</em> in action).</p>
                       <p>Tighter and thinner strings also vibrate faster, which is why you tune a guitar by tightening its pegs.</p>`
            },
            {
                heading: 'GPS & relativity',
                body: `<p>GPS satellites carry super-precise clocks. Because of Einstein's relativity, those clocks tick at a slightly different rate than clocks on the ground:</p>
                       <ul>
                         <li>Their high <strong>speed</strong> makes them tick slower</li>
                         <li>Weaker <strong>gravity</strong> up high makes them tick faster</li>
                       </ul>
                       <p>Overall, they run about <strong>38 microseconds fast per day</strong>. Without correcting for it, your map location would drift by about <strong>10 km every day</strong>!</p>`
            },
            {
                heading: 'Medicine & energy',
                body: `<ul>
                         <li><strong>X-rays:</strong> high-energy light that passes through soft tissue but is blocked by bone, creating an image.</li>
                         <li><strong>MRI:</strong> powerful magnets and radio waves map the inside of your body without radiation.</li>
                         <li><strong>Ultrasound:</strong> high-pitched sound waves echo off organs (and babies!).</li>
                         <li><strong>Solar panels:</strong> light knocks electrons loose in silicon, creating current. This is the photoelectric effect, which won Einstein his Nobel Prize.</li>
                       </ul>`
            },
            {
                heading: 'Key takeaway',
                body: `<p class="takeaway">Physics keeps you safe in cars, wins games, prices your power bill, tunes your music, and guides your phone's map.</p>
                       <p>Ready to test what you learned?</p>`
            }
        ],
        quiz: [
            { q: 'Why do crumple zones and airbags make crashes safer?', choices: ['They make the car lighter', 'They make the stop take longer, lowering the force', 'They increase momentum', 'They speed the car up'], answer: 1 },
            { q: 'Ignoring air, which launch angle sends a ball farthest on flat ground?', choices: ['90°', '30°', '45°', '10°'], answer: 2 },
            { q: 'A 2 kW heater runs for 2 hours. How much energy does it use?', choices: ['4 kWh', '1 kWh', '2 kWh', '8 kWh'], answer: 0 },
            { q: 'Why must GPS satellites correct their clocks?', choices: ['Space is cold', 'The batteries run low', 'Satellites spin', 'Relativity changes how fast their clocks tick'], answer: 3 }
        ]
    },
    {
        id: 'physics-5',
        title: 'Physics Problem Solver',
        xp: 50,
        pages: [
            {
                heading: 'A 5-step method',
                body: `<p>Physics problems look scary, but almost all of them can be cracked with the same five steps:</p>
                       <ol>
                         <li><strong>Given:</strong> list the numbers you know, with units</li>
                         <li><strong>Need:</strong> write what you're solving for</li>
                         <li><strong>Equation:</strong> pick the one that links them</li>
                         <li><strong>Solve:</strong> plug in and calculate</li>
                         <li><strong>Check:</strong> do the units and the size of the answer make sense?</li>
                       </ol>`
            },
            {
                heading: 'Worked problem 1: force',
                body: `<p><em>A 1,000 kg car accelerates at 3 m/s². What force does the engine need to provide?</em></p>
                       <ul>
                         <li><strong>Given:</strong> m = 1,000 kg, a = 3 m/s²</li>
                         <li><strong>Need:</strong> F</li>
                         <li><strong>Equation:</strong> F = m · a</li>
                         <li><strong>Solve:</strong> F = 1,000 × 3 = <strong>3,000 N</strong></li>
                         <li><strong>Check:</strong> newtons are the unit of force, and a heavy car needing thousands of newtons makes sense ✓</li>
                       </ul>`
            },
            {
                heading: 'Worked problem 2: falling',
                body: `<p><em>A rock is dropped from a 45 m cliff. How long does it take to hit the water? (Ignore air.)</em></p>
                       <ul>
                         <li><strong>Given:</strong> h = 45 m, g = 9.8 m/s², starts at rest</li>
                         <li><strong>Need:</strong> t</li>
                         <li><strong>Equation:</strong> h = ½ g t², rearranged to t = √(2h / g)</li>
                         <li><strong>Solve:</strong> t = √(90 ÷ 9.8) = √9.18 ≈ <strong>3.0 s</strong></li>
                         <li><strong>Check:</strong> a few seconds for a tall cliff sounds right ✓</li>
                       </ul>`
            },
            {
                heading: 'Worked problem 3: circuits',
                body: `<p><em>A 60 W light bulb is plugged into a 120 V outlet. How much current flows through it?</em></p>
                       <ul>
                         <li><strong>Given:</strong> P = 60 W, V = 120 V</li>
                         <li><strong>Need:</strong> I</li>
                         <li><strong>Equation:</strong> P = V · I, rearranged to I = P / V</li>
                         <li><strong>Solve:</strong> I = 60 ÷ 120 = <strong>0.5 A</strong></li>
                         <li><strong>Check:</strong> household bulbs draw well under 1 amp ✓</li>
                       </ul>`
            },
            {
                heading: 'Ask Wolfram|Alpha',
                body: `<p>Check your own physics questions with <strong>Wolfram|Alpha</strong>, a computational engine used by scientists. Try one of the examples, or type your own:</p>`,
                wolfram: {
                    placeholder: 'e.g. force to accelerate 5 kg at 2 m/s^2',
                    examples: [
                        'kinetic energy of 2 kg at 5 m/s',
                        'time to fall 45 meters',
                        'current for 60 W at 120 V',
                        'speed of sound in air'
                    ]
                }
            },
            {
                heading: 'Key takeaway',
                body: `<p class="takeaway">Given → Need → Equation → Solve → Check. Follow the steps and any physics problem becomes a puzzle you can solve.</p>
                       <p>Now it's your turn. The quiz is all calculations!</p>`
            }
        ],
        quiz: [
            { q: 'What force is needed to accelerate a 5 kg box at 2 m/s²?', choices: ['2.5 N', '7 N', '10 N', '3 N'], answer: 2 },
            { q: 'A 12 V battery is connected to a 4 Ω resistor. What current flows?', choices: ['3 A', '48 A', '8 A', '16 A'], answer: 0 },
            { q: 'A sound wave travels at 340 m/s with a frequency of 170 Hz. What is its wavelength?', choices: ['510 m', '0.5 m', '170 m', '2 m'], answer: 3 },
            { q: 'What is the potential energy of a 3 kg book on a 2 m shelf? (g ≈ 10 m/s²)', choices: ['15 J', '60 J', '6 J', '30 J'], answer: 1 }
        ]
    }
];
