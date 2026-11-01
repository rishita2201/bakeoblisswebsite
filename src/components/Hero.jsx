import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { BAKERY_CONFIG } from '../data/config';
import { NouveauFloralDivider, NouveauCorner, NouveauVegCameo } from './ArtNouveauDecorations';

export const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-8 pb-20 lg:pt-14 lg:pb-28">
      {/* Subtle Art Nouveau Ambient Radial Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none -z-10">
        <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-rose-200/20 rounded-full blur-3xl opacity-70" />
        <div className="absolute top-20 right-10 w-[450px] h-[450px] bg-gold-200/25 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Brand Copy & Poetic Typography */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            
            {/* Pure Veg Cameo Seal */}
            <div className="flex items-center justify-center lg:justify-start">
              <NouveauVegCameo />
            </div>

            {/* Main Headline with French Belle Époque Flourish */}
            <div className="space-y-2">
              <span className="font-serif italic text-lg sm:text-xl text-gold-700 block tracking-wide">
                L’Art de la Pâtisserie Artisanal
              </span>
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-6xl font-normal text-espresso leading-[1.12]">
                Baked with Devotion, <br />
                <span className="italic font-serif text-[#A8636C] font-normal">
                  Made to Delight.
                </span>
              </h1>
            </div>

            {/* Sinuous Whiplash Divider */}
            <div className="flex justify-center lg:justify-start">
              <NouveauFloralDivider className="w-56 h-6 text-gold-500 my-1" />
            </div>

            {/* Editorial Poetic Description */}
            <p className="text-base sm:text-lg text-espresso/80 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-serif font-light">
              Welcome to <strong className="font-semibold text-espresso">{BAKERY_CONFIG.brandName}</strong>, Chennai’s boutique 100% pure vegetarian home studio in Perambur. Each tiered centerpiece, crinkle-top chocolate brownie, and delicate French macaron is slow-baked from scratch using pure dairy butter, single-origin Belgian cocoa, and natural botanicals.
            </p>

            {/* Call to Actions with Gilded Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                to="/menu"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full gold-button text-gold-100 text-xs font-serif font-bold tracking-widest uppercase transition-all duration-300 group"
              >
                <span>Explore The Menu</span>
                <ArrowRight className="w-3.5 h-3.5 text-gold-300 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/custom-orders"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-parchment-100 hover:bg-gold-100 text-espresso border border-gold-500/60 text-xs font-serif font-bold tracking-widest uppercase transition-all duration-300 shadow-xs"
              >
                <span>Commission Bespoke Cake</span>
              </Link>
            </div>

            {/* Triptych Guarantees with Filigree Borders */}
            <div className="pt-6 border-t border-gold-500/30 grid grid-cols-3 gap-3 max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
              <div className="p-2.5 rounded-xl border border-gold-500/25 bg-white/50">
                <span className="font-serif text-lg sm:text-xl font-bold text-espresso block">100%</span>
                <span className="text-[10px] sm:text-xs text-gold-800 font-serif uppercase tracking-wider block">Pure Veg & Eggless</span>
              </div>
              <div className="p-2.5 rounded-xl border border-gold-500/25 bg-white/50">
                <span className="font-serif text-lg sm:text-xl font-bold text-espresso block">Pure</span>
                <span className="text-[10px] sm:text-xs text-gold-800 font-serif uppercase tracking-wider block">Dairy Butter Only</span>
              </div>
              <div className="p-2.5 rounded-xl border border-gold-500/25 bg-white/50">
                <span className="font-serif text-lg sm:text-xl font-bold text-espresso block">Chennai</span>
                <span className="text-[10px] sm:text-xs text-gold-800 font-serif uppercase tracking-wider block">Perambur Studio</span>
              </div>
            </div>

          </div>

          {/* Right Column: Grand Art Nouveau Archway Cake Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm sm:max-w-md">
              
              {/* Mucha-style Concentric Halo Background Disc */}
              <div className="absolute -inset-6 rounded-full border border-gold-500/25 bg-radial from-gold-100/40 to-transparent -z-20 scale-95" />
              <div className="absolute -inset-10 rounded-full border border-dashed border-gold-500/20 -z-20 scale-90" />

              {/* Decorative Corner Flourishes */}
              <NouveauCorner position="top-left" className="absolute -top-4 -left-4 w-12 h-12 text-gold-500 z-20" />
              <NouveauCorner position="top-right" className="absolute -top-4 -right-4 w-12 h-12 text-gold-500 z-20" />
              <NouveauCorner position="bottom-left" className="absolute -bottom-4 -left-4 w-12 h-12 text-gold-500 z-20" />
              <NouveauCorner position="bottom-right" className="absolute -bottom-4 -right-4 w-12 h-12 text-gold-500 z-20" />

              {/* The Grand Arched Frame */}
              <div className="p-2.5 rounded-[120px_120px_24px_24px] border-2 border-gold-500/60 bg-parchment-50 shadow-nouveau-lg relative overflow-hidden">
                <div className="rounded-[110px_110px_18px_18px] overflow-hidden aspect-[4/5] bg-cream relative">
                  <img
                    src="https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=1000&q=80"
                    alt="Artisanal Handcrafted 100% Pure Veg Raspberry Rose Cake by Bake O Bliss"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Floating Cameo Medallion at Arch Base */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-[#FFFDF9] py-2.5 px-5 rounded-full border border-gold-500 shadow-nouveau flex items-center gap-3 whitespace-nowrap z-20">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 flex-shrink-0 animate-pulse" />
                <span className="font-serif text-xs font-semibold text-espresso tracking-wide">
                  Sanitized 100% Eggless Kitchen
                </span>
                <span className="text-gold-500 font-serif italic text-xs">• Tower 4</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
