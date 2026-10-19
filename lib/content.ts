/**
 * =====================================================================
 *  ISI KONTEN WEBSITE — layanan, portofolio, promo, testimoni, harga.
 *  Semua angka, harga, dan testimoni di sini adalah CONTOH.
 *  Ganti dengan data asli sebelum website dipublikasikan.
 * =====================================================================
 */

export const navItems = [
  { id: "beranda", label: "Beranda" },
  { id: "tentang", label: "Tentang Kami" },
  { id: "layanan", label: "Layanan" },
  { id: "portofolio", label: "Portofolio" },
  { id: "transformasi", label: "Transformasi" },
  { id: "proses", label: "Proses Kerja" },
  { id: "promo", label: "Promo" },
  { id: "testimoni", label: "Testimoni" },
  { id: "kontak", label: "Kontak" },
] as const;

/* ------------------------------ Promo banner ------------------------------ */
export const promoBanner = {
  enabled: true,
  text: "Gratis survei & desain 3D untuk pemesanan bulan ini.",
  cta: "Klaim promo",
  waMessage:
    "Halo Kichenset Tanah Grogot, saya ingin klaim promo gratis survei & desain 3D.",
  // TODO: tanggal berakhir promo (format ISO, zona WITA = +08:00)
  endsAt: "2026-12-31T23:59:59+08:00",
};

/* ---------------------------------- Hero ---------------------------------- */
// TODO: ganti dengan angka asli
export const heroStats = [
  { value: 150, suffix: "+", label: "Proyek selesai" },
  { value: 5, suffix: "+", label: "Tahun pengalaman" },
  { value: 12, suffix: " bln", label: "Garansi pemasangan" },
];

/* ---------------------------------- Tentang -------------------------------- */
export const about = {
  title: "Dapur dan furniture yang dibuat pas untuk ruang dan kebutuhan Anda",
  paragraphs: [
    "Kichenset Tanah Grogot adalah usaha furniture custom yang berfokus pada kitchen set dan interior rumah di Kabupaten Paser. Setiap proyek kami kerjakan dari awal sampai akhir: konsultasi, survei ukuran, desain, produksi, hingga pemasangan di rumah Anda.",
    "Kami percaya furniture yang baik bukan hanya indah dilihat, tetapi juga presisi, kuat dipakai bertahun-tahun, dan nyaman digunakan setiap hari.",
  ],
  vision:
    "Menjadi pilihan utama masyarakat Tanah Grogot dan sekitarnya untuk furniture custom yang rapi, awet, dan terjangkau.",
  missions: [
    "Mengerjakan setiap pesanan dengan ukuran presisi dan finishing rapi.",
    "Menggunakan bahan yang sesuai kebutuhan dan anggaran pelanggan.",
    "Menjaga komunikasi yang jelas dan penyelesaian tepat waktu.",
    "Memberikan garansi dan layanan purna pasang yang bisa diandalkan.",
  ],
  values: [
    {
      icon: "shield",
      title: "Bahan berkualitas",
      text: "Pilihan material yang tahan lembap dan rayap, cocok untuk iklim Kalimantan.",
    },
    {
      icon: "ruler",
      title: "Ukuran presisi",
      text: "Survei langsung ke lokasi supaya setiap sudut ruangan terpakai maksimal.",
    },
    {
      icon: "clock",
      title: "Tepat waktu",
      text: "Jadwal pengerjaan disepakati di awal dan kami komunikasikan progresnya.",
    },
    {
      icon: "sparkles",
      title: "Finishing rapi",
      text: "Detail sambungan, engsel, dan handle dikerjakan dengan teliti.",
    },
  ],
};

