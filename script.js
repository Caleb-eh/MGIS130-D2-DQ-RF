// Data Content Pools
const quoteData = {
  philosophy: [
    { quote: "The unexamined life is not worth living.", author: "Socrates" },
    { quote: "He who is not satisfied with a little, is satisfied with nothing.", author: "Epictetus" },
    { quote: "He who has a why to live can bear almost any how.", author: "Friedrich Nietzsche" },
    { quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", author: "Aristotle" },
    { quote: "Liberty consists in doing what one desires.", author: "John Stuart Mill" },
    { quote: "Life must be understood backward. But it must be lived forward.", author: "Søren Kierkegaard" },
    { quote: "Euuhhhhh, ooohh, ahhhhhhh", author: "Sun Tzu" },
    { quote: "Cornballs never make it very far in life.", author: "Potato Head" },
    { quote: "If you try to lift a heavy stone, you will find out how heavy the stone is.", author: "Barnaby the Wise" },
    { quote: "Do not fear the dark; fear the evil things that definitely exist when walking in the dark.", author: "Ancient Sleep-Poo/Walker Proverb" },
    { quote: "Before you criticize someone, walk a mile in their shoes. That way, when you criticize them, you're a mile away and you have their shoes.", author: "Professor Wandering" },
    { quote: "Confidence is 10% knowing what you are doing and 90% walking very fast while holding a clipboard.", author: "Dr. Arthur Vance" },
    { quote: "A soup without salt is just sad hot chunk water.", author: "Baron Von Noodleberg" },
    { quote: "If a door is closed, open it. That is how doors work.", author: "Sir Reginald Flapjack III" },
    { quote: "Never trust a squirrel with a secret; they hide everything in the dirt.", author: "Archduke Snortington" },
    { quote: "The early bird gets the worm, but the sleepy bird gets to stay in bed. And that, my fellows, is better.", author: "Professor McSnoozington" },
    { quote: "To be or not to be isn't the question. The question is: who ate the rest of my Limited Edition Pringles Miller Lite Beer Cheese Burger Potato Crisps?", author: "Garth Burlap, Philosopher at Large" }
  ],
  movie: [
    { quote: "Frankly, my dear, I don't give a damn.", author: "Gone with the Wind (1939)" },
    { quote: "Here's looking at you, kid.", author: "Casablanca (1942)" },
    { quote: "May the Force be with you.", author: "Star Wars (1977)" },
    { quote: "You talking to me?", author: "Taxi Driver (1976)" },
    { quote: "There's no place like home.", author: "The Wizard of Oz (1939)" },
    { quote: "What is this? A center for ants?! How can we be expected to teach children to learn how to read if they can't even fit inside the building?", author: "Tom Bomb (2026)" },
    { quote: "Float like a lily pad, sting like a really angry bee", author: "Cars (2006)" },
    { quote: "If you're going hard enough left, you'll find yourself turning left.", author: "Also Cars (2006)" },
    { quote: "Thank you! Or should I say, NO thank you? Because in opposite world, maybe that really means thank you!", author: "Cars again (2006)" },
    { quote: "I rit my rants, raggy", author: "Scooby Doo (???)" },
    { quote: "You can't arrest me, officer! I just crossed state lines which means your dumb laws don't apply here, so you better back off.", author: "Lord Gigglesworth in 'Wild Chase' (2022)" },
    { quote: "Put down the spatula! That pancake is a load-bearing breakfast item!", author: "Chef Bartholomew Bounce (2025)" },
    { quote: "We came for the treasure, but we stayed because the ghost was really nice, he gave us warm milk and actually sat me down and talked me through my recent divorce and really helped me out because that's been really hard on me. I don't know, man, it's just been really hard lately, but this ghost really provided something to me that I didn't know I needed. he helped me more than he knows.", author: "Commander Biscuit (2020)" }
  ],
  athlete: [
    { quote: "I hated every minute of training, but I said, 'Don't quit. Suffer now and live the rest of your life as a champion.'", author: "Muhammad Ali" },
    { quote: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
    { quote: "I've failed over and over and over again in my life. And that is why I succeed.", author: "Michael Jordan" },
    { quote: "Gold medals aren't really made of gold. They're made of sweat, determination, and a hard-to-find alloy called guts.", author: "Dan Gable" },
    { quote: "It's not whether you get knocked down, it's whether you get up.", author: "Vince Lombardi" },
    { quote: "When asked if the extra shots after knocking out his opponent were necessary - They were super necessary.", author: "Jorge Masvidal" },
    { quote: "I run fast because if I stop moving, the mysterious evil entity that has been chasing me since I was 5 and a half years old catches up to me.", author: "Sprint Master Greg" },
    { quote: "Pain is just weakness leaving the body, but cramps are just your legs being rude.", author: "Marathon Manny" },
    { quote: "My secret technique? I pretend the basketball is a precious little baby boy and the only safe place for it is the basketball hoop, which I imagine is a soft liite baby boy bed. So I throw it in.", author: "Dunkin' Dave" },
    { quote: "I don't play for the trophies; I play for the post-game showers with the boys.", author: "Coach Chuck" },
    { quote: "Get off your high horse", author: "Wade Clubb" },
    { quote: "Rappers who use auto-tune VS. Rappers who don't", author: "Theo Wolfe" }
  ],
  lyrics: [
    { quote: "We may lose, we may win, but we will never be here again.", author: "Eagles - \"Take It Easy\"" },
    { quote: "You may say I'm a dreamer, but I'm not the only one.", author: "John Lennon – \"Imagine\"" },
    { quote: "If I leave here tomorrow, would you still remember me?", author: "Lynyrd Skynyrd - \"Free Bird\"" },
    { quote: "Don't stop believin', hold on to that feelin'.", author: "Journey – \"Don't Stop Believin'\"" },
    { quote: "Today is where your book begins, the rest is still unwritten.", author: "Natasha Bedingfield – \"Unwritten\"" },
    { quote: "It's my life, it's now or never. I ain't gonna live forever.", author: "Bon Jovi – \"It's My Life\"" },
    { quote: "But if you never try, you'll never know, just what you're worth", author: "Coldplay – \"Fix You\"" },
    { quote: "Every little thing is gonna be alright.", author: "Bob Marley – \"Three Little Birds\"" },
    { quote: "They say nothing lasts forever, but they ain't seen us together.", author: "Luke Combs – \"Forever After All\"" },
    { quote: "Sometimes I wish that I could freeze the picture, and save it from the funny tricks of time.", author: "ABBA – \"Slipping Through My Fingers\"" },
    { quote: "I've got all I need, and that's alright by me.", author: "Darius Rucker – \"Alright\"" },
    { quote: "Carry on my wayward son, there'll be peace when you are done.", author: "Kansas – \"Carry On Wayward Son\"" },
    { quote: "Wherever you are's where I want to be.", author: "Chris Stapleton – \"Starting Over\"" },
    { quote: "If you've got a dream, chase it, 'cause the dream won't chase you back.", author: "Cody Johnson – \"'Til You Can't\"" },
    { quote: "It just takes some time, little girl, you're in the middle of the ride, everything'll be just fine.", author: "Jimmy Eat World – \"The Middle\"" },
    { quote: "When all the parts of the puzzle start to look like they fit, then I must remember, there'll be days like this.", author: "Van Morrison – \"Days Like This\"" },
    { quote: "Maybe a reason why all the doors are closed, so you could open one that leads you to the perfect road.", author: "Katy Perry – \"Firework\"" }
  ]
};

const factData = [
  "A day on Venus is longer than a year on Venus.",
  "Human teeth are the only part of the body that cannot heal themselves.",
  "Bananas are radioactive because they contain high levels of potassium.",
  "Water can boil and freeze at the exact same time under specific lab conditions (the triple point).",
  "Wombat poop is cube-shaped to prevent it from rolling away.",
  "Your brain uses roughly 20 percent of your body's total energy.",
  "Ty sits next to Caleb in this class.",
  "Gus was wearing a white sweater when I wrote this. I don't know what it said, though.",
  "The quote above me is dumb.",
  "One day I will meet John Lennon in person.",
  "Sometimes when I wake up, I have to pee.",
  "Twitter is called X now.",
  "Last year, winter happened around November.",
  "One time I ate a banana. i dropped it",
  "Blue is better than red.",
  "Nobody actually likes sparkling water.",
  "Sometimes, a dog bark",
  "I drew a realistic pickle and it tasted like one too. It was a real pickle actually, I just put it on a piece of paper and took a picture of it.",
  "Who is Michael Jackson? I don't recognize that name",
  "That one Michael Jackson thing isn't even a fact; it's just a question. THIS is a fact.",
  "When it rains, it pours. Sometimes.",
  "When I don't eat, I get hungry.",
  "Wombat poop is a cube? Actually? What kind of function is that? Not rolling away? Why wouldn't you want your poop to roll away? You wanna keep it? I wouldn't want to keep it. I want it gone.",
  "Pizza is spelt P-I-Z-Z-A. I think.",
  "Bread was invented years ago.",
  "Birds can fly most of the time.",
  "Pigs cannot fly.",
  "A door's primary function is to open and close.",
  "Celery is 95% terrible",
  "I don't remember the last time I forgot.",
  "The sun is very hot.",
  "You can't drink something that is not liquid.",
  "When two people love each other very much...",
  "Bazinga! Oh shoot, this is the fact tab, not the quote tab... also that's from a TV show... double doofus",
  "Star Wars is not real (I didn't know that).",
  "Crap, I forgot what the fact was.",
  "Getting eaten alive probably hurts.",
  "One time I got robbed, it made me sad. They took my favourite floorboard.",
  "I have never been to court.",
  "You are reading this right now.",
  "Drugz r bad"
];

// App State Management with LocalStorage Support
let userState = JSON.parse(localStorage.getItem('dailySparkUserState')) || {
  name: "",
  category: "all",
  theme: "auto"
};

let favorites = JSON.parse(localStorage.getItem('dailySparkFavorites')) || [];
let currentQuoteObj = { quote: "", author: "" };

const recentQuotes = [];
const recentFacts = [];
const REPEAT_THRESHOLD = 4;

// DOM Elements
const setupScreen = document.getElementById("setup-screen");
const setupForm = document.getElementById("setup-form");
const usernameInput = document.getElementById("username");
const categorySelect = document.getElementById("category");

const greetingText = document.getElementById("greeting-text");
const liveDate = document.getElementById("live-date");
const liveTime = document.getElementById("live-time");
const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const quoteCategoryLabel = document.getElementById("quote-category-label");
const factText = document.getElementById("fact-text");
const regenerateBtn = document.getElementById("regenerate-btn");

const hamburgerBtn = document.getElementById("hamburger-btn");
const settingsDrawer = document.getElementById("settings-drawer");
const drawerBackdrop = document.getElementById("drawer-backdrop");
const closeDrawerBtn = document.getElementById("close-drawer-btn");
const saveSettingsBtn = document.getElementById("save-settings-btn");
const settingsName = document.getElementById("settings-name");
const settingsCategory = document.getElementById("settings-category");
const settingsTheme = document.getElementById("settings-theme");

const toast = document.getElementById("toast");
const favBtn = document.getElementById("favorite-quote-btn");
const copyQuoteBtn = document.getElementById("copy-quote-btn");
const speakQuoteBtn = document.getElementById("speak-quote-btn");
const copyFactBtn = document.getElementById("copy-fact-btn");
const speakFactBtn = document.getElementById("speak-fact-btn");
const favCountEl = document.getElementById("fav-count");
const favoritesList = document.getElementById("favorites-list");
const quoteCardElement = document.getElementById("quote-card-element");

// Helper: Toast Notifications
function showToast(msg) {
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2500);
}

// Helper: Time Greetings
function getTimeBasedGreeting(name) {
  const currentHour = new Date().getHours();
  
  if (currentHour >= 5 && currentHour < 12) {
    return {
      title: `Good morning, ${name}!`,
      tagline: "I hope your morning is treating you well and your day starts on a bright note."
    };
  } else if (currentHour >= 12 && currentHour < 17) {
    return {
      title: `Good afternoon, ${name}!`,
      tagline: "I hope your afternoon is treating you well and keeping you inspired."
    };
  } else if (currentHour >= 17 && currentHour < 22) {
    return {
      title: `Good evening, ${name}!`,
      tagline: "I hope your evening is treating you well as you unwind and relax."
    };
  } else {
    return {
      title: `Good night, ${name}!`,
      tagline: "I hope your night is treating you well and brings you restful peace."
    };
  }
}

function updateGreetingHeader() {
  const name = userState.name || "Friend";
  const { title, tagline } = getTimeBasedGreeting(name);
  
  if (greetingText) greetingText.textContent = title;
  
  const taglineEl = document.querySelector(".tagline");
  if (taglineEl) taglineEl.textContent = tagline;
}

// Live Clock & Calendar Update
function updateDateTime() {
  const now = new Date();
  const dateOptions = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
  if (liveDate) liveDate.textContent = now.toLocaleDateString(undefined, dateOptions);
  
  const timeOptions = { hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: true };
  if (liveTime) liveTime.textContent = now.toLocaleTimeString(undefined, timeOptions);

  updateGreetingHeader();
}

updateDateTime();
setInterval(updateDateTime, 1000);

function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getUniqueRandomItem(pool, recentArray, keyFn = (item) => item, historyLimit = REPEAT_THRESHOLD) {
  let availableItems = pool.filter(item => !recentArray.includes(keyFn(item)));

  if (availableItems.length === 0) {
    availableItems = pool;
  }

  const selected = getRandomItem(availableItems);
  const selectedKey = keyFn(selected);

  recentArray.push(selectedKey);
  if (recentArray.length > historyLimit) {
    recentArray.shift();
  }

  return selected;
}

function applyTheme(themeValue, currentCategory) {
  let activeTheme = themeValue;
  if (themeValue === "auto") {
    activeTheme = currentCategory === "all" ? "philosophy" : currentCategory;
  }
  
  document.body.className = '';
  document.body.classList.add(`theme-${activeTheme}`);
}

function generateContent() {
  let selectedCategory = userState.category;
  if (selectedCategory === "all") {
    const categories = ["philosophy", "movie", "athlete", "lyrics"];
    selectedCategory = getRandomItem(categories);
  }

  const pool = quoteData[selectedCategory] || quoteData.philosophy;
  
  const randomQuote = getUniqueRandomItem(pool, recentQuotes, (q) => `${q.quote}-${q.author}`);
  const randomFact = getUniqueRandomItem(factData, recentFacts, (f) => f);

  currentQuoteObj = randomQuote;

  if (quoteText) quoteText.textContent = `"${randomQuote.quote}"`;
  if (quoteAuthor) quoteAuthor.textContent = `— ${randomQuote.author}`;
  if (quoteCategoryLabel) quoteCategoryLabel.textContent = `${selectedCategory.toUpperCase()} QUOTE`;
  if (factText) factText.textContent = randomFact;

  updateFavButtonState();
  applyTheme(userState.theme, selectedCategory);
}

function triggerAnimation() {
  const container = document.querySelector(".content-container");
  if (!container) return;
  container.classList.remove("animate-in");
  void container.offsetWidth; 
  container.classList.add("animate-in");
}

// Copy Text to Clipboard (IFrame Friendly)
function copyToClipboard(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand('copy');
    showToast("Copied to clipboard!");
  } catch (err) {
    showToast("Failed to copy text.");
  }

  document.body.removeChild(textarea);
}

