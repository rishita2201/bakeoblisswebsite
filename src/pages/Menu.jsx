import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { ProductGrid } from '../components/ProductGrid';
import { BAKERY_CONFIG } from '../data/config';
import { NouveauFloralDivider, NouveauArchCrest, NouveauVegCameo } from '../components/ArtNouveauDecorations';

export const Menu = () => {
  const [searchParams] = useSearchParams();
  const activeCategoryParam = searchParams.get('category') || 'All';

  return (
    <div className="py-10 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Header Cartouche */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <NouveauArchCrest className="w-16 h-8 text-gold-500 mx-auto" />
        <span className="text-xs uppercase font-serif tracking-[0.3em] text-gold-700 font-bold block">
          Le Menu de Pâtisserie
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-espresso">
          The Bakery Catalogue
        </h1>
        <NouveauFloralDivider className="w-48 h-5 text-gold-500 my-2 mx-auto" />
        <p className="text-sm sm:text-base font-serif text-espresso/80 leading-relaxed font-light">
          Explore our collection of 100% eggless celebration cakes, decadent fudge brownies, Parisian macarons, and butter shortbreads baked fresh to order in our Perambur studio.
        </p>
        <div className="pt-2 flex justify-center">
          <NouveauVegCameo size="small" />
        </div>
      </div>

      {/* Main Product Grid with Filters & Search */}
      <ProductGrid initialCategory={activeCategoryParam} showHeader={true} />

      {/* Dietary Vow Card */}
      <div className="mt-16 p-8 sm:p-10 rounded-[36px] bg-parchment-100/70 border border-gold-500/40 text-center max-w-3xl mx-auto space-y-3 shadow-nouveau">
        <h3 className="font-serif text-2xl font-bold text-espresso">
          Sanctity of 100% Pure Vegetarian Baking
        </h3>
        <p className="text-xs sm:text-sm font-serif text-espresso/75 leading-relaxed max-w-xl mx-auto">
          Every cake, cream, compote, and decoration in our studio is strictly 100% eggless and vegetarian. We use dedicated sanitized vegetarian bake-ware and zero animal gelatin.
        </p>
      </div>

    </div>
  );
};
