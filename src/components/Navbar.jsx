import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, MessageCircle, Phone } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { BAKERY_CONFIG } from '../data/config';
import { createWhatsAppLink } from '../utils/whatsapp';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { totalItemsCount } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Menu', path: '/menu' },
    { name: 'Custom Cakes', path: '/custom-orders' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <>
      {/* Top Gilded Announcement Ribbon */}
      <div className="bg-[#23120E] text-[#EEDDB8] text-[11px] sm:text-xs py-2 px-4 text-center font-serif tracking-widest uppercase border-b border-gold-600/40 flex items-center justify-center gap-2 sm:gap-4">
        <span className="text-gold-400">❧</span>
        <span className="font-semibold text-gold-300">100% Pure Vegetarian & Eggless Home Bakery</span>
        <span className="hidden md:inline text-gold-500/70">• North Town Apartment, Perambur, Chennai</span>
        <span className="hidden sm:inline text-gold-500/70">• Freshly Baked to Order</span>
        <span className="text-gold-400">❧</span>
      </div>

      {/* Main Navigation Bar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF5EE]/95 backdrop-blur-md shadow-nouveau border-b border-gold-500/35 py-3'
            : 'bg-[#FAF5EE] py-4 border-b border-gold-500/25'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Mobile Hamburger Toggle */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-espresso hover:bg-gold-100 transition-colors focus:outline-none"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Art Nouveau Brand Logo */}
            <Link to="/" className="flex flex-col items-center group text-center">
              <span className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wider text-espresso group-hover:text-gold-700 transition-colors leading-none">
                {BAKERY_CONFIG.brandName}
              </span>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="w-3 h-[1px] bg-gold-500/60" />
                <span className="text-[10px] tracking-[0.3em] uppercase text-gold-700 font-serif font-semibold">
                  Pure Vegetarian Home Bakery
                </span>
                <span className="w-3 h-[1px] bg-gold-500/60" />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-9">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `font-serif text-sm tracking-widest uppercase transition-all duration-200 relative py-1 ${
                      isActive
                        ? 'text-gold-700 font-bold after:content-[""] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-5 after:h-[1.5px] after:bg-gold-500'
                        : 'text-espresso/80 hover:text-gold-700'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Right Actions: WhatsApp & Basket Medallion */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              
              {/* WhatsApp direct consultation button */}
              <a
                href={createWhatsAppLink(BAKERY_CONFIG.whatsappDefaultGreeting)}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-serif font-bold tracking-wider text-espresso bg-white hover:bg-gold-50 transition-all border-2 border-gold-600/70 shadow-xs"
                title="Direct Consultation on WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-700" />
                <span>Order via WhatsApp</span>
              </a>

              {/* Gilded Cameo Shopping Cart */}
              <Link
                to="/cart"
                className="relative p-2.5 rounded-full bg-parchment-100 hover:bg-gold-200/60 text-espresso transition-all duration-200 flex items-center justify-center border border-gold-500/50 group shadow-xs"
                aria-label={`Shopping Basket with ${totalItemsCount} items`}
              >
                <ShoppingBag className="w-5 h-5 text-espresso group-hover:text-gold-700 transition-colors" />
                {totalItemsCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-[#8E4D55] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-xs border border-parchment-50 animate-scaleIn">
                    {totalItemsCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full inset-x-0 bg-[#FAF5EE] border-b border-gold-500/40 shadow-2xl z-50 animate-fadeIn p-6 space-y-4 max-h-[calc(100vh-100px)] overflow-y-auto">
            <div className="divide-y divide-gold-500/20">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block py-3 font-serif text-base tracking-wider uppercase transition-colors ${
                      isActive
                        ? 'text-gold-700 font-bold pl-2 border-l-2 border-gold-500'
                        : 'text-espresso hover:text-gold-700'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            <div className="pt-2 space-y-2.5">
              <a
                href={createWhatsAppLink(BAKERY_CONFIG.whatsappDefaultGreeting)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl gold-button text-espresso text-xs font-serif font-bold tracking-widest uppercase transition-colors shadow-md"
              >
                <MessageCircle className="w-4 h-4 text-espresso fill-current" />
                <span>WhatsApp Us ({BAKERY_CONFIG.whatsappDisplayNumber})</span>
              </a>

              <a
                href={`tel:${BAKERY_CONFIG.whatsappNumber}`}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white text-espresso text-xs font-serif font-bold tracking-widest uppercase hover:bg-gold-50 transition-colors border-2 border-gold-600 shadow-xs"
              >
                <Phone className="w-3.5 h-3.5 text-gold-700" />
                <span>Call Directly ({BAKERY_CONFIG.whatsappDisplayNumber})</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
