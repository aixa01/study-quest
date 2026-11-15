import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
import { MODULES } from './modules.js';

// Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBLOUuFwALvmIGG1s6INn8IFP-jhEAWl98",
    authDomain: "hackprinceton-2ed81.firebaseapp.com",
    projectId: "hackprinceton-2ed81",
    storageBucket: "hackprinceton-2ed81.firebasestorage.app",
    messagingSenderId: "706200501341",
    appId: "1:706200501341:web:5de42b658b5e60731921b4"
  };
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);  
const db = getFirestore(app);
const APP_NAME = 'Study Quest';   // also update <title> in index.html
document.querySelectorAll('.app-name').forEach(el => el.textContent = APP_NAME);

// Background Music
const music = new Audio("/sounds/nov_8_2026.mp3");
music.loop = true;
music.volume = 0.3;

const introMusic = new Audio("/sounds/dreamIntroTransition.mp3");
introMusic.volume = 0.4;

// ---------- PLAYER DATA ----------
let profile = {};
let settings = { music: 30, sfx: 60 };

function applyVolumes() {
    music.volume = settings.music / 100;
    introMusic.volume = settings.music / 100;
}

// ---------- CHARACTER CREATOR ----------
const COLORS = ['Original', 'Gold', 'Green', 'Teal', 'Blue', 'Purple'];
const HUES   = [0, 45, 100, 160, 210, 270];   // degrees for hue-rotate

const LAYERS = {
    body:  { row: 0,  label: 'Skin',  canHide: false,
             options: ['Tone 1', 'Tone 2', 'Tone 3', 'Tone 4'],
             filters: ['none', 'brightness(0.85) saturate(1.2)', 'brightness(0.68) saturate(1.3)', 'brightness(0.5) saturate(1.4)'] },
    hair:  { row: 2,  label: 'Hair',  canHide: true },
    shirt: { row: 4,  label: 'Shirt', canHide: false },
    pants: { row: 6,  label: 'Pants', canHide: false },
    shoes: { row: 8,  label: 'Shoes', canHide: true,  options: ['On'], filters: ['none'] },
    hat:   { row: 10, label: 'Hat',   canHide: true },
};

// layers without their own list use the color list
for (const key in LAYERS) {
    const L = LAYERS[key];
    if (!L.options) {
        L.options = COLORS;
        L.filters = HUES.map(h => `hue-rotate(${h}deg)`);
    }
    if (L.canHide) {
        L.options = ['None', ...L.options];
        L.filters = ['hide', ...L.filters];
    }
}

let character = { body: 0, hair: 1, shirt: 0, pants: 0, shoes: 1, hat: 0 };

function applyLayer(key) {
    const L = LAYERS[key];
    const f = L.filters[character[key]];
    document.querySelectorAll(`.char-layer[data-layer="${key}"]`).forEach(el => {
        el.style.display = f === 'hide' ? 'none' : 'block';
        el.style.filter = f === 'hide' ? 'none' : f;
        el.style.backgroundPositionY = (L.row / 11 * 100) + '%';
    });
    const valueEl = document.getElementById(`val-${key}`);
    if (valueEl) valueEl.textContent = L.options[character[key]];
}

function buildCreator() {
    const box = document.getElementById('char-options');
    box.innerHTML = '';
    for (const key in LAYERS) {
        box.insertAdjacentHTML('beforeend', `
            <span>${LAYERS[key].label}</span>
            <button data-key="${key}" data-dir="-1">◀</button>
            <span class="value" id="val-${key}"></span>
            <button data-key="${key}" data-dir="1">▶</button>
        `);
    }
    box.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', () => {
            makeSound("click");
            const key = btn.dataset.key;
            const n = LAYERS[key].options.length;
            character[key] = (character[key] + Number(btn.dataset.dir) + n) % n;   // wrap around
            applyLayer(key);
        });
    });
    for (const key in LAYERS) applyLayer(key);
}

buildCreator();

let editingCharacter = false;
let editReturnTo = 'map';
let characterBackup = null;

document.getElementById('creator-done').addEventListener('click', async () => {
    makeSound("click");
    await setDoc(doc(db, 'users', auth.currentUser.uid), { character }, { merge: true });
    profile.character = { ...character };

    if (editingCharacter) {
        editingCharacter = false;
        document.getElementById('creator-cancel').classList.add('hidden');
        document.getElementById('creator-done').textContent = 'Choose this character';
        show(editReturnTo);
    } else {
        flow = ['map'];
        pos = 0; furthest = 0;
        goTo('map');
    }
});

document.getElementById('creator-cancel').addEventListener('click', () => {
    makeSound("click");
    character = characterBackup;
    for (const key in LAYERS) applyLayer(key);
    editingCharacter = false;
    document.getElementById('creator-cancel').classList.add('hidden');
    document.getElementById('creator-done').textContent = 'Choose this character';
    show(editReturnTo);
});

document.getElementById('edit-character').addEventListener('click', () => {
    makeSound("click");
    closeMenu();
    editingCharacter = true;
    editReturnTo = currentScreen;
    characterBackup = { ...character };
    document.getElementById('creator-done').textContent = 'Save changes';
    document.getElementById('creator-cancel').classList.remove('hidden');
    show('creator');
});

// Sound Function
function makeSound(key){
    switch(key){
        case "click":
            let click = new Audio("/sounds/sound-1.mp3");
            click.volume = settings.sfx / 100;
            click.play();
            break;
    }
}

// Screen
let currentScreen = 'login';

