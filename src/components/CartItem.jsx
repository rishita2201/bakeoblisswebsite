import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils/currency';

export const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const lineTotal = item.price * item.quantity;

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 sm:p-5 bg-white rounded-2xl border border-blush/60 shadow-soft gap-4">
      
      {/* Product Image and Meta */}
      <div className="flex items-center gap-4 w-full sm:w-auto">
        <Link to={`/product/${item.id}`} className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-cream flex-shrink-0 border border-blush/40">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </Link>

        <div className="space-y-1 flex-grow">
          <span className="text-[10px] uppercase font-bold tracking-wider text-rose-500">
            {item.category}
          </span>
          <Link to={`/product/${item.id}`}>
            <h4 className="font-serif text-base font-bold text-chocolate hover:text-rose-600 transition-colors line-clamp-1">
              {item.name}
            </h4>
          </Link>

          {item.selectedVariant && (
            <div className="inline-block px-2.5 py-0.5 rounded-full bg-cream text-chocolate/80 text-xs font-medium border border-rose-300/30">
              {item.selectedVariant.label}
            </div>
          )}

          <p className="text-xs text-chocolate/60">
            Unit Price: <span className="font-semibold text-chocolate">{formatCurrency(item.price)}</span>
          </p>
        </div>
      </div>

      {/* Controls: Quantity & Price & Delete */}
      <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-blush/40">
        
        {/* Quantity Controls */}
        <div className="flex items-center border border-blush rounded-xl bg-ivory p-1">
          <button
            type="button"
            onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
            className="w-7 h-7 rounded-lg bg-white hover:bg-blush text-chocolate flex items-center justify-center transition-colors shadow-xs"
            aria-label="Decrease quantity"
          >
            <Minus className="w-3 h-3" />
          </button>
          
          <span className="w-9 text-center text-xs font-bold text-chocolate">
            {item.quantity}
          </span>

          <button
            type="button"
            onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
            className="w-7 h-7 rounded-lg bg-white hover:bg-blush text-chocolate flex items-center justify-center transition-colors shadow-xs"
            aria-label="Increase quantity"
          >
            <Plus className="w-3 h-3" />
          </button>
        </div>

        {/* Line Total */}
        <div className="text-right min-w-[80px]">
          <span className="text-[10px] text-chocolate/50 uppercase block">Subtotal</span>
          <span className="font-serif text-base font-bold text-chocolate">
            {formatCurrency(lineTotal)}
          </span>
        </div>

        {/* Remove Button */}
        <button
          type="button"
          onClick={() => removeFromCart(item.cartItemId)}
          className="p-2 text-chocolate/40 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all"
          title="Remove from cart"
          aria-label={`Remove ${item.name} from basket`}
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
