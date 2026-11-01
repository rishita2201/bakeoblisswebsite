import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, MessageCircle, MapPin, Clock, Heart, Sparkles, Mail } from 'lucide-react';
import { BAKERY_CONFIG } from '../data/config';
import { createWhatsAppLink } from '../utils/whatsapp';

export const Footer = () => {
  return (
    <footer className="bg-chocolate text-cream/90 pt-16 pb-10 border-t border-chocolate-600/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-chocolate-400/30">
          
          {/* Column 1: Brand & Philosophy */}
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="font-serif text-3xl font-bold tracking-tight text-ivory">
                {BAKERY_CONFIG.brandName}
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-emerald-300 font-semibold flex items-center gap-1.5 mt-0.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                100% Pure Veg & Eggless
              </span>
            </div>
            
            <p className="text-sm text-cream/75 leading-relaxed">
              Chennai's premier 100% eggless artisanal home bakery. Baked with pure dairy butter, couverture Belgian chocolate, and zero gelatin or animal fat in our strictly vegetarian studio.
            </p>

            <div className="pt-2 flex items-center space-x-3">
              <a
                href={BAKERY_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-chocolate-400/30 text-rose-300 hover:bg-rose-500 hover:text-white transition-all duration-200"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={createWhatsAppLink(BAKERY_CONFIG.whatsappDefaultGreeting)}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-chocolate-400/30 text-rose-300 hover:bg-[#25D366] hover:text-white transition-all duration-200"
                aria-label="Message on WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-ivory flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-rose-300" />
              <span>Explore</span>
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/menu" className="hover:text-rose-300 transition-colors">
                  Full Menu & Catalogue
                </Link>
              </li>
              <li>
                <Link to="/custom-orders" className="hover:text-rose-300 transition-colors">
                  Custom & Celebration Cakes
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-rose-300 transition-colors">
                  Our Baking Philosophy
                </Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-rose-300 transition-colors">
                  Review Shopping Basket
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-rose-300 transition-colors">
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Studio Operations & Pickup */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-ivory flex items-center gap-2">
              <MapPin className="w-4 h-4 text-rose-300" />
              <span>Studio & Hours</span>
            </h4>
            <div className="space-y-3 text-sm text-cream/80">
              <div>
                <p className="font-medium text-ivory">{BAKERY_CONFIG.location.title}</p>
                <p className="text-xs text-cream/70 leading-relaxed mt-0.5">
                  {BAKERY_CONFIG.location.address}, {BAKERY_CONFIG.location.city}
                </p>
                <p className="text-[11px] text-rose-300 mt-1 italic">
                  *{BAKERY_CONFIG.location.landmark}
                </p>
              </div>

              <div className="pt-1 flex items-start gap-2">
                <Clock className="w-4 h-4 text-rose-300 flex-shrink-0 mt-0.5" />
                <div className="text-xs">
                  <p className="font-medium text-ivory">{BAKERY_CONFIG.operatingHours.days}</p>
                  <p className="text-cream/70">{BAKERY_CONFIG.operatingHours.hours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Ordering Transparency */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-ivory flex items-center gap-2">
              <Heart className="w-4 h-4 text-rose-300" />
              <span>How We Work</span>
            </h4>
            <p className="text-xs text-cream/75 leading-relaxed">
              Every bake is crafted on order to ensure absolute freshness.
            </p>
            <div className="bg-chocolate-400/25 p-3.5 rounded-xl border border-rose-300/20 text-xs text-cream/85 space-y-1.5">
              <p className="font-semibold text-rose-300">Notice Guidelines:</p>
              <p>• Standard bakes: 24h notice</p>
              <p>• Custom tiered cakes: 48–72h notice</p>
              <p>• Orders confirmed directly via WhatsApp</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-cream/60 gap-4">
          <p>© {new Date().getFullYear()} {BAKERY_CONFIG.brandName}. 100% Pure Vegetarian & Eggless.</p>
          <div className="flex items-center gap-4">
            <Link to="/admin" className="text-cream/50 hover:text-rose-300 transition-colors flex items-center gap-1">
              <span>Owner Portal</span>
            </Link>
            <span>•</span>
            <p className="flex items-center gap-1.5">
              <span>Handcrafted with</span>
              <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
              <span>in Perambur, Chennai</span>
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};
