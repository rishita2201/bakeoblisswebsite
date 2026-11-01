import React, { useState } from 'react';
import { 
  Sparkles, Calendar, Heart, Camera, MessageCircle, 
  CheckCircle2, Info, ArrowRight, HelpCircle 
} from 'lucide-react';
import { BAKERY_CONFIG } from '../data/config';
import { generateCustomCakeWhatsAppUrl } from '../utils/whatsapp';
import { createCustomInquiry } from '../services/api';

export const CustomOrders = () => {
  const [formData, setFormData] = useState({
    customerName: '',
    customerPhone: '',
    occasion: '',
    cakeFlavor: '',
    cakeSize: '',
    preferredDesign: '',
    referenceImageUrl: '',
    requiredDate: '',
    additionalNotes: '',
  });

  const [errors, setErrors] = useState({});
  const [submittedUrl, setSubmittedUrl] = useState(null);

  // Gallery of bespoke cake styles for inspiration
  const inspirationGallery = [
    {
      title: 'Botanical & Fresh Floral',
      description: 'Organic garden roses, delicate eucalyptus sprigs, and subtle pastel textures.',
      image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Vintage Lambeth Piping',
      description: 'Intricate royal frills, romantic overpiping, maraschino cherries, and nostalgic ribbons.',
      image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Decadent Chocolate Drip',
      description: 'Belgian ganache dripping over tall tiers, loaded with brownies and gold leaf.',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Minimalist Modern Buttercream',
      description: 'Textured stucco knife strokes, monochrome palettes, and modern typography plaques.',
      image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=600&q=80',
    },
  ];

  // Flavour inspirations
  const popularFlavors = [
    'Belgian Dark Chocolate & Raspberry',
    'Madagascar Vanilla Bean & Strawberry Compote',
    'Lotus Biscoff & Salted Caramel',
    'Zesty Lemon Curd & Elderflower',
    'Red Velvet with Whipped Cream Cheese',
    'Rich Nutella & Roasted Hazelnut',
    'Custom / Other (discuss with baker)'
  ];

  // Size guidelines
  const sizeOptions = [
    '500g (Serves 4 - 6 guests)',
    '1 kg (Serves 8 - 12 guests)',
    '1.5 kg (Serves 12 - 16 guests)',
    '2 kg (Serves 18 - 22 guests)',
    'Two-Tier 2.5 kg (Serves 20 - 25 guests)',
    'Two-Tier 3.5 kg+ (Serves 30+ guests)',
    'Not sure (Need baker recommendation)'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const errs = {};
    if (!formData.customerName.trim()) errs.customerName = 'Please provide your name';
    if (!formData.customerPhone.trim() || formData.customerPhone.length < 8) {
      errs.customerPhone = 'Valid WhatsApp number is required';
    }
    if (!formData.occasion.trim()) errs.occasion = 'Please specify the occasion';
    if (!formData.requiredDate) errs.requiredDate = 'Please select your required celebration date';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      window.scrollTo({ top: 400, behavior: 'smooth' });
      return;
    }

    // Save inquiry to backend SQLite DB / API
    createCustomInquiry(formData).catch((err) => console.warn('Inquiry save notice:', err));

    const url = generateCustomCakeWhatsAppUrl(formData);
    setSubmittedUrl(url);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="py-10 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blush/60 text-rose-700 text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Bespoke Celebration Studio</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-chocolate leading-tight">
          Bespoke & Custom Cakes
        </h1>
        <p className="text-sm sm:text-base text-chocolate/75 leading-relaxed font-light">
          Every celebration is singular. Whether you are envisioning a whimsical first birthday, a romantic botanical wedding cake, or an anniversary centerpiece, our home studio crafts custom designs tailored precisely to your story.
        </p>
      </div>

      {/* Inspiration Gallery */}
      <section className="space-y-6">
        <div className="text-center space-y-1">
          <span className="text-xs uppercase font-bold tracking-widest text-rose-500">Design Portfolio</span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-chocolate">
            Aesthetic Styles We Love To Create
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {inspirationGallery.map((style, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden border border-blush/70 shadow-soft hover:shadow-soft-lg transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden bg-cream">
                <img
                  src={style.image}
                  alt={style.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-4 space-y-1">
                <h3 className="font-serif text-base font-bold text-chocolate">{style.title}</h3>
                <p className="text-xs text-chocolate/70 leading-relaxed">{style.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Notice & How it Works Banner */}
      <div className="bg-cream/80 border border-blush rounded-3xl p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-chocolate/80">
        <div className="space-y-1.5">
          <h4 className="font-bold text-chocolate text-sm flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-rose-500" />
            <span>Advance Notice</span>
          </h4>
          <p>
            Custom tiered and sculpted cakes require a minimum of <strong>48 to 72 hours</strong> notice for design preparation and baking slots.
          </p>
        </div>
        <div className="space-y-1.5">
          <h4 className="font-bold text-chocolate text-sm flex items-center gap-1.5">
            <Heart className="w-4 h-4 text-rose-500" />
            <span>Taste Before Everything</span>
          </h4>
          <p>
            We don't use fondants that taste like sugar paste. We specialize in silky Swiss meringue buttercream, velvet chocolate ganache, and light sponge layers.
          </p>
        </div>
        <div className="space-y-1.5">
          <h4 className="font-bold text-chocolate text-sm flex items-center gap-1.5">
            <MessageCircle className="w-4 h-4 text-rose-500" />
            <span>Direct Baker Consultation</span>
          </h4>
          <p>
            Submitting this form connects you directly to our baker on WhatsApp, where you can share reference pictures and fine-tune flavors.
          </p>
        </div>
      </div>

      {/* Main Form or Submission View */}
      {submittedUrl ? (
        <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 sm:p-10 border border-blush shadow-soft-xl text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-9 h-9" />
          </div>
          <div className="space-y-2">
            <span className="text-xs uppercase font-bold tracking-widest text-rose-500">
              Inquiry Drafted
            </span>
            <h2 className="font-serif text-3xl font-bold text-chocolate">
              Your Custom Cake Inquiry is Ready
            </h2>
            <p className="text-sm text-chocolate/80">
              Thank you, <strong>{formData.customerName}</strong>! Please click below to send your cake request on WhatsApp.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-cream border border-blush text-xs space-y-3">
            <a
              href={submittedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white font-semibold shadow-md hover:bg-[#1ebc59] transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Send Custom Cake Request via WhatsApp</span>
            </a>
          </div>

          <button
            type="button"
            onClick={() => setSubmittedUrl(null)}
            className="text-xs text-rose-600 hover:text-rose-700 underline font-semibold"
          >
            Edit Custom Order Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-blush shadow-soft space-y-8">
          
          <div className="border-b border-blush/60 pb-4">
            <h2 className="font-serif text-2xl font-bold text-chocolate">
              Custom Cake Inquiry Form
            </h2>
            <p className="text-xs text-chocolate/70 mt-1">
              Fill in what you envision. We will reply with availability, flavor recommendations, and an exact quotation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Customer Name */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-chocolate/80 mb-1.5">
                Your Name *
              </label>
              <input
                type="text"
                name="customerName"
                value={formData.customerName}
                onChange={handleChange}
                placeholder="e.g. Diya Sen"
                className={`w-full px-4 py-3 rounded-xl bg-ivory border text-sm text-chocolate outline-none ${
                  errors.customerName ? 'border-rose-500' : 'border-blush focus:border-rose-400'
                }`}
              />
              {errors.customerName && <p className="text-xs text-rose-600 mt-1">{errors.customerName}</p>}
            </div>

            {/* WhatsApp Contact */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-chocolate/80 mb-1.5">
                WhatsApp Number *
              </label>
              <input
                type="tel"
                name="customerPhone"
                value={formData.customerPhone}
                onChange={handleChange}
                placeholder="e.g. +91 98765 43210"
                className={`w-full px-4 py-3 rounded-xl bg-ivory border text-sm text-chocolate outline-none ${
                  errors.customerPhone ? 'border-rose-500' : 'border-blush focus:border-rose-400'
                }`}
              />
              {errors.customerPhone && <p className="text-xs text-rose-600 mt-1">{errors.customerPhone}</p>}
            </div>

            {/* Occasion */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-chocolate/80 mb-1.5">
                Occasion *
              </label>
              <input
                type="text"
                name="occasion"
                value={formData.occasion}
                onChange={handleChange}
                placeholder="e.g. 1st Birthday, Wedding, Baby Shower, Farewell"
                className={`w-full px-4 py-3 rounded-xl bg-ivory border text-sm text-chocolate outline-none ${
                  errors.occasion ? 'border-rose-500' : 'border-blush focus:border-rose-400'
                }`}
              />
              {errors.occasion && <p className="text-xs text-rose-600 mt-1">{errors.occasion}</p>}
            </div>

            {/* Required Date */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-chocolate/80 mb-1.5">
                Celebration Date Required *
              </label>
              <input
                type="date"
                name="requiredDate"
                value={formData.requiredDate}
                onChange={handleChange}
                min={new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0]} // Min 48h notice
                className={`w-full px-4 py-3 rounded-xl bg-ivory border text-sm text-chocolate outline-none ${
                  errors.requiredDate ? 'border-rose-500' : 'border-blush focus:border-rose-400'
                }`}
              />
              {errors.requiredDate && <p className="text-xs text-rose-600 mt-1">{errors.requiredDate}</p>}
            </div>

            {/* Cake Flavour */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-chocolate/80 mb-1.5">
                Preferred Flavour
              </label>
              <select
                name="cakeFlavor"
                value={formData.cakeFlavor}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-ivory border border-blush text-sm text-chocolate outline-none focus:border-rose-400 cursor-pointer"
              >
                <option value="">Select a preferred flavour or choose later</option>
                {popularFlavors.map((fl) => (
                  <option key={fl} value={fl}>{fl}</option>
                ))}
              </select>
            </div>

            {/* Cake Size */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-chocolate/80 mb-1.5">
                Estimated Size / Guest Count
              </label>
              <select
                name="cakeSize"
                value={formData.cakeSize}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-ivory border border-blush text-sm text-chocolate outline-none focus:border-rose-400 cursor-pointer"
              >
                <option value="">Select estimated size or guest count</option>
                {sizeOptions.map((sz) => (
                  <option key={sz} value={sz}>{sz}</option>
                ))}
              </select>
            </div>

          </div>

          {/* Preferred Design / Theme Idea */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-chocolate/80 mb-1.5">
              Design Preference & Theme Description
            </label>
            <textarea
              rows={3}
              name="preferredDesign"
              value={formData.preferredDesign}
              onChange={handleChange}
              placeholder="e.g. Pastel peach and ivory palette with dried bunny tails, pearl borders, and vintage cursive text 'Thirty & Thriving'."
              className="w-full px-4 py-3 rounded-xl bg-ivory border border-blush text-sm text-chocolate outline-none focus:border-rose-400"
            />
          </div>

          {/* Reference Image URL (Optional) */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-chocolate/80 mb-1.5 flex items-center gap-1.5">
              <Camera className="w-3.5 h-3.5 text-rose-500" />
              <span>Reference Image Link / Pinterest / Instagram URL (Optional)</span>
            </label>
            <input
              type="url"
              name="referenceImageUrl"
              value={formData.referenceImageUrl}
              onChange={handleChange}
              placeholder="https://pinterest.com/pin/... or photo link (You can also send pictures directly on WhatsApp)"
              className="w-full px-4 py-3 rounded-xl bg-ivory border border-blush text-sm text-chocolate outline-none focus:border-rose-400"
            />
          </div>

          {/* Additional Notes */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-chocolate/80 mb-1.5">
              Dietary Preferences / Special Instructions
            </label>
            <textarea
              rows={2}
              name="additionalNotes"
              value={formData.additionalNotes}
              onChange={handleChange}
              placeholder="e.g. Must be 100% eggless, low sugar, or nut allergy notes."
              className="w-full px-4 py-3 rounded-xl bg-ivory border border-blush text-sm text-chocolate outline-none focus:border-rose-400"
            />
          </div>

          {/* Submit */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-4 rounded-2xl bg-chocolate hover:bg-chocolate-600 text-ivory text-sm font-semibold tracking-wide transition-all shadow-soft flex items-center justify-center gap-2 group"
            >
              <MessageCircle className="w-4 h-4 text-rose-300 group-hover:scale-110 transition-transform" />
              <span>Submit Custom Cake Inquiry via WhatsApp</span>
            </button>
            <p className="text-center text-[11px] text-chocolate/60 mt-3">
              This sends your details to our baker on WhatsApp. We typically respond within 2 to 4 hours with design suggestions and a final quote.
            </p>
          </div>

        </form>
      )}

    </div>
  );
};
