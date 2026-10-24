const fs = require('fs');

const media = JSON.parse(fs.readFileSync('data/media.json', 'utf-8'));
console.log('=== UPLOAD YEARS & PATHS ===');
const uploadPaths = media.map(m => {
  const match = m.source_url.match(/uploads\/(\d{4}\/\d{2})/);
  return match ? match[1] : 'other';
});
const counts = {};
uploadPaths.forEach(p => counts[p] = (counts[p] || 0) + 1);
console.log('Uploads by year/month:', counts);

console.log('\n=== LOGO & BRANDING ASSETS ===');
media.filter(m => /logo|falah|icon|fav/i.test(m.source_url) || /logo|falah/i.test(m.title.rendered)).forEach(m => {
  console.log(`- ${m.title.rendered}: ${m.source_url}`);
});

console.log('\n=== RECENT CUSTOM UPLOADS (2026 / 2024 / 2025) ===');
media.filter(m => m.source_url.includes('/2026/') || m.source_url.includes('/2025/') || m.source_url.includes('/2024/')).forEach(m => {
  console.log(`- [${m.source_url.split('/').slice(-1)[0]}] ${m.source_url}`);
});
