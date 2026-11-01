import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, X, Cake, Sparkles } from 'lucide-react';
import { CATEGORIES, PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';

export const ProductGrid = ({ initialCategory = 'All', showHeader = true, limit = null }) => {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured'); // 'featured', 'price-low', 'price-high', 'name'

  // Filter and Sort logic
  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    // Category filter
    if (selectedCategory && selectedCategory !== 'All') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Search query filter
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

    // Sorting
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
        // Prioritize signature & bestsellers
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
    <div className="space-y-8">
      {showHeader && (
        <div className="space-y-6">
          {/* Search and Sort Toolbar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-grow max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-chocolate/50" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search cakes, brownies, cupcakes..."
                className="w-full pl-10 pr-9 py-2.5 rounded-full bg-white border border-blush focus:border-rose-400 focus:ring-2 focus:ring-rose-200 text-sm text-chocolate placeholder-chocolate/40 outline-none transition-all shadow-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-0.5 text-chocolate/50 hover:text-chocolate"
                  aria-label="Clear search query"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Sort Selector */}
            <div className="flex items-center gap-2 self-end sm:self-auto">
              <label htmlFor="sort-dropdown" className="text-xs text-chocolate/70 font-medium whitespace-nowrap">
                Sort by:
              </label>
              <select
                id="sort-dropdown"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="py-2 px-3 rounded-xl bg-white border border-blush text-xs font-medium text-chocolate focus:border-rose-400 focus:outline-none shadow-sm cursor-pointer"
              >
                <option value="featured">Featured & Bestsellers</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A to Z</option>
              </select>
            </div>
          </div>

          {/* Category Filter Pills (Horizontal scrollable on mobile) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? 'bg-chocolate text-ivory shadow-soft'
                      : 'bg-white hover:bg-blush/40 text-chocolate/80 border border-blush/70'
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
        <div className="flex items-center justify-between text-xs text-chocolate/70 bg-blush/30 px-4 py-2 rounded-xl">
          <div className="flex items-center gap-2 flex-wrap">
            <span>Showing:</span>
            {selectedCategory !== 'All' && (
              <span className="font-semibold text-rose-700 bg-white px-2 py-0.5 rounded-md border border-blush">
                {selectedCategory}
              </span>
            )}
            {searchQuery && (
              <span className="font-semibold text-rose-700 bg-white px-2 py-0.5 rounded-md border border-blush">
                "{searchQuery}"
              </span>
            )}
            <span>({filteredProducts.length} items found)</span>
          </div>

          <button
            onClick={handleResetFilters}
            className="text-rose-600 hover:text-rose-700 font-semibold underline text-xs"
          >
            Reset Filters
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
        <div className="text-center py-16 px-4 bg-white/60 rounded-3xl border border-dashed border-blush max-w-md mx-auto space-y-4">
          <div className="w-14 h-14 rounded-full bg-blush/50 text-rose-600 flex items-center justify-center mx-auto">
            <Cake className="w-7 h-7" />
          </div>
          <div className="space-y-1">
            <h3 className="font-serif text-lg font-bold text-chocolate">No treats found</h3>
            <p className="text-xs text-chocolate/70">
              We couldn't find any items matching your selected criteria. Try adjusting your search or category filters.
            </p>
          </div>
          <button
            onClick={handleResetFilters}
            className="px-5 py-2 rounded-full bg-chocolate text-ivory text-xs font-semibold hover:bg-chocolate-600 transition-colors"
          >
            View All Products
          </button>
        </div>
      )}
    </div>
  );
};
