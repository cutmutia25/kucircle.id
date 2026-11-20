import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { ORDER_STEPS } from '../data/storeConfig';

interface HowToOrderSectionProps {
  onOpenOrderDrawer: () => void;
}

export function HowToOrderSection({ onOpenOrderDrawer }: HowToOrderSectionProps) {
  return (
    <section
      id="cara-pemesanan"
      className="py-16 sm:py-20 lg:py-24 bg-[#F7EFE2]/65 border-y border-[#E8DACA]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[#C85A17] mb-2.5">
              Cara Pemesanan <span aria-hidden="true" className="mx-1.5 text-[#7B5B4A]">·</span>{' '}
              <span className="text-[#7B5B4A]">3 Langkah Mudah</span>
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight tracking-tight text-[#2E1A12] [text-wrap:balance]">
              Pesan cookies favoritmu langsung lewat WhatsApp
            </h2>
          </div>

          <button
            type="button"
            onClick={onOpenOrderDrawer}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#2E1A12] hover:text-[#C85A17] transition-colors whitespace-nowrap shrink-0 self-start md:self-auto cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C85A17] rounded-sm py-1"
          >
            <span>Buka Keranjang Pemesanan</span>
            <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
          </button>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {ORDER_STEPS.map((step, index) => (
            <motion.li
              key={step.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.4,
                delay: index * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col pt-6 border-t border-[#2E1A12]/15"
            >
              <span className="font-display text-3xl sm:text-4xl font-semibold text-[#C85A17] tabular-nums">
                {step.number}.
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold text-[#2E1A12]">
                {step.title}
              </h3>
              <p className="mt-2.5 text-sm sm:text-base leading-relaxed text-[#5C3A28]">
                {step.description}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
