import React from 'react';
import { 
  Package, 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Truck, 
  Sparkles,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  ArrowUp
} from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export default function Footer({ onNavigate, onOpenQuote }) {
  const handleNav = (href) => {
    onNavigate(href);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-sm">
      {/* Top Banner Highlights */}
      <div className="border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-4 bg-slate-900/60 p-4 rounded-xl border border-slate-800/60">
              <div className="w-12 h-12 rounded-lg bg-brand-500/10 flex items-center justify-center text-brand-400 shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm">Tested Flute Strength</h4>
                <p className="text-xs text-slate-400 mt-0.5">Bursting factor & edge crush certified corrugated paperboard.</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 bg-slate-900/60 p-4 rounded-xl border border-slate-800/60">
              <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm">Direct Manufacturer</h4>
                <p className="text-xs text-slate-400 mt-0.5">Dahisar Mumbai factory dispatch with zero middleman markups.</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 bg-slate-900/60 p-4 rounded-xl border border-slate-800/60">
              <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm">Rapid Sampling</h4>
                <p className="text-xs text-slate-400 mt-0.5">CAD box prototypes and physical proofs within 48 hours.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleNav('#/')}>
              <img
                src={siteConfig.logo}
                alt="Falah Enterprise Logo"
                className="h-10 w-auto bg-white p-1 rounded-lg"
              />
              <span className="text-lg font-bold text-white tracking-wide font-display">
                FALAH ENTERPRISE
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Premier manufacturer of custom corrugated packaging boxes, printed cartons, die-cut shipping boxes, and complete hotel & hospital personal care supplies.
            </p>

            {/* Social Media Link Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a 
                href={siteConfig.socials[0].href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-brand-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href={siteConfig.socials[1].href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-sky-500 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href={siteConfig.socials[2].href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-pink-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href={siteConfig.socials[3].href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-red-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Packaging Solutions */}
          <div>
            <h3 className="text-white font-semibold text-xs tracking-wider uppercase mb-4">Packaging Division</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNav('#/packaging')} className="hover:text-brand-400 transition-colors">
                  Custom Corrugated Boxes (3, 5, 7 Ply)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('#/packaging')} className="hover:text-brand-400 transition-colors">
                  Printed Corrugated & Board Cartons
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('#/packaging')} className="hover:text-brand-400 transition-colors">
                  Corrugated Boxes with Partition Grid
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('#/packaging')} className="hover:text-brand-400 transition-colors">
                  Coloured & White Shipping Boxes
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('#/packaging')} className="hover:text-brand-400 transition-colors">
                  PP Transparent Folding Packaging
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('#/packaging')} className="hover:text-brand-400 transition-colors">
                  Eco-Friendly Biodegradable Mailers
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Hospitality & Institutional Supplies */}
          <div>
            <h3 className="text-white font-semibold text-xs tracking-wider uppercase mb-4">Hotels & Hospitals</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNav('#/hotels-hospitals')} className="hover:text-brand-400 transition-colors">
                  Hotel Dental Kits & Toothbrushes
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('#/hotels-hospitals')} className="hover:text-brand-400 transition-colors">
                  Luxury Guest Soaps & Shampoos
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('#/hotels-hospitals')} className="hover:text-brand-400 transition-colors">
                  Vanity Sets & Elastic Shower Caps
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('#/hotels-hospitals')} className="hover:text-brand-400 transition-colors">
                  Disposable Room Slippers & Shaving Kits
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('#/hotels-hospitals')} className="hover:text-brand-400 transition-colors">
                  Hospital Patient Care Admission Kits
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('#/hotels-hospitals')} className="hover:text-brand-400 transition-colors">
                  Sanitary Pouches & Custom Amenity Trays
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Office */}
          <div>
            <h3 className="text-white font-semibold text-xs tracking-wider uppercase mb-4">Head Office & Factory</h3>
            <div className="space-y-3 text-xs">
              <a
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-2.5 hover:text-white transition-colors group"
              >
                <MapPin className="w-4 h-4 text-brand-400 shrink-0 mt-0.5 group-hover:text-white" />
                <span className="text-slate-400 group-hover:text-white leading-relaxed">
                  {siteConfig.address}
                </span>
              </a>

              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-brand-400 shrink-0" />
                <a href={`tel:${siteConfig.phoneRaw}`} className="hover:text-white transition-colors">
                  {siteConfig.phone}
                </a>
              </div>

              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-brand-400 shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">
                  {siteConfig.email}
                </a>
              </div>

              <div className="pt-2">
                <img
                  src={siteConfig.paymentMethodsImg}
                  alt="Accepted Payment Methods"
                  className="h-6 w-auto opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & Back to top */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Falah Enterprise. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <button onClick={() => handleNav('#/about')} className="hover:text-slate-400 transition-colors">About Us</button>
            <button onClick={() => handleNav('#/packaging')} className="hover:text-slate-400 transition-colors">Packaging</button>
            <button onClick={() => handleNav('#/hotels-hospitals')} className="hover:text-slate-400 transition-colors">Hospitality</button>
            <button onClick={() => handleNav('#/contact')} className="hover:text-slate-400 transition-colors">Contact</button>
            <button 
              onClick={scrollToTop} 
              className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
