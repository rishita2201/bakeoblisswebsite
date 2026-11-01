import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowRight, Trash2, ArrowLeft, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { CartItem } from '../components/CartItem';
import { formatCurrency } from '../utils/currency';
import { BAKERY_CONFIG } from '../data/config';
import { NouveauArchCrest, NouveauFloralDivider } from '../components/ArtNouveauDecorations';

export const Cart = () => {
  const { cartItems, clearCart, subtotal, totalItemsCount } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="py-20 sm:py-28 max-w-xl mx-auto px-4 text-center space-y-6">
        <div className="w-20 h-20 rounded-full bg-parchment-200 border border-gold-500 text-gold-700 flex items-center justify-center mx-auto shadow-nouveau">
          <ShoppingBag className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <h1 className="font-serif text-3xl font-bold text-espresso">
            Your Basket is Empty
          </h1>
          <p className="text-sm font-serif text-espresso/70 leading-relaxed">
            Your sweet basket awaits. Browse our collection of 100% pure vegetarian cakes, crinkle brownies, and French macarons!
          </p>
        </div>
        <Link
          to="/menu"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full gold-button text-gold-100 text-xs font-serif font-bold tracking-widest uppercase transition-colors shadow-nouveau"
        >
          <span>Explore The Menu</span>
          <ArrowRight className="w-3.5 h-3.5 text-gold-300" />
        </Link>
      </div>
    );
  }

  return (
    <div className="py-10 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      
      {/* Header Cartouche */}
      <div className="text-center max-w-xl mx-auto space-y-2">
        <NouveauArchCrest className="w-14 h-7 text-gold-500 mx-auto" />
        <span className="text-xs uppercase font-serif tracking-[0.3em] text-gold-700 font-bold block">
          Your Order
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-normal text-espresso">
          Your Shopping Cart
        </h1>
        <NouveauFloralDivider className="w-44 h-5 text-gold-500 my-1 mx-auto" />
      </div>

      <div className="flex items-center justify-between pb-3 border-b border-gold-500/30">
        <span className="text-xs font-serif text-espresso/70">
          {totalItemsCount} item{totalItemsCount > 1 ? 's' : ''} in cart
        </span>
        <button
          type="button"
          onClick={clearCart}
          className="inline-flex items-center gap-1.5 text-xs font-serif uppercase tracking-wider text-espresso/60 hover:text-rose-700 transition-colors"
        >
          <Trash2 className="w-3.5 h-3.5" />
          <span>Clear All Items</span>
        </button>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Items */}
        <div className="lg:col-span-8 space-y-4">
          {cartItems.map((item) => (
            <CartItem key={item.cartItemId} item={item} />
          ))}

          <div className="pt-4 flex items-center justify-between">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 text-xs font-serif font-bold uppercase tracking-wider text-gold-700 hover:text-gold-800 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Add More Items</span>
            </Link>
          </div>
        </div>

        {/* Right Column: Order Summary Cartouche */}
        <div className="lg:col-span-4">
          <div className="bg-white rounded-[32px] p-6 sm:p-7 border border-gold-500/50 shadow-nouveau space-y-6 sticky top-28">
            <h3 className="font-serif text-xl font-bold text-espresso border-b border-gold-500/30 pb-3">
              Order Summary
            </h3>

            <div className="space-y-3 text-xs font-serif">
              <div className="flex items-center justify-between text-espresso/80">
                <span>Subtotal ({totalItemsCount} items)</span>
                <span className="font-bold text-espresso text-sm">{formatCurrency(subtotal)}</span>
              </div>
              <div className="flex items-start justify-between text-espresso/70">
                <span>Dietary Standard</span>
                <span className="text-right font-bold text-emerald-800">🌱 100% Pure Veg</span>
              </div>
              <div className="flex items-start justify-between text-espresso/70">
                <span>Studio Location</span>
                <span className="text-right text-[11px]">Tower 4, North Town, Chennai</span>
              </div>
            </div>

            <div className="pt-3 border-t border-gold-500/30 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-serif text-espresso/60 block uppercase tracking-wider">Estimated Total</span>
                <span className="font-serif text-2xl font-bold text-espresso">
                  {formatCurrency(subtotal)}
                </span>
              </div>
            </div>

            <div className="bg-parchment-100/90 rounded-2xl p-3.5 border border-gold-500/40 text-[11px] font-serif text-espresso/80 space-y-1">
              <p className="font-bold text-espresso flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-gold-600" />
                <span>Dual WhatsApp & Database Ordering</span>
              </p>
              <p>
                Proceeding will record your details in our studio database and open WhatsApp for confirmation with our baker.
              </p>
            </div>

            <Link
              to="/checkout"
              className="w-full py-4 rounded-full gold-button text-gold-100 text-xs font-serif font-bold tracking-widest uppercase transition-all shadow-nouveau flex items-center justify-center gap-2"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-3.5 h-3.5 text-gold-300" />
            </Link>

            <p className="text-center text-[10px] font-serif text-espresso/60">
              No immediate online card payment required. Payment is finalized via UPI once confirmed by baker.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
};
