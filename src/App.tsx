import React, { useState, useEffect } from 'react';
import { Product, CartItem, Category } from './types';
import { PRODUCTS } from './data/products';
import { Navbar } from './components/Navbar';
import { HeroSlider } from './components/HeroSlider';
import { StoryHighlights } from './components/StoryHighlights';
import { TrustBadges } from './components/TrustBadges';
import { CategoryGrid } from './components/CategoryGrid';
import { ProductGrid } from './components/ProductGrid';
import { ShopTheLook } from './components/ShopTheLook';
import { HeritageGuide } from './components/HeritageGuide';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { Footer } from './components/Footer';
import { Check, ShoppingBag, Heart } from 'lucide-react';

export default function App() {
  // Cart state with 1 initial sample item so the user sees immediate richness
  const [cart, setCart] = useState<CartItem[]>(() => {
    return [
      {
        product: PRODUCTS[0],
        selectedColor: 'Natural Gold Muga',
        selectedSize: 'Free Size (With Unstitched Blouse)',
        quantity: 1,
        includeTailoring: true
      }
    ];
  });

  // Wishlist state
  const [wishlistIds, setWishlistIds] = useState<string[]>(['nx-riha-03', 'nx-jacket-04']);

  // UI state
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [badgeFilter, setBadgeFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currency, setCurrency] = useState<'INR' | 'USD' | 'EUR'>('INR');

  // Modals & Drawers
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState<boolean>(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false);
  const [discountAmount, setDiscountAmount] = useState<number>(0);
  const [appliedCouponCode, setAppliedCouponCode] = useState<string>('');

  // Toast notification feedback
  const [toastMessage, setToastMessage] = useState<{ text: string; icon?: 'cart' | 'heart' } | null>(null);

  const showToast = (text: string, icon: 'cart' | 'heart' = 'cart') => {
    setToastMessage({ text, icon });
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  // Add to cart handler
  const handleAddToCart = (
    product: Product,
    color: string,
    size: string,
    quantity: number = 1,
    includeTailoring: boolean = false
  ) => {
    setCart((prev) => {
      const existingIdx = prev.findIndex(
        (item) =>
          item.product.id === product.id &&
          item.selectedColor === color &&
          item.selectedSize === size
      );

      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += quantity;
        return updated;
      } else {
        return [
          ...prev,
          {
            product,
            selectedColor: color,
            selectedSize: size,
            quantity,
            includeTailoring
          }
        ];
      }
    });

    showToast(`Added "${product.name}" to your bag`, 'cart');
  };

  // Direct Buy Now (adds to cart & opens checkout instantly)
  const handleDirectBuy = (
    product: Product,
    color: string,
    size: string,
    quantity: number = 1,
    includeTailoring: boolean = false
  ) => {
    handleAddToCart(product, color, size, quantity, includeTailoring);
    setSelectedProduct(null);
    setIsCheckoutOpen(true);
  };

  // Update cart item quantity
  const handleUpdateQuantity = (
    productId: string,
    color: string,
    size: string,
    newQty: number
  ) => {
    if (newQty <= 0) {
      handleRemoveFromCart(productId, color, size);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId &&
        item.selectedColor === color &&
        item.selectedSize === size
          ? { ...item, quantity: newQty }
          : item
      )
    );
  };

  // Remove from cart
  const handleRemoveFromCart = (
    productId: string,
    color: string,
    size: string
  ) => {
    setCart((prev) =>
      prev.filter(
        (item) =>
          !(
            item.product.id === productId &&
            item.selectedColor === color &&
            item.selectedSize === size
          )
      )
    );
  };

  // Toggle wishlist
  const handleToggleWishlist = (product: Product) => {
    setWishlistIds((prev) => {
      if (prev.includes(product.id)) {
        showToast(`Removed from saved pieces`, 'heart');
        return prev.filter((id) => id !== product.id);
      } else {
        showToast(`Saved "${product.name}" to favorites`, 'heart');
        return [...prev, product.id];
      }
    });
  };

  // Move wishlist item to cart
  const handleMoveWishlistToCart = (product: Product) => {
    handleAddToCart(product, product.colors[0]?.name || '', product.sizes[0] || 'Free Size');
  };

  const wishlistProducts = PRODUCTS.filter((p) => wishlistIds.includes(p.id));

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Smooth scroll helper
  const scrollToCatalog = () => {
    const el = document.getElementById('products-catalog');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-black flex flex-col selection:bg-black selection:text-white">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 bg-black text-white shadow-2xl border border-neutral-800 font-mono text-xs uppercase tracking-wider">
          {toastMessage.icon === 'cart' ? (
            <ShoppingBag className="w-4 h-4 text-white" />
          ) : (
            <Heart className="w-4 h-4 text-white fill-white" />
          )}
          <span>{toastMessage.text}</span>
        </div>
      )}

      {/* Main Navigation Bar */}
      <Navbar
        cartCount={totalCartCount}
        wishlistCount={wishlistIds.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        selectedCategory={selectedCategory}
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          setBadgeFilter('All');
          scrollToCatalog();
        }}
        searchQuery={searchQuery}
        onSearchChange={(q) => {
          setSearchQuery(q);
          if (q.trim()) scrollToCatalog();
        }}
        currency={currency}
        onCurrencyChange={setCurrency}
        products={PRODUCTS}
        onSelectProduct={setSelectedProduct}
      />

      {/* Story / Highlight Pills (SALE, NEW IN, BEST SELLERS, PURE MUGA, etc.) */}
      <StoryHighlights
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          scrollToCatalog();
        }}
        onFilterBadge={(badge) => {
          setBadgeFilter(badge);
          scrollToCatalog();
        }}
      />

      {/* Editorial Luxury Hero Carousel */}
      <HeroSlider
        onShopCategory={(cat) => {
          setSelectedCategory(cat);
          scrollToCatalog();
        }}
        onExploreLookbook={() => {
          const el = document.getElementById('lookbook');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Craftsmanship & Silk Mark Badges Strip */}
      <TrustBadges />

      {/* Shop By Category Visual Bento Grid */}
      <CategoryGrid
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          scrollToCatalog();
        }}
      />

      {/* Full Catalog with Tabs, Silk Filters, Sort & Search */}
      <ProductGrid
        products={PRODUCTS}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        onSelectProduct={setSelectedProduct}
        onAddToCart={handleAddToCart}
        wishlistIds={wishlistIds}
        onToggleWishlist={handleToggleWishlist}
        currency={currency}
        searchQuery={searchQuery}
        onClearSearch={() => setSearchQuery('')}
        badgeFilter={badgeFilter}
        onClearBadgeFilter={() => setBadgeFilter('All')}
      />

      {/* Interactive Lookbook with Hotspots */}
      <ShopTheLook
        onSelectProduct={setSelectedProduct}
        onAddToCart={handleAddToCart}
        currency={currency}
      />

      {/* Sualkuchi Heritage Guide: The 3 Silks of Assam */}
      <HeritageGuide
        onShopSilk={(silk) => {
          setSelectedCategory('All');
          scrollToCatalog();
        }}
      />

      {/* Comprehensive E-Commerce Footer */}
      <Footer
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          scrollToCatalog();
        }}
      />

      {/* Modals & Slide-out Drawers */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={(p, color, size, qty, tailoring) => {
          handleAddToCart(p, color, size, qty, tailoring);
          setSelectedProduct(null);
        }}
        onDirectBuy={handleDirectBuy}
        isWishlisted={selectedProduct ? wishlistIds.includes(selectedProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
        currency={currency}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onProceedToCheckout={(discount, code) => {
          setDiscountAmount(discount);
          setAppliedCouponCode(code);
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
        currency={currency}
      />

      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistProducts={wishlistProducts}
        onRemoveFromWishlist={(id) => setWishlistIds((prev) => prev.filter((i) => i !== id))}
        onMoveToCart={handleMoveWishlistToCart}
        onSelectProduct={setSelectedProduct}
        currency={currency}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cart}
        discountAmount={discountAmount}
        appliedCouponCode={appliedCouponCode}
        onOrderCompleted={() => {
          setCart([]);
        }}
        currency={currency}
      />
    </div>
  );
}
