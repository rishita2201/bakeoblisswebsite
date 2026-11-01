import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowRight, Trash2, ArrowLeft, ShieldCheck, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { CartItem } from '../components/CartItem';
import { formatCurrency } from '../utils/currency';
import { BAKERY_CONFIG } from '../data/config';

export const Cart = () => {
  const { cartItems, clearCart, subtotal, totalItemsCount } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="py-20 sm:py-28 max-w-xl mx-auto px-4 text-center space-y-6">
        <div className="w-20 h-20 rounded-full bg-blush/50 text-rose-600 flex items-center justify-center mx-auto shadow-soft">
          <ShoppingBag className="w-9 h-9" />
        </div>
        <div className="space-y-2">
          <h1 className="font-serif text-3xl font-bold text-chocolate">
            Your Basket is Empty
          </h1>
          <p className="text-sm text-chocolate/70 leading-relaxed">
            Looks like you haven't added any sweet treats to your basket yet. Explore our handcrafted collection of cakes, brownies, and cookies!
          </p>
        </div>
        <Link
          to="/menu"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-chocolate text-ivory text-sm font-semibold tracking-wide hover:bg-chocolate-600 transition-colors shadow-soft"
        >
          <span>Explore Our Menu</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="py-10 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-blush/60 gap-4">
        <div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-chocolate">
            Your Shopping Basket
          </h1>
          <p className="text-xs sm:text-sm text-chocolate/70 mt-1">
            Review your selected bakes before proceeding to order coordination.
          </p>
        </div>

        <button
          type="button"
          onClick={clearCart}
          className="inline-flex items-center gap-1.5 text-xs text-chocolate/60 hover:text-rose-600 transition-colors self-start sm:self-auto"
        >
          <Trash2 className="w-3.5 h-3.5" />
          <span>Clear All Items</span>
        </button>
      </div>

      {/* Main Grid: Cart Items & Order Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Items List */}
        <div className="lg:col-span-8 space-y-4">
          {cartItems.map((item) => (
            <CartItem key={item.cartItemId} item={item} />
          ))}

          <div className="pt-4 flex items-center justify-between">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 text-xs font-semibold text-rose-600 hover:text-rose-700 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Add More Delights to Basket</span>
            </Link>
            <span className="text-xs text-chocolate/60 font-medium">
              {totalItemsCount} item{totalItemsCount > 1 ? 's' : ''} in basket
            </span>
          </div>
        </div>

        {/* Right Column: Order Summary Card */}
        <div className="lg:col-span-4">
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-blush shadow-soft space-y-6 sticky top-28">
            <h3 className="font-serif text-xl font-bold text-chocolate border-b border-blush/60 pb-3">
              Order Summary
            </h3>

            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between text-chocolate/80">
                <span>Subtotal ({totalItemsCount} items)</span>
                <span className="font-semibold text-chocolate">{formatCurrency(subtotal)}</span>
              </div>
              <div className="flex items-start justify-between text-xs text-chocolate/70">
                <span>Fulfillment</span>
                <span className="text-right font-medium">Selected at checkout</span>
              </div>
              <div className="flex items-start justify-between text-xs text-chocolate/70">
                <span>Advance Notice</span>
                <span className="text-right font-medium">24–48h required</span>
              </div>
            </div>

            <div className="pt-3 border-t border-blush/60 flex items-center justify-between">
              <div>
                <span className="text-xs text-chocolate/60 block uppercase">Estimated Total</span>
                <span className="font-serif text-2xl font-bold text-chocolate">
                  {formatCurrency(subtotal)}
                </span>
              </div>
              <span className="text-[11px] text-rose-500 font-medium bg-blush/40 px-2.5 py-1 rounded-full">
                Fresh Batch
              </span>
            </div>

            {/* Note on checkout */}
            <div className="bg-cream/70 rounded-2xl p-3.5 border border-blush text-[11px] text-chocolate/75 space-y-1">
              <p className="font-semibold text-chocolate flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-rose-500" />
                <span>WhatsApp Order Submission</span>
              </p>
              <p>
                Clicking checkout will collect your delivery details and prepare a formatted WhatsApp message to finalize your booking directly with our baker.
              </p>
            </div>

            {/* Checkout Action */}
            <Link
              to="/checkout"
              className="w-full py-4 rounded-2xl bg-chocolate text-ivory text-sm font-semibold tracking-wide hover:bg-chocolate-600 transition-all shadow-soft flex items-center justify-center gap-2"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4 text-rose-300" />
            </Link>

            <p className="text-center text-[11px] text-chocolate/50">
              No immediate card payment required. Payment is finalized upon baker confirmation.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
};
