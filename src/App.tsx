/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useMemo, useState } from 'react';
import { COOKIE_PRODUCTS, CookieProduct } from './data/storeConfig';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProductCatalogSection } from './components/ProductCatalogSection';
import { HowToOrderSection } from './components/HowToOrderSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { OrderDrawer } from './components/OrderDrawer';

export default function App() {
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [isOrderDrawerOpen, setIsOrderDrawerOpen] = useState(false);

  const handleAddOne = (productId: string) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: (prev[productId] ?? 0) + 1,
    }));
  };

  const handleDecreaseOne = (productId: string) => {
    setQuantities((prev) => {
      const current = prev[productId] ?? 0;
      if (current <= 1) {
        const next = { ...prev };
        delete next[productId];
        return next;
      }
      return {
        ...prev,
        [productId]: current - 1,
      };
    });
  };

  const handleOrderNow = (product: CookieProduct) => {
    setQuantities((prev) => {
      const current = prev[product.id] ?? 0;
      if (current > 0) {
        return prev;
      }
      return {
        ...prev,
        [product.id]: 1,
      };
    });
    setIsOrderDrawerOpen(true);
  };

  const handleClearCart = () => {
    setQuantities({});
  };

  const { totalItems, totalPrice } = useMemo(() => {
    return COOKIE_PRODUCTS.reduce(
      (acc, product) => {
        const qty = quantities[product.id] ?? 0;
        return {
          totalItems: acc.totalItems + qty,
          totalPrice: acc.totalPrice + product.price * qty,
        };
      },
      { totalItems: 0, totalPrice: 0 }
    );
  }, [quantities]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFBF4] text-[#2E1A12]">
      <Navbar
        cartCount={totalItems}
        onOpenOrderDrawer={() => setIsOrderDrawerOpen(true)}
      />

      <main className="flex-1">
        <HeroSection onOpenOrderDrawer={() => setIsOrderDrawerOpen(true)} />

        <AboutSection />

        <ProductCatalogSection
          quantities={quantities}
          totalItems={totalItems}
          totalPrice={totalPrice}
          onAddOne={handleAddOne}
          onDecreaseOne={handleDecreaseOne}
          onOrderNow={handleOrderNow}
          onOpenOrderDrawer={() => setIsOrderDrawerOpen(true)}
        />

        <HowToOrderSection
          onOpenOrderDrawer={() => setIsOrderDrawerOpen(true)}
        />

        <TestimonialsSection />

        <ContactSection
          onOpenOrderDrawer={() => setIsOrderDrawerOpen(true)}
        />
      </main>

      <Footer />

      <OrderDrawer
        isOpen={isOrderDrawerOpen}
        onClose={() => setIsOrderDrawerOpen(false)}
        quantities={quantities}
        onAddOne={handleAddOne}
        onDecreaseOne={handleDecreaseOne}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
