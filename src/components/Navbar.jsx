import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Sparkles, MessageCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { BAKERY_CONFIG } from '../data/config';
import { createWhatsAppLink } from '../utils/whatsapp';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { totalItemsCount } = useCart();
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Menu', path: '/menu' },
    { name: 'Custom Cakes', path: '/custom-orders' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-chocolate text-ivory text-xs py-2 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-rose-300 animate-pulse" />
        <span>Freshly baked from our boutique studio • Orders placed 24–48h in advance</span>
        <Sparkles className="w-3.5 h-3.5 text-rose-300 animate-pulse hidden sm:inline" />
      </div>

      {/* Main Navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-ivory/95 backdrop-blur-md shadow-soft border-b border-blush/40 py-3'
            : 'bg-ivory py-4 border-b border-blush/20'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Mobile Hamburger Button */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-chocolate hover:bg-blush/40 transition-colors focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Brand Logo & Name */}
            <Link to="/" className="flex flex-col items-center group">
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-chocolate group-hover:text-rose-600 transition-colors">
                {BAKERY_CONFIG.brandName}
              </span>
              <span className="text-[10px] tracking-[0.25em] uppercase text-rose-500 font-medium">
                Artisanal Home Bakery
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-sm tracking-wide font-medium transition-all duration-200 relative py-1 hover:text-rose-600 ${
                      isActive
                        ? 'text-rose-600 font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-rose-500 after:rounded-full'
                        : 'text-chocolate/85 hover:text-rose-600'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Action Buttons: Cart & WhatsApp */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              {/* WhatsApp direct chat link */}
              <a
                href={createWhatsAppLink(BAKERY_CONFIG.whatsappDefaultGreeting)}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-chocolate bg-blush/60 hover:bg-blush transition-colors border border-rose-300/40"
                title="Chat with Baker on WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5 text-rose-600" />
                <span>Chat with Baker</span>
              </a>

              {/* Shopping Cart Icon with Badge */}
              <Link
                to="/cart"
                className="relative p-2.5 rounded-full bg-cream hover:bg-blush/60 text-chocolate transition-all duration-200 flex items-center justify-center group"
                aria-label={`Shopping Basket with ${totalItemsCount} items`}
              >
                <ShoppingBag className="w-5 h-5 text-chocolate group-hover:text-rose-600 transition-colors" />
                {totalItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-sm animate-scaleIn">
                    {totalItemsCount > 99 ? '99+' : totalItemsCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[102px] bg-ivory border-b border-blush shadow-lg z-50 animate-fadeIn">
            <div className="px-5 pt-3 pb-6 space-y-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-2.5 rounded-xl text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-blush/60 text-rose-700 font-semibold'
                        : 'text-chocolate hover:bg-cream'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              <div className="pt-4 border-t border-blush/50 flex flex-col gap-2.5">
                <a
                  href={createWhatsAppLink(BAKERY_CONFIG.whatsappDefaultGreeting)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-chocolate text-ivory text-sm font-medium hover:bg-chocolate-600 transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 text-rose-300" />
                  <span>WhatsApp Inquiry ({BAKERY_CONFIG.whatsappDisplayNumber})</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
