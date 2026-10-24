import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Package, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Truck, 
  Factory, 
  Layers, 
  PhoneCall, 
  Mail,
  CheckCircle,
  FileCheck2,
  Clock,
  Award,
  ChevronLeft,
  ChevronRight,
  Star,
  Instagram,
  Smartphone,
  ExternalLink
} from 'lucide-react';
import { packagingProducts } from '../data/packagingProducts';
import { hospitalityProducts } from '../data/hospitalityProducts';
import { siteConfig } from '../data/siteConfig';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 25 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: custom * 0.1,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

export default function HomePage({ onNavigate, onOpenQuote }) {
  // Hero Carousel State
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      badge: "Custom packaging 🔥",
      title: "Packaging that shows off your brand",
      desc: "Get your business logo into more hands, from personalized labels and stickers to heavy-duty corrugated cartons.",
      tags: ["Trusted by Businesses", "Delivered in 3 days", "Factory Direct"],
      image: "/assets/banners/banner-1-1.png",
      cta: "Enquire Now"
    },
    {
      badge: "ECO-FRIENDLY PACKAGING ♻️",
      title: "Go green with sustainably responsible packaging",
      desc: "100% recyclable corrugated board, water-based printing inks, and biodegradable kraft paper options.",
      tags: ["Compostable", "Plastic Free", "Recyclable", "Eco-labels"],
      image: "/assets/banners/banner-1-1-2.png",
      cta: "Explore Eco Boxes"
    },
    {
      badge: "Ready to ship 🔥",
      title: "Custom packaging, simplified for your business",
      desc: "Save cost and time with precision die-cutting, custom flute options, and rapid sampling before bulk runs.",
      tags: ["Save Cost & Time", "High Reliability", "Max Brand Impact"],
      image: "/assets/banners/banner-1-1-3.png",
      cta: "Request Prototype"
    }
  ];

  // Auto-advance hero slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Brand Partner / Logo Quote Switcher
  const [selectedPartnerIndex, setSelectedPartnerIndex] = useState(0);

  // Testimonial Carousel State
  const [currentTesti, setCurrentTesti] = useState(0);

  const featuredPackaging = packagingProducts.slice(0, 4);
  const featuredHospitality = hospitalityProducts.slice(0, 4);

  return (
    <div className="space-y-16 lg:space-y-24 pb-20 overflow-hidden">
      {/* 1. HERO SLIDESHOW SECTION WITH SMOOTH TRANSITIONS */}
      <section className="relative hero-pattern text-white overflow-hidden py-14 lg:py-24 border-b border-slate-800">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-brand-950/70 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Copy with AnimatePresence */}
            <div className="lg:col-span-7 space-y-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="space-y-5"
                >
                  <div className="inline-flex items-center space-x-2 bg-brand-500/10 border border-brand-400/30 text-brand-300 text-xs font-semibold px-3.5 py-1.5 rounded-full backdrop-blur-xs">
                    <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse"></span>
                    <span>{slides[currentSlide].badge}</span>
                  </div>

                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight min-h-[96px] sm:min-h-[120px]">
                    {slides[currentSlide].title}
                  </h1>

                  <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl min-h-[60px]">
                    {slides[currentSlide].desc}
                  </p>

                  {/* Slide Tags */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {slides[currentSlide].tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-semibold bg-white/10 px-3 py-1 rounded-full text-slate-200 border border-white/10"
                      >
                        ✓ {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 pt-4">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => onOpenQuote()}
                  className="px-6 py-3.5 bg-brand-600 hover:bg-brand-500 text-white rounded-xl font-bold text-sm shadow-lg shadow-brand-600/30 transition-all flex items-center space-x-2"
                >
                  <span>{slides[currentSlide].cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onNavigate('#/packaging')}
                  className="px-6 py-3.5 bg-slate-800/80 hover:bg-slate-700/80 text-white border border-slate-700 rounded-xl font-semibold text-sm transition-all flex items-center space-x-2"
                >
                  <Package className="w-4 h-4 text-brand-400" />
                  <span>View All Products</span>
                </motion.button>
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="px-4 py-3.5 text-slate-300 hover:text-white font-medium text-sm flex items-center space-x-2 group"
                >
                  <PhoneCall className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
                  <span>Call {siteConfig.phone}</span>
                </a>
              </div>

              {/* Animated Slide Progress Bars */}
              <div className="flex items-center space-x-2.5 pt-4">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className="relative h-2 rounded-full overflow-hidden bg-slate-800 transition-all cursor-pointer"
                    style={{ width: currentSlide === i ? '48px' : '16px' }}
                    aria-label={`Slide ${i + 1}`}
                  >
                    {currentSlide === i ? (
                      <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 5.5, ease: "linear" }}
                        className="h-full bg-brand-400 rounded-full"
                      />
                    ) : (
                      <div className="h-full bg-slate-700" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Hero Graphic with Smooth Floating Motion */}
            <div className="lg:col-span-5 relative">
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl p-4"
              >
                <div className="aspect-[4/3] rounded-xl overflow-hidden relative bg-slate-950/40 flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentSlide}
                      src={slides[currentSlide].image}
                      alt={slides[currentSlide].title}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                      className="max-h-full max-w-full object-contain"
                      loading="eager"
                    />
                  </AnimatePresence>
                </div>

                {/* Floating overlay card */}
                <div className="mt-4 p-3.5 bg-slate-800/90 rounded-xl border border-slate-700/60 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-white">Direct Mumbai Manufacturing</div>
                    <div className="text-[11px] text-slate-400">Dahisar East • Custom Sizes & Bulk Orders</div>
                  </div>
                  <button
                    onClick={() => onOpenQuote()}
                    className="text-xs font-bold text-brand-400 hover:text-brand-300 flex items-center space-x-1"
                  >
                    <span>Get Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BRAND LOGO SHOWCASE & INTERACTIVE QUOTE SWITCHER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeInUp}
          className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-xs space-y-6"
        >
          <div className="text-center">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              Trusted by Progressive Brands & Supply Chains
            </span>
          </div>

          {/* Active Partner Quote Display with AnimatePresence */}
          <div className="max-w-3xl mx-auto text-center space-y-2 py-3.5 px-6 bg-slate-50/80 rounded-xl border border-slate-100 min-h-[96px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedPartnerIndex}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-slate-800 font-medium text-sm sm:text-base italic">
                  {siteConfig.brandPartners[selectedPartnerIndex].quote}
                </p>
                <div className="text-xs font-bold text-brand-600 mt-1">
                  — {siteConfig.brandPartners[selectedPartnerIndex].author}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Clickable Logos Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 items-center">
            {siteConfig.brandPartners.map((partner, index) => {
              const isSelected = selectedPartnerIndex === index;
              return (
                <motion.button
                  key={partner.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedPartnerIndex(index)}
                  className={`p-3 rounded-xl border transition-all flex items-center justify-center h-16 ${
                    isSelected
                      ? 'border-brand-500 bg-brand-50/60 shadow-sm ring-2 ring-brand-500/20'
                      : 'border-slate-100 hover:border-slate-300 bg-white hover:bg-slate-50/50 opacity-70 hover:opacity-100'
                  }`}
                  title={`Click to view testimonial from ${partner.name}`}
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-8 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all"
                  />
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* 3. DUAL DIVISION OVERVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto space-y-3 mb-12"
        >
          <div className="inline-block text-brand-600 text-xs font-bold uppercase tracking-wider bg-brand-50 px-3 py-1 rounded-full">
            Our Core Competencies
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Two Specialized Manufacturing Divisions Under One Roof
          </h2>
          <p className="text-slate-600 text-sm">
            Whether you require heavy-duty export corrugated packaging or bulk guest room supplies, Falah Enterprise delivers consistency, competitive rates, and reliable dispatch.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Division 1: Packaging */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ y: -6 }}
            className="bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-xl transition-all overflow-hidden flex flex-col justify-between group"
          >
            <div className="p-6 sm:p-8 space-y-5">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Package className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">
                  Packaging Division
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                Corrugated & Branded Packaging Boxes
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                From basic brown shipping cartons to luxury printed mono cartons, our packaging protects your products throughout transit while building high brand recall upon unboxing.
              </p>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Customised Corrugated Boxes (3, 5, and 7-ply)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Internal Divider Partitions for fragile items</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Printed Board Boxes and PP Transparent Folding Cartons</span>
                </li>
              </ul>
            </div>
            <div className="px-6 sm:px-8 pb-6 pt-3 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between">
              <button
                onClick={() => onNavigate('#/packaging')}
                className="text-brand-600 font-bold text-sm flex items-center space-x-1.5 hover:text-brand-700 group/btn"
              >
                <span>Browse All Packaging Products</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => onOpenQuote({ name: 'Custom Packaging Box', category: 'Packaging' })}
                className="px-3.5 py-2 bg-white border border-slate-200 hover:border-brand-500 text-slate-700 hover:text-brand-600 rounded-lg text-xs font-semibold transition-all shadow-xs"
              >
                Get Box Quote
              </button>
            </div>
          </motion.div>

          {/* Division 2: Hospitality & Hospital Supplies */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ y: -6 }}
            className="bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-xl transition-all overflow-hidden flex flex-col justify-between group"
          >
            <div className="p-6 sm:p-8 space-y-5">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Sparkles className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">
                  Hospitality Division
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                Hotels & Hospitals Essential Supplies
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Complete guest room amenities and hospital patient admission kits designed to maintain supreme hygiene standards while elevating your property’s hospitality experience.
              </p>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Custom Branded Dental Kits, Soaps, and Shampoos</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Sanitary Pouches, Shower Caps, and Shaving Sets</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Hospital Hygienic Patient Care Admission Packs</span>
                </li>
              </ul>
            </div>
            <div className="px-6 sm:px-8 pb-6 pt-3 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between">
              <button
                onClick={() => onNavigate('#/hotels-hospitals')}
                className="text-amber-600 font-bold text-sm flex items-center space-x-1.5 hover:text-amber-700 group/btn"
              >
                <span>Browse All 14 Hospitality Supplies</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => onOpenQuote({ name: 'Hotel & Hospital Supplies', category: 'Hotels & Hospitals' })}
                className="px-3.5 py-2 bg-white border border-slate-200 hover:border-amber-500 text-slate-700 hover:text-amber-600 rounded-lg text-xs font-semibold transition-all shadow-xs"
              >
                Get Amenity Quote
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. FEATURED PACKAGING PRODUCTS WITH STAGGER ANIMATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-8">
          <div>
            <div className="text-brand-600 text-xs font-bold uppercase tracking-wider">Packaging Catalog</div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">Featured Packaging Solutions</h2>
          </div>
          <button
            onClick={() => onNavigate('#/packaging')}
            className="text-brand-600 font-bold text-sm hover:text-brand-700 flex items-center space-x-1 group"
          >
            <span>View All Boxes</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {featuredPackaging.map((product, idx) => (
            <motion.div
              key={product.id}
              variants={fadeInUp}
              custom={idx}
              whileHover={{ y: -6 }}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[4/3] bg-slate-100 overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className="absolute top-2.5 left-2.5 bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-semibold px-2 py-0.5 rounded">
                    {product.category}
                  </span>
                </div>
                <div className="p-4 space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm group-hover:text-brand-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    {product.description}
                  </p>
                </div>
              </div>
              <div className="p-4 pt-0">
                <button
                  onClick={() => onOpenQuote(product)}
                  className="w-full py-2 bg-brand-50 hover:bg-brand-600 text-brand-700 hover:text-white rounded-lg text-xs font-semibold transition-all"
                >
                  Request Quote
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 5. HOW IT WORKS WITH ORIGINAL GRAPHIC */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-3">
                <div className="text-brand-400 text-xs font-bold uppercase tracking-wider">How It Works</div>
                <h2 className="text-2xl sm:text-3xl font-extrabold">Seamless 3-Step Process</h2>
                <p className="text-slate-400 text-sm">
                  We turn your packaging concepts into finished protective cartons with systematic speed and rigor.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    num: "1",
                    title: "Customize your packaging",
                    desc: "Choose from custom dimensions, board grades (3, 5, 7 ply), and customize your design with graphics, text or your own uploaded brand artwork."
                  },
                  {
                    num: "2",
                    title: "Set up shipping instructions",
                    desc: "Get your custom packaging when you need it, with prioritized manufacturing schedules and delivery instructions tailored to your dock."
                  },
                  {
                    num: "3",
                    title: "Track the progress of orders",
                    desc: "Keep tabs on your orders every step of the way with dispatch alerts, LR tracking numbers, and dedicated account support."
                  }
                ].map((step, i) => (
                  <motion.div
                    key={step.num}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    whileHover={{ x: 6 }}
                    className="flex items-start space-x-4 bg-slate-800/60 p-4 rounded-xl border border-slate-700/60 transition-colors hover:border-brand-500/50"
                  >
                    <div className="w-10 h-10 rounded-lg bg-brand-600 text-white font-bold flex items-center justify-center shrink-0 shadow-md shadow-brand-600/30">
                      {step.num}
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-white">{step.title}</h3>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <motion.div 
                whileHover={{ scale: 1.04 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative p-4 bg-slate-800/70 rounded-2xl border border-slate-700 max-w-md shadow-2xl"
              >
                <img
                  src="/assets/icons/banner-1-steps.png"
                  alt="Packaging Workflow Steps"
                  className="w-full h-auto object-contain"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SERVICES THAT MEET YOUR PACKAGING NEEDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="text-brand-600 text-xs font-bold uppercase tracking-wider">End-To-End Capability</div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Services That Meet Your Packaging Needs
          </h2>
          <p className="text-slate-600 text-sm">
            Get service support at any point of your packaging journey to guarantee total packaging success.
          </p>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {siteConfig.services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              custom={index}
              whileHover={{ y: -8 }}
              className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-xl transition-all group space-y-4"
            >
              <div className="w-14 h-14 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center p-2 group-hover:scale-110 transition-transform">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="font-bold text-base text-slate-900 group-hover:text-brand-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 7. CUSTOMER TESTIMONIALS CAROUSEL */}
      <section className="bg-slate-50 py-16 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-10">
            <div>
              <div className="text-brand-600 text-xs font-bold uppercase tracking-wider">Client Reviews</div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">See What Our Customers Say</h2>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setCurrentTesti((prev) => (prev === 0 ? siteConfig.testimonials.length - 1 : prev - 1))}
                className="p-2 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 transition-colors active:scale-95"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setCurrentTesti((prev) => (prev + 1) % siteConfig.testimonials.length)}
                className="p-2 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 transition-colors active:scale-95"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {siteConfig.testimonials.map((t, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                className={`bg-white p-6 rounded-2xl border transition-all space-y-4 ${
                  currentTesti === index
                    ? 'border-brand-500 shadow-lg ring-2 ring-brand-500/10'
                    : 'border-slate-200/80 shadow-xs'
                }`}
              >
                <div className="flex items-center space-x-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{t.quote}"
                </p>
                <div className="flex items-center space-x-3 pt-2 border-t border-slate-100">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover border border-slate-200"
                  />
                  <div>
                    <h4 className="font-bold text-xs text-slate-900">{t.name}</h4>
                    <p className="text-[11px] text-slate-500">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. MOBILE APP & INSTAGRAM GRID SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Mobile App Download Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-slate-900 via-slate-900 to-brand-950 text-white rounded-2xl p-8 sm:p-12 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl"
        >
          <div className="space-y-3 text-center md:text-left">
            <div className="inline-flex items-center space-x-2 text-brand-400 text-xs font-bold uppercase tracking-wider">
              <Smartphone className="w-4 h-4" />
              <span>Available for iOS and Android</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold">Shop Faster with Falah Packaging Support</h2>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
              Get instant push updates on repeat orders, track truck dispatches live, and reorder standard size boxes in one tap.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0 justify-center">
            <motion.img
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              src="/assets/general/google-play.png"
              alt="Download on Google Play"
              className="h-11 w-auto object-contain cursor-pointer transition-opacity"
            />
            <motion.img
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              src="/assets/general/apple-store.png"
              alt="Download on Apple App Store"
              className="h-11 w-auto object-contain cursor-pointer transition-opacity"
            />
          </div>
        </motion.div>

        {/* Instagram Feed / Gallery */}
        <div className="space-y-6">
          <div className="text-center space-y-1">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">On The Gram</div>
            <h3 className="text-xl font-bold text-slate-900">@haru_printspace</h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {siteConfig.galleryImages.map((img, i) => (
              <motion.a
                key={i}
                whileHover={{ scale: 1.03 }}
                href={siteConfig.socials[2].href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square rounded-xl overflow-hidden bg-slate-100 shadow-xs"
              >
                <img
                  src={img}
                  alt={`Packaging Showcase ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-900/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                  <Instagram className="w-6 h-6" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* 9. QUICK INQUIRY CALL-TO-ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-brand-600 rounded-2xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-brand-600/20"
        >
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold">Ready to Elevate Your Packaging & Supplies?</h2>
            <p className="text-brand-100 text-sm max-w-xl">
              Talk directly with our manufacturing specialists in Mumbai. We provide quotes, send sample swatches, and help optimize your packing costs.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onOpenQuote()}
              className="px-6 py-3.5 bg-white text-brand-700 hover:bg-brand-50 rounded-xl font-bold text-sm shadow-md transition-all text-center"
            >
              Get Instant Quote
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={`tel:${siteConfig.phoneRaw}`}
              className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold text-sm shadow-md transition-all text-center flex items-center justify-center space-x-2"
            >
              <PhoneCall className="w-4 h-4 text-amber-400" />
              <span>Call Us Direct</span>
            </motion.a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
