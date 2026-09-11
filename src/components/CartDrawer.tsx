import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Tag } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, color: string, size: string, newQty: number) => void;
  onRemoveItem: (productId: string, color: string, size: string) => void;
  onProceedToCheckout: (appliedDiscount: number, couponCode: string) => void;
  currency: 'INR' | 'USD' | 'EUR';
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
  currency
}) => {
  if (!isOpen) return null;

  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<{ code: string; percent: number } | null>(null);
  const [couponError, setCouponError] = useState('');

  const freeShippingThreshold = 1499;

  const convertPrice = (inr: number) => {
    if (currency === 'USD') return `$${Math.round(inr / 85).toLocaleString()}`;
    if (currency === 'EUR') return `€${Math.round(inr / 92).toLocaleString()}`;
    return `₹${inr.toLocaleString('en-IN')}`;
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const discountAmount = appliedCoupon 
    ? Math.round((subtotal * appliedCoupon.percent) / 100) 
    : 0;

  const finalTotal = subtotal - discountAmount;
  const progressPercent = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));
  const amountNeeded = Math.max(0, freeShippingThreshold - subtotal);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    setCouponError('');
    const code = couponCode.trim().toUpperCase();
    if (code === 'ASSAM10' || code === 'NEXORA10') {
      setAppliedCoupon({ code, percent: 10 });
    } else if (code === 'BIHU2025' || code === 'SUALKUCHI15') {
      setAppliedCoupon({ code, percent: 15 });
    } else if (code === 'ROYAL20') {
      setAppliedCoupon({ code, percent: 20 });
    } else {
      setCouponError('INVALID CODE. TRY "ASSAM10"');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-xs transition-opacity" 
        onClick={onClose} 
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between border-l border-black">
          
          {/* Drawer Header */}
          <div className="p-5 border-b border-neutral-200 flex items-center justify-between bg-white">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-black" />
              <h2 className="font-heading text-lg font-black text-black uppercase tracking-tight">
                BAG ({cartItems.reduce((acc, i) => acc + i.quantity, 0)})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-black hover:bg-neutral-100 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="px-5 py-3 bg-neutral-100 border-b border-neutral-200 font-mono text-xs uppercase">
            {amountNeeded > 0 ? (
              <p className="text-neutral-700">
                ADD <strong className="text-black">{convertPrice(amountNeeded)}</strong> MORE FOR FREE EXPRESS SHIPPING
              </p>
            ) : (
              <p className="text-black font-bold">
                ✓ UNLOCKED: COMPLIMENTARY EXPRESS SHIPPING
              </p>
            )}
            <div className="w-full h-1.5 bg-neutral-300 mt-2 overflow-hidden">
              <div
                className="h-full bg-black transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-3">
            {cartItems.length > 0 ? (
              cartItems.map((item, idx) => (
                <div 
                  key={`${item.product.id}-${item.selectedColor}-${item.selectedSize}-${idx}`}
                  className="flex gap-4 p-3 bg-white border border-neutral-200 transition-all hover:border-black"
                >
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-20 h-24 object-cover border border-neutral-200 bg-neutral-100 flex-shrink-0"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between">
                        <h4 className="font-heading text-sm font-bold text-black uppercase line-clamp-1">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(item.product.id, item.selectedColor, item.selectedSize)}
                          className="text-neutral-400 hover:text-black p-1 transition-colors"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <p className="font-mono text-[11px] text-neutral-500 mt-0.5 uppercase">
                        {item.selectedColor} · SIZE {item.selectedSize}
                      </p>

                      {item.includeTailoring && (
                        <span className="inline-block font-mono text-[10px] text-black bg-neutral-100 px-1.5 py-0.5 mt-1 border border-neutral-300 uppercase">
                          + TAILORING SERVICE
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between mt-3 font-mono text-xs">
                      {/* Quantity buttons */}
                      <div className="flex items-center border border-black bg-white">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.selectedColor, item.selectedSize, item.quantity - 1)}
                          className="w-6 h-6 flex items-center justify-center font-bold text-black hover:bg-neutral-100"
                        >
                          -
                        </button>
                        <span className="w-6 text-center font-bold text-black">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.selectedColor, item.selectedSize, item.quantity + 1)}
                          className="w-6 h-6 flex items-center justify-center font-bold text-black hover:bg-neutral-100"
                        >
                          +
                        </button>
                      </div>

                      <span className="font-bold text-black">
                        {convertPrice(item.product.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-16 font-mono text-xs uppercase text-neutral-500">
                <ShoppingBag className="w-12 h-12 mx-auto mb-3 text-neutral-300" />
                <p className="font-heading text-lg font-black text-black">YOUR BAG IS EMPTY</p>
                <p className="mt-1">EXPLORE THE LATEST ASSAMESE SILK PIECES.</p>
                <button
                  onClick={onClose}
                  className="mt-4 px-6 py-2.5 bg-black text-white text-xs font-mono font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors"
                >
                  START SHOPPING
                </button>
              </div>
            )}
          </div>

          {/* Drawer Footer & Checkout */}
          {cartItems.length > 0 && (
            <div className="p-5 border-t border-neutral-200 bg-neutral-50 space-y-4 font-mono text-xs">
              {/* Coupon Code Input */}
              <form onSubmit={handleApplyCoupon} className="flex gap-2">
                <div className="relative flex-1">
                  <Tag className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    placeholder="PROMO CODE (E.G. ASSAM10)"
                    className="w-full pl-9 pr-3 py-2 text-xs uppercase bg-white border border-neutral-300 rounded-none focus:outline-none focus:border-black"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-black hover:bg-neutral-800 text-white text-xs font-mono font-bold uppercase tracking-wider transition-colors"
                >
                  APPLY
                </button>
              </form>

              {appliedCoupon && (
                <div className="flex items-center justify-between text-xs text-black bg-neutral-200 px-3 py-1.5 uppercase font-bold">
                  <span>CODE <strong>{appliedCoupon.code}</strong> (-{appliedCoupon.percent}%)</span>
                  <button onClick={() => setAppliedCoupon(null)} className="text-xs font-bold">✕</button>
                </div>
              )}
              {couponError && (
                <p className="text-[11px] text-black font-bold uppercase">{couponError}</p>
              )}

              {/* Price Breakdown */}
              <div className="space-y-1.5 text-xs text-neutral-600 uppercase">
                <div className="flex justify-between">
                  <span>SUBTOTAL</span>
                  <span className="font-bold text-black">{convertPrice(subtotal)}</span>
                </div>
                {appliedCoupon && (
                  <div className="flex justify-between text-black font-bold">
                    <span>DISCOUNT</span>
                    <span>-{convertPrice(discountAmount)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>EXPRESS SHIPPING</span>
                  <span className="font-bold text-black">
                    {subtotal >= freeShippingThreshold ? 'FREE' : convertPrice(150)}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-bold text-black pt-2 border-t border-neutral-300">
                  <span>ESTIMATED TOTAL</span>
                  <span>{convertPrice(finalTotal)}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                id="drawer-checkout-btn"
                onClick={() => {
                  onProceedToCheckout(discountAmount, appliedCoupon?.code || '');
                }}
                className="w-full py-4 bg-black hover:bg-neutral-800 text-white text-xs uppercase font-mono font-bold tracking-widest transition-all flex items-center justify-center gap-2"
              >
                <span>PROCEED TO CHECKOUT</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>

              <p className="text-[10px] text-center text-neutral-500 uppercase flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-black" />
                SECURE 256-BIT ENCRYPTED CHECKOUT
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
