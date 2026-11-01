import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowUpRight, Sparkles, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils/currency';

export const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // Use first variant if available
    const defaultVariant = product.variants && product.variants.length > 0 ? product.variants[0] : null;
    addToCart(product, defaultVariant, 1);
  };

  return (
    <div className="group relative bg-white rounded-3xl overflow-hidden border border-blush/60 hover:border-rose-300 shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col h-full">
      
      {/* Product Image Container */}
      <Link to={`/product/${product.id}`} className="relative aspect-square overflow-hidden bg-cream block">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Overlay Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.isBestseller && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-rose-500 text-white shadow-sm">
              <Sparkles className="w-3 h-3" />
              Bestseller
            </span>
          )}
          {product.isSignature && !product.isBestseller && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-chocolate text-ivory shadow-sm">
              Signature
            </span>
          )}
          {/* 100% Pure Veg Badge */}
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white/95 text-emerald-800 border border-emerald-400 backdrop-blur-sm shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
            100% Pure Veg
          </span>
        </div>

        {/* Quick View Floating Pill on Hover */}
        <div className="absolute inset-0 bg-chocolate/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
          <span className="px-4 py-2 rounded-full bg-white/95 backdrop-blur-sm text-chocolate text-xs font-semibold shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            View Details
          </span>
        </div>
      </Link>

      {/* Product Details Content */}
      <div className="p-5 flex flex-col flex-grow justify-between space-y-4">
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-rose-500">
              {product.category}
            </span>
            {product.variants && product.variants.length > 0 && (
              <span className="text-[11px] text-chocolate/60">
                {product.variants.length} size{product.variants.length > 1 ? 's' : ''}
              </span>
            )}
          </div>

          <Link to={`/product/${product.id}`} className="block group-hover:text-rose-600 transition-colors">
            <h3 className="font-serif text-lg font-bold text-chocolate line-clamp-1 leading-snug">
              {product.name}
            </h3>
          </Link>

          <p className="text-xs text-chocolate/70 line-clamp-2 leading-relaxed">
            {product.shortDescription || product.description}
          </p>
        </div>

        {/* Price & Action Area */}
        <div className="pt-3 border-t border-blush/40 flex items-center justify-between gap-2">
          <div>
            <span className="text-[10px] text-chocolate/60 block uppercase tracking-wider">Starts at</span>
            <span className="font-serif text-lg font-bold text-chocolate">
              {formatCurrency(product.price)}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleQuickAdd}
              type="button"
              className="p-2.5 rounded-xl bg-blush/60 hover:bg-rose-500 text-chocolate hover:text-white transition-all duration-200 flex items-center justify-center group/btn shadow-sm"
              title="Add default size to basket"
              aria-label={`Add ${product.name} to basket`}
            >
              <ShoppingBag className="w-4 h-4" />
            </button>
            <Link
              to={`/product/${product.id}`}
              className="p-2.5 rounded-xl bg-cream hover:bg-chocolate hover:text-ivory text-chocolate transition-all duration-200 flex items-center justify-center"
              title="View full options & customise"
              aria-label={`View ${product.name} details`}
            >
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>

    </div>
  );
};
