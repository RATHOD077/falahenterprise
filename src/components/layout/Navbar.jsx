import React, { useState } from 'react';
import { Menu, X, Search, ChevronRight, PhoneCall, Sparkles } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export default function Navbar({ currentRoute, onNavigate, onOpenQuote }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleNav = (href) => {
    onNavigate(href);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    // Route to packaging or hospitality based on keywords
    if (/hotel|hospital|soap|dental|amenit/i.test(searchQuery)) {
      handleNav('#/hotels-hospitals');
    } else {
      handleNav('#/packaging');
    }
    setSearchOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Main Official Logo */}
          <div 
            onClick={() => handleNav('#/')} 
            className="flex items-center space-x-3 cursor-pointer group py-2"
          >
            <img
              src={siteConfig.logo}
              alt="Falah Enterprise Logo"
              className="h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
              loading="eager"
            />
            <div className="hidden sm:block">
              <div className="text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-brand-600 transition-colors uppercase leading-tight font-display">
                Falah Enterprise
              </div>
              <div className="text-[10px] font-semibold text-brand-700 tracking-wider uppercase">
                Packaging & Hospital Supplies
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {siteConfig.navLinks.map((link) => {
              const isActive = currentRoute === link.href || (link.href === '#/' && currentRoute === '');
              return (
                <button
                  key={link.name}
                  onClick={() => handleNav(link.href)}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'text-brand-600 bg-brand-50 font-bold shadow-xs'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* Search Trigger */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-brand-600 hover:bg-slate-50 transition-colors"
              title="Search Products"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Direct Call Link */}
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="hidden xl:flex items-center space-x-1.5 px-3 py-2 text-slate-700 text-xs font-semibold hover:text-brand-600 transition-colors border border-slate-200 rounded-lg"
            >
              <PhoneCall className="w-3.5 h-3.5 text-brand-600" />
              <span>{siteConfig.phone}</span>
            </a>

            {/* Request a Quote CTA */}
            <button
              onClick={() => onOpenQuote()}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-600 to-brand-700 hover:from-brand-700 hover:to-brand-800 text-white text-xs font-bold shadow-md shadow-brand-600/20 active:scale-95 transition-all flex items-center space-x-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Get Free Quote</span>
            </button>
          </div>

          {/* Mobile menu and search toggles */}
          <div className="flex sm:hidden items-center space-x-2">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => onOpenQuote()}
              className="px-3 py-1.5 rounded-lg bg-brand-600 text-white text-xs font-bold shadow-xs"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Search Bar Flyout */}
        {searchOpen && (
          <div className="pb-4 animate-in fade-in slide-in-from-top-2 duration-200">
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search custom corrugated boxes, mono cartons, dental kits, hospital supplies..."
                className="w-full px-4 py-2.5 pl-10 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 shadow-sm"
                autoFocus
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <button
                type="submit"
                className="absolute right-2 top-2 px-3 py-1 bg-brand-600 text-white rounded-lg text-xs font-semibold"
              >
                Search
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-1">
            {siteConfig.navLinks.map((link) => {
              const isActive = currentRoute === link.href || (link.href === '#/' && currentRoute === '');
              return (
                <button
                  key={link.name}
                  onClick={() => handleNav(link.href)}
                  className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-semibold text-left transition-all ${
                    isActive
                      ? 'bg-brand-50 text-brand-600 font-bold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>
              );
            })}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100 space-y-2.5">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="flex items-center justify-center space-x-2 w-full py-2.5 border border-slate-200 rounded-xl text-slate-700 font-semibold text-xs"
            >
              <PhoneCall className="w-4 h-4 text-brand-600" />
              <span>Call Direct: {siteConfig.phone}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-3 bg-brand-600 text-white rounded-xl font-bold text-xs shadow-md shadow-brand-600/20"
            >
              Request Custom Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
