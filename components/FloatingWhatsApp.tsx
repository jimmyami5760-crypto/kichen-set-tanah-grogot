"use client";

import { motion } from "framer-motion";
import { waLink } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

/** Tombol WhatsApp melayang di pojok kanan bawah, tampil di semua bagian halaman. */
export function FloatingWhatsApp() {
  return (
    <motion.a
      href={waLink("Halo Kichenset Tanah Grogot, saya ingin konsultasi kitchen set / furniture custom.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Konsultasi langsung via WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex items-center"
      initial={{ opacity: 0, scale: 0.4 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="pointer-events-none mr-3 hidden items-center gap-2 rounded-full border border-walnut/10 bg-white px-4 py-2 text-xs font-bold text-walnut opacity-0 shadow-elevated transition-all duration-300 group-hover:opacity-100 sm:flex">
        <span className="h-2 w-2 rounded-full bg-[#25D366] animate-pulse" />
        Chat Konsultasi Gratis
      </span>
      <span className="relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-elevated">
        <motion.span
          aria-hidden
          className="absolute inset-0 rounded-full bg-[#25D366]"
          animate={{ scale: [1, 1.55], opacity: [0.45, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeOut" }}
        />
        <WhatsAppIcon size={28} className="relative z-10" />
      </span>
    </motion.a>
  );
}