function show(id) {
    currentScreen = id;
    document.querySelectorAll('section').forEach(s => s.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
    document.getElementById('menu').classList.toggle('hidden', id === 'intro');
    document.getElementById('logout-btn').classList.toggle('hidden', id === 'login');
    document.getElementById('replay-intro').classList.toggle('hidden', id === 'login');
    document.getElementById('nav-arrows').classList.toggle('hidden', !flow.includes(id));
    document.getElementById('log-btn').classList.toggle('hidden', id === 'login' || id === 'intro');
    document.getElementById('edit-character').classList.toggle('hidden', id === 'login');
    document.getElementById('home-btn').classList.toggle('hidden', id === 'login' || id === 'map' || !profile.character);
}


// Intro
const introLines = [
    "Everything we know about our world began with a question.",
    "With knowledge, we came to understand the Earth, and then we used it to build, invent, and move forward.",
    "But the world still has room to grow. And it grows stronger with every person who learns.",
    "Here, you'll explore various STEM topics by engaging with modules through interactive learning.",
    "Spend time on a module to earn XP. Earn enough, and you'll level up. Every time you level up, a new pet companion will join you on your journey.",
    "Ready to help the world grow? First, tell us who you are..."
];

let line = 0;
let typing = false;
let typeTimer, autoTimer;

function typeLine(text) {
    const el = document.getElementById('intro-text');
    el.textContent = '';
    typing = true;
    let i = 0;
    typeTimer = setInterval(() => {
        el.textContent += text[i];
        i++;
        if (i >= text.length) {
            clearInterval(typeTimer);
            typing = false;
            autoTimer = setTimeout(nextLine, 4000);
        }
    }, 30);
}

function nextLine() {
    clearTimeout(autoTimer);
    if (typing) {
        clearInterval(typeTimer);
        typing = false;
        document.getElementById('intro-text').textContent = introLines[line];
        autoTimer = setTimeout(nextLine, 4000);
        return;
    }
    line++;
    if (line >= introLines.length) return endIntro();
    typeLine(introLines[line]);
}

function startIntro() {
    line = 0;
    show('intro');
    introMusic.currentTime=0;
    introMusic.play().catch(() => {});
    typeLine(introLines[0]);

}

let returnTo = null;

function endIntro() {
    clearInterval(typeTimer);
    clearTimeout(autoTimer);
    introMusic.pause();
    music.play().catch(() => {});
    if (returnTo) {
        show(returnTo);
        returnTo = null;
    } else {
        goTo('name');
    }
}

document.getElementById('textbox').addEventListener('click', nextLine);
document.getElementById('skip-btn').addEventListener('click', () => {
    makeSound("click");
    endIntro();
})

// Authorization
document.getElementById('login-btn').addEventListener('click', async () => {
    makeSound("click");
    try {
        if (!auth.currentUser) {
            await signInWithPopup(auth, new GoogleAuthProvider());
        }
        const snap = await getDoc(doc(db, 'users', auth.currentUser.uid));

        profile = snap.exists() ? snap.data() : {};
        settings = { ...settings, ...(profile.settings || {}) };
        applyVolumes();
        // backfill join date for accounts created before we started saving it
        if (!profile.joinedAt && auth.currentUser) {
            profile.joinedAt = new Date(auth.currentUser.metadata.creationTime).toISOString();
            await setDoc(doc(db, 'users', auth.currentUser.uid), { joinedAt: profile.joinedAt }, { merge: true });
        }
        if (profile.character) { character = profile.character; for (const key in LAYERS) applyLayer(key); }
        await updateStreak();
        checkAchievements();

        if (snap.exists() && snap.data().name) {
            document.getElementById('welcome-text').textContent =
                `Welcome back, ${snap.data().name}!`; 
            music.play().catch(() => {});
            flow = profile.character ? ['map'] : ['creator', 'map'];   // creator only if they never finished it
            pos = 0; furthest = 0;
            show('welcome-back');
        } else {
            startIntro();
        }
    } catch (err) {
        console.error('Login failed:', err.code);
    }
});

document.getElementById('logout-btn').addEventListener('click', () => {
    closeMenu();
    makeSound("click");
    music.pause();
    signOut(auth);
});

onAuthStateChanged(auth, (user) => {
    if (!user) show('login');
});

// Name Feature
document.getElementById('name-next').addEventListener('click', async () => {
    const name = document.getElementById('name-input').value.trim();
    if (!name) return;
    makeSound("click");
    const newData = { name, joinedAt: new Date().toISOString(), xp: 0, completedModules: [], pets: [] };
    await setDoc(doc(db, 'users', auth.currentUser.uid), newData, { merge: true });
    profile = { ...profile, ...newData };
    checkAchievements();
    flow = ['creator', 'map'];
    pos = 0; furthest = 0;
    goTo('creator');
});

document.getElementById('continue-btn').addEventListener('click', () => {
    makeSound("click");
    goTo(profile.character ? 'map' : 'creator');
});

// Navigation
let flow = ['name', 'creator', 'map'];
let pos = 0;
let furthest = 0;

function updateArrows() {
    document.getElementById('back-btn').disabled = pos <= 0;
    document.getElementById('forward-btn').disabled = pos >= furthest;
}

function goTo(id) {
    pos = flow.indexOf(id);
    furthest = Math.max(furthest, pos);
    show(id);
    updateArrows();
}

document.getElementById('back-btn').addEventListener('click', () => {
    if (pos <= 0) return;
    makeSound("click");
    pos--;
    show(flow[pos]);
    updateArrows();
});

document.getElementById('forward-btn').addEventListener('click', () => {
    if (pos >= furthest) return;
    makeSound("click");
    pos++;
    show(flow[pos]);
    updateArrows();
});

// Drop Down Menu
const menuList = document.getElementById('menu-list');

function closeMenu() { menuList.classList.add('hidden'); }

document.getElementById('menu-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    makeSound("click");
    menuList.classList.toggle('hidden');
});

