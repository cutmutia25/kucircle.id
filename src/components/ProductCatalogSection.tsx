import { motion } from 'motion/react';
import { Minus, Plus, ShoppingBag } from 'lucide-react';
import {
  COOKIE_PRODUCTS,
  CookieProduct,
  formatRupiah,
} from '../data/storeConfig';
import { SafeImage } from './SafeImage';

interface ProductCatalogSectionProps {
  quantities: Record<string, number>;
  totalItems: number;
  totalPrice: number;
  onAddOne: (productId: string) => void;
  onDecreaseOne: (productId: string) => void;
  onOrderNow: (product: CookieProduct) => void;
  onOpenOrderDrawer: () => void;
}

export function ProductCatalogSection({
  quantities,
  totalItems,
  totalPrice,
  onAddOne,
  onDecreaseOne,
  onOrderNow,
  onOpenOrderDrawer,
}: ProductCatalogSectionProps) {
  return (
    <section id="produk" className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Heading & Active Cart Summary */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[#C85A17] mb-2.5">
              Katalog Produk <span aria-hidden="true" className="mx-1.5 text-[#7B5B4A]">·</span>{' '}
              <span className="text-[#7B5B4A]">Pilihan Ukuran & Harga</span>
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight tracking-tight text-[#2E1A12] [text-wrap:balance]">
              Pilih ukuran homemade cookies favoritmu
            </h2>
            <p className="mt-3 text-base text-[#5C3A28] leading-relaxed">
              Empat ukuran kemasan praktis dengan harga transparan. Tambahkan satu atau beberapa
              ukuran ke keranjang, lalu kirim pesanan langsung melalui WhatsApp.
            </p>
          </div>

          {totalItems > 0 && (
            <div className="flex items-center justify-between sm:justify-end gap-5 py-3 px-4 rounded-xl bg-[#F7EFE2] border border-[#E8DACA] shrink-0">
              <div>
                <p className="text-xs text-[#7B5B4A]">
                  Keranjang aktif <span aria-hidden="true">·</span>{' '}
                  <span className="tabular-nums font-semibold text-[#2E1A12]">
                    {totalItems} kemasan
                  </span>
                </p>
                <p className="font-display text-lg font-bold text-[#2E1A12] tabular-nums">
                  {formatRupiah(totalPrice)}
                </p>
              </div>
              <button
                type="button"
                onClick={onOpenOrderDrawer}
                className="inline-flex items-center gap-2 px-4 py-2.5 min-h-[42px] rounded-lg bg-[#2E1A12] text-[#FFFBF4] text-sm font-semibold hover:bg-[#46291D] transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C85A17]"
              >
                <span>Lihat Keranjang</span>
              </button>
            </div>
          )}
        </div>

        {/* 4-Column Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COOKIE_PRODUCTS.map((product, index) => {
            const qty = quantities[product.id] ?? 0;

            return (
              <motion.article
                key={product.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group flex flex-col h-full rounded-2xl bg-[#FFFDF9] border border-[#E8DACA] overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-22px_rgba(46,26,18,0.22)]"
              >
                {/* Product Photography */}
                <div className="aspect-[4/3] w-full overflow-hidden bg-[#F7EFE2]">
                  <SafeImage
                    src={product.image}
                    alt={product.imageAlt}
                    fallbackTitle={`Cookies ${product.weightLabel}`}
                    className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                  />
                </div>

                {/* Card Body */}
                <div className="flex flex-col flex-1 p-5">
                  <p className="text-xs font-medium text-[#7B5B4A]">
                    Homemade Cookies <span aria-hidden="true">·</span> {product.shortTag}
                  </p>

                  <div className="mt-1.5 flex items-baseline justify-between gap-2">
                    <h3 className="font-display text-xl font-semibold text-[#2E1A12]">
                      {product.weightLabel}
                    </h3>
                    <span className="text-lg font-bold text-[#C85A17] tabular-nums whitespace-nowrap">
                      {formatRupiah(product.price)}
                    </span>
                  </div>

                  <p className="mt-2.5 text-sm leading-relaxed text-[#5C3A28] flex-1">
                    {product.description}
                  </p>

                  {/* Actions Area */}
                  <div className="mt-5 pt-4 border-t border-[#E8DACA]/80 flex flex-col gap-2.5">
                    <button
                      type="button"
                      onClick={() => onOrderNow(product)}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 min-h-[44px] rounded-xl bg-[#F2B705] text-[#2E1A12] text-sm font-bold hover:bg-[#E5A00D] active:scale-[0.99] transition-all duration-150 whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2E1A12]"
                    >
                      <ShoppingBag className="w-4 h-4 shrink-0" aria-hidden="true" />
                      <span>Pesan Sekarang</span>
                    </button>

                    {qty > 0 ? (
                      <div className="flex items-center justify-between rounded-xl bg-[#F7EFE2] px-2 py-1 min-h-[42px]">
                        <button
                          type="button"
                          onClick={() => onDecreaseOne(product.id)}
                          aria-label={`Kurangi jumlah cookies ukuran ${product.weightLabel}`}
                          className="w-9 h-9 inline-flex items-center justify-center rounded-lg text-[#2E1A12] hover:bg-[#EADBC7] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C85A17]"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="text-sm font-semibold text-[#2E1A12] tabular-nums">
                          {qty} di keranjang
                        </span>
                        <button
                          type="button"
                          onClick={() => onAddOne(product.id)}
                          aria-label={`Tambah jumlah cookies ukuran ${product.weightLabel}`}
                          className="w-9 h-9 inline-flex items-center justify-center rounded-lg text-[#2E1A12] hover:bg-[#EADBC7] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C85A17]"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => onAddOne(product.id)}
                        className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 min-h-[42px] rounded-xl border border-[#E8DACA] text-[#5C3A28] text-sm font-medium hover:bg-[#F7EFE2] hover:text-[#2E1A12] transition-colors duration-150 whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C85A17]"
                      >
                        <Plus className="w-4 h-4 shrink-0" aria-hidden="true" />
                        <span>Tambah ke Keranjang</span>
                      </button>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
