import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Category } from '../types';

interface CategoryGridProps {
  onSelectCategory: (cat: Category) => void;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({ onSelectCategory }) => {
  const categories = [
    {
      title: 'MEKHELA SADOR',
      assamese: 'TWO-PIECE WEAVE · WILD MUGA & PAAT',
      subtitle: 'The architectural drape of Assam. Engineered on ancestral pit-looms in Sualkuchi.',
      image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
      category: 'Mekhela Sador' as Category,
      tag: 'CORE HERITAGE',
      tagColor: 'bg-amber-400 text-black shadow-sm',
      accentColor: 'text-amber-400',
      span: 'lg:col-span-2 lg:row-span-2'
    },
    {
      title: 'PAAT SILK SAREES',
      assamese: '6-YARD BROCADE · PURE MULBERRY',
      subtitle: 'Woven with fine Guna metallic wefts and classic peacock Kingkhap motifs.',
      image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80',
      category: 'Sarees' as Category,
      tag: 'BESTSELLER',
      tagColor: 'bg-rose-600 text-white shadow-sm',
      accentColor: 'text-rose-400',
      span: 'lg:col-span-1'
    },
    {
      title: 'CEREMONIAL RIHA',
      assamese: 'SACRED UPPER DRAPE · KESA PAAT',
      subtitle: 'The traditional statement piece for ceremonial rites and wedding festivities.',
      image: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=800&q=80',
      category: 'Riha' as Category,
      tag: 'ICONIC',
      tagColor: 'bg-indigo-600 text-white shadow-sm',
      accentColor: 'text-indigo-400',
      span: 'lg:col-span-1'
    },
    {
      title: 'ERI SILK JACKETS',
      assamese: 'STRUCTURED PEACE SILK · ZERO HARM',
      subtitle: 'Mandarin collar blazers, Nehru waistcoats, and utility overshirts.',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
      category: 'Jackets & Blazers' as Category,
      tag: 'NEW SILHOUETTE',
      tagColor: 'bg-teal-600 text-white shadow-sm',
      accentColor: 'text-teal-400',
      span: 'lg:col-span-1'
    },
    {
      title: 'MEN\'S ETHNIC',
      assamese: 'HANDSPUN KURTAS & WAISTCOATS',
      subtitle: 'Minimal raw organic Eri ensembles with handloom accents.',
      image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80',
      category: 'Men\'s Ethnic' as Category,
      tag: 'MENSWEAR',
      tagColor: 'bg-emerald-600 text-white shadow-sm',
      accentColor: 'text-emerald-400',
      span: 'lg:col-span-1'
    }
  ];

  return (
    <section className="py-16 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-black">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-500 block mb-1">
              CATEGORY SELECTOR
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-black text-black tracking-tighter uppercase">
              SHOP BY SILHOUETTE
            </h2>
          </div>
          <button
            onClick={() => onSelectCategory('All')}
            className="mt-3 sm:mt-0 inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-black hover:underline"
          >
            <span>VIEW ALL ({categories.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Categories Bento Grid (Nike/Adidas high-impact aesthetic) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[280px] lg:auto-rows-[300px]">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              onClick={() => onSelectCategory(cat.category)}
              className={`group relative overflow-hidden cursor-pointer bg-black ${cat.span}`}
            >
              {/* Image in vibrant full handloom colors */}
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover object-center brightness-95 saturate-115 group-hover:scale-105 group-hover:brightness-105 transition-all duration-500"
              />

              {/* Minimal Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 group-hover:from-black/80 transition-colors" />

              {/* Tag Pill */}
              <div className="absolute top-4 left-4">
                <span className={`px-2.5 py-1 font-mono text-[10px] font-bold tracking-widest uppercase ${cat.tagColor}`}>
                  {cat.tag}
                </span>
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <p className="font-mono text-[10px] text-neutral-300 uppercase tracking-widest mb-1">
                  {cat.assamese}
                </p>
                <h3 className="font-heading text-2xl sm:text-3xl font-black uppercase tracking-tight text-white group-hover:underline">
                  {cat.title}
                </h3>
                <p className="text-xs text-neutral-300 line-clamp-2 mt-1 font-normal max-w-sm">
                  {cat.subtitle}
                </p>
                <div className={`mt-3 inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-widest text-white group-hover:translate-x-1 transition-transform group-hover:${cat.accentColor}`}>
                  <span>EXPLORE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
