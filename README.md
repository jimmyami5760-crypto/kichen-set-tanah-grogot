# Kichenset Tanah Grogot — Website Company Profile

Website company profile profesional untuk usaha **kitchen set & furniture custom** di Tanah Grogot, Kabupaten Paser, Kalimantan Timur.

Dibangun dengan **Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion**.

## Fitur

- Navbar sticky: transparan di puncak, solid saat di-scroll, menu aktif otomatis, hamburger di mobile
- Banner promo di atas navbar (bisa ditutup) dengan hitung mundur promo
- Hero dengan animasi, statistik berhitung naik, dan tombol konsultasi
- Tentang Kami (profil, visi dan misi, nilai usaha)
- Layanan (6 kartu, tiap kartu langsung membuka WhatsApp dengan pesan sesuai layanan)
- Portofolio dengan filter kategori dan lightbox
- Proses Kerja (5 langkah)
- Promo: kartu penawaran, countdown, dan **kalkulator estimasi harga** yang mengirim hasilnya ke WhatsApp
- Testimoni
- Kontak: **WhatsApp, Email, Instagram, Facebook, Google Maps**, form yang membuka WhatsApp/email dengan pesan terisi, alamat, jam operasional
- Tombol WhatsApp melayang di semua bagian halaman
- SEO lokal: metadata, Open Graph, JSON-LD `FurnitureStore`, `sitemap.xml`, `robots.txt`
- Menghormati pengaturan *reduce motion* pengunjung

## Prasyarat

