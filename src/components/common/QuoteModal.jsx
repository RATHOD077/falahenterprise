import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, Box, Sparkles } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { packagingProducts } from '../../data/packagingProducts';
import { hospitalityProducts } from '../../data/hospitalityProducts';
import { siteConfig } from '../../data/siteConfig';

export default function QuoteModal({ isOpen, onClose, preselectedProduct = null }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    category: preselectedProduct?.category?.includes('Boxes') ? 'Packaging' : 'Hotels & Hospitals',
    product: preselectedProduct?.name || 'Custom Corrugated Boxes',
    quantity: '500',
    dimensions: '',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppSubmit = () => {
    const text = `*New Quote Request - Falah Enterprise*\n\n` +
      `*Name:* ${formData.name || 'N/A'}\n` +
      `*Phone:* ${formData.phone || 'N/A'}\n` +
      `*Category:* ${formData.category}\n` +
      `*Product:* ${formData.product}\n` +
      `*Quantity:* ${formData.quantity}\n` +
      (formData.dimensions ? `*Dimensions / Specs:* ${formData.dimensions}\n` : '') +
      (formData.notes ? `*Notes:* ${formData.notes}\n` : '');

    const url = `https://api.whatsapp.com/send?phone=919004116634&text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", damping: 26, stiffness: 320 }}
            className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden z-10 max-h-[92vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-brand-900 text-white p-6 relative">
              <button
                onClick={onClose}
                className="absolute top-5 right-5 p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="flex items-center space-x-2 text-brand-400 text-xs font-semibold tracking-wider uppercase mb-1">
                <Sparkles className="w-4 h-4" />
                <span>Instant Manufacturer Quote</span>
              </div>
              <h2 className="text-xl font-bold tracking-tight">Request a Custom Quotation</h2>
              <p className="text-xs text-slate-300 mt-1">
                Tell us your specifications. We respond with competitive factory pricing within 2 hours.
              </p>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-8 text-center space-y-4"
                >
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Thank You, {formData.name || 'Valued Customer'}!</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Your quotation request for <span className="font-semibold text-slate-900">{formData.product}</span> has been received. Our team will contact you shortly at <span className="font-semibold text-slate-900">{formData.phone}</span>.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleWhatsAppSubmit}
                      className="px-5 py-2.5 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-sm transition-colors flex items-center justify-center space-x-2 shadow-md shadow-[#25D366]/20"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                      <span>Send Directly on WhatsApp</span>
                    </motion.button>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        onClose();
                      }}
                      className="px-5 py-2.5 rounded-lg border border-slate-200 text-slate-700 font-medium text-sm hover:bg-slate-50 transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Division Switcher */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Select Division
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, category: 'Packaging', product: packagingProducts[0].name })}
                        className={`p-3 rounded-xl border text-left text-xs font-medium flex items-center space-x-2 transition-all ${
                          formData.category === 'Packaging'
                            ? 'border-brand-600 bg-brand-50/70 text-brand-900 ring-2 ring-brand-500/20'
                            : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        <Box className="w-4 h-4 text-brand-600 shrink-0" />
                        <span>Packaging Boxes</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, category: 'Hotels & Hospitals', product: hospitalityProducts[0].name })}
                        className={`p-3 rounded-xl border text-left text-xs font-medium flex items-center space-x-2 transition-all ${
                          formData.category === 'Hotels & Hospitals'
                            ? 'border-brand-600 bg-brand-50/70 text-brand-900 ring-2 ring-brand-500/20'
                            : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        <Sparkles className="w-4 h-4 text-brand-600 shrink-0" />
                        <span>Hotels & Hospitals</span>
                      </button>
                    </div>
                  </div>

                  {/* Product Select */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Product Required *
                    </label>
                    <select
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white"
                    >
                      {formData.category === 'Packaging'
                        ? packagingProducts.map(p => <option key={p.id} value={p.name}>{p.name}</option>)
                        : hospitalityProducts.map(p => <option key={p.id} value={p.name}>{p.name}</option>)
                      }
                    </select>
                  </div>

                  {/* Quantity & Dimensions */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Approx Quantity *
                      </label>
                      <input
                        type="text"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        placeholder="e.g. 500 pcs, 2000 pcs"
                        required
                        className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Dimensions / Board Specs
                      </label>
                      <input
                        type="text"
                        name="dimensions"
                        value={formData.dimensions}
                        onChange={handleChange}
                        placeholder="e.g. 12x10x8 inch, 5-ply"
                        className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                      />
                    </div>
                  </div>

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Your Name / Company *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Full Name"
                        required
                        className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Phone / Mobile Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 9004116634"
                        required
                        className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="yourname@domain.com"
                      className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Custom Requirements / Delivery City
                    </label>
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      rows="2"
                      placeholder="Printing colors, lamination, partition type, delivery location..."
                      className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                    ></textarea>
                  </div>

                  {/* Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="flex-1 py-3 px-4 bg-brand-600 hover:bg-brand-700 text-white rounded-lg font-semibold text-sm shadow-md shadow-brand-600/20 transition-all flex items-center justify-center space-x-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit RFQ Request</span>
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      type="button"
                      onClick={handleWhatsAppSubmit}
                      className="py-3 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-lg font-semibold text-sm shadow-md shadow-[#25D366]/20 transition-all flex items-center justify-center space-x-2"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                      <span>Send via WhatsApp</span>
                    </motion.button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
