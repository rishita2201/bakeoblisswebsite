import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, MessageCircle, MapPin, Clock, Heart, Sparkles, Phone } from 'lucide-react';
import { BAKERY_CONFIG } from '../data/config';
import { createWhatsAppLink } from '../utils/whatsapp';
import { NouveauArchCrest, NouveauFloralDivider } from './ArtNouveauDecorations';

export const Footer = () => {
  return (
    <footer className="bg-[#1F110E] text-[#EFE3D3] pt-16 pb-12 border-t-2 border-gold-500/40 relative overflow-hidden">
      
      {/* Decorative Top Crest */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <NouveauArchCrest className="w-16 h-8 text-gold-400 mx-auto" />
        <NouveauFloralDivider className="w-48 h-5 text-gold-400/80 my-2 mx-auto" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-gold-500/25">
          
          {/* Column 1: Brand & Philosophy */}
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="font-display text-3xl font-bold tracking-wider text-[#FFFDF9]">
                {BAKERY_CONFIG.brandName}
              </span>
              <span className="text-[11px] font-serif uppercase tracking-[0.25em] text-emerald-400 font-bold flex items-center gap-1.5 mt-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                100% Pure Veg & Eggless
              </span>
            </div>
            
            <p className="text-xs sm:text-sm font-serif text-[#FFF5EA] leading-relaxed">
              Chennai's 100% pure vegetarian home bakery in Perambur. Freshly baked cakes, fudgy brownies, and delicious treats made with pure butter and love.
            </p>

            <div className="pt-2 flex items-center space-x-3">
              <a
                href={BAKERY_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/10 hover:bg-gold-500 hover:text-espresso text-gold-300 transition-all duration-200 border border-gold-400/50 shadow-xs"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={createWhatsAppLink(BAKERY_CONFIG.whatsappDefaultGreeting)}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/10 hover:bg-emerald-600 hover:text-white text-gold-300 transition-all duration-200 border border-gold-400/50 shadow-xs"
                aria-label="WhatsApp Bake O Bliss"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-base sm:text-lg font-bold tracking-wider uppercase text-[#FFFDF9] flex items-center gap-2 border-b border-gold-500/40 pb-2.5">
              <span className="text-gold-400">❧</span>
              <span>Quick Links</span>
            </h4>
            <ul className="space-y-3 text-sm font-serif">
              <li>
                <Link to="/menu" className="text-[#FFF5EA] hover:text-gold-300 transition-colors flex items-center gap-2 group">
                  <span className="text-gold-400 text-xs group-hover:translate-x-1 transition-transform">✦</span>
                  <span>Our Menu</span>
                </Link>
              </li>
              <li>
                <Link to="/custom-orders" className="text-[#FFF5EA] hover:text-gold-300 transition-colors flex items-center gap-2 group">
                  <span className="text-gold-400 text-xs group-hover:translate-x-1 transition-transform">✦</span>
                  <span>Custom Cakes</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#FFF5EA] hover:text-gold-300 transition-colors flex items-center gap-2 group">
                  <span className="text-gold-400 text-xs group-hover:translate-x-1 transition-transform">✦</span>
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-[#FFF5EA] hover:text-gold-300 transition-colors flex items-center gap-2 group">
                  <span className="text-gold-400 text-xs group-hover:translate-x-1 transition-transform">✦</span>
                  <span>Shopping Cart</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#FFF5EA] hover:text-gold-300 transition-colors flex items-center gap-2 group">
                  <span className="text-gold-400 text-xs group-hover:translate-x-1 transition-transform">✦</span>
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Studio & Hours */}
          <div className="space-y-4">
            <h4 className="font-serif text-base sm:text-lg font-bold tracking-wider uppercase text-[#FFFDF9] flex items-center gap-2 border-b border-gold-500/40 pb-2.5">
              <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0" />
              <span>Bakery Location</span>
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm font-serif text-[#FFF5EA] leading-relaxed">
              <p className="font-bold text-sm sm:text-base text-gold-200">{BAKERY_CONFIG.location.title}</p>
              <p className="text-xs sm:text-sm text-white/95 leading-normal">{BAKERY_CONFIG.location.address}</p>
              <p className="text-xs sm:text-sm text-white/95">{BAKERY_CONFIG.location.city}, {BAKERY_CONFIG.location.state} – {BAKERY_CONFIG.location.pincode}</p>
              <p className="text-xs text-[#FFDE99] font-medium italic">✦ Landmark: {BAKERY_CONFIG.location.landmark}</p>

              <div className="pt-2.5 flex items-start gap-2 text-xs sm:text-sm border-t border-gold-500/30">
                <Clock className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-bold text-gold-200">{BAKERY_CONFIG.operatingHours.days}</p>
                  <p className="text-white/90">{BAKERY_CONFIG.operatingHours.hours}</p>
                </div>
              </div>

              <div className="pt-1">
                <a
                  href={`tel:${BAKERY_CONFIG.whatsappNumber}`}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-[#FFF9F0] border border-gold-400/50 text-xs font-semibold transition-all shadow-xs"
                  title="Call Bake O Bliss"
                >
                  <Phone className="w-3.5 h-3.5 text-gold-300" />
                  <span>Call: {BAKERY_CONFIG.whatsappDisplayNumber}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Sanctity Guarantee */}
          <div className="space-y-4">
            <h4 className="font-serif text-base sm:text-lg font-bold tracking-wider uppercase text-[#FFFDF9] flex items-center gap-2 border-b border-gold-500/40 pb-2.5">
              <Sparkles className="w-4 h-4 text-gold-400 flex-shrink-0" />
              <span>Sanctity & Service</span>
            </h4>
            <div className="bg-[#2A1612] p-4 sm:p-5 rounded-2xl border-2 border-gold-500/50 text-xs sm:text-sm font-serif text-[#FFF5EA] space-y-2.5 shadow-md">
              <p className="font-bold text-xs sm:text-sm text-gold-200 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-gold-300" />
                <span>Advance Order Notice:</span>
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-white/95 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-gold-400 font-bold">✦</span>
                  <span><strong>Standard bakes:</strong> 24h advance notice</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold-400 font-bold">✦</span>
                  <span><strong>Custom cakes:</strong> 48–72h notice</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold-400 font-bold">✦</span>
                  <span>Pickup at Tower 4 or safe Chennai AC courier delivery</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-serif text-[#FFF5EA] gap-4">
          <p>© {new Date().getFullYear()} {BAKERY_CONFIG.brandName}. 100% Pure Vegetarian & Eggless.</p>
          
          <div className="flex items-center gap-4">
            <Link to="/admin" className="text-[#FFDE99] hover:text-white transition-colors uppercase tracking-widest text-[11px] font-bold underline">
              Owner Portal
            </Link>
            <span>•</span>
            <p className="flex items-center gap-1.5 text-[#FFF5EA]">
              <span>Handcrafted in Perambur, Chennai</span>
              <Heart className="w-3.5 h-3.5 text-[#B06E76] fill-[#B06E76]" />
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};
