// --- Hardcoded datasets ---
const curated = [
  "citylife", "urbanphotography", "streetphotography"
];

const street = [
  "streetstyle", "citystreets", "urbanlife", "streetphoto", "streetshot",
  "cityscape", "cityvibes", "streetportrait", "urbanexploration", "everydaystreet",
  "streetdreamsmag", "streets_storytelling", "fromstreetswithlove", "lensculturestreets",
  "urbanstreets", "ig_street", "street_perfection", "streets_unseen", "urban_captures",
  "city_hub", "street_color", "street_bw", "street_focus", "streetphoto_bw",
  "urbanphotomag", "storyofthestreet", "urbanromantix", "citygrammers", "streetcollective",
  "streetscenes"
];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function generateHashtags() {
  const totalCount = 30;

  // Always include curated hashtags
  const result = [...curated];

  // Fill with random street hashtags
  const needed = totalCount - curated.length;
  const shuffledStreet = shuffle([...street]);
  const selectedStreet = shuffledStreet.slice(0, needed);

  // Combine & shuffle
  const finalTags = shuffle([...result, ...selectedStreet]);

  // Render with # and space
  document.getElementById('hashtags').textContent =
    finalTags.map(tag => `#${tag}`).join(' ');
}

function copyHashtags() {
  const text = document.getElementById('hashtags').textContent;
  navigator.clipboard.writeText(text).then(() => {
    alert("Hashtags copied!");
  });
}

// Event listeners
document.getElementById('regenBtn').addEventListener('click', generateHashtags);
document.getElementById('copyBtn').addEventListener('click', copyHashtags);

// Generate on load
generateHashtags();
