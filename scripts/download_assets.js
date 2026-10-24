const fs = require('fs');
const https = require('https');
const http = require('http');
const path = require('path');
const { URL } = require('url');

const media = JSON.parse(fs.readFileSync('data/media.json', 'utf-8'));

// Also collect images referenced in HTML and JSON files
const extraUrls = new Set();
['home', 'packaging', 'hotels_hospitals', 'about_us', 'contact_us'].forEach(f => {
  const fileContent = fs.readFileSync(`data/${f}.json`, 'utf-8');
  const matches = fileContent.match(/https?:\/\/[^"'\s\\]+\.(?:png|jpe?g|svg|webp|ico)/gi) || [];
  matches.forEach(u => extraUrls.add(u));
});

// Home html extra images
const homeHtml = fs.readFileSync('home.html', 'utf-8');
const homeMatches = homeHtml.match(/https?:\/\/[^"'\s\\]+\.(?:png|jpe?g|svg|webp|ico)/gi) || [];
homeMatches.forEach(u => extraUrls.add(u));

// Collect all target image URLs
const allUrls = new Set();
media.forEach(m => {
  if (m.source_url) allUrls.add(m.source_url);
  if (m.media_details && m.media_details.sizes) {
    Object.values(m.media_details.sizes).forEach(s => {
      if (s.source_url) allUrls.add(s.source_url);
    });
  }
});
extraUrls.forEach(u => allUrls.add(u));

console.log(`Total unique image URLs to consider: ${allUrls.size}`);

// We want to download:
// 1. All images from falahenterprise.com
// 2. All images from printspace.harutheme.com that are used in the site (illustrations, banners, icons)
const targetUrls = [...allUrls].filter(u => {
  return u.includes('falahenterprise.com') || u.includes('harutheme.com');
});

console.log(`Target images to download: ${targetUrls.length}`);

// Target directories
const ASSETS_DIR = path.join(__dirname, '..', 'public', 'assets');
const DIRS = {
  packaging: path.join(ASSETS_DIR, 'packaging'),
  hospitality: path.join(ASSETS_DIR, 'hospitality'),
  branding: path.join(ASSETS_DIR, 'branding'),
  banners: path.join(ASSETS_DIR, 'banners'),
  icons: path.join(ASSETS_DIR, 'icons'),
  general: path.join(ASSETS_DIR, 'general'),
};

Object.values(DIRS).forEach(d => fs.mkdirSync(d, { recursive: true }));

function getCategory(url) {
  const lower = url.toLowerCase();
  const filename = path.basename(new URL(url).pathname);

  if (/logo|fav|brand/i.test(filename)) return 'branding';
  if (/corrugated|box|packaging|paper|pp-transparent/i.test(filename)) return 'packaging';
  if (/2026\/03\/\d+\.jpg/i.test(url) || /hotel|hospital|amenit/i.test(filename)) return 'hospitality';
  if (/icon|step/i.test(filename)) return 'icons';
  if (/banner|slide|hero|gallery/i.test(filename)) return 'banners';
  return 'general';
}

function downloadFile(url, destPath) {
  return new Promise((resolve) => {
    if (fs.existsSync(destPath) && fs.statSync(destPath).size > 0) {
      return resolve({ url, status: 'cached', file: destPath });
    }
    const client = url.startsWith('https') ? https : http;
    const req = client.get(url, { rejectUnauthorized: false, timeout: 15000 }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadFile(res.headers.location, destPath).then(resolve);
      }
      if (res.statusCode !== 200) {
        return resolve({ url, status: `HTTP ${res.statusCode}` });
      }
      const fileStream = fs.createWriteStream(destPath);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        resolve({ url, status: 'success', file: destPath });
      });
    });
    req.on('error', (err) => resolve({ url, status: `err: ${err.message}` }));
    req.on('timeout', () => {
      req.destroy();
      resolve({ url, status: 'timeout' });
    });
  });
}

async function runDownloads() {
  const manifest = [];
  const queue = [...targetUrls];
  console.log(`Starting download of ${queue.length} files...`);

  const concurrency = 6;
  let active = 0;
  let completed = 0;

  async function next() {
    if (queue.length === 0) return;
    const url = queue.shift();
    const filename = path.basename(new URL(url).pathname);
    const cat = getCategory(url);
    const dest = path.join(DIRS[cat], filename);

    const res = await downloadFile(url, dest);
    completed++;
    if (res.status === 'success' || res.status === 'cached') {
      manifest.push({
        originalUrl: url,
        localPath: `/assets/${cat}/${filename}`,
        category: cat,
        filename
      });
      if (completed % 20 === 0 || completed === targetUrls.length) {
        console.log(`Progress: ${completed}/${targetUrls.length} downloaded`);
      }
    } else {
      console.log(`Failed: ${url} (${res.status})`);
    }

    if (queue.length > 0) {
      await next();
    }
  }

  const workers = Array.from({ length: concurrency }, () => next());
  await Promise.all(workers);

  fs.writeFileSync(path.join(ASSETS_DIR, 'asset-manifest.json'), JSON.stringify(manifest, null, 2));
  console.log(`\nDownload complete! Manifest saved with ${manifest.length} downloaded assets.`);
}

runDownloads().catch(console.error);
