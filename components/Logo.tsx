import { site } from "@/lib/site";

export function Logo({ tone = "dark" }: { tone?: "light" | "dark" }) {
  const light = tone === "light";
  return (
    <a
      href="#beranda"
      className="flex items-center gap-3"
      aria-label={`${site.name} — ke beranda`}
    >
      {/* TODO: ganti kotak "K" ini dengan logo asli (next/image) jika sudah ada */}
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-gold font-display text-xl font-bold text-ink">
        K
      </span>
      <span className="leading-tight">
        <span
          className={`block font-display text-lg font-semibold ${
            light ? "text-white" : "text-walnut"
          }`}
        >
          {site.brand.primary}
        </span>
        <span
          className={`block text-[11px] font-medium uppercase tracking-[0.2em] ${
            light ? "text-white/70" : "text-oak"
          }`}
        >
          {site.brand.secondary}
        </span>
      </span>
    </a>
  );
}
