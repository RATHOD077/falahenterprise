const fs = require('fs');

const html = fs.readFileSync('home.html', 'utf-8');

// Fonts
const fontMatches = [...html.matchAll(/fonts\.googleapis\.com\/css2?\?family=([^"\'&]+)/g)].map(m => decodeURIComponent(m[1]));
console.log('Google Fonts:', [...new Set(fontMatches)]);

// Color hex codes
const colorHex = [...html.matchAll(/#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})\b/g)].map(m => m[0].toUpperCase());
const freq = {};
colorHex.forEach(c => freq[c] = (freq[c] || 0) + 1);
const sorted = Object.entries(freq).sort((a,b) => b[1] - a[1]).slice(0, 15);
console.log('Top colors:', sorted);

// Phone, email, address in home.html
const emails = [...new Set(html.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g) || [])];
const phones = [...new Set(html.match(/(?:\+?\d{1,3}[-.\s]?)?\(?\d{3,5}\)?[-.\s]?\d{3,5}[-.\s]?\d{3,5}/g) || [])].filter(p => p.length >= 10);
console.log('Emails found:', emails);
console.log('Phones found:', phones);
