import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Heart, Award, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { BAKERY_CONFIG } from '../data/config';

export const About = () => {
  return (
    <div className="py-10 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-24">
      
      {/* 1. Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blush/60 text-rose-700 text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Our Artisanal Journey</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-chocolate leading-tight">
          Baked with Heart, <br />
          <span className="italic font-normal font-serif text-rose-600">Shared with Joy.</span>
        </h1>
        <p className="text-sm sm:text-base text-chocolate/80 leading-relaxed font-light">
          Welcome to {BAKERY_CONFIG.brandName}. We are an independent, boutique home bakery dedicated to the timeless art of scratch baking, wholesome ingredients, and celebratory warmth.
        </p>
      </div>

      {/* 2. OUR STORY (Editable placeholder section) */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 relative">
          <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-cream shadow-soft-xl border border-blush/80">
            <img
              src="https://images.unsplash.com/photo-1556911073-38141963c9e0?auto=format&fit=crop&w=1000&q=80"
              alt="Bake O Bliss home kitchen studio"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-4 sm:left-6 bg-white p-4 rounded-2xl shadow-soft-lg border border-blush max-w-xs">
            <p className="font-serif text-sm font-bold text-chocolate">Small-Batch Studio</p>
            <p className="text-[11px] text-chocolate/70">Every treat is crafted individually with genuine care.</p>
          </div>
        </div>

        <div className="lg:col-span-6 space-y-5">
          <span className="text-xs uppercase font-bold tracking-widest text-rose-500">
            Chapter I: Our Story
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-chocolate">
            How Bake O Bliss Began
          </h2>

          <div className="space-y-4 text-sm text-chocolate/80 leading-relaxed font-light">
            <p>
              {BAKERY_CONFIG.brandName} is a dedicated 100% pure vegetarian and eggless home bakery operating from North Town Apartment (Tower 4, Flat 803), Stephenson Road, Binny Garden, Perambur, Chennai. Born out of a deep-seated passion for honest, wholesome patisserie, our kitchen was founded with a clear vow: every single cake, crinkle-top brownie, and artisanal dessert must be completely egg-free, gelatin-free, and prepared with the highest standards of vegetarian kitchen sanctity.
            </p>
            <p>
              In a market where vegetarian celebration cakes are often treated as an afterthought or made with chalky premixes, we set out to prove that eggless cakes can be lighter, more flavorful, and breathtakingly moist. Today, we craft custom celebration centerpieces, festive gift boxes, and gourmet cupcakes for families across Chennai, freshly baked to order for every special occasion.
            </p>
          </div>

          <div className="pt-2 flex items-center gap-3 text-xs text-chocolate/70 italic border-l-2 border-rose-400 pl-4">
            <p>
              "We believe a cake is never just flour and sugar; it is the centerpiece of a memory."
            </p>
          </div>
        </div>
      </section>

      {/* 3. OUR BAKING PHILOSOPHY */}
      <section className="bg-cream/60 rounded-4xl p-8 sm:p-14 border border-blush/60 space-y-8">
        <div className="max-w-2xl mx-auto text-center space-y-3">
          <span className="text-xs uppercase font-bold tracking-widest text-rose-500">
            Chapter II: Our Standards
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-chocolate">
            Our Baking Philosophy
          </h2>
          <p className="text-sm text-chocolate/75">
            Four guiding principles that shape every recipe that leaves our studio.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-blush/70 shadow-soft space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blush/60 text-rose-600 flex items-center justify-center font-bold text-sm">
              01
            </div>
            <h3 className="font-serif text-base font-bold text-chocolate">Zero Artificial Shortcuts</h3>
            <p className="text-xs text-chocolate/70 leading-relaxed">
              No chemical emulsifiers, artificial cake mixes, or palm oil. We bake using real food principles.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-blush/70 shadow-soft space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blush/60 text-rose-600 flex items-center justify-center font-bold text-sm">
              02
            </div>
            <h3 className="font-serif text-base font-bold text-chocolate">Never Stored, Always Fresh</h3>
            <p className="text-xs text-chocolate/70 leading-relaxed">
              Our sponges are whipped and baked within hours of your delivery time for maximum aroma and moisture.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-blush/70 shadow-soft space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blush/60 text-rose-600 flex items-center justify-center font-bold text-sm">
              03
            </div>
            <h3 className="font-serif text-base font-bold text-chocolate">Balanced Sweetness</h3>
            <p className="text-xs text-chocolate/70 leading-relaxed">
              We temper sugar levels thoughtfully so the natural acidity of fruits and depth of chocolate shine through.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-blush/70 shadow-soft space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blush/60 text-rose-600 flex items-center justify-center font-bold text-sm">
              04
            </div>
            <h3 className="font-serif text-base font-bold text-chocolate">Gentle Aesthetics</h3>
            <p className="text-xs text-chocolate/70 leading-relaxed">
              Subtle pastels, delicate botanical florals, and rustic textures instead of overwhelming neon dyes.
            </p>
          </div>
        </div>
      </section>

      {/* 4. FRESH INGREDIENTS */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
          <span className="text-xs uppercase font-bold tracking-widest text-rose-500">
            Chapter III: Purity First
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-chocolate">
            The Ingredients We Cherish
          </h2>
          <p className="text-sm text-chocolate/80 leading-relaxed font-light">
            Great baking begins long before the oven preheats. We source only the finest raw goods:
          </p>

          <div className="space-y-3 text-xs sm:text-sm text-chocolate/80">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
              <span><strong>100% Pure Dairy Butter:</strong> We never substitute with margarine or hydrogenated vegetable shortening.</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
              <span><strong>Couverture Belgian Chocolate:</strong> Rich, slow-tempered Callebaut chocolate and single-origin cocoa.</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
              <span><strong>Hand-Cooked Fruit Compotes:</strong> Made in small saucepans using whole seasonal berries and gentle lemon zest.</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
              <span><strong>Real Madagascar Vanilla:</strong> Pure vanilla bean extract and scraped vanilla pods, never synthetic vanillin.</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 order-1 lg:order-2">
          <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-cream shadow-soft-xl border border-blush/80">
            <img
              src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=80"
              alt="Artisanal chocolate cake with real ingredients"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </section>

      {/* 5. HOMEMADE WITH LOVE & CALL TO ACTION */}
      <section className="bg-chocolate text-ivory rounded-4xl p-8 sm:p-14 text-center space-y-6 shadow-soft-xl">
        <div className="max-w-2xl mx-auto space-y-4">
          <span className="text-xs uppercase font-bold tracking-widest text-rose-300">
            Chapter IV: Homemade with Love
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold">
            Ready to Celebrate with Us?
          </h2>
          <p className="text-sm text-cream/80 font-light leading-relaxed">
            Whether it's a cozy evening tea treat, a box of brownies for a friend, or a magnificent two-tiered celebration cake, we would be honored to bake for you.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/menu"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-rose-500 hover:bg-rose-600 text-white text-sm font-semibold transition-colors shadow-sm"
            >
              Explore Our Menu
            </Link>
            <Link
              to="/custom-orders"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-chocolate-400/40 hover:bg-chocolate-400/60 text-ivory border border-rose-300/40 text-sm font-semibold transition-colors"
            >
              Order Custom Cake
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
