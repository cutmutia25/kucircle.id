import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  Check,
  Copy,
  MessageCircle,
  Minus,
  Plus,
  Trash2,
  X,
} from 'lucide-react';
import {
  buildWhatsAppOrderMessage,
  buildWhatsAppUrl,
  CartEntry,
  COOKIE_PRODUCTS,
  formatRupiah,
  STORE_INFO,
} from '../data/storeConfig';
import { SafeImage } from './SafeImage';

interface OrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  quantities: Record<string, number>;
  onAddOne: (productId: string) => void;
  onDecreaseOne: (productId: string) => void;
  onClearCart: () => void;
}

export function OrderDrawer({
  isOpen,
  onClose,
  quantities,
  onAddOne,
  onDecreaseOne,
  onClearCart,
}: OrderDrawerProps) {
  const [customerName, setCustomerName] = useState('');
  const [notes, setNotes] = useState('');
  const [copied, setCopied] = useState(false);

  // Close drawer on Escape key and lock background scroll while open
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const cartEntries: CartEntry[] = COOKIE_PRODUCTS.map((product) => ({
    product,
    quantity: quantities[product.id] ?? 0,
  })).filter((entry) => entry.quantity > 0);

  const totalItems = cartEntries.reduce((sum, entry) => sum + entry.quantity, 0);
  const totalPrice = cartEntries.reduce(
    (sum, entry) => sum + entry.product.price * entry.quantity,
    0
  );

  const orderMessage = buildWhatsAppOrderMessage(cartEntries, customerName, notes);
  const whatsappUrl = buildWhatsAppUrl(orderMessage);

  const handleCopyMessage = async () => {
    try {
      await navigator.clipboard.writeText(orderMessage);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-end"
          role="dialog"
          aria-modal="true"
          aria-labelledby="order-drawer-title"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#2E1A12]/45 backdrop-blur-[2px]"
          />

          {/* Slide-over Panel */}
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-lg bg-[#FFFBF4] h-full flex flex-col shadow-2xl border-l border-[#E8DACA]"
          >
            {/* Header */}
            <div className="px-5 sm:px-6 py-4 border-b border-[#E8DACA] flex items-center justify-between gap-4 shrink-0">
              <div>
                <h2
                  id="order-drawer-title"
                  className="font-display text-xl font-semibold text-[#2E1A12]"
                >
                  Keranjang Pemesanan
                </h2>
                <p className="text-xs text-[#7B5B4A] mt-0.5">
                  Sesuaikan ukuran & jumlah sebelum dikirim ke WhatsApp
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Tutup keranjang pemesanan"
                className="w-10 h-10 inline-flex items-center justify-center rounded-xl text-[#5C3A28] hover:bg-[#F7EFE2] hover:text-[#2E1A12] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C85A17]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="flex-1 overflow-y-auto px-5 sm:px-6 py-5 space-y-6">
              {/* Size & Quantity Selector List */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-semibold text-[#2E1A12]">
                    Pilih Ukuran Cookies
                  </p>
                  {totalItems > 0 && (
                    <button
                      type="button"
                      onClick={onClearCart}
                      className="inline-flex items-center gap-1 text-xs font-medium text-[#7B5B4A] hover:text-[#C85A17] transition-colors cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Kosongkan</span>
                    </button>
                  )}
                </div>

                <ul className="divide-y divide-[#E8DACA] border-y border-[#E8DACA]">
                  {COOKIE_PRODUCTS.map((product) => {
                    const qty = quantities[product.id] ?? 0;
                    const lineTotal = product.price * qty;

                    return (
                      <li
                        key={product.id}
                        className="py-3.5 flex items-center justify-between gap-3"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="w-14 h-12 rounded-lg overflow-hidden bg-[#F7EFE2] shrink-0">
                            <SafeImage
                              src={product.image}
                              alt={product.imageAlt}
                              fallbackTitle={product.weightLabel}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="min-w-0">
                            <p className="font-display text-base font-semibold text-[#2E1A12] truncate">
                              {product.weightLabel}
                            </p>
                            <p className="text-xs text-[#7B5B4A] tabular-nums">
                              {formatRupiah(product.price)} / kemasan
                              {qty > 0 && (
                                <span className="text-[#C85A17] font-semibold">
                                  {' '}
                                  · {formatRupiah(lineTotal)}
                                </span>
                              )}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5 shrink-0">
                          <button
                            type="button"
                            onClick={() => onDecreaseOne(product.id)}
                            disabled={qty === 0}
                            aria-label={`Kurangi jumlah ukuran ${product.weightLabel}`}
                            className="w-9 h-9 inline-flex items-center justify-center rounded-lg border border-[#E8DACA] text-[#2E1A12] hover:bg-[#F7EFE2] disabled:opacity-35 disabled:cursor-not-allowed transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C85A17]"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span
                            aria-live="polite"
                            className="w-7 text-center text-sm font-semibold text-[#2E1A12] tabular-nums"
                          >
                            {qty}
                          </span>
                          <button
                            type="button"
                            onClick={() => onAddOne(product.id)}
                            aria-label={`Tambah jumlah ukuran ${product.weightLabel}`}
                            className="w-9 h-9 inline-flex items-center justify-center rounded-lg bg-[#F7EFE2] text-[#2E1A12] hover:bg-[#EADBC7] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C85A17]"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Optional Customer Info */}
              <div className="space-y-3">
                <p className="text-sm font-semibold text-[#2E1A12]">
                  Informasi Tambahan <span className="font-normal text-[#7B5B4A]">(Opsional)</span>
                </p>

                <div>
                  <label
                    htmlFor="customer-name"
                    className="block text-xs font-medium text-[#5C3A28] mb-1"
                  >
                    Nama Pemesan
                  </label>
                  <input
                    id="customer-name"
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Contoh: Nadia"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FFFDF9] border border-[#E8DACA] text-sm text-[#2E1A12] placeholder:text-[#7B5B4A]/60 focus:outline-none focus:border-[#C85A17] focus:ring-2 focus:ring-[#C85A17]/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="order-notes"
                    className="block text-xs font-medium text-[#5C3A28] mb-1"
                  >
                    Catatan Pesanan
                  </label>
                  <input
                    id="order-notes"
                    type="text"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Contoh: Untuk hadiah, mohon info jadwal pre-order"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FFFDF9] border border-[#E8DACA] text-sm text-[#2E1A12] placeholder:text-[#7B5B4A]/60 focus:outline-none focus:border-[#C85A17] focus:ring-2 focus:ring-[#C85A17]/20"
                  />
                </div>
              </div>

              {/* Automatic WhatsApp Message Preview */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <p className="text-xs font-semibold text-[#5C3A28]">
                    Pratinjau Pesan WhatsApp Otomatis
                  </p>
                  <button
                    type="button"
                    onClick={handleCopyMessage}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[#C85A17] hover:text-[#2E1A12] transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>Tersalin</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>Salin Pesan</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="p-3.5 rounded-xl bg-[#F7EFE2] border border-[#E8DACA] text-xs sm:text-sm leading-relaxed text-[#2E1A12] whitespace-pre-line">
                  {orderMessage}
                </div>
              </div>
            </div>

            {/* Sticky Bottom Checkout Summary */}
            <div className="px-5 sm:px-6 py-4 border-t border-[#E8DACA] bg-[#FFFDF9] shrink-0 space-y-3">
              <div className="flex items-baseline justify-between gap-4">
                <div>
                  <p className="text-xs text-[#7B5B4A]">
                    Total Estimasi{' '}
                    {totalItems > 0 && (
                      <span className="tabular-nums">({totalItems} kemasan)</span>
                    )}
                  </p>
                  <p className="font-display text-2xl font-bold text-[#2E1A12] tabular-nums">
                    {formatRupiah(totalPrice)}
                  </p>
                </div>

                {totalItems === 0 && (
                  <p className="text-xs text-[#7B5B4A] text-right max-w-[180px]">
                    Pilih ukuran di atas atau langsung chat admin.
                  </p>
                )}
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3.5 min-h-[48px] rounded-xl bg-[#1F8A4C] text-white text-sm sm:text-base font-bold hover:bg-[#18723E] active:scale-[0.99] transition-all duration-150 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2E1A12]"
              >
                <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
                <span>
                  {totalItems > 0
                    ? 'Kirim Pesanan via WhatsApp'
                    : 'Hubungi Admin via WhatsApp'}
                </span>
              </a>

              {STORE_INFO.isWhatsappPlaceholder && (
                <p className="text-[11px] leading-snug text-[#7B5B4A] text-center">
                  Nomor WhatsApp masih menggunakan placeholder ({STORE_INFO.whatsappNumber}) dan
                  siap diganti oleh pemilik toko di konfigurasi toko.
                </p>
              )}
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}
