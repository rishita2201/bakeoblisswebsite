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
              <span className="font-display text-3xl font-bold tracking-wider text-gold-200">
                {BAKERY_CONFIG.brandName}
              </span>
              <span className="text-[11px] font-serif uppercase tracking-[0.25em] text-emerald-300 font-semibold flex items-center gap-1.5 mt-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                100% Pure Veg & Eggless
              </span>
            </div>
            
            <p className="text-xs sm:text-sm font-serif text-[#EFE3D3]/75 leading-relaxed font-light">
              Chennai's 100% pure vegetarian home bakery in Perambur. Freshly baked cakes, fudgy brownies, and delicious treats made with pure butter and love.
            </p>

            <div className="pt-2 flex items-center space-x-3">
              <a
                href={BAKERY_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#2D1A16] text-gold-300 hover:bg-gold-500 hover:text-espresso transition-all duration-200 border border-gold-500/40"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={createWhatsAppLink(BAKERY_CONFIG.whatsappDefaultGreeting)}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#2D1A16] text-gold-300 hover:bg-emerald-600 hover:text-white transition-all duration-200 border border-gold-500/40"
                aria-label="WhatsApp Bake O Bliss"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-base font-bold tracking-wider uppercase text-gold-300 flex items-center gap-2">
              <span>❧ Quick Links</span>
            </h4>
            <ul className="space-y-2.5 text-xs font-serif tracking-wide text-[#EFE3D3]/85">
              <li>
                <Link to="/menu" className="hover:text-gold-300 transition-colors">
                  Our Menu
                </Link>
              </li>
              <li>
                <Link to="/custom-orders" className="hover:text-gold-300 transition-colors">
                  Custom Cakes
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gold-300 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-gold-300 transition-colors">
                  Shopping Cart
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gold-300 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Studio & Hours */}
          <div className="space-y-4">
            <h4 className="font-serif text-base font-bold tracking-wider uppercase text-gold-300 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gold-400" />
              <span>Bakery Location</span>
            </h4>
            <div className="space-y-2.5 text-xs font-serif text-[#EFE3D3]/80 leading-relaxed">
              <p className="font-bold text-gold-200">{BAKERY_CONFIG.location.title}</p>
              <p className="text-[11px] text-[#EFE3D3]/70">{BAKERY_CONFIG.location.address}</p>
              <p>{BAKERY_CONFIG.location.city}, {BAKERY_CONFIG.location.state} – {BAKERY_CONFIG.location.pincode}</p>
              <p className="text-[10px] text-gold-400 italic">*{BAKERY_CONFIG.location.landmark}</p>

              <div className="pt-2 flex items-start gap-2 text-[11px] border-t border-gold-500/20">
                <Clock className="w-3.5 h-3.5 text-gold-400 mt-0.5" />
                <div>
                  <p className="font-bold text-gold-200">{BAKERY_CONFIG.operatingHours.days}</p>
                  <p>{BAKERY_CONFIG.operatingHours.hours}</p>
                </div>
              </div>

              <a
                href={`tel:${BAKERY_CONFIG.whatsappNumber}`}
                className="pt-1 flex items-center gap-2 text-xs text-gold-300 hover:text-white transition-colors"
                title="Call Bake O Bliss"
              >
                <Phone className="w-3.5 h-3.5 text-gold-400" />
                <span className="font-semibold">{BAKERY_CONFIG.whatsappDisplayNumber}</span>
              </a>
            </div>
          </div>

          {/* Column 4: Sanctity Guarantee */}
          <div className="space-y-4">
            <h4 className="font-serif text-base font-bold tracking-wider uppercase text-gold-300 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span>Sanctity & Service</span>
            </h4>
            <div className="bg-[#2D1A16] p-4 rounded-2xl border border-gold-500/30 text-xs font-serif text-[#EFE3D3]/80 space-y-1.5">
              <p className="font-bold text-gold-300">Advance Notice Guidelines:</p>
              <p>• Standard bakes: 24h advance</p>
              <p>• Custom celebration cakes: 48–72h</p>
              <p>• Self-pickup at Tower 4 or Chennai delivery via AC courier</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-serif text-[#EFE3D3]/60 gap-4">
          <p>© {new Date().getFullYear()} {BAKERY_CONFIG.brandName}. 100% Pure Vegetarian & Eggless.</p>
          
          <div className="flex items-center gap-4">
            <Link to="/admin" className="text-gold-400 hover:text-gold-200 transition-colors uppercase tracking-widest text-[11px] font-bold">
              Owner Portal
            </Link>
            <span>•</span>
            <p className="flex items-center gap-1.5">
              <span>Handcrafted in Perambur, Chennai</span>
              <Heart className="w-3.5 h-3.5 text-[#B06E76] fill-[#B06E76]" />
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};
