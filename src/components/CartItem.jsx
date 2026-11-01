import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils/currency';

export const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const lineTotal = item.price * item.quantity;

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 sm:p-5 bg-white rounded-2xl border border-gold-500/35 shadow-nouveau gap-4">
      
      {/* Product Image and Meta */}
      <div className="flex items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
        <Link to={`/product/${item.id}`} className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-parchment-200 flex-shrink-0 border border-gold-500/30">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </Link>

        <div className="space-y-1 flex-grow min-w-0">
          <span className="text-[10px] uppercase font-bold tracking-wider text-gold-700 block">
            {item.category}
          </span>
          <Link to={`/product/${item.id}`}>
            <h4 className="font-serif text-base font-bold text-espresso hover:text-gold-700 transition-colors line-clamp-1">
              {item.name}
            </h4>
          </Link>

          {item.selectedVariant && (
            <div className="inline-block px-2.5 py-0.5 rounded-full bg-parchment-100 text-espresso/80 text-[11px] font-serif border border-gold-500/30">
              {item.selectedVariant.label}
            </div>
          )}

          <p className="text-xs text-espresso/65 font-serif">
            Unit Price: <span className="font-semibold text-espresso">{formatCurrency(item.price)}</span>
          </p>
        </div>
      </div>

      {/* Controls: Quantity & Price & Delete */}
      <div className="flex items-center justify-between sm:justify-end gap-4 sm:gap-6 w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-gold-500/20">
        
        {/* Quantity Controls */}
        <div className="flex items-center border border-gold-500/40 rounded-xl bg-parchment-50 p-1">
          <button
            type="button"
            onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
            className="w-8 h-8 rounded-lg bg-white hover:bg-gold-100 text-espresso flex items-center justify-center transition-colors shadow-xs active:scale-95"
            aria-label="Decrease quantity"
          >
            <Minus className="w-3.5 h-3.5" />
          </button>
          
          <span className="w-9 text-center text-xs font-bold text-espresso">
            {item.quantity}
          </span>

          <button
            type="button"
            onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
            className="w-8 h-8 rounded-lg bg-white hover:bg-gold-100 text-espresso flex items-center justify-center transition-colors shadow-xs active:scale-95"
            aria-label="Increase quantity"
          >
            <Plus className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Line Total */}
        <div className="text-right min-w-[75px]">
          <span className="text-[10px] text-espresso/50 uppercase block font-serif">Subtotal</span>
          <span className="font-serif text-base font-bold text-espresso">
            {formatCurrency(lineTotal)}
          </span>
        </div>

        {/* Remove Button */}
        <button
          type="button"
          onClick={() => removeFromCart(item.cartItemId)}
          className="p-2.5 text-espresso/40 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all"
          title="Remove from cart"
          aria-label={`Remove ${item.name} from basket`}
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
