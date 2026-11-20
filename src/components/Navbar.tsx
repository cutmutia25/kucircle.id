import { useState } from 'react';
import { Menu, ShoppingBag, X } from 'lucide-react';
import { STORE_INFO } from '../data/storeConfig';

interface NavbarProps {
  cartCount: number;
  onOpenOrderDrawer: () => void;
}

const NAV_LINKS = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Tentang Kami', href: '#tentang-kami' },
  { label: 'Produk', href: '#produk' },
  { label: 'Cara Pemesanan', href: '#cara-pemesanan' },
  { label: 'Kontak', href: '#kontak' },
] as const;

export function Navbar({ cartCount, onOpenOrderDrawer }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FFFBF4]/95 backdrop-blur-sm border-b border-[#E8DACA]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-element Brand Wordmark */}
        <a
          href="#beranda"
          className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#2E1A12] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C85A17] rounded-sm"
        >
          {STORE_INFO.brandName}
        </a>

        {/* Zone 2: Clean Single-Line Navigation Links */}
        <nav
          aria-label="Navigasi utama"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#5C3A28]"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap shrink-0 py-1 hover:text-[#2E1A12] transition-colors duration-150 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1.5px] after:bg-[#C85A17] after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C85A17] rounded-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single Primary Action */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={onOpenOrderDrawer}
            className="inline-flex items-center gap-2 px-4 py-2.5 min-h-[40px] rounded-xl bg-[#2E1A12] text-[#FFFBF4] text-sm font-semibold hover:bg-[#46291D] active:scale-[0.99] transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C85A17] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FFFBF4]"
          >
            <ShoppingBag className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>Pesan Sekarang</span>
            {cartCount > 0 && (
              <span
                aria-label={`${cartCount} kemasan di keranjang`}
                className="tabular-nums text-[#F2B705] font-bold"
              >
                ({cartCount})
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl text-[#2E1A12] hover:bg-[#F7EFE2] transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C85A17]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      {mobileMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Navigasi seluler"
          className="md:hidden bg-[#FFFBF4] border-t border-[#E8DACA] px-5 py-4"
        >
          <ul className="flex flex-col divide-y divide-[#E8DACA]/70">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-3 text-base font-medium text-[#2E1A12] hover:text-[#C85A17] transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
