import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Heart, 
  Search, 
  Menu, 
  X, 
  MapPin, 
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import { Category, Product } from '../types';

interface NavbarProps {
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  selectedCategory: Category;
  onSelectCategory: (cat: Category) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  currency: 'INR' | 'USD' | 'EUR';
  onCurrencyChange: (c: 'INR' | 'USD' | 'EUR') => void;
  products: Product[];
  onSelectProduct: (p: Product) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  currency,
  onCurrencyChange,
  products,
  onSelectProduct
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const announcementMessages = [
    'FREE SHIPPING ON ALL ORDERS OVER ₹1,499 · NO CODE NEEDED',
    'CERTIFIED 100% PURE SUALKUCHI SILK MARK & HANDLOOM AUTHORIZED',
    'COMPLIMENTARY BESPOKE FALL & BLOUSE TAILORING ON ALL PIECES'
  ];
  const [bannerIdx] = useState(0);

  // Quick search suggestions
  const searchResults = searchQuery.trim().length > 1 
    ? products.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.silkType.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.motif.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5)
    : [];

  const navLinks: { label: string; category: Category }[] = [
    { label: 'ALL PRODUCTS', category: 'All' },
    { label: 'MEKHELA SADOR', category: 'Mekhela Sador' },
    { label: 'SAREES', category: 'Sarees' },
    { label: 'CEREMONIAL RIHA', category: 'Riha' },
    { label: 'JACKETS & BLAZERS', category: 'Jackets & Blazers' },
    { label: 'MEN\'S ETHNIC', category: 'Men\'s Ethnic' },
    { label: 'BRIDAL & HERITAGE', category: 'Bridal & Heritage' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-neutral-200">
      {/* Top Black Minimalist Ticker */}
      <div className="bg-black text-white text-[11px] font-mono py-1.5 px-4 tracking-wider flex items-center justify-between">
        <div className="hidden md:flex items-center gap-4 text-[10px] text-neutral-400 uppercase tracking-widest">
          <span className="flex items-center gap-1">
            <MapPin className="w-3 h-3 text-white" /> SUALKUCHI ATELIER · ASSAM
          </span>
          <span>|</span>
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-white" /> SILK MARK CERTIFIED
          </span>
        </div>

        <div className="flex-1 text-center font-bold tracking-widest text-[10px] uppercase">
          {announcementMessages[bannerIdx]}
        </div>

        <div className="flex items-center gap-3 text-[10px] tracking-widest font-bold">
          <div className="flex items-center gap-1 border border-neutral-700 px-2 py-0.5 rounded">
            <button
              onClick={() => onCurrencyChange('INR')}
              className={`transition-colors ${currency === 'INR' ? 'text-white underline' : 'text-neutral-500 hover:text-white'}`}
            >
              INR
            </button>
            <span className="text-neutral-600">/</span>
            <button
              onClick={() => onCurrencyChange('USD')}
              className={`transition-colors ${currency === 'USD' ? 'text-white underline' : 'text-neutral-500 hover:text-white'}`}
            >
              USD
            </button>
            <span className="text-neutral-600">/</span>
            <button
              onClick={() => onCurrencyChange('EUR')}
              className={`transition-colors ${currency === 'EUR' ? 'text-white underline' : 'text-neutral-500 hover:text-white'}`}
            >
              EUR
            </button>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Mobile Menu Icon */}
          <button
            id="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-black hover:opacity-60 transition-opacity"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Minimal Brand Logo */}
          <div 
            className="flex items-center cursor-pointer group" 
            onClick={() => onSelectCategory('All')}
          >
            <div className="text-left">
              <span className="font-heading font-black text-2xl sm:text-3xl tracking-tighter text-black uppercase leading-none block">
                NEXORA
              </span>
              <span className="text-[9px] font-mono tracking-[0.25em] text-neutral-500 uppercase block mt-0.5">
                HANDLOOM · SUALKUCHI
              </span>
            </div>
          </div>

          {/* Desktop Search Bar (Nike/Adidas pill style) */}
          <div className="hidden lg:flex items-center flex-1 max-w-sm mx-10 relative">
            <div className="relative w-full">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
              <input
                id="header-desktop-search"
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="SEARCH PRODUCTS, SILK, MOTIFS..."
                className="w-full pl-10 pr-8 py-2 text-xs font-mono uppercase bg-neutral-100 hover:bg-neutral-200/80 focus:bg-white border border-transparent focus:border-black rounded-full text-black placeholder-neutral-500 transition-all outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-neutral-500 hover:text-black"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Live Search Results */}
            {searchResults.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-black shadow-xl overflow-hidden z-50">
                <div className="p-2.5 bg-neutral-100 border-b border-neutral-200 text-[10px] font-mono font-bold text-neutral-600 uppercase tracking-wider">
                  Matches ({searchResults.length})
                </div>
                {searchResults.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      onSelectProduct(item);
                      onSearchChange('');
                    }}
                    className="w-full flex items-center gap-3 p-3 hover:bg-neutral-100 text-left transition-colors group border-b border-neutral-100 last:border-0"
                  >
                    <img src={item.images[0]} alt={item.name} className="w-10 h-10 object-cover bg-neutral-200" />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold text-black uppercase truncate group-hover:underline">
                        {item.name}
                      </p>
                      <p className="text-[11px] font-mono text-neutral-500">{item.silkType} · ₹{item.price.toLocaleString('en-IN')}</p>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Mobile Search Toggle */}
            <button
              id="mobile-search-toggle"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="lg:hidden p-2 text-black hover:opacity-60 transition-opacity"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Wishlist Button */}
            <button
              id="navbar-wishlist-btn"
              onClick={onOpenWishlist}
              className="relative p-2.5 text-black hover:bg-neutral-100 rounded-full transition-colors"
              aria-label="Favorites"
              title="Favorites"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-black text-white text-[10px] font-mono font-bold rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Cart Button */}
            <button
              id="navbar-cart-btn"
              onClick={onOpenCart}
              className="flex items-center gap-2 px-4 py-2.5 bg-black hover:bg-neutral-800 text-white rounded-full transition-colors"
              aria-label="Bag"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="text-xs font-bold font-mono tracking-widest hidden sm:inline uppercase">BAG</span>
              <span className="w-5 h-5 bg-white text-black text-[11px] font-mono font-bold rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Search Input */}
        {isSearchOpen && (
          <div className="lg:hidden pb-4 pt-1">
            <div className="relative w-full">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
              <input
                id="header-mobile-search"
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="SEARCH WEAVES, SILK..."
                className="w-full pl-10 pr-4 py-2 text-xs font-mono uppercase bg-neutral-100 border border-neutral-300 rounded-full focus:outline-none focus:border-black text-black"
              />
            </div>
          </div>
        )}

        {/* Minimalist Desktop Category Navigation */}
        <nav className="hidden lg:flex items-center justify-center space-x-8 py-2.5 border-t border-neutral-200">
          {navLinks.map((item) => {
            const isActive = selectedCategory === item.category;
            return (
              <button
                key={item.category}
                id={`nav-link-${item.category.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                onClick={() => onSelectCategory(item.category)}
                className={`relative text-xs font-bold tracking-widest uppercase transition-all py-1.5 ${
                  isActive 
                    ? 'text-black border-b-2 border-black' 
                    : 'text-neutral-500 hover:text-black'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-black px-6 py-6 shadow-xl">
          <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 font-bold mb-4">
            CATEGORIES
          </p>
          <div className="flex flex-col space-y-3">
            {navLinks.map((item) => (
              <button
                key={item.category}
                onClick={() => {
                  onSelectCategory(item.category);
                  setIsMobileMenuOpen(false);
                }}
                className={`flex items-center justify-between text-left py-2 border-b border-neutral-100 text-sm uppercase tracking-wider font-bold ${
                  selectedCategory === item.category ? 'text-black font-black underline' : 'text-neutral-700'
                }`}
              >
                <span>{item.label}</span>
                <ArrowRight className="w-4 h-4 text-neutral-400" />
              </button>
            ))}
            <a
              href="#heritage-guide"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-3 text-xs uppercase tracking-widest font-mono font-bold text-black flex items-center justify-between pt-4 border-t border-neutral-200"
            >
              <span>THE 3 SILKS OF ASSAM</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
