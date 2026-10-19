# Design Notes — Kichenset Tanah Grogot

Dokumentasi sistem desain, motion language, dan panduan kustomisasi untuk website company profile **Kichenset Tanah Grogot**.

---

## 1. Sistem Desain & Visual Direction

### Arahan Desain
- **Karakter**: *Warm, premium, trustworthy craftsmanship* (kehangatan kayu walnut, aksen emas/kuningan pengrajin, latar belakang ivory/krem hangat).
- **Tipografi**:
  - **Display (Judul)**: `Playfair Display` (serif bernuansa mewah, elegan, editorial furniture).
  - **Body (Teks Utama)**: `Plus Jakarta Sans` (sans-serif modern yang sangat jelas dibaca di layar smartphone).
- **Mobile First**: Diuji pada resolusi 360px, 390px, 768px, 1024px, dan 1440px tanpa horizontal scroll.
- **Standar Touch Target**: Seluruh tombol, tautan navigasi, dan kontrol formulir memiliki area sentuh minimal **44 × 44 px**.
- **Aksesibilitas**: Kontras WCAG AA, outline fokus jelas (`:focus-visible`), aria landmarks, trap focus pada lightbox dan menu, serta dukungan navigasi keyboard penuh (Esc, tanda panah kiri/kanan).

### Token Warna (`tailwind.config.ts` & `app/globals.css`)
| Token | Nilai Hex | Penggunaan |
|---|---|---|
| `ink` | `#140e0a` | Latar belakang hero, footer, teks kontras tinggi |
| `ink.deep` | `#0c0806` | Aksen bayangan terdalam dan gradasi |
| `walnut` | `#2d1f16` | Warna utama kartu gelap, bagian promo, header section |
| `walnut.light` | `#3e2b1f` | Hover state dan border kartu gelap |
| `oak` | `#7e5f43` | Warna aksen sekunder kayu hangat |
| `gold` | `#c69c47` | Aksen primer brand, tombol CTA utama, highlight |
| `gold.light` | `#e2c27b` | Hover state tombol gold, teks eyebrow di latar gelap |
| `gold.dark` | `#987228` | Teks harga, badge aksen di latar terang |
| `cream` | `#f8f4ed` | Latar belakang utama website (ivory hangat) |
| `cream.dark` | `#eee6d8` | Latar belakang bagian selang-seling (Layanan, Transformasi, Kontak) |
| `forest` | `#1f3829` | Aksen badge status dan verifikasi |

### Bayangan & Elevasi
- `shadow-subtle`: Bayangan halus untuk kartu kecil / pill tab.
- `shadow-card`: `0 12px 32px -8px rgba(20, 14, 10, 0.1)` — bayangan standar kartu layanan & portofolio.
- `shadow-elevated`: `0 20px 42px -12px rgba(20, 14, 10, 0.18)` — bayangan modal, lightbox, dan kalkulator.
- `shadow-glow-gold`: Glow emas halus untuk paket populer dan garis progres.

---

## 2. Motion Language (`lib/motion.ts`)

Seluruh animasi menghormati preferensi pengguna via `<MotionConfig reducedMotion="user">` di `components/Providers.tsx`.

### Kurva Easing
- **`easeOut`**: `[0.22, 1, 0.36, 1]` (kurva expo-smooth yang natural dan profesional).
- **`easeSmooth`**: `[0.16, 1, 0.3, 1]`.

### Durasi Standar
- `durations.fast`: `0.25s` (hover, tap, switch tab).
- `durations.normal`: `0.45s` (modal masuk, filter galeri).
- `durations.slow`: `0.7s` (scroll reveal bagian halaman, staged entrance).

### Physics Springs
- `springPhysics.snappy`: `{ type: "spring", stiffness: 380, damping: 28 }` (indikator navbar, pill tab).
- `springPhysics.smooth`: `{ type: "spring", stiffness: 260, damping: 26 }` (lightbox modal, floating WhatsApp).

### Variasi Interaksi Khusus:
1. **Hero**: Staged entrance (badge → judul → deskripsi → badges garansi → CTA → counter statistik). Parallax halus pada ilustrasi via `useScroll` + `useTransform`.
2. **Navbar**: Active indicator mengikuti scroll dengan `layoutId="nav-active"`, menu mobile dengan backdrop blur dan focus trap.
3. **Portofolio**: Filter pill animasi `layoutId="filter-pill"`, grid re-flow dengan `AnimatePresence mode="popLayout"`, lightbox dengan navigasi panah kiri/kanan dan tombol Esc.
4. **Transformasi Sebelum/Sesudah**: Slider interaktif dengan drag handle dan navigasi keyboard (panah kiri/kanan).
5. **Proses Kerja**: Garis progres yang terisi seiring halaman di-scroll (`scaleX` terikat `useScroll`).
6. **Promo**: Hitung mundur dengan digit meluncur vertikal saat berganti detik/menit tanpa hydration mismatch, serta elemen dekoratif melayang perlahan (*gentle infinite float*).
7. **Floating WhatsApp**: Delayed spring entrance dengan radar pulsing ring.

---

## 3. Panduan Kustomisasi

### A. Mengubah Warna Brand
Edit file `tailwind.config.ts` pada objek `colors`. Ubah nilai hex `walnut`, `gold`, atau `cream`. Seluruh elemen UI (tombol, navbar, border, kartu) akan otomatis mengikuti.

### B. Mengubah Font
Edit file `app/layout.tsx`:
```tsx
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
```
Ganti konfigurasi font Google atau sesuaikan variabel `--font-display` dan `--font-sans`.

### C. Mengatur Kecepatan Animasi
Edit file `lib/motion.ts` pada konstanta `durations` dan `springPhysics`.

### D. Mengganti Ilustrasi Hero dengan Foto Asli
Di file `components/Hero.tsx`, ganti `<KitchenIllustration />` dengan:
```tsx
import Image from "next/image";

<div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 shadow-elevated">
  <Image
    src="/images/hero-dapur.jpg"
    alt="Kitchen set custom karya Kichenset Tanah Grogot"
    fill
    priority
    sizes="(min-width: 1024px) 50vw, 100vw"
    className="object-cover"
  />
</div>
```

---

## 4. Daftar Data yang Perlu Diisi Pemilik Usaha (TODO)

Sebelum dipublikasikan ke domain resmi, pemilik usaha perlu mengisi data asli pada file berikut:

1. **`lib/site.ts`**:
   - `whatsapp.number`: Nomor WhatsApp asli tanpa tanda `+` atau `0` di depan (contoh: `6281234567890`).
   - `email`: Alamat email resmi usaha.
   - `instagram.handle` & `instagram.url`: Link profil Instagram usaha.
   - `facebook.url`: Halaman Facebook usaha.
   - `address.street`: Alamat lengkap workshop fisik di Tanah Grogot.
   - `map.embedUrl` & `map.directionsUrl`: URL embed Google Maps workshop asli.
2. **`lib/content.ts`**:
   - Foto portofolio asli disimpan di folder `public/images/` dan diisi di `portfolioItems[n].image`.
   - Foto transformasi dapur disimpan dan diisi di `beforeAfterItems[n].imageBefore` & `imageAfter`.
   - Menyesuaikan kisaran harga per meter lari di `pricing.materials` jika ada penyesuaian tarif lokal.
   - Tanggal berakhir promo di `promoBanner.endsAt`.
   - Testimoni asli dari pelanggan di Paser di `testimonials`.
3. **`components/Logo.tsx`**:
   - Bila sudah memiliki file logo vektor/PNG transparan, ganti kotak inisial "K" dengan logo gambar asli.
