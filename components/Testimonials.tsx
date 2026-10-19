import { CheckCircle2, Quote, Star } from "lucide-react";
import { testimonials } from "@/lib/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Testimonials() {
  return (
    <section id="testimoni" className="section-pad bg-cream-dark/40">
      <div className="container-x">
        <SectionHeading
          eyebrow="Testimoni Pelanggan"
          title="Pengalaman Nyata Bersama Kichenset Tanah Grogot"
          description="Kepuasan dan kenyamanan dapur rumah Anda adalah komitmen utama di setiap potongan kayu dan sekrup yang kami pasang."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <figure className="group relative flex h-full flex-col rounded-3xl border border-walnut/10 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated sm:p-8">
                <div className="flex items-center justify-between">
                  <div className="flex gap-1" aria-label="Rating 5 dari 5 bintang">
                    {Array.from({ length: 5 }).map((_, n) => (
                      <Star key={n} size={16} className="fill-gold text-gold" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-forest/10 px-2.5 py-0.5 text-[11px] font-semibold text-forest">
                    <CheckCircle2 size={12} />
                    Terverifikasi
                  </span>
                </div>

                <blockquote className="mt-5 flex-1 font-display text-base italic leading-relaxed text-walnut/85">
                  &ldquo;{t.text}&rdquo;
                </blockquote>

                <figcaption className="mt-6 flex items-center gap-3.5 border-t border-walnut/10 pt-5">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-walnut font-display text-base font-bold text-gold shadow-subtle transition-colors group-hover:bg-gold group-hover:text-ink">
                    {t.name.charAt(0)}
                  </span>
                  <div>
                    <span className="block text-sm font-bold text-walnut">{t.name}</span>
                    <span className="block text-xs font-medium text-walnut/60">{t.place}, Kab. Paser</span>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
