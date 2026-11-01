import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Heart, ShieldCheck, Clock } from 'lucide-react';
import { BAKERY_CONFIG } from '../data/config';

export const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24">
      {/* Delicate background ambient glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none -z-10">
        <div className="absolute top-12 left-10 w-72 h-72 bg-blush/50 rounded-full blur-3xl opacity-70" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cream-200/60 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Brand Copy & Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Elegant Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-semibold tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
              <span>100% Pure Vegetarian & Eggless Studio • Chennai</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-chocolate tracking-tight leading-[1.15]">
              Baked with Love, <br className="hidden sm:inline" />
              <span className="text-rose-600 italic font-normal font-serif">Made to Delight.</span>
            </h1>

            {/* Brand Story Snippet */}
            <p className="text-base sm:text-lg text-chocolate/80 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
              Welcome to {BAKERY_CONFIG.brandName}, located in North Town Apartment, Perambur, Chennai. Every cake, crinkle-top brownie, and floral cupcake is 100% pure vegetarian and eggless—small-batch baked from scratch with pure dairy butter, rich Belgian couverture, and honest homemade care.
            </p>

            {/* Call to Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                to="/menu"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-chocolate text-ivory text-sm font-semibold tracking-wide shadow-soft hover:bg-chocolate-600 hover:shadow-soft-lg transition-all duration-300 group"
              >
                <span>Explore Our Menu</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/custom-orders"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-cream hover:bg-blush/60 text-chocolate border border-rose-300/50 text-sm font-semibold tracking-wide transition-all duration-300 shadow-sm"
              >
                <span>Order Custom Cake</span>
              </Link>
            </div>

            {/* Trust Highlights */}
            <div className="pt-6 border-t border-blush/60 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
              <div className="flex flex-col items-center lg:items-start">
                <span className="font-serif text-xl sm:text-2xl font-bold text-chocolate">100%</span>
                <span className="text-xs text-chocolate/70 font-medium">Pure Dairy Butter</span>
              </div>
              <div className="flex flex-col items-center lg:items-start border-x border-blush/80 px-2 sm:px-4">
                <span className="font-serif text-xl sm:text-2xl font-bold text-chocolate">Fresh</span>
                <span className="text-xs text-chocolate/70 font-medium">Baked to Order</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="font-serif text-xl sm:text-2xl font-bold text-chocolate">Custom</span>
                <span className="text-xs text-chocolate/70 font-medium">Personalised Designs</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Frame Behind Image */}
              <div className="absolute -inset-4 bg-blush/40 rounded-3xl transform rotate-2 -z-10 transition-transform group-hover:rotate-3" />
              <div className="absolute -inset-4 border border-rose-300/40 rounded-3xl transform -rotate-2 -z-10" />

              {/* Main Cake Image */}
              <div className="overflow-hidden rounded-2xl shadow-soft-xl aspect-[4/5] bg-cream">
                <img
                  src="https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=1000&q=80"
                  alt="Artisanal Handcrafted Raspberry Rose Cake by Bake O Bliss"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
              </div>

              {/* Floating Floating Pill: Freshly Baked Today */}
              <div className="absolute -bottom-6 -left-4 sm:left-4 bg-ivory/95 backdrop-blur-md p-4 rounded-2xl shadow-soft-lg border border-blush max-w-xs flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blush/70 text-rose-700 flex items-center justify-center flex-shrink-0">
                  <Heart className="w-5 h-5 fill-rose-500 text-rose-500" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-chocolate">Small-Batch Home Studio</p>
                  <p className="text-[11px] text-chocolate/70">Baked fresh with pure love & devotion</p>
                </div>
              </div>

              {/* Floating Star Tag: 5-Star Reviews */}
              <div className="absolute -top-4 -right-4 bg-ivory/95 backdrop-blur-md py-2 px-3.5 rounded-full shadow-soft-lg border border-blush flex items-center gap-1.5 text-xs font-semibold text-chocolate">
                <span className="text-amber-500">★ ★ ★ ★ ★</span>
                <span className="text-[11px] text-chocolate/80">Loved locally</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
