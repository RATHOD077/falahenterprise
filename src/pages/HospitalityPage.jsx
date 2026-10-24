import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Check, 
  ArrowRight, 
  Filter, 
  ShieldCheck, 
  HeartHandshake, 
  Hotel, 
  Building2,
  PackageCheck
} from 'lucide-react';
import { hospitalityProducts } from '../data/hospitalityProducts';

export default function HospitalityPage({ onOpenQuote }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Dental Care',
    'Body Care',
    'Vanity Care',
    'Grooming',
    'Liquid Toiletries',
    'Guest Essentials',
    'Hospital Supplies'
  ];

  const filteredProducts = selectedCategory === 'All'
    ? hospitalityProducts
    : hospitalityProducts.filter(p => p.category === selectedCategory);

  return (
    <div className="space-y-16 pb-20">
      {/* PAGE HEADER */}
      <section className="bg-slate-900 text-white py-16 lg:py-20 border-b border-slate-800 relative hero-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl space-y-4"
          >
            <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-semibold px-3 py-1.5 rounded-full">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Hospitality & Healthcare Supply Division</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Hotels & Hospitals <span className="text-amber-400">Essential Supplies</span>
            </h1>
            <p className="text-slate-300 text-base leading-relaxed">
              We supply high-grade guest amenities, dental kits, sanitized hospital patient admission packs, luxury soaps, and customized toiletries for hotels, resorts, clinics, and multi-specialty hospitals.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onOpenQuote({ name: 'Hotel & Hospital Supplies', category: 'Hotels & Hospitals' })}
                className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 rounded-xl font-bold text-sm shadow-md transition-all"
              >
                Request Bulk Institutional Quote
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PRODUCT CATALOG WITH CATEGORY FILTER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <div className="flex items-center text-xs font-semibold text-slate-500 mr-2 shrink-0">
            <Filter className="w-3.5 h-3.5 mr-1" />
            <span>Category:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-sm ring-2 ring-amber-400/30'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 14 Products Grid with AnimatePresence */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Image */}
                  <div className="aspect-[4/3] bg-slate-100 overflow-hidden relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                      loading="lazy"
                    />
                    <span className="absolute top-3 left-3 bg-slate-900/85 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-md">
                      {product.category}
                    </span>
                  </div>

                  {/* Details */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-1.5 pt-2 border-t border-slate-100">
                      <div className="text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-1">
                        Key Highlights:
                      </div>
                      {product.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center text-xs text-slate-600 space-x-2">
                          <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Packaging Unit */}
                    <div className="pt-2">
                      <span className="text-[11px] font-semibold bg-amber-50 text-amber-900 border border-amber-200/60 px-2.5 py-1 rounded-md inline-block">
                        Packing Unit: {product.unit}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <div className="p-6 pt-0">
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onOpenQuote(product)}
                    className="w-full py-2.5 px-4 bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-white rounded-xl text-xs font-bold transition-all shadow-md flex items-center justify-center space-x-2"
                  >
                    <span>Request Wholesale Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* WHY HOTELS & HOSPITALS CHOOSE FALAH ENTERPRISE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900 text-white rounded-2xl p-8 sm:p-12 space-y-8 shadow-xl"
        >
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="text-amber-400 text-xs font-bold uppercase tracking-wider">Quality & Reliability</div>
            <h2 className="text-2xl sm:text-3xl font-extrabold">Institutional Supply Partner for Hospitality & Healthcare</h2>
            <p className="text-slate-300 text-sm">
              We understand that guest impressions and patient safety require unwavering hygiene, consistent packaging, and punctual replenishment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <motion.div whileHover={{ y: -4 }} className="bg-slate-800/60 p-6 rounded-xl border border-slate-700 space-y-3">
              <Hotel className="w-8 h-8 text-amber-400" />
              <h4 className="font-bold text-base">Hotels, Resorts & Guest Houses</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Elevate room standards with custom logo printed sachet packs, premium fragrances, and matching vanity accessories.
              </p>
            </motion.div>

            <motion.div whileHover={{ y: -4 }} className="bg-slate-800/60 p-6 rounded-xl border border-slate-700 space-y-3">
              <Building2 className="w-8 h-8 text-brand-400" />
              <h4 className="font-bold text-base">Hospitals & Nursing Homes</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Pre-packaged patient care admission kits containing sterile dental kits, sanitized combs, and personal care essentials.
              </p>
            </motion.div>

            <motion.div whileHover={{ y: -4 }} className="bg-slate-800/60 p-6 rounded-xl border border-slate-700 space-y-3">
              <PackageCheck className="w-8 h-8 text-emerald-400" />
              <h4 className="font-bold text-base">Private Label & Custom Branding</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Full private labeling options on boxes, pouches, bottles, and dispenser pumps with your organization's logo and color theme.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
