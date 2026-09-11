import React, { useState } from 'react';
import { LOOKBOOK_DATA, PRODUCTS } from '../data/products';
import { Product } from '../types';
import { Eye, ShoppingBag } from 'lucide-react';

interface ShopTheLookProps {
  onSelectProduct: (p: Product) => void;
  onAddToCart: (p: Product, color: string, size: string) => void;
  currency: 'INR' | 'USD' | 'EUR';
}

export const ShopTheLook: React.FC<ShopTheLookProps> = ({
  onSelectProduct,
  onAddToCart,
  currency
}) => {
  const [activeHotspotId, setActiveHotspotId] = useState<string | null>(LOOKBOOK_DATA.hotspots[0].id);

  const convertPrice = (inr: number) => {
    if (currency === 'USD') return `$${Math.round(inr / 85).toLocaleString()}`;
    if (currency === 'EUR') return `€${Math.round(inr / 92).toLocaleString()}`;
    return `₹${inr.toLocaleString('en-IN')}`;
  };

  const activeHotspot = LOOKBOOK_DATA.hotspots.find(h => h.id === activeHotspotId);
  const activeProduct = activeHotspot 
    ? PRODUCTS.find(p => p.id === activeHotspot.productId) 
    : null;

  return (
    <section id="lookbook" className="py-20 bg-black text-white relative border-t border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-neutral-800 gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-amber-400 block mb-2 font-bold">
              [ EDITORIAL // LOOKBOOK 01 ]
            </span>
            <h2 className="font-heading text-4xl sm:text-6xl font-black uppercase tracking-tighter">
              {LOOKBOOK_DATA.title}
            </h2>
          </div>
          <p className="font-mono text-xs text-neutral-400 max-w-md uppercase tracking-wider">
            {LOOKBOOK_DATA.description}
          </p>
        </div>

        {/* Lookbook Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Hotspot Photo */}
          <div className="lg:col-span-8 relative aspect-[4/5] sm:aspect-[16/11] border border-neutral-800 bg-neutral-900 overflow-hidden">
            <img
              src={LOOKBOOK_DATA.image}
              alt={LOOKBOOK_DATA.title}
              className="w-full h-full object-cover object-center brightness-100 saturate-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10 pointer-events-none" />

            {/* Hotspot Pins */}
            {LOOKBOOK_DATA.hotspots.map((spot) => {
              const isActive = activeHotspotId === spot.id;
              return (
                <div
                  key={spot.id}
                  style={{ left: `${spot.xPercent}%`, top: `${spot.yPercent}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
                >
                  <button
                    onClick={() => setActiveHotspotId(isActive ? null : spot.id)}
                    className={`relative group p-2.5 transition-all duration-200 rounded-full ${
                      isActive 
                        ? 'bg-amber-400 text-black scale-125 shadow-[0_0_20px_#F59E0B]' 
                        : 'bg-black/80 text-amber-300 hover:bg-amber-400 hover:text-black border border-amber-400/80 shadow-md'
                    }`}
                    aria-label={`Hotspot: ${spot.title}`}
                  >
                    <span className="relative flex items-center justify-center font-mono font-bold text-xs w-4 h-4">
                      {isActive ? '✕' : '+'}
                    </span>
                  </button>

                  {/* Desktop Floating Tooltip Badge */}
                  <div className="hidden sm:block absolute left-full ml-3 top-1/2 -translate-y-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity bg-amber-400 text-black font-mono font-bold px-3 py-1 text-[11px] uppercase tracking-wider whitespace-nowrap shadow-xl">
                    {spot.title}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Side Active Piece Details */}
          <div className="lg:col-span-4 flex flex-col">
            {activeProduct ? (
              <div className="bg-neutral-950 border border-neutral-800 p-6 flex-1 flex flex-col justify-between font-mono">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-neutral-800 text-[11px] font-bold text-neutral-400 uppercase tracking-widest">
                    <span className="text-amber-400">{activeHotspot?.role}</span>
                    <span className="text-white">HOTSPOT PIN</span>
                  </div>

                  <div className="mt-4 flex gap-4">
                    <img
                      src={activeProduct.images[0]}
                      alt={activeProduct.name}
                      className="w-24 h-28 object-cover border border-amber-400/40 bg-neutral-800 flex-shrink-0 brightness-100 saturate-110 shadow-md"
                    />
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] px-2 py-0.5 bg-amber-400 text-black font-bold uppercase tracking-widest">
                          {activeProduct.silkType}
                        </span>
                        <h4 className="font-heading text-lg font-black text-white uppercase mt-2 line-clamp-2">
                          {activeProduct.name}
                        </h4>
                        <p className="text-[11px] text-neutral-400 mt-1 uppercase">
                          {activeProduct.motif}
                        </p>
                      </div>

                      <div className="flex items-baseline gap-2 mt-2 font-mono">
                        <span className="text-base font-bold text-amber-400">
                          {convertPrice(activeProduct.price)}
                        </span>
                        <span className="text-xs text-neutral-500 line-through">
                          {convertPrice(activeProduct.originalPrice)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-neutral-400 mt-4 line-clamp-3 leading-relaxed font-sans">
                    {activeProduct.description}
                  </p>
                </div>

                {/* Actions */}
                <div className="mt-6 flex flex-col gap-2.5">
                  <button
                    onClick={() => onAddToCart(activeProduct, activeProduct.colors[0].name, activeProduct.sizes[0])}
                    className="w-full py-3.5 bg-amber-400 hover:bg-amber-300 text-black font-mono font-bold text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2 shadow-md shadow-amber-400/20"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>ADD LOOK TO BAG</span>
                  </button>

                  <button
                    onClick={() => onSelectProduct(activeProduct)}
                    className="w-full py-3 bg-transparent hover:bg-neutral-800 text-white border border-neutral-700 font-mono text-xs uppercase font-bold tracking-widest transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>VIEW SPECIFICATIONS</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-neutral-950 border border-neutral-800 p-8 text-center text-neutral-500 font-mono text-xs uppercase flex-1 flex items-center justify-center">
                SELECT A HOTSPOT PIN TO VIEW WEAVE DETAILS
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
