import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Package, 
  Layers, 
  Check, 
  ArrowRight, 
  Filter, 
  Sparkles, 
  Info, 
  HelpCircle,
  FileCheck2
} from 'lucide-react';
import { packagingProducts } from '../data/packagingProducts';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

export default function PackagingPage({ onOpenQuote }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Corrugated Boxes', 'Branded Boxes', 'Specialty Boxes', 'Mono Cartons'];

  const filteredProducts = selectedCategory === 'All'
    ? packagingProducts
    : packagingProducts.filter(p => p.category === selectedCategory);

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
            <div className="inline-flex items-center space-x-2 bg-brand-500/10 border border-brand-400/30 text-brand-300 text-xs font-semibold px-3 py-1.5 rounded-full">
              <Package className="w-3.5 h-3.5" />
              <span>Packaging Manufacturing Division</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Industrial & Custom <span className="text-brand-400">Packaging Boxes</span>
            </h1>
            <p className="text-slate-300 text-base leading-relaxed">
              We engineer corrugated boxes, heavy-duty shipping cartons, partitioned protective containers, and branded mono cartons. Built to exact dimensions with premium kraft linerboard.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onOpenQuote({ name: 'Custom Corrugated Boxes', category: 'Packaging' })}
                className="px-6 py-3 bg-brand-600 hover:bg-brand-500 text-white rounded-xl font-bold text-sm shadow-md transition-all"
              >
                Request Custom Box Quote
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FILTER BAR & PRODUCT CATALOG */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter Pills */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <div className="flex items-center text-xs font-semibold text-slate-500 mr-2 shrink-0">
            <Filter className="w-3.5 h-3.5 mr-1" />
            <span>Filter:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-brand-600 text-white shadow-sm ring-2 ring-brand-500/20'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Cards Grid with AnimatePresence */}
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
                  {/* Image Container */}
                  <div className="aspect-[16/10] bg-slate-100 overflow-hidden relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-slate-900/85 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-md">
                      {product.category}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    {/* Features list */}
                    <div className="space-y-1.5 pt-2 border-t border-slate-100">
                      <div className="text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-1">
                        Specifications & Highlights:
                      </div>
                      {product.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center text-xs text-slate-600 space-x-2">
                          <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Best For Tag */}
                    <div className="pt-2">
                      <span className="text-[11px] font-medium bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md inline-block">
                        <strong>Best For:</strong> {product.bestFor}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <div className="p-6 pt-0">
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onOpenQuote(product)}
                    className="w-full py-2.5 px-4 bg-brand-600 hover:bg-brand-700 text-white rounded-xl text-xs font-bold transition-all shadow-md shadow-brand-600/10 flex items-center justify-center space-x-2"
                  >
                    <span>Request Custom Box Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* TECHNICAL PACKAGING SPECIFICATIONS GUIDE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-50 rounded-2xl p-6 sm:p-10 border border-slate-200 space-y-6"
        >
          <div className="space-y-2">
            <div className="text-brand-600 text-xs font-bold uppercase tracking-wider flex items-center space-x-1.5">
              <Info className="w-4 h-4" />
              <span>Technical Reference Guide</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Understanding Corrugated Box Ply, Flutes & Strength
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-3xl">
              Choose the exact board grade to withstand stacking weight, freight vibration, and moisture. Our team helps you select the optimal paper GSM and fluting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div whileHover={{ y: -4 }} className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs space-y-2">
              <div className="text-brand-600 font-bold text-base">3-Ply Single Wall</div>
              <p className="text-xs text-slate-500">Composed of 2 flat facings and 1 wave fluting medium. Lightweight and economical for eCommerce parcels up to 10 kg.</p>
              <div className="text-[11px] font-semibold text-slate-700">Flute Options: B-Flute (3mm), C-Flute (4mm), E-Flute (1.5mm)</div>
            </motion.div>

            <motion.div whileHover={{ y: -4 }} className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs space-y-2">
              <div className="text-brand-600 font-bold text-base">5-Ply Double Wall</div>
              <p className="text-xs text-slate-500">Constructed with 3 flat facings and 2 corrugated fluted mediums. Engineered for heavy industrial transit and weights up to 35 kg.</p>
              <div className="text-[11px] font-semibold text-slate-700">Flute Options: BC-Flute (7mm), AB-Flute (8mm)</div>
            </motion.div>

            <motion.div whileHover={{ y: -4 }} className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs space-y-2">
              <div className="text-brand-600 font-bold text-base">7-Ply Triple Wall</div>
              <p className="text-xs text-slate-500">Ultra heavy-duty packaging with 4 flat liners and 3 fluted mediums. Serves as a lightweight alternative to wooden shipping crates.</p>
              <div className="text-[11px] font-semibold text-slate-700">Flute Options: AAA or BCA Flute (12mm-15mm)</div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-slate-900">Packaging FAQs</h2>
          <p className="text-xs text-slate-500">Common questions about minimum order quantities, customization, and lead times.</p>
        </div>

        <div className="space-y-4 text-xs sm:text-sm">
          <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2">
            <h4 className="font-bold text-slate-900">What is the Minimum Order Quantity (MOQ)?</h4>
            <p className="text-slate-600">For standard unprinted brown boxes, our minimum order quantity starts as low as 300 to 500 pcs. For customized multi-color printed cartons and die-cut boxes, the standard run begins at 500 to 1,000 pcs.</p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2">
            <h4 className="font-bold text-slate-900">Can you make custom die-cut shapes and partitions?</h4>
            <p className="text-slate-600">Yes! We fabricate specialized cutting dies tailored to your product shapes, including self-locking mailers, carry handles, display trays, and internal grid partitions for fragile glass or bottles.</p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2">
            <h4 className="font-bold text-slate-900">What is your turnaround time for production?</h4>
            <p className="text-slate-600">Standard production runs are completed within 3 to 7 working days from final proof approval. Urgent repeat orders can be prioritized through our Dahisar manufacturing unit.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
