import { motion } from 'motion/react';
import { ArrowDownRight, ShoppingBag } from 'lucide-react';
import { HERO_IMAGE, STORE_INFO } from '../data/storeConfig';
import { SafeImage } from './SafeImage';

interface HeroSectionProps {
  onOpenOrderDrawer: () => void;
}

export function HeroSection({ onOpenOrderDrawer }: HeroSectionProps) {
  return (
    <section
      id="beranda"
      className="pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Editorial Headline & Primary Actions */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <p className="text-sm font-medium text-[#7B5B4A] tracking-wide mb-4">
              Homemade Cookies <span aria-hidden="true" className="mx-1.5">·</span> Makassar, Indonesia
            </p>

            <h1 className="font-display text-[clamp(2.25rem,4.3vw,3.75rem)] font-semibold leading-[1.08] tracking-tight text-[#2E1A12] [text-wrap:balance]">
              {STORE_INFO.tagline}
            </h1>

            <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#5C3A28] max-w-xl">
              {STORE_INFO.subheadline}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                onClick={onOpenOrderDrawer}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 min-h-[48px] rounded-xl bg-[#F2B705] text-[#2E1A12] text-sm sm:text-base font-bold hover:bg-[#E5A00D] active:scale-[0.99] transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2E1A12] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FFFBF4]"
              >
                <ShoppingBag className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>Pesan Sekarang</span>
              </button>

              <a
                href="#produk"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] rounded-xl border border-[#2E1A12]/25 text-[#2E1A12] text-sm sm:text-base font-semibold hover:bg-[#F7EFE2] hover:border-[#2E1A12]/40 transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C85A17]"
              >
                <span>Lihat Produk</span>
                <ArrowDownRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </a>
            </div>

            {/* Clean Unboxed Store Highlights */}
            <div className="mt-10 pt-6 border-t border-[#E8DACA] grid grid-cols-3 gap-4 sm:gap-6">
              <div>
                <p className="font-display text-lg sm:text-xl font-semibold text-[#2E1A12] tabular-nums">
                  4 Ukuran
                </p>
                <p className="text-xs sm:text-sm text-[#7B5B4A] mt-0.5">
                  250g hingga 1.000g
                </p>
              </div>
              <div>
                <p className="font-display text-lg sm:text-xl font-semibold text-[#2E1A12] tabular-nums">
                  Rp25.000
                </p>
                <p className="text-xs sm:text-sm text-[#7B5B4A] mt-0.5">
                  Harga mulai dari
                </p>
              </div>
              <div>
                <p className="font-display text-lg sm:text-xl font-semibold text-[#2E1A12]">
                  WhatsApp
                </p>
                <p className="text-xs sm:text-sm text-[#7B5B4A] mt-0.5">
                  Pemesanan praktis
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Full-Bleed Appetizing Cookie Photography */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-full min-h-[300px] sm:min-h-[380px] rounded-2xl overflow-hidden bg-[#F7EFE2] shadow-[0_20px_50px_-24px_rgba(46,26,18,0.22)]">
              <SafeImage
                src={HERO_IMAGE.src}
                alt={HERO_IMAGE.alt}
                fallbackTitle="Homemade Cookies kucircle.id"
                priority
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
