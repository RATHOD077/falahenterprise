const fs = require('fs');

const html = fs.readFileSync('home.html', 'utf-8');

console.log('=== SEARCHING FOR LOGOS IN HOME.HTML ===');
const logoMatches = [...html.matchAll(/<img[^>]+(?:class|id|alt|src)=[^>]*logo[^>]*>/gi)];
logoMatches.forEach(m => console.log(m[0]));

console.log('\n=== HEADER CONTENT INSPECTION ===');
const headerMatch = html.match(/<header[\s\S]*?<\/header>/i);
if (headerMatch) {
  const headerHtml = headerMatch[0];
  console.log('Header length:', headerHtml.length);
  // find images in header
  const headerImgs = [...headerHtml.matchAll(/<img[^>]+src=["']([^"']+)["'][^>]*>/gi)].map(m => m[0]);
  console.log('Header images:', headerImgs);
  
  // find links in header
  const headerLinks = [...headerHtml.matchAll(/<a[^>]+href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi)].map(m => ({
    href: m[1],
    text: m[2].replace(/<[^>]+>/g, '').trim()
  })).filter(l => l.text);
  console.log('Header links count:', headerLinks.length);
  console.log('Header links sample:', headerLinks.slice(0, 15));
} else {
  console.log('No <header> tag found directly');
}

console.log('\n=== SOCIAL MEDIA LINKS ===');
const socialRegex = /href=["'](https?:\/\/(?:www\.)?(?:facebook|twitter|x\.com|instagram|linkedin|youtube|pinterest|tiktok)[^"']*)["']/gi;
const socials = [...html.matchAll(socialRegex)].map(m => m[1]);
console.log('Social links found:', [...new Set(socials)]);

console.log('\n=== FOOTER CONTENT INSPECTION ===');
const footerMatch = html.match(/<footer[\s\S]*?<\/footer>/i);
if (footerMatch) {
  const footerHtml = footerMatch[0];
  console.log('Footer length:', footerHtml.length);
  const footerImgs = [...footerHtml.matchAll(/<img[^>]+src=["']([^"']+)["'][^>]*>/gi)].map(m => m[1]);
  console.log('Footer images:', [...new Set(footerImgs)]);
}
