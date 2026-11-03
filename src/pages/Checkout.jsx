import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, MessageCircle, Calendar, Clock, 
  CheckCircle2, AlertCircle, ExternalLink 
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { BAKERY_CONFIG } from '../data/config';
import { formatCurrency } from '../utils/currency';
import { generateCartOrderWhatsAppUrl } from '../utils/whatsapp';
import { createOrder } from '../services/api';
import { NouveauArchCrest, NouveauFloralDivider, NouveauCorner } from '../components/ArtNouveauDecorations';

export const Checkout = () => {
  const { cartItems, subtotal, totalItemsCount, clearCart } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    customerName: '',
    customerPhone: '',
    fulfillmentType: 'pickup',
    deliveryAddress: '',
    preferredDate: '',
    preferredTime: '',
    specialInstructions: '',
  });

  const [errors, setErrors] = useState({});
  const [submittedWhatsAppUrl, setSubmittedWhatsAppUrl] = useState(null);

  if (cartItems.length === 0 && !submittedWhatsAppUrl) {
    return (
      <div className="py-24 max-w-md mx-auto px-4 text-center space-y-4">
        <h2 className="font-serif text-2xl font-bold text-espresso">Your basket is empty</h2>
        <p className="text-sm font-serif text-espresso/70">
          Please add creations to your basket before checking out.
        </p>
        <Link
          to="/menu"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full gold-button text-espresso text-xs font-serif font-bold uppercase tracking-wider shadow-md"
        >
          <ArrowLeft className="w-4 h-4 text-espresso" />
          <span>Browse Our Menu</span>
        </Link>
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.customerName.trim()) {
      newErrors.customerName = 'Please enter your full name';
    }
    if (!formData.customerPhone.trim() || formData.customerPhone.length < 8) {
      newErrors.customerPhone = 'Please enter a valid WhatsApp number';
    }
    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select your preferred date';
    }
    if (formData.fulfillmentType === 'delivery' && !formData.deliveryAddress.trim()) {
      newErrors.deliveryAddress = 'Delivery address is required for doorstep delivery';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      window.scrollTo({ top: 150, behavior: 'smooth' });
      return;
    }

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
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="py-10 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      
      {/* Header Cartouche */}
      <div className="text-center max-w-xl mx-auto space-y-2">
        <NouveauArchCrest className="w-14 h-7 text-gold-500 mx-auto" />
        <span className="text-xs uppercase font-serif tracking-[0.3em] text-gold-700 font-bold block">
          Finalisation de Commande
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-normal text-espresso">
          Checkout & Order Confirmation
        </h1>
        <NouveauFloralDivider className="w-44 h-5 text-gold-500 my-1 mx-auto" />
      </div>

      <div className="flex items-center justify-between pb-3 border-b border-gold-500/30">
        <Link
          to="/cart"
          className="inline-flex items-center gap-1.5 text-xs font-serif font-bold uppercase tracking-wider text-gold-700 hover:text-gold-800 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Basket</span>
        </Link>
        <span className="text-xs font-serif text-espresso/60">
          Studio: North Town Apartment, Perambur, Chennai
        </span>
      </div>

      {submittedWhatsAppUrl ? (
        <div className="max-w-2xl mx-auto bg-white rounded-[36px] p-8 sm:p-12 border border-gold-500 shadow-nouveau-lg text-center space-y-6 relative">
          <NouveauCorner position="top-left" className="absolute top-4 left-4 w-10 h-10 text-gold-400" />
          <NouveauCorner position="top-right" className="absolute top-4 right-4 w-10 h-10 text-gold-400" />

          <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-400 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-serif uppercase tracking-widest text-gold-700 font-bold">
              Order Registered
            </span>
            <h2 className="font-serif text-3xl font-bold text-espresso">
              Order Dispatched to WhatsApp & Database
            </h2>
            <p className="text-sm font-serif text-espresso/80 max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-espresso">{formData.customerName}</strong>! Your order has been saved in our bakery system and pre-filled in WhatsApp.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-parchment-100 border border-gold-500/40 text-xs font-serif text-espresso space-y-3">
            <p>If WhatsApp did not open automatically, click the button below to send your order summary:</p>
            <a
              href={submittedWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white font-serif font-bold tracking-wider uppercase shadow-md transition-all text-xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Open WhatsApp & Send Order</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-left flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
            <div className="text-xs font-serif text-amber-900 space-y-1">
              <p className="font-bold">Confirmation Notice:</p>
              <p>
                Sending your WhatsApp message submits your request. Our baker at North Town Apartment will review slot availability, confirm delivery details, and reply to finalize your booking.
              </p>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => {
                clearCart();
                navigate('/');
              }}
              className="w-full sm:w-auto px-7 py-3 rounded-full gold-button text-espresso text-xs font-serif font-bold tracking-widest uppercase transition-colors shadow-md"
            >
              Complete & Return Home
            </button>
            <Link
              to="/menu"
              className="w-full sm:w-auto px-7 py-3 rounded-full bg-white hover:bg-gold-50 text-espresso border-2 border-gold-600 text-xs font-serif font-bold tracking-wider uppercase transition-colors text-center shadow-xs"
            >
              Browse More Treats
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-7 space-y-6">
            
            {/* Customer Details */}
            <div className="bg-white rounded-[32px] p-6 sm:p-8 border border-gold-500/40 shadow-nouveau space-y-5">
              <h2 className="font-serif text-xl font-bold text-espresso border-b border-gold-500/25 pb-3">
                1. Customer Details
              </h2>

              <div className="space-y-4 font-serif">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-espresso mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    name="customerName"
                    value={formData.customerName}
                    onChange={handleChange}
                    placeholder="e.g. Aadhya Sharma"
                    className={`w-full px-4 py-3 rounded-xl bg-parchment-50 border text-sm text-espresso outline-none ${
                      errors.customerName ? 'border-rose-500' : 'border-gold-500/40 focus:border-gold-600'
                    }`}
                  />
                  {errors.customerName && <p className="text-xs text-rose-600 mt-1">{errors.customerName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-espresso mb-1.5">
                    WhatsApp Mobile Number *
                  </label>
                  <input
                    type="tel"
                    name="customerPhone"
                    value={formData.customerPhone}
                    onChange={handleChange}
                    placeholder="e.g. +91 98415 11011"
                    className={`w-full px-4 py-3 rounded-xl bg-parchment-50 border text-sm text-espresso outline-none ${
                      errors.customerPhone ? 'border-rose-500' : 'border-gold-500/40 focus:border-gold-600'
                    }`}
                  />
                  {errors.customerPhone && <p className="text-xs text-rose-600 mt-1">{errors.customerPhone}</p>}
                </div>
              </div>
            </div>

            {/* Fulfilment & Timing */}
            <div className="bg-white rounded-[32px] p-6 sm:p-8 border border-gold-500/40 shadow-nouveau space-y-5">
              <h2 className="font-serif text-xl font-bold text-espresso border-b border-gold-500/25 pb-3">
                2. Fulfillment & Schedule
              </h2>

              <div className="space-y-3 font-serif">
                <label className="block text-xs font-bold uppercase tracking-wider text-espresso">
                  Select Order Fulfillment *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, fulfillmentType: 'pickup' })}
                    className={`p-4 rounded-2xl border-2 text-left transition-all ${
                      formData.fulfillmentType === 'pickup'
                        ? 'bg-espresso text-gold-300 border-gold-400 shadow-md font-semibold'
                        : 'bg-white hover:bg-gold-50 text-espresso border-gold-500/40 shadow-xs'
                    }`}
                  >
                    <p className="font-bold text-sm">Studio Self-Pickup</p>
                    <p className={`text-xs mt-1 ${formData.fulfillmentType === 'pickup' ? 'text-gold-100' : 'text-espresso/70'}`}>
                      Free collection from Tower 4, North Town Apartment, Perambur.
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, fulfillmentType: 'delivery' })}
                    className={`p-4 rounded-2xl border-2 text-left transition-all ${
                      formData.fulfillmentType === 'delivery'
                        ? 'bg-espresso text-gold-300 border-gold-400 shadow-md font-semibold'
                        : 'bg-white hover:bg-gold-50 text-espresso border-gold-500/40 shadow-xs'
                    }`}
                  >
                    <p className="font-bold text-sm">Chennai Doorstep Delivery</p>
                    <p className={`text-xs mt-1 ${formData.fulfillmentType === 'delivery' ? 'text-gold-100' : 'text-espresso/70'}`}>
                      Delivered safely via AC courier (Charges at actuals).
                    </p>
                  </button>
                </div>
              </div>

              {formData.fulfillmentType === 'delivery' && (
                <div className="space-y-1.5 font-serif">
                  <label className="block text-xs font-bold uppercase tracking-wider text-espresso">
                    Full Chennai Delivery Address *
                  </label>
                  <textarea
                    rows={3}
                    name="deliveryAddress"
                    value={formData.deliveryAddress}
                    onChange={handleChange}
                    placeholder="Apartment/House, Street, Area landmark, Chennai Pincode"
                    className={`w-full px-4 py-3 rounded-xl bg-parchment-50 border text-sm font-serif text-espresso outline-none ${
                      errors.deliveryAddress ? 'border-rose-500' : 'border-gold-500/40 focus:border-gold-600'
                    }`}
                  />
                  {errors.deliveryAddress && <p className="text-xs text-rose-600 mt-1">{errors.deliveryAddress}</p>}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-serif">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-espresso mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-gold-600" />
                    <span>Preferred Date *</span>
                  </label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    min={new Date(Date.now() + 86400000).toISOString().split('T')[0]}
                    className={`w-full px-4 py-3 rounded-xl bg-parchment-50 border text-sm text-espresso outline-none ${
                      errors.preferredDate ? 'border-rose-500' : 'border-gold-500/40 focus:border-gold-600'
                    }`}
                  />
                  {errors.preferredDate && <p className="text-xs text-rose-600 mt-1">{errors.preferredDate}</p>}
                  <p className="text-[10px] text-espresso/60 mt-1">*Requires minimum 24 hours baking notice.</p>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-espresso mb-1.5 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-gold-600" />
                    <span>Preferred Time Window</span>
                  </label>
                  <select
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-parchment-50 border border-gold-500/40 text-sm font-serif text-espresso outline-none focus:border-gold-600 cursor-pointer"
                  >
                    <option value="">Select a convenient time window</option>
                    <option value="11:00 AM – 1:00 PM">Morning (11:00 AM – 1:00 PM)</option>
                    <option value="2:00 PM – 4:00 PM">Afternoon (2:00 PM – 4:00 PM)</option>
                    <option value="4:00 PM – 6:30 PM">Evening (4:00 PM – 6:30 PM)</option>
                    <option value="Flexible / Anytime">Flexible during studio hours</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-serif font-bold uppercase tracking-wider text-espresso mb-1.5">
                  Special Instructions / Plaque Inscription (Optional)
                </label>
                <textarea
                  rows={2}
                  name="specialInstructions"
                  value={formData.specialInstructions}
                  onChange={handleChange}
                  placeholder="e.g. Please pipe 'Happy 25th Anniversary' on chocolate plaque."
                  className="w-full px-4 py-3 rounded-xl bg-parchment-50 border border-gold-500/40 text-sm font-serif text-espresso outline-none focus:border-gold-600"
                />
              </div>

            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-full gold-button text-espresso text-xs font-serif font-bold tracking-widest uppercase transition-all shadow-md flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-espresso fill-current" />
              <span>Submit Order to WhatsApp & Bakery System</span>
            </button>

          </form>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-[32px] p-6 sm:p-7 border border-gold-500/40 shadow-nouveau space-y-5 sticky top-28">
              <div className="flex items-center justify-between border-b border-gold-500/30 pb-3">
                <h3 className="font-serif text-lg font-bold text-espresso">
                  Cart Items ({totalItemsCount})
                </h3>
                <Link to="/cart" className="text-xs font-serif font-bold text-gold-700 hover:underline uppercase tracking-wider">
                  Edit Cart
                </Link>
              </div>

              <div className="space-y-3.5 max-h-80 overflow-y-auto pr-1">
                {cartItems.map((item) => (
                  <div key={item.cartItemId} className="flex items-center justify-between text-xs font-serif gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-parchment-100 overflow-hidden flex-shrink-0 border border-gold-500/30">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="font-bold text-espresso line-clamp-1">{item.name}</p>
                        {item.selectedVariant && (
                          <p className="text-[11px] text-espresso/60 italic">{item.selectedVariant.label}</p>
                        )}
                        <p className="text-espresso/60">Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <span className="font-bold text-espresso whitespace-nowrap">
                      {formatCurrency(item.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-gold-500/30 space-y-2 text-xs font-serif">
                <div className="flex justify-between text-espresso/70">
                  <span>Subtotal</span>
                  <span className="font-bold text-espresso">{formatCurrency(subtotal)}</span>
                </div>
                <div className="flex justify-between text-espresso/70">
                  <span>Baking Standard</span>
                  <span className="font-bold text-espresso">Fresh to Order</span>
                </div>
                <div className="flex justify-between items-baseline pt-2 border-t border-gold-500/20">
                  <span className="font-bold text-espresso">Estimated Total</span>
                  <span className="font-serif text-2xl font-bold text-espresso">
                    {formatCurrency(subtotal)}
                  </span>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-parchment-100 border border-gold-500/35 text-[11px] font-serif text-espresso/80">
                <p className="font-bold text-espresso">Pickup Studio:</p>
                <p>Flat 803, Tower 4, North Town Apartment, Perambur, Chennai</p>
              </div>

            </div>
          </div>

        </div>
      )}

    </div>
  );
};
