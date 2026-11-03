import React, { useState } from 'react';
import { Calendar, Camera, MessageCircle, CheckCircle2 } from 'lucide-react';
import { BAKERY_CONFIG } from '../data/config';
import { generateCustomCakeWhatsAppUrl } from '../utils/whatsapp';
import { createCustomInquiry } from '../services/api';
import { NouveauFloralDivider, NouveauArchCrest, NouveauCorner } from '../components/ArtNouveauDecorations';

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

  const inspirationGallery = [
    {
      title: 'Botanical & Fresh Floral',
      description: 'Organic garden roses, delicate eucalyptus sprigs & subtle pastel textures.',
      image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Vintage Lambeth Piping',
      description: 'Intricate royal frills, romantic overpiping, maraschino cherries & nostalgic ribbons.',
      image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Decadent Chocolate Drip',
      description: 'Belgian ganache dripping over tall tiers, loaded with brownies & edible gold leaf.',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Minimalist Modern Buttercream',
      description: 'Textured stucco knife strokes, monochrome palettes & calligraphy typography.',
      image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=600&q=80',
    },
  ];

  const popularFlavors = [
    'Belgian Dark Chocolate & Raspberry',
    'Madagascar Vanilla Bean & Strawberry Compote',
    'Lotus Biscoff & Salted Caramel',
    'Zesty Lemon Curd & Elderflower',
    'Red Velvet with Whipped Cream Cheese',
    'Rich Nutella & Roasted Hazelnut',
    'Custom / Other (discuss with baker)'
  ];

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
    if (!formData.occasion.trim()) errs.occasion = 'Please specify the celebration occasion';
    if (!formData.requiredDate) errs.requiredDate = 'Please select celebration date required';
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

    createCustomInquiry(formData).catch((err) => console.warn('Inquiry notice:', err));

    const url = generateCustomCakeWhatsAppUrl(formData);
    setSubmittedUrl(url);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="py-10 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header Cartouche */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <NouveauArchCrest className="w-16 h-8 text-gold-500 mx-auto" />
        <span className="text-xs uppercase font-serif tracking-[0.3em] text-gold-700 font-bold block">
          Made Specially For You
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-espresso leading-tight">
          Custom Cake Orders
        </h1>
        <NouveauFloralDivider className="w-56 h-6 text-gold-500 my-2 mx-auto" />
        <p className="text-sm sm:text-base font-serif text-espresso/80 leading-relaxed font-light">
          Order a special custom cake tailored to your celebration, favourite flavours, and design in Chennai.
        </p>
      </div>

      {/* Inspiration Gallery */}
      <section className="space-y-6">
        <div className="text-center space-y-1">
          <span className="text-xs font-serif uppercase tracking-[0.25em] text-gold-700 font-bold block">Design Inspiration</span>
          <h2 className="font-serif text-2xl sm:text-3xl font-normal text-espresso">
            Cake Styles We Love To Create
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {inspirationGallery.map((style, index) => (
            <div
              key={index}
              className="group bg-white rounded-[32px] overflow-hidden border border-gold-500/40 shadow-nouveau hover:shadow-nouveau-lg transition-all p-2"
            >
              <div className="aspect-[4/3] rounded-[24px] overflow-hidden bg-parchment-200">
                <img
                  src={style.image}
                  alt={style.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-3.5 space-y-1">
                <h3 className="font-serif text-base font-bold text-espresso">{style.title}</h3>
                <p className="text-xs font-serif text-espresso/70 leading-relaxed">{style.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Advance Notice Box */}
      <div className="bg-white border-2 border-gold-500/40 rounded-[32px] p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm font-serif text-espresso shadow-md">
        <div className="space-y-1.5">
          <h4 className="font-bold text-espresso text-base flex items-center gap-1.5">
            <span className="text-gold-600">✦</span>
            <span>Advance Notice</span>
          </h4>
          <p className="text-espresso/90 leading-relaxed">Custom tiered and decorated cakes require a minimum of <strong className="font-bold text-espresso">48 to 72 hours</strong> advance notice so we can bake and decorate fresh.</p>
        </div>
        <div className="space-y-1.5">
          <h4 className="font-bold text-espresso text-base flex items-center gap-1.5">
            <span className="text-gold-600">✦</span>
            <span>Pure Dairy Butter</span>
          </h4>
          <p className="text-espresso/90 leading-relaxed">Every cake is prepared with pure dairy butter and rich chocolate from scratch. Zero gelatin, zero eggs.</p>
        </div>
        <div className="space-y-1.5">
          <h4 className="font-bold text-espresso text-base flex items-center gap-1.5">
            <span className="text-gold-600">✦</span>
            <span>Bakery Location</span>
          </h4>
          <p className="text-espresso/90 leading-relaxed">Tower 4, North Town Apartment, Perambur, Chennai. Self-pickup or safe doorstep delivery.</p>
        </div>
      </div>

      {/* Main Commission Form */}
      {submittedUrl ? (
        <div className="max-w-2xl mx-auto bg-white rounded-[36px] p-8 sm:p-12 border border-gold-500 shadow-nouveau-lg text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-400 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <div className="space-y-2">
            <span className="text-xs font-serif uppercase tracking-widest text-gold-700 font-bold">
              Inquiry Drafted
            </span>
            <h2 className="font-serif text-3xl font-bold text-espresso">
              Your Cake Inquiry is Ready
            </h2>
            <p className="text-sm font-serif text-espresso/80">
              Thank you, <strong>{formData.customerName}</strong>! Please click below to open WhatsApp and send your consultation details directly to our baker.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-parchment-100 border border-gold-500/40 text-xs">
            <a
              href={submittedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white font-serif font-bold tracking-wider uppercase shadow-md transition-all text-xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Send Custom Cake Request via WhatsApp</span>
            </a>
          </div>

          <button
            type="button"
            onClick={() => setSubmittedUrl(null)}
            className="text-xs font-serif font-bold uppercase tracking-wider text-gold-700 hover:text-gold-800 underline"
          >
            Edit Custom Order Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-white rounded-[40px] p-6 sm:p-12 border border-gold-500 shadow-nouveau space-y-8 relative">
          <NouveauCorner position="top-left" className="absolute top-4 left-4 w-10 h-10 text-gold-400" />
          <NouveauCorner position="top-right" className="absolute top-4 right-4 w-10 h-10 text-gold-400" />
          
          <div className="text-center border-b border-gold-500/30 pb-4 space-y-1">
            <h2 className="font-serif text-3xl font-normal text-espresso">
              Custom Cake Order Details
            </h2>
            <p className="text-xs font-serif text-espresso/70 italic">
              Tell us about your celebration. We will check our baking schedule and reply on WhatsApp with ideas and pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-serif font-bold uppercase tracking-wider text-espresso mb-1.5">
                Your Full Name *
              </label>
              <input
                type="text"
                name="customerName"
                value={formData.customerName}
                onChange={handleChange}
                placeholder="e.g. Diya Sen"
                className={`w-full px-4 py-3 rounded-xl bg-parchment-50 border text-sm font-serif text-espresso outline-none ${
                  errors.customerName ? 'border-rose-500' : 'border-gold-500/40 focus:border-gold-600'
                }`}
              />
              {errors.customerName && <p className="text-xs text-rose-600 mt-1">{errors.customerName}</p>}
            </div>

            <div>
              <label className="block text-xs font-serif font-bold uppercase tracking-wider text-espresso mb-1.5">
                WhatsApp Contact Number *
              </label>
              <input
                type="tel"
                name="customerPhone"
                value={formData.customerPhone}
                onChange={handleChange}
                placeholder="e.g. +91 98415 11011"
                className={`w-full px-4 py-3 rounded-xl bg-parchment-50 border text-sm font-serif text-espresso outline-none ${
                  errors.customerPhone ? 'border-rose-500' : 'border-gold-500/40 focus:border-gold-600'
                }`}
              />
              {errors.customerPhone && <p className="text-xs text-rose-600 mt-1">{errors.customerPhone}</p>}
            </div>

            <div>
              <label className="block text-xs font-serif font-bold uppercase tracking-wider text-espresso mb-1.5">
                Celebration Occasion *
              </label>
              <input
                type="text"
                name="occasion"
                value={formData.occasion}
                onChange={handleChange}
                placeholder="e.g. 1st Birthday, Wedding, 25th Anniversary"
                className={`w-full px-4 py-3 rounded-xl bg-parchment-50 border text-sm font-serif text-espresso outline-none ${
                  errors.occasion ? 'border-rose-500' : 'border-gold-500/40 focus:border-gold-600'
                }`}
              />
              {errors.occasion && <p className="text-xs text-rose-600 mt-1">{errors.occasion}</p>}
            </div>

            <div>
              <label className="block text-xs font-serif font-bold uppercase tracking-wider text-espresso mb-1.5">
                Celebration Date Required *
              </label>
              <input
                type="date"
                name="requiredDate"
                value={formData.requiredDate}
                onChange={handleChange}
                min={new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0]}
                className={`w-full px-4 py-3 rounded-xl bg-parchment-50 border text-sm font-serif text-espresso outline-none ${
                  errors.requiredDate ? 'border-rose-500' : 'border-gold-500/40 focus:border-gold-600'
                }`}
              />
              {errors.requiredDate && <p className="text-xs text-rose-600 mt-1">{errors.requiredDate}</p>}
            </div>

            <div>
              <label className="block text-xs font-serif font-bold uppercase tracking-wider text-espresso mb-1.5">
                Preferred Flavour Profile
              </label>
              <select
                name="cakeFlavor"
                value={formData.cakeFlavor}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-parchment-50 border border-gold-500/40 text-sm font-serif text-espresso outline-none focus:border-gold-600 cursor-pointer"
              >
                <option value="">Select a preferred flavour</option>
                {popularFlavors.map((fl) => (
                  <option key={fl} value={fl}>{fl}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-serif font-bold uppercase tracking-wider text-espresso mb-1.5">
                Estimated Size / Guest Count
              </label>
              <select
                name="cakeSize"
                value={formData.cakeSize}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-parchment-50 border border-gold-500/40 text-sm font-serif text-espresso outline-none focus:border-gold-600 cursor-pointer"
              >
                <option value="">Select estimated weight / guests</option>
                {sizeOptions.map((sz) => (
                  <option key={sz} value={sz}>{sz}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-serif font-bold uppercase tracking-wider text-espresso mb-1.5">
              Design Preference & Theme Description
            </label>
            <textarea
              rows={3}
              name="preferredDesign"
              value={formData.preferredDesign}
              onChange={handleChange}
              placeholder="e.g. Pastel peach and ivory palette with dried bunny tails, pearl borders, and vintage cursive text 'Thirty & Thriving'."
              className="w-full px-4 py-3 rounded-xl bg-parchment-50 border border-gold-500/40 text-sm font-serif text-espresso outline-none focus:border-gold-600"
            />
          </div>

          <div>
            <label className="block text-xs font-serif font-bold uppercase tracking-wider text-espresso mb-1.5 flex items-center gap-1.5">
              <Camera className="w-3.5 h-3.5 text-gold-600" />
              <span>Reference Image / Pinterest URL (Optional)</span>
            </label>
            <input
              type="url"
              name="referenceImageUrl"
              value={formData.referenceImageUrl}
              onChange={handleChange}
              placeholder="https://pinterest.com/pin/... (You can also send photos directly on WhatsApp)"
              className="w-full px-4 py-3 rounded-xl bg-parchment-50 border border-gold-500/40 text-sm font-serif text-espresso outline-none focus:border-gold-600"
            />
          </div>

          <div>
            <label className="block text-xs font-serif font-bold uppercase tracking-wider text-espresso mb-1.5">
              Dietary Instructions & Inscription Message
            </label>
            <textarea
              rows={2}
              name="additionalNotes"
              value={formData.additionalNotes}
              onChange={handleChange}
              placeholder="e.g. Inscription on plaque, low sugar preference, or nut allergy notes."
              className="w-full px-4 py-3 rounded-xl bg-parchment-50 border border-gold-500/40 text-sm font-serif text-espresso outline-none focus:border-gold-600"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-4 rounded-full gold-button text-espresso text-xs font-serif font-bold tracking-widest uppercase transition-all shadow-md flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-espresso fill-current" />
              <span>Send Custom Cake Request via WhatsApp</span>
            </button>
            <p className="text-center text-[11px] font-serif text-espresso/60 mt-3">
              Your inquiry is saved in our system and opens directly in WhatsApp to finalize details with our baker.
            </p>
          </div>

        </form>
      )}

    </div>
  );
};
