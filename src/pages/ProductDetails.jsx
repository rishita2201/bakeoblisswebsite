import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, ShoppingBag, MessageCircle, Sparkles, Check, 
  Clock, ShieldAlert, Heart, Share2, Info 
} from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils/currency';
import { generateDirectProductWhatsAppUrl } from '../utils/whatsapp';
import { BAKERY_CONFIG } from '../data/config';
import { ProductCard } from '../components/ProductCard';
import { NouveauCorner, NouveauFloralDivider } from '../components/ArtNouveauDecorations';

export const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = PRODUCTS.find((p) => p.id === id);

  const [selectedVariant, setSelectedVariant] = useState(null);
  const [selectedImage, setSelectedImage] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [cakeMessage, setCakeMessage] = useState('');
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants && product.variants.length > 0 ? product.variants[0] : null);
      setSelectedImage(product.image);
      setQuantity(1);
      setCakeMessage('');
      window.scrollTo(0, 0);
    }
  }, [id, product]);

  if (!product) {
    return (
      <div className="py-24 text-center max-w-md mx-auto px-4 space-y-4">
        <h2 className="font-serif text-2xl font-bold text-espresso">Product Not Found</h2>
        <p className="text-sm font-serif text-espresso/70">
          The treat you are looking for may have been updated or moved.
        </p>
        <Link
          to="/menu"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full gold-button text-espresso text-xs font-serif font-bold uppercase tracking-widest shadow-md"
        >
          <ArrowLeft className="w-4 h-4 text-espresso" />
          <span>Return to Menu</span>
        </Link>
      </div>
    );
  }

  const currentUnitPrice = selectedVariant ? selectedVariant.price : product.price;
  const currentTotalPrice = currentUnitPrice * quantity;

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  const directWhatsAppUrl = generateDirectProductWhatsAppUrl({
    product,
    selectedVariant,
    quantity
  });

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: `Take a look at this delicious treat from ${BAKERY_CONFIG.brandName}!`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const relatedProducts = PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3);
  const allImages = [product.image, ...(product.additionalImages || [])];

  return (
    <div className="py-8 sm:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs font-serif tracking-wider uppercase text-espresso/60">
        <Link to="/" className="hover:text-gold-700">Home</Link>
        <span>/</span>
        <Link to="/menu" className="hover:text-gold-700">Menu</Link>
        <span>/</span>
        <Link to={`/menu?category=${encodeURIComponent(product.category)}`} className="hover:text-gold-700">
          {product.category}
        </Link>
        <span>/</span>
        <span className="text-espresso font-bold truncate max-w-[180px] sm:max-w-none">
          {product.name}
        </span>
      </nav>

      {/* Main Product Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
        
        {/* Left Column: Arched Image Frame */}
        <div className="lg:col-span-6 space-y-4">
          <div className="relative p-2 rounded-[90px_90px_24px_24px] border-2 border-gold-500/60 bg-white shadow-nouveau-lg">
            <NouveauCorner position="top-left" className="absolute top-2 left-2 w-10 h-10 text-gold-500 z-20 pointer-events-none" />
            <NouveauCorner position="top-right" className="absolute top-2 right-2 w-10 h-10 text-gold-500 z-20 pointer-events-none" />
            <NouveauCorner position="bottom-left" className="absolute bottom-2 left-2 w-10 h-10 text-gold-500 z-20 pointer-events-none" />
            <NouveauCorner position="bottom-right" className="absolute bottom-2 right-2 w-10 h-10 text-gold-500 z-20 pointer-events-none" />

            <div className="aspect-square rounded-[80px_80px_18px_18px] overflow-hidden bg-parchment-200 relative border border-gold-500/30">
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.isBestseller && (
                <span className="absolute top-4 left-4 bg-[#8E4D55] text-gold-100 text-[10px] font-serif font-bold uppercase tracking-widest px-3.5 py-1 rounded-full shadow-xs border border-gold-400/40">
                  Signature Bestseller
                </span>
              )}
            </div>
          </div>

          {/* Thumbnails if multiple */}
          {allImages.length > 1 && (
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              {allImages.map((imgUrl, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setSelectedImage(imgUrl)}
                  className={`w-20 h-20 rounded-2xl overflow-hidden border-2 transition-all flex-shrink-0 bg-parchment-100 ${
                    selectedImage === imgUrl
                      ? 'border-gold-500 shadow-md scale-95'
                      : 'border-gold-500/30 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={imgUrl} alt={`${product.name} view ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Details & Ordering Cartouche */}
        <div className="lg:col-span-6 space-y-6">
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-serif uppercase tracking-[0.25em] text-gold-700 font-bold">
                {product.category}
              </span>
              <button
                type="button"
                onClick={handleShare}
                className="text-xs font-serif text-espresso/60 hover:text-espresso flex items-center gap-1 uppercase tracking-wider"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>{copiedLink ? 'Link Copied!' : 'Share'}</span>
              </button>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-espresso leading-tight">
              {product.name}
            </h1>

            {/* Price Presentation */}
            <div className="flex items-baseline gap-3 pt-2">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-espresso">
                {formatCurrency(currentUnitPrice)}
              </span>
              {selectedVariant && (
                <span className="text-xs font-serif text-espresso/60 italic">
                  per {selectedVariant.label}
                </span>
              )}
            </div>
          </div>

          <p className="text-sm sm:text-base font-serif text-espresso/80 leading-relaxed font-light">
            {product.description}
          </p>

          {/* Studio Guarantee & Freshness */}
          <div className="p-3 rounded-2xl bg-parchment-100/70 border border-gold-500/30 flex items-center justify-between text-xs font-serif text-espresso/75">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
              <span>Sanitized Studio Bake • Perambur, Chennai</span>
            </span>
            <span className="text-gold-700 font-semibold italic text-[11px]">Baked Fresh to Order</span>
          </div>

          {/* Available Sizes / Variants Selection */}
          {product.variants && product.variants.length > 0 && (
            <div className="space-y-2.5 pt-1">
              <label className="text-xs font-serif font-bold uppercase tracking-wider text-espresso block">
                Select Size / Option:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {product.variants.map((v) => {
                  const isSelected = selectedVariant?.id === v.id;
                  return (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => setSelectedVariant(v)}
                      className={`p-3.5 rounded-2xl text-left border-2 transition-all flex items-center justify-between font-serif ${
                        isSelected
                          ? 'bg-espresso text-gold-300 border-gold-400 shadow-md font-bold'
                          : 'bg-white hover:bg-gold-50 text-espresso border-gold-500/40'
                      }`}
                    >
                      <span className="text-xs font-semibold">{v.label}</span>
                      <span className={`text-xs font-bold ${isSelected ? 'text-gold-300' : 'text-espresso'}`}>
                        {formatCurrency(v.price)}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Optional Message Plaque */}
          {product.category === 'Cakes' && (
            <div className="p-4 rounded-2xl bg-white border border-gold-500/40 space-y-1.5 shadow-xs">
              <label className="text-[11px] font-serif font-bold uppercase tracking-wider text-espresso block">
                Custom inscription on chocolate plaque (Optional):
              </label>
              <input
                type="text"
                value={cakeMessage}
                onChange={(e) => setCakeMessage(e.target.value)}
                placeholder="e.g. Happy Birthday Anya! 🌸"
                className="w-full px-3.5 py-2.5 rounded-xl bg-parchment-50 border border-gold-500/40 text-xs font-serif text-espresso outline-none focus:border-gold-600"
                maxLength={50}
              />
            </div>
          )}

          {/* Quantity Selector & Price Summary */}
          <div className="flex items-center gap-4 pt-2">
            <div className="flex items-center border border-gold-500/50 rounded-2xl bg-white p-1">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 rounded-xl bg-parchment-100 hover:bg-gold-200 active:scale-95 text-espresso flex items-center justify-center font-bold text-base transition-transform"
                aria-label="Decrease quantity"
              >
                -
              </button>
              <span className="w-12 text-center text-sm font-serif font-bold text-espresso">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 rounded-xl bg-parchment-100 hover:bg-gold-200 active:scale-95 text-espresso flex items-center justify-center font-bold text-base transition-transform"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>

            <div className="text-right flex-grow">
              <span className="text-[10px] font-serif text-espresso/60 block uppercase tracking-wider">Total</span>
              <span className="font-serif text-2xl font-bold text-espresso">
                {formatCurrency(currentTotalPrice)}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pt-2">
            <button
              type="button"
              onClick={handleAddToCart}
              className="w-full py-4 rounded-full gold-button text-espresso text-xs font-serif font-bold tracking-widest uppercase transition-all shadow-md flex items-center justify-center gap-2 active:scale-[0.98]"
            >
              <ShoppingBag className="w-4 h-4 text-espresso" />
              <span>Add to Cart • {formatCurrency(currentTotalPrice)}</span>
            </button>

            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-serif font-bold tracking-widest uppercase transition-all flex items-center justify-center gap-2 shadow-md active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4 text-white fill-current" />
              <span>Order via WhatsApp ({BAKERY_CONFIG.whatsappDisplayNumber})</span>
            </a>
          </div>

          {/* Lead Time & Notes */}
          <div className="pt-4 border-t border-gold-500/25 space-y-2 text-xs font-serif text-espresso/75">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-gold-600 flex-shrink-0" />
              <span><strong>Notice:</strong> {product.preparationTime}</span>
            </div>
            {product.flavorNotes && (
              <div className="flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-gold-600 flex-shrink-0 mt-0.5" />
                <span><strong>Notes:</strong> {product.flavorNotes.join(' • ')}</span>
              </div>
            )}
            {product.allergens && (
              <div className="flex items-start gap-2">
                <ShieldAlert className="w-4 h-4 text-gold-600 flex-shrink-0 mt-0.5" />
                <span><strong>Allergens:</strong> {product.allergens}</span>
              </div>
            )}
          </div>

        </div>

      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="pt-12 border-t border-gold-500/30 space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-espresso">
              You May Also Like
            </h3>
            <Link to="/menu" className="text-xs font-serif font-bold uppercase tracking-wider text-gold-700 hover:text-gold-800">
              Browse Menu →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}

    </div>
  );
};
