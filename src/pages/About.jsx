import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { BAKERY_CONFIG } from '../data/config';
import { NouveauFloralDivider, NouveauArchCrest, NouveauCorner } from '../components/ArtNouveauDecorations';

export const About = () => {
  return (
    <div className="py-10 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28">
      
      {/* 1. Page Header Cartouche */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <NouveauArchCrest className="w-16 h-8 text-gold-500 mx-auto" />
        <span className="text-xs uppercase font-serif tracking-[0.3em] text-gold-700 font-bold block">
          Our Story & Philosophy
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-espresso leading-tight">
          Baked with Heart, <br />
          <span className="italic font-serif text-[#A8636C]">Shared with Joy.</span>
        </h1>
        <NouveauFloralDivider className="w-56 h-6 text-gold-500 my-2 mx-auto" />
        <p className="text-sm sm:text-base font-serif text-espresso/80 leading-relaxed font-light">
          Welcome to <strong className="font-semibold text-espresso">{BAKERY_CONFIG.brandName}</strong>. We are a dedicated 100% pure vegetarian & eggless home bakery operating from North Town Apartment, Perambur, Chennai.
        </p>
      </div>

      {/* 2. CHAPTER I: OUR STORY */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Arched Photo Frame */}
        <div className="lg:col-span-6 relative">
          <div className="p-2.5 rounded-[120px_120px_24px_24px] border-2 border-gold-500/60 bg-white shadow-nouveau-lg relative">
            <NouveauCorner position="top-left" className="absolute top-2 left-2 w-10 h-10 text-gold-500 z-10" />
            <NouveauCorner position="top-right" className="absolute top-2 right-2 w-10 h-10 text-gold-500 z-10" />

            <div className="aspect-[4/3] rounded-[110px_110px_16px_16px] overflow-hidden bg-parchment-200">
              <img
                src="https://images.unsplash.com/photo-1556911073-38141963c9e0?auto=format&fit=crop&w=1000&q=80"
                alt="Bake O Bliss home kitchen studio Chennai"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="absolute -bottom-6 -left-2 sm:left-6 bg-white py-3 px-5 rounded-2xl border border-gold-500 shadow-nouveau max-w-xs">
            <p className="font-serif text-sm font-bold text-espresso">Small-Batch Studio</p>
            <p className="text-[11px] font-serif text-espresso/70">Flat 803, Tower 4, North Town Apartment</p>
          </div>
        </div>

        {/* Narrative Copy */}
        <div className="lg:col-span-6 space-y-5">
          <span className="text-xs uppercase font-serif tracking-[0.25em] text-gold-700 font-bold block">
            Chapter I • The Beginning
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-espresso">
            How Bake O Bliss Began
          </h2>

          <div className="space-y-4 text-sm sm:text-base font-serif text-espresso/80 leading-relaxed font-light">
            <p>
              {BAKERY_CONFIG.brandName} began from a home oven and a deep passion for baking fresh, delicious cakes in Perambur, Chennai. In a market where vegetarian celebration cakes are often treated as an afterthought or made with premixes and vegetable shortenings, we set out to prove that eggless cakes can be lighter, more flavorful, and wonderfully moist.
            </p>
            <p>
              Operating strictly as a 100% vegetarian kitchen, we never permit eggs or animal gelatin in our kitchen. From birthday cakes baked for family gatherings to tiered wedding cakes, we bake exclusively to order, so each customer receives fresh bakes made specially for them.
            </p>
          </div>

          <div className="pt-2 border-l-2 border-gold-500 pl-4 text-xs font-serif italic text-espresso/80">
            <p>
              "We believe a cake is never just flour and sugar; it is the centerpiece of a joyful celebration."
            </p>
          </div>
        </div>

      </section>

      {/* 3. CHAPTER II: OUR BAKING PHILOSOPHY */}
      <section className="bg-parchment-100/70 rounded-[48px] p-8 sm:p-14 border border-gold-500/40 space-y-10 shadow-nouveau">
        <div className="max-w-2xl mx-auto text-center space-y-2">
          <span className="text-xs uppercase font-serif tracking-[0.25em] text-gold-700 font-bold block">
            Chapter II • Our Standards
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-espresso">
            Our Baking Philosophy
          </h2>
          <NouveauFloralDivider className="w-44 h-5 text-gold-500 my-2 mx-auto" />
          <p className="text-xs sm:text-sm font-serif text-espresso/75">
            Four guiding principles that shape every recipe that leaves our kitchen.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-[28px] border border-gold-500/35 shadow-xs space-y-2 text-center">
            <span className="font-serif text-gold-700 font-bold text-lg block">I</span>
            <h3 className="font-serif text-base font-bold text-espresso">100% Pure Vegetarian</h3>
            <p className="text-xs font-serif text-espresso/70 leading-relaxed">
              Dedicated vegetarian utensils. Zero animal fat, zero gelatin, zero compromises.
            </p>
          </div>

          <div className="bg-white p-6 rounded-[28px] border border-gold-500/35 shadow-xs space-y-2 text-center">
            <span className="font-serif text-gold-700 font-bold text-lg block">II</span>
            <h3 className="font-serif text-base font-bold text-espresso">Freshly Whipped to Order</h3>
            <p className="text-xs font-serif text-espresso/70 leading-relaxed">
              Never frozen, never stored. Cakes are baked fresh for your designated day.
            </p>
          </div>

          <div className="bg-white p-6 rounded-[28px] border border-gold-500/35 shadow-xs space-y-2 text-center">
            <span className="font-serif text-gold-700 font-bold text-lg block">III</span>
            <h3 className="font-serif text-base font-bold text-espresso">Balanced Sweetness</h3>
            <p className="text-xs font-serif text-espresso/70 leading-relaxed">
              Carefully balanced sugar levels allowing real vanilla and rich cocoa to shine.
            </p>
          </div>

          <div className="bg-white p-6 rounded-[28px] border border-gold-500/35 shadow-xs space-y-2 text-center">
            <span className="font-serif text-gold-700 font-bold text-lg block">IV</span>
            <h3 className="font-serif text-base font-bold text-espresso">Thoughtful Styling</h3>
            <p className="text-xs font-serif text-espresso/70 leading-relaxed">
              Hand-piped buttercream, edible petals, and elegant personalized decorations.
            </p>
          </div>
        </div>
      </section>

      {/* 4. CHAPTER III: FRESH PURITY */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
          <span className="text-xs uppercase font-serif tracking-[0.25em] text-gold-700 font-bold block">
            Chapter III • Purity First
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-espresso">
            The Ingredients We Cherish
          </h2>
          <NouveauFloralDivider className="w-44 h-5 text-gold-500 my-1" />

          <p className="text-sm sm:text-base font-serif text-espresso/80 leading-relaxed font-light">
            We use only the best quality ingredients in our kitchen:
          </p>

          <div className="space-y-3 text-xs sm:text-sm font-serif text-espresso/80">
            <div className="flex items-start gap-3">
              <span className="text-gold-700 font-bold">✦</span>
              <span><strong>100% Pure Dairy Butter:</strong> We never use margarine or vegetable shortening.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-gold-700 font-bold">✦</span>
              <span><strong>Rich Chocolate & Cocoa:</strong> Rich, slow-melted chocolate and premium dark cocoa.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-gold-700 font-bold">✦</span>
              <span><strong>Homemade Fruit Compotes:</strong> Made in small batches using real berries and fresh citrus zest.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-gold-700 font-bold">✦</span>
              <span><strong>Pure Vanilla:</strong> Quality vanilla extract and real vanilla beans for natural fragrance.</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 order-1 lg:order-2">
          <div className="p-2.5 rounded-[120px_120px_24px_24px] border-2 border-gold-500/60 bg-white shadow-nouveau-lg">
            <div className="aspect-[4/3] rounded-[110px_110px_16px_16px] overflow-hidden bg-parchment-200">
              <img
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=80"
                alt="Belgian chocolate cake crafted in Chennai"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

      </section>

      {/* 5. CALL TO ACTION */}
      <section className="bg-espresso text-gold-100 rounded-[40px] p-8 sm:p-14 text-center space-y-6 border border-gold-500 shadow-nouveau-lg">
        <div className="max-w-2xl mx-auto space-y-4">
          <span className="text-xs uppercase font-serif tracking-[0.25em] text-gold-300 font-semibold block">
            Chapter IV • Homemade with Love
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white">
            Ready to Celebrate with Us?
          </h2>
          <NouveauFloralDivider className="w-48 h-5 text-gold-400 my-2 mx-auto" />
          <p className="text-sm font-serif text-gold-100/80 font-light leading-relaxed">
            Whether for an afternoon treat, a gift box of brownies, or a custom tiered anniversary cake, we would love to bake for you.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/menu"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full gold-button text-espresso text-xs font-serif font-bold tracking-widest uppercase transition-colors shadow-lg"
            >
              Explore Our Menu
            </Link>
            <Link
              to="/custom-orders"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white hover:bg-gold-50 text-espresso border-2 border-gold-400 text-xs font-serif font-bold tracking-widest uppercase transition-colors shadow-md"
            >
              Order Custom Cake
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