// Text-To-Speech Reader Function
function speakText(text) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel(); // Stop active speech
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.95;
    window.speechSynthesis.speak(utterance);
    showToast("Reading aloud...");
  } else {
    showToast("Audio reader not supported in browser.");
  }
}

// Favorites System
function isCurrentQuoteFavorite() {
  return favorites.some(item => item.quote === currentQuoteObj.quote && item.author === currentQuoteObj.author);
}

function updateFavButtonState() {
  if (!favBtn) return;
  if (isCurrentQuoteFavorite()) {
    favBtn.classList.add("active");
    favBtn.title = "Remove from Favorites";
  } else {
    favBtn.classList.remove("active");
    favBtn.title = "Save to Favorites";
  }
}

function toggleFavorite() {
  if (isCurrentQuoteFavorite()) {
    favorites = favorites.filter(item => !(item.quote === currentQuoteObj.quote && item.author === currentQuoteObj.author));
    showToast("Removed from Favorites");
  } else {
    favorites.push(currentQuoteObj);
    showToast("Saved to Favorites ❤️");
  }

  localStorage.setItem('dailySparkFavorites', JSON.stringify(favorites));
  updateFavButtonState();
  renderFavoritesList();
}

function renderFavoritesList() {
  if (!favoritesList || !favCountEl) return;
  
  favCountEl.textContent = favorites.length;
  favoritesList.innerHTML = "";

  if (favorites.length === 0) {
    favoritesList.innerHTML = `<p class="empty-fav-text">No saved quotes yet. Click the ❤️ icon on any quote card!</p>`;
    return;
  }

  favorites.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "fav-item";
    div.innerHTML = `
      <div class="fav-item-text">
        <div>"${item.quote}"</div>
        <small style="color: var(--text-muted);">— ${item.author}</small>
      </div>
      <button class="remove-fav-btn" data-index="${index}" title="Remove">&times;</button>
    `;
    favoritesList.appendChild(div);
  });

  document.querySelectorAll(".remove-fav-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const index = parseInt(e.target.dataset.index);
      favorites.splice(index, 1);
      localStorage.setItem('dailySparkFavorites', JSON.stringify(favorites));
      updateFavButtonState();
      renderFavoritesList();
    });
  });
}

