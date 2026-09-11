import React, { useState, useMemo } from 'react';
import { Product, Category, SilkType } from '../types';
import { ProductCard } from './ProductCard';
import { CATEGORY_FILTERS } from '../data/products';
import { ArrowUpDown, Filter, X } from 'lucide-react';

interface ProductGridProps {
  products: Product[];
  selectedCategory: Category;
  onSelectCategory: (cat: Category) => void;
  onSelectProduct: (p: Product) => void;
  onAddToCart: (p: Product, color: string, size: string) => void;
  wishlistIds: string[];
  onToggleWishlist: (p: Product) => void;
  currency: 'INR' | 'USD' | 'EUR';
  searchQuery: string;
  onClearSearch: () => void;
  badgeFilter?: string;
  onClearBadgeFilter?: () => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  selectedCategory,
  onSelectCategory,
  onSelectProduct,
  onAddToCart,
  wishlistIds,
  onToggleWishlist,
  currency,
  searchQuery,
  onClearSearch,
  badgeFilter,
  onClearBadgeFilter
}) => {
  const [selectedSilk, setSelectedSilk] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');

  const silkOptions: (SilkType | 'All')[] = [
    'All',
    'Muga Silk',
    'Paat Silk',
    'Eri Silk',
    'Kesa Paat'
  ];

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      // Category filter
      if (selectedCategory !== 'All' && p.category !== selectedCategory) {
        return false;
      }
      // Silk filter
      if (selectedSilk !== 'All' && p.silkType !== selectedSilk) {
        return false;
      }
      // Badge filter
      if (badgeFilter && badgeFilter !== 'All' && p.badge !== badgeFilter) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = p.name.toLowerCase().includes(query);
        const matchesCat = p.category.toLowerCase().includes(query);
        const matchesSilk = p.silkType.toLowerCase().includes(query);
        const matchesMotif = p.motif.toLowerCase().includes(query);
        const matchesDesc = p.description.toLowerCase().includes(query);
        return matchesName || matchesCat || matchesSilk || matchesMotif || matchesDesc;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });
  }, [products, selectedCategory, selectedSilk, badgeFilter, searchQuery, sortBy]);

  return (
    <section id="products-catalog" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Catalog Title & Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-black">
        <div>
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-500 block mb-1">
            CATALOGUE ARCHIVE / {selectedCategory.toUpperCase()}
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-black tracking-tighter uppercase">
            {selectedCategory === 'All' ? 'ALL WEAVES & SILHOUETTES' : selectedCategory.toUpperCase()}
          </h2>
          <p className="font-mono text-xs text-neutral-600 mt-1 uppercase">
            [{filteredProducts.length} PRODUCTS IN CATALOGUE]
          </p>
        </div>

        {/* Filter controls & Sort */}
        <div className="mt-4 md:mt-0 flex flex-wrap items-center gap-3">
          {/* Silk Variety Dropdown */}
          <div className="flex items-center gap-2 bg-white px-3 py-2 border border-black font-mono text-xs uppercase">
            <span className="text-neutral-500 font-bold">SILK:</span>
            <select
              id="silk-filter-select"
              value={selectedSilk}
              onChange={(e) => setSelectedSilk(e.target.value)}
              className="bg-transparent font-bold text-black focus:outline-none cursor-pointer"
            >
              {silkOptions.map((s) => (
                <option key={s} value={s}>
                  {s.toUpperCase()}
                </option>
              ))}
            </select>
          </div>

          {/* Sort By Dropdown */}
          <div className="flex items-center gap-2 bg-white px-3 py-2 border border-black font-mono text-xs uppercase">
            <ArrowUpDown className="w-3.5 h-3.5 text-black" />
            <select
              id="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-transparent font-bold text-black focus:outline-none cursor-pointer"
            >
              <option value="featured">FEATURED</option>
              <option value="price-asc">PRICE: LOW TO HIGH</option>
              <option value="price-desc">PRICE: HIGH TO LOW</option>
              <option value="rating">HIGHEST RATED</option>
            </select>
          </div>
        </div>
      </div>

      {/* Category Tabs (Minimalist rectangular buttons) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-6">
        {CATEGORY_FILTERS.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id as Category)}
              className={`flex-shrink-0 px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider transition-colors flex items-center gap-2 border ${
                isActive
                  ? 'bg-black text-white border-black'
                  : 'bg-white text-black border-neutral-300 hover:border-black'
              }`}
            >
              <span>{cat.label}</span>
              <span className={`text-[10px] px-1.5 py-0.2 ${
                isActive ? 'bg-neutral-800 text-white' : 'bg-neutral-100 text-neutral-600'
              }`}>
                {cat.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Filter Indicators */}
      {(selectedSilk !== 'All' || searchQuery || (badgeFilter && badgeFilter !== 'All')) && (
        <div className="flex flex-wrap items-center gap-2 mb-6 p-3 bg-neutral-100 border border-neutral-200 font-mono text-xs">
          <span className="text-neutral-500 font-bold uppercase">FILTERS ACTIVE:</span>
          
          {selectedSilk !== 'All' && (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border border-neutral-300 text-black">
              SILK: <strong>{selectedSilk.toUpperCase()}</strong>
              <button onClick={() => setSelectedSilk('All')} className="text-neutral-500 hover:text-black">
                <X className="w-3 h-3" />
              </button>
            </span>
          )}

          {badgeFilter && badgeFilter !== 'All' && (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border border-neutral-300 text-black">
              TAG: <strong>{badgeFilter.toUpperCase()}</strong>
              {onClearBadgeFilter && (
                <button onClick={onClearBadgeFilter} className="text-neutral-500 hover:text-black">
                  <X className="w-3 h-3" />
                </button>
              )}
            </span>
          )}

          {searchQuery && (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border border-neutral-300 text-black">
              SEARCH: <strong>"{searchQuery.toUpperCase()}"</strong>
              <button onClick={onClearSearch} className="text-neutral-500 hover:text-black">
                <X className="w-3 h-3" />
              </button>
            </span>
          )}

          <button
            onClick={() => {
              setSelectedSilk('All');
              onClearSearch();
              if (onClearBadgeFilter) onClearBadgeFilter();
            }}
            className="ml-auto text-[11px] font-mono text-black font-bold uppercase underline hover:no-underline"
          >
            RESET ALL
          </button>
        </div>
      )}

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelectProduct={onSelectProduct}
              onAddToCart={onAddToCart}
              isWishlisted={wishlistIds.includes(product.id)}
              onToggleWishlist={onToggleWishlist}
              currency={currency}
            />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-20 bg-neutral-50 border border-black p-8">
          <div className="w-12 h-12 bg-white border border-black flex items-center justify-center mx-auto mb-4 text-black">
            <Filter className="w-6 h-6" />
          </div>
          <h3 className="font-heading text-xl font-black uppercase text-black">NO MATCHES FOUND</h3>
          <p className="font-mono text-xs text-neutral-500 max-w-md mx-auto mt-2 uppercase">
            No items match your active filters. Clear search or silk filters to view catalogue.
          </p>
          <button
            onClick={() => {
              setSelectedSilk('All');
              onSelectCategory('All');
              onClearSearch();
              if (onClearBadgeFilter) onClearBadgeFilter();
            }}
            className="mt-6 px-8 py-3.5 bg-black text-white font-mono text-xs uppercase tracking-widest font-bold hover:bg-neutral-800 transition-colors"
          >
            CLEAR ALL FILTERS
          </button>
        </div>
      )}
    </section>
  );
};
