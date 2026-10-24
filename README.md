# Falah Enterprise — Modern React Web Application

A modern, high-performance **React 19 (`.jsx`) + Vite + Tailwind CSS** rebuild of [Falah Enterprise](https://www.falahenterprise.com/), converting the legacy WordPress/Elementor website into an ultra-fast, mobile-first single-page application.

---

## 🚀 Key Improvements Over WordPress

| Metric / Aspect | Old WordPress Site | New React Application |
| :--- | :--- | :--- |
| **Initial JS/CSS Payload** | ~5.8 MB (uncompressed) | **~73 KB (gzipped)** |
| **DOM Nesting Depth** | 15–20 divs per Elementor section | **Semantic clean HTML5 & React JSX** |
| **Build & Tooling** | PHP / Apache / Heavy Plugins | **Vite 6 + React 19 + Tailwind CSS** |
| **Lead Generation** | Slow Contact Form 7 | **Interactive RFQ Modal + 1-Click WhatsApp Chat** |
| **Mobile UX** | Heavy layout shifts (CLS) | **Smooth, responsive, zero CLS** |

---

## 📁 Project Structure

```
falahenterprise/
├── public/
│   └── assets/
│       ├── packaging/          # 65 product box imagery files
│       ├── hospitality/        # 14 custom hotel & hospital supplies photos
│       ├── branding/           # 182 logos, badges, and icons
│       ├── banners/            # 192 banner backgrounds & hero visuals
│       ├── icons/              # 14 UI workflow icons
│       └── asset-manifest.json # Complete URL-to-local asset map
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── TopBar.jsx       # Contact bar (Phone, Email, Dahisar, Mumbai)
│   │   │   ├── Navbar.jsx       # Sticky header + responsive drawer
│   │   │   ├── Footer.jsx       # Rich footer with links and company info
│   │   │   └── WhatsAppFloat.jsx# Floating 1-click WhatsApp widget
│   │   └── common/
│   │       └── QuoteModal.jsx   # RFQ (Request for Quote) modal with WhatsApp bridge
│   ├── pages/
│   │   ├── HomePage.jsx         # Hero, Dual Division spotlights, 3-step process, reviews
│   │   ├── PackagingPage.jsx    # Filterable Corrugated & Carton catalog + spec guide
│   │   ├── HospitalityPage.jsx  # All 14 Hotel & Hospital supply products
│   │   ├── AboutPage.jsx        # Company background, Mumbai facility, quality standards
│   │   └── ContactPage.jsx      # Direct inquiry form, address, Google Map
│   ├── data/
│   │   ├── siteConfig.js        # Global phone, address, email, WhatsApp URL
│   │   ├── packagingProducts.js # Structured packaging specifications
│   │   └── hospitalityProducts.js# 14 Hotel & hospital amenities
│   ├── App.jsx                  # Main application router and state
│   ├── main.jsx                 # React root mounting
│   └── index.css                # Tailwind directives and custom scrollbar
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 🛠️ Development & Build Commands

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Runs the local dev server with Hot Module Replacement (HMR) at `http://localhost:3000`.

### 3. Build for Production
```bash
npm run build
```
Creates an optimized production bundle inside the `dist/` directory ready for deployment to Vercel, Netlify, Cloudflare Pages, GitHub Pages, or any static host.

### 4. Preview Production Build
```bash
npm run preview
```
Runs a local preview of the production build in `dist/`.

---

## 🌐 Netlify Deployment

This project includes pre-configured Netlify rendering and routing support:
1. **[`public/_redirects`](file:///c:/Grabodo/falahenterprise/public/_redirects)**: Handles SPA fallback (`/* /index.html 200`) so client-side navigation and page reloads work seamlessly.
2. **[`netlify.toml`](file:///c:/Grabodo/falahenterprise/netlify.toml)**: Defines the build command (`npm run build`), publish directory (`dist`), SPA redirects, and 1-year immutable caching headers for `/assets/*`.

### Deploying to Netlify:
- **Option A (Git Integration - Recommended):** Connect this repository to Netlify. Netlify will automatically detect `netlify.toml` and configure the build settings.
- **Option B (Netlify CLI):**
  ```bash
  npx netlify deploy --prod --dir=dist
  ```
- **Option C (Netlify Drop):** Drag and drop the `dist/` directory directly into the [Netlify Drop](https://app.netlify.com/drop) dashboard.


---

## 📦 Business Verticals Covered

1. **Industrial & Custom Packaging Division:**
   - Customised Corrugated Boxes (3-Ply, 5-Ply, 7-Ply)
   - Corrugated Paper Boxes (Kraft & Linerboard)
   - Corrugated Packaging Boxes (RSC & Die-cut)
   - Corrugated Boxes With Partition (Internal divider matrix)
   - Coloured & White Corrugated Boxes
   - Printed Corrugated & Board Cartons
   - PP Transparent Folding Boxes

2. **Hotels & Hospitals Supplies Division:**
   - 14 essential product lines:
     1. Hotel Dental Kits (Toothbrush & Toothpaste)
     2. Luxury Hotel Bath Soaps & Bars
     3. Disposable Elastic Shower Caps
     4. Guest Shaving Kits (Twin Blade & Shave Cream)
     5. Hotel Vanity Sets (Cotton Pads & Ear Buds)
     6. Eco Grooming Combs
     7. Shampoo & Conditioner Dispensers
     8. Nourishing Guest Body Lotion
     9. Sanitary Disposal Bags & Pouches
     10. Quick-Fix Mini Sewing Kits
     11. Shoe Shine Sponge & Mitt
     12. Disposable Hotel Room Slippers
     13. Hospital Patient Care Amenity Kits
     14. Custom Amenity Trays & Display Sets

---

## 📞 Company Contact Details
- **Address:** Shop no.6, Eklavya Building, Near NL Complex, Dahisar East, Anand Nagar Metro Station, Mumbai, Maharashtra 400068
- **Phone:** +91 9004116634
- **Email:** info@falahenterprise.com
