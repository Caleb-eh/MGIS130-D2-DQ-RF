const QUOTES_DATA = {
    philosopher: [
        { quote: "Contentment is natural wealth, luxury is artificial poverty.", author: "Socrates" },
        { quote: "What did you do as a child that made the hours pass like minutes? Herein lies the key to your earthly pursuits.", author: "Carl Jung" },
        { quote: "When you are content to be simply yourself and don't compare or compete, everyone will respect you.", author: "Lao Tzu" },
        { quote: "Become what you are.", author: "Friedrich Nietzsche" },
        { quote: "The privilege of a lifetime is to become who you truly are.", author: "C.G. Jung" },
        { quote: "Out of suffering have emerged the strongest souls; the most massive characters are seared with scars.", author: "Kahlil Gibran" },
        { quote: "Happiness consists in realizing it is all a great strange dream.", author: "Jack Kerouac" },
        { quote: "Nature does not hurry, yet everything is accomplished.", author: "Lao Tzu" },
        { quote: "Life is a series of natural and spontaneous changes. Don't resist them; that only creates sorrow.", author: "Lao Tzu" },
        { quote: "Life is not a problem to be solved, but a reality to be experienced.", author: "Søren Kierkegaard" }
    ],
    movie: [
        { quote: "Frankly, my dear, I don't give a damn.", author: "Rhett Butler (Gone with the Wind)" },
        { quote: "I'm going to make him an offer he can't refuse.", author: "Don Vito Corleone (The Godfather)" },
        { quote: "Here's looking at you, kid.", author: "Rick Blaine (Casablanca)" },
        { quote: "May the Force be with you.", author: "Han Solo (Star Wars)" },
        { quote: "Carpe diem. Seize the day, boys. Make your lives extraordinary.", author: "John Keating (Dead Poets Society)" },
        { quote: "Mama always said life was like a box of chocolates. You never know what you're gonna get.", author: "Forrest Gump (Forrest Gump)" },
        { quote: "There's no place like home.", author: "Dorothy Gale (The Wizard of Oz)" },
        { quote: "You can't handle the truth!", author: "Col. Nathan R. Jessep (A Few Good Men)" },
        { quote: "I'm king of the world!", author: "Jack Dawson (Titanic)" }
    ],
    athlete: [
        { quote: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
        { quote: "It's hard to beat a person who never gives up.", author: "Babe Ruth" },
        { quote: "Make each day your masterpiece.", author: "John Wooden" },
        { quote: "Champions keep playing until they get it right.", author: "Billie Jean King" },
        { quote: "The man who has no imagination has no wings.", author: "Muhammad Ali" },
        { quote: "Talent wins games, but teamwork and intelligence win championships.", author: "Michael Jordan" },
        { quote: "Tough times don't last. Tough people do.", author: "Robert H. Schuller" },
        { quote: "Hard work beats talent when talent doesn't work hard.", author: "Tim Notke" },
        { quote: "Float like a butterfly, sting like a bee.", author: "Muhammad Ali" }
    ]
};

const FACTS_DATA = [
    "A cloud weighs around a million tonnes, floating gracefully in the sky.",
    "Identical twins don't have the same fingerprints due to micro-environmental factors in the womb.",
    "Earth's rotation is gradually slowing; 600 million years ago, a day lasted just 21 hours.",
    "Leftover cooked and cooled pasta contains resistant starch, offering extra health and gut benefits.",
    "When reading silently, your vocal muscles still activate in a process called subvocalization.",
    "The fear of long words is called Hippopotomonstrosesquippedaliophobia.",
    "A comet smells like rotten eggs, urine, burning matches, and almonds.",
    "Chainsaws were originally invented in the late 18th century by Scottish doctors to assist in childbirth.",
    "The quietest place on Earth is Microsoft's anechoic chamber, measuring -20.6 decibels.",
    "Orphaned orcas have been observed by scientists wearing dead salmon as hats for unknown reasons.",
    "Water itself might not be wet; wetness is defined as a liquid's ability to stick to a solid surface.",
    "The Universe's average color is an off-white beige shade named 'Cosmic Latte'."
];

const state = {
    userName: localStorage.getItem('dq_username') || '',
    category: localStorage.getItem('dq_category') || 'all',
    theme: localStorage.getItem('dq_theme') || 'philosopher',
    currentQuote: null,
    currentFact: ''
};

const elements = {
    onboardingScreen: document.getElementById('onboarding-screen'),
    dashboardScreen: document.getElementById('dashboard-screen'),
    onboardingForm: document.getElementById('onboarding-form'),
    usernameInput: document.getElementById('username-input'),
    userGreeting: document.getElementById('user-greeting'),
    currentDate: document.getElementById('current-date'),
    quoteCategoryTag: document.getElementById('quote-category-tag'),
    quoteText: document.getElementById('quote-text'),
    quoteAuthor: document.getElementById('quote-author'),
    factText: document.getElementById('fact-text'),
    regenerateBtn: document.getElementById('regenerate-btn'),
    settingsBtn: document.getElementById('settings-btn'),
    settingsDrawer: document.getElementById('settings-drawer'),
    closeSettingsBtn: document.getElementById('close-settings-btn'),
    drawerOverlay: document.getElementById('drawer-overlay'),
    settingsUsername: document.getElementById('settings-username'),
    settingsCategory: document.getElementById('settings-category'),
    saveSettingsBtn: document.getElementById('save-settings-btn'),
    themeBtns: document.querySelectorAll('.theme-opt-btn'),
    copyQuoteBtn: document.getElementById('copy-quote-btn'),
    copyFactBtn: document.getElementById('copy-fact-btn'),
    toast: document.getElementById('toast')
};

function init() {
    // Set formatted date
    const options = { weekday: 'long', month: 'short', day: 'numeric' };
    elements.currentDate.textContent = new Date().toLocaleDateString('en-US', options);

    // Check existing onboarding status
    if (state.userName) {
        showDashboard();
    } else {
        showOnboarding();
    }

    applyTheme(state.theme);
    setupEventListeners();
}

function applyTheme(themeName) {
    state.theme = themeName;
    document.body.className = `theme-${themeName}`;
    localStorage.setItem('dq_theme', themeName);

    // Update Theme buttons active state
    elements.themeBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.theme === themeName);
    });
}

