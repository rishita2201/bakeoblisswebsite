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

export const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  // Find product
  const product = PRODUCTS.find((p) => p.id === id);

  // States
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [selectedImage, setSelectedImage] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [egglessChoice, setEgglessChoice] = useState(false);
  const [cakeMessage, setCakeMessage] = useState('');
  const [copiedLink, setCopiedLink] = useState(false);

  // Initialize or reset state when product changes
  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants && product.variants.length > 0 ? product.variants[0] : null);
      setSelectedImage(product.image);
      setQuantity(1);
      setEgglessChoice(product.egglessAvailable || false);
      setCakeMessage('');
      window.scrollTo(0, 0);
    }
  }, [id, product]);

  if (!product) {
    return (
      <div className="py-24 text-center max-w-md mx-auto px-4 space-y-4">
        <h2 className="font-serif text-2xl font-bold text-chocolate">Product Not Found</h2>
        <p className="text-sm text-chocolate/70">
          The treat you are looking for may have been updated or moved.
        </p>
        <Link
          to="/menu"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-chocolate text-ivory text-xs font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Menu</span>
        </Link>
      </div>
    );
  }

  // Active price calculation
  const currentUnitPrice = selectedVariant ? selectedVariant.price : product.price;
  const currentTotalPrice = currentUnitPrice * quantity;

  // Add to cart handler
  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  // Direct WhatsApp order URL
  const directWhatsAppUrl = generateDirectProductWhatsAppUrl({
    product,
    selectedVariant,
    quantity
  });

  // Share link handler
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: `Look at this delicious treat from ${BAKERY_CONFIG.brandName}!`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  // Related products from same category
  const relatedProducts = PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3);

  // All images
  const allImages = [product.image, ...(product.additionalImages || [])];

  return (
    <div className="py-8 sm:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-chocolate/70">
        <Link to="/" className="hover:text-rose-600">Home</Link>
        <span>/</span>
        <Link to="/menu" className="hover:text-rose-600">Menu</Link>
        <span>/</span>
        <Link to={`/menu?category=${encodeURIComponent(product.category)}`} className="hover:text-rose-600">
          {product.category}
        </Link>
        <span>/</span>
        <span className="text-chocolate font-semibold truncate max-w-[180px] sm:max-w-none">
          {product.name}
        </span>
      </nav>

      {/* Main Product Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
        
        {/* Left Column: Image Gallery */}
        <div className="lg:col-span-6 space-y-4">
          {/* Main Large Image */}
          <div className="aspect-square rounded-3xl overflow-hidden bg-cream border border-blush shadow-soft-lg relative">
            <img
              src={selectedImage}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.isBestseller && (
              <span className="absolute top-4 left-4 bg-rose-500 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                Bestseller
              </span>
            )}
          </div>

          {/* Thumbnails if multiple images exist */}
          {allImages.length > 1 && (
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              {allImages.map((imgUrl, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setSelectedImage(imgUrl)}
                  className={`w-20 h-20 rounded-2xl overflow-hidden border-2 transition-all flex-shrink-0 bg-cream ${
                    selectedImage === imgUrl
                      ? 'border-rose-500 shadow-md scale-95'
                      : 'border-blush opacity-75 hover:opacity-100'
                  }`}
                >
                  <img src={imgUrl} alt={`${product.name} view ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Product Details & Ordering */}
        <div className="lg:col-span-6 space-y-6">
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase font-bold tracking-widest text-rose-500">
                {product.category}
              </span>
              <button
                type="button"
                onClick={handleShare}
                className="text-xs text-chocolate/60 hover:text-chocolate flex items-center gap-1"
                title="Share this treat"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>{copiedLink ? 'Link Copied!' : 'Share'}</span>
              </button>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-chocolate leading-tight">
              {product.name}
            </h1>

            {/* Price Presentation */}
            <div className="flex items-baseline gap-3 pt-1">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-chocolate">
                {formatCurrency(currentUnitPrice)}
              </span>
              {selectedVariant && (
                <span className="text-xs text-chocolate/60">
                  per {selectedVariant.label}
                </span>
              )}
            </div>
          </div>

          {/* Short Description */}
          <p className="text-sm sm:text-base text-chocolate/80 leading-relaxed font-light">
            {product.description}
          </p>

          {/* Available Sizes / Variants Selection */}
          {product.variants && product.variants.length > 0 && (
            <div className="space-y-3 pt-2">
              <label className="text-xs font-bold uppercase tracking-wider text-chocolate block">
                Select Size / Box Variant:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {product.variants.map((v) => {
                  const isSelected = selectedVariant?.id === v.id;
                  return (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => setSelectedVariant(v)}
                      className={`p-3 rounded-2xl text-left border transition-all flex items-center justify-between ${
                        isSelected
                          ? 'bg-chocolate text-ivory border-chocolate shadow-sm'
                          : 'bg-white hover:bg-blush/40 text-chocolate border-blush/80'
                      }`}
                    >
                      <span className="text-xs font-semibold">{v.label}</span>
                      <span className={`text-xs font-bold ${isSelected ? 'text-rose-300' : 'text-chocolate'}`}>
                        {formatCurrency(v.price)}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Dietary / Inscription Customisation */}
          <div className="p-4 rounded-2xl bg-cream/80 border border-blush/60 space-y-3 text-xs">
            {product.egglessAvailable && (
              <label className="flex items-center gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={egglessChoice}
                  onChange={(e) => setEgglessChoice(e.target.checked)}
                  className="rounded border-blush text-rose-600 focus:ring-rose-400 w-4 h-4 cursor-pointer"
                />
                <span className="font-medium text-chocolate">
                  Request 100% Eggless Preparation (Baked in sanitized egg-free bake-ware)
                </span>
              </label>
            )}

            {product.category === 'Cakes' && (
              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-chocolate/80 block">
                  Custom message on chocolate plaque (Optional):
                </label>
                <input
                  type="text"
                  value={cakeMessage}
                  onChange={(e) => setCakeMessage(e.target.value)}
                  placeholder="e.g. Happy 30th Birthday Anya! 🌸"
                  className="w-full px-3 py-2 rounded-xl bg-white border border-blush text-xs text-chocolate outline-none focus:border-rose-400"
                  maxLength={50}
                />
              </div>
            )}
          </div>

          {/* Quantity Selector & Total Amount */}
          <div className="flex items-center gap-4 pt-2">
            <div className="flex items-center border border-blush rounded-2xl bg-white p-1">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-9 h-9 rounded-xl bg-ivory hover:bg-blush text-chocolate flex items-center justify-center font-bold"
                aria-label="Decrease quantity"
              >
                -
              </button>
              <span className="w-12 text-center text-sm font-bold text-chocolate">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="w-9 h-9 rounded-xl bg-ivory hover:bg-blush text-chocolate flex items-center justify-center font-bold"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>

            <div className="text-right flex-grow">
              <span className="text-[10px] text-chocolate/60 block uppercase">Total Amount</span>
              <span className="font-serif text-2xl font-bold text-chocolate">
                {formatCurrency(currentTotalPrice)}
              </span>
            </div>
          </div>

          {/* Main Action Buttons */}
          <div className="space-y-3 pt-2">
            {/* Add to Cart */}
            <button
              type="button"
              onClick={handleAddToCart}
              className="w-full py-4 rounded-2xl bg-chocolate text-ivory text-sm font-semibold tracking-wide hover:bg-chocolate-600 transition-all shadow-soft flex items-center justify-center gap-2 group"
            >
              <ShoppingBag className="w-4 h-4 text-rose-300 group-hover:scale-110 transition-transform" />
              <span>Add to Shopping Basket • {formatCurrency(currentTotalPrice)}</span>
            </button>

            {/* Direct WhatsApp Ordering */}
            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-2xl bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#1b7e3e] border border-[#25D366]/40 text-xs sm:text-sm font-semibold tracking-wide transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Inquire & Order Instantly via WhatsApp</span>
            </a>
          </div>

          {/* Lead Time & Allergen Information */}
          <div className="pt-4 border-t border-blush/60 space-y-2.5 text-xs text-chocolate/75">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-rose-500 flex-shrink-0" />
              <span><strong>Notice:</strong> {product.preparationTime}</span>
            </div>
            {product.flavorNotes && (
              <div className="flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                <span><strong>Key Notes:</strong> {product.flavorNotes.join(' • ')}</span>
              </div>
            )}
            {product.allergens && (
              <div className="flex items-start gap-2">
                <ShieldAlert className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                <span><strong>Allergen info:</strong> {product.allergens}</span>
              </div>
            )}
          </div>

        </div>

      </div>

      {/* Related Products Recommendation */}
      {relatedProducts.length > 0 && (
        <section className="pt-10 border-t border-blush/60 space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-2xl font-bold text-chocolate">
              You Might Also Crave
            </h3>
            <Link to="/menu" className="text-xs font-semibold text-rose-600 hover:text-rose-700">
              View All Menu →
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
