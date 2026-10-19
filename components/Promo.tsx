"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgePercent,
  Check,
  Gift,
  Share2,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";
import { packagePlans, promoBanner, promos, referralProgram } from "@/lib/content";
import { waLink } from "@/lib/site";
import { Countdown } from "./Countdown";
import { PriceCalculator } from "./PriceCalculator";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { WhatsAppIcon } from "./icons";

const icons: Record<string, LucideIcon> = {
  sparkles: Sparkles,
  percent: BadgePercent,
  users: Users,
};

export function Promo() {
  return (
    <section id="promo" className="section-pad relative overflow-hidden bg-walnut text-cream">
      {/* Background Radial Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(198,156,71,0.22),transparent_65%),radial-gradient(ellipse_at_bottom_right,rgba(126,95,67,0.2),transparent_60%)]"
      />

      {/* Floating Decorative Elements with Gentle Infinite Motion */}
      <motion.div
        aria-hidden
        animate={{ y: [0, -14, 0], rotate: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="pointer-events-none absolute left-6 top-24 hidden h-24 w-24 rounded-full border border-gold/20 bg-gold/5 blur-xs sm:block"
      />
      <motion.div
        aria-hidden
        animate={{ y: [0, 16, 0], rotate: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
        className="pointer-events-none absolute right-8 top-1/3 hidden h-32 w-32 rounded-full border border-white/10 bg-white/5 blur-xs sm:block"
      />

      <div className="container-x relative">
        <SectionHeading
          tone="dark"
          eyebrow="Promo Terbatas"
          title="Penawaran Spesial &amp; Paket Dapur Bulan Ini"
          description="Dapatkan gratis biaya survei, visualisasi 3D, serta pilihan paket kitchen set hemat untuk hunian di Tanah Grogot dan sekitarnya."
        />

        {/* Countdown Box */}
        <Reveal className="mt-10" delay={0.1}>
          <div className="mx-auto max-w-xl rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md sm:p-8">
            <p className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-gold-light">
              Promo Berakhir Dalam
            </p>
            <Countdown endsAt={promoBanner.endsAt} />
          </div>
        </Reveal>

        {/* 3 Highlight Promo Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {promos.map((p, i) => {
            const Icon = icons[p.icon] ?? Sparkles;
            return (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xs transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:bg-white/10 hover:shadow-elevated">
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gold/15 text-gold transition-transform group-hover:scale-105">
                      <Icon size={24} />
                    </span>
                    <span className="rounded-full bg-gold px-3 py-1 text-xs font-bold text-ink shadow-subtle">
                      {p.badge}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold text-white">
                    {p.title}
                  </h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-cream/70">
                    {p.text}
                  </p>
                  <a
                    href={waLink(`Halo Kichenset Tanah Grogot, saya tertarik dengan promo "${p.title}". Mohon info cara klaimnya.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-light transition-all group-hover:translate-x-1 group-hover:text-gold"
                  >
                    <span>Klaim Promo Ini</span>
                    <ArrowRight size={16} />
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Pilihan Paket Kitchen Set (Package Cards) */}
        <div className="mt-20">
          <Reveal>
            <div className="text-center">
              <span className="badge-gold bg-gold/20 text-gold-light">
                Paket Siap Pasang
              </span>
              <h3 className="mt-3 font-display text-2xl font-semibold text-white sm:text-3xl">
                Pilihan Paket Kitchen Set Populer
              </h3>
              <p className="mt-2 text-sm text-cream/70">
                Pilih spesifikasi yang paling sesuai dengan kebutuhan ruang dan anggaran keluarga Anda.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {packagePlans.map((pkg, i) => (
              <Reveal key={pkg.id} delay={i * 0.1}>
                <div
                  className={`relative flex h-full flex-col rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1.5 sm:p-8 ${
                    pkg.isPopular
                      ? "border-2 border-gold bg-gradient-to-b from-white/10 via-white/5 to-transparent shadow-glow-gold"
                      : "border border-white/10 bg-white/5 shadow-card hover:border-gold/50"
                  }`}
                >
                  {pkg.isPopular && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 text-xs font-bold uppercase tracking-wider text-ink shadow-elevated">
                      {pkg.badge}
                    </span>
                  )}

                  <div className="flex items-baseline justify-between">
                    <h4 className="font-display text-xl font-semibold text-white">
                      {pkg.name}
                    </h4>
                    {!pkg.isPopular && (
                      <span className="text-xs font-semibold uppercase tracking-wider text-gold-light">
                        {pkg.badge}
                      </span>
                    )}
                  </div>

                  <p className="mt-2 text-xs leading-relaxed text-cream/70">
                    {pkg.idealFor}
                  </p>

                  <div className="mt-4 rounded-xl bg-white/5 p-3 text-center">
                    <span className="font-display text-lg font-bold text-gold">
                      {pkg.priceNote}
                    </span>
                  </div>

                  <ul className="mt-6 flex-1 space-y-3 border-t border-white/10 pt-5 text-sm text-cream/80">
                    {pkg.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5">
                        <Check size={16} className="mt-0.5 shrink-0 text-gold" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={waLink(pkg.waMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-7 w-full text-center ${
                      pkg.isPopular ? "btn-gold" : "btn-outline-light"
                    }`}
                  >
                    <WhatsAppIcon size={18} />
                    Konsultasi {pkg.name}
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Program Referral Card */}
        <Reveal delay={0.15} className="mt-16">
          <div className="relative overflow-hidden rounded-3xl border border-gold/40 bg-gradient-to-br from-walnut-card via-walnut to-ink p-7 shadow-elevated sm:p-10">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-gold/10 blur-2xl"
            />
            
            <div className="relative grid items-center gap-8 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-gold-light">
                  <Gift size={14} className="text-gold" />
                  {referralProgram.badge}
                </span>

                <h3 className="mt-3 font-display text-2xl font-semibold text-white sm:text-3xl">
                  {referralProgram.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-cream/80">
                  {referralProgram.description}
                </p>

                <div className="mt-4 rounded-2xl border border-gold/30 bg-gold/10 p-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-gold">
                    {referralProgram.rewardTitle}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-cream/90">
                    {referralProgram.rewardDesc}
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 lg:col-span-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-gold-light">
                  Cara Kerja Program
                </p>
                
                <ol className="mt-4 space-y-3.5 text-xs text-cream/80">
                  {referralProgram.steps.map((s) => (
                    <li key={s.step} className="flex gap-3">
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold font-display text-xs font-bold text-ink">
                        {s.step}
                      </span>
                      <div>
                        <span className="block font-semibold text-white">{s.title}</span>
                        <span className="block text-cream/70">{s.desc}</span>
                      </div>
                    </li>
                  ))}
                </ol>

                <a
                  href={waLink(referralProgram.waMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold mt-6 w-full text-center"
                >
                  <Share2 size={16} />
                  Daftarkan Referral via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Kalkulator Estimasi Harga Kitchen Set */}
        <Reveal className="mt-16" delay={0.1}>
          <PriceCalculator />
        </Reveal>
      </div>
    </section>
  );
}
