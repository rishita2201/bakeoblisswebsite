import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Heart, Award, Clock, Instagram, Star, ShieldCheck, Play, MessageCircle, ExternalLink } from 'lucide-react';
import { Hero } from '../components/Hero';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS } from '../data/products';
import { BAKERY_CONFIG } from '../data/config';
import { INSTAGRAM_POSTS } from '../data/instagram';
import { createWhatsAppLink } from '../utils/whatsapp';
import { NouveauFloralDivider, NouveauArchCrest, NouveauCorner } from '../components/ArtNouveauDecorations';

export const Home = () => {
  const featuredProducts = PRODUCTS.slice(0, 4);

  const categoryShowcase = [
    {
      title: 'Celebration Cakes',
      category: 'Cakes',
      description: 'Soft layered cakes with smooth buttercream and lovely decorations.',
      image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Cupcakes',
      category: 'Cupcakes',
      description: 'Fluffy vanilla and chocolate cupcakes with delicious buttercream flowers.',
      image: 'https://images.unsplash.com/photo-1587668178277-295251f900ce?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Fudge Brownies',
      category: 'Brownies',
      description: 'Gooey, rich chocolate brownies with that classic shiny crinkle top.',
      image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Fresh Baked Cookies',
      category: 'Cookies',
      description: 'Chunky chocolate chip cookies and melt-in-mouth pistachio butter shortbread.',
      image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Desserts & Macarons',
      category: 'Desserts',
      description: 'Crisp egg-free macarons and delicious sweet party treats.',
      image: 'https://images.unsplash.com/photo-1569864321390-dc8727ff068f?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Gift Hampers',
      category: 'Gift Hampers',
      description: 'Handcrafted festive gift hampers and boxes packed with artisanal treats.',
      image: '/images/instagram/diwali-hamper-reel.jpg',
    },
  ];

  const pillars = [
    {
      icon: Clock,
      title: 'Freshly Baked to Order',
      description: 'We bake fresh only after you place your order. No pre-made or frozen cakes.',
    },
    {
      icon: ShieldCheck,
      title: 'Sanitized Kitchen',
      description: 'Dedicated utensils and pure ingredients. Zero gelatin, zero eggs.',
    },
    {
      icon: Award,
      title: 'Pure Dairy Butter',
      description: 'No margarine or cheap shortening. We bake with real butter and rich chocolate.',
    },
    {
      icon: Sparkles,
      title: 'Personalized Designs',
      description: 'Customized cake flavours, colours, and name plaques tailored to your celebration.',
    },
  ];

  const sampleTestimonials = [
    {
      quote: "Finding an authentic artisanal home bakery in Chennai with this level of delicious quality is a dream come true! The Raspberry Rose cake was the star of our anniversary.",
      author: 'Deepika & Karthik',
      occasion: 'Anniversary Celebration (Kilpauk, Chennai)',
      stars: 5,
    },
    {
      quote: "The fudge brownies have that genuine shiny crinkle crust and rich chocolate flavor. Dense, gooey, and delicious. My kids loved every bite!",
      author: 'Aditya Raman',
      occasion: 'Birthday Party (Perambur, Chennai)',
      stars: 5,
    },
    {
      quote: "Ordering through WhatsApp was so quick and easy. The baker at North Town Apartment helped us pick the perfect size and flavour for my daughter's birthday.",
      author: 'Meenakshi Sundaram',
      occasion: '1st Birthday Celebration (Anna Nagar, Chennai)',
      stars: 5,
    },
  ];

  return (
    <div className="space-y-20 sm:space-y-28">
      
      {/* 1. HERO SECTION */}
      <Hero />

      {/* 2. EXPLORE BY CATEGORY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <NouveauArchCrest className="w-16 h-8 text-gold-500 mx-auto" />
          <span className="text-xs uppercase font-serif tracking-[0.25em] text-gold-700 font-bold block">
            Fresh From Our Kitchen
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-espresso">
            Explore Our Categories
          </h2>
          <NouveauFloralDivider className="w-48 h-5 text-gold-500 my-2 mx-auto" />
          <p className="text-sm font-serif text-espresso/70 italic">
            Baked fresh to order with pure dairy butter in our home studio in Perambur, Chennai.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {categoryShowcase.map((cat) => (
            <Link
              key={cat.category}
              to={`/menu?category=${encodeURIComponent(cat.category)}`}
              className="group relative rounded-[40px_40px_16px_16px] overflow-hidden bg-white border border-gold-500/40 shadow-nouveau hover:shadow-nouveau-lg hover:-translate-y-1 transition-all duration-300 flex flex-col p-2"
            >
              <div className="aspect-[4/3] rounded-[34px_34px_10px_10px] overflow-hidden bg-parchment-200 border border-gold-500/20">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-3 text-center flex-grow flex flex-col justify-center space-y-1">
                <h3 className="font-serif text-sm sm:text-base font-bold text-espresso group-hover:text-gold-700 transition-colors">
                  {cat.title}
                </h3>
                <span className="text-[10px] font-serif uppercase tracking-wider text-gold-700 font-semibold inline-flex items-center justify-center gap-1">
                  Discover <ArrowRight className="w-2.5 h-2.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. SIGNATURE BESTSELLERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4 border-b border-gold-500/30 pb-4">
          <div className="space-y-1">
            <span className="text-xs uppercase font-serif tracking-[0.25em] text-gold-700 font-bold">
              Customer Favourites
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-espresso">
              Popular Bestsellers
            </h2>
          </div>
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 text-xs font-serif uppercase tracking-widest text-gold-700 hover:text-gold-800 font-bold transition-colors"
          >
            <span>View Full Menu</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 3.5. FESTIVE GIFT HAMPERS SPOTLIGHT (AS SEEN ON INSTAGRAM REEL) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[44px] bg-gradient-to-br from-[#2D1B1E] via-espresso to-[#1F1215] text-gold-100 p-6 sm:p-10 lg:p-14 border-2 border-gold-500/70 shadow-nouveau-lg overflow-hidden">
          
          {/* Ornamental Art Nouveau Corners */}
          <NouveauCorner position="top-left" className="absolute top-4 left-4 w-12 h-12 text-gold-400 pointer-events-none" />
          <NouveauCorner position="top-right" className="absolute top-4 right-4 w-12 h-12 text-gold-400 pointer-events-none" />
          <NouveauCorner position="bottom-left" className="absolute bottom-4 left-4 w-12 h-12 text-gold-400 pointer-events-none" />
          <NouveauCorner position="bottom-right" className="absolute bottom-4 right-4 w-12 h-12 text-gold-400 pointer-events-none" />

          {/* Background subtle golden aura */}
          <div className="absolute -right-24 -top-24 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Visual Reel Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-xs sm:max-w-sm">
                
                {/* Reel Frame with Gilded Arch Border */}
                <div className="relative p-2 rounded-[40px] bg-gradient-to-b from-gold-400 via-gold-600/50 to-gold-500 shadow-2xl">
                  <div className="relative aspect-[9/13] rounded-[34px] overflow-hidden bg-espresso/90 border border-gold-300/40 group">
                    <img
                      src="/images/instagram/diwali-hamper-reel.jpg"
                      alt="Bake O Bliss Festive Gift Hamper Reel"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-espresso via-black/20 to-espresso/60 opacity-80" />

                    {/* Top Header inside Reel */}
                    <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between z-10">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-serif font-bold uppercase tracking-wider bg-black/60 text-gold-200 backdrop-blur-md border border-gold-400/40">
                        <Instagram className="w-3.5 h-3.5 text-pink-400" />
                        <span>@bakeobliss Reel</span>
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-serif font-bold tracking-wider uppercase bg-gold-500 text-espresso shadow-xs">
                        Featured
                      </span>
                    </div>

                    {/* Center Play Button Overlay */}
                    <a
                      href="https://www.instagram.com/reel/DePZH6ZNT8G/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-10 text-center p-4 group-hover:scale-105 transition-transform"
                    >
                      <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-gold-500 hover:bg-gold-400 text-espresso flex items-center justify-center shadow-xl border-2 border-white/80 transition-all hover:scale-110">
                        <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-espresso text-espresso ml-1" />
                      </div>
                      <span className="px-3.5 py-1.5 rounded-full bg-black/75 text-white font-serif text-[11px] font-bold tracking-wider uppercase border border-gold-400/50 backdrop-blur-sm shadow-md">
                        Watch Reel on Instagram
                      </span>
                    </a>

                    {/* Bottom Caption Overlay */}
                    <div className="absolute bottom-3.5 inset-x-3.5 z-10 space-y-1 bg-black/60 p-3 rounded-2xl backdrop-blur-xs border border-white/10">
                      <p className="text-xs font-serif font-semibold text-gold-100 line-clamp-2">
                        ✨ Festive gifting, sorted! A little sweetness goes a long way 🪔
                      </p>
                      <span className="text-[10px] font-serif text-gold-300 block">
                        Handmade with love • North Town Apartment, Perambur
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Narrative & Ordering Options */}
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
              
              <div className="space-y-2">
                <span className="inline-flex items-center gap-2 text-xs font-serif uppercase tracking-[0.25em] text-gold-400 font-bold">
                  <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                  Featured On Instagram • Festive Gifting
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white leading-tight">
                  Handcrafted Gift Hampers & <br />
                  <span className="italic font-serif text-gold-300">Celebration Treat Boxes</span>
                </h2>
                <NouveauFloralDivider className="w-48 h-5 text-gold-400 my-1 mx-auto lg:mx-0" />
              </div>

              <p className="text-sm sm:text-base font-serif text-gold-100/90 font-light leading-relaxed">
                A little sweetness goes a long way 🪔 Our artisanal hampers and gift bags are handmade with love in our Perambur studio and packed in gorgeous keepsake gift boxes. Packed with freshly baked gourmet cookies, rich fudge brownies, and celebration delicacies.
              </p>

              {/* Feature Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left pt-1">
                <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/5 border border-gold-400/20">
                  <span className="w-7 h-7 rounded-full bg-gold-500/20 text-gold-300 border border-gold-400/40 flex items-center justify-center text-xs shrink-0 mt-0.5">
                    🎁
                  </span>
                  <div>
                    <strong className="text-xs font-serif font-bold text-white block">Keepsake Boxes & Bags</strong>
                    <span className="text-[11px] font-serif text-gold-200/80">Packed in gorgeous gift boxes with satin ribbon and festive touches.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/5 border border-gold-400/20">
                  <span className="w-7 h-7 rounded-full bg-gold-500/20 text-gold-300 border border-gold-400/40 flex items-center justify-center text-xs shrink-0 mt-0.5">
                    🍪
                  </span>
                  <div>
                    <strong className="text-xs font-serif font-bold text-white block">Gourmet Fresh Bakes</strong>
                    <span className="text-[11px] font-serif text-gold-200/80">Fudge brownies, melt-in-mouth pistachio shortbread & chunky cookies.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/5 border border-gold-400/20">
                  <span className="w-7 h-7 rounded-full bg-gold-500/20 text-gold-300 border border-gold-400/40 flex items-center justify-center text-xs shrink-0 mt-0.5">
                    🏢
                  </span>
                  <div>
                    <strong className="text-xs font-serif font-bold text-white block">Family & Corporate Gifting</strong>
                    <span className="text-[11px] font-serif text-gold-200/80">Bulk orders and custom curation for colleagues, clients, and celebrations.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/5 border border-gold-400/20">
                  <span className="w-7 h-7 rounded-full bg-gold-500/20 text-gold-300 border border-gold-400/40 flex items-center justify-center text-xs shrink-0 mt-0.5">
                    ⏳
                  </span>
                  <div>
                    <strong className="text-xs font-serif font-bold text-white block">Limited Slots Available</strong>
                    <span className="text-[11px] font-serif text-gold-200/80">Baked fresh in small batches. Book early before slots fill up!</span>
                  </div>
                </div>
              </div>

              {/* Call to Actions */}
              <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-3.5">
                <a
                  href={createWhatsAppLink("Hello Bake O Bliss! I saw your Festive Hampers on Instagram Reel (DePZH6ZNT8G) and would like to order/inquire about gift hampers.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3.5 rounded-full gold-button text-espresso text-xs font-serif font-bold tracking-widest uppercase transition-all shadow-lg flex items-center gap-2 hover:scale-[1.02] active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 text-espresso fill-current" />
                  <span>Order Hampers on WhatsApp</span>
                </a>

                <Link
                  to="/product/luxury-festive-dessert-hamper"
                  className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-gold-400/50 text-xs font-serif font-bold tracking-widest uppercase transition-all shadow-sm"
                >
                  <span>View Hamper Options</span>
                </Link>

                <a
                  href="https://www.instagram.com/reel/DePZH6ZNT8G/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 rounded-full bg-pink-950/60 hover:bg-pink-900/80 text-pink-200 border border-pink-400/40 text-xs font-serif font-bold tracking-widest uppercase transition-all flex items-center gap-2"
                >
                  <Instagram className="w-3.5 h-3.5 text-pink-400" />
                  <span>Watch Reel</span>
                  <ExternalLink className="w-3 h-3 text-pink-300" />
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 4. ABOUT US PREVIEW */}
      <section className="bg-parchment-100/70 py-16 sm:py-24 border-y border-gold-500/35 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Visual Photo Stack with Gilded Arches */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md">
                
                {/* Ornamental Corners */}
                <NouveauCorner position="top-left" className="absolute -top-3 -left-3 w-10 h-10 text-gold-500 z-10" />
                <NouveauCorner position="top-right" className="absolute -top-3 -right-3 w-10 h-10 text-gold-500 z-10" />

                <div className="p-2 rounded-[110px_110px_20px_20px] border-2 border-gold-500/60 bg-white shadow-nouveau-lg">
                  <div className="aspect-[4/5] rounded-[100px_100px_14px_14px] overflow-hidden bg-parchment-200">
                    <img
                      src="https://images.unsplash.com/photo-1556911073-38141963c9e0?auto=format&fit=crop&w=1000&q=80"
                      alt="Bake O Bliss Chennai boutique kitchen studio"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Overlapping Cameo Detail */}
                <div className="absolute -bottom-6 -right-4 w-44 sm:w-48 aspect-square rounded-[30px] overflow-hidden shadow-nouveau-lg border-2 border-gold-500 bg-white p-1.5 hidden sm:block">
                  <img
                    src="https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=600&q=80"
                    alt="Cake decorating botanicals"
                    className="w-full h-full object-cover rounded-[22px]"
                    loading="lazy"
                  />
                </div>

              </div>
            </div>

            {/* Story Details */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase font-serif tracking-[0.25em] text-gold-700 font-bold block">
                ❧ Behind The Whisk • Perambur Home Studio
              </span>
              
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-espresso leading-tight">
                Crafted in Small Batches, <br />
                <span className="italic font-serif text-[#A8636C]">Never Mass Produced.</span>
              </h2>

              <NouveauFloralDivider className="w-48 h-5 text-gold-500 my-1" />

              <p className="text-base text-espresso/80 leading-relaxed font-serif font-light">
                At <strong className="font-semibold text-espresso">{BAKERY_CONFIG.brandName}</strong>, our home bakery in North Town Apartment, Perambur was started with a simple belief: that homemade cakes should taste delicious, moist, and richer than commercial shop cakes.
              </p>

              <div className="space-y-3 pt-2 text-sm font-serif text-espresso/80">
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full border border-gold-500 flex items-center justify-center text-gold-700 text-xs font-bold flex-shrink-0 mt-0.5">
                    ✦
                  </span>
                  <p>
                    <strong>Clean Dedicated Kitchen:</strong> Sanitized bake-ware. Zero gelatin, zero eggs, zero animal fats.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full border border-gold-500 flex items-center justify-center text-gold-700 text-xs font-bold flex-shrink-0 mt-0.5">
                    ✦
                  </span>
                  <p>
                    <strong>Quality Butter & Rich Cocoa:</strong> Rich chocolate and pure dairy butter slow-baked to delicious perfection.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <Link
                  to="/about"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full gold-button text-espresso text-xs font-serif font-bold tracking-widest uppercase transition-all shadow-md"
                >
                  <span>Read Our Story</span>
                  <ArrowRight className="w-3.5 h-3.5 text-espresso" />
                </Link>
                <Link
                  to="/custom-orders"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-gold-50 text-espresso border-2 border-gold-600/70 text-xs font-serif font-bold tracking-widest uppercase shadow-sm transition-all"
                >
                  <span>Order a Custom Cake</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. QUALITY PILLARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="text-xs uppercase font-serif tracking-[0.25em] text-gold-700 font-bold block">
            Our Quality Promise
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-espresso">
            Why Choose Us
          </h2>
          <NouveauFloralDivider className="w-44 h-5 text-gold-500 my-2 mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-[32px] bg-white border border-gold-500/40 shadow-nouveau hover:shadow-nouveau-lg transition-all duration-300 text-center space-y-3.5"
              >
                <div className="w-14 h-14 rounded-full bg-parchment-100 border border-gold-500 text-gold-700 flex items-center justify-center mx-auto shadow-xs">
                  <Icon className="w-6 h-6 text-gold-600" />
                </div>
                <h3 className="font-serif text-lg font-bold text-espresso">
                  {pillar.title}
                </h3>
                <p className="text-xs text-espresso/70 leading-relaxed font-serif font-light">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. CUSTOMER TESTIMONIALS */}
      <section className="bg-parchment-100/60 py-16 sm:py-24 border-y border-gold-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
            <span className="text-xs uppercase font-serif tracking-[0.25em] text-gold-700 font-bold block">
              Customer Reviews
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-espresso">
              Loved Across Chennai
            </h2>
            <NouveauFloralDivider className="w-40 h-5 text-gold-500 my-1 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {sampleTestimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-white p-7 rounded-[32px] border border-gold-500/40 shadow-nouveau flex flex-col justify-between space-y-4 relative"
              >
                <div className="space-y-3">
                  <div className="flex text-gold-500 gap-1">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-gold-400 text-gold-500" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm font-serif italic text-espresso/80 leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>
                <div className="pt-4 border-t border-gold-500/25">
                  <h4 className="font-serif font-bold text-sm text-espresso">{t.author}</h4>
                  <span className="text-[11px] font-serif text-gold-700">{t.occasion}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. INSTAGRAM SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4 text-center sm:text-left">
          <div>
            <span className="text-xs font-serif uppercase tracking-[0.25em] text-gold-700 font-bold block">
              Follow Us on Instagram • @bakeobliss
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-espresso">
              Fresh from Our Instagram
            </h2>
            <p className="text-xs font-serif italic text-espresso/70 mt-1 max-w-xl">
              "Freshly baked, made with love 🤎 | Cakes • Brownies • Cookies • Bakes | Made to make your moments sweeter ✨"
            </p>
          </div>
          <a
            href={BAKERY_CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white hover:bg-gold-50 text-espresso border border-gold-500/50 text-xs font-serif tracking-wider uppercase font-semibold shadow-xs transition-colors shrink-0"
          >
            <Instagram className="w-4 h-4 text-gold-600" />
            <span>Follow @bakeobliss</span>
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href={post.postUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-2xl overflow-hidden bg-parchment-200 block border border-gold-500/30 shadow-xs hover:shadow-nouveau transition-all"
            >
              <img
                src={post.imageUrl}
                alt={post.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              {post.isReel && (
                <div className="absolute top-2 left-2 z-10">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-serif font-bold uppercase tracking-wider bg-black/80 text-gold-300 backdrop-blur-xs border border-gold-400/50 shadow-md">
                    <Play className="w-2.5 h-2.5 fill-gold-400 text-gold-400" />
                    Reel
                  </span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 text-gold-100">
                <div className="flex items-center justify-between text-[11px] font-serif mb-1">
                  <span className="flex items-center gap-1 font-bold text-white">
                    <Heart className="w-3 h-3 fill-gold-400 text-gold-400" />
                    {post.likes}
                  </span>
                  <Instagram className="w-3.5 h-3.5 text-gold-300" />
                </div>
                <p className="text-[10px] font-serif line-clamp-2 leading-tight text-white/90">
                  {post.caption}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* 8. CUSTOM CAKE COMMISSION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="bg-espresso text-gold-100 rounded-[40px] p-8 sm:p-14 text-center relative overflow-hidden border border-gold-500 shadow-nouveau-lg">
          <NouveauCorner position="top-left" className="absolute top-4 left-4 w-12 h-12 text-gold-400" />
          <NouveauCorner position="top-right" className="absolute top-4 right-4 w-12 h-12 text-gold-400" />
          <NouveauCorner position="bottom-left" className="absolute bottom-4 left-4 w-12 h-12 text-gold-400" />
          <NouveauCorner position="bottom-right" className="absolute bottom-4 right-4 w-12 h-12 text-gold-400" />

          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <span className="text-xs uppercase font-serif tracking-[0.25em] text-gold-300 font-semibold block">
              Special Cakes for Weddings, Birthdays & Anniversaries
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white">
              Order Your Custom Cake
            </h2>
            <NouveauFloralDivider className="w-48 h-5 text-gold-400 my-2 mx-auto" />
            <p className="text-sm font-serif text-gold-100/80 max-w-lg mx-auto font-light leading-relaxed">
              Tell us what design and flavour you would love for your special occasion. Every cake is baked fresh from scratch in our home kitchen in Perambur, Chennai.
            </p>
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/custom-orders"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full gold-button text-espresso text-xs font-serif font-bold tracking-widest uppercase shadow-lg transition-colors"
              >
                Order Custom Cake
              </Link>
              <a
                href={createWhatsAppLink("Hello Bake O Bliss! I would like to inquire about ordering a custom cake.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white hover:bg-gold-50 text-espresso border-2 border-gold-400 text-xs font-serif font-bold tracking-widest uppercase transition-colors shadow-md"
              >
                Chat on WhatsApp ({BAKERY_CONFIG.whatsappDisplayNumber})
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