/* --------------------------------- Layanan --------------------------------- */
export const services = [
  {
    icon: "kitchen",
    title: "Kitchen Set",
    text: "Kabinet dapur custom bentuk lurus, L, atau U lengkap dengan meja top, rak, dan laci.",
    message: "Halo, saya ingin bertanya tentang layanan kitchen set.",
  },
  {
    icon: "wardrobe",
    title: "Lemari Pakaian",
    text: "Lemari tanam atau berdiri sesuai ukuran kamar, dengan sekat, laci, dan gantungan yang diatur sesuai kebutuhan.",
    message: "Halo, saya ingin bertanya tentang pembuatan lemari pakaian.",
  },
  {
    icon: "tv",
    title: "Backdrop TV",
    text: "Panel dinding TV dengan rak display dan penyimpanan tersembunyi, rapi dan modern.",
    message: "Halo, saya ingin bertanya tentang pembuatan backdrop TV.",
  },
  {
    icon: "shelf",
    title: "Rak & Partisi",
    text: "Rak buku, rak dinding, dan partisi ruangan yang memisahkan area tanpa terasa sempit.",
    message: "Halo, saya ingin bertanya tentang rak dan partisi.",
  },
  {
    icon: "desk",
    title: "Meja Kerja & Interior",
    text: "Meja kerja, meja rias, dan elemen interior custom untuk rumah maupun kantor kecil.",
    message: "Halo, saya ingin bertanya tentang meja kerja / interior custom.",
  },
  {
    icon: "pantry",
    title: "Pantry & Kabinet Usaha",
    text: "Kabinet dan counter untuk warung, kafe, dan toko dengan desain yang tahan pemakaian intensif.",
    message: "Halo, saya ingin bertanya tentang pantry / kabinet untuk usaha.",
  },
];

/* -------------------------------- Portofolio ------------------------------- */
export const portfolioCategories = [
  "Semua",
  "Dapur",
  "Lemari",
  "Backdrop TV",
  "Interior Lain",
] as const;

export type PortfolioCategory = (typeof portfolioCategories)[number];

export type PortfolioItem = {
  id: string;
  title: string;
  category: Exclude<PortfolioCategory, "Semua">;
  description: string;
  /** Isi dengan path foto di folder public, contoh: "/images/dapur-1.jpg" */
  image?: string;
  /** Kelas gradasi placeholder (dipakai jika `image` kosong) */
  tone: string;
};

// TODO: ganti judul, deskripsi, dan isi `image` dengan foto proyek asli
export const portfolioItems: PortfolioItem[] = [
  {
    id: "p1",
    title: "Kitchen Set Minimalis Lurus",
    category: "Dapur",
    description:
      "Kitchen set bentuk lurus dengan kabinet atas-bawah, finishing HPL warna kayu.",
    tone: "from-[#3b2a20] to-[#8a6a4a]",
  },
  {
    id: "p2",
    title: "Kitchen Set Bentuk L",
    category: "Dapur",
    description:
      "Memanfaatkan sudut dapur dengan laci dalam dan rak bumbu yang mudah dijangkau.",
    tone: "from-[#24402f] to-[#5c7d62]",
  },
  {
    id: "p3",
    title: "Dapur Modern Duco Putih",
    category: "Dapur",
    description: "Finishing duco putih doff dengan handle hitam dan meja top granit.",
    tone: "from-[#6b6258] to-[#d8cfc0]",
  },
  {
    id: "p4",
    title: "Lemari Pakaian Tanam",
    category: "Lemari",
    description:
      "Lemari sampai plafon dengan pintu sliding, laci, dan area gantung yang lega.",
    tone: "from-[#1a120d] to-[#5a4130]",
  },
  {
    id: "p5",
    title: "Lemari Anak Multifungsi",
    category: "Lemari",
    description: "Lemari pakaian dan rak mainan dalam satu unit dengan warna ceria.",
    tone: "from-[#8a6a4a] to-[#e3c779]",
  },
  {
    id: "p6",
    title: "Backdrop TV Panel Kayu",
    category: "Backdrop TV",
    description:
      "Panel dinding dengan rak display, lampu LED strip, dan kabel tersembunyi.",
    tone: "from-[#3b2a20] to-[#c8a24a]",
  },
  {
    id: "p7",
    title: "Rak Buku & Partisi",
    category: "Interior Lain",
    description: "Rak partisi dua sisi yang memisahkan ruang tamu dan ruang kerja.",
    tone: "from-[#24402f] to-[#9aa88a]",
  },
  {
    id: "p8",
    title: "Meja Kerja Custom",
    category: "Interior Lain",
    description: "Meja kerja panjang dengan rak gantung dan laci kabel rapi.",
    tone: "from-[#5a4130] to-[#b8956a]",
  },
];

