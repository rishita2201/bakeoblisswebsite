import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, MessageCircle, MapPin, Calendar, Clock, 
  CheckCircle2, AlertCircle, ShoppingBag, Info, ExternalLink 
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { BAKERY_CONFIG } from '../data/config';
import { formatCurrency } from '../utils/currency';
import { generateCartOrderWhatsAppUrl } from '../utils/whatsapp';
import { createOrder } from '../services/api';

export const Checkout = () => {
  const { cartItems, subtotal, totalItemsCount, clearCart } = useCart();
  const navigate = useNavigate();

  // Form states
  const [formData, setFormData] = useState({
    customerName: '',
    customerPhone: '',
    fulfillmentType: 'pickup', // 'pickup' or 'delivery'
    deliveryAddress: '',
    preferredDate: '',
    preferredTime: '',
    specialInstructions: '',
  });

  const [errors, setErrors] = useState({});
  const [submittedWhatsAppUrl, setSubmittedWhatsAppUrl] = useState(null);

  // If cart is empty and not submitted yet
  if (cartItems.length === 0 && !submittedWhatsAppUrl) {
    return (
      <div className="py-20 max-w-md mx-auto px-4 text-center space-y-4">
        <h2 className="font-serif text-2xl font-bold text-chocolate">Your basket is empty</h2>
        <p className="text-sm text-chocolate/70">
          Please add items to your basket before checking out.
        </p>
        <Link
          to="/menu"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-chocolate text-ivory text-xs font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Browse Our Menu</span>
        </Link>
      </div>
    );
  }

  // Input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  // Validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.customerName.trim()) {
      newErrors.customerName = 'Please enter your full name';
    }
    if (!formData.customerPhone.trim() || formData.customerPhone.length < 8) {
      newErrors.customerPhone = 'Please enter a valid WhatsApp contact number';
    }
    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select your preferred date';
    }
    if (formData.fulfillmentType === 'delivery' && !formData.deliveryAddress.trim()) {
      newErrors.deliveryAddress = 'Delivery address is required for doorstep delivery';
    }
    return newErrors;
  };

  // Form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      window.scrollTo({ top: 150, behavior: 'smooth' });
      return;
    }

    // Save order to SQLite Database / Backend API
    createOrder({
      customerName: formData.customerName,
      customerPhone: formData.customerPhone,
      fulfillmentType: formData.fulfillmentType,
      deliveryAddress: formData.deliveryAddress,
      preferredDate: formData.preferredDate,
      preferredTime: formData.preferredTime,
      specialInstructions: formData.specialInstructions,
      items: cartItems,
      totalAmount: subtotal,
    }).catch((err) => console.warn('Order save notice:', err));

    // Generate WhatsApp click-to-chat URL
    const url = generateCartOrderWhatsAppUrl({
      customerName: formData.customerName,
      customerPhone: formData.customerPhone,
      fulfillmentType: formData.fulfillmentType,
      deliveryAddress: formData.deliveryAddress,
      preferredDate: formData.preferredDate,
      preferredTime: formData.preferredTime,
      specialInstructions: formData.specialInstructions,
      items: cartItems,
      totalAmount: subtotal,
    });

    setSubmittedWhatsAppUrl(url);

    // Open WhatsApp in a new tab/window
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="py-10 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      
      {/* Breadcrumb / Back */}
      <div className="flex items-center justify-between pb-4 border-b border-blush/60">
        <Link
          to="/cart"
          className="inline-flex items-center gap-2 text-xs font-semibold text-rose-600 hover:text-rose-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Basket</span>
        </Link>
        <span className="text-xs text-chocolate/60">
          Step 2 of 2: Delivery & WhatsApp Confirmation
        </span>
      </div>

      {/* Confirmation State View after submission */}
      {submittedWhatsAppUrl ? (
        <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 sm:p-10 border border-blush shadow-soft-xl text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-9 h-9" />
          </div>

          <div className="space-y-2">
            <span className="text-xs uppercase font-bold tracking-widest text-rose-500">
              Inquiry Prepared
            </span>
            <h2 className="font-serif text-3xl font-bold text-chocolate">
              Order Inquiry Sent to WhatsApp
            </h2>
            <p className="text-sm text-chocolate/80 leading-relaxed max-w-md mx-auto">
              Thank you, <strong className="text-chocolate">{formData.customerName}</strong>! A pre-filled WhatsApp message has been generated.
            </p>
          </div>

          {/* Direct Link in case popup blocked */}
          <div className="p-4 rounded-2xl bg-cream border border-blush/80 text-xs text-chocolate/85 space-y-3">
            <p>
              If WhatsApp didn't open automatically on your device, click the button below to send your order:
            </p>
            <a
              href={submittedWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white font-semibold shadow-md hover:bg-[#1ebc59] transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Open WhatsApp & Send Order</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Order Confirmation Notice - Strict Requirement */}
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-left flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
            <div className="text-xs text-amber-900 space-y-1">
              <p className="font-bold">Important Notice:</p>
              <p>
                Sending your WhatsApp message does not immediately confirm your order. Our baker will review your requested date, check slot availability, confirm delivery fees (if applicable), and reply to finalize your booking.
              </p>
            </div>
          </div>

          {/* Action to complete or clear */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => {
                clearCart();
                navigate('/');
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-chocolate text-ivory text-xs font-semibold hover:bg-chocolate-600 transition-colors"
            >
              Complete & Return to Home
            </button>
            <Link
              to="/menu"
              className="text-xs font-semibold text-rose-600 hover:text-rose-700 underline"
            >
              Browse More Menu
            </Link>
          </div>
        </div>
      ) : (
        /* Order Checkout Form Layout */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Checkout Details Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-7 space-y-8">
            
            {/* Customer Details */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-blush/80 shadow-soft space-y-5">
              <h2 className="font-serif text-xl font-bold text-chocolate border-b border-blush/60 pb-3 flex items-center gap-2">
                <span>1. Contact Information</span>
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-chocolate/80 mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    name="customerName"
                    value={formData.customerName}
                    onChange={handleChange}
                    placeholder="e.g. Aadhya Sharma"
                    className={`w-full px-4 py-3 rounded-xl bg-ivory border text-sm text-chocolate outline-none transition-all ${
                      errors.customerName ? 'border-rose-500 ring-1 ring-rose-300' : 'border-blush focus:border-rose-400'
                    }`}
                  />
                  {errors.customerName && (
                    <p className="text-xs text-rose-600 mt-1">{errors.customerName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-chocolate/80 mb-1.5">
                    WhatsApp Mobile Number *
                  </label>
                  <input
                    type="tel"
                    name="customerPhone"
                    value={formData.customerPhone}
                    onChange={handleChange}
                    placeholder="e.g. +91 98765 43210"
                    className={`w-full px-4 py-3 rounded-xl bg-ivory border text-sm text-chocolate outline-none transition-all ${
                      errors.customerPhone ? 'border-rose-500 ring-1 ring-rose-300' : 'border-blush focus:border-rose-400'
                    }`}
                  />
                  {errors.customerPhone && (
                    <p className="text-xs text-rose-600 mt-1">{errors.customerPhone}</p>
                  )}
                  <p className="text-[11px] text-chocolate/60 mt-1">
                    The baker will communicate directly with this WhatsApp number for confirmation.
                  </p>
                </div>
              </div>
            </div>

            {/* Fulfilment & Timing */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-blush/80 shadow-soft space-y-5">
              <h2 className="font-serif text-xl font-bold text-chocolate border-b border-blush/60 pb-3 flex items-center gap-2">
                <span>2. Fulfillment & Schedule</span>
              </h2>

              {/* Fulfilment Toggle */}
              <div className="space-y-3">
                <label className="block text-xs font-semibold uppercase tracking-wider text-chocolate/80">
                  Select Order Fulfillment *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, fulfillmentType: 'pickup' })}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      formData.fulfillmentType === 'pickup'
                        ? 'bg-chocolate text-ivory border-chocolate shadow-sm'
                        : 'bg-ivory hover:bg-blush/40 text-chocolate border-blush'
                    }`}
                  >
                    <p className="font-semibold text-sm">Studio Self-Pickup</p>
                    <p className={`text-xs mt-1 ${formData.fulfillmentType === 'pickup' ? 'text-cream/80' : 'text-chocolate/60'}`}>
                      Free collection from our boutique kitchen in {BAKERY_CONFIG.location.city}.
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, fulfillmentType: 'delivery' })}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      formData.fulfillmentType === 'delivery'
                        ? 'bg-chocolate text-ivory border-chocolate shadow-sm'
                        : 'bg-ivory hover:bg-blush/40 text-chocolate border-blush'
                    }`}
                  >
                    <p className="font-semibold text-sm">Doorstep Delivery</p>
                    <p className={`text-xs mt-1 ${formData.fulfillmentType === 'delivery' ? 'text-cream/80' : 'text-chocolate/60'}`}>
                      Delivered via temperature-safe courier (Charges billed at actuals).
                    </p>
                  </button>
                </div>
              </div>

              {/* Delivery Address if delivery */}
              {formData.fulfillmentType === 'delivery' && (
                <div className="space-y-1.5 animate-fadeIn">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-chocolate/80">
                    Full Delivery Address *
                  </label>
                  <textarea
                    rows={3}
                    name="deliveryAddress"
                    value={formData.deliveryAddress}
                    onChange={handleChange}
                    placeholder="Apartment/House number, Street, Area landmark, Pincode"
                    className={`w-full px-4 py-3 rounded-xl bg-ivory border text-sm text-chocolate outline-none transition-all ${
                      errors.deliveryAddress ? 'border-rose-500 ring-1 ring-rose-300' : 'border-blush focus:border-rose-400'
                    }`}
                  />
                  {errors.deliveryAddress && (
                    <p className="text-xs text-rose-600 mt-1">{errors.deliveryAddress}</p>
                  )}
                </div>
              )}

              {/* Date and Time Pickers */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-chocolate/80 mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-rose-500" />
                    <span>Preferred Date *</span>
                  </label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    min={new Date(Date.now() + 86400000).toISOString().split('T')[0]} // Min tomorrow
                    className={`w-full px-4 py-3 rounded-xl bg-ivory border text-sm text-chocolate outline-none ${
                      errors.preferredDate ? 'border-rose-500' : 'border-blush focus:border-rose-400'
                    }`}
                  />
                  {errors.preferredDate && (
                    <p className="text-xs text-rose-600 mt-1">{errors.preferredDate}</p>
                  )}
                  <p className="text-[10px] text-chocolate/60 mt-1">
                    *Requires minimum 24 hours advance baking notice.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-chocolate/80 mb-1.5 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-rose-500" />
                    <span>Preferred Time Slot</span>
                  </label>
                  <select
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-ivory border border-blush text-sm text-chocolate outline-none focus:border-rose-400 cursor-pointer"
                  >
                    <option value="">Select a convenient time window</option>
                    <option value="11:00 AM – 1:00 PM">Morning (11:00 AM – 1:00 PM)</option>
                    <option value="2:00 PM – 4:00 PM">Afternoon (2:00 PM – 4:00 PM)</option>
                    <option value="4:00 PM – 6:30 PM">Evening (4:00 PM – 6:30 PM)</option>
                    <option value="Flexible / Anytime">Flexible during studio hours</option>
                  </select>
                </div>
              </div>

              {/* Special Instructions */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-chocolate/80 mb-1.5">
                  Special Instructions / Cake Inscription Plaque (Optional)
                </label>
                <textarea
                  rows={2}
                  name="specialInstructions"
                  value={formData.specialInstructions}
                  onChange={handleChange}
                  placeholder="e.g. Please pipe 'Happy 25th Anniversary' or note specific dietary requests."
                  className="w-full px-4 py-3 rounded-xl bg-ivory border border-blush text-sm text-chocolate outline-none focus:border-rose-400"
                />
              </div>

            </div>

            {/* Disclaimer Alert */}
            <div className="bg-blush/30 border border-rose-300/50 rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 text-xs text-chocolate/80">
              <Info className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="font-semibold text-chocolate">How WhatsApp Ordering Works:</p>
                <p>{BAKERY_CONFIG.orderDisclaimer}</p>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-2xl bg-[#25D366] hover:bg-[#1ebc59] text-white text-base font-semibold shadow-soft hover:shadow-soft-lg transition-all flex items-center justify-center gap-2 group"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Review & Submit Order on WhatsApp</span>
            </button>

          </form>

          {/* Right Column: Order Items Summary */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-blush shadow-soft space-y-5 sticky top-28">
              <div className="flex items-center justify-between border-b border-blush/60 pb-3">
                <h3 className="font-serif text-lg font-bold text-chocolate">
                  Order Items ({totalItemsCount})
                </h3>
                <Link to="/cart" className="text-xs text-rose-600 hover:underline">
                  Edit Basket
                </Link>
              </div>

              {/* Items List */}
              <div className="space-y-3.5 max-h-80 overflow-y-auto pr-1">
                {cartItems.map((item) => (
                  <div key={item.cartItemId} className="flex items-center justify-between text-xs gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-cream overflow-hidden flex-shrink-0 border border-blush/40">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="font-bold text-chocolate line-clamp-1">{item.name}</p>
                        {item.selectedVariant && (
                          <p className="text-[11px] text-chocolate/60">{item.selectedVariant.label}</p>
                        )}
                        <p className="text-chocolate/60">Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <span className="font-bold text-chocolate whitespace-nowrap">
                      {formatCurrency(item.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Total Calculation */}
              <div className="pt-4 border-t border-blush/60 space-y-2 text-sm">
                <div className="flex justify-between text-chocolate/70 text-xs">
                  <span>Subtotal</span>
                  <span className="font-semibold text-chocolate">{formatCurrency(subtotal)}</span>
                </div>
                <div className="flex justify-between text-chocolate/70 text-xs">
                  <span>Estimated Delivery</span>
                  <span className="text-right italic">Calculated upon confirmation</span>
                </div>
                <div className="flex justify-between items-baseline pt-2 border-t border-blush/40">
                  <span className="font-bold text-chocolate">Estimated Total</span>
                  <span className="font-serif text-2xl font-bold text-chocolate">
                    {formatCurrency(subtotal)}
                  </span>
                </div>
              </div>

              {/* Studio Info Pill */}
              <div className="p-3 rounded-xl bg-cream/70 border border-blush text-[11px] text-chocolate/75">
                <p className="font-semibold text-chocolate">Pickup Studio:</p>
                <p>{BAKERY_CONFIG.location.title}, {BAKERY_CONFIG.location.city}</p>
              </div>

            </div>
          </div>

        </div>
      )}

    </div>
  );
};
