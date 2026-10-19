"use client";

import { useState, type ComponentType, type FormEvent } from "react";
import { Clock, Facebook, Instagram, Mail, MapPin, Navigation, Send } from "lucide-react";
import { services } from "@/lib/content";
import { fullAddress, site, waLink } from "@/lib/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { WhatsAppIcon } from "./icons";

type IconType = ComponentType<{ className?: string; size?: number }>;

const channels: {
  label: string;
  value: string;
  href: string;
  icon: IconType;
  tint: string;
}[] = [
  {
    label: "WhatsApp",
    value: site.whatsapp.display,
    href: waLink(),
    icon: WhatsAppIcon,
    tint: "bg-[#25D366]/15 text-[#128C4B]",
  },
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: Mail,
    tint: "bg-walnut/10 text-walnut",
  },
  {
    label: "Instagram",
    value: `@${site.instagram.handle}`,
    href: site.instagram.url,
    icon: Instagram,
    tint: "bg-[#E1306C]/10 text-[#C13584]",
  },
  {
    label: "Facebook",
    value: site.facebook.label,
    href: site.facebook.url,
    icon: Facebook,
    tint: "bg-[#1877F2]/10 text-[#1877F2]",
  },
];

export function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState(services[0].title);
  const [message, setMessage] = useState("");

  const buildText = () =>
    [
      `Halo Kichenset Tanah Grogot, saya ${name}.`,
      `Saya ingin berkonsultasi mengenai: ${type}.`,
      phone ? `Nomor WhatsApp / HP saya: ${phone}` : "",
      message ? `Detail kebutuhan / ukuran: ${message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    window.open(waLink(buildText()), "_blank", "noopener,noreferrer");
  };

  const mailtoHref = `mailto:${site.email}?subject=${encodeURIComponent(
    `Konsultasi ${type} - ${name || "Pelanggan"}`
  )}&body=${encodeURIComponent(buildText())}`;

  return (
    <section id="kontak" className="section-pad bg-cream-dark/50">
      <div className="container-x">
        <SectionHeading
          eyebrow="Kontak &amp; Lokasi"
          title="Mari Bicarakan Rencana Dapur Anda"
          description="Konsultasi dan perkiraan anggaran sepenuhnya gratis. Hubungi kami lewat saluran yang paling nyaman untuk Anda."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:gap-10">
          {/* Kolom kiri: 4 kanal kontak + form */}
          <div className="space-y-6">
            <div className="grid gap-3.5 sm:grid-cols-2">
              {channels.map((c, i) => (
                <Reveal key={c.label} delay={i * 0.05}>
                  <a
                    href={c.href}
                    target={c.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="flex min-h-[72px] items-center gap-3.5 rounded-3xl border border-walnut/10 bg-white p-4 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-elevated"
                  >
                    <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl ${c.tint} shadow-subtle`}>
                      <c.icon size={22} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-bold uppercase tracking-wider text-walnut/50">
                        {c.label}
                      </span>
                      <span className="block truncate text-sm font-semibold text-walnut">
                        {c.value}
                      </span>
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1}>
              <form
                onSubmit={onSubmit}
                className="rounded-3xl border border-walnut/10 bg-white p-6 shadow-card sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl font-semibold text-walnut">
                    Kirim Pesan Konsultasi
                  </h3>
                  <span className="badge-gold">Respon Cepat</span>
                </div>
                
                <p className="mt-1 text-xs text-walnut/60">
                  Formulir ini akan otomatis menyiapkan pesan ke WhatsApp atau Email Anda.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-nama" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-walnut/70">
                      Nama Lengkap <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-nama"
                      required
                      autoComplete="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Contoh: Ibu Rahma"
                      className="input"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-hp" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-walnut/70">
                      No. WhatsApp / HP
                    </label>
                    <input
                      id="contact-hp"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="0812-xxxx-xxxx"
                      className="input"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label htmlFor="contact-jenis" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-walnut/70">
                    Kategori Furniture yang Diinginkan
                  </label>
                  <select
                    id="contact-jenis"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="input bg-white"
                  >
                    {services.map((s) => (
                      <option key={s.title} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Paket Dapur Lengkap">Paket Dapur Lengkap</option>
                    <option value="Renovasi Dapur Lama">Renovasi Dapur Lama</option>
                  </select>
                </div>

                <div className="mt-4">
                  <label htmlFor="contact-pesan" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-walnut/70">
                    Keterangan Tambahan / Ukuran Perkiraan
                  </label>
                  <textarea
                    id="contact-pesan"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Ceritakan gambaran ruangan (misal: panjang dapur 3m, model L, warna kayu hangat)."
                    className="input resize-none"
                  />
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <button type="submit" className="btn-gold flex-1">
                    <WhatsAppIcon size={18} />
                    Kirim via WhatsApp
                  </button>
                  <a href={mailtoHref} className="btn-dark">
                    <Mail size={16} />
                    Kirim via Email
                  </a>
                </div>

                <p className="mt-3.5 text-center text-xs text-walnut/50">
                  Data Anda aman dan hanya digunakan untuk keperluan konsultasi proyek.
                </p>
              </form>
            </Reveal>
          </div>

          {/* Kolom kanan: peta + alamat + jam */}
          <Reveal delay={0.1} className="flex flex-col gap-5">
            <div className="overflow-hidden rounded-3xl border border-walnut/10 bg-white shadow-card">
              <iframe
                src={site.map.embedUrl}
                title={`Peta Lokasi ${site.name}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="h-[300px] w-full border-0 sm:h-[350px]"
              />
            </div>

            <div className="rounded-3xl border border-walnut/10 bg-white p-7 shadow-card sm:p-8">
              <div className="flex gap-3.5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gold/15 text-gold-dark">
                  <MapPin size={20} />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-walnut/50">Alamat Workshop</p>
                  <p className="mt-1 text-sm font-medium text-walnut leading-relaxed">{fullAddress()}</p>
                </div>
              </div>

              <div className="mt-6 flex gap-3.5 border-t border-walnut/10 pt-5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gold/15 text-gold-dark">
                  <Clock size={20} />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-walnut/50">Jam Operasional</p>
                  <ul className="mt-1 space-y-1 text-sm font-medium text-walnut/80">
                    {site.hours.map((h) => (
                      <li key={h.days}>
                        <span className="font-semibold text-walnut">{h.days}:</span> {h.time}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <a
                href={site.map.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-dark mt-6 w-full text-center"
              >
                <Navigation size={16} />
                Buka Petunjuk Arah di Google Maps
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
