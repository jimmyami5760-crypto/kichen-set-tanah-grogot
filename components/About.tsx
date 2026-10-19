"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Clock,
  MapPin,
  Ruler,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { about } from "@/lib/content";
import { site, waLink } from "@/lib/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { WhatsAppIcon } from "./icons";

const icons: Record<string, LucideIcon> = {
  shield: ShieldCheck,
  ruler: Ruler,
  clock: Clock,
  sparkles: Sparkles,
};

export function About() {
  return (
    <section id="tentang" className="section-pad bg-cream">
      <div className="container-x">
        <SectionHeading
          eyebrow="Tentang Kami"
          title={about.title}
          description="Kombinasi material pilihan, ukuran presisi survei lapangan, dan ketelitian tukang kayu berpengalaman di Tanah Grogot."
          align="left"
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Kolom Kiri: Story & Visi Misi */}
          <div className="space-y-6 lg:col-span-6">
            <div className="space-y-4 text-base leading-relaxed text-walnut/80">
              {about.paragraphs.map((p, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <p>{p}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.16}>
              <div className="rounded-3xl border border-walnut/10 bg-white p-7 shadow-card">
                <div className="flex items-center gap-2">
                  <span className="badge-gold">Visi Kami</span>
                </div>
                <p className="mt-3 font-display text-lg font-medium text-walnut">
                  &ldquo;{about.vision}&rdquo;
                </p>

                <div className="mt-6 border-t border-walnut/10 pt-5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-gold-dark">
                    Komitmen &amp; Misi Pengerjaan
                  </span>
                  <ul className="mt-3 space-y-2.5 text-sm text-walnut/75">
                    {about.missions.map((m) => (
                      <li key={m} className="flex items-start gap-2.5">
                        <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-gold" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="flex items-center gap-4 rounded-2xl bg-gold/10 p-4 text-walnut">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gold text-ink">
                  <MapPin size={20} />
                </span>
                <p className="text-xs leading-relaxed text-walnut/85">
                  Workshop berlokasi di <strong>{site.address.city}, {site.address.regency}</strong>. Pelanggan dipersilakan datang langsung melihat sampel material HPL, Multiplek, dan engsel hidrolik kami.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Kolom Kanan: 4 Nilai Utama Usaha */}
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-6">
            {about.values.map((v, i) => {
              const Icon = icons[v.icon] ?? Sparkles;
              return (
                <Reveal key={v.title} delay={i * 0.08}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.25 }}
                    className="flex h-full flex-col rounded-3xl border border-white/10 bg-walnut p-7 text-cream shadow-card"
                  >
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gold/20 text-gold shadow-subtle">
                      <Icon size={24} />
                    </span>
                    <h3 className="mt-5 font-display text-xl font-semibold text-white">
                      {v.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-cream/70">
                      {v.text}
                    </p>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
