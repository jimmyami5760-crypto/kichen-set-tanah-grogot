"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2, MapPin, Sparkles } from "lucide-react";
import { heroStats } from "@/lib/content";
import { easeOut } from "@/lib/motion";
import { site, waLink } from "@/lib/site";
import { Counter } from "./Counter";
import { KitchenIllustration } from "./KitchenIllustration";
import { WhatsAppIcon } from "./icons";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const visualY = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const visualOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.65]);

  return (
    <section
      ref={heroRef}
      id="beranda"
      className="relative overflow-hidden bg-ink pb-20 pt-32 text-white sm:pb-28 sm:pt-40 lg:pt-44"
    >
      {/* Latar artistik: gradasi hangat + pola arsitektur halus */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(198,156,71,0.22),transparent_60%),radial-gradient(ellipse_at_bottom_left,rgba(126,95,67,0.25),transparent_60%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container-x relative grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
        <div>
          {/* Staged entrance item 1: Location Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: easeOut }}
            className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-gold-light backdrop-blur-sm"
          >
            <MapPin size={14} className="text-gold" />
            <span>Melayani {site.address.city} &amp; Seluruh {site.address.regency}</span>
          </motion.div>

          {/* Staged entrance item 2: Headline with styled emphasis */}
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: easeOut }}
            className="mt-5 font-display text-3xl font-semibold leading-[1.12] sm:text-5xl lg:text-6xl"
          >
            Kitchen set custom yang{" "}
            <span className="relative inline-block text-gold">
              rapi, presisi,
              <span
                aria-hidden
                className="absolute -bottom-1 left-0 right-0 h-1 rounded-full bg-gold/30"
              />
            </span>{" "}
            dan pas untuk rumah Anda.
          </motion.h1>

          {/* Staged entrance item 3: Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: easeOut }}
            className="mt-6 max-w-xl text-base leading-relaxed text-cream/80 sm:text-lg"
          >
            {site.description}
          </motion.p>

          {/* Staged entrance item 4: Reassurance Badges */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28, ease: easeOut }}
            className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-white/75 sm:text-sm"
          >
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-gold" />
              Survei &amp; Desain 3D Gratis
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-gold" />
              Bahan Anti-Lembab &amp; Rayap
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Sparkles size={16} className="text-gold" />
              Garansi Pemasangan 12 Bulan
            </span>
          </motion.div>

          {/* Staged entrance item 5: CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: easeOut }}
            className="mt-8 flex flex-wrap gap-3.5"
          >
            <a
              href={waLink("Halo Kichenset Tanah Grogot, saya ingin konsultasi kitchen set dan survei gratis.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              <WhatsAppIcon size={18} />
              Konsultasi Gratis via WhatsApp
            </a>
            <a href="#portofolio" className="btn-outline-light">
              Lihat Portofolio
              <ArrowRight size={16} />
            </a>
          </motion.div>

          {/* Staged entrance item 6: Stats with counting up */}
          <motion.dl
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.42, ease: easeOut }}
            className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-white/10 pt-8"
          >
            {heroStats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-2xl font-semibold text-gold sm:text-3xl lg:text-4xl">
                  <Counter to={s.value} suffix={s.suffix} />
                </dd>
                <p className="mt-1 text-xs text-white/60 sm:text-sm">{s.label}</p>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Visual Showcase with Scroll Parallax */}
        <motion.div
          style={{ y: visualY, opacity: visualOpacity }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: easeOut }}
          className="relative lg:pl-4"
        >
          <KitchenIllustration />
        </motion.div>
      </div>
    </section>
  );
}
