import React from 'react';
import { 
  Building2, 
  Target, 
  Eye, 
  ShieldCheck, 
  Factory, 
  Leaf, 
  Users, 
  Award,
  ArrowRight
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function AboutPage({ onNavigate, onOpenQuote }) {
  return (
    <div className="space-y-16 lg:space-y-24 pb-20">
      {/* PAGE HEADER */}
      <section className="bg-slate-900 text-white py-16 lg:py-20 border-b border-slate-800 relative hero-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 bg-brand-500/10 border border-brand-400/30 text-brand-300 text-xs font-semibold px-3 py-1.5 rounded-full">
              <Building2 className="w-3.5 h-3.5" />
              <span>About Falah Enterprise</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Engineering Packaging That Protects & Supplies That Impress
            </h1>
            <p className="text-slate-300 text-base leading-relaxed">
              At Falah Enterprise, we believe packaging is more than just a container—it’s the physical handshake between your brand and your customer.
            </p>
          </div>
        </div>
      </section>

      {/* CORE COMPANY NARRATIVE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <div className="text-brand-600 text-xs font-bold uppercase tracking-wider">Our Story & Mission</div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
              A Trusted Manufacturing Partner for Businesses Across India
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Headquartered in Dahisar East, Mumbai, Falah Enterprise was established to bridge the gap between quality manufacturing, transparent factory pricing, and flexible batch sizing.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              We operate two specialized business verticals: our **Industrial & Custom Packaging Division**, producing millions of corrugated cartons, printed board boxes, and protective partitioned shippers; and our **Hospitality & Healthcare Supply Division**, delivering premium personal care amenities to hotels, luxury resorts, and hospitals.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-4 border-t border-slate-200">
              <div className="space-y-1">
                <div className="text-2xl font-bold text-brand-600">100%</div>
                <div className="text-xs font-medium text-slate-600">Client Specification Match</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-brand-600">0%</div>
                <div className="text-xs font-medium text-slate-600">Intermediary Markup</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900 relative">
              <img
                src="/assets/packaging/PRINTED-CORRUGATED-BOXES.jpg"
                alt="Falah Enterprise Manufacturing"
                className="w-full h-80 object-cover"
              />
              <div className="p-6 bg-slate-900 text-white space-y-2">
                <div className="text-xs font-semibold text-brand-400 uppercase">Manufacturing Facility</div>
                <div className="text-base font-bold">Dahisar East, Mumbai Unit</div>
                <p className="text-xs text-slate-400">
                  Equipped with high-precision die-cutters, rotary slotters, flexo printers, and partition collators.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION, VISION & VALUES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Our Mission</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              To be the most dependable packaging and institutional supply partner for growing and established enterprises by delivering precision-engineered, cost-optimized solutions.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Our Vision</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              To drive industry-wide adoption of eco-friendly, circular packaging materials while setting benchmark standards in hospitality hygiene and patient care supply reliability.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Our Quality Promise</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Every production lot undergoes burst factor testing, edge crush resistance, flute integrity inspection, and strict cosmetic review before leaving our factory floor.
            </p>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-2xl p-8 sm:p-12 text-white text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold max-w-2xl mx-auto">
            Partner With a Packaging Manufacturer That Understands Your Growth
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Contact us today for free consultations, material swatches, or bulk quotation requests.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenQuote()}
              className="px-6 py-3.5 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-xl text-sm shadow-md transition-all"
            >
              Request a Custom Quote
            </button>
            <button
              onClick={() => onNavigate('#/contact')}
              className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl text-sm border border-slate-700 transition-all"
            >
              Contact Our Mumbai Office
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
