"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Calculator, Check, Info } from "lucide-react";
import { pricing } from "@/lib/content";
import { waLink } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

const rupiah = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  maximumFractionDigits: 0,
});

const roundTo = (n: number, step = 100_000) => Math.round(n / step) * step;

export function PriceCalculator() {
  const [length, setLength] = useState(3.5);
  const [materialId, setMaterialId] = useState(pricing.materials[0].id);
  const [layoutId, setLayoutId] = useState(pricing.layouts[0].id);
  const [granite, setGranite] = useState(false);

  const material = pricing.materials.find((m) => m.id === materialId)!;
  const layout = pricing.layouts.find((l) => l.id === layoutId)!;

  const { min, max } = useMemo(() => {
    const extra = granite ? pricing.granitePerMeter * length : 0;
    return {
      min: roundTo(material.min * length * layout.factor + extra),
      max: roundTo(material.max * length * layout.factor + extra),
    };
  }, [length, material, layout, granite]);

  const range = `${rupiah.format(min)} – ${rupiah.format(max)}`;

  const message = [
    "Halo Kichenset Tanah Grogot, saya telah mencoba kalkulator estimasi di website:",
    `• Panjang dapur: ${length} meter`,
    `• Pilihan bahan: ${material.label}`,
    `• Model dapur: ${layout.label}`,
    `• Meja granit: ${granite ? "Ya (+ Granit)" : "Tidak (HPL)"}`,
    `• Kisaran estimasi: ${range}`,
    "",
    "Bisa dijadwalkan survei ke lokasi saya untuk ukuran pasti dan penawaran resminya?",
  ].join("\n");

  return (
    <div className="rounded-3xl border border-walnut/10 bg-cream p-6 text-walnut shadow-elevated sm:p-8 lg:p-10">
      <div className="flex items-center gap-3.5">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-walnut text-gold shadow-subtle">
          <Calculator size={24} />
        </span>
        <div>
          <h3 className="font-display text-xl font-semibold text-walnut sm:text-2xl">
            Kalkulator Estimasi Biaya Kitchen Set
          </h3>
          <p className="text-sm text-walnut/70">
            Simulasi biaya transparan berdasarkan ukuran dan spesifikasi material.
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:gap-10">
        {/* Controls Column */}
        <div className="space-y-6 lg:col-span-7">
          {/* Panjang Kitchen Set */}
          <div>
            <div className="flex items-baseline justify-between">
              <label htmlFor="panjang-dapur" className="text-sm font-semibold text-walnut">
                Panjang Dapur (Meter Lari)
              </label>
              <span className="rounded-full bg-gold/15 px-3 py-1 font-display text-base font-bold text-gold-dark">
                {length} Meter
              </span>
            </div>
            <input
              id="panjang-dapur"
              type="range"
              min={pricing.minLength}
              max={pricing.maxLength}
              step={0.5}
              value={length}
              aria-valuemin={pricing.minLength}
              aria-valuemax={pricing.maxLength}
              aria-valuenow={length}
              aria-label="Panjang dapur dalam meter"
              onChange={(e) => setLength(Number(e.target.value))}
              className="mt-3.5 h-2 w-full cursor-pointer accent-gold"
            />
            <div className="mt-1 flex justify-between text-xs text-walnut/50">
              <span>{pricing.minLength} m (Minimal)</span>
              <span>{pricing.maxLength} m (Maksimal)</span>
            </div>
          </div>

          {/* Pilihan Bahan Material */}
          <div>
            <label htmlFor="pilihan-bahan" className="text-sm font-semibold text-walnut">
              Pilihan Bahan Dasar &amp; Finishing
            </label>
            <select
              id="pilihan-bahan"
              value={materialId}
              onChange={(e) => setMaterialId(e.target.value)}
              className="input mt-2 bg-white"
            >
              {pricing.materials.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.label} ({rupiah.format(m.min)} – {rupiah.format(m.max)}/m)
                </option>
              ))}
            </select>
          </div>

          {/* Model Dapur */}
          <div>
            <p className="text-sm font-semibold text-walnut">Model Bentuk Dapur</p>
            <div className="mt-2.5 grid grid-cols-3 gap-2 sm:gap-3">
              {pricing.layouts.map((l) => (
                <button
                  key={l.id}
                  type="button"
                  onClick={() => setLayoutId(l.id)}
                  aria-pressed={layoutId === l.id}
                  className={`min-h-[46px] rounded-xl border px-3 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                    layoutId === l.id
                      ? "border-gold bg-gold text-ink shadow-subtle scale-[1.02]"
                      : "border-walnut/15 bg-white text-walnut hover:border-gold/60"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          {/* Option Meja Granit */}
          <div className="rounded-2xl border border-walnut/10 bg-white/70 p-4 transition-colors hover:border-gold/50">
            <label className="flex cursor-pointer items-start gap-3.5">
              <input
                type="checkbox"
                checked={granite}
                onChange={(e) => setGranite(e.target.checked)}
                className="mt-0.5 h-5 w-5 rounded accent-gold"
              />
              <div className="text-sm">
                <span className="font-semibold text-walnut">
                  Tambah Top Table Granit Alam Solid
                </span>
                <p className="text-xs text-walnut/60">
                  Permukaan tahan gores, tahan api kompor, dan mewah (+{rupiah.format(pricing.granitePerMeter)}/meter).
                </p>
              </div>
            </label>
          </div>
        </div>

        {/* Estimation Output Card */}
        <div className="flex flex-col justify-between rounded-3xl bg-walnut p-7 text-cream shadow-elevated lg:col-span-5 sm:p-8">
          <div>
            <div className="flex items-center justify-between">
              <span className="badge-gold bg-gold/20 text-gold-light">
                Perkiraan Anggaran
              </span>
              <span className="text-[11px] text-cream/50">Simulasi Realistis</span>
            </div>

            <div className="mt-4">
              <AnimatePresence mode="popLayout">
                <motion.p
                  key={range}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="font-display text-2xl font-bold leading-tight text-gold sm:text-3xl"
                  aria-live="polite"
                >
                  {range}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Breakdown summary */}
            <ul className="mt-5 space-y-2 border-t border-white/10 pt-4 text-xs text-cream/80">
              <li className="flex items-center justify-between">
                <span>Panjang:</span>
                <span className="font-semibold text-white">{length} Meter</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Bahan:</span>
                <span className="font-semibold text-white">{material.label}</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Layout:</span>
                <span className="font-semibold text-white">{layout.label}</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Meja Granit:</span>
                <span className="font-semibold text-white">{granite ? "Termasuk" : "HPL Standar"}</span>
              </li>
            </ul>

            <div className="mt-4 flex items-start gap-2 rounded-xl bg-white/5 p-3 text-[11px] leading-relaxed text-cream/65">
              <Info size={14} className="mt-0.5 shrink-0 text-gold" />
              <span>
                Sudah termasuk rak piring, engsel slow-close, biaya pasang, dan garansi 12 bulan. Harga final mengikat setelah survei ukuran lokasi.
              </span>
            </div>
          </div>

          <a
            href={waLink(message)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold mt-6 w-full text-center"
          >
            <WhatsAppIcon size={18} />
            Kirim Hasil Estimasi ke WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
