import { motion } from 'motion/react';
import { ExternalLink, MessageSquareQuote } from 'lucide-react';
import { STORE_INFO, TESTIMONIAL_SLOTS } from '../data/storeConfig';

export function TestimonialsSection() {
  return (
    <section id="testimoni" className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[#C85A17] mb-2.5">
              Testimoni Pelanggan <span aria-hidden="true" className="mx-1.5 text-[#7B5B4A]">·</span>{' '}
              <span className="text-[#7B5B4A]">Cerita Asli Pembeli</span>
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight tracking-tight text-[#2E1A12] [text-wrap:balance]">
              Ruang cerita bersama kucircle.id
            </h2>
            <p className="mt-3 text-base text-[#5C3A28] leading-relaxed">
              Kami menjaga keaslian setiap ulasan. Kolom di bawah ini disiapkan sebagai placeholder
              agar pemilik toko dapat menampilkan testimoni asli dari pelanggan kucircle.id.
            </p>
          </div>

          <a
            href={STORE_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 min-h-[44px] rounded-xl border border-[#E8DACA] text-sm font-semibold text-[#2E1A12] hover:bg-[#F7EFE2] transition-colors whitespace-nowrap shrink-0 self-start md:self-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C85A17]"
          >
            <span>Bagikan Ceritamu di {STORE_INFO.instagramHandle}</span>
            <ExternalLink className="w-4 h-4 shrink-0" aria-hidden="true" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIAL_SLOTS.map((slot, index) => (
            <motion.figure
              key={slot.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.4,
                delay: index * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#FFFDF9] border border-dashed border-[#D6C3AC]"
            >
              <div>
                <div className="flex items-center justify-between gap-2 text-xs text-[#7B5B4A]">
                  <span className="font-medium">{slot.slotLabel}</span>
                  <MessageSquareQuote
                    className="w-4 h-4 text-[#C85A17]/70 shrink-0"
                    aria-hidden="true"
                  />
                </div>

                <blockquote className="mt-4 text-sm sm:text-base leading-relaxed text-[#5C3A28] italic">
                  &ldquo;{slot.placeholderQuote}&rdquo;
                </blockquote>
              </div>

              <figcaption className="mt-6 pt-4 border-t border-[#E8DACA]">
                <p className="font-display text-base font-semibold text-[#2E1A12]">
                  {slot.placeholderAuthor}
                </p>
                <p className="text-xs text-[#7B5B4A] mt-0.5">
                  {slot.placeholderContext}
                  {slot.isPlaceholder && (
                    <>
                      {' '}
                      <span aria-hidden="true">·</span> Placeholder Testimoni
                    </>
                  )}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
