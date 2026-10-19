import { Facebook, Instagram, Mail, MapPin } from "lucide-react";
import { navItems } from "@/lib/content";
import { fullAddress, site, waLink } from "@/lib/site";
import { Logo } from "./Logo";
import { WhatsAppIcon } from "./icons";

export function Footer() {
  const socials = [
    { label: "WhatsApp", href: waLink(), icon: WhatsAppIcon },
    { label: "Instagram", href: site.instagram.url, icon: Instagram },
    { label: "Facebook", href: site.facebook.url, icon: Facebook },
    { label: "Email", href: `mailto:${site.email}`, icon: Mail },
  ];

  return (
    <footer className="border-t border-white/10 bg-ink text-white/70">
      <div className="container-x grid gap-10 py-16 md:grid-cols-3">
        <div>
          <Logo tone="light" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/75">
            {site.tagline}. Melayani seluruh Kabupaten Paser dengan komitmen kualitas dan presisi.
          </p>
          <div className="mt-6 flex gap-2.5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={`Buka ${s.label} kami`}
                className="grid h-11 w-11 place-items-center rounded-2xl border border-white/15 text-white/80 transition-all hover:border-gold hover:bg-gold hover:text-ink hover:scale-105 active:scale-95"
              >
                <s.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Navigasi footer">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold-light">
            Menu Bagian
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5 text-sm">
            {navItems.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  className="inline-block py-1 text-cream/70 transition-colors hover:text-gold-light"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-gold-light">
            Hubungi Workshop
          </p>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-2.5">
              <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
              <span className="leading-relaxed text-cream/75">{fullAddress()}</span>
            </li>
            <li>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 py-1 text-cream/80 hover:text-gold-light"
              >
                <WhatsAppIcon size={16} className="text-[#25D366]" />
                WhatsApp: {site.whatsapp.display}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 py-1 text-cream/80 hover:text-gold-light"
              >
                <Mail size={16} className="text-gold" />
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/50 sm:flex-row">
          <p>© 2026 {site.name}. Seluruh hak cipta dilindungi.</p>
          <p className="text-white/40">Desain &amp; Pengerjaan Interior Profesional Tanah Grogot, Kab. Paser</p>
        </div>
      </div>
    </footer>
  );
}