document.querySelectorAll('.menu-item[data-panel]').forEach(item => {
    item.addEventListener('click', () => {
        makeSound("click");
        closeMenu();
        document.getElementById(item.dataset.panel).classList.remove('hidden');
    });
});

document.getElementById('home-btn').addEventListener('click', () => {
    makeSound("click");
    closeMenu();
    closePanels();
    flow = ['map'];
    pos = 0; furthest = 0;
    goTo('map');
});

document.getElementById('replay-intro').addEventListener('click', () => {
    makeSound("click");
    closeMenu();
    returnTo = currentScreen;
    music.pause();
    flow = ['name', 'creator', 'map']; pos = 0; furthest = 0;
    startIntro();
});

function closePanels() {
    document.querySelectorAll('.panel-backdrop').forEach(p => p.classList.add('hidden'));
}

document.querySelectorAll('.panel-close').forEach(btn =>
    btn.addEventListener('click', () => { makeSound("click"); closePanels(); })
);

document.querySelectorAll('.panel-backdrop').forEach(bg =>
    bg.addEventListener('click', (e) => { if (e.target === bg) closePanels(); })
);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { closePanels(); closeMenu(); }
});

document.addEventListener('click', (e) => {
    if (!document.getElementById('menu').contains(e.target)) closeMenu();
});

// ---------- STREAKS & ACHIEVEMENTS ----------
// A streak counts days in a row with at least one visit (local time).
const dayKey = (d = new Date()) => d.toLocaleDateString('en-CA');   // YYYY-MM-DD

async function updateStreak() {
    if (!auth.currentUser) return;
    const today = dayKey();
    if (profile.lastActive === today) return;
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const streak = profile.lastActive === dayKey(yesterday) ? (profile.streak || 0) + 1 : 1;
    const bestStreak = Math.max(streak, profile.bestStreak || 0);
    profile = { ...profile, lastActive: today, streak, bestStreak };
    try {
        await setDoc(doc(db, 'users', auth.currentUser.uid), { lastActive: today, streak, bestStreak }, { merge: true });
    } catch (err) {
        console.error('Saving streak failed:', err.code);
    }
}

const trackDone = (topic) => MODULES[topic].every(m => isDone(m, profile.completedModules || []));

const ACHIEVEMENTS = [
    { id: 'first-day',      name: 'Day One',          desc: 'Start your Study Quest adventure.',   check: () => !!profile.name },
    { id: 'first-module',   name: 'First Lesson',     desc: 'Complete your first module.',         check: () => (profile.completedModules || []).length >= 1 },
    { id: 'first-pet',      name: 'New Best Friend',  desc: 'Unlock your first pet companion.',    check: () => petsForLevel(levelFor(profile.xp || 0)).length >= 1 },
    { id: 'streak-3',       name: 'On a Roll',        desc: 'Study 3 days in a row.',              check: () => (profile.bestStreak || 0) >= 3 },
    { id: 'streak-7',       name: 'Week Warrior',     desc: 'Study 7 days in a row.',              check: () => (profile.bestStreak || 0) >= 7 },
    { id: 'streak-30',      name: 'Unstoppable',      desc: 'Study 30 days in a row.',             check: () => (profile.bestStreak || 0) >= 30 },
    { id: 'track-math',     name: 'Math Master',      desc: 'Complete every Math module.',         check: () => trackDone('math') },
    { id: 'track-cs',       name: 'Code Champion',    desc: 'Complete every Computer Science module.', check: () => trackDone('cs') },
    { id: 'track-physics',  name: 'Physics Pro',      desc: 'Complete every Physics module.',      check: () => trackDone('physics') },
    { id: 'track-biology',  name: 'Biology Buff',     desc: 'Complete every Biology module.',      check: () => trackDone('biology') },
    { id: 'track-chemistry',name: 'Chemistry Whiz',   desc: 'Complete every Chemistry module.',    check: () => trackDone('chemistry') },
];

// unlock anything newly earned, save it, and announce it
async function checkAchievements() {
    if (!auth.currentUser) return;
    const owned = profile.achievements || {};
    const fresh = ACHIEVEMENTS.filter(a => !owned[a.id] && a.check());
    if (!fresh.length) return;
    const achievements = { ...owned };
    fresh.forEach(a => { achievements[a.id] = new Date().toISOString(); });
    profile = { ...profile, achievements };
    fresh.forEach(a => showToast(a));
    try {
        await setDoc(doc(db, 'users', auth.currentUser.uid), { achievements }, { merge: true });
    } catch (err) {
        console.error('Saving achievements failed:', err.code);
    }
}

// pop-ups appear one at a time
const toastQueue = [];
let toastBusy = false;
function showToast(a) {
    toastQueue.push(a);
    if (!toastBusy) nextToast();
}
function nextToast() {
    const a = toastQueue.shift();
    if (!a) { toastBusy = false; return; }
    toastBusy = true;
    const toast = el('achievement-toast');
    el('toast-name').textContent = a.name;
    el('toast-desc').textContent = a.desc;
    toast.classList.remove('hidden', 'leaving');
    setTimeout(() => toast.classList.add('leaving'), 3200);
    setTimeout(() => { toast.classList.add('hidden'); nextToast(); }, 3600);
}