/* ------------------------- Transformasi Before / After ---------------------- */
export type BeforeAfterItem = {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  duration: string;
  beforeLabel: string;
  beforeDesc: string;
  afterLabel: string;
  afterDesc: string;
  imageBefore?: string;
  imageAfter?: string;
  beforeTone: string;
  afterTone: string;
  highlights: string[];
  waMessage: string;
};

// TODO: ganti foto atau deskripsi transformasi dengan proyek asli
export const beforeAfterItems: BeforeAfterItem[] = [
  {
    id: "ba-1",
    title: "Transformasi Dapur Rumah Tipe 36",
    subtitle: "Dari sempit dan minim tempat simpan menjadi dapur L modern fungsional",
    location: "Tanah Grogot, Paser",
    duration: "Pengerjaan 14 hari",
    beforeLabel: "Kondisi Awal (Sebelum)",
    beforeDesc:
      "Dapur polos tanpa kabinet gantung, meja beton terbuka, bumbu dan peralatan masak berserakan di atas meja, minim ruang gerak.",
    afterLabel: "Hasil Custom (Sesudah)",
    afterDesc:
      "Kitchen set bentuk L dengan kabinet atas sampai plafon, rak bumbu tarik hidrolik, top table motif marmer tahan panas, dan lampu LED bawah kabinet.",
    beforeTone: "from-[#2e2620] to-[#504035]",
    afterTone: "from-[#1a120d] via-[#3b2a20] to-[#c8a24a]",
    highlights: [
      "Kapasitas simpan naik 250%",
      "Bahan Multiplek 18mm anti-lembab",
      "Engsel slow-motion (tidak berisik)",
    ],
    waMessage:
      "Halo Kichenset Tanah Grogot, saya tertarik dengan transformasi Dapur Rumah Tipe 36. Bisa survei ke lokasi saya?",
  },
  {
    id: "ba-2",
    title: "Makeover Dapur Kayu Klasik ke Duco Minimalis",
    subtitle: "Renovasi total dapur keluarga menjadi bersih, terang, dan mewah",
    location: "Tanah Grogot, Paser",
    duration: "Pengerjaan 18 hari",
    beforeLabel: "Kondisi Awal (Sebelum)",
    beforeDesc:
      "Kabinet lama berjamur karena lembap, pintu lemari macet, pencahayaan remang-remang, dan area kompor berminyak sulit dibersihkan.",
    afterLabel: "Hasil Custom (Sesudah)",
    afterDesc:
      "Finishing duco putih doff anti-jamur dipadukan handle kuningan minimalis, kabinet cerobong asap terintegrasi, dan meja granit hitam anti-gores.",
    beforeTone: "from-[#382d24] to-[#604e3f]",
    afterTone: "from-[#24402f] via-[#3b2a20] to-[#e3c779]",
    highlights: [
      "Finishing duco premium anti-rayap",
      "Top table granit alam hitam solid",
      "Laci sendok & piring hidrolik",
    ],
    waMessage:
      "Halo Kichenset Tanah Grogot, saya ingin konsultasi renovasi dapur konsep Duco Minimalis.",
  },
  {
    id: "ba-3",
    title: "Dapur Lurus Apartemen / Rumah Sudut",
    subtitle: "Maksimalkan dinding 2.4 meter untuk fungsi memasak dan pantry ringkas",
    location: "Kuaro, Paser",
    duration: "Pengerjaan 10 hari",
    beforeLabel: "Kondisi Awal (Sebelum)",
    beforeDesc:
      "Hanya ada wastafel cuci piring standar, dinding semen kosong tanpa pelindung cipratan, tabung gas diletakkan di lantai terbuka.",
    afterLabel: "Hasil Custom (Sesudah)",
    afterDesc:
      "Kabinet lurus kompak dengan ruang khusus tabung gas berventilasi aman, rak piring tirisan stainless di atas wastafel, dan backsplash HPL mudah lap.",
    beforeTone: "from-[#24201c] to-[#453e37]",
    afterTone: "from-[#1a120d] via-[#8a6a4a] to-[#c8a24a]",
    highlights: [
      "Solusi cerdas ruang terbatas",
      "Ruang gas aman berpori ventilasi",
      "Pemasangan rapi hanya 1 hari kerja",
    ],
    waMessage:
      "Halo Kichenset Tanah Grogot, saya tertarik membuat kitchen set lurus untuk ruang terbatas.",
  },
];

