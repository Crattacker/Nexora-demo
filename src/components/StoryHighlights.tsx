import React from 'react';
import { Category } from '../types';

interface StoryHighlightsProps {
  onSelectCategory: (category: Category) => void;
  onFilterBadge?: (badge: string) => void;
}

export const StoryHighlights: React.FC<StoryHighlightsProps> = ({ 
  onSelectCategory,
  onFilterBadge
}) => {
  const highlights = [
    {
      id: 'sale',
      title: 'SALE -30%',
      sub: 'LIMITED ARCHIVE',
      type: 'color-badge',
      colorBg: 'bg-red-600 text-white shadow-md shadow-red-500/30 border-2 border-red-500',
      category: 'All' as Category,
      badgeFilter: 'All'
    },
    {
      id: 'new-in',
      title: 'NEW IN',
      sub: 'LATEST DROP',
      type: 'color-badge',
      colorBg: 'bg-emerald-600 text-white shadow-md shadow-emerald-500/30 border-2 border-emerald-500',
      category: 'All' as Category,
      badgeFilter: 'Just In'
    },
    {
      id: 'best-sellers',
      title: 'BESTSELLERS',
      sub: 'ICONIC SILKS',
      type: 'color-badge',
      colorBg: 'bg-amber-500 text-black shadow-md shadow-amber-500/30 border-2 border-amber-400 font-bold',
      category: 'All' as Category,
      badgeFilter: 'Best Seller'
    },
    {
      id: 'muga-silk',
      title: 'MUGA SILK',
      sub: 'GOLDEN WEAVE',
      borderColor: 'border-amber-400 group-hover:border-amber-300 ring-2 ring-amber-400/40',
      image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=400&q=80',
      category: 'Mekhela Sador' as Category
    },
    {
      id: 'paat-saree',
      title: 'PAAT SAREES',
      sub: 'MULBERRY',
      borderColor: 'border-rose-500 group-hover:border-rose-400 ring-2 ring-rose-500/40',
      image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=400&q=80',
      category: 'Sarees' as Category
    },
    {
      id: 'riha-stoles',
      title: 'RIHA',
      sub: 'SACRED DRAPE',
      borderColor: 'border-indigo-500 group-hover:border-indigo-400 ring-2 ring-indigo-500/40',
      image: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=400&q=80',
      category: 'Riha' as Category
    },
    {
      id: 'eri-jackets',
      title: 'ERI JACKETS',
      sub: 'PEACE SILK',
      borderColor: 'border-teal-500 group-hover:border-teal-400 ring-2 ring-teal-500/40',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=400&q=80',
      category: 'Jackets & Blazers' as Category
    },
    {
      id: 'bridal',
      title: 'BRIDAL TROUSSEAU',
      sub: 'AHOM IMPERIAL',
      borderColor: 'border-purple-500 group-hover:border-purple-400 ring-2 ring-purple-500/40',
      image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=400&q=80',
      category: 'Bridal & Heritage' as Category
    }
  ];

  return (
    <section className="bg-white py-4 sm:py-6 border-b border-neutral-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 sm:gap-4 overflow-x-auto pb-1 scrollbar-none snap-x">
          {highlights.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onSelectCategory(item.category);
                if (item.badgeFilter && onFilterBadge) {
                  onFilterBadge(item.badgeFilter);
                }
              }}
              className="flex-shrink-0 flex flex-col items-center group cursor-pointer text-center snap-start"
            >
              {item.image ? (
                <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden p-0.5 border ${item.borderColor || 'border-neutral-300'} transition-transform group-hover:scale-105`}>
                  <div className="w-full h-full rounded-full overflow-hidden relative transition-all duration-300">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60 group-hover:opacity-0 transition-opacity" />
                  </div>
                </div>
              ) : (
                <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full flex flex-col items-center justify-center p-2 text-center transition-transform group-hover:scale-105 ${
                  item.colorBg || (item.type === 'solid-black' ? 'bg-black text-white' : 'bg-white border-2 border-black text-black')
                }`}>
                  <span className="text-[11px] sm:text-xs font-mono font-black tracking-tight leading-tight uppercase">
                    {item.title}
                  </span>
                  <span className="text-[8px] sm:text-[9px] font-mono tracking-widest opacity-90 uppercase mt-0.5">
                    {item.sub}
                  </span>
                </div>
              )}

              <span className="mt-2 text-[10px] sm:text-[11px] font-mono font-bold text-black uppercase tracking-wider group-hover:underline max-w-[80px] sm:max-w-[90px] truncate">
                {item.title}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
