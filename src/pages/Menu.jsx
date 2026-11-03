import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { ProductGrid } from '../components/ProductGrid';
import { BAKERY_CONFIG } from '../data/config';
import { NouveauFloralDivider, NouveauArchCrest } from '../components/ArtNouveauDecorations';

export const Menu = () => {
  const [searchParams] = useSearchParams();
  const activeCategoryParam = searchParams.get('category') || 'All';

  return (
    <div className="py-10 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Header Cartouche */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <NouveauArchCrest className="w-16 h-8 text-gold-500 mx-auto" />
        <span className="text-xs uppercase font-serif tracking-[0.3em] text-gold-700 font-bold block">
          Fresh Homemade Treats
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-espresso">
          Our Bakery Menu
        </h1>
        <NouveauFloralDivider className="w-48 h-5 text-gold-500 my-2 mx-auto" />
        <p className="text-sm sm:text-base font-serif text-espresso/80 leading-relaxed font-light">
          Explore our freshly baked cakes, fudgy chocolate brownies, cupcakes, and sweet treats baked fresh to order in Perambur, Chennai.
        </p>
      </div>

      {/* Main Product Grid with Filters & Search */}
      <ProductGrid initialCategory={activeCategoryParam} showHeader={true} />

      {/* Quality Promise Card */}
      <div className="mt-16 p-8 sm:p-10 rounded-[36px] bg-parchment-100/70 border border-gold-500/40 text-center max-w-3xl mx-auto space-y-3 shadow-nouveau">
        <h3 className="font-serif text-2xl font-bold text-espresso">
          Freshly Baked with Pure Butter
        </h3>
        <p className="text-xs sm:text-sm font-serif text-espresso/75 leading-relaxed max-w-xl mx-auto">
          Every cake, brownie, and treat in our bakery is baked fresh to order using pure dairy butter, rich chocolate, and quality ingredients with zero gelatin.
        </p>
      </div>

    </div>
  );
};
