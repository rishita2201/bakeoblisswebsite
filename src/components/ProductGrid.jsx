import React, { useState, useMemo } from 'react';
import { Search, X, Cake, Sparkles } from 'lucide-react';
import { CATEGORIES, PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';
import { NouveauFloralDivider } from './ArtNouveauDecorations';

export const ProductGrid = ({ initialCategory = 'All', showHeader = true, limit = null }) => {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    if (selectedCategory && selectedCategory !== 'All') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          (p.flavorNotes && p.flavorNotes.some((fn) => fn.toLowerCase().includes(q)))
      );
    }

    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'featured':
      default:
        result.sort((a, b) => (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0));
        break;
    }

    if (limit) {
      return result.slice(0, limit);
    }

    return result;
  }, [selectedCategory, searchQuery, sortBy, limit]);

  const handleResetFilters = () => {
    setSelectedCategory('All');
    setSearchQuery('');
    setSortBy('featured');
  };

  return (
    <div className="space-y-10">
      {showHeader && (
        <div className="space-y-6">
          {/* Search & Sort Controls with Art Nouveau Styling */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            
            {/* Search Input in Gilded Parchment Box */}
            <div className="relative flex-grow max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-600/70" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search pure veg cakes, brownies, macarons..."
                className="w-full pl-11 pr-10 py-3 rounded-full bg-white border border-gold-500/50 focus:border-gold-600 focus:ring-2 focus:ring-gold-200 text-sm font-serif text-espresso placeholder-espresso/40 outline-none transition-all shadow-xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 p-0.5 text-espresso/50 hover:text-espresso"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Sort Selector */}
            <div className="flex items-center justify-between sm:justify-start gap-2 w-full sm:w-auto">
              <label htmlFor="sort-dropdown" className="text-xs font-serif tracking-wider uppercase text-espresso/70 font-semibold whitespace-nowrap">
                Sort by:
              </label>
              <select
                id="sort-dropdown"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="py-2.5 px-3.5 rounded-xl bg-white border border-gold-500/50 text-xs font-serif font-medium text-espresso focus:border-gold-600 focus:outline-none shadow-xs cursor-pointer flex-grow sm:flex-grow-0"
              >
                <option value="featured">Featured & Bestsellers</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A to Z</option>
              </select>
            </div>
          </div>

          {/* Category Filter Ribbons */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
            {CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-serif tracking-widest uppercase whitespace-nowrap transition-all duration-300 shrink-0 ${
                    isActive
                      ? 'bg-espresso text-gold-300 border-2 border-gold-400 shadow-md font-bold'
                      : 'bg-white hover:bg-gold-50 text-espresso font-medium border border-gold-500/40 hover:border-gold-600 shadow-xs'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Active Filter Indicators */}
      {(selectedCategory !== 'All' || searchQuery) && (
        <div className="flex items-center justify-between text-xs font-serif text-espresso/80 bg-parchment-100/80 px-5 py-2.5 rounded-xl border border-gold-500/30">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="uppercase tracking-wider">Filtered by:</span>
            {selectedCategory !== 'All' && (
              <span className="font-semibold text-gold-800 bg-white px-2.5 py-0.5 rounded-md border border-gold-500/40">
                {selectedCategory}
              </span>
            )}
            {searchQuery && (
              <span className="font-semibold text-gold-800 bg-white px-2.5 py-0.5 rounded-md border border-gold-500/40">
                "{searchQuery}"
              </span>
            )}
            <span>({filteredProducts.length} items found)</span>
          </div>

          <button
            onClick={handleResetFilters}
            className="text-gold-700 hover:text-gold-800 font-bold uppercase tracking-wider underline text-xs"
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-20 px-6 bg-white/70 rounded-[32px] border border-dashed border-gold-500/40 max-w-md mx-auto space-y-4">
          <div className="w-14 h-14 rounded-full bg-parchment-200 text-gold-700 flex items-center justify-center mx-auto border border-gold-500/40">
            <Cake className="w-7 h-7" />
          </div>
          <div className="space-y-1">
            <h3 className="font-serif text-xl font-bold text-espresso">No creations found</h3>
            <p className="text-xs font-serif text-espresso/70">
              We couldn't find items matching your criteria. Try adjusting your search or category filters.
            </p>
          </div>
          <button
            onClick={handleResetFilters}
            className="px-6 py-2.5 rounded-full gold-button text-espresso text-xs font-serif font-bold uppercase tracking-widest transition-colors shadow-md"
          >
            View Complete Menu
          </button>
        </div>
      )}
    </div>
  );
};