function renderAchievements() {
    const owned = profile.achievements || {};
    el('ach-count').textContent = `${Object.keys(owned).filter(id => ACHIEVEMENTS.some(a => a.id === id)).length} / ${ACHIEVEMENTS.length} unlocked`;
    // a streak only counts as current if you visited today or yesterday
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const current = [dayKey(), dayKey(yesterday)].includes(profile.lastActive) ? (profile.streak || 0) : 0;
    el('ach-streak').textContent = current;
    el('ach-best').textContent = profile.bestStreak || 0;

    const list = el('ach-list');
    list.innerHTML = '';
    ACHIEVEMENTS.forEach(a => {
        const row = document.createElement('div');
        row.className = 'ach-row' + (owned[a.id] ? '' : ' locked');
        const icon = document.createElement('img');
        icon.src = '/images/ui/UI_TravelBook_IconStar01a.png';
        icon.alt = '';
        const text = document.createElement('div');
        const name = document.createElement('strong');
        name.textContent = a.name;
        const desc = document.createElement('span');
        desc.textContent = owned[a.id]
            ? `${a.desc} Unlocked ${new Date(owned[a.id]).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}.`
            : a.desc;
        text.append(name, desc);
        row.append(icon, text);
        list.appendChild(row);
    });
}

// ---------- LEARNING LOG ----------
// One new pet per level: PETS[0] joins at Level 2, PETS[1] at Level 3, and so on.
// Sprites live in public/images/pets/<id>/0.png and 1.png (two-frame idle animation).
const PETS = [
    { id: 'capybara', name: 'Capybara' },
    { id: 'duck',     name: 'Duck' },
    { id: 'chicken',  name: 'Chicken' },
    { id: 'hedgehog', name: 'Hedgehog' },
    { id: 'squirrel', name: 'Squirrel' },
    { id: 'pig',      name: 'Pig' },
    { id: 'rat',      name: 'Rat' },
    { id: 'dog',      name: 'Dog' },
    { id: 'monkey',   name: 'Monkey' },
    { id: 'alpaca',   name: 'Alpaca' },
    { id: 'goat',     name: 'Goat' },
    { id: 'seal',     name: 'Seal' },
    { id: 'kangaroo', name: 'Kangaroo' },
    { id: 'panda',    name: 'Panda' },
    { id: 'lion',     name: 'Lion' },
    { id: 'tiger',    name: 'Tiger' },
];

const XP_PER_LEVEL = 100;
const levelFor = (xp) => Math.floor(xp / XP_PER_LEVEL) + 1;
const petsForLevel = (level) => PETS.slice(0, Math.max(0, level - 1)).map(p => p.id);

function petSprite(pet, cls = '') {
    return `<span class="pet-sprite ${cls}">
        <img src="/images/pets/${pet.id}/0.png" alt="">
        <img src="/images/pets/${pet.id}/1.png" alt="">
    </span>`;
}

function renderLog() {
    for (const key in LAYERS) applyLayer(key);
    const xp = profile.xp || 0;
    const level = levelFor(xp);
    const xpIntoLevel = xp % XP_PER_LEVEL;

    document.getElementById('log-name').textContent = profile.name || 'Traveler';
    document.getElementById('log-joined').textContent = profile.joinedAt
        ? new Date(profile.joinedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
        : '—';
    document.getElementById('log-level').textContent = level;
    document.getElementById('xp-fill').style.width = xpIntoLevel + '%';
    document.getElementById('log-xp-text').textContent = `${xpIntoLevel} / 100 XP to Level ${level + 1}`;
    document.getElementById('log-modules').textContent = (profile.completedModules || []).length;

    const owned = petsForLevel(level);
    const grid = document.getElementById('pet-grid');
    grid.innerHTML = '';
    PETS.forEach((pet, i) => {
        const has = owned.includes(pet.id);
        const slot = document.createElement('div');
        slot.className = 'pet' + (has ? '' : ' locked');
        slot.innerHTML = petSprite(pet);
        slot.setAttribute('aria-label', has ? pet.name : 'Locked pet');
        slot.addEventListener('click', () => { makeSound("click"); selectPet(i); });
        grid.appendChild(slot);
    });
    selectPet(0);

    function selectPet(i) {
        const pet = PETS[i];
        const has = owned.includes(pet.id);
        document.querySelectorAll('.pet').forEach((p, j) => p.classList.toggle('selected', j === i));
        document.getElementById('pet-detail').innerHTML = has
            ? `<h3>${pet.name}</h3>${petSprite(pet, 'pet-big')}<p>Your companion!</p>`
            : `<h3>???</h3>${petSprite(pet, 'pet-big locked')}<p class="small">Reach Level ${i + 2} to unlock</p>`;
    }
  
    // settings sliders show saved values
    renderAchievements();

    document.getElementById('music-vol').value = settings.music;
    document.getElementById('sfx-vol').value = settings.sfx;
}

document.getElementById('log-btn').addEventListener('click', () => {
    makeSound("click");
    renderLog();
    document.getElementById('log-panel').classList.remove('hidden');
});

// tabs
document.querySelectorAll('.book-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        makeSound("click");
        document.querySelectorAll('.book-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.book-page').forEach(p => p.classList.add('hidden'));
        tab.classList.add('active');
        const page = document.getElementById(tab.dataset.tab);
        page.classList.remove('hidden', 'flip');
        void page.offsetWidth;          // restart the animation
        page.classList.add('flip');
    });
});

