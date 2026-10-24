import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export default function TopBar() {
  return (
    <div className="bg-slate-900 text-slate-300 text-xs border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
          {/* Left contact info */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6">
            <a 
              href={`tel:${siteConfig.phoneRaw}`} 
              className="flex items-center space-x-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-400" />
              <span>{siteConfig.phone}</span>
            </a>
            <a 
              href={`mailto:${siteConfig.email}`} 
              className="flex items-center space-x-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-brand-400" />
              <span>{siteConfig.email}</span>
            </a>
            <a 
              href={siteConfig.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center space-x-1.5 hover:text-white transition-colors text-slate-400"
            >
              <MapPin className="w-3.5 h-3.5 text-brand-400" />
              <span className="truncate max-w-xs">Dahisar East, Mumbai</span>
            </a>
          </div>

          {/* Right: Social Links & Operating Hours */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-1.5 text-slate-400 text-[11px]">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>Mon - Sat: 9:30 AM - 7:30 PM</span>
            </div>
            
            <div className="flex items-center space-x-2.5 pl-2 border-l border-slate-800">
              <a 
                href={siteConfig.socials[0].href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-400 hover:text-blue-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a 
                href={siteConfig.socials[1].href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-400 hover:text-sky-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-3.5 h-3.5" />
              </a>
              <a 
                href={siteConfig.socials[2].href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-400 hover:text-pink-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a 
                href={siteConfig.socials[3].href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-400 hover:text-red-500 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-3.5 h-3.5" />
              </a>
            </div>

            <span className="hidden sm:inline-block bg-emerald-950 text-emerald-400 px-2 py-0.5 rounded font-medium text-[10px] border border-emerald-800">
              Direct Manufacturer
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
