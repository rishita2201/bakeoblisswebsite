import React, { useState } from 'react';
import { 
  Instagram, MessageCircle, MapPin, Clock, Mail, 
  Send, CheckCircle2, ExternalLink, Phone 
} from 'lucide-react';
import { BAKERY_CONFIG } from '../data/config';
import { createWhatsAppLink } from '../utils/whatsapp';
import { createMessage } from '../services/api';
import { NouveauFloralDivider, NouveauArchCrest, NouveauCorner } from '../components/ArtNouveauDecorations';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    messageType: 'General Inquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.message.trim()) return;

    createMessage(formData).catch((err) => console.warn('Message save notice:', err));

    const msgText = `👋 *HELLO BAKE O BLISS!*\n\n` +
      `• Name: ${formData.name}\n` +
      `• Topic: ${formData.messageType}\n` +
      (formData.phone ? `• Phone: ${formData.phone}\n` : '') +
      (formData.email ? `• Email: ${formData.email}\n` : '') +
      `\n*Message:*\n"${formData.message}"\n\n` +
      `_Sent from Bake O Bliss Chennai Contact Page_`;

    const whatsappUrl = createWhatsAppLink(msgText);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <div className="py-10 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header Cartouche */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <NouveauArchCrest className="w-16 h-8 text-gold-500 mx-auto" />
        <span className="text-xs uppercase font-serif tracking-[0.3em] text-gold-700 font-bold block">
          Contact Us
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-espresso">
          Get in Touch
        </h1>
        <NouveauFloralDivider className="w-56 h-6 text-gold-500 my-2 mx-auto" />
        <p className="text-sm sm:text-base font-serif text-espresso/80 leading-relaxed font-light">
          Have a question about cake sizing, flavours, or custom orders? Connect directly with our friendly home bakery in Perambur, Chennai.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
        
        {/* Left Column: Direct Info Cards */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* WhatsApp Card */}
          <div className="bg-white rounded-[32px] p-6 border border-gold-500/40 shadow-nouveau space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-400 flex items-center justify-center">
              <MessageCircle className="w-6 h-6 fill-current" />
            </div>
            <div>
              <span className="text-[10px] font-serif font-bold uppercase tracking-wider text-gold-700">
                Direct WhatsApp Chat
              </span>
              <h3 className="font-serif text-xl font-bold text-espresso">
                WhatsApp Order Line
              </h3>
              <p className="text-xs font-serif text-espresso/70 mt-1">
                The fastest way to reach our baker for quick questions, scheduling, and custom cake photos.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
              <a
                href={createWhatsAppLink(BAKERY_CONFIG.whatsappDefaultGreeting)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-serif font-bold tracking-wider uppercase shadow-xs transition-colors"
              >
                <span>WhatsApp ({BAKERY_CONFIG.whatsappDisplayNumber})</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href={`tel:${BAKERY_CONFIG.whatsappNumber}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-parchment-100 hover:bg-gold-100 text-espresso text-xs font-serif font-bold tracking-wider uppercase border border-gold-500/50 shadow-xs transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-gold-700" />
                <span>Call ({BAKERY_CONFIG.whatsappDisplayNumber})</span>
              </a>
            </div>
          </div>

          {/* Instagram Card */}
          <div className="bg-white rounded-[32px] p-6 border border-gold-500/40 shadow-nouveau space-y-4">
            <div className="w-12 h-12 rounded-full bg-parchment-100 text-gold-700 border border-gold-500 flex items-center justify-center">
              <Instagram className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-serif font-bold uppercase tracking-wider text-gold-700">
                Instagram Page
              </span>
              <h3 className="font-serif text-xl font-bold text-espresso">
                Follow {BAKERY_CONFIG.instagramHandle}
              </h3>
              <p className="text-xs font-serif text-espresso/70 mt-1">
                Explore our recent bakes, behind-the-scenes videos, and customer celebration photos.
              </p>
            </div>
            <a
              href={BAKERY_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-espresso text-gold-200 hover:bg-espresso-800 text-xs font-serif font-bold tracking-wider uppercase border border-gold-500/50 transition-colors shadow-xs"
            >
              <span>Visit Our Instagram</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Studio Location & Hours */}
          <div className="bg-parchment-100/90 rounded-[32px] p-6 border border-gold-500/40 space-y-4 text-xs font-serif text-espresso/80 shadow-xs">
            <div className="space-y-1">
              <div className="flex items-center gap-2 font-bold text-espresso text-sm">
                <MapPin className="w-4 h-4 text-gold-600" />
                <span>Home Bakery Location</span>
              </div>
              <p className="font-bold text-espresso">{BAKERY_CONFIG.location.title}</p>
              <p>{BAKERY_CONFIG.location.address}</p>
              <p>{BAKERY_CONFIG.location.city}, {BAKERY_CONFIG.location.state} – {BAKERY_CONFIG.location.pincode}</p>
              <p className="text-[11px] text-gold-700 italic">*{BAKERY_CONFIG.location.landmark}</p>
            </div>

            <div className="pt-3 border-t border-gold-500/25 space-y-1">
              <div className="flex items-center gap-2 font-bold text-espresso text-sm">
                <Clock className="w-4 h-4 text-gold-600" />
                <span>Baking & Pickup Hours</span>
              </div>
              <p className="font-bold text-espresso">{BAKERY_CONFIG.operatingHours.days}</p>
              <p>{BAKERY_CONFIG.operatingHours.hours}</p>
              <p className="text-[11px] text-espresso/60 mt-1">
                {BAKERY_CONFIG.operatingHours.leadTimeNotice}
              </p>
            </div>
          </div>

        </div>

        {/* Right Column: Contact Inquiry Form */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-[40px] p-6 sm:p-10 border border-gold-500 shadow-nouveau space-y-6 relative">
            <NouveauCorner position="top-left" className="absolute top-4 left-4 w-10 h-10 text-gold-400" />
            <NouveauCorner position="top-right" className="absolute top-4 right-4 w-10 h-10 text-gold-400" />
            
            <div className="border-b border-gold-500/25 pb-4">
              <h2 className="font-serif text-2xl font-normal text-espresso">
                Send a Message to our Studio
              </h2>
              <p className="text-xs font-serif text-espresso/70 mt-1 italic">
                Your message is stored in our bakery database and forwarded to WhatsApp for rapid coordination.
              </p>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4 bg-parchment-50 rounded-2xl border border-gold-500/40 p-6">
                <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-espresso">Message Dispatched!</h3>
                <p className="text-xs font-serif text-espresso/70 max-w-sm mx-auto">
                  Your message has been logged in our system and sent via WhatsApp. We will reply promptly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full gold-button text-gold-100 text-xs font-serif uppercase tracking-wider font-bold"
                >
                  Send Another Note
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 font-serif">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-espresso mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Maya Iyer"
                      className="w-full px-4 py-3 rounded-xl bg-parchment-50 border border-gold-500/40 text-sm text-espresso outline-none focus:border-gold-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-espresso mb-1.5">
                      WhatsApp Contact Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 98415 11011"
                      className="w-full px-4 py-3 rounded-xl bg-parchment-50 border border-gold-500/40 text-sm text-espresso outline-none focus:border-gold-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-espresso mb-1.5">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. maya@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-parchment-50 border border-gold-500/40 text-sm text-espresso outline-none focus:border-gold-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-espresso mb-1.5">
                      Inquiry Topic
                    </label>
                    <select
                      value={formData.messageType}
                      onChange={(e) => setFormData({ ...formData, messageType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-parchment-50 border border-gold-500/40 text-sm text-espresso outline-none focus:border-gold-600 cursor-pointer"
                    >
                      <option value="General Inquiry">General Question</option>
                      <option value="Custom Cake Consultation">Custom Cake Consultation</option>
                      <option value="Party & Hamper Gifting">Party Gifting & Hampers</option>
                      <option value="Dietary Questions">Dietary & Pure Veg Inquiries</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-espresso mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us what you envision for your sweet celebration..."
                    className="w-full px-4 py-3 rounded-xl bg-parchment-50 border border-gold-500/40 text-sm text-espresso outline-none focus:border-gold-600"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full gold-button text-gold-100 text-xs font-serif font-bold tracking-widest uppercase transition-all shadow-nouveau flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-gold-300" />
                  <span>Transmit Message via WhatsApp</span>
                </button>

              </form>
            )}

          </div>
        </div>

      </div>

    </div>
  );
};
