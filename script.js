  <script>
    // Quotes Dataset
    const quoteData = {
      philosophy: [
        { quote: "The unexamined life is not worth living.", author: "Socrates" },
        { quote: "He who has a why to live can bear almost any how.", author: "Friedrich Nietzsche" },
        { quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", author: "Aristotle" },
        { quote: "Liberty consists in doing what one desires.", author: "John Stuart Mill" },
        { quote: "Life must be understood backward. But it must be lived forward.", author: "Søren Kierkegaard" },
        { quote: "Happiness depends upon ourselves.", author: "Aristotle" },
        { quote: "You have power over your mind - not outside events. Realize this, and you will find strength.", author: "Marcus Aurelius" },
        { quote: "The only thing I know is that I know nothing.", author: "Socrates" }
      ],
      movie: [
        { quote: "Frankly, my dear, I don't give a damn.", author: "Gone with the Wind (1939)" },
        { quote: "Here's looking at you, kid.", author: "Casablanca (1942)" },
        { quote: "May the Force be with you.", author: "Star Wars (1977)" },
        { quote: "You talking to me?", author: "Taxi Driver (1976)" },
        { quote: "There's no place like home.", author: "The Wizard of Oz (1939)" },
        { quote: "I'm gonna make him an offer he can't refuse.", author: "The Godfather (1972)" },
        { quote: "Carpe diem. Seize the day, boys. Make your lives extraordinary.", author: "Dead Poets Society (1989)" },
        { quote: "To infinity and beyond!", author: "Toy Story (1995)" }
      ],
      athlete: [
        { quote: "I hated every minute of training, but I said, 'Don't quit. Suffer now and live the rest of your life as a champion.'", author: "Muhammad Ali" },
        { quote: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
        { quote: "I've failed over and over and over again in my life. And that is why I succeed.", author: "Michael Jordan" },
        { quote: "Gold medals aren't really made of gold. They're made of sweat, determination, and a hard-to-find alloy called guts.", author: "Dan Gable" },
        { quote: "It's not whether you get knocked down, it's whether you get up.", author: "Vince Lombardi" },
        { quote: "Hard work beats talent when talent doesn't work hard.", author: "Tim Notke" },
        { quote: "The more difficult the victory, the greater the happiness in winning.", author: "Pelé" },
        { quote: "Set your goals high, and don't stop till you get there.", author: "Bo Jackson" }
      ]
    };

    // Expanded Fun Facts Categorized Collection
    const factCategories = {
      space: [
        "A day on Venus is longer than a year on Venus.",
        "Neutron stars are so dense that a single teaspoon would weigh 6 billion tons on Earth.",
        "One million Earths could fit inside the Sun.",
        "There are more trees on Earth than stars in the Milky Way galaxy (3 trillion trees vs. 100-400 billion stars).",
        "Sunset on Mars appears blue to human eyes due to how Martian dust scatters light.",
        "Footprints left on the Moon by Apollo astronauts will stay there for at least 100 million years because there is no wind or water.",
        "Saturn's moon Titan has rivers, lakes, and seas made of liquid methane and ethane."
      ],
      nature: [
        "Bananas are radioactive because they contain high levels of potassium-40.",
        "Wombat poop is cube-shaped to prevent it from rolling away and losing its territory marker.",
        "Cows have best friends and experience stress when they are separated from each other.",
        "Octopuses have three hearts, nine brains, and blue blood.",
        "Sea otters hold hands while sleeping so they don't drift apart in ocean currents.",
        "Honey never spoils; archaeologists have found 3,000-year-old jars of honey in Egyptian tombs that are still edible.",
        "Sloths can hold their breath underwater longer than dolphins can (up to 40 minutes).",
        "A group of flamingos is officially called a 'flamboyance'.",
        "Trees can communicate and share nutrients through a subterranean fungal network nicknamed the 'Wood Wide Web'."
      ],
      body: [
        "Human teeth are the only part of the body that cannot heal themselves.",
        "Your brain uses roughly 20 percent of your body's total energy despite making up only 2% of its weight.",
        "Corneas are the only tissue in the human body that receives no blood supply; they get oxygen directly from the air.",
        "If you unravelled all the DNA in a single human body, it would stretch to Pluto and back.",
        "Your nose can remember over 50,000 different scents.",
        "The stomach lining replaces itself every 3 to 4 days to prevent digesting itself with its own acid.",
        "Human eye muscles move around 100,000 times every single day."
      ],
      history: [
        "Cleopatra lived closer in time to the Moon landing than to the construction of the Great Pyramid of Giza.",
        "Oxford University is older than the Aztec Empire.",
        "In 1932, Australia fought an official military 'Emu War' against wild emus—and lost.",
        "Ketchup was sold in the 1830s as a patent medicine to cure diarrhea and indigestion.",
        "The shortest war in history lasted only 38 minutes, fought between Britain and Zanzibar in 1896."
      ],
      tech: [
        "Water can boil and freeze at the exact same time under specific lab conditions (the triple point).",
        "The first computer mouse was invented by Douglas Engelbart in 1964 and was carved out of wood.",
        "More phone calls are made on Mother's Day than on any other single day of the year.",
        "Sound waves can levitate small light objects like water drops or insects."
      ],
      quirky: [
        "High heels were originally created for men in the 10th century to help horse riders keep their feet in stirrups.",
        "Plastic flamingos outnumber real flamingos in the United States.",
        "There is a species of jellyfish (Turritopsis dohrnii) that is biologically immortal.",
        "It takes 8 minutes and 20 seconds for light from the Sun to reach Earth.",
        "A single bolt of lightning contains enough energy to toast 100,000 slices of bread."
      ]
    };

    let userState = {
      name: "",
      category: "all",
      factCategory: "all",
      theme: "auto",
      darkMode: false,
      autoPlay: false
    };

    let favorites = JSON.parse(localStorage.getItem('daily_spark_favs')) || [];
    let autoPlayInterval = null;
    let currentFact = "";
    let currentQuote = { quote: "", author: "", category: "" };

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
    const factCategoryBadge = document.getElementById("fact-category-badge");
    const regenerateBtn = document.getElementById("regenerate-btn");

    const hamburgerBtn = document.getElementById("hamburger-btn");
    const settingsDrawer = document.getElementById("settings-drawer");
    const closeDrawerBtn = document.getElementById("close-drawer-btn");
    const saveSettingsBtn = document.getElementById("save-settings-btn");
    const settingsName = document.getElementById("settings-name");
    const settingsCategory = document.getElementById("settings-category");
    const settingsFactCategory = document.getElementById("settings-fact-category");
    const settingsTheme = document.getElementById("settings-theme");
    const darkToggleBtn = document.getElementById("dark-toggle-btn");

    const favoriteBtn = document.getElementById("favorite-btn");
    const favoritesDrawer = document.getElementById("favorites-drawer");
    const closeFavBtn = document.getElementById("close-fav-btn");
    const favListContainer = document.getElementById("fav-list-container");
    const favBadge = document.getElementById("fav-badge");

    const saveQuoteBtn = document.getElementById("save-quote-btn");
    const saveFactBtn = document.getElementById("save-fact-btn");
    const copyQuoteBtn = document.getElementById("copy-quote-btn");
    const copyFactBtn = document.getElementById("copy-fact-btn");
    const speakQuoteBtn = document.getElementById("speak-quote-btn");
    const speakFactBtn = document.getElementById("speak-fact-btn");
    const autoPlayBtn = document.getElementById("auto-play-btn");

    function getRandomItem(array) {
      return array[Math.floor(Math.random() * array.length)];
    }

    function showToast(message, icon = 'check') {
      const toast = document.createElement('div');
      toast.className = 'glass-card px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-200 dark:border-slate-700 animate-in text-xs font-semibold';
      toast.innerHTML = `<i data-lucide="${icon}" class="w-4 h-4 text-indigo-500"></i> <span>${message}</span>`;
      const container = document.getElementById('toast-container');
      container.appendChild(toast);
      lucide.createIcons();

      setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.3s ease';
        setTimeout(() => toast.remove(), 300);
      }, 2500);
    }

    function applyTheme(themeValue, currentQuoteCat) {
      document.body.classList.remove('theme-philosophy', 'theme-movie', 'theme-athlete', 'theme-all', 'theme-auto');
      document.body.classList.remove('cat-philosophy', 'cat-movie', 'cat-athlete', 'cat-all');

      let activeTheme = themeValue;
      if (themeValue === "auto") {
        document.body.classList.add('theme-auto');
        document.body.classList.add(`cat-${currentQuoteCat}`);
      } else {
        document.body.classList.add(`theme-${activeTheme}`);
      }
    }

    function generateContent() {
      // 1. Pick Quote Category & Quote
      let selectedQuoteCategory = userState.category;
      if (selectedQuoteCategory === "all") {
        const categories = ["philosophy", "movie", "athlete"];
        selectedQuoteCategory = getRandomItem(categories);
      }

      const quotePool = quoteData[selectedQuoteCategory];
      currentQuote = { ...getRandomItem(quotePool), category: selectedQuoteCategory };

      // 2. Pick Fun Fact Category & Fact
      let selectedFactCategory = userState.factCategory;
      let factCatKeys = Object.keys(factCategories);
      if (selectedFactCategory === "all") {
        selectedFactCategory = getRandomItem(factCatKeys);
      }

      const factPool = factCategories[selectedFactCategory] || factCategories.quirky;
      currentFact = getRandomItem(factPool);

      // 3. Update DOM Elements
      quoteText.textContent = `"${currentQuote.quote}"`;
      quoteAuthor.textContent = `— ${currentQuote.author}`;
      quoteCategoryLabel.textContent = `${selectedQuoteCategory} Quote`;

      factText.textContent = currentFact;
      factCategoryBadge.textContent = selectedFactCategory.toUpperCase();

      // 4. Update Dynamic Theme
      applyTheme(userState.theme, selectedQuoteCategory);

      // Re-initialize Lucide Icons
      lucide.createIcons();
    }

    function triggerAnimation() {
      const container = document.querySelector(".content-container");
      container.classList.remove("animate-in");
      void container.offsetWidth; // Reflow reset
      container.classList.add("animate-in");
    }

    // Speech Synthesis Helper
    function speakText(text) {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel(); // Stop current speech
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.95;
        window.speechSynthesis.speak(utterance);
        showToast('Playing audio...', 'volume-2');
      } else {
        showToast('Text-to-speech not supported on this browser', 'alert-circle');
      }
    }

    function updateFavBadge() {
      favBadge.textContent = favorites.length;
      if (favorites.length > 0) {
        favBadge.classList.remove('hidden');
      } else {
        favBadge.classList.add('hidden');
      }
    }

    function renderFavorites() {
      favListContainer.innerHTML = '';
      if (favorites.length === 0) {
        favListContainer.innerHTML = `
          <div class="text-center py-12 text-slate-400 dark:text-slate-500">
            <i data-lucide="bookmark" class="w-12 h-12 mx-auto mb-2 opacity-30"></i>
            <p class="text-sm font-medium">No saved items yet.</p>
            <p class="text-xs mt-1">Click the heart icon on any quote or fact to save it!</p>
          </div>
        `;
        lucide.createIcons();
        return;
      }

      favorites.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'p-4 rounded-2xl bg-white/40 dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-700/50 flex flex-col justify-between gap-2 text-xs relative group';
        
        if (item.type === 'quote') {
          card.innerHTML = `
            <div>
              <span class="px-2 py-0.5 text-[9px] font-bold bg-indigo-500/10 text-indigo-500 rounded-md uppercase tracking-wider">Quote</span>
              <p class="mt-2 font-serif-quote text-sm font-semibold text-slate-800 dark:text-slate-100">"${item.quote}"</p>
              <p class="text-slate-500 font-medium mt-1">— ${item.author}</p>
            </div>
            <button onclick="removeFavorite(${index})" class="self-end text-rose-500 hover:text-rose-600 font-medium flex items-center gap-1 mt-1">
              <i data-lucide="trash-2" class="w-3.5 h-3.5"></i> Remove
            </button>
          `;
        } else {
          card.innerHTML = `
            <div>
              <span class="px-2 py-0.5 text-[9px] font-bold bg-amber-500/10 text-amber-500 rounded-md uppercase tracking-wider">Fact</span>
              <p class="mt-2 font-medium text-slate-800 dark:text-slate-200">${item.fact}</p>
            </div>
            <button onclick="removeFavorite(${index})" class="self-end text-rose-500 hover:text-rose-600 font-medium flex items-center gap-1 mt-1">
              <i data-lucide="trash-2" class="w-3.5 h-3.5"></i> Remove
            </button>
          `;
        }
        favListContainer.appendChild(card);
      });
      lucide.createIcons();
    }

    window.removeFavorite = function(index) {
      favorites.splice(index, 1);
      localStorage.setItem('daily_spark_favs', JSON.stringify(favorites));
      updateFavBadge();
      renderFavorites();
      showToast('Item removed from saved');
    };

    function saveItem(item) {
      favorites.push(item);
      localStorage.setItem('daily_spark_favs', JSON.stringify(favorites));
      updateFavBadge();
      renderFavorites();
      showToast('Saved to your collection!', 'heart');
    }

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

    // Save Handlers
    saveQuoteBtn.addEventListener("click", () => {
      saveItem({ type: 'quote', quote: currentQuote.quote, author: currentQuote.author });
    });

    saveFactBtn.addEventListener("click", () => {
      saveItem({ type: 'fact', fact: currentFact });
    });

    // Copy Handlers
    copyQuoteBtn.addEventListener("click", () => {
      const text = `"${currentQuote.quote}" — ${currentQuote.author}`;
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      showToast('Quote copied to clipboard!');
    });

    copyFactBtn.addEventListener("click", () => {
      const textarea = document.createElement("textarea");
      textarea.value = currentFact;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      showToast('Fun fact copied!');
    });

    // Audio Speech
    speakQuoteBtn.addEventListener("click", () => {
      speakText(`${currentQuote.quote}, by ${currentQuote.author}`);
    });

    speakFactBtn.addEventListener("click", () => {
      speakText(currentFact);
    });

    // Slideshow / Auto Play
    autoPlayBtn.addEventListener("click", () => {
      userState.autoPlay = !userState.autoPlay;
      const textSpan = document.getElementById("auto-play-text");
      
      if (userState.autoPlay) {
        textSpan.textContent = "Pause Slideshow";
        autoPlayBtn.classList.add("ring-2", "ring-indigo-500");
        showToast("Auto slideshow active (10s interval)", "play");
        autoPlayInterval = setInterval(() => {
          generateContent();
          triggerAnimation();
        }, 10000);
      } else {
        textSpan.textContent = "Auto Slideshow";
        autoPlayBtn.classList.remove("ring-2", "ring-indigo-500");
        clearInterval(autoPlayInterval);
        showToast("Slideshow paused", "pause");
      }
    });

    // Settings Drawer Events
    hamburgerBtn.addEventListener("click", () => {
      settingsName.value = userState.name;
      settingsCategory.value = userState.category;
      settingsFactCategory.value = userState.factCategory;
      settingsTheme.value = userState.theme;
      settingsDrawer.classList.remove("translate-x-full");
    });

    closeDrawerBtn.addEventListener("click", () => {
      settingsDrawer.classList.add("translate-x-full");
    });

    saveSettingsBtn.addEventListener("click", () => {
      userState.name = settingsName.value.trim() || userState.name;
      userState.category = settingsCategory.value;
      userState.factCategory = settingsFactCategory.value;
      userState.theme = settingsTheme.value;

      greetingText.textContent = `Hello, ${userState.name}!`;
      generateContent();
      triggerAnimation();

      settingsDrawer.classList.add("translate-x-full");
      showToast('Settings saved successfully!');
    });

    // Dark Mode Toggle
    darkToggleBtn.addEventListener("click", () => {
      userState.darkMode = !userState.darkMode;
      if (userState.darkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    });

    // Favorites Drawer Toggle
    favoriteBtn.addEventListener("click", () => {
      renderFavorites();
      favoritesDrawer.classList.remove("translate-x-full");
    });

    closeFavBtn.addEventListener("click", () => {
      favoritesDrawer.classList.add("translate-x-full");
    });

    // Initial Badge render
    updateFavBadge();
    lucide.createIcons();
  </script>
</body>
</html>
