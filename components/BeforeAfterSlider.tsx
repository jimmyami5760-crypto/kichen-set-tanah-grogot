"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, ChevronLeft, ChevronRight, Clock, MapPin, Sparkles } from "lucide-react";
import { beforeAfterItems, type BeforeAfterItem } from "@/lib/content";
import { easeOut } from "@/lib/motion";
import { waLink } from "@/lib/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { WhatsAppIcon } from "./icons";

function TransformationVisual({
  item,
  isAfter,
}: {
  item: BeforeAfterItem;
  isAfter: boolean;
}) {
  const image = isAfter ? item.imageAfter : item.imageBefore;
  const tone = isAfter ? item.afterTone : item.beforeTone;

  if (image) {
    return (
      <Image
        src={image}
        alt={isAfter ? item.afterLabel : item.beforeLabel}
        fill
        sizes="(min-width: 1024px) 1000px, 100vw"
        className="object-cover"
      />
    );
  }

  return (
    <div className={`relative h-full w-full bg-gradient-to-br ${tone}`}>
      {/* Decorative architectural grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Stylized visual representation */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-wider backdrop-blur-md ${
            isAfter ? "bg-gold text-ink" : "bg-black/50 text-white/90"
          }`}
        >
          {isAfter && <Sparkles size={14} />}
          {isAfter ? "Hasil Jadi — Custom Rapi" : "Kondisi Awal — Sebelum Dikerjakan"}
        </span>

        <p className="mt-3 max-w-md font-display text-lg font-medium text-white sm:text-xl">
          {isAfter ? item.afterDesc : item.beforeDesc}
        </p>

        {isAfter ? (
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {item.highlights.map((h) => (
              <span
                key={h}
                className="inline-flex items-center gap-1 rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-cream backdrop-blur-xs"
              >
                <CheckCircle2 size={13} className="text-gold" />
                {h}
              </span>
            ))}
          </div>
        ) : (
          <p className="mt-2 text-xs text-white/60">
            Geser slider ke kanan untuk melihat transformasi dapur ini
          </p>
        )}
      </div>
    </div>
  );
}

export function BeforeAfterSlider() {
  const [activeTab, setActiveTab] = useState(0);
  const [sliderPos, setSliderPos] = useState(50); // percentage 0 to 100
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentItem = beforeAfterItems[activeTab] ?? beforeAfterItems[0];

  const updatePosition = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clampedPercent = Math.min(Math.max((x / rect.width) * 100, 0), 100);
    setSliderPos(clampedPercent);
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    updatePosition(e.clientX);
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
  };

  // Keyboard navigation on slider handle
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      setSliderPos((prev) => Math.max(prev - 5, 0));
    } else if (e.key === "ArrowRight") {
      setSliderPos((prev) => Math.min(prev + 5, 100));
    } else if (e.key === "Home") {
      setSliderPos(0);
    } else if (e.key === "End") {
      setSliderPos(100);
    }
  };

  return (
    <section id="transformasi" className="section-pad bg-cream-dark/60">
      <div className="container-x">
        <SectionHeading
          eyebrow="Sebelum &amp; Sesudah"
          title="Transformasi Nyata Dapur Impian"
          description="Lihat bagaimana kami mengubah sudut dapur yang sempit dan berantakan menjadi ruang masak yang rapi, lega, dan estetik."
        />

        {/* Tab Pemilihan Kasus / Ruangan */}
        <div className="mt-10 flex flex-wrap justify-center gap-2" role="tablist">
          {beforeAfterItems.map((item, index) => (
            <button
              key={item.id}
              role="tab"
              aria-selected={activeTab === index}
              type="button"
              onClick={() => {
                setActiveTab(index);
                setSliderPos(50);
              }}
              className={`relative min-h-[44px] rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors duration-200 ${
                activeTab === index ? "text-ink" : "text-walnut/70 hover:text-walnut"
              }`}
            >
              {activeTab === index && (
                <motion.span
                  layoutId="transformasi-pill"
                  className="absolute inset-0 rounded-full bg-gold shadow-subtle"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.title}</span>
            </button>
          ))}
        </div>

        {/* Showcase Card */}
        <Reveal delay={0.1} className="mt-10">
          <div className="overflow-hidden rounded-3xl border border-walnut/10 bg-white p-4 shadow-card sm:p-6 lg:p-8">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="font-display text-xl font-semibold text-walnut sm:text-2xl">
                  {currentItem.title}
                </h3>
                <p className="mt-1 text-sm text-walnut/70">{currentItem.subtitle}</p>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-xs text-walnut/60">
                <span className="inline-flex items-center gap-1 rounded-full bg-walnut/5 px-3 py-1 font-medium">
                  <MapPin size={13} className="text-gold-dark" />
                  {currentItem.location}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-walnut/5 px-3 py-1 font-medium">
                  <Clock size={13} className="text-gold-dark" />
                  {currentItem.duration}
                </span>
              </div>
            </div>

            {/* Interactive Before / After Slider Canvas */}
            <div
              ref={containerRef}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              className="relative aspect-[16/10] w-full cursor-ew-resize select-none overflow-hidden rounded-2xl bg-ink sm:aspect-[16/9]"
              aria-label="Area interaktif perbandingan sebelum dan sesudah. Geser handle ke kiri atau ke kanan."
            >
              {/* After Layer (Background Full) */}
              <div className="absolute inset-0">
                <TransformationVisual item={currentItem} isAfter={true} />
              </div>

              {/* Before Layer (Clipped by slider position) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
              >
                <TransformationVisual item={currentItem} isAfter={false} />
              </div>

              {/* Floating Label Badges on Canvas */}
              <div className="pointer-events-none absolute left-4 top-4 z-20 rounded-full bg-ink/75 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-subtle backdrop-blur-xs">
                Sebelum
              </div>
              <div className="pointer-events-none absolute right-4 top-4 z-20 rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wider text-ink shadow-subtle backdrop-blur-xs">
                Sesudah
              </div>

              {/* Divider Line & Draggable Handle */}
              <div
                className="absolute inset-y-0 z-30"
                style={{ left: `${sliderPos}%` }}
              >
                {/* Vertical Divider Bar */}
                <div className="absolute inset-y-0 -left-px w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)]" />

                {/* Handle Knob with accessibility attributes */}
                <div
                  role="slider"
                  tabIndex={0}
                  aria-label="Penggeser perbandingan sebelum dan sesudah"
                  aria-valuenow={Math.round(sliderPos)}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  onKeyDown={handleKeyDown}
                  className="absolute top-1/2 -ml-5 -mt-5 grid h-10 w-10 cursor-ew-resize place-items-center rounded-full border-2 border-white bg-gold text-ink shadow-elevated transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gold"
                >
                  <div className="flex items-center gap-0.5">
                    <ChevronLeft size={16} />
                    <ChevronRight size={16} />
                  </div>
                </div>
              </div>
            </div>

            {/* Slider Hint & Detail Specifications */}
            <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-walnut/10 pt-5 sm:flex-row">
              <p className="text-xs text-walnut/60">
                <span className="font-semibold text-walnut">Tips:</span> Tekan dan geser garis tengah untuk melihat detail pengerjaan.
              </p>

              <a
                href={waLink(currentItem.waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold whitespace-nowrap"
              >
                <WhatsAppIcon size={18} />
                Konsultasi Renovasi Serupa
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
