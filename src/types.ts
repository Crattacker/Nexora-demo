export type SilkType = 'Muga Silk' | 'Paat Silk' | 'Eri Silk' | 'Kesa Paat' | 'Cotton Handloom';

export type Category = 
  | 'All'
  | 'Mekhela Sador'
  | 'Sarees'
  | 'Riha'
  | 'Jackets & Blazers'
  | 'Men\'s Ethnic'
  | 'Bridal & Heritage';

export interface ProductReview {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export interface Product {
  id: string;
  name: string;
  assameseName?: string;
  category: Category;
  silkType: SilkType;
  price: number;
  originalPrice: number;
  rating: number;
  reviewsCount: number;
  badge?: 'Best Seller' | 'Just In' | 'Silk Mark Certified' | 'Handloom Heritage' | 'Rare Muga';
  images: string[];
  colors: { name: string; hex: string; imageIndex?: number }[];
  sizes: string[];
  description: string;
  motif: string;
  origin: string;
  weaverArtisan: string;
  features: string[];
  careInstructions: string[];
  stylingTips: string;
  reviews: ProductReview[];
  inStock: boolean;
  isTrending?: boolean;
  isFeatured?: boolean;
}

export interface CartItem {
  product: Product;
  selectedColor: string;
  selectedSize: string;
  quantity: number;
  includeTailoring?: boolean;
}

export interface LookbookHotspot {
  id: string;
  productId: string;
  xPercent: number; // 0 - 100%
  yPercent: number; // 0 - 100%
  title: string;
  role: string;
}

export interface FilterState {
  category: Category;
  silkType: string;
  priceRange: [number, number];
  sortBy: 'featured' | 'price-asc' | 'price-desc' | 'rating';
  searchQuery: string;
}
