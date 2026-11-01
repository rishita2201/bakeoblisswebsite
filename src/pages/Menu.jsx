import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Sparkles, Info } from 'lucide-react';
import { ProductGrid } from '../components/ProductGrid';
import { BAKERY_CONFIG } from '../data/config';

export const Menu = () => {
  const [searchParams] = useSearchParams();
  const activeCategoryParam = searchParams.get('category') || 'All';

  return (
    <div className="py-10 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blush/60 text-rose-700 text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Freshly Baked On Order</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-chocolate">
          Our Menu & Catalogue
        </h1>
        <p className="text-sm sm:text-base text-chocolate/75 leading-relaxed font-light">
          Browse our collection of handcrafted celebration cakes, rich brownies, gourmet cupcakes, and artisanal desserts. All items are baked fresh in our boutique studio.
        </p>
      </div>

      {/* Demonstration Notice Card */}
      <div className="bg-blush/30 border border-rose-300/40 rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 max-w-3xl mx-auto">
        <Info className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
        <div className="text-xs text-chocolate/80 space-y-1">
          <p className="font-semibold text-chocolate">
            Note for Bakery Owner & Visitors:
          </p>
          <p>
            The menu items, pricing, and variants displayed here are sample demonstration data. You can easily add, update, or remove items in <code className="bg-white/80 px-1 py-0.5 rounded text-rose-700 font-mono text-[11px]">src/data/products.js</code>.
          </p>
        </div>
      </div>

      {/* Main Product Grid with Filters & Search */}
      <ProductGrid initialCategory={activeCategoryParam} showHeader={true} />

      {/* Ordering Notice Banner */}
      <div className="mt-16 p-8 rounded-3xl bg-cream border border-blush text-center max-w-3xl mx-auto space-y-3">
        <h3 className="font-serif text-xl font-bold text-chocolate">
          Have Dietary Preferences or Specific Requirements?
        </h3>
        <p className="text-xs sm:text-sm text-chocolate/75">
          Most of our cakes and desserts can be customized to be 100% eggless, gluten-sensitive, or tailored with low-sugar adjustments. Feel free to mention your requests at checkout or when chatting with our baker.
        </p>
      </div>

    </div>
  );
};
