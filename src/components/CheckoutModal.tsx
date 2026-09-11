import React, { useState } from 'react';
import { 
  X, 
  CheckCircle, 
  CreditCard, 
  ShieldCheck, 
  Truck, 
  Lock, 
  ArrowRight
} from 'lucide-react';
import { CartItem } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  discountAmount: number;
  appliedCouponCode: string;
  onOrderCompleted: () => void;
  currency: 'INR' | 'USD' | 'EUR';
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  cartItems,
  discountAmount,
  appliedCouponCode,
  onOrderCompleted,
  currency
}) => {
  if (!isOpen) return null;

  const [step, setStep] = useState<'details' | 'payment' | 'confirmed'>('details');
  const [formData, setFormData] = useState({
    fullName: 'Ananya Hazarika',
    email: 'ananya.hazarika@example.com',
    phone: '+91 98765 43210',
    address: 'Brahmaputra Heritage Villa, GS Road',
    city: 'Guwahati',
    state: 'Assam',
    pincode: '781005',
    notes: 'Please include Silk Mark authenticity certificate card.'
  });

  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'cod'>('upi');
  const [orderId, setOrderId] = useState('');

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const shipping = subtotal >= 1499 ? 0 : 150;
  const total = Math.max(0, subtotal - discountAmount + shipping);

  const convertPrice = (inr: number) => {
    if (currency === 'USD') return `$${Math.round(inr / 85).toLocaleString()}`;
    if (currency === 'EUR') return `€${Math.round(inr / 92).toLocaleString()}`;
    return `₹${inr.toLocaleString('en-IN')}`;
  };

  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
  };

  const handlePlaceOrder = () => {
    const generatedId = `NX-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(generatedId);
    setStep('confirmed');
    onOrderCompleted();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 font-mono">
      <div 
        className="relative bg-white w-full max-w-3xl overflow-hidden shadow-2xl border border-black my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 bg-white border-b border-neutral-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-heading text-lg font-black tracking-tight text-black uppercase">
              CHECKOUT
            </span>
            <span className="text-neutral-300">•</span>
            <span className="text-xs text-neutral-600 uppercase flex items-center gap-1">
              <Lock className="w-3.5 h-3.5 text-black" /> 256-BIT ENCRYPTION
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-black hover:bg-neutral-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Multi-step Content */}
        <div className="p-6 sm:p-8">
          {/* Progress step indicators */}
          {step !== 'confirmed' && (
            <div className="flex items-center justify-center gap-4 mb-8 text-xs font-bold uppercase tracking-wider">
              <div className={`flex items-center gap-2 ${
                step === 'details' ? 'text-black' : 'text-neutral-400'
              }`}>
                <span className={`w-6 h-6 flex items-center justify-center text-xs ${
                  step === 'details' ? 'bg-black text-white' : 'bg-neutral-200 text-black'
                }`}>
                  {step === 'payment' ? '✓' : '1'}
                </span>
                <span>DELIVERY</span>
              </div>
              <div className="w-12 h-0.5 bg-neutral-300" />
              <div className={`flex items-center gap-2 ${
                step === 'payment' ? 'text-black' : 'text-neutral-400'
              }`}>
                <span className={`w-6 h-6 flex items-center justify-center text-xs ${
                  step === 'payment' ? 'bg-black text-white' : 'bg-neutral-100 border border-neutral-300 text-neutral-400'
                }`}>
                  2
                </span>
                <span>PAYMENT</span>
              </div>
            </div>
          )}

          {/* STEP 1: Shipping Details */}
          {step === 'details' && (
            <form onSubmit={handleDetailsSubmit} className="space-y-4 text-xs uppercase">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-black mb-1">
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-neutral-300 text-xs focus:outline-none focus:border-black uppercase"
                  />
                </div>
                <div>
                  <label className="block font-bold text-black mb-1">
                    PHONE NUMBER *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-neutral-300 text-xs focus:outline-none focus:border-black uppercase"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-black mb-1">
                  EMAIL ADDRESS (FOR INVOICE & DISPATCH) *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-neutral-300 text-xs focus:outline-none focus:border-black"
                />
              </div>

              <div>
                <label className="block font-bold text-black mb-1">
                  STREET ADDRESS / HOUSE NUMBER *
                </label>
                <input
                  type="text"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-neutral-300 text-xs focus:outline-none focus:border-black uppercase"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block font-bold text-black mb-1">
                    CITY *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-neutral-300 text-xs focus:outline-none focus:border-black uppercase"
                  />
                </div>
                <div>
                  <label className="block font-bold text-black mb-1">
                    STATE *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-neutral-300 text-xs focus:outline-none focus:border-black uppercase"
                  />
                </div>
                <div>
                  <label className="block font-bold text-black mb-1">
                    POSTAL CODE *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.pincode}
                    onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-neutral-300 text-xs focus:outline-none focus:border-black uppercase"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-black mb-1">
                  ORDER NOTES / TAILORING REQUESTS
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 bg-white border border-neutral-300 text-xs focus:outline-none focus:border-black uppercase"
                />
              </div>

              <div className="pt-4 border-t border-neutral-200 flex items-center justify-between">
                <div className="text-xs text-neutral-600">
                  TOTAL: <strong className="text-black text-sm">{convertPrice(total)}</strong>
                </div>
                <button
                  type="submit"
                  className="px-8 py-3.5 bg-black hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-2"
                >
                  <span>PROCEED TO PAYMENT</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
              </div>
            </form>
          )}

          {/* STEP 2: Payment Method */}
          {step === 'payment' && (
            <div className="space-y-6 text-xs uppercase">
              <div className="space-y-3">
                <label className="block font-bold text-black tracking-wider">
                  SELECT PAYMENT METHOD:
                </label>

                {/* UPI Option */}
                <div 
                  onClick={() => setPaymentMethod('upi')}
                  className={`p-4 border cursor-pointer transition-all flex items-center justify-between ${
                    paymentMethod === 'upi' 
                      ? 'border-black bg-neutral-100' 
                      : 'border-neutral-300 hover:border-black'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full border-2 border-black flex items-center justify-center p-0.5">
                      {paymentMethod === 'upi' && <div className="w-full h-full bg-black rounded-full" />}
                    </div>
                    <div>
                      <p className="font-bold text-black">UPI (GOOGLE PAY / PHONEPE / PAYTM)</p>
                      <p className="text-[11px] text-neutral-500">INSTANT ZERO FEE CHECKOUT</p>
                    </div>
                  </div>
                  <span className="text-[10px] bg-black text-white font-bold px-2 py-0.5">
                    FASTEST
                  </span>
                </div>

                {/* Credit / Debit Card Option */}
                <div 
                  onClick={() => setPaymentMethod('card')}
                  className={`p-4 border cursor-pointer transition-all flex items-center justify-between ${
                    paymentMethod === 'card' 
                      ? 'border-black bg-neutral-100' 
                      : 'border-neutral-300 hover:border-black'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full border-2 border-black flex items-center justify-center p-0.5">
                      {paymentMethod === 'card' && <div className="w-full h-full bg-black rounded-full" />}
                    </div>
                    <div>
                      <p className="font-bold text-black">CREDIT / DEBIT CARDS (DOMESTIC & GLOBAL)</p>
                      <p className="text-[11px] text-neutral-500">VISA, MASTERCARD, AMEX, RUPAY</p>
                    </div>
                  </div>
                  <CreditCard className="w-5 h-5 text-black" />
                </div>

                {/* Cash on Delivery */}
                <div 
                  onClick={() => setPaymentMethod('cod')}
                  className={`p-4 border cursor-pointer transition-all flex items-center justify-between ${
                    paymentMethod === 'cod' 
                      ? 'border-black bg-neutral-100' 
                      : 'border-neutral-300 hover:border-black'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full border-2 border-black flex items-center justify-center p-0.5">
                      {paymentMethod === 'cod' && <div className="w-full h-full bg-black rounded-full" />}
                    </div>
                    <div>
                      <p className="font-bold text-black">CASH ON DELIVERY (COD)</p>
                      <p className="text-[11px] text-neutral-500">PAY UPON HAND DELIVERY</p>
                    </div>
                  </div>
                  <Truck className="w-5 h-5 text-black" />
                </div>
              </div>

              {/* Order Items Review Summary */}
              <div className="bg-neutral-50 p-4 border border-neutral-300 space-y-2">
                <div className="flex justify-between text-neutral-600">
                  <span>ITEMS ({cartItems.length}):</span>
                  <span>{convertPrice(subtotal)}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-black font-bold">
                    <span>DISCOUNT ({appliedCouponCode}):</span>
                    <span>-{convertPrice(discountAmount)}</span>
                  </div>
                )}
                <div className="flex justify-between text-neutral-600">
                  <span>EXPRESS COURIER:</span>
                  <span className="font-bold text-black">{shipping === 0 ? 'FREE' : convertPrice(shipping)}</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-black pt-2 border-t border-neutral-300">
                  <span>TOTAL PAYABLE:</span>
                  <span>{convertPrice(total)}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={() => setStep('details')}
                  className="text-neutral-500 hover:text-black font-bold"
                >
                  ← EDIT DETAILS
                </button>
                <button
                  onClick={handlePlaceOrder}
                  className="px-8 py-4 bg-black hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-widest transition-all flex items-center gap-2"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>CONFIRM ORDER ({convertPrice(total)})</span>
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Order Confirmed Receipt */}
          {step === 'confirmed' && (
            <div className="text-center py-6 space-y-6 uppercase">
              <div className="w-16 h-16 bg-black text-white flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs font-bold text-neutral-500 tracking-widest block mb-1">
                  ORDER CONFIRMED
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-black text-black">
                  THANK YOU FOR YOUR ORDER
                </h3>
                <p className="text-xs text-neutral-600 mt-2 max-w-md mx-auto normal-case font-mono">
                  Order reference <strong className="text-black font-bold">{orderId}</strong> has been received by the Sualkuchi dispatch atelier. An email confirmation has been sent to {formData.email}.
                </p>
              </div>

              {/* Summary Card */}
              <div className="max-w-md mx-auto bg-neutral-50 p-5 border border-neutral-300 text-left text-xs space-y-2">
                <div className="flex justify-between border-b border-neutral-200 pb-2">
                  <span className="text-neutral-500">DISPATCH TIMELINE:</span>
                  <strong className="text-black">24-48 HOURS</strong>
                </div>
                <div className="flex justify-between border-b border-neutral-200 pb-2">
                  <span className="text-neutral-500">DESTINATION:</span>
                  <strong className="text-black text-right">{formData.city}, {formData.pincode}</strong>
                </div>
                <div className="flex justify-between border-b border-neutral-200 pb-2">
                  <span className="text-neutral-500">PAYMENT:</span>
                  <strong className="text-black">{paymentMethod}</strong>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-neutral-500">TOTAL PAID:</span>
                  <strong className="text-black text-sm">{convertPrice(total)}</strong>
                </div>
              </div>

              <button
                onClick={onClose}
                className="px-8 py-3.5 bg-black hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-widest transition-colors"
              >
                RETURN TO STORE
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
