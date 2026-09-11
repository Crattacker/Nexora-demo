import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, ShieldCheck } from 'lucide-react';
import { Category } from '../types';

interface HeroSliderProps {
  onShopCategory: (cat: Category) => void;
  onExploreLookbook: () => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ 
  onShopCategory,
  onExploreLookbook 
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      tag: 'NEW RELEASE · THE GOLDEN ARCHIVE',
      title: 'WILD MUGA & PURE PAAT',
      subtitle: 'HANDWOVEN HERITAGE SILKS OF SUALKUCHI',
      description: 'Crafted with iconic Kingkhap & Kolka motifs on pure mulberry and wild golden silk looms. Engineered for modern celebration and heirloom permanence.',
      category: 'Mekhela Sador' as Category,
      image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1600&q=85',
      primaryBtn: 'SHOP COLLECTION',
      secondaryBtn: 'VIEW LOOKBOOK',
      badge: 'GI TAG CERTIFIED'
    },
    {
      id: 2,
      tag: 'CONTEMPORARY TAILORING · DROP 02',
      title: 'AHIMSA ERI SILK JACKETS',
      subtitle: 'ZERO HARM · 100% ORGANIC PEACE SILK',
      description: 'Structured Mandarin blazers, Nehru waistcoats, and utility overcoats. Thermal regulation, raw organic texture, and precision hand-tailoring.',
      category: 'Jackets & Blazers' as Category,
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1600&q=85',
      primaryBtn: 'DISCOVER JACKETS',
      secondaryBtn: 'EXPLORE FIT GUIDE',
      badge: '100% PEACE SILK'
    },
    {
      id: 3,
      tag: 'CEREMONIAL EDITION · LIMITED RUN',
      title: 'CEREMONIAL RIHA & DRAPES',
      subtitle: 'THE QUINTESSENTIAL ASSAM TRADITION',
      description: 'Handwoven Kesa Paat raw silk stoles and festive Riha drapes woven with zari Guna borders. Minimalist draping redefined for weddings and rituals.',
      category: 'Riha' as Category,
      image: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=1600&q=85',
      primaryBtn: 'SHOP CEREMONIAL RIHA',
      secondaryBtn: 'DRAPING GUIDE',
      badge: 'SILK MARK AUTHORIZED'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const slide = slides[currentSlide];

  return (
    <div className="relative w-full overflow-hidden bg-black text-white">
      {/* Background Image Container */}
      <div className="relative h-[560px] sm:h-[640px] lg:h-[720px] w-full">
        {slides.map((s, index) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={s.image}
              alt={s.title}
              className="w-full h-full object-cover object-center brightness-90 saturate-110 transition-transform duration-1000 scale-105"
            />
            {/* Rich Gradient Overlays preserving silk color in right half */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
          </div>
        ))}

        {/* Content Box */}
        <div className="relative z-20 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <div className="max-w-3xl space-y-4 sm:space-y-5">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-amber-400 text-black font-mono text-[10px] sm:text-xs font-bold tracking-widest uppercase shadow-md shadow-amber-400/20">
              {slide.tag}
            </div>

            {/* Main Headline (Nike/Adidas giant uppercase grotesque) */}
            <h2 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-white uppercase leading-[0.95]">
              {slide.title}
            </h2>

            {/* Subtitle */}
            <p className="font-mono text-sm sm:text-base font-bold tracking-wider text-amber-200 uppercase">
              {slide.subtitle}
            </p>

            {/* Description */}
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-xl font-normal">
              {slide.description}
            </p>

            {/* Vibrant Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                id="hero-primary-cta"
                onClick={() => onShopCategory(slide.category)}
                className="px-8 py-4 bg-amber-400 hover:bg-amber-300 text-black font-mono font-black text-xs sm:text-sm tracking-widest uppercase transition-all flex items-center gap-2 shadow-lg shadow-amber-400/30"
              >
                <span>{slide.primaryBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-secondary-cta"
                onClick={onExploreLookbook}
                className="px-8 py-4 bg-black/40 hover:bg-white hover:text-black text-white border border-white/60 font-mono font-bold text-xs sm:text-sm tracking-widest uppercase transition-all backdrop-blur-xs"
              >
                {slide.secondaryBtn}
              </button>
            </div>

            {/* Minimalist authenticity strip */}
            <div className="pt-4 flex items-center gap-4 text-[11px] font-mono text-neutral-300 uppercase tracking-widest">
              <span className="flex items-center gap-1.5 text-amber-400 font-bold">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                {slide.badge}
              </span>
              <span>·</span>
              <span>DIRECT SUALKUCHI LOOMS</span>
              <span>·</span>
              <span className="text-emerald-400 font-bold">FREE SHIPPING</span>
            </div>
          </div>
        </div>

        {/* Minimal Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 bg-black/60 hover:bg-white hover:text-black text-white border border-white/30 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 bg-black/60 hover:bg-white hover:text-black text-white border border-white/30 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Minimalist Slide Indicator Lines */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1 transition-all duration-300 rounded-full ${
                i === currentSlide ? 'w-10 bg-amber-400 shadow-sm shadow-amber-400/50' : 'w-4 bg-white/40'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
