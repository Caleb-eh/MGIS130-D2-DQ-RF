// Data sourced from the provided reference URLs
const quoteData = {
  philosophy: [
    { quote: "The unexamined life is not worth living.", author: "Socrates" },
    { quote: "He who has a why to live can bear almost any how.", author: "Friedrich Nietzsche" },
    { quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", author: "Aristotle" },
    { quote: "Liberty consists in doing what one desires.", author: "John Stuart Mill" },
    { quote: "Life must be understood backward. But it must be lived forward.", author: "Søren Kierkegaard" }
  ],
  movie: [
    { quote: "Frankly, my dear, I don't give a damn.", author: "Gone with the Wind (1939)" },
    { quote: "Here's looking at you, kid.", author: "Casablanca (1942)" },
    { quote: "May the Force be with you.", author: "Star Wars (1977)" },
    { quote: "You talking to me?", author: "Taxi Driver (1976)" },
    { quote: "There's no place like home.", author: "The Wizard of Oz (1939)" }
  ],
  athlete: [
    { quote: "I hated every minute of training, but I said, 'Don't quit. Suffer now and live the rest of your life as a champion.'", author: "Muhammad Ali" },
    { quote: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
    { quote: "I've failed over and over and over again in my life. And that is why I succeed.", author: "Michael Jordan" },
    { quote: "Gold medals aren't really made of gold. They're made of sweat, determination, and a hard-to-find alloy called guts.", author: "Dan Gable" },
    { quote: "It's not whether you get knocked down, it's whether you get up.", author: "Vince Lombardi" }
  ]
};

const factData = [
  "A day on Venus is longer than a year on Venus.",
  "Human teeth are the only part of the body that cannot heal themselves.",
  "Bananas are radioactive because they contain high levels of potassium.",
  "Water can boil and freeze at the exact same time under specific lab conditions (the triple point).",
  "Wombat poop is cube-shaped to prevent it from rolling away.",
  "Your brain uses roughly 20 percent of your body's total energy."
  "Ty sits next to Caleb in this class."
  "Gus was wearing a white sweater when I wrote this. I don't know what it said, though."
  "The quote above me is dumb."
  "One day I will meet John Lennon in person."
  "Sometimes when I wake up, I have to pee."
  "Twitter is called X now."
  "Last year, winter happened around November."
  "One time I ate a banana, and it tasted okay. i dropped it"
];

// App State
let userState = {
  name: "",
  category: "all",
  theme: "auto"
};

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

// Helpers
function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function applyTheme(themeValue, currentCategory) {
  let activeTheme = themeValue;
  if (themeValue === "auto") {
    activeTheme = currentCategory === "all" ? "all" : currentCategory;
  }
  document.body.className = `theme-${activeTheme}`;
}

function generateContent() {
  // Select quote pool
  let selectedCategory = userState.category;
  if (selectedCategory === "all") {
    const categories = ["philosophy", "movie", "athlete"];
    selectedCategory = getRandomItem(categories);
  }

  const pool = quoteData[selectedCategory];
  const randomQuote = getRandomItem(pool);
  const randomFact = getRandomItem(factData);

  // Update DOM Content
  quoteText.textContent = `"${randomQuote.quote}"`;
  quoteAuthor.textContent = `— ${randomQuote.author}`;
  quoteCategoryLabel.textContent = `${selectedCategory} Quote`;
  factText.textContent = randomFact;

  // Apply theme if set to auto
  applyTheme(userState.theme, selectedCategory);
}

function triggerAnimation() {
  const container = document.querySelector(".content-container");
  container.classList.remove("animate-in");
  // Force Reflow to restart animation
  void container.offsetWidth; 
  container.classList.add("animate-in");
}

// Event Listeners
setupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  userState.name = usernameInput.value.trim() || "Friend";
  userState.category = categorySelect.value;

  greetingText.textContent = `Hello, ${userState.name}!`;

  setupScreen.classList.remove("active");
  mainScreen.classList.add("active");

  generateContent();
});

regenerateBtn.addEventListener("click", () => {
  generateContent();
  triggerAnimation();
});

// Drawer functionality
hamburgerBtn.addEventListener("click", () => {
  settingsName.value = userState.name;
  settingsCategory.value = userState.category;
  settingsTheme.value = userState.theme;
  settingsDrawer.classList.add("open");
});

closeDrawerBtn.addEventListener("click", () => {
  settingsDrawer.classList.remove("open");
});

saveSettingsBtn.addEventListener("click", () => {
  userState.name = settingsName.value.trim() || userState.name;
  userState.category = settingsCategory.value;
  userState.theme = settingsTheme.value;

  greetingText.textContent = `Hello, ${userState.name}!`;
  generateContent();
  triggerAnimation();

  settingsDrawer.classList.remove("open");
});