// Check initial Onboarding state
if (userState.name) {
  if (setupScreen) setupScreen.classList.remove("active");
  updateGreetingHeader();
  generateContent();
}

// Initial Setup Submit
if (setupForm) {
  setupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    userState.name = usernameInput ? usernameInput.value.trim() || "Friend" : "Friend";
    userState.category = categorySelect ? categorySelect.value : "all";

    localStorage.setItem('dailySparkUserState', JSON.stringify(userState));
    updateGreetingHeader();

    if (setupScreen) setupScreen.classList.remove("active");

    generateContent();
    triggerAnimation();
  });
}

// Event Listeners for Mini Action Buttons
if (favBtn) favBtn.addEventListener("click", toggleFavorite);

if (copyQuoteBtn) {
  copyQuoteBtn.addEventListener("click", () => {
    copyToClipboard(`"${currentQuoteObj.quote}" — ${currentQuoteObj.author}`);
  });
}

if (speakQuoteBtn) {
  speakQuoteBtn.addEventListener("click", () => {
    speakText(`${currentQuoteObj.quote}. By ${currentQuoteObj.author}`);
  });
}

if (copyFactBtn) {
  copyFactBtn.addEventListener("click", () => {
    copyToClipboard(factText.textContent);
  });
}

if (speakFactBtn) {
  speakFactBtn.addEventListener("click", () => {
    speakText(`Did you know? ${factText.textContent}`);
  });
}