/* ---------------------------------- Proses --------------------------------- */
export const processSteps = [
  {
    icon: "chat",
    title: "Konsultasi",
    text: "Ceritakan kebutuhan dan anggaran Anda lewat WhatsApp atau datang langsung.",
  },
  {
    icon: "ruler",
    title: "Survei & ukur",
    text: "Tim kami datang ke lokasi untuk mengukur dan memotret ruangan.",
  },
  {
    icon: "design",
    title: "Desain & penawaran",
    text: "Anda menerima desain dan rincian biaya. Revisi bisa dilakukan sebelum deal.",
  },
  {
    icon: "build",
    title: "Produksi",
    text: "Pengerjaan di workshop dengan pengecekan kualitas di setiap tahap.",
  },
  {
    icon: "truck",
    title: "Pemasangan",
    text: "Pengiriman, pemasangan, dan serah terima dengan pengecekan bersama.",
  },
];

/* ----------------------------------- Promo --------------------------------- */
// TODO: sesuaikan dengan promo yang benar-benar berlaku
export const promos = [
  {
    icon: "sparkles",
    badge: "Gratis",
    title: "Survei & Desain 3D",
    text: "Lihat gambaran dapur Anda dalam 3D sebelum memutuskan memesan.",
  },
  {
    icon: "percent",
    badge: "Paket hemat",
    title: "Paket Dapur + Backdrop",
    text: "Pesan kitchen set dan backdrop TV sekaligus untuk harga paket yang lebih hemat.",
  },
  {
    icon: "users",
    badge: "Referral",
    title: "Ajak Teman, Dapat Bonus",
    text: "Rekomendasikan kami ke keluarga atau teman, dapatkan bonus aksesori untuk Anda berdua.",
  },
];

/* -------------------------------- Paket Kitchen Set ------------------------ */
export type PackagePlan = {
  id: string;
  name: string;
  badge: string;
  isPopular?: boolean;
  idealFor: string;
  priceNote: string;
  features: string[];
  waMessage: string;
};

export const packagePlans: PackagePlan[] = [
  {
    id: "pkg-1",
    name: "Paket Hemat / Garis Lurus",
    badge: "Solusi Ekonomis",
    idealFor: "Dapur compact 2 – 2.5 meter, rumah subsidi & tipe 36",
    priceNote: "Estimasi hemat mulai 2,5 jt/meter",
    features: [
      "Multiplek tebal 18mm tahan lembap",
      "Finishing HPL motif kayu / solid colour",
      "Engsel soft-close (tutup perlahan & hening)",
      "Rak piring & rak sendok standar",
      "Gratis desain 3D & survei ukuran",
      "Garansi pemasangan 12 bulan",
    ],
    waMessage:
      "Halo Kichenset Tanah Grogot, saya ingin tanya Paket Hemat / Garis Lurus.",
  },
  {
    id: "pkg-2",
    name: "Paket Favorit / Bentuk L",
    badge: "Paling Diminati",
    isPopular: true,
    idealFor: "Dapur keluarga 3 – 5 meter dengan ruang penyimpanan optimal",
    priceNote: "Pilihan terbaik untuk rumah tinggal",
    features: [
      "Bahan Multiplek Grade A + edging rapi",
      "Kabinet atas full plafon + kabinet bawah",
      "Pemanfaatan sudut L dengan rak putar/tarik",
      "Rak bumbu stainless steel 2 tingkat",
      "Gratis instalasi lampu LED strip warm",
      "Garansi pemasangan 12 bulan & perawatan",
    ],
    waMessage:
      "Halo Kichenset Tanah Grogot, saya tertarik dengan Paket Favorit / Bentuk L.",
  },
  {
    id: "pkg-3",
    name: "Paket Premium / Duco & Island",
    badge: "Kemewahan Maksimal",
    idealFor: "Dapur luas, dapur bersih, atau kombinasi minibar",
    priceNote: "Finishing cat duco / HPL luxury",
    features: [
      "Finishing Duco doff halus atau Akrilik glossy",
      "Top table granit alam / solid surface",
      "Aksesori hidrolik impor tahan beban",
      "Kabinet cerobong asap & kulkas terintegrasi",
      "Free 3D visual photorealistic & prioritas pengerjaan",
      "Garansi pemasangan 12 bulan penuh",
    ],
    waMessage:
      "Halo Kichenset Tanah Grogot, saya ingin konsultasi Paket Premium / Duco & Island.",
  },
];

