import { motion } from 'motion/react';
import { ABOUT_IMAGE, STORE_INFO } from '../data/storeConfig';
import { SafeImage } from './SafeImage';

const BRAND_PILLARS = [
  {
    title: 'Karakter Homemade',
    description:
      'Dihadirkan dengan sentuhan rumahan yang hangat dan akrab, membawa rasa nyaman di setiap gigitan.',
  },
  {
    title: 'Praktis Dinikmati Kapan Saja',
    description:
      'Tersedia dalam empat pilihan ukuran kemasan sehingga mudah disesuaikan untuk santai sendiri atau berkumpul.',
  },
  {
    title: 'Cocok untuk Camilan & Hadiah',
    description:
      'Pas menjadi teman minum kopi dan teh di rumah, maupun dijadikan bingkisan manis untuk orang terdekat.',
  },
] as const;

export function AboutSection() {
  return (
    <section
      id="tentang-kami"
      className="py-16 sm:py-20 lg:py-24 bg-[#F7EFE2]/65 border-y border-[#E8DACA]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Left Column: Editorial Bakery Story Photo */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="w-full aspect-[4/3] lg:aspect-auto lg:h-full min-h-[280px] rounded-2xl overflow-hidden bg-[#EFE5D6]">
              <SafeImage
                src={ABOUT_IMAGE.src}
                alt={ABOUT_IMAGE.alt}
                fallbackTitle="Cerita kucircle.id Makassar"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right Column: Brand Story */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <p className="text-sm font-medium text-[#C85A17] mb-3">
              Tentang Kami <span aria-hidden="true" className="mx-1.5 text-[#7B5B4A]">·</span>{' '}
              <span className="text-[#7B5B4A]">{STORE_INFO.location}</span>
            </p>

            <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight tracking-tight text-[#2E1A12] [text-wrap:balance]">
              Homemade cookies dari Makassar untuk menemani hari-harimu
            </h2>

            <div className="mt-5 space-y-4 text-base leading-relaxed text-[#5C3A28] max-w-2xl">
              <p>
                <strong className="font-semibold text-[#2E1A12]">{STORE_INFO.brandName}</strong>{' '}
                adalah brand homemade cookies asal Makassar yang hadir dari keinginan sederhana:
                menghadirkan camilan manis yang menyenangkan untuk menemani waktu santai, obrolan
                bersama teman, hingga momen berkumpul bersama keluarga.
              </p>
              <p>
                Dengan kemasan yang praktis dan empat pilihan berat yang fleksibel, cookies kami
                mudah dipilih baik untuk dinikmati sendiri sehari-hari maupun sebagai hadiah manis
                bagi orang-orang tersayang.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-[#E8DACA] grid grid-cols-1 sm:grid-cols-3 gap-6">
              {BRAND_PILLARS.map((pillar) => (
                <div key={pillar.title}>
                  <h3 className="font-display text-base font-semibold text-[#2E1A12]">
                    {pillar.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#5C3A28]">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
