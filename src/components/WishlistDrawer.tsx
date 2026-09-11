import React from 'react';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';
import { Product } from '../types';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistProducts: Product[];
  onRemoveFromWishlist: (productId: string) => void;
  onMoveToCart: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
  currency: 'INR' | 'USD' | 'EUR';
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlistProducts,
  onRemoveFromWishlist,
  onMoveToCart,
  onSelectProduct,
  currency
}) => {
  if (!isOpen) return null;

  const convertPrice = (inr: number) => {
    if (currency === 'USD') return `$${Math.round(inr / 85).toLocaleString()}`;
    if (currency === 'EUR') return `€${Math.round(inr / 92).toLocaleString()}`;
    return `₹${inr.toLocaleString('en-IN')}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-xs transition-opacity" 
        onClick={onClose} 
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between border-l border-black">
          {/* Header */}
          <div className="p-5 border-b border-neutral-200 flex items-center justify-between bg-white">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-black fill-black" />
              <h2 className="font-heading text-lg font-black text-black uppercase tracking-tight">
                WISHLIST ({wishlistProducts.length})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-black hover:bg-neutral-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Wishlist Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-3 font-mono">
            {wishlistProducts.length > 0 ? (
              wishlistProducts.map((p) => (
                <div
                  key={p.id}
                  className="flex gap-4 p-3 bg-white border border-neutral-200 transition-all hover:border-black"
                >
                  <img
                    src={p.images[0]}
                    alt={p.name}
                    onClick={() => {
                      onSelectProduct(p);
                      onClose();
                    }}
                    className="w-20 h-24 object-cover border border-neutral-200 bg-neutral-100 cursor-pointer flex-shrink-0"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between">
                        <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">
                          {p.silkType}
                        </span>
                        <button
                          onClick={() => onRemoveFromWishlist(p.id)}
                          className="text-neutral-400 hover:text-black p-0.5 transition-colors"
                          title="Remove from favorites"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <h4 
                        onClick={() => {
                          onSelectProduct(p);
                          onClose();
                        }}
                        className="font-heading text-sm font-bold text-black uppercase line-clamp-1 hover:underline cursor-pointer mt-0.5"
                      >
                        {p.name}
                      </h4>

                      <p className="font-mono text-xs font-bold text-black mt-1">
                        {convertPrice(p.price)}
                      </p>
                    </div>

                    <button
                      onClick={() => {
                        onMoveToCart(p);
                        onRemoveFromWishlist(p.id);
                      }}
                      className="mt-2 py-2 px-3 bg-black hover:bg-neutral-800 text-white text-[11px] font-mono font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
                    >
                      <ShoppingBag className="w-3 h-3 text-white" />
                      <span>MOVE TO BAG</span>
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-16 text-neutral-500 uppercase">
                <Heart className="w-12 h-12 mx-auto mb-3 text-neutral-300" />
                <p className="font-heading text-lg font-black text-black">NO SAVED ITEMS</p>
                <p className="text-xs mt-1">TAP THE HEART ON ANY WEAVE TO SAVE IT HERE.</p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-5 border-t border-neutral-200 bg-neutral-50">
            <button
              onClick={onClose}
              className="w-full py-3.5 bg-black hover:bg-neutral-800 text-white font-mono text-xs uppercase font-bold tracking-widest transition-colors"
            >
              CONTINUE BROWSING
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