function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function getRandomQuote(category) {
    let cat = category;
    if (cat === 'all') {
        const categories = ['philosopher', 'movie', 'athlete'];
        cat = getRandomItem(categories);
    }
    const pool = QUOTES_DATA[cat] || QUOTES_DATA.philosopher;
    return { ...getRandomItem(pool), catType: cat };
}

function generateNewContent() {
    state.currentQuote = getRandomQuote(state.category);
    state.currentFact = getRandomItem(FACTS_DATA);

    // Update UI Content
    elements.quoteText.textContent = `"${state.currentQuote.quote}"`;
    elements.quoteAuthor.textContent = `— ${state.currentQuote.author}`;
    
    const catLabels = { philosopher: 'Philosophy', movie: 'Cinema', athlete: 'Athletics' };
    const catIcons = { philosopher: 'fa-scroll', movie: 'fa-film', athlete: 'fa-trophy' };
    
    elements.quoteCategoryTag.innerHTML = `<i class="fa-solid ${catIcons[state.currentQuote.catType]}"></i> ${catLabels[state.currentQuote.catType]}`;
    elements.factText.textContent = state.currentFact;

    // Automatically synchronize theme with chosen quote category if category is specific
    if (state.category !== 'all') {
        applyTheme(state.category);
    }
}

function showDashboard() {
    elements.userGreeting.textContent = `Good day, ${state.userName}`;
    generateNewContent();

    elements.onboardingScreen.classList.add('hidden');
    elements.dashboardScreen.classList.remove('hidden');
    
    // Re-trigger entrance animations
    document.querySelectorAll('#dashboard-screen .fade-up').forEach(el => {
        el.style.animation = 'none';
        el.offsetHeight; // Reflow trigger
        el.style.animation = null;
    });
}

function showOnboarding() {
    elements.onboardingScreen.classList.remove('hidden');
    elements.dashboardScreen.classList.add('hidden');
}

function showToast(message) {
    elements.toast.textContent = message;
    elements.toast.classList.remove('hidden');
    setTimeout(() => {
        elements.toast.classList.add('hidden');
    }, 2500);
}

function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    try {
        document.execCommand('copy');
        showToast('Copied to clipboard!');
    } catch (err) {
        showToast('Failed to copy');
    }
    document.body.removeChild(textarea);
}

function setupEventListeners() {
    // Onboarding Submission
    elements.onboardingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = elements.usernameInput.value.trim();
        const category = elements.onboardingForm.querySelector('input[name="category"]:checked').value;

        if (name) {
            state.userName = name;
            state.category = category;
            localStorage.setItem('dq_username', name);
            localStorage.setItem('dq_category', category);
            
            showDashboard();
        }
    });

    // Regenerate Pair Button
    elements.regenerateBtn.addEventListener('click', () => {
        generateNewContent();
    });

    // Settings Drawer Open/Close
    elements.settingsBtn.addEventListener('click', () => {
        elements.settingsUsername.value = state.userName;
        elements.settingsCategory.value = state.category;
        elements.settingsDrawer.classList.remove('hidden');
    });

    const closeDrawer = () => elements.settingsDrawer.classList.add('hidden');
    elements.closeSettingsBtn.addEventListener('click', closeDrawer);
    elements.drawerOverlay.addEventListener('click', closeDrawer);

    // Save Settings
    elements.saveSettingsBtn.addEventListener('click', () => {
        const newName = elements.settingsUsername.value.trim();
        if (newName) {
            state.userName = newName;
            state.category = elements.settingsCategory.value;
            
            localStorage.setItem('dq_username', state.userName);
            localStorage.setItem('dq_category', state.category);
            
            elements.userGreeting.textContent = `Good day, ${state.userName}`;
            generateNewContent();
            closeDrawer();
            showToast('Preferences updated!');
        }
    });

    // Theme Swatch Selector inside Settings Drawer
    elements.themeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const theme = btn.dataset.theme;
            applyTheme(theme);
        });
    });

    // Copy Quote & Fact Buttons
    elements.copyQuoteBtn.addEventListener('click', () => {
        copyToClipboard(`"${state.currentQuote.quote}" — ${state.currentQuote.author}`);
    });

    elements.copyFactBtn.addEventListener('click', () => {
        copyToClipboard(state.currentFact);
    });
}
