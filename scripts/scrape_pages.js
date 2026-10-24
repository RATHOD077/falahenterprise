const fs = require('fs');
const https = require('https');
const path = require('path');

function fetch(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { rejectUnauthorized: false, headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, data }));
    }).on('error', reject);
  });
}

async function scrapePages() {
  const pageIds = [
    { name: 'home', id: 25 },
    { name: 'packaging', id: 13029 },
    { name: 'hotels_hospitals', id: 13015 },
    { name: 'about_us', id: 37 },
    { name: 'contact_us', id: 39 },
    { name: 'services_list', id: 53 },
    { name: 'faqs', id: 57 }
  ];

  fs.mkdirSync('data', { recursive: true });

  for (const p of pageIds) {
    console.log(`Fetching page ${p.name} (${p.id})...`);
    const res = await fetch(`https://www.falahenterprise.com/index.php?rest_route=/wp/v2/pages/${p.id}`);
    if (res.status === 200) {
      fs.writeFileSync(`data/${p.name}.json`, res.data);
      console.log(`Saved data/${p.name}.json`);
    } else {
      console.log(`Failed to fetch ${p.name}: ${res.status}`);
    }
  }

  // Also fetch products
  console.log('Fetching products...');
  const prodRes = await fetch('https://www.falahenterprise.com/index.php?rest_route=/wp/v2/product&per_page=100');
  if (prodRes.status === 200) {
    fs.writeFileSync('data/products.json', prodRes.data);
    const prods = JSON.parse(prodRes.data);
    console.log(`Saved data/products.json with ${prods.length} products`);
  } else {
    console.log(`Failed products: ${prodRes.status}`);
  }

  // Fetch all media
  console.log('Fetching all media items...');
  let allMedia = [];
  let page = 1;
  while (true) {
    const mediaRes = await fetch(`https://www.falahenterprise.com/index.php?rest_route=/wp/v2/media&per_page=100&page=${page}`);
    if (mediaRes.status === 200) {
      const items = JSON.parse(mediaRes.data);
      if (items.length === 0) break;
      allMedia.push(...items);
      console.log(`Fetched page ${page}, total so far: ${allMedia.length}`);
      page++;
    } else {
      break;
    }
  }
  fs.writeFileSync('data/media.json', JSON.stringify(allMedia, null, 2));
  console.log(`Saved ${allMedia.length} media items to data/media.json`);
}

scrapePages().catch(console.error);
