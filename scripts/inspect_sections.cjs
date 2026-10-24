const fs = require('fs');

const html = fs.readFileSync('home.html', 'utf-8');

// Elementor widgets on the page
const widgets = [...html.matchAll(/data-widget_type="([^"]+)"/g)].map(m => m[1]);
console.log('Elementor widgets detected on page:', [...new Set(widgets)]);

// Slick / slider settings
const slickSettings = [...html.matchAll(/data-slick='([^']+)'/g)].map(m => m[1]);
console.log('Slick settings count:', slickSettings.length);
slickSettings.forEach((s, i) => console.log(`Slick ${i}:`, s));

// Animations (Elementor animation classes like animated, fadeIn, etc.)
const anims = [...html.matchAll(/class="[^"]*(?:elementor-animation-|fadeIn|slideIn|zoomIn|bounce)[^"]*"/g)].map(m => m[0]);
console.log('Animation classes count:', anims.length);

// Extract all sections with their headings and text
const sections = [...html.matchAll(/<section[^>]*>([\s\S]*?)<\/section>|<div[^>]+class="[^"]*elementor-top-section[^"]*"[^>]*>([\s\S]*?)<\/div>/gi)];
console.log('Top sections detected:', sections.length);

// Instagram feed widget / images
const instaMatches = [...html.matchAll(/banner-1-gallery-\d\.jpg/g)].map(m => m[0]);
console.log('Instagram gallery images:', [...new Set(instaMatches)]);

// App store banners
const appMatches = [...html.matchAll(/(?:google-play|apple-store)[^"']*\.png/g)].map(m => m[0]);
console.log('App store icons:', [...new Set(appMatches)]);

// Testimonials
const testiMatches = [...html.matchAll(/testi-avatar-\d\.jpg/g)].map(m => m[0]);
console.log('Testimonial avatars:', [...new Set(testiMatches)]);
