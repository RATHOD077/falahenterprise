const fs = require('fs');
const https = require('https');

function fetch(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { rejectUnauthorized: false, headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, data }));
    }).on('error', reject);
  });
}

async function analyze() {
  const html = fs.readFileSync('home.html', 'utf-8');

  // Title
  const titleMatch = html.match(/<title>(.*?)<\/title>/i);
  console.log('Title:', titleMatch ? titleMatch[1] : 'N/A');

  // Themes & Plugins
  const themeMatches = [...html.matchAll(/\/wp-content\/themes\/([^\/'"]+)/g)].map(m => m[1]);
  console.log('Themes detected:', [...new Set(themeMatches)]);

  const pluginMatches = [...html.matchAll(/\/wp-content\/plugins\/([^\/'"]+)/g)].map(m => m[1]);
  console.log('Plugins detected:', [...new Set(pluginMatches)]);

  // Menu items
  const linkRegex = /<a[^>]+href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi;
  let m;
  const links = [];
  while ((m = linkRegex.exec(html)) !== null) {
    const text = m[2].replace(/<[^>]+>/g, '').trim();
    if (text && m[1] && !m[1].startsWith('#') && !m[1].startsWith('javascript:')) {
      links.push({ url: m[1], text });
    }
  }
  // Deduplicate
  const uniqueLinks = [];
  const seen = new Set();
  for (const l of links) {
    const key = `${l.url}|${l.text}`;
    if (!seen.has(key)) {
      seen.add(key);
      uniqueLinks.push(l);
    }
  }
  console.log('Nav / Page Links found:', uniqueLinks.length);
  console.log('Top links:', JSON.stringify(uniqueLinks.slice(0, 40), null, 2));

  // Check WooCommerce products via WP REST
  console.log('\n--- Checking WooCommerce API / Products ---');
  try {
    const wcProducts = await fetch('https://www.falahenterprise.com/index.php?rest_route=/wc/store/v1/products?per_page=100');
    console.log('WC Store API status:', wcProducts.status);
    if (wcProducts.status === 200) {
      const prods = JSON.parse(wcProducts.data);
      console.log('Products found via wc/store:', prods.length);
      prods.slice(0, 10).forEach(p => console.log('Product:', p.id, p.name, p.prices ? p.prices.price : ''));
    }
  } catch (e) {
    console.log('WC Store API err:', e.message);
  }

  // Check /wp/v2/product or custom post types
  try {
    const typesRes = await fetch('https://www.falahenterprise.com/index.php?rest_route=/wp/v2/types');
    if (typesRes.status === 200) {
      const types = JSON.parse(typesRes.data);
      console.log('Custom Post Types:', Object.keys(types));
    }
  } catch (e) {
    console.log('WP types err:', e.message);
  }

  // Check categories
  try {
    const catsRes = await fetch('https://www.falahenterprise.com/index.php?rest_route=/wp/v2/categories');
    if (catsRes.status === 200) {
      const cats = JSON.parse(catsRes.data);
      console.log('Categories:', cats.map(c => ({ id: c.id, name: c.name, slug: c.slug, count: c.count })));
    }
  } catch (e) {
    console.log('WP categories err:', e.message);
  }
}

analyze().catch(console.error);
