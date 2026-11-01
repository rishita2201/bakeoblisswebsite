import React, { useState } from 'react';
import { 
  Instagram, MessageCircle, MapPin, Clock, Mail, 
  Send, Sparkles, CheckCircle2, Phone, ExternalLink 
} from 'lucide-react';
import { BAKERY_CONFIG } from '../data/config';
import { createWhatsAppLink } from '../utils/whatsapp';
import { createMessage } from '../services/api';

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

    // Save message to DB
    createMessage(formData).catch((err) => console.warn('Message save notice:', err));

    // Generate WhatsApp quick message from contact form
    const msgText = `👋 *HELLO BAKE O BLISS!*\n\n` +
      `• Name: ${formData.name}\n` +
      `• Topic: ${formData.messageType}\n` +
      (formData.phone ? `• Phone: ${formData.phone}\n` : '') +
      (formData.email ? `• Email: ${formData.email}\n` : '') +
      `\n*Message:*\n"${formData.message}"\n\n` +
      `_Sent from Bake O Bliss Contact Page_`;

    const whatsappUrl = createWhatsAppLink(msgText);
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <div className="py-10 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blush/60 text-rose-700 text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>We'd Love to Hear From You</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-chocolate">
          Get in Touch
        </h1>
        <p className="text-sm sm:text-base text-chocolate/75 leading-relaxed font-light">
          Have a question about our menu, need guidance on cake sizing, or want to discuss a customized order? Connect directly with our home studio.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
        
        {/* Left Column: Direct Info Cards */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* WhatsApp Card */}
          <div className="bg-white rounded-3xl p-6 border border-blush/80 shadow-soft space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center">
              <MessageCircle className="w-6 h-6 fill-current" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-rose-500">
                Direct Messaging
              </span>
              <h3 className="font-serif text-xl font-bold text-chocolate">
                WhatsApp Order Line
              </h3>
              <p className="text-xs text-chocolate/70 mt-1">
                The fastest way to reach our baker for quick answers, order coordination, and photo sharing.
              </p>
            </div>
            <a
              href={createWhatsAppLink(BAKERY_CONFIG.whatsappDefaultGreeting)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#1ebc59] text-white text-xs font-semibold shadow-xs transition-colors"
            >
              <span>Chat on WhatsApp ({BAKERY_CONFIG.whatsappDisplayNumber})</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Instagram Card */}
          <div className="bg-white rounded-3xl p-6 border border-blush/80 shadow-soft space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center">
              <Instagram className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-rose-500">
                Social Portfolio
              </span>
              <h3 className="font-serif text-xl font-bold text-chocolate">
                Follow @bakeobliss
              </h3>
              <p className="text-xs text-chocolate/70 mt-1">
                Explore our daily baking stories, customer reels, behind-the-scenes, and seasonal menus.
              </p>
            </div>
            <a
              href={BAKERY_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-chocolate text-ivory hover:bg-chocolate-600 text-xs font-semibold shadow-xs transition-colors"
            >
              <span>Visit Instagram Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Studio Location & Hours */}
          <div className="bg-cream/70 rounded-3xl p-6 border border-blush space-y-4 text-xs text-chocolate/80">
            <div className="space-y-1">
              <div className="flex items-center gap-2 font-bold text-chocolate text-sm">
                <MapPin className="w-4 h-4 text-rose-500" />
                <span>Boutique Studio Location</span>
              </div>
              <p>{BAKERY_CONFIG.location.title}</p>
              <p>{BAKERY_CONFIG.location.address}</p>
              <p>{BAKERY_CONFIG.location.city}, {BAKERY_CONFIG.location.country}</p>
              <p className="text-[11px] text-rose-600 italic">*{BAKERY_CONFIG.location.landmark}</p>
            </div>

            <div className="pt-3 border-t border-blush/70 space-y-1">
              <div className="flex items-center gap-2 font-bold text-chocolate text-sm">
                <Clock className="w-4 h-4 text-rose-500" />
                <span>Baking & Pickup Hours</span>
              </div>
              <p className="font-semibold text-chocolate">{BAKERY_CONFIG.operatingHours.days}</p>
              <p>{BAKERY_CONFIG.operatingHours.hours}</p>
              <p className="text-[11px] text-chocolate/60 mt-1">
                {BAKERY_CONFIG.operatingHours.leadTimeNotice}
              </p>
            </div>
          </div>

        </div>

        {/* Right Column: Contact Inquiry Form */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-blush shadow-soft space-y-6">
            
            <div className="border-b border-blush/60 pb-4">
              <h2 className="font-serif text-2xl font-bold text-chocolate">
                Send Us a Message
              </h2>
              <p className="text-xs text-chocolate/70 mt-1">
                Fill out the form below to initiate an inquiry. Your message will be formatted and sent via WhatsApp to our baker.
              </p>
            </div>

            {submitted ? (
              <div className="py-10 text-center space-y-4 bg-cream/50 rounded-2xl border border-blush p-6">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-chocolate">Message Prepared!</h3>
                <p className="text-xs text-chocolate/70 max-w-sm mx-auto">
                  Your message has been transferred to WhatsApp. If the app did not open, you can send another note below.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2 rounded-full bg-chocolate text-ivory text-xs font-semibold"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-chocolate/80 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Maya Iyer"
                      className="w-full px-4 py-3 rounded-xl bg-ivory border border-blush text-sm text-chocolate outline-none focus:border-rose-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-chocolate/80 mb-1.5">
                      Contact WhatsApp / Phone
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl bg-ivory border border-blush text-sm text-chocolate outline-none focus:border-rose-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-chocolate/80 mb-1.5">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. maya@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-ivory border border-blush text-sm text-chocolate outline-none focus:border-rose-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-chocolate/80 mb-1.5">
                      Inquiry Subject
                    </label>
                    <select
                      value={formData.messageType}
                      onChange={(e) => setFormData({ ...formData, messageType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-ivory border border-blush text-sm text-chocolate outline-none focus:border-rose-400 cursor-pointer"
                    >
                      <option value="General Inquiry">General Question</option>
                      <option value="Custom Cake Consultation">Custom Cake Consultation</option>
                      <option value="Bulk / Party Gifting">Bulk / Party Gifting (Brownies & Hampers)</option>
                      <option value="Dietary / Allergen Questions">Dietary / Allergen Questions</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-chocolate/80 mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us what's on your mind..."
                    className="w-full px-4 py-3 rounded-xl bg-ivory border border-blush text-sm text-chocolate outline-none focus:border-rose-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-chocolate hover:bg-chocolate-600 text-ivory text-sm font-semibold tracking-wide transition-all shadow-soft flex items-center justify-center gap-2 group"
                >
                  <Send className="w-4 h-4 text-rose-300 group-hover:translate-x-1 transition-transform" />
                  <span>Send Message via WhatsApp</span>
                </button>

                <p className="text-[11px] text-center text-chocolate/50">
                  Submitting opens a WhatsApp chat pre-filled with your message. We respond within normal operating hours.
                </p>

              </form>
            )}

          </div>
        </div>

      </div>

    </div>
  );
};