if (regenerateBtn) {
  regenerateBtn.addEventListener("click", () => {
    generateContent();
    triggerAnimation();
  });
}

// Keyboard Shortcut: Spacebar for New Thought
document.addEventListener("keydown", (e) => {
  if (e.code === "Space" && e.target.tagName !== "INPUT" && e.target.tagName !== "SELECT") {
    e.preventDefault();
    generateContent();
    triggerAnimation();
  }
});

// Touch Swipe Gesture for Mobile Users
let touchStartX = 0;
let touchEndX = 0;

if (quoteCardElement) {
  quoteCardElement.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, false);

  quoteCardElement.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    if (Math.abs(touchStartX - touchEndX) > 50) {
      generateContent();
      triggerAnimation();
    }
  }, false);
}

// Drawer Settings Handler
function openDrawer() {
  if (settingsName) settingsName.value = userState.name;
  if (settingsCategory) settingsCategory.value = userState.category;
  if (settingsTheme) settingsTheme.value = userState.theme;

  renderFavoritesList();

  if (settingsDrawer) settingsDrawer.classList.add("open");
  if (drawerBackdrop) drawerBackdrop.classList.add("active");
}

function closeDrawer() {
  if (settingsDrawer) settingsDrawer.classList.remove("open");
  if (drawerBackdrop) drawerBackdrop.classList.remove("active");
}

if (hamburgerBtn) hamburgerBtn.addEventListener("click", openDrawer);
if (closeDrawerBtn) closeDrawerBtn.addEventListener("click", closeDrawer);
if (drawerBackdrop) drawerBackdrop.addEventListener("click", closeDrawer);

if (saveSettingsBtn) {
  saveSettingsBtn.addEventListener("click", () => {
    if (settingsName) userState.name = settingsName.value.trim() || userState.name;
    if (settingsCategory) userState.category = settingsCategory.value;
    if (settingsTheme) userState.theme = settingsTheme.value;

    localStorage.setItem('dailySparkUserState', JSON.stringify(userState));

    updateGreetingHeader();
    generateContent();
    triggerAnimation();
    closeDrawer();
  });
}
