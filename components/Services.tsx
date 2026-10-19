"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Armchair,
  ChefHat,
  Hammer,
  LayoutGrid,
  PencilRuler,
  Tv,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/lib/content";
import { easeOut } from "@/lib/motion";
import { waLink } from "@/lib/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { WhatsAppIcon } from "./icons";

const icons: Record<string, LucideIcon> = {
  kitchen: ChefHat,
  wardrobe: Armchair,
  tv: Tv,
  shelf: LayoutGrid,
  desk: PencilRuler,
  pantry: Hammer,
};

export function Services() {
  return (
    <section id="layanan" className="section-pad bg-cream-dark/50">
      <div className="container-x">
        <SectionHeading
          eyebrow="Layanan Custom"
          title="Semua kebutuhan interior furniture, dikerjakan satu atap"
          description="Dari dapur impian hingga kabinet usaha — kami sesuaikan ukuran, fungsi, estetika, dan anggaran Anda."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = icons[s.icon] ?? Hammer;
            return (
              <Reveal key={s.title} delay={(i % 3) * 0.08}>
                <motion.a
                  href={waLink(`Halo Kichenset Tanah Grogot, saya ingin tanya dan konsultasi mengenai pembuatan ${s.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -6 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.25, ease: easeOut }}
                  className="group flex h-full flex-col rounded-3xl border border-walnut/10 bg-white p-7 shadow-card transition-colors duration-300 hover:border-gold hover:shadow-elevated"
                >
                  <div className="flex items-center justify-between">
                    <span className="grid h-13 w-13 place-items-center rounded-2xl bg-walnut text-gold transition-all duration-300 group-hover:scale-105 group-hover:bg-gold group-hover:text-ink">
                      <Icon size={24} className="transition-transform duration-300 group-hover:rotate-3" />
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-walnut/40 group-hover:text-gold-dark">
                      0{i + 1}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-xl font-semibold text-walnut transition-colors group-hover:text-gold-dark">
                    {s.title}
                  </h3>

                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-walnut/70">
                    {s.text}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-walnut/10 pt-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gold-dark group-hover:text-gold-dark">
                      Konsultasi Layanan Ini
                    </span>
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-gold/15 text-gold-dark transition-all duration-300 group-hover:translate-x-1 group-hover:bg-gold group-hover:text-ink">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                </motion.a>
              </Reveal>
            );
          })}
        </div>

        {/* Section Next Step Banner */}
        <Reveal delay={0.2} className="mt-12">
          <div className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-gold/30 bg-gradient-to-r from-walnut via-ink to-walnut p-8 text-white shadow-elevated sm:flex-row sm:p-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                Punya Ukuran atau Desain Sendiri?
              </p>
              <h4 className="mt-1 font-display text-xl font-semibold text-white sm:text-2xl">
                Kirim foto ruangan &amp; referensi model idaman Anda
              </h4>
              <p className="mt-1 text-sm text-cream/70">
                Tim kami siap bantu estimasi biaya dan jadwalkan survei gratis ke rumah Anda.
              </p>
            </div>
            <a
              href={waLink("Halo Kichenset Tanah Grogot, saya punya foto ruangan dan ingin dibuatkan desain custom.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold whitespace-nowrap"
            >
              <WhatsAppIcon size={18} />
              Kirim Foto Ruangan
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
