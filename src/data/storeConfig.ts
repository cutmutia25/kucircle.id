/**
 * Konfigurasi Toko & Data Produk kucircle.id
 * -------------------------------------------------------------------------
 * Pemilik website dapat mengedit nomor WhatsApp, tautan Instagram, daftar
 * harga, deskripsi produk, serta testimoni pelanggan asli di file ini.
 */

export interface CookieProduct {
  id: string;
  weightLabel: string;
  weightGrams: number;
  price: number;
  shortTag: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface OrderStep {
  number: string;
  title: string;
  description: string;
}

export interface TestimonialSlot {
  id: string;
  slotLabel: string;
  placeholderQuote: string;
  placeholderAuthor: string;
  placeholderContext: string;
  isPlaceholder: boolean;
}

export const STORE_INFO = {
  brandName: 'kucircle.id',
  tagline: 'Camilan Manis, Teman di Setiap Momen!',
  subheadline:
    'Nikmati kelezatan homemade cookies dari kucircle.id. Dibuat untuk menemani setiap cerita dan momen spesialmu.',
  shortDescription:
    'Brand homemade cookies dari Makassar yang menghadirkan camilan manis dan praktis untuk menemani keseharian maupun dijadikan hadiah.',
  location: 'Makassar, Sulawesi Selatan, Indonesia',
  instagramHandle: '@kucircle.id',
  instagramUrl: 'https://instagram.com/kucircle.id',

  /**
   * Nomor WhatsApp resmi admin kucircle.id (format kode negara 62 tanpa tanda "+" atau spasi).
   */
  whatsappNumber: '6285101752621',
  whatsappDisplay: '0851-0175-2621',
  isWhatsappPlaceholder: false,
} as const;

export const HERO_IMAGE = {
  src: '/src/assets/images/hero_homemade_cookies_1795135819686.jpg',
  alt: 'Tumpukan homemade cookies kucircle.id yang baru dipanggang di atas piring keramik hangat',
};

export const ABOUT_IMAGE = {
  src: '/src/assets/images/about_bakery_story_1795135816080.jpg',
  alt: 'Homemade cookies kucircle.id bersama kemasan kotak hadiah yang rapi di atas meja kayu hangat',
};

export const COOKIE_PRODUCTS: CookieProduct[] = [
  {
    id: 'cookies-250g',
    weightLabel: '250 gram',
    weightGrams: 250,
    price: 25000,
    shortTag: 'Ukuran Personal',
    description:
      'Praktis untuk camilan santai sendiri, teman belajar, bekerja, atau dinikmati bersama teh dan kopi.',
    image: '/src/assets/images/cookie_pack_250g_1795135815812.jpg',
    imageAlt: 'Kemasan homemade cookies kucircle.id ukuran 250 gram',
  },
  {
    id: 'cookies-500g',
    weightLabel: '500 gram',
    weightGrams: 500,
    price: 50000,
    shortTag: 'Ukuran Berbagi',
    description:
      'Porsi pas untuk dinikmati bersama keluarga kecil, teman dekat, atau stok camilan manis di rumah.',
    image: '/src/assets/images/cookie_pack_500g_1795135815948.jpg',
    imageAlt: 'Kemasan homemade cookies kucircle.id ukuran 500 gram',
  },
  {
    id: 'cookies-750g',
    weightLabel: '750 gram',
    weightGrams: 750,
    price: 65000,
    shortTag: 'Lebih Hemat',
    description:
      'Pilihan tepat untuk menemani kumpul hangat bersama sahabat maupun dijadikan bingkisan manis.',
    image: '/src/assets/images/cookie_pack_750g_1795135817240.jpg',
    imageAlt: 'Kemasan homemade cookies kucircle.id ukuran 750 gram',
  },
  {
    id: 'cookies-1000g',
    weightLabel: '1.000 gram',
    weightGrams: 1000,
    price: 90000,
    shortTag: 'Ukuran Keluarga & Hadiah',
    description:
      'Ukuran paling lega untuk acara keluarga, berbagi di kantor, atau hadiah spesial di momen bermakna.',
    image: '/src/assets/images/cookie_pack_1000g_1795135817432.jpg',
    imageAlt: 'Kemasan homemade cookies kucircle.id ukuran 1.000 gram',
  },
];

export const ORDER_STEPS: OrderStep[] = [
  {
    number: '01',
    title: 'Pilih ukuran cookies',
    description:
      'Tentukan ukuran kemasan yang sesuai kebutuhanmu, mulai dari 250 gram, 500 gram, 750 gram, hingga 1.000 gram.',
  },
  {
    number: '02',
    title: 'Klik tombol pesan melalui WhatsApp',
    description:
      'Sesuaikan jumlah kemasan di keranjang pesanan, lihat estimasi total harga secara otomatis, lalu klik kirim ke WhatsApp.',
  },
  {
    number: '03',
    title: 'Konfirmasi pesanan & ikuti info pre-order',
    description:
      'Kirim pesan otomatis ke admin kucircle.id untuk konfirmasi pesanan serta informasi jadwal pre-order dan pengiriman.',
  },
];

/**
 * SLOT TESTIMONI PELANGGAN
 * Ganti isi di bawah ini dengan ulasan asli dari pelanggan kucircle.id
 * dan ubah isPlaceholder menjadi false ketika testimoni asli sudah tersedia.
 */
export const TESTIMONIAL_SLOTS: TestimonialSlot[] = [
  {
    id: 'testimoni-1',
    slotLabel: 'Slot Testimoni 01',
    placeholderQuote:
      'Ruang ini disiapkan untuk menampilkan ulasan asli pelanggan kucircle.id mengenai rasa dan pengalaman menikmati homemade cookies.',
    placeholderAuthor: 'Nama Pelanggan Asli',
    placeholderContext: 'Makassar · Ukuran 250g / 500g',
    isPlaceholder: true,
  },
  {
    id: 'testimoni-2',
    slotLabel: 'Slot Testimoni 02',
    placeholderQuote:
      'Ganti teks ini dengan cerita nyata pelanggan yang memesan kucircle.id untuk camilan di rumah atau teman bersantai.',
    placeholderAuthor: 'Nama Pelanggan Asli',
    placeholderContext: 'Makassar · Ukuran 750g',
    isPlaceholder: true,
  },
  {
    id: 'testimoni-3',
    slotLabel: 'Slot Testimoni 03',
    placeholderQuote:
      'Tampilkan kesan asli dari pelanggan yang menjadikan homemade cookies kucircle.id sebagai bingkisan atau hadiah.',
    placeholderAuthor: 'Nama Pelanggan Asli',
    placeholderContext: 'Makassar · Ukuran 1.000g',
    isPlaceholder: true,
  },
];

export interface CartEntry {
  product: CookieProduct;
  quantity: number;
}

export function formatRupiah(amount: number): string {
  return `Rp${amount.toLocaleString('id-ID')}`;
}

export function buildWhatsAppOrderMessage(
  entries: CartEntry[],
  customerName?: string,
  notes?: string
): string {
  const validEntries = entries.filter((entry) => entry.quantity > 0);

  if (validEntries.length === 0) {
    return 'Halo kucircle.id, saya ingin menanyakan informasi pemesanan dan jadwal pre-order homemade cookies.';
  }

  const totalAmount = validEntries.reduce(
    (sum, entry) => sum + entry.product.price * entry.quantity,
    0
  );

  let message = '';

  if (validEntries.length === 1) {
    const { product, quantity } = validEntries[0];
    message = `Halo kucircle.id, saya ingin memesan homemade cookies ukuran ${product.weightLabel} sebanyak ${quantity} kemasan.`;
    message += `\nTotal estimasi: ${formatRupiah(totalAmount)}.`;
  } else {
    const lines = validEntries.map(
      ({ product, quantity }) =>
        `- Ukuran ${product.weightLabel} sebanyak ${quantity} kemasan (${formatRupiah(
          product.price * quantity
        )})`
    );
    message = `Halo kucircle.id, saya ingin memesan homemade cookies dengan rincian:\n${lines.join(
      '\n'
    )}\nTotal estimasi: ${formatRupiah(totalAmount)}.`;
  }

  const cleanName = customerName?.trim();
  const cleanNotes = notes?.trim();

  if (cleanName) {
    message += `\nAtas nama: ${cleanName}`;
  }
  if (cleanNotes) {
    message += `\nCatatan: ${cleanNotes}`;
  }

  message += '\nMohon informasi konfirmasi dan jadwal pre-order selanjutnya. Terima kasih!';
  return message;
}

export function buildWhatsAppUrl(message: string): string {
  const cleanNumber = STORE_INFO.whatsappNumber.replace(/[^\d]/g, '');
  const encodedText = encodeURIComponent(message);
  // Jika nomor masih placeholder tanpa angka penuh, tetap bangun URL wa.me yang valid dengan placeholder
  if (STORE_INFO.isWhatsappPlaceholder || cleanNumber.length < 10) {
    return `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodedText}`;
  }
  return `https://wa.me/${cleanNumber}?text=${encodedText}`;
}