/* -------------------------------- Program Referral ------------------------- */
export const referralProgram = {
  badge: "Program Referral",
  title: "Ajak Teman & Tetangga, Dapatkan Bonus Spesial",
  description:
    "Puas dengan hasil kerja Kichenset Tanah Grogot? Rekomendasikan kepada tetangga, sahabat, atau rekan kerja yang sedang membangun atau merenovasi rumah di Paser.",
  rewardTitle: "Bonus Langsung Hadiah / Cashback",
  rewardDesc:
    "Untuk setiap rekan yang deal pemesanan kitchen set / interior minimal Rp 10 Juta, Anda berhak menerima reward bonus tunai dan rekan Anda mendapatkan upgrade aksesori rak piring stainless steel gratis!",
  steps: [
    {
      step: "01",
      title: "Bagikan Rekomendasi",
      desc: "Bagikan kontak WhatsApp kami ke rekan Anda yang butuh kitchen set.",
    },
    {
      step: "02",
      title: "Rekan Deal Proyek",
      desc: "Rekan Anda menyebutkan nomor Anda saat proses konsultasi & survei.",
    },
    {
      step: "03",
      title: "Klaim Bonus Bersama",
      desc: "Bonus langsung ditransfer saat proyek mulai tahap produksi workshop.",
    },
  ],
  waMessage:
    "Halo Kichenset Tanah Grogot, saya ingin mereferensikan teman/keluarga untuk pembuatan furniture.",
};

/* --------------------------------- Testimoni -------------------------------- */
// TODO: GANTI dengan testimoni pelanggan asli (minta izin dulu). Ini hanya contoh tampilan.
export const testimonials = [
  {
    name: "Nama Pelanggan 1",
    place: "Tanah Grogot",
    text: "Contoh testimoni: pengerjaan rapi dan sesuai jadwal. Dapur jadi lebih lega dan enak dipakai.",
  },
  {
    name: "Nama Pelanggan 2",
    place: "Long Ikis",
    text: "Contoh testimoni: desainnya dibuat sesuai ukuran rumah kami dan komunikasinya enak.",
  },
  {
    name: "Nama Pelanggan 3",
    place: "Kuaro",
    text: "Contoh testimoni: hasil akhirnya melebihi bayangan, pemasangan juga cepat dan bersih.",
  },
];

/* ------------------------- Kalkulator estimasi harga ------------------------ */
// TODO: ganti dengan kisaran harga per meter lari yang sebenarnya.
export const pricing = {
  materials: [
    { id: "multiplek-hpl", label: "Multiplek + HPL", min: 2_500_000, max: 3_200_000 },
    { id: "blockboard-hpl", label: "Blockboard + HPL", min: 2_800_000, max: 3_600_000 },
    { id: "multiplek-duco", label: "Multiplek + Duco", min: 3_200_000, max: 4_200_000 },
  ],
  layouts: [
    { id: "lurus", label: "Lurus", factor: 1 },
    { id: "l", label: "Bentuk L", factor: 1.05 },
    { id: "u", label: "Bentuk U", factor: 1.1 },
  ],
  granitePerMeter: 900_000,
  minLength: 2,
  maxLength: 12,
};
