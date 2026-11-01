import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowUpRight, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils/currency';
import { NouveauCorner } from './ArtNouveauDecorations';

export const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const defaultVariant = product.variants && product.variants.length > 0 ? product.variants[0] : null;
    addToCart(product, defaultVariant, 1);
  };

  return (
    <div className="group relative bg-[#FFFDF9] rounded-[48px_48px_24px_24px] border border-gold-500/40 hover:border-gold-500 transition-all duration-300 shadow-nouveau hover:shadow-nouveau-lg flex flex-col h-full overflow-hidden p-2.5">
      
      {/* Decorative Corner Filigree (visible on hover) */}
      <NouveauCorner position="top-left" className="absolute top-2 left-2 w-8 h-8 text-gold-500/40 group-hover:text-gold-500/80 transition-colors z-20 pointer-events-none" />
      <NouveauCorner position="top-right" className="absolute top-2 right-2 w-8 h-8 text-gold-500/40 group-hover:text-gold-500/80 transition-colors z-20 pointer-events-none" />

      {/* Arched Vitrine Image Window */}
      <Link 
        to={`/product/${product.id}`} 
        className="relative aspect-square rounded-[40px_40px_14px_14px] overflow-hidden bg-parchment-200 block border border-gold-500/20"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />

        {/* Art Nouveau Overlay Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.isBestseller && (
            <span className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full text-[10px] font-serif font-bold tracking-widest uppercase bg-[#8E4D55] text-gold-100 shadow-xs border border-gold-400/40">
              <Sparkles className="w-2.5 h-2.5" />
              Bestseller
            </span>
          )}
          {product.isSignature && !product.isBestseller && (
            <span className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full text-[10px] font-serif font-bold tracking-widest uppercase bg-espresso text-gold-200 shadow-xs border border-gold-500/50">
              Signature
            </span>
          )}
        </div>

        {/* Hover Vignette Overlay */}
        <div className="absolute inset-0 bg-espresso/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
          <span className="px-5 py-2 rounded-full bg-white/95 text-espresso font-serif text-xs font-semibold tracking-wider uppercase shadow-nouveau border border-gold-500/50 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            View Creation
          </span>
        </div>
      </Link>

      {/* Card Content Cartouche */}
      <div className="p-4 flex flex-col flex-grow justify-between space-y-4">
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-serif uppercase tracking-[0.25em] text-gold-700 font-bold">
              {product.category}
            </span>
            {product.variants && product.variants.length > 0 && (
              <span className="text-[10px] font-serif text-espresso/60 italic">
                {product.variants.length} size options
              </span>
            )}
          </div>

          <Link to={`/product/${product.id}`} className="block group-hover:text-gold-700 transition-colors">
            <h3 className="font-serif text-lg font-bold text-espresso line-clamp-1 leading-snug">
              {product.name}
            </h3>
          </Link>

          <p className="text-xs text-espresso/70 line-clamp-2 leading-relaxed font-serif font-light">
            {product.shortDescription || product.description}
          </p>
        </div>

        {/* Pricing & Actions */}
        <div className="pt-3 border-t border-gold-500/25 flex items-center justify-between gap-2">
          <div>
            <span className="text-[10px] font-serif text-espresso/60 block uppercase tracking-wider">Starts from</span>
            <span className="font-serif text-lg font-bold text-espresso">
              {formatCurrency(product.price)}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleQuickAdd}
              type="button"
              className="p-2.5 rounded-full bg-parchment-100 hover:bg-gold-500 text-espresso hover:text-white transition-all duration-200 border border-gold-500/50 shadow-xs flex items-center justify-center"
              title="Add default size to basket"
              aria-label={`Add ${product.name} to basket`}
            >
              <ShoppingBag className="w-3.5 h-3.5" />
            </button>
            <Link
              to={`/product/${product.id}`}
              className="p-2.5 rounded-full bg-espresso hover:bg-espresso-800 text-gold-200 transition-all duration-200 border border-gold-500/50 flex items-center justify-center"
              title="View full options & customise"
              aria-label={`View ${product.name} details`}
            >
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>

    </div>
  );
};
