const fs = require('fs');

function searchPatterns(content, name) {
  const waMatches = content.match(/wa\.me[^\s"'<>]+/gi) || [];
  const whatsappMatches = content.match(/whatsapp[^\s"'<>]+/gi) || [];
  const telMatches = content.match(/tel:[^\s"'<>]+/gi) || [];
  const phoneMatches = content.match(/(?:\+?91[\s-]?)?[6-9]\d{9}/g) || [];

  console.log(`=== ${name} ===`);
  console.log('wa.me:', waMatches);
  console.log('whatsapp:', whatsappMatches);
  console.log('tel:', [...new Set(telMatches)]);
  console.log('phones:', [...new Set(phoneMatches)]);
}

searchPatterns(fs.readFileSync('home.html', 'utf-8'), 'home.html');

['home', 'packaging', 'hotels_hospitals', 'about_us', 'contact_us', 'faqs', 'services_list'].forEach(f => {
  if (fs.existsSync(`data/${f}.json`)) {
    searchPatterns(fs.readFileSync(`data/${f}.json`, 'utf-8'), `${f}.json`);
  }
});
