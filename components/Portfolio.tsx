"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import {
  portfolioCategories,
  portfolioItems,
  type PortfolioCategory,
  type PortfolioItem,
} from "@/lib/content";
import { springPhysics } from "@/lib/motion";
import { waLink } from "@/lib/site";
import { SectionHeading } from "./SectionHeading";
import { WhatsAppIcon } from "./icons";

function PortfolioArt({ item }: { item: PortfolioItem }) {
  if (item.image) {
    return (
      <Image
        src={item.image}
        alt={item.title}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
    );
  }
  return (
    <div className={`absolute inset-0 bg-gradient-to-br ${item.tone}`}>
      <div
        aria-hidden
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
    </div>
  );
}

export function Portfolio() {
  const [filter, setFilter] = useState<PortfolioCategory>("Semua");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const lastActiveElementRef = useRef<HTMLElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  const items = portfolioItems.filter(
    (i) => filter === "Semua" || i.category === filter
  );

  const selectedIndex = items.findIndex((i) => i.id === selectedId);
  const selected = selectedIndex !== -1 ? items[selectedIndex] : null;

  const navigateItem = useCallback(
    (direction: "prev" | "next") => {
      if (selectedIndex === -1) return;
      const nextIndex =
        direction === "next"
          ? (selectedIndex + 1) % items.length
          : (selectedIndex - 1 + items.length) % items.length;
      setSelectedId(items[nextIndex].id);
    },
    [selectedIndex, items]
  );

  // Keyboard navigation: Escape, ArrowLeft, ArrowRight
  useEffect(() => {
    if (!selected) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedId(null);
      } else if (e.key === "ArrowLeft") {
        navigateItem("prev");
      } else if (e.key === "ArrowRight") {
        navigateItem("next");
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [selected, navigateItem]);

  // Focus trap & restoration
  const handleOpenLightbox = (item: PortfolioItem) => {
    lastActiveElementRef.current = document.activeElement as HTMLElement;
    setSelectedId(item.id);
    setTimeout(() => closeButtonRef.current?.focus(), 60);
  };

  const handleCloseLightbox = () => {
    setSelectedId(null);
    lastActiveElementRef.current?.focus();
  };

  return (
    <section id="portofolio" className="section-pad">
      <div className="container-x">
        <SectionHeading
          eyebrow="Portofolio Proyek"
          title="Karya &amp; Hasil Pemasangan Kami"
          description="Koleksi kitchen set, lemari, backdrop TV, dan partisi yang telah kami pasang untuk pelanggan di Tanah Grogot dan sekitarnya."
        />

        {/* Filter kategori */}
        <div
          className="mt-10 flex flex-wrap justify-center gap-2"
          role="group"
          aria-label="Filter kategori portofolio"
        >
          {portfolioCategories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setFilter(c)}
              aria-pressed={filter === c}
              className={`relative min-h-[44px] rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-colors duration-200 ${
                filter === c ? "text-ink" : "text-walnut/70 hover:text-walnut"
              }`}
            >
              {filter === c && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-full bg-gold shadow-subtle"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{c}</span>
            </button>
          ))}
        </div>

        {/* Galeri */}
        <motion.ul layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {items.map((item) => (
              <motion.li
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <button
                  type="button"
                  onClick={() => handleOpenLightbox(item)}
                  className="group relative block aspect-[4/3] w-full overflow-hidden rounded-3xl border border-walnut/10 text-left shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated"
                  aria-label={`Buka detail foto: ${item.title}`}
                >
                  <PortfolioArt item={item} />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
                  
                  <span className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-walnut shadow-subtle opacity-0 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100">
                    <ZoomIn size={18} />
                  </span>

                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <span className="inline-block rounded-full bg-gold/25 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-gold-light backdrop-blur-xs">
                      {item.category}
                    </span>
                    <h3 className="mt-2 font-display text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                  </div>
                </button>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={selected.title}
            className="fixed inset-0 z-[60] grid place-items-center bg-ink/85 p-4 backdrop-blur-sm sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseLightbox}
          >
            <motion.div
              className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-cream shadow-elevated"
              initial={{ opacity: 0, scale: 0.94, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={springPhysics.smooth}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Gambar / Visual */}
              <div className="group relative aspect-[16/9] w-full bg-ink">
                <PortfolioArt item={selected} />
                
                {/* Navigasi Prev/Next */}
                {items.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={() => navigateItem("prev")}
                      aria-label="Lihat proyek sebelumnya"
                      className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-all hover:bg-black/80 hover:scale-105 active:scale-95"
                    >
                      <ChevronLeft size={22} />
                    </button>
                    <button
                      type="button"
                      onClick={() => navigateItem("next")}
                      aria-label="Lihat proyek selanjutnya"
                      className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-all hover:bg-black/80 hover:scale-105 active:scale-95"
                    >
                      <ChevronRight size={22} />
                    </button>
                  </>
                )}
              </div>

              {/* Tombol Tutup */}
              <button
                ref={closeButtonRef}
                type="button"
                onClick={handleCloseLightbox}
                aria-label="Tutup lightbox (Esc)"
                className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full bg-white/90 text-walnut shadow-card transition-transform hover:bg-white hover:scale-105 active:scale-95"
              >
                <X size={20} />
              </button>

              {/* Konten Detail */}
              <div className="p-6 sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="badge-gold">
                    {selected.category}
                  </span>
                  <span className="text-xs font-semibold text-walnut/50">
                    {selectedIndex + 1} dari {items.length} proyek
                  </span>
                </div>

                <h3 className="mt-3 font-display text-2xl font-semibold text-walnut sm:text-3xl">
                  {selected.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-walnut/75 sm:text-base">
                  {selected.description}
                </p>

                <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-walnut/10 pt-5">
                  <p className="text-xs text-walnut/60">
                    Bisa disesuaikan dengan dimensi ruangan dan warna favorit rumah Anda.
                  </p>
                  <a
                    href={waLink(
                      `Halo Kichenset Tanah Grogot, saya tertarik dengan proyek "${selected.title}". Bisa info estimasi harga dan survei ukurannya?`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold"
                  >
                    <WhatsAppIcon size={18} />
                    Pesan Model Serupa
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