- [Node.js](https://nodejs.org) versi 20 atau lebih baru
- [Visual Studio Code](https://code.visualstudio.com)

## Menjalankan di Visual Studio Code

1. Ekstrak folder proyek, lalu di VS Code pilih **File → Open Folder** dan buka folder `kichenset_tanah_grogot`.
2. Buka terminal: **Terminal → New Terminal**.
3. Pasang dependensi:
   ```bash
   npm install
   ```
4. Jalankan mode pengembangan:
   ```bash
   npm run dev
   ```
5. Buka <http://localhost:3000> di browser. Setiap perubahan file langsung tampil.

Perintah lain:

```bash
npm run build       # build untuk produksi
npm run start       # jalankan hasil build
npm run typecheck   # cek error TypeScript
```

Ekstensi VS Code yang membantu: **Tailwind CSS IntelliSense**, **ES7+ React/Redux snippets**, **Prettier**.

## Yang WAJIB Anda ganti sebelum dipublikasikan

Semua data contoh ditandai komentar `TODO`.

| File | Isi yang diganti |
|---|---|
| `lib/site.ts` | Nomor WhatsApp, email, link Instagram dan Facebook, alamat, jam buka, link Google Maps |
| `lib/content.ts` | Teks Tentang Kami, daftar layanan, portofolio, promo, testimoni, angka statistik, harga kalkulator, tanggal berakhir promo |
| `public/images/` | Foto hasil kerja asli |
| `components/Logo.tsx` | Ganti kotak "K" dengan logo asli |
| `.env.local` | `NEXT_PUBLIC_SITE_URL` (salin dari `.env.example`) |

### Format nomor WhatsApp

Gunakan format internasional **tanpa** `+`, spasi, atau angka 0 di depan.
Contoh: `0812-3456-7890` → `6281234567890`.

### Link peta Google Maps

1. Buka Google Maps dan cari lokasi workshop Anda.
2. Klik **Bagikan → Sematkan peta**.
3. Salin isi `src="..."` dari kode iframe ke `map.embedUrl` di `lib/site.ts`.
4. Salin link tombol "Bagikan" biasa ke `map.directionsUrl`.

### Menambah foto portofolio

1. Simpan foto di `public/images/` (lebar 1200–1600 px, di bawah 300 KB).
2. Di `lib/content.ts`, isi `image` pada item terkait:
   ```ts
   { id: "p1", title: "...", image: "/images/dapur-minimalis-1.jpg", ... }
   ```
3. Selama `image` kosong, website menampilkan placeholder gradasi.

### Mengganti ilustrasi hero dengan foto

Di `components/Hero.tsx`, ganti `<KitchenIllustration />` dengan:

```tsx
import Image from "next/image";

<div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
  <Image src="/images/hero.jpg" alt="Kitchen set hasil kerja kami" fill priority className="object-cover" />
</div>
```

### Mengubah warna brand

Edit `tailwind.config.ts` pada bagian `colors` (`ink`, `walnut`, `oak`, `gold`, `cream`). Seluruh website mengikuti.

## Struktur proyek

```
kichenset_tanah_grogot/
├── app/
│   ├── layout.tsx          # font, metadata SEO, JSON-LD
│   ├── page.tsx            # susunan seluruh bagian halaman
│   ├── globals.css         # Tailwind + kelas bantu (btn, input, container-x)
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── Navbar.tsx, PromoBanner.tsx
│   ├── Hero.tsx, KitchenIllustration.tsx, Counter.tsx
│   ├── About.tsx, Services.tsx, Portfolio.tsx, Process.tsx
│   ├── Promo.tsx, Countdown.tsx, PriceCalculator.tsx
│   ├── Testimonials.tsx, Contact.tsx, Footer.tsx
│   ├── FloatingWhatsApp.tsx
│   └── Reveal.tsx, SectionHeading.tsx, Logo.tsx, Providers.tsx, icons.tsx
├── lib/
│   ├── site.ts             # data usaha & kontak  ← edit dulu
│   ├── content.ts          # isi konten           ← edit kedua
│   └── motion.ts           # variasi animasi Framer Motion
└── public/images/          # foto proyek
```

## Deploy ke Vercel (gratis)

1. Unggah proyek ke GitHub.
2. Masuk ke [vercel.com](https://vercel.com), pilih **Add New → Project**, lalu impor repository.
3. Tambahkan environment variable `NEXT_PUBLIC_SITE_URL` berisi alamat domain Anda.
4. Klik **Deploy**.
5. Hubungkan domain di **Settings → Domains** (misalnya `kichensettanahgrogot.com`).

## Setelah website online

- Daftarkan di **Google Business Profile** supaya muncul di Google Maps dan pencarian "kitchen set Tanah Grogot".
- Daftarkan sitemap di **Google Search Console** (`https://domainanda.com/sitemap.xml`).
- Pasang link website di bio Instagram dan Facebook, serta buat QR code untuk brosur dan kartu nama.

## Ide promosi

**Di dalam website** (sudah tersedia kerangkanya)
- Banner promo + countdown, kalkulator estimasi, paket hemat, referral, testimoni

**Bisa ditambahkan**
- Galeri *before/after* dapur pelanggan
- Halaman blog berisi tips (merawat kitchen set, memilih bahan tahan lembap)
- Popup promo musiman (Ramadan, Lebaran, akhir tahun, Hari Jadi Kabupaten Paser)

**Di luar website**
- Video Reels/TikTok: timelapse pemasangan, tur dapur hasil jadi
- Program referral dan giveaway di Instagram
- Iklan Instagram/Facebook dengan target Tanah Grogot dan Paser, budget kecil
- Kerja sama dengan developer perumahan, kontraktor, dan toko bangunan
- QR code di brosur, kartu nama, dan kendaraan operasional

## Pemecahan masalah

| Masalah | Solusi |
|---|---|
| `npm install` gagal | Pastikan Node.js 20+ (`node -v`) dan koneksi internet aktif |
| Font tidak muncul saat `npm run build` | Build mengunduh font Google, butuh internet |
| Port 3000 terpakai | `npm run dev -- -p 3001` |
| Foto tidak tampil | Cek path di `image` diawali `/images/` dan file ada di `public/images/` |
| Link WhatsApp salah | Cek format nomor di `lib/site.ts` (tanpa `+` dan tanpa 0 di depan) |

## Lisensi

Hak cipta © Kichenset Tanah Grogot. Seluruh hak dilindungi.
