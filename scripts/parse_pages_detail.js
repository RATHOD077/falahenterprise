const fs = require('fs');

function cleanHtml(html) {
  return html
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#8211;/g, '–')
    .replace(/&#8217;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function extractPage(filename) {
  const data = JSON.parse(fs.readFileSync(`data/${filename}.json`, 'utf-8'));
  console.log(`\n=================== PAGE: ${data.title.rendered} (${filename}) ===================`);
  
  // Extract images
  const imgRegex = /src=["'](https?:\/\/[^"']+\.(?:png|jpe?g|svg|webp))["']/gi;
  const imgs = [];
  let m;
  while ((m = imgRegex.exec(data.content.rendered)) !== null) {
    imgs.push(m[1]);
  }
  console.log(`Images found (${imgs.length}):`);
  [...new Set(imgs)].forEach(img => console.log('  -', img));

  // Extract headings
  const headings = [...data.content.rendered.matchAll(/<h[1-6][^>]*>(.*?)<\/h[1-6]>/gi)].map(h => cleanHtml(h[1]));
  console.log('\nHeadings:');
  headings.forEach(h => console.log('  #', h));

  // Text summary
  const text = cleanHtml(data.content.rendered);
  console.log('\nText Preview:');
  console.log(text.slice(0, 1500));
}

['home', 'packaging', 'hotels_hospitals', 'about_us', 'contact_us'].forEach(extractPage);
