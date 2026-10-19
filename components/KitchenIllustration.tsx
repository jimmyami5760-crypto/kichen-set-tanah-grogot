"use client";

import { motion, type Variants } from "framer-motion";
import { easeOut } from "@/lib/motion";

const draw: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  show: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: { delay: 0.3 + i * 0.12, duration: 1, ease: easeOut },
  }),
};

const upper = [0, 1, 2].map((i) => ({ x: 40 + i * 135, y: 70, w: 125, h: 95 }));
const lower = [0, 1, 2].map((i) => ({ x: 40 + i * 135, y: 238, w: 125, h: 112 }));

/**
 * Ilustrasi garis kitchen set yang "digambar" saat halaman dibuka.
 * Ganti dengan foto hero asli kapan saja (lihat README).
 */
export function KitchenIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur lg:max-w-none">
      <svg
        viewBox="0 0 480 400"
        className="h-auto w-full"
        role="img"
        aria-label="Ilustrasi garis kitchen set custom"
      >
        <g
          stroke="#c69c47"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Kabinet atas */}
          {upper.map((r, i) => (
            <motion.rect
              key={`u${i}`}
              x={r.x}
              y={r.y}
              width={r.w}
              height={r.h}
              rx={6}
              fill="rgba(198,156,71,0.08)"
              variants={draw}
              custom={i}
              initial="hidden"
              animate="show"
            />
          ))}
          {upper.map((r, i) => (
            <motion.line
              key={`uh${i}`}
              x1={r.x + r.w / 2 - 14}
              x2={r.x + r.w / 2 + 14}
              y1={r.y + r.h - 14}
              y2={r.y + r.h - 14}
              variants={draw}
              custom={i + 3}
              initial="hidden"
              animate="show"
            />
          ))}

          {/* Meja top */}
          <motion.rect
            x={30}
            y={212}
            width={420}
            height={20}
            rx={4}
            fill="rgba(198,156,71,0.15)"
            variants={draw}
            custom={4}
            initial="hidden"
            animate="show"
          />

          {/* Kabinet bawah */}
          {lower.map((r, i) => (
            <motion.rect
              key={`l${i}`}
              x={r.x}
              y={r.y}
              width={r.w}
              height={r.h}
              rx={6}
              fill="rgba(198,156,71,0.08)"
              variants={draw}
              custom={i + 5}
              initial="hidden"
              animate="show"
            />
          ))}
          {lower.map((r, i) => (
            <motion.line
              key={`lh${i}`}
              x1={r.x + r.w / 2 - 14}
              x2={r.x + r.w / 2 + 14}
              y1={r.y + 16}
              y2={r.y + 16}
              variants={draw}
              custom={i + 8}
              initial="hidden"
              animate="show"
            />
          ))}

          {/* Lantai */}
          <motion.line
            x1={20}
            x2={460}
            y1={366}
            y2={366}
            variants={draw}
            custom={10}
            initial="hidden"
            animate="show"
          />
        </g>
      </svg>

      {/* Label melayang */}
      <motion.div
        className="absolute -left-3 top-8 rounded-full bg-gold px-4 py-2 text-xs font-bold text-ink shadow-elevated sm:-left-6"
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      >
        Gratis Desain 3D
      </motion.div>
      <motion.div
        className="absolute -right-3 bottom-10 rounded-full bg-cream px-4 py-2 text-xs font-bold text-walnut shadow-elevated sm:-right-6"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.6 }}
      >
        Garansi 12 Bulan
      </motion.div>
    </div>
  );
}
