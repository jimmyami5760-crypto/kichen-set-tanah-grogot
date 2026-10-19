/**
 * =====================================================================
 *  DATA UTAMA USAHA — EDIT FILE INI DULU
 *  Semua nilai bertanda TODO adalah contoh. Ganti dengan data asli.
 * =====================================================================
 */

export const site = {
  name: "Kichenset Tanah Grogot",
  handle: "kichenset_tanah_grogot",
  brand: { primary: "Kichenset", secondary: "Tanah Grogot" },
  tagline: "Kitchen set & furniture custom untuk rumah impian Anda",
  description:
    "Kichenset Tanah Grogot melayani pembuatan kitchen set, lemari pakaian, backdrop TV, dan furniture custom di Tanah Grogot, Kabupaten Paser. Konsultasi dan desain gratis, bahan berkualitas, pemasangan rapi.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",

  // TODO: nomor WhatsApp format internasional TANPA tanda + / spasi / angka 0 di depan
  // contoh: 0812-3456-7890  ->  6281234567890
  whatsapp: {
    number: "6281234567890",
    display: "+62 812-3456-7890",
    defaultMessage:
      "Halo Kichenset Tanah Grogot, saya ingin konsultasi kitchen set.",
  },

  // TODO: email asli
  email: "halo@kichensettanahgrogot.com",

  // TODO: link profil asli
  instagram: {
    handle: "kichenset_tanah_grogot",
    url: "https://www.instagram.com/kichenset_tanah_grogot",
  },
  facebook: {
    label: "Kichenset Tanah Grogot",
    url: "https://www.facebook.com/kichensettanahgrogot",
  },

  // TODO: alamat workshop / toko
  address: {
    street: "Jl. Contoh No. 1 (ganti dengan alamat workshop)",
    city: "Tanah Grogot",
    regency: "Kabupaten Paser",
    province: "Kalimantan Timur",
  },

  hours: [
    { days: "Senin – Sabtu", time: "08.00 – 17.00 WITA" },
    { days: "Minggu", time: "Dengan janji temu" },
  ],

  // TODO: ganti dengan link embed Google Maps lokasi asli.
  // Cara: Google Maps -> cari lokasi -> Bagikan -> Sematkan peta -> salin isi src="..."
  map: {
    embedUrl: `https://www.google.com/maps?q=${encodeURIComponent(
      "Tanah Grogot, Kabupaten Paser"
    )}&output=embed`,
    directionsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      "Tanah Grogot, Kabupaten Paser"
    )}`,
  },
};

/** Buat link WhatsApp dengan pesan otomatis. */
export function waLink(message?: string) {
  const text = message ?? site.whatsapp.defaultMessage;
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(text)}`;
}

export function fullAddress() {
  const a = site.address;
  return `${a.street}, ${a.city}, ${a.regency}, ${a.province}`;
}
