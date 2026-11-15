import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

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
const APP_NAME = 'HackPrinceton';
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
    const el = document.querySelector(`.char-layer[data-layer="${key}"]`);
    const f = L.filters[character[key]];
    el.style.display = f === 'hide' ? 'none' : 'block';
    el.style.filter = f === 'hide' ? 'none' : f;
    el.style.backgroundPositionY = (L.row / 11 * 100) + '%';
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

document.getElementById('creator-done').addEventListener('click', async () => {
    makeSound("click");
    await setDoc(doc(db, 'users', auth.currentUser.uid), { character }, { merge: true });
    profile.character = character;
    goTo('map');
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
}


// Intro
const introLines = [
    "Everything we know about our world began with a question.",
    "With knowledge, we came to understand the Earth, and then we used it to build, invent, and move forward.",
    "But the world still has room to grow. And it grows stronger with every person who learns.",
    "Here, you'll explore topics like math and computer science by visiting different places and meeting new characters.",
    "Spend time on a module to earn XP. Earn enough, and you'll level up. Finish a whole topic, and a pet companion will join you on your journey.",
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
        if (profile.character) { character = profile.character; for (const key in LAYERS) applyLayer(key); }

        if (snap.exists() && snap.data().name) {
            document.getElementById('welcome-text').textContent =
                `Welcome back, ${snap.data().name}!`; 
            music.play().catch(() => {});
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
    goTo('creator');
});

document.getElementById('continue-btn').addEventListener('click', () => {
    makeSound("click");
    goTo('map');
});

// Navigation
const flow = ['name', 'creator', 'map'];
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

document.getElementById('replay-intro').addEventListener('click', () => {
    makeSound("click");
    closeMenu();
    returnTo = currentScreen;
    music.pause();
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

// ---------- LEARNING LOG ----------
const PETS = [
    { id: 'capybara', name: 'Capybara', img: '/images/pets/capybara.png', hint: 'Complete Math Module 1' },
    { id: 'toucan',   name: 'Toucan',   img: '/images/pets/toucan.png',   hint: 'Complete CS Module 1' },
    { id: 'frog',     name: 'Frog',     img: '/images/pets/frog.png',     hint: 'Complete 3 modules' },
];

function renderLog() {
    const xp = profile.xp || 0;
    const level = Math.floor(xp / 100) + 1;           // every 100 XP = 1 level
    const xpIntoLevel = xp % 100;

    document.getElementById('log-name').textContent = profile.name || 'Traveler';
    document.getElementById('log-joined').textContent = profile.joinedAt
        ? new Date(profile.joinedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
        : '—';
    document.getElementById('log-level').textContent = level;
    document.getElementById('xp-fill').style.width = xpIntoLevel + '%';
    document.getElementById('log-xp-text').textContent = `${xpIntoLevel} / 100 XP to Level ${level + 1}`;
    document.getElementById('log-modules').textContent = (profile.completedModules || []).length;

    // pets: owned = color, not owned = silhouette
    const owned = profile.pets || [];
    const grid = document.getElementById('pet-grid');
    grid.innerHTML = '';
    PETS.forEach(pet => {
        const has = owned.includes(pet.id);
        const card = document.createElement('div');
        card.className = 'pet' + (has ? '' : ' locked');
        card.innerHTML = `
            <img src="${pet.img}" alt="${pet.name}">
            <p>${has ? pet.name : '???'}</p>
            ${has ? '' : `<p class="hint">${pet.hint}</p>`}
        `;
        grid.appendChild(card);
    });

    // settings sliders show saved values
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
        document.getElementById(tab.dataset.tab).classList.remove('hidden');
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