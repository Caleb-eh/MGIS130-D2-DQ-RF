// Data sourced from the provided reference URLs
const quoteData = {
  philosophy: [
    { quote: "The unexamined life is not worth living.", author: "Socrates" },
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
    { quote: "To be or not to be isn't the question. The question is: who ate the rest of my Limited Edition Prignles Miller Lite Beer Cheese Burger Potato Crisps?", author: "Garth Burlap, Philosopher at Large" }
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
    { quote: "I've fought space dragons, but I've never seen an American President with a brain this chuddy.", author: "Detective Barnaby Wiggles (2023)" },
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
  "One time I ate a banana, and it tasted okay. i dropped it",
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
  "Celery is 95% fucking terrible",
  "I don't remember the last time I forgot.",
  "The sun is very hot.",
  "You can't drink something that is not liquid.",
  "When two people love each other very much...",
  "Bazinga! Oh shoot, this is the fact tab, not the quote tab... also that's from a TV show... double doofus",
  "Star Wars is not real (I didn't know that).",
  "Crap, I forgot what the fact was.",
  "Getting eaten alive probably hurts.",
  "One time I got robbed, it made me sad. They took my favourite outlet cover.",
  "I have never been to court.",
  "You are reading this right now.",
  "Drugz r bad"
];

// App State
let userState = {
  name: "",
  category: "all",
  theme: "auto"
};

// History queues to prevent repeats within 4 regenerations
const recentQuotes = [];
const recentFacts = [];
const REPEAT_THRESHOLD = 4;

// DOM Elements
const setupScreen = document.getElementById("setup-screen");
const mainScreen = document.getElementById("main-screen");
const setupForm = document.getElementById("setup-form");
const usernameInput = document.getElementById("username");
const categorySelect = document.getElementById("category");

const greetingText = document.getElementById("greeting-text");
const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const quoteCategoryLabel = document.getElementById("quote-category-label");
const factText = document.getElementById("fact-text");
const regenerateBtn = document.getElementById("regenerate-btn");

const hamburgerBtn = document.getElementById("hamburger-btn");
const settingsDrawer = document.getElementById("settings-drawer");
const closeDrawerBtn = document.getElementById("close-drawer-btn");
const saveSettingsBtn = document.getElementById("save-settings-btn");
const settingsName = document.getElementById("settings-name");
const settingsCategory = document.getElementById("settings-category");
const settingsTheme = document.getElementById("settings-theme");

function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

/**
 * Selects a random item from a pool, filtering out items seen in the recent history queue.
 * Maintains history length up to historyLimit (4).
 */
function getUniqueRandomItem(pool, recentArray, keyFn = (item) => item, historyLimit = REPEAT_THRESHOLD) {
  // Filter out recent items
  let availableItems = pool.filter(item => !recentArray.includes(keyFn(item)));

  // Fallback if array is smaller than the threshold
  if (availableItems.length === 0) {
    availableItems = pool;
  }

  const selected = getRandomItem(availableItems);
  const selectedKey = keyFn(selected);

  // Update history buffer
  recentArray.push(selectedKey);
  if (recentArray.length > historyLimit) {
    recentArray.shift();
  }

  return selected;
}

function applyTheme(themeValue, currentCategory) {
  let activeTheme = themeValue;
  if (themeValue === "auto") {
    activeTheme = currentCategory === "all" ? "all" : currentCategory;
  }
  
  // Clean old themes
  document.body.classList.remove('theme-philosophy', 'theme-movie', 'theme-athlete', 'theme-all', 'theme-auto');
  document.body.classList.add(`theme-${activeTheme}`);
}

function generateContent() {
  // Select quote pool
  let selectedCategory = userState.category;
  if (selectedCategory === "all") {
    const categories = ["philosophy", "movie", "athlete"];
    selectedCategory = getRandomItem(categories);
  }

  const pool = quoteData[selectedCategory] || quoteData.philosophy;
  
  // Get unique quote and fact using unique history selection
  const randomQuote = getUniqueRandomItem(pool, recentQuotes, (q) => `${q.quote}-${q.author}`);
  const randomFact = getUniqueRandomItem(factData, recentFacts, (f) => f);

  // Update DOM Content
  if (quoteText) quoteText.textContent = `"${randomQuote.quote}"`;
  if (quoteAuthor) quoteAuthor.textContent = `— ${randomQuote.author}`;
  if (quoteCategoryLabel) quoteCategoryLabel.textContent = `${selectedCategory.toUpperCase()} Quote`;
  if (factText) factText.textContent = randomFact;

  // Apply dynamic theme
  applyTheme(userState.theme, selectedCategory);
}

function triggerAnimation() {
  const container = document.querySelector(".content-container");
  if (!container) return;
  container.classList.remove("animate-in");
  // Force Reflow to restart CSS animation
  void container.offsetWidth; 
  container.classList.add("animate-in");
}

// Form Submission Handler
if (setupForm) {
  setupForm.addEventListener("submit", (e) => {
    // Prevent default form POST/GET browser refresh
    e.preventDefault();
    e.stopPropagation();

    userState.name = usernameInput ? usernameInput.value.trim() || "Friend" : "Friend";
    userState.category = categorySelect ? categorySelect.value : "all";

    if (greetingText) greetingText.textContent = `Hello, ${userState.name}!`;

    // Hide setup screen & show main screen
    if (setupScreen) {
      setupScreen.classList.remove("active");
      setupScreen.style.display = "none";
    }
    if (mainScreen) {
      mainScreen.classList.add("active");
      mainScreen.style.display = "flex";
    }

    generateContent();
    triggerAnimation();

    return false;
  });
}

// Spark New Thought Button
if (regenerateBtn) {
  regenerateBtn.addEventListener("click", () => {
    generateContent();
    triggerAnimation();
  });
}

// Drawer Settings Open
if (hamburgerBtn) {
  hamburgerBtn.addEventListener("click", () => {
    if (settingsName) settingsName.value = userState.name;
    if (settingsCategory) settingsCategory.value = userState.category;
    if (settingsTheme) settingsTheme.value = userState.theme;
    
    if (settingsDrawer) {
      settingsDrawer.classList.remove("translate-x-full");
      settingsDrawer.classList.add("open");
    }
  });
}

// Drawer Settings Close
if (closeDrawerBtn) {
  closeDrawerBtn.addEventListener("click", () => {
    if (settingsDrawer) {
      settingsDrawer.classList.add("translate-x-full");
      settingsDrawer.classList.remove("open");
    }
  });
}

// Save Settings Button
if (saveSettingsBtn) {
  saveSettingsBtn.addEventListener("click", () => {
    if (settingsName) userState.name = settingsName.value.trim() || userState.name;
    if (settingsCategory) userState.category = settingsCategory.value;
    if (settingsTheme) userState.theme = settingsTheme.value;

    if (greetingText) greetingText.textContent = `Hello, ${userState.name}!`;
    generateContent();
    triggerAnimation();

    if (settingsDrawer) {
      settingsDrawer.classList.add("translate-x-full");
      settingsDrawer.classList.remove("open");
    }
  });
}
