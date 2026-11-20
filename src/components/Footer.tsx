import { Instagram, MessageCircle } from 'lucide-react';
import {
  buildWhatsAppOrderMessage,
  buildWhatsAppUrl,
  STORE_INFO,
} from '../data/storeConfig';

const FOOTER_LINKS = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Tentang Kami', href: '#tentang-kami' },
  { label: 'Produk', href: '#produk' },
  { label: 'Cara Pemesanan', href: '#cara-pemesanan' },
  { label: 'Kontak', href: '#kontak' },
] as const;

export function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = buildWhatsAppUrl(buildWhatsAppOrderMessage([]));

  return (
    <footer className="border-t border-[#E8DACA] bg-[#F7EFE2]/55">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-12 sm:py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="md:col-span-5">
            <a
              href="#beranda"
              className="font-display text-2xl font-bold tracking-tight text-[#2E1A12] inline-block"
            >
              {STORE_INFO.brandName}
            </a>
            <p className="mt-3 text-sm leading-relaxed text-[#5C3A28] max-w-sm">
              {STORE_INFO.shortDescription}
            </p>
            <p className="mt-3 text-xs text-[#7B5B4A]">{STORE_INFO.location}</p>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-3">
            <h3 className="font-display text-sm font-semibold text-[#2E1A12]">
              Navigasi
            </h3>
            <ul className="mt-3 space-y-2.5">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[#5C3A28] hover:text-[#2E1A12] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social Column */}
          <div className="md:col-span-4">
            <h3 className="font-display text-sm font-semibold text-[#2E1A12]">
              Hubungi Kami
            </h3>
            <ul className="mt-3 space-y-3 text-sm text-[#5C3A28]">
              <li>
                <a
                  href={STORE_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[#2E1A12] transition-colors"
                >
                  <Instagram className="w-4 h-4 text-[#C85A17] shrink-0" aria-hidden="true" />
                  <span>Instagram: {STORE_INFO.instagramHandle}</span>
                </a>
              </li>
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[#2E1A12] transition-colors tabular-nums"
                >
                  <MessageCircle
                    className="w-4 h-4 text-[#1F8A4C] shrink-0"
                    aria-hidden="true"
                  />
                  <span>WhatsApp: {STORE_INFO.whatsappDisplay}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#E8DACA] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-[#7B5B4A]">
          <p>
            &copy; {currentYear} {STORE_INFO.brandName}. Seluruh hak cipta dilindungi.
          </p>
          <p>Homemade Cookies · Makassar, Sulawesi Selatan</p>
        </div>
      </div>
    </footer>
  );
}
