"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems, promoBanner } from "@/lib/content";
import { waLink } from "@/lib/site";
import { Logo } from "./Logo";
import { PromoBanner } from "./PromoBanner";
import { WhatsAppIcon } from "./icons";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("beranda");
  const [showBanner, setShowBanner] = useState(promoBanner.enabled);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  // Navbar transparan di puncak, solid setelah scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Menandai menu aktif sesuai bagian yang sedang terlihat
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -50% 0px" }
    );
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Kunci scroll saat menu mobile terbuka + tutup dengan Esc + focus trap / restoration
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      // Fokuskan elemen pertama di menu mobile setelah terbuka
      setTimeout(() => firstLinkRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = "";
      triggerRef.current?.focus();
    }

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <AnimatePresence initial={false}>
        {showBanner && (
          <motion.div
            key="promo-banner"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <PromoBanner onClose={() => setShowBanner(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className={`transition-all duration-300 ${
          solid
            ? "border-b border-walnut/10 bg-cream/95 shadow-soft backdrop-blur-md"
            : "bg-gradient-to-b from-ink/70 via-ink/30 to-transparent"
        }`}
      >
        <nav
          className="container-x flex h-16 items-center justify-between sm:h-20"
          aria-label="Navigasi utama"
        >
          <Logo tone={solid ? "dark" : "light"} />

          {/* Menu desktop */}
          <ul className="hidden items-center gap-0.5 xl:flex">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={active === item.id ? "page" : undefined}
                  className={`relative block rounded-full px-3.5 py-2 text-xs font-semibold uppercase tracking-wider transition-colors duration-200 ${
                    solid
                      ? active === item.id
                        ? "text-walnut"
                        : "text-walnut/70 hover:text-walnut"
                      : active === item.id
                        ? "text-white"
                        : "text-white/75 hover:text-white"
                  }`}
                >
                  {item.label}
                  {active === item.id && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-2 -bottom-1 h-0.5 rounded-full bg-gold"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold hidden !py-2.5 sm:inline-flex"
            >
              <WhatsAppIcon size={16} />
              Konsultasi Gratis
            </a>

            {/* Tombol hamburger (min 44x44px touch target) */}
            <button
              ref={triggerRef}
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Tutup menu navigasi" : "Buka menu navigasi"}
              className={`grid h-11 w-11 place-items-center rounded-full transition-colors ${
                solid
                  ? "text-walnut hover:bg-walnut/5 active:bg-walnut/10"
                  : "text-white hover:bg-white/10 active:bg-white/20"
              }`}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>

        {/* Menu mobile */}
        <AnimatePresence>
          {open && (
            <>
              {/* Backdrop klik luar untuk menutup */}
              <motion.div
                key="menu-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setOpen(false)}
                className="fixed inset-0 top-[64px] z-40 bg-ink/50 backdrop-blur-xs xl:hidden sm:top-[80px]"
                aria-hidden="true"
              />

              <motion.div
                id="mobile-menu"
                key="menu-content"
                role="dialog"
                aria-modal="true"
                aria-label="Menu navigasi utama"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-50 max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-walnut/10 bg-cream shadow-elevated xl:hidden"
              >
                <ul className="container-x flex flex-col py-3">
                  {navItems.map((item, i) => (
                    <motion.li
                      key={item.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.03 * i }}
                    >
                      <a
                        ref={i === 0 ? firstLinkRef : undefined}
                        href={`#${item.id}`}
                        onClick={() => setOpen(false)}
                        className={`flex min-h-[48px] items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                          active === item.id
                            ? "bg-gold/15 font-semibold text-gold-dark"
                            : "text-walnut hover:bg-walnut/5"
                        }`}
                      >
                        {item.label}
                        {active === item.id && (
                          <span className="h-2 w-2 rounded-full bg-gold" />
                        )}
                      </a>
                    </motion.li>
                  ))}
                </ul>
                <div className="container-x border-t border-walnut/10 py-5">
                  <a
                    href={waLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold w-full text-center"
                  >
                    <WhatsAppIcon size={18} />
                    Konsultasi Gratis Sekarang
                  </a>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
