import React, { useState } from 'react';
import WhatsAppIcon from '../components/common/WhatsAppIcon';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Building2,
  ExternalLink
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Packaging Box Inquiry',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsApp = () => {
    const text = `*New Contact Message - Falah Enterprise*\n\n` +
      `*Name:* ${formData.name || 'N/A'}\n` +
      `*Phone:* ${formData.phone || 'N/A'}\n` +
      `*Email:* ${formData.email || 'N/A'}\n` +
      `*Subject:* ${formData.subject}\n` +
      `*Message:* ${formData.message}\n`;

    const url = `https://wa.me/919004116634?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="space-y-16 pb-20">
      {/* PAGE HEADER */}
      <section className="bg-slate-900 text-white py-16 lg:py-20 border-b border-slate-800 relative hero-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 bg-brand-500/10 border border-brand-400/30 text-brand-300 text-xs font-semibold px-3 py-1.5 rounded-full">
              <Phone className="w-3.5 h-3.5" />
              <span>Direct Communication Channel</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Keep in Touch With <span className="text-brand-400">Falah Enterprise</span>
            </h1>
            <p className="text-slate-300 text-base leading-relaxed">
              We specialize in premium packaging solutions and institutional hotel/hospital supplies. Visit our Dahisar office, call us directly, or send an inquiry below.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT INFO CARDS & FORM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Head Office & Factory</h2>
              <p className="text-xs text-slate-500 mt-1">Get in touch with our Mumbai packaging consultation desk.</p>
            </div>

            <div className="space-y-4">
              {/* Phone card */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-start space-x-4">
                <div className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-semibold text-slate-400 uppercase">Telephone / Mobile</div>
                  <a href={`tel:${siteConfig.phoneRaw}`} className="text-base font-bold text-slate-900 hover:text-brand-600 transition-colors block">
                    {siteConfig.phone}
                  </a>
                  <p className="text-[11px] text-slate-500">Available Monday through Saturday, 9:30 AM – 7:30 PM</p>
                </div>
              </div>

              {/* Email card */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-start space-x-4">
                <div className="w-11 h-11 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-semibold text-slate-400 uppercase">Email Inquiries</div>
                  <a href={`mailto:${siteConfig.email}`} className="text-base font-bold text-slate-900 hover:text-brand-600 transition-colors block">
                    {siteConfig.email}
                  </a>
                  <p className="text-[11px] text-slate-500">For RFQ drawings, artwork approvals, and tenders.</p>
                </div>
              </div>

              {/* Address card */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-start space-x-4">
                <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-semibold text-slate-400 uppercase">Registered Address & Unit</div>
                  <p className="text-sm font-semibold text-slate-900 leading-snug">
                    {siteConfig.address}
                  </p>
                  <p className="text-[11px] text-slate-500 font-medium text-amber-600">
                    Landmark: Near NL Complex & Anand Nagar Metro Station
                  </p>
                </div>
              </div>

              {/* WhatsApp direct banner */}
              <div className="bg-emerald-50 border border-emerald-200 p-5 rounded-2xl space-y-3">
                <div className="flex items-center space-x-2 text-emerald-900 font-bold text-sm">
                  <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
                  <span>Prefer Instant Chat on WhatsApp?</span>
                </div>
                <p className="text-xs text-emerald-800 leading-relaxed">
                  Connect immediately with our product team for fast photos, box samples, and quotes directly on your phone.
                </p>
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-lg text-xs font-semibold shadow-xs transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Open WhatsApp Chat</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900">Send Us a Direct Message</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Fill in your details and requirement details. Our team responds promptly within business hours.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4 bg-emerald-50/50 rounded-xl p-6 border border-emerald-100">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">Message Successfully Sent!</h4>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto">
                    Thank you, {formData.name}. We have logged your inquiry and will call or email you at {formData.phone || formData.email}.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-bold text-brand-600 hover:text-brand-700 underline"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Contact Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="e.g. 9004116634"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Inquiry Topic / Division *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white"
                      >
                        <option value="Packaging Box Inquiry">Packaging Box Inquiry (Corrugated/Cartons)</option>
                        <option value="Hotels & Hospitals Supplies">Hotels & Hospitals Supplies</option>
                        <option value="Sample Prototyping Request">Sample Prototyping Request</option>
                        <option value="Dealership & Bulk Contract">Dealership & Bulk Contract</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Message / Specifications *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      placeholder="Please mention your required sizes, quantity, delivery location, or any questions..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                    ></textarea>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="flex-1 py-3 px-5 bg-brand-600 hover:bg-brand-700 active:scale-98 text-white rounded-xl font-bold text-sm shadow-md shadow-brand-600/20 transition-all flex items-center justify-center space-x-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiries</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleWhatsApp}
                      className="py-3 px-5 bg-[#25D366] hover:bg-[#20ba59] active:scale-98 text-white rounded-xl font-bold text-sm shadow-md shadow-[#25D366]/20 transition-all flex items-center justify-center space-x-2"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                      <span>Send Directly to WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE MAP LOCATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
          <div className="p-4 sm:p-6 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <div>
              <h3 className="font-bold text-slate-900 text-base">Office & Manufacturing Location</h3>
              <p className="text-xs text-slate-500">Shop no.6, Eklavya Building, Near NL Complex, Dahisar East, Mumbai</p>
            </div>
            <a
              href="https://maps.google.com/?q=Dahisar+East+Anand+Nagar+Metro+Station+Mumbai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-brand-600 hover:text-brand-700 flex items-center space-x-1"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
          <div className="h-80 w-full bg-slate-100">
            <iframe
              title="Falah Enterprise Location"
              src="https://maps.google.com/maps?q=Shop%20no.6,%20Eklavya%20Building,%20near%20NL%20complex,%20Dahisar,%20East%20Anand%20Nagar%20Metro%20Station%20Mumbai&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
