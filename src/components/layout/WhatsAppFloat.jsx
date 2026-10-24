import React from 'react';
import { motion } from 'framer-motion';
import WhatsAppIcon from '../common/WhatsAppIcon';
import { siteConfig } from '../../data/siteConfig';

export default function WhatsAppFloat() {
  return (
    <aside aria-label="WhatsApp quick chat" className="fixed bottom-6 right-6 z-50 flex items-center group">
      {/* Tooltip */}
      <motion.div 
        initial={{ opacity: 0, x: 10, scale: 0.95 }}
        whileHover={{ opacity: 1, x: 0, scale: 1 }}
        className="hidden sm:block mr-3 bg-white text-slate-800 text-xs font-semibold py-1.5 px-3.5 rounded-full shadow-xl border border-slate-100 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
      >
        <span className="flex items-center space-x-1.5">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
          <span>Chat with us on WhatsApp!</span>
        </span>
      </motion.div>

      {/* Button with radar ping ring */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.92 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className="relative"
      >
        {/* Radar ping ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none"></span>

        <a
          href={siteConfig.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-lg shadow-[#25D366]/40 hover:shadow-[#25D366]/60 transition-all focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
          aria-label="Direct WhatsApp Chat"
        >
          <WhatsAppIcon className="w-8 h-8" />
        </a>
      </motion.div>
    </aside>
  );
}
