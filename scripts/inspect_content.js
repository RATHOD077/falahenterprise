const fs = require('fs');

function inspect() {
  const home = JSON.parse(fs.readFileSync('data/home.json', 'utf-8'));
  console.log('=== HOME TITLE ===', home.title.rendered);
  console.log('=== HOME CONTENT SNIPPET ===');
  console.log(home.content.rendered.slice(0, 1000));

  const packaging = JSON.parse(fs.readFileSync('data/packaging.json', 'utf-8'));
  console.log('\n=== PACKAGING CONTENT SNIPPET ===');
  console.log(packaging.content.rendered.slice(0, 1000));

  const hotels = JSON.parse(fs.readFileSync('data/hotels_hospitals.json', 'utf-8'));
  console.log('\n=== HOTELS & HOSPITALS CONTENT SNIPPET ===');
  console.log(hotels.content.rendered.slice(0, 1000));

  const about = JSON.parse(fs.readFileSync('data/about_us.json', 'utf-8'));
  console.log('\n=== ABOUT US CONTENT SNIPPET ===');
  console.log(about.content.rendered.slice(0, 1000));

  const contact = JSON.parse(fs.readFileSync('data/contact_us.json', 'utf-8'));
  console.log('\n=== CONTACT US CONTENT SNIPPET ===');
  console.log(contact.content.rendered.slice(0, 1000));

  const products = JSON.parse(fs.readFileSync('data/products.json', 'utf-8'));
  console.log('\n=== PRODUCTS (Count: ' + products.length + ') ===');
  products.slice(0, 10).forEach(p => console.log(`- ${p.id}: ${p.title.rendered} (slug: ${p.slug})`));

  const media = JSON.parse(fs.readFileSync('data/media.json', 'utf-8'));
  console.log('\n=== MEDIA (Count: ' + media.length + ') ===');
  const mediaTypes = {};
  media.forEach(m => {
    const ext = m.source_url.split('.').pop().toLowerCase();
    mediaTypes[ext] = (mediaTypes[ext] || 0) + 1;
  });
  console.log('Media types count:', mediaTypes);
}

inspect();