// volume sliders: change instantly while dragging, save when released
['music', 'sfx'].forEach(kind => {
    const slider = document.getElementById(`${kind}-vol`);
    slider.addEventListener('input', () => {
        settings[kind] = Number(slider.value);
        applyVolumes();
    });
    slider.addEventListener('change', async () => {
        if (!auth.currentUser) return;
        await setDoc(doc(db, 'users', auth.currentUser.uid), { settings }, { merge: true });
    });
});

// ---------- TRACKS ----------
const TRACK_NAMES = { math: 'Math', cs: 'Computer Science', physics: 'Physics', biology: 'Biology', chemistry: 'Chemistry' };
let currentTrack = null;

document.querySelectorAll('.topic-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
        makeSound("click");
        currentTrack = btn.dataset.topic;
        await setDoc(doc(db, 'users', auth.currentUser.uid), { lastTrack: currentTrack }, { merge: true });
        startTrack(currentTrack);
    });
});

// ---------- LESSONS ----------
// correct answers needed to pass: about two-thirds (2 of 3, 3 of 4)
const passScore = (mod) => Math.ceil(mod.quiz.length * 2 / 3);
const el = (id) => document.getElementById(id);

let lesson = null;                    // { topic, mod, phase, step, score, answered }

// a module counts as done once its id (or, for a language module, any language) is completed
const isDone = (mod, done) =>
    done.includes(mod.id) || (mod.options && done.some(id => id.startsWith(mod.id + '-')));

// picking a track opens its module list first
function startTrack(topic) {
    lesson = { topic, phase: 'overview' };
    show('lesson');
    renderLesson();
}

function openModule(mod) {
    const mods = MODULES[lesson.topic];
    el('lesson-track').textContent = `${TRACK_NAMES[lesson.topic]} · Module ${mods.indexOf(mod) + 1}`;
    const base = { topic: lesson.topic, step: 0, score: 0, answered: false };
    lesson = mod.options
        ? { ...base, parent: mod, mod: null, phase: 'choose', picked: null }
        : { ...base, mod, phase: 'read' };
    renderLesson();
}

// module list: finished modules can be replayed, the next one is open, later ones are locked
function renderOverview() {
    const mods = MODULES[lesson.topic];
    const done = profile.completedModules || [];
    const finished = mods.filter(m => isDone(m, done)).length;
    const nextIndex = mods.findIndex(m => !isDone(m, done));
    el('lesson-track').textContent = `${TRACK_NAMES[lesson.topic]} track`;
    el('lesson-title').textContent = `${finished} of ${mods.length} modules complete`;
    el('lesson-progress-fill').style.width = (finished / mods.length * 100) + '%';
    el('lesson-heading').textContent = 'Modules';
    const list = document.createElement('div');
    list.className = 'module-list';
    mods.forEach((mod, i) => {
        const isFinished = isDone(mod, done);
        const isNext = i === nextIndex;
        const row = document.createElement('button');
        row.className = 'module-row' + (isFinished ? ' finished' : isNext ? ' next' : ' locked');
        row.disabled = !isFinished && !isNext;
        const num = document.createElement('span');
        num.className = 'module-num';
        num.textContent = isFinished ? '✓' : i + 1;
        const text = document.createElement('span');
        text.className = 'module-text';
        const title = document.createElement('strong');
        title.textContent = mod.title;
        const status = document.createElement('span');
        status.textContent = isFinished ? 'Completed · replay anytime'
            : isNext ? `Up next · ${mod.xp} XP`
            : `Locked · finish Module ${i} first`;
        text.append(title, status);
        row.append(num, text);
        row.addEventListener('click', () => { makeSound("click"); openModule(mod); });
        list.appendChild(row);
    });
    el('lesson-body').innerHTML = '';
    el('lesson-body').appendChild(list);
    el('lesson-prev').classList.add('hidden');
    el('lesson-next').disabled = false;
    el('lesson-next').textContent = nextIndex === -1 ? 'Track complete!' : 'Continue';
    el('lesson-next').disabled = nextIndex === -1;
}

// turn a picked option into a normal lesson module (its own id, so each option awards XP once)
function startLanguage(lang) {
    const parent = lesson.parent;
    lesson.mod = {
        id: `${parent.id}-${lang.id}`,
        title: `${parent.pickVerb} ${lang.name}`,
        xp: parent.xp,
        pages: lang.pages,
        quiz: lang.quiz,
    };
    Object.assign(lesson, { phase: 'read', step: 0, score: 0, answered: false });
    renderLesson();
}

