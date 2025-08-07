// --- Hardcoded datasets ---
const curated = [
  "streetsygram",
  "sublimestreet",
  "bcncollective",
  "street_avengers",
  "street_badass",
  "urbanstreetphotography",
  "streetfinder",
  "streetclassics",
  "PeraPhotoGallery",
  "SPiCollective",
  "outofthephotos",
  "nycspc",
];

const street = [
  "city_features",
  "life_is_street",
  "nonstopstreet",
  "ourstreets",
  "spicollective",
  "storyofthestreet",
  "street_deets",
  "street_in_focus",
  "street_ninjas",
  "street_vision",
  "streetclassics",
  "streetgrammers",
  "streetleaks",
  "streetmobs",
  "streetmoment",
  "streetphotogallery",
  "streetphotography",
  "streetphotographyinternational",
  "streets_storytelling",
  "streetspremier",
  "streetshared",
  "timeless_streets",
];

const abstract = [
  "abstract",
  "createcommune",
];

const cities = [
  "citykillerz",
];

const nyc = [
  "nyc",
  "nycphotographer",
  "streetsofnyc",
  "wildnewyork",
];

// --- Utility ---
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// --- Generator Logic ---
function generateHashtags() {
  const totalCount = 30;
  const result = [...curated];

  const includeNYC = document.getElementById('nycCheckbox').checked;
  const includeAbstract = document.getElementById('abstractCheckbox').checked;

  if (includeNYC) result.push(...nyc);
  if (includeAbstract) result.push(...abstract);

  const needed = totalCount - result.length;
  const shuffledStreet = shuffle([...street]);

  result.push(...shuffledStreet.slice(0, needed));

  const finalTags = shuffle(result).slice(0, totalCount);

  document.getElementById('hashtags').textContent =
    finalTags.map(tag => `#${tag}`).join(' ');
}

// --- Copy Function ---
function copyHashtags() {
  const text = document.getElementById('hashtags').textContent;
  navigator.clipboard.writeText(text).then(() => {
    alert("Hashtags copied!");
  });
}

// --- Event Listeners ---
document.getElementById('regenBtn').addEventListener('click', generateHashtags);
document.getElementById('copyBtn').addEventListener('click', copyHashtags);
document.getElementById('nycCheckbox').addEventListener('change', generateHashtags);
document.getElementById('abstractCheckbox').addEventListener('change', generateHashtags);

// Generate on load
generateHashtags();
