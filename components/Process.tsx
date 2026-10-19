"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Hammer,
  MessageCircle,
  PencilRuler,
  Ruler,
  Truck,
  type LucideIcon,
} from "lucide-react";
import { processSteps } from "@/lib/content";
import { waLink } from "@/lib/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { WhatsAppIcon } from "./icons";

const icons: Record<string, LucideIcon> = {
  chat: MessageCircle,
  ruler: Ruler,
  design: PencilRuler,
  build: Hammer,
  truck: Truck,
};

export function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "center center"],
  });

  const progressScaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={sectionRef} id="proses" className="section-pad bg-cream">
      <div className="container-x">
        <SectionHeading
          eyebrow="Proses Kerja"
          title="Lima Langkah dari Sketsa hingga Dapur Siap Pakai"
          description="Alur kerja terstruktur dan transparan. Anda selalu mengetahui progres pembuatan furniture di setiap tahap."
        />

        <div className="relative mt-16">
          {/* Animated Connecting Line (Desktop) */}
          <div
            aria-hidden="true"
            className="absolute left-[10%] right-[10%] top-7 hidden h-1 overflow-hidden rounded-full bg-walnut/10 lg:block"
          >
            <motion.div
              style={{ scaleX: progressScaleX, transformOrigin: "left" }}
              className="h-full w-full bg-gradient-to-r from-gold via-gold-light to-gold shadow-glow-gold"
            />
          </div>

          <ol className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {processSteps.map((s, i) => {
              const Icon = icons[s.icon] ?? Hammer;
              return (
                <li key={s.title} className="relative">
                  <Reveal delay={i * 0.1}>
                    <div className="group flex flex-col items-center text-center">
                      {/* Step Circle with Icon */}
                      <div className="relative z-10 grid h-14 w-14 place-items-center rounded-2xl border-2 border-gold/40 bg-walnut text-gold shadow-card transition-all duration-300 group-hover:scale-110 group-hover:bg-gold group-hover:text-ink">
                        <Icon size={22} />
                        <span className="absolute -bottom-2 -right-2 grid h-6 w-6 place-items-center rounded-full bg-cream font-display text-[11px] font-bold text-walnut shadow-subtle ring-1 ring-walnut/15">
                          {i + 1}
                        </span>
                      </div>

                      <span className="mt-5 text-xs font-semibold uppercase tracking-widest text-gold-dark">
                        Tahap 0{i + 1}
                      </span>

                      <h3 className="mt-1 font-display text-lg font-semibold text-walnut">
                        {s.title}
                      </h3>

                      <p className="mt-2 text-sm leading-relaxed text-walnut/70">
                        {s.text}
                      </p>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Action Callout */}
        <Reveal delay={0.2} className="mt-14 text-center">
          <div className="inline-flex flex-col items-center gap-4 rounded-3xl border border-walnut/10 bg-white p-6 shadow-card sm:flex-row sm:px-8 sm:py-5">
            <p className="text-sm font-medium text-walnut">
              Ingin langsung konsultasi gratis ukuran dan estimasi anggaran?
            </p>
            <a
              href={waLink("Halo Kichenset Tanah Grogot, saya ingin memulai Tahap 1: Konsultasi Kitchen Set.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold whitespace-nowrap"
            >
              <WhatsAppIcon size={18} />
              Mulai Konsultasi (Langkah 1)
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