function renderChooser() {
    const parent = lesson.parent;
    const done = profile.completedModules || [];
    el('lesson-title').textContent = parent.title;
    el('lesson-progress-fill').style.width = '0%';
    el('lesson-heading').textContent = parent.pickPrompt;
    el('lesson-body').innerHTML = `
        <div class="lang-picker" id="lang-picker"></div>
        <div class="lang-info" id="lang-info"><p class="small">Hover over an option to see what it's about. Click one to choose it.</p></div>`;
    const picker = el('lang-picker');
    const info = el('lang-info');

    function showInfo(lang) {
        info.innerHTML = '';
        const h = document.createElement('h4');
        h.textContent = lang.name;
        const tags = document.createElement('p');
        (lang.tags || []).forEach(t => {
            const span = document.createElement('span');
            span.className = 'tag';
            span.textContent = t;
            tags.append(span, ' ');
        });
        const purpose = document.createElement('p');
        purpose.textContent = lang.purpose;
        const label = document.createElement('p');
        label.innerHTML = `<strong>${parent.infoHeading}</strong>`;
        const list = document.createElement('ul');
        lang.apps.forEach(a => {
            const li = document.createElement('li');
            li.textContent = a;
            list.appendChild(li);
        });
        info.append(h, tags, purpose, label, list);
    }

    parent.options.forEach(lang => {
        const btn = document.createElement('button');
        btn.className = 'lang-option';
        if (lesson.picked === lang) btn.classList.add('picked');
        btn.textContent = lang.name + (done.includes(`${parent.id}-${lang.id}`) ? ' ✓' : '');
        btn.addEventListener('mouseenter', () => showInfo(lang));
        btn.addEventListener('focus', () => showInfo(lang));
        btn.addEventListener('mouseleave', () => { if (lesson.picked) showInfo(lesson.picked); });
        btn.addEventListener('click', () => {
            makeSound("click");
            lesson.picked = lang;
            picker.querySelectorAll('.lang-option').forEach(b => b.classList.toggle('picked', b === btn));
            showInfo(lang);
            el('lesson-next').disabled = false;
            el('lesson-next').textContent = `${parent.pickVerb} ${lang.name}`;
        });
        picker.appendChild(btn);
    });
    if (lesson.picked) showInfo(lesson.picked);

    el('lesson-prev').disabled = false;
    el('lesson-prev').textContent = 'Back';
    el('lesson-next').disabled = !lesson.picked;
    el('lesson-next').textContent = lesson.picked ? `${parent.pickVerb} ${lesson.picked.name}` : 'Pick one';
}

function renderLesson() {
    el('lesson-choices').innerHTML = '';
    el('lesson-feedback').textContent = '';
    el('lesson-prev').classList.remove('hidden');
    if (lesson.phase === 'overview') return renderOverview();
    if (lesson.phase === 'choose') return renderChooser();
    const { mod, phase, step } = lesson;
    el('lesson-title').textContent = mod.title;
    const totalSteps = mod.pages.length + mod.quiz.length;
    const choicesBox = el('lesson-choices');
    const prev = el('lesson-prev');
    const next = el('lesson-next');
    choicesBox.innerHTML = '';
    el('lesson-feedback').textContent = '';
    el('lesson-body').scrollTop = 0;
    prev.classList.remove('hidden');
    next.disabled = false;

    if (phase === 'read') {
        const page = mod.pages[step];
        el('lesson-progress-fill').style.width = ((step + 1) / totalSteps * 100) + '%';
        el('lesson-heading').textContent = page.heading;
        el('lesson-body').innerHTML = page.body;
        if (page.grid) renderGrid(page.grid);
        if (page.wolfram) renderWolfram(page.wolfram);
        prev.disabled = false;   // on page 1, Back returns to the module list (or the picker)
        next.textContent = step === mod.pages.length - 1 ? 'Start quiz' : 'Next';
    }

    else if (phase === 'quiz') {
        const item = mod.quiz[step];
        el('lesson-progress-fill').style.width = ((mod.pages.length + step + 1) / totalSteps * 100) + '%';
        el('lesson-heading').textContent = `Question ${step + 1} of ${mod.quiz.length}`;
        el('lesson-body').innerHTML = '';
        const q = document.createElement('p');
        q.textContent = item.q;
        el('lesson-body').appendChild(q);
        // code puzzles: 'line' = click the buggy line, 'blank' = pick the missing keyword
        if (item.code) el('lesson-body').appendChild(renderCode(item));
        if (item.type !== 'line') {
            item.choices.forEach((choice, i) => {
                const btn = document.createElement('button');
                btn.className = 'lesson-choice' + (item.code ? ' code-choice' : '');
                btn.textContent = choice;
                btn.addEventListener('click', () => answer(i));
                choicesBox.appendChild(btn);
            });
        }
        prev.classList.add('hidden');
        next.disabled = !lesson.answered;
        next.textContent = step === mod.quiz.length - 1 ? 'Finish' : 'Next';
    }

    else if (phase === 'result') {
        el('lesson-progress-fill').style.width = '100%';
        const passed = lesson.score >= passScore(lesson.mod);
        el('lesson-heading').textContent = passed ? 'Module complete!' : 'Almost there!';
        el('lesson-body').innerHTML = '';
        const p = document.createElement('p');
        p.textContent = `You got ${lesson.score} out of ${mod.quiz.length} correct.`;
        el('lesson-body').appendChild(p);
        if (passed && lesson.reward) {
            const r = document.createElement('p');
            r.className = 'takeaway';
            r.textContent = lesson.reward;
            el('lesson-body').appendChild(r);
        } else if (!passed) {
            const r = document.createElement('p');
            r.textContent = `You need ${passScore(mod)} correct to pass. Review the lesson or try the quiz again.`;
            el('lesson-body').appendChild(r);
        }
        prev.textContent = 'Review lesson';
        next.textContent = passed ? 'Back to home' : 'Try again';
    }

    if (phase !== 'result') prev.textContent = 'Back';
}

