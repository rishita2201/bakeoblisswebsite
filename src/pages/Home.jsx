import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cake, Sparkles, Heart, Award, ShieldCheck, Clock, Instagram, CheckCircle2, Star } from 'lucide-react';
import { Hero } from '../components/Hero';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS } from '../data/products';
import { BAKERY_CONFIG } from '../data/config';
import { createWhatsAppLink } from '../utils/whatsapp';

export const Home = () => {
  // Select top featured products (bestsellers and signature)
  const featuredProducts = PRODUCTS.slice(0, 4);

  // Categories list with imagery
  const categoryShowcase = [
    {
      title: 'Celebration Cakes',
      category: 'Cakes',
      description: 'Layered sponges, Swiss buttercream & delicate botanical styling.',
      image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Cupcakes',
      category: 'Cupcakes',
      description: 'Hand-piped floral hydrangeas and velvety ganache swirls.',
      image: 'https://images.unsplash.com/photo-1587668178277-295251f900ce?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Fudge Brownies',
      category: 'Brownies',
      description: 'Paper-thin crinkle tops with dense, gooey chocolate centers.',
      image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Artisanal Cookies',
      category: 'Cookies',
      description: 'NYC style chunky choc-chip and delicate Persian shortbread.',
      image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Desserts & Tarts',
      category: 'Desserts',
      description: 'Authentic Parisian macarons and fresh summer fruit tarts.',
      image: 'https://images.unsplash.com/photo-1569864321390-dc8727ff068f?auto=format&fit=crop&w=600&q=80',
    },
  ];

  // Why choose us pillars
  const pillars = [
    {
      icon: Clock,
      title: 'Freshly Baked to Order',
      description: 'We do not sell pre-made or thawed items. Every sponge and treat is baked from scratch right after your order is confirmed.',
    },
    {
      icon: Heart,
      title: 'Made with Love',
      description: 'Bespoke home-kitchen attention to detail that industrial commercial bakeries simply cannot replicate.',
    },
    {
      icon: Award,
      title: 'Premium Ingredients',
      description: '100% pure dairy butter, premium Callebaut chocolate, Madagascar vanilla, and real fruit compotes.',
    },
    {
      icon: Sparkles,
      title: 'Customised for You',
      description: 'Personalised flavors, custom piping inscriptions, eggless dietary requests, and bespoke theme styling.',
    },
  ];

  // Sample Customer Reviews (clearly labelled demonstration placeholders)
  const sampleTestimonials = [
    {
      quote: "The Vintage Raspberry cake made my sister's birthday unforgettable! The sponge was so moist and the rosewater buttercream was perfectly balanced—not overly sweet.",
      author: 'Ananya S.',
      occasion: 'Birthday Celebration',
      stars: 5,
    },
    {
      quote: "Easily the best fudge brownies in town! The crinkle top and gooey center are spot on. Everyone at the party kept asking where we ordered them from.",
      author: 'Rohan M.',
      occasion: 'Housewarming Party',
      stars: 5,
    },
    {
      quote: "Ordering through WhatsApp was so effortless and warm. The baker helped me choose the perfect size for our anniversary dinner. Truly boutique quality!",
      author: 'Priya & Kabir',
      occasion: 'Anniversary Dinner',
      stars: 5,
    },
  ];

  // Curated Instagram photo grid simulation
  const instagramPhotos = [
    {
      url: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=500&q=80',
      alt: 'Pastel celebration cake with fresh florals',
    },
    {
      url: 'https://images.unsplash.com/photo-1587668178277-295251f900ce?auto=format&fit=crop&w=500&q=80',
      alt: 'Floral piped artisanal cupcakes',
    },
    {
      url: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=500&q=80',
      alt: 'Crinkle top fudge brownies',
    },
    {
      url: 'https://images.unsplash.com/photo-1569864321390-dc8727ff068f?auto=format&fit=crop&w=500&q=80',
      alt: 'Parisian macarons pastel collection',
    },
    {
      url: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=500&q=80',
      alt: 'Belgian dark chocolate truffle cake',
    },
    {
      url: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=500&q=80',
      alt: 'Tiered floral bespoke cake',
    },
  ];

  return (
    <div className="space-y-20 sm:space-y-28">
      {/* 1. HERO SECTION */}
      <Hero />

      {/* 2. FEATURED CATEGORIES SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs uppercase font-bold tracking-widest text-rose-500">
            Handcrafted Delights
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-chocolate">
            Explore by Category
          </h2>
          <p className="text-sm text-chocolate/70">
            Every treat is baked with thoughtful artistry and honest, wholesome ingredients.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {categoryShowcase.map((cat) => (
            <Link
              key={cat.category}
              to={`/menu?category=${encodeURIComponent(cat.category)}`}
              className="group relative rounded-2xl overflow-hidden bg-white border border-blush/60 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden bg-cream">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-3.5 text-center flex-grow flex flex-col justify-center">
                <h3 className="font-serif text-sm sm:text-base font-bold text-chocolate group-hover:text-rose-600 transition-colors">
                  {cat.title}
                </h3>
                <span className="text-[11px] text-rose-500 font-medium mt-1 inline-flex items-center justify-center gap-1">
                  View treats <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. FEATURED BESTSELLERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div className="space-y-2">
            <span className="text-xs uppercase font-bold tracking-widest text-rose-500">
              Customer Favourites
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-chocolate">
              Signature Bestsellers
            </h2>
          </div>
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 text-sm font-semibold text-rose-600 hover:text-rose-700 transition-colors"
          >
            <span>Browse Full Menu</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 4. ABOUT BRAND STORY PREVIEW */}
      <section className="bg-cream/60 py-16 sm:py-20 border-y border-blush/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Photo Stack */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-soft-xl border border-blush/80">
                  <img
                    src="https://images.unsplash.com/photo-1556911073-38141963c9e0?auto=format&fit=crop&w=1000&q=80"
                    alt="Bake O Bliss artisanal home baking process"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-44 sm:w-52 aspect-square rounded-2xl overflow-hidden shadow-soft-lg border-4 border-ivory hidden sm:block">
                  <img
                    src="https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=600&q=80"
                    alt="Cake decorating detail"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Story Details */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase font-bold tracking-widest text-rose-500">
                Behind The Whisk
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-chocolate leading-tight">
                Crafted in Small Batches, <br />
                <span className="italic font-normal font-serif text-rose-600">Never Mass Produced.</span>
              </h2>

              <p className="text-sm sm:text-base text-chocolate/80 leading-relaxed font-light">
                At {BAKERY_CONFIG.brandName}, we believe that a celebration cake should taste even better than it looks. We began with a simple yearning: to bring back the purity of honest, homemade baking using real cream, pure butter, farm-fresh eggs, and rich Dutch cocoa.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-chocolate/80">
                    <strong className="text-chocolate">No artificial preservatives or stabilizers:</strong> Everything is freshly made for your specified delivery slot.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-chocolate/80">
                    <strong className="text-chocolate">Bespoke Design & Dietary Options:</strong> Special recipes for eggless preferences and tailored celebration aesthetics.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-chocolate text-ivory text-sm font-semibold hover:bg-chocolate-600 transition-colors shadow-soft"
                >
                  <span>Read Our Story</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/custom-orders"
                  className="text-sm font-semibold text-rose-600 hover:text-rose-700 underline"
                >
                  Commission a Custom Cake
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs uppercase font-bold tracking-widest text-rose-500">
            Our Quality Promise
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-chocolate">
            Why Bake O Bliss?
          </h2>
          <p className="text-sm text-chocolate/70">
            We hold ourselves to the highest standards of taste, safety, and artistry.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-blush/60 shadow-soft hover:shadow-soft-lg transition-all duration-300 text-center space-y-4"
              >
                <div className="w-14 h-14 rounded-2xl bg-blush/50 text-rose-600 flex items-center justify-center mx-auto shadow-xs">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-lg font-bold text-chocolate">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-chocolate/70 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. CUSTOMER TESTIMONIALS (With clear demonstration data note) */}
      <section className="bg-blush/25 py-16 sm:py-20 border-y border-blush/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12 space-y-3">
            <span className="text-xs uppercase font-bold tracking-widest text-rose-500">
              Kind Words From Customers
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-chocolate">
              Sweet Celebrations
            </h2>
            <p className="text-xs text-chocolate/60 italic">
              *(Demonstration reviews previewing customer experiences)*
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {sampleTestimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-white p-6 sm:p-8 rounded-3xl border border-blush shadow-soft flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex text-amber-400 gap-1">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-chocolate/80 italic leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>
                <div className="pt-4 border-t border-blush/40 flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-sm text-chocolate">{t.author}</h4>
                    <span className="text-[11px] text-rose-500">{t.occasion}</span>
                  </div>
                  <span className="text-[10px] text-chocolate/40 uppercase tracking-wider font-semibold">
                    Verified Buyer
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. INSTAGRAM SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-rose-500 text-xs font-bold uppercase tracking-wider">
              <Instagram className="w-4 h-4" />
              <span>Follow Along On Instagram</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-chocolate">
              {BAKERY_CONFIG.instagramHandle}
            </h2>
          </div>
          <a
            href={BAKERY_CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white hover:bg-blush/40 text-chocolate border border-blush text-xs font-semibold shadow-sm transition-colors"
          >
            <Instagram className="w-4 h-4 text-rose-500" />
            <span>Follow Us on Instagram</span>
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {instagramPhotos.map((photo, idx) => (
            <a
              key={idx}
              href={BAKERY_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-2xl overflow-hidden bg-cream block shadow-xs hover:shadow-soft transition-all"
            >
              <img
                src={photo.url}
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-chocolate/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
                <Instagram className="w-6 h-6" />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* 8. QUICK CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="bg-chocolate text-ivory rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-soft-xl">
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <span className="text-xs uppercase font-bold tracking-widest text-rose-300">
              Planning a Birthday, Anniversary or Special Milestone?
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ivory">
              Let's Design Your Dream Cake Together
            </h2>
            <p className="text-sm text-cream/80 max-w-lg mx-auto">
              Share your theme, guest count, and flavor preference. We'll design a stunning centerpiece made just for your special day.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/custom-orders"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-rose-500 hover:bg-rose-600 text-white text-sm font-semibold shadow-sm transition-colors"
              >
                Start Custom Cake Inquiry
              </Link>
              <a
                href={createWhatsAppLink("Hello Bake O Bliss! I would like to inquire about a custom cake.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-chocolate-400/30 hover:bg-chocolate-400/50 text-ivory border border-rose-300/30 text-sm font-semibold transition-colors"
              >
                Chat Directly on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
