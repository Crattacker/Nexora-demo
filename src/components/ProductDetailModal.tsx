import React, { useState } from 'react';
import { 
  X, 
  Star, 
  ShoppingBag, 
  Heart, 
  ShieldCheck, 
  Truck, 
  RefreshCw, 
  ChevronDown, 
  ChevronUp,
  Award,
  CheckCircle2,
  Share2
} from 'lucide-react';
import { Product } from '../types';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (p: Product, color: string, size: string, quantity: number, includeTailoring: boolean) => void;
  onDirectBuy: (p: Product, color: string, size: string, quantity: number, includeTailoring: boolean) => void;
  isWishlisted: boolean;
  onToggleWishlist: (p: Product) => void;
  currency: 'INR' | 'USD' | 'EUR';
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onDirectBuy,
  isWishlisted,
  onToggleWishlist,
  currency
}) => {
  if (!product) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || '');
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || 'Free Size');
  const [quantity, setQuantity] = useState(1);
  const [includeTailoring, setIncludeTailoring] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<'motifs' | 'care' | 'sizing' | 'reviews' | null>('motifs');
  const [copiedLink, setCopiedLink] = useState(false);

  const convertPrice = (inr: number) => {
    if (currency === 'USD') return `$${Math.round(inr / 85).toLocaleString()}`;
    if (currency === 'EUR') return `€${Math.round(inr / 92).toLocaleString()}`;
    return `₹${inr.toLocaleString('en-IN')}`;
  };

  const discountPercent = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-3 sm:p-4 overflow-y-auto">
      <div 
        className="relative bg-white w-full max-w-5xl overflow-hidden shadow-2xl my-8 max-h-[92vh] flex flex-col md:flex-row border border-black"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-black hover:bg-neutral-800 text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column: Image Gallery */}
        <div className="w-full md:w-1/2 p-4 sm:p-6 bg-neutral-100 flex flex-col justify-between overflow-y-auto border-b md:border-b-0 md:border-r border-neutral-200">
          {/* Main Display Image */}
          <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-200 border border-neutral-300">
            <img
              src={product.images[activeImageIndex] || product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover object-top"
            />
            {product.badge && (
              <span className="absolute top-3 left-3 px-2.5 py-1 bg-black text-white text-[10px] font-mono font-bold uppercase tracking-widest">
                {product.badge}
              </span>
            )}
            <button
              onClick={() => onToggleWishlist(product)}
              className={`absolute top-3 right-3 p-2.5 transition-colors ${
                isWishlisted ? 'bg-black text-white' : 'bg-white/90 hover:bg-black hover:text-white text-black border border-black'
              }`}
              aria-label="Wishlist item"
            >
              <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-white' : ''}`} />
            </button>
          </div>

          {/* Thumbnail Strip */}
          {product.images.length > 1 && (
            <div className="flex items-center gap-2 mt-4 overflow-x-auto pb-1">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`w-16 h-20 overflow-hidden border-2 transition-all flex-shrink-0 ${
                    activeImageIndex === idx 
                      ? 'border-black opacity-100' 
                      : 'border-transparent opacity-50 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="Angle" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* Certification Strip */}
          <div className="mt-4 p-3 bg-white border border-neutral-300 flex items-center justify-between font-mono text-[11px] text-neutral-600 uppercase">
            <span className="flex items-center gap-1.5 font-bold text-black">
              <Award className="w-4 h-4 text-black" /> SILK MARK CERTIFIED
            </span>
            <span>ORIGIN: {product.origin.toUpperCase()}</span>
          </div>
        </div>

        {/* Right Column: Product Details & Purchase Form */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 overflow-y-auto max-h-[92vh]">
          {/* Header */}
          <div>
            <div className="flex items-center justify-between font-mono text-xs font-bold uppercase tracking-widest text-neutral-500">
              <span>
                {product.silkType} / {product.category}
              </span>
              <button 
                onClick={handleShare}
                className="text-black hover:underline flex items-center gap-1"
              >
                <Share2 className="w-3.5 h-3.5" />
                {copiedLink ? 'LINK COPIED' : 'SHARE'}
              </button>
            </div>

            <h2 className="font-heading text-2xl sm:text-3xl font-black text-black mt-2 uppercase tracking-tight leading-none">
              {product.name}
            </h2>

            {product.assameseName && (
              <p className="font-mono text-xs text-neutral-500 mt-1 uppercase">
                {product.assameseName}
              </p>
            )}

            {/* Rating Stars */}
            <div className="flex items-center gap-2 mt-3 font-mono text-xs">
              <div className="flex items-center text-black">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < Math.floor(product.rating) 
                        ? 'fill-black text-black' 
                        : 'text-neutral-300'
                    }`}
                  />
                ))}
              </div>
              <span className="font-bold text-black">{product.rating}</span>
              <span className="text-neutral-500">({product.reviewsCount} REVIEWS)</span>
            </div>

            {/* Price Box */}
            <div className="flex items-baseline gap-3 mt-4 pb-4 border-b border-neutral-200">
              <span className="text-2xl sm:text-3xl font-mono font-black text-black">
                {convertPrice(product.price)}
              </span>
              {product.originalPrice > product.price && (
                <span className="text-sm font-mono text-neutral-400 line-through">
                  {convertPrice(product.originalPrice)}
                </span>
              )}
              {discountPercent > 0 && (
                <span className="px-2 py-0.5 bg-black text-white text-xs font-mono font-bold">
                  -{discountPercent}%
                </span>
              )}
              <span className="font-mono text-[10px] text-neutral-500 ml-auto uppercase">
                DUTIES INCLUDED
              </span>
            </div>
          </div>

          {/* Description Snippet */}
          <p className="text-xs text-neutral-600 mt-4 leading-relaxed">
            {product.description}
          </p>

          {/* Color Selector */}
          {product.colors.length > 0 && (
            <div className="mt-5">
              <label className="block font-mono text-xs uppercase font-bold tracking-wider text-black mb-2">
                COLOURWAY: <span className="text-neutral-500 font-normal">{selectedColor.toUpperCase()}</span>
              </label>
              <div className="flex items-center gap-2.5">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`group relative p-1 rounded-full border-2 transition-all ${
                      selectedColor === color.name ? 'border-black scale-110' : 'border-neutral-300'
                    }`}
                  >
                    <span
                      className="block w-5 h-5 rounded-full border border-neutral-300"
                      style={{ backgroundColor: color.hex }}
                    />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Sizing Selector */}
          <div className="mt-5">
            <div className="flex items-center justify-between mb-2 font-mono text-xs">
              <label className="uppercase font-bold tracking-wider text-black">
                SIZE SPECIFICATION:
              </label>
            </div>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((sz) => (
                <button
                  key={sz}
                  onClick={() => setSelectedSize(sz)}
                  className={`px-4 py-2 font-mono text-xs font-bold uppercase transition-colors border ${
                    selectedSize === sz
                      ? 'bg-black text-white border-black'
                      : 'bg-white text-black border-neutral-300 hover:border-black'
                  }`}
                >
                  {sz}
                </button>
              ))}
            </div>
          </div>

          {/* Custom Tailoring & Pre-stitched Pleats Option */}
          <div className="mt-5 p-3.5 bg-neutral-100 border border-neutral-300 flex items-start gap-3">
            <input
              type="checkbox"
              id="tailoring-check"
              checked={includeTailoring}
              onChange={(e) => setIncludeTailoring(e.target.checked)}
              className="mt-1 w-4 h-4 text-black rounded-none border-black focus:ring-black accent-black"
            />
            <label htmlFor="tailoring-check" className="font-mono text-xs text-black cursor-pointer">
              <strong className="font-bold block uppercase">
                COMPLIMENTARY ATELIER TAILORING & EDGING
              </strong>
              <span className="text-neutral-600 block mt-0.5 text-[11px]">
                Includes fall attachment, picot edging, and pre-stitched pleat folding.
              </span>
            </label>
          </div>

          {/* Quantity & CTA Buttons */}
          <div className="mt-6 pt-5 border-t border-neutral-200">
            <div className="flex items-center gap-3 mb-3">
              {/* Quantity counter */}
              <div className="flex items-center border border-black bg-white font-mono text-xs">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-10 flex items-center justify-center font-bold text-black hover:bg-neutral-100"
                >
                  -
                </button>
                <span className="w-8 text-center font-bold text-black">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-10 flex items-center justify-center font-bold text-black hover:bg-neutral-100"
                >
                  +
                </button>
              </div>

              {/* Add to Bag */}
              <button
                id="modal-add-to-bag"
                onClick={() => onAddToCart(product, selectedColor, selectedSize, quantity, includeTailoring)}
                className="flex-1 py-3.5 px-4 bg-black hover:bg-neutral-800 text-white font-mono text-xs font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>ADD TO BAG</span>
              </button>
            </div>

            {/* Buy It Now direct button */}
            <button
              id="modal-buy-now"
              onClick={() => onDirectBuy(product, selectedColor, selectedSize, quantity, includeTailoring)}
              className="w-full py-3.5 bg-white hover:bg-black hover:text-white text-black border-2 border-black font-mono font-bold text-xs uppercase tracking-widest transition-colors"
            >
              EXPRESS CHECKOUT
            </button>
          </div>

          {/* Shipping & Delivery perks */}
          <div className="grid grid-cols-2 gap-3 mt-6 pt-5 border-t border-neutral-200 font-mono text-[10px] text-neutral-500 uppercase">
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-black" />
              <span>DISPATCH WITHIN 24-48 HRS</span>
            </div>
            <div className="flex items-center gap-2">
              <RefreshCw className="w-4 h-4 text-black" />
              <span>15-DAY RETURN SERVICE</span>
            </div>
          </div>

          {/* Accordion Tabs */}
          <div className="mt-6 border-t border-neutral-200 divide-y divide-neutral-200">
            {/* Accordion: Motifs & Features */}
            <div>
              <button
                onClick={() => setOpenAccordion(openAccordion === 'motifs' ? null : 'motifs')}
                className="w-full py-3.5 flex items-center justify-between font-mono text-xs font-bold uppercase tracking-wider text-black hover:underline"
              >
                <span>WEAVING MOTIFS & ORIGIN</span>
                {openAccordion === 'motifs' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              {openAccordion === 'motifs' && (
                <div className="pb-4 font-mono text-xs text-neutral-600 space-y-1.5 leading-relaxed uppercase">
                  <p><strong>MOTIF:</strong> {product.motif}</p>
                  <p><strong>MASTER WEAVER:</strong> {product.weaverArtisan} ({product.origin})</p>
                  <ul className="list-disc pl-4 space-y-1 mt-2">
                    {product.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Accordion: Silk Care */}
            <div>
              <button
                onClick={() => setOpenAccordion(openAccordion === 'care' ? null : 'care')}
                className="w-full py-3.5 flex items-center justify-between font-mono text-xs font-bold uppercase tracking-wider text-black hover:underline"
              >
                <span>SILK CARE & STORAGE</span>
                {openAccordion === 'care' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              {openAccordion === 'care' && (
                <div className="pb-4 font-mono text-xs text-neutral-600 space-y-1 leading-relaxed uppercase">
                  {product.careInstructions.map((c, i) => (
                    <p key={i}>• {c}</p>
                  ))}
                  <p className="pt-2 text-neutral-400">
                    STYLING NOTE: {product.stylingTips}
                  </p>
                </div>
              )}
            </div>

            {/* Accordion: Reviews */}
            <div>
              <button
                onClick={() => setOpenAccordion(openAccordion === 'reviews' ? null : 'reviews')}
                className="w-full py-3.5 flex items-center justify-between font-mono text-xs font-bold uppercase tracking-wider text-black hover:underline"
              >
                <span>VERIFIED REVIEWS ({product.reviews.length})</span>
                {openAccordion === 'reviews' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              {openAccordion === 'reviews' && (
                <div className="pb-4 space-y-2.5">
                  {product.reviews.map((rev) => (
                    <div key={rev.id} className="p-3 bg-neutral-100 border border-neutral-200 font-mono text-xs">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-black uppercase">{rev.author}</span>
                        <span className="text-neutral-500 text-[10px]">{rev.date}</span>
                      </div>
                      <div className="flex items-center gap-1 text-black my-1">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-black text-black" />
                        ))}
                        <span className="text-[10px] text-neutral-600 ml-1 flex items-center gap-1 uppercase">
                          <CheckCircle2 className="w-3 h-3 text-black" /> VERIFIED ({rev.location})
                        </span>
                      </div>
                      <p className="text-neutral-700 leading-relaxed mt-1 normal-case">
                        "{rev.comment}"
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
