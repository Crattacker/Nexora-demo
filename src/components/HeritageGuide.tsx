import React, { useState } from 'react';
import { SILK_VARIETIES } from '../data/products';
import { ShieldCheck, ArrowRight } from 'lucide-react';

interface HeritageGuideProps {
  onShopSilk: (silk: string) => void;
}

export const HeritageGuide: React.FC<HeritageGuideProps> = ({ onShopSilk }) => {
  const [activeTab, setActiveTab] = useState(0);
  const activeSilk = SILK_VARIETIES[activeTab];

  const SILK_THEMES = [
    {
      badge: 'bg-amber-400 text-black shadow-md shadow-amber-400/20',
      activeTab: 'border-amber-500 text-amber-700 bg-amber-50/80',
      btn: 'bg-amber-400 hover:bg-amber-300 text-black shadow-md shadow-amber-400/20',
      accentText: 'text-amber-400',
      highlightTag: 'text-amber-600',
      indicatorDot: 'bg-amber-400',
    },
    {
      badge: 'bg-rose-600 text-white shadow-md shadow-rose-600/20',
      activeTab: 'border-rose-600 text-rose-700 bg-rose-50/80',
      btn: 'bg-rose-600 hover:bg-rose-500 text-white shadow-md shadow-rose-600/20',
      accentText: 'text-rose-400',
      highlightTag: 'text-rose-600',
      indicatorDot: 'bg-rose-600',
    },
    {
      badge: 'bg-teal-600 text-white shadow-md shadow-teal-600/20',
      activeTab: 'border-teal-600 text-teal-700 bg-teal-50/80',
      btn: 'bg-teal-600 hover:bg-teal-500 text-white shadow-md shadow-teal-600/20',
      accentText: 'text-teal-400',
      highlightTag: 'text-teal-600',
      indicatorDot: 'bg-teal-600',
    }
  ];

  const currentTheme = SILK_THEMES[activeTab] || SILK_THEMES[0];

  return (
    <section id="heritage-guide" className="py-20 bg-white border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-mono">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-neutral-200 gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-amber-600 block mb-2 font-bold">
              [ RAW MATERIAL ORIGINS // ASSAM ]
            </span>
            <h2 className="font-heading text-4xl sm:text-6xl font-black text-black uppercase tracking-tighter">
              THE 3 SACRED SILKS
            </h2>
          </div>
          <p className="text-xs text-neutral-600 max-w-md uppercase tracking-wider">
            Natural organic wild silks indigenous exclusively to the Brahmaputra valley. Certified with the Silk Mark of India.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex border-b border-neutral-200 mb-10 overflow-x-auto gap-2">
          {SILK_VARIETIES.map((silk, idx) => {
            const isCurrent = activeTab === idx;
            const theme = SILK_THEMES[idx] || SILK_THEMES[0];
            return (
              <button
                key={silk.name}
                onClick={() => setActiveTab(idx)}
                className={`px-6 py-3.5 text-xs font-bold tracking-widest uppercase transition-all whitespace-nowrap border-b-2 flex items-center gap-2 ${
                  isCurrent
                    ? theme.activeTab
                    : 'border-transparent text-neutral-500 hover:text-black hover:bg-neutral-50'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${isCurrent ? theme.indicatorDot : 'bg-neutral-300'}`} />
                <span>{silk.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Silk Feature Spotlight */}
        <div className="border border-neutral-200 grid grid-cols-1 lg:grid-cols-12 bg-white shadow-sm">
          {/* Visual Canvas */}
          <div className="lg:col-span-6 relative aspect-[4/3] lg:aspect-auto border-b lg:border-b-0 lg:border-r border-neutral-200 bg-neutral-100 overflow-hidden group">
            <img
              src={activeSilk.image}
              alt={activeSilk.name}
              className="w-full h-full object-cover brightness-100 saturate-115 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
            
            <div className="absolute top-4 left-4">
              <span className={`px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest ${currentTheme.badge}`}>
                {activeSilk.badge}
              </span>
            </div>
            
            <div className="absolute bottom-4 left-4 right-4 bg-black/80 p-3.5 text-white backdrop-blur-xs border border-white/10">
              <p className={`text-[10px] tracking-widest uppercase font-bold ${currentTheme.accentText}`}>
                {activeSilk.assameseTitle}
              </p>
              <h3 className="font-heading text-xl font-bold uppercase text-white mt-0.5">
                {activeSilk.title}
              </h3>
            </div>
          </div>

          {/* Educational Attributes */}
          <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between">
            <div>
              <div className={`flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest mb-2 ${currentTheme.highlightTag}`}>
                <ShieldCheck className="w-4 h-4" />
                GI & SILK MARK PROTECTED
              </div>
              <h4 className="font-heading text-3xl sm:text-4xl font-black text-black uppercase tracking-tight">
                {activeSilk.name}
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed mt-4 normal-case font-sans">
                {activeSilk.description}
              </p>

              {/* Specific Characteristics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8 pt-6 border-t border-neutral-200">
                <div className="p-3 border border-neutral-200 bg-neutral-50">
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest block">
                    SHEEN & LUSTER
                  </span>
                  <span className="text-xs font-bold text-black mt-1 block uppercase">
                    {activeSilk.luster}
                  </span>
                </div>

                <div className="p-3 border border-neutral-200 bg-neutral-50">
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest block">
                    WEAVING REGION
                  </span>
                  <span className="text-xs font-bold text-black mt-1 block uppercase">
                    {activeSilk.origin}
                  </span>
                </div>

                <div className="p-3 border border-neutral-200 bg-neutral-50 sm:col-span-2">
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest block">
                    RARITY INDEX
                  </span>
                  <span className="text-xs font-bold text-black mt-1 block uppercase">
                    {activeSilk.rarity}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-[11px] text-neutral-500 uppercase text-center sm:text-left">
                SUALKUCHI ETHICAL WEAVER DIRECT ALLIANCE
              </div>
              <button
                onClick={() => {
                  onShopSilk(activeSilk.name);
                  const el = document.getElementById('products-catalog');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`w-full sm:w-auto px-8 py-3.5 text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 ${currentTheme.btn}`}
              >
                <span>SHOP {activeSilk.name}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
