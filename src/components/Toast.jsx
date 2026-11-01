import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Toast = () => {
  const { toastMessage, dismissToast } = useCart();

  if (!toastMessage) return null;

  return (
    <aside
      aria-label="Cart Notification"
      className="fixed bottom-24 sm:bottom-8 left-1/2 -translate-x-1/2 z-50 max-w-md w-[92%] sm:w-auto bg-chocolate text-ivory px-5 py-3.5 rounded-2xl shadow-soft-xl border border-rose-300/30 flex items-center justify-between gap-4 animate-bounce-short"
    >
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-rose-500/30 text-rose-300 flex items-center justify-center flex-shrink-0">
          <ShoppingBag className="w-4 h-4" />
        </div>
        <p className="text-sm font-medium">{toastMessage}</p>
      </div>

      <div className="flex items-center gap-2 flex-shrink-0">
        <Link
          to="/cart"
          onClick={dismissToast}
          className="text-xs bg-rose-500 hover:bg-rose-600 text-white font-medium px-3 py-1.5 rounded-lg transition-colors"
        >
          View Basket
        </Link>
        <button
          onClick={dismissToast}
          className="p-1 text-cream/70 hover:text-white transition-colors"
          aria-label="Close notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </aside>
  );
};
