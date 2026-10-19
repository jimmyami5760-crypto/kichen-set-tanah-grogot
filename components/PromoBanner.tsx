"use client";

import { X } from "lucide-react";
import { promoBanner } from "@/lib/content";
import { waLink } from "@/lib/site";

export function PromoBanner({ onClose }: { onClose: () => void }) {
  return (
    <div className="bg-gold text-ink">
      <div className="container-x flex items-center justify-between gap-3 py-2 text-xs sm:text-sm">
        <p className="flex-1 text-center font-medium">
          {promoBanner.text}{" "}
          <a
            href={waLink(promoBanner.waMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold underline underline-offset-2"
          >
            {promoBanner.cta}
          </a>
        </p>
        <button
          type="button"
          onClick={onClose}
          aria-label="Tutup banner promo"
          className="grid h-8 w-8 min-h-[32px] min-w-[32px] shrink-0 place-items-center rounded-full transition-colors hover:bg-ink/15 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
