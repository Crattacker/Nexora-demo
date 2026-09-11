import React, { useState } from 'react';
import { Heart, ShoppingBag, Eye, Star } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onSelectProduct: (p: Product) => void;
  onAddToCart: (p: Product, color: string, size: string) => void;
  isWishlisted: boolean;
  onToggleWishlist: (p: Product) => void;
  currency: 'INR' | 'USD' | 'EUR';
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelectProduct,
  onAddToCart,
  isWishlisted,
  onToggleWishlist,
  currency
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);

  const convertPrice = (inr: number) => {
    if (currency === 'USD') return `$${Math.round(inr / 85).toLocaleString()}`;
    if (currency === 'EUR') return `€${Math.round(inr / 92).toLocaleString()}`;
    return `₹${inr.toLocaleString('en-IN')}`;
  };

  const discountPercent = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  const activeImage = isHovered && product.images[1] 
    ? product.images[1] 
    : product.images[0];

  const currentColor = product.colors[selectedColorIndex] || product.colors[0];
  const defaultSize = product.sizes[0] || 'Free Size';

  return (
    <div 
      className="group relative flex flex-col bg-white border border-neutral-200 hover:border-black transition-colors duration-200"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image & Badges Container */}
      <div 
        className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-100 cursor-pointer" 
        onClick={() => onSelectProduct(product)}
      >
        <img
          src={activeImage}
          alt={product.name}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Top Badges (Nike/Adidas black & white pills) */}
        <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
          {product.badge && (
            <span className="px-2.5 py-1 bg-black text-white text-[10px] font-mono font-bold tracking-widest uppercase">
              {product.badge}
            </span>
          )}

          {discountPercent > 0 && (
            <span className="px-2 py-0.5 bg-white text-black border border-black text-[10px] font-mono font-bold">
              -{discountPercent}%
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          id={`wishlist-btn-${product.id}`}
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product);
          }}
          className={`absolute top-3 right-3 p-2 transition-all z-10 ${
            isWishlisted 
              ? 'bg-black text-white' 
              : 'bg-white/90 hover:bg-black hover:text-white text-black border border-neutral-200'
          }`}
          aria-label="Toggle Wishlist"
        >
          <Heart className={`w-3.5 h-3.5 ${isWishlisted ? 'fill-white' : ''}`} />
        </button>

        {/* Floating Desktop Action */}
        <div className="absolute inset-x-3 bottom-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product, currentColor.name, defaultSize);
            }}
            className="flex-1 py-3 px-3 bg-black hover:bg-neutral-800 text-white text-xs font-mono font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-colors"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>ADD TO BAG</span>
          </button>
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelectProduct(product);
            }}
            className="p-3 bg-white hover:bg-black hover:text-white text-black border border-black transition-colors"
            title="Quick View"
          >
            <Eye className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Details Section */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Silk Type & Rating */}
          <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-neutral-500 mb-1.5">
            <span className="font-bold text-black">
              {product.silkType}
            </span>
            <span className="flex items-center gap-1 text-black font-bold">
              <Star className="w-3 h-3 fill-black text-black" />
              <span>{product.rating}</span>
              <span className="text-neutral-400">({product.reviewsCount})</span>
            </span>
          </div>

          {/* Product Title */}
          <h3 
            onClick={() => onSelectProduct(product)}
            className="text-xs sm:text-sm font-bold uppercase tracking-tight text-black line-clamp-2 hover:underline cursor-pointer leading-tight"
          >
            {product.name}
          </h3>

          {/* Motif & Subtitle */}
          <p className="text-[11px] font-mono text-neutral-500 mt-1 truncate uppercase">
            {product.motif}
          </p>
        </div>

        <div className="mt-3 pt-3 border-t border-neutral-100">
          {/* Swatch options (minimalist circles) */}
          {product.colors.length > 1 && (
            <div className="flex items-center gap-1.5 mb-2">
              {product.colors.map((c, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedColorIndex(i)}
                  className={`w-3.5 h-3.5 rounded-full border transition-all ${
                    selectedColorIndex === i 
                      ? 'border-black ring-1 ring-black scale-110' 
                      : 'border-neutral-300 opacity-80'
                  }`}
                  style={{ backgroundColor: c.hex }}
                  title={c.name}
                />
              ))}
              <span className="text-[10px] font-mono uppercase text-neutral-400 ml-1 truncate">
                {currentColor.name}
              </span>
            </div>
          )}

          {/* Price Section */}
          <div className="flex items-baseline justify-between">
            <div className="flex items-baseline gap-2">
              <span className="text-sm sm:text-base font-black font-mono text-black">
                {convertPrice(product.price)}
              </span>
              {product.originalPrice > product.price && (
                <span className="text-xs font-mono text-neutral-400 line-through">
                  {convertPrice(product.originalPrice)}
                </span>
              )}
            </div>

            {/* Mobile Instant Add */}
            <button
              onClick={() => onAddToCart(product, currentColor.name, defaultSize)}
              className="lg:hidden p-1.5 text-black hover:opacity-60"
              title="Add to bag"
            >
              <ShoppingBag className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
