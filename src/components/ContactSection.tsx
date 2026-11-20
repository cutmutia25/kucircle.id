import { motion } from 'motion/react';
import { Instagram, MapPin, MessageCircle, ShoppingBag } from 'lucide-react';
import {
  buildWhatsAppOrderMessage,
  buildWhatsAppUrl,
  STORE_INFO,
} from '../data/storeConfig';

interface ContactSectionProps {
  onOpenOrderDrawer: () => void;
}

export function ContactSection({ onOpenOrderDrawer }: ContactSectionProps) {
  const directWhatsappUrl = buildWhatsAppUrl(buildWhatsAppOrderMessage([]));

  return (
    <section id="kontak" className="pb-16 sm:pb-20 lg:pb-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl bg-[#2E1A12] text-[#FFFBF4] p-7 sm:p-10 lg:p-14"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <p className="text-sm font-medium text-[#F2B705] tracking-wide mb-3">
                Kontak & Media Sosial
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight tracking-tight text-[#FFFBF4] [text-wrap:balance]">
                Siap memesan atau ingin tanya jadwal pre-order?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#E9DDD0] max-w-xl">
                Hubungi admin {STORE_INFO.brandName} langsung melalui WhatsApp untuk pemesanan
                homemade cookies, atau ikuti Instagram kami untuk informasi terbaru dari Makassar.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <a
                  href={directWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 min-h-[48px] rounded-xl bg-[#F2B705] text-[#2E1A12] text-sm sm:text-base font-bold hover:bg-[#E5A00D] active:scale-[0.99] transition-all duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFFBF4]"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Pesan via WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={onOpenOrderDrawer}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 min-h-[48px] rounded-xl bg-[#FFFBF4]/10 text-[#FFFBF4] text-sm sm:text-base font-semibold hover:bg-[#FFFBF4]/18 transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F2B705]"
                >
                  <ShoppingBag className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Atur Pesanan</span>
                </button>

                <a
                  href={STORE_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 min-h-[48px] rounded-xl border border-[#FFFBF4]/25 text-[#FFFBF4] text-sm sm:text-base font-semibold hover:bg-[#FFFBF4]/10 transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F2B705]"
                >
                  <Instagram className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>{STORE_INFO.instagramHandle}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 pt-8 lg:pt-0 lg:pl-10 border-t lg:border-t-0 lg:border-l border-[#FFFBF4]/15 space-y-6">
              <div>
                <p className="text-xs font-medium text-[#D9C7B6] mb-1">Lokasi</p>
                <p className="flex items-start gap-2.5 text-base font-medium text-[#FFFBF4]">
                  <MapPin
                    className="w-5 h-5 text-[#F2B705] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>{STORE_INFO.location}</span>
                </p>
              </div>

              <div>
                <p className="text-xs font-medium text-[#D9C7B6] mb-1">Instagram Resmi</p>
                <a
                  href={STORE_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-base font-medium text-[#FFFBF4] hover:text-[#F2B705] transition-colors"
                >
                  <Instagram
                    className="w-5 h-5 text-[#F2B705] shrink-0"
                    aria-hidden="true"
                  />
                  <span>{STORE_INFO.instagramHandle}</span>
                </a>
              </div>

              <div>
                <p className="text-xs font-medium text-[#D9C7B6] mb-1">WhatsApp Pemesanan</p>
                <a
                  href={directWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-base font-medium text-[#FFFBF4] hover:text-[#F2B705] transition-colors tabular-nums"
                >
                  <MessageCircle
                    className="w-5 h-5 text-[#F2B705] shrink-0"
                    aria-hidden="true"
                  />
                  <span>{STORE_INFO.whatsappDisplay}</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