// hover-to-explore tiles (e.g. the periodic table)
function renderGrid(items) {
    const grid = document.createElement('div');
    grid.className = 'explore-grid';
    const info = document.createElement('div');
    info.className = 'lang-info';
    info.innerHTML = '<p class="small">Hover over (or tap) a tile to learn about it.</p>';

    function showItem(item) {
        info.innerHTML = '';
        const h = document.createElement('h4');
        h.textContent = item.title;
        info.appendChild(h);
        if (item.category) {
            const tag = document.createElement('p');
            const span = document.createElement('span');
            span.className = 'tag';
            span.textContent = item.category;
            tag.appendChild(span);
            info.appendChild(tag);
        }
        (item.lines || []).forEach(line => {
            const p = document.createElement('p');
            p.textContent = line;
            info.appendChild(p);
        });
    }

    items.forEach(item => {
        const tile = document.createElement('button');
        tile.className = 'explore-tile' + (item.group ? ' group-' + item.group : '');
        const num = document.createElement('span');
        num.className = 'tile-num';
        num.textContent = item.number ?? '';
        const label = document.createElement('span');
        label.className = 'tile-label';
        label.textContent = item.label;
        tile.append(num, label);
        tile.addEventListener('mouseenter', () => showItem(item));
        tile.addEventListener('focus', () => showItem(item));
        tile.addEventListener('click', () => {
            makeSound("click");
            grid.querySelectorAll('.explore-tile').forEach(t => t.classList.toggle('picked', t === tile));
            showItem(item);
        });
        grid.appendChild(tile);
    });
    el('lesson-body').append(grid, info);
}

// Ask Wolfram box: sends the question to our /api/wolfram function
function renderWolfram(opts) {
    const box = document.createElement('div');
    box.className = 'wolfram-box';
    box.innerHTML = `
        <div class="wolfram-row">
            <input class="wolfram-input" type="text" maxlength="200">
            <button class="wolfram-ask">Ask</button>
        </div>
        <div class="wolfram-examples"></div>
        <pre class="wolfram-answer hidden"></pre>`;
    const input = box.querySelector('.wolfram-input');
    const answer = box.querySelector('.wolfram-answer');
    input.placeholder = opts.placeholder || 'Ask a question...';

    opts.examples.forEach(ex => {
        const chip = document.createElement('button');
        chip.className = 'wolfram-example';
        chip.textContent = ex;
        chip.addEventListener('click', () => { input.value = ex; ask(); });
        box.querySelector('.wolfram-examples').appendChild(chip);
    });

    async function ask() {
        const q = input.value.trim();
        if (!q) return;
        makeSound("click");
        answer.classList.remove('hidden');
        answer.textContent = 'Asking Wolfram|Alpha...';
        try {
            const res = await fetch('/api/wolfram?q=' + encodeURIComponent(q));
            const text = await res.text();
            // the local Vite server returns the function's source instead of running it
            const isSource = (res.headers.get('content-type') || '').includes('javascript');
            if (!res.ok || isSource) throw new Error(text);
            answer.textContent = cleanWolfram(text);
        } catch (err) {
            answer.textContent = "Wolfram couldn't answer that one. Try rephrasing, or try again on the live site.";
        }
    }
    box.querySelector('.wolfram-ask').addEventListener('click', ask);
    input.addEventListener('keydown', (e) => { if (e.key === 'Enter') ask(); });
    el('lesson-body').appendChild(box);
}

// keep the readable lines of Wolfram's answer and drop image links
function cleanWolfram(text) {
    return text.split('\n')
        .filter(line => !/^(image:|Wolfram\|Alpha website result|Wolfram Language code)/i.test(line.trim()))
        .filter(line => !line.includes('https://'))
        .join('\n')
        .replace(/\n{3,}/g, '\n\n')
        .trim();
}

function answer(i) {
    if (lesson.answered) return;
    makeSound("click");
    const item = lesson.mod.quiz[lesson.step];
    const correct = i === item.answer;
    lesson.answered = true;
    if (correct) lesson.score++;
    // line puzzles mark the code lines; everything else marks the choice buttons
    const buttons = item.type === 'line'
        ? el('lesson-body').querySelectorAll('.code-line')
        : el('lesson-choices').querySelectorAll('.lesson-choice');
    buttons.forEach((btn, j) => {
        btn.disabled = true;
        if (j === item.answer) btn.classList.add('correct');
        else if (j === i) btn.classList.add('wrong');
    });
    // blank puzzles: drop the right keyword into the code
    el('lesson-body').querySelectorAll('.code-blank').forEach(b => {
        b.textContent = item.choices[item.answer];
        b.classList.add('filled');
    });
    if (item.explain) {
        el('lesson-feedback').textContent = (correct ? 'Correct! ' : 'Not quite. ') + item.explain;
    } else {
        el('lesson-feedback').textContent = correct
            ? 'Correct!'
            : `Not quite. The answer is "${item.choices[item.answer]}".`;
    }
    el('lesson-next').disabled = false;
}

// ---------- CODE PANEL (IDE look) ----------
const KEYWORDS = {
    python: ['def', 'return', 'if', 'elif', 'else', 'for', 'while', 'in', 'and', 'or', 'not', 'class', 'import', 'True', 'False', 'None', 'print'],
    javascript: ['let', 'const', 'var', 'function', 'return', 'if', 'else', 'for', 'while', 'class', 'new', 'true', 'false', 'null'],
    java: ['public', 'private', 'class', 'static', 'void', 'int', 'double', 'boolean', 'String', 'new', 'return', 'if', 'else', 'for', 'while'],
    cpp: ['int', 'double', 'bool', 'void', 'return', 'if', 'else', 'for', 'while', 'class', 'public', 'private', 'std', 'include'],
    html: [],
};
const FILE_NAMES = { python: 'main.py', javascript: 'script.js', java: 'Main.java', cpp: 'main.cpp', html: 'index.html' };

