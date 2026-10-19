"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Left = { d: number; h: number; m: number; s: number; done: boolean };

function diff(target: number): Left {
  const ms = Math.max(0, target - Date.now());
  const total = Math.floor(ms / 1000);
  return {
    d: Math.floor(total / 86400),
    h: Math.floor((total % 86400) / 3600),
    m: Math.floor((total % 3600) / 60),
    s: total % 60,
    done: ms === 0,
  };
}

function DigitBox({ value, label }: { value: number; label: string }) {
  const formatted = String(value).padStart(2, "0");

  return (
    <div className="flex flex-col items-center">
      <div className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-white/15 bg-white/5 shadow-inner-soft backdrop-blur-sm sm:h-20 sm:w-20">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={formatted}
            initial={{ y: "80%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-80%", opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-2xl font-semibold tabular-nums text-gold sm:text-3xl"
          >
            {formatted}
          </motion.span>
        </AnimatePresence>
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-1/2 h-px bg-white/10"
        />
      </div>
      <span className="mt-2 text-[11px] font-semibold uppercase tracking-widest text-white/60">
        {label}
      </span>
    </div>
  );
}

export function Countdown({ endsAt }: { endsAt: string }) {
  const target = new Date(endsAt).getTime();
  // null di render pertama agar tidak terjadi mismatch server/klien
  const [left, setLeft] = useState<Left | null>(null);

  useEffect(() => {
    setLeft(diff(target));
    const id = setInterval(() => setLeft(diff(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  if (!left) {
    return (
      <div
        className="flex h-24 items-center justify-center"
        aria-hidden="true"
      >
        <div className="flex gap-3">
          {["Hari", "Jam", "Menit", "Detik"].map((l) => (
            <div
              key={l}
              className="h-16 w-16 animate-pulse rounded-2xl border border-white/10 bg-white/5 sm:h-20 sm:w-20"
            />
          ))}
        </div>
      </div>
    );
  }

  if (left.done) {
    return (
      <div className="rounded-2xl border border-gold/30 bg-gold/10 p-4 text-center">
        <p className="text-sm font-medium text-gold-light">
          Periode promo bulan ini telah usai. Hubungi kami untuk penawaran spesial proyek Anda berikutnya.
        </p>
      </div>
    );
  }

  return (
    <div
      className="flex items-center justify-center gap-2 sm:gap-4"
      role="timer"
      aria-label="Hitung mundur promo terbatas"
    >
      <DigitBox value={left.d} label="Hari" />
      <span className="mb-6 font-display text-xl text-gold/60">:</span>
      <DigitBox value={left.h} label="Jam" />
      <span className="mb-6 font-display text-xl text-gold/60">:</span>
      <DigitBox value={left.m} label="Menit" />
      <span className="mb-6 font-display text-xl text-gold/60">:</span>
      <DigitBox value={left.s} label="Detik" />
    </div>
  );
}