// color one line of code safely (text only, no HTML injection)
function colorLine(text, lang, parent) {
    const words = KEYWORDS[lang] || [];
    const commentMark = lang === 'python' ? '#' : '//';
    const pattern = /("[^"]*"?|'[^']*'?|\b\d+\b|\b[A-Za-z_]+\b|___|<\/?[a-z]+|#.*|\/\/.*)/g;
    let last = 0;
    for (const m of text.matchAll(pattern)) {
        if (m.index > last) parent.append(text.slice(last, m.index));
        const tok = m[0];
        const span = document.createElement('span');
        span.textContent = tok;
        if (tok === '___') span.className = 'code-blank';
        else if (tok.startsWith(commentMark) && lang !== 'cpp') span.className = 'tok-comment';
        else if (lang === 'cpp' && tok.startsWith('#')) span.className = 'tok-keyword';
        else if (tok.startsWith('//')) span.className = 'tok-comment';
        else if (tok[0] === '"' || tok[0] === "'") span.className = 'tok-string';
        else if (/^\d/.test(tok)) span.className = 'tok-number';
        else if (tok[0] === '<') span.className = 'tok-tag';
        else if (words.includes(tok)) span.className = 'tok-keyword';
        else span.className = '';
        parent.appendChild(span);
        last = m.index + tok.length;
    }
    if (last < text.length) parent.append(text.slice(last));
}

function renderCode(item) {
    const panel = document.createElement('div');
    panel.className = 'code-panel';
    const tab = document.createElement('div');
    tab.className = 'code-tab';
    tab.textContent = FILE_NAMES[item.lang] || 'code';
    panel.appendChild(tab);
    const body = document.createElement('div');
    body.className = 'code-lines';
    item.code.split('\n').forEach((line, i) => {
        const row = document.createElement(item.type === 'line' ? 'button' : 'div');
        row.className = 'code-line';
        const num = document.createElement('span');
        num.className = 'code-num';
        num.textContent = i + 1;
        const content = document.createElement('span');
        content.className = 'code-text';
        colorLine(line || ' ', item.lang, content);
        row.append(num, content);
        if (item.type === 'line') row.addEventListener('click', () => answer(i));
        body.appendChild(row);
    });
    panel.appendChild(body);
    return panel;
}

async function completeModule() {
    const { mod } = lesson;
    const done = profile.completedModules || [];
    lesson.reward = '';
    if (done.includes(mod.id)) return;          // XP and pets are only awarded once

    const completedModules = [...done, mod.id];
    const oldLevel = levelFor(profile.xp || 0);
    const xp = (profile.xp || 0) + mod.xp;
    const newLevel = levelFor(xp);
    const pets = petsForLevel(newLevel);
    const newPets = PETS.filter(p => pets.includes(p.id) && !petsForLevel(oldLevel).includes(p.id));

    profile = { ...profile, xp, completedModules, pets };
    lesson.reward = `+${mod.xp} XP`;
    if (newLevel > oldLevel) lesson.reward += ` · Level up! You're now Level ${newLevel}`;
    if (newPets.length) lesson.reward += ` · New companion: ${newPets.map(p => p.name).join(', ')}!`;
    try {
        await setDoc(doc(db, 'users', auth.currentUser.uid), { xp, completedModules, pets }, { merge: true });
    } catch (err) {
        console.error('Saving progress failed:', err.code);
    }
    checkAchievements();
}

el('lesson-next').addEventListener('click', async () => {
    makeSound("click");
    if (lesson.phase === 'overview') {
        const mods = MODULES[lesson.topic];
        const next = mods.find(m => !isDone(m, profile.completedModules || []));
        if (next) openModule(next);
        return;
    }
    if (lesson.phase === 'choose') {
        if (lesson.picked) startLanguage(lesson.picked);
        return;
    }
    const { mod } = lesson;
    if (lesson.phase === 'read') {
        if (lesson.step < mod.pages.length - 1) lesson.step++;
        else Object.assign(lesson, { phase: 'quiz', step: 0, score: 0, answered: false });
    } else if (lesson.phase === 'quiz') {
        if (lesson.step < mod.quiz.length - 1) {
            lesson.step++;
            lesson.answered = false;
        } else {
            lesson.phase = 'result';
            if (lesson.score >= passScore(lesson.mod)) await completeModule();
        }
    } else if (lesson.phase === 'result') {
        if (lesson.score >= passScore(lesson.mod)) return show('map');
        Object.assign(lesson, { phase: 'quiz', step: 0, score: 0, answered: false });
    }
    renderLesson();
});

el('lesson-prev').addEventListener('click', () => {
    makeSound("click");
    if (lesson.phase === 'read' && lesson.step > 0) lesson.step--;
    else if (lesson.phase === 'read' && lesson.parent) lesson.phase = 'choose';
    else if (lesson.phase === 'read' || lesson.phase === 'choose') lesson = { topic: lesson.topic, phase: 'overview' };
    else if (lesson.phase === 'result') Object.assign(lesson, { phase: 'read', step: 0, score: 0, answered: false });
    renderLesson();
});

el('lesson-back').addEventListener('click', () => {
    makeSound("click");
    show('map');
});

show('login');





