# Prompt untuk Antigravity

Cara pakai: buka folder proyek `kichenset_tanah_grogot` di Antigravity, buka panel agent, lalu tempel seluruh isi di antara garis `----` di bawah ini sebagai pesan pertama.

----

/ui-ux-pro-max /framer-motion

You are a senior product designer and front-end engineer. Work inside the existing Next.js project in this workspace (Next.js App Router, TypeScript, Tailwind CSS v3, Framer Motion, lucide-react). Do not start a new project. Read `README.md`, `lib/site.ts`, `lib/content.ts`, `tailwind.config.ts`, and everything in `components/` first, then upgrade the design and motion to a polished, professional level.

## Business context
- Company: **kichenset_tanah_grogot** (display name "Kichenset Tanah Grogot")
- What they do: custom kitchen sets and furniture (wardrobes, TV backdrops, shelves and partitions, small business cabinets)
- Location: Tanah Grogot, Kabupaten Paser, Kalimantan Timur, Indonesia
- Audience: homeowners, new-house buyers, small business owners in Paser and nearby areas, mostly on mobile phones
- Main goal: visitors trust the business and start a WhatsApp conversation
- All website copy stays in **Indonesian**

## Use /ui-ux-pro-max for the design system and UX
1. Define one consistent design system: color tokens, type scale, spacing scale, radius, shadow, and button/input/card states. Keep it in `tailwind.config.ts` and `app/globals.css`, not scattered inline values.
2. Direction: warm, premium, trustworthy craftsmanship. Current palette is dark walnut/ink with gold accent on cream. Refine it, do not make it generic or template-looking. Choose a deliberate display + body font pairing (current: Playfair Display + Plus Jakarta Sans; replace only if you have a clearly better reason).
3. Navbar like a professional company site: sticky, transparent at top and solid after scroll, active-section highlight, clear primary CTA "Konsultasi Gratis" (WhatsApp), hamburger menu on mobile with a polished open/close.
4. Page structure (keep section ids): Beranda, Tentang Kami, Layanan, Portofolio, Proses Kerja, Promo, Testimoni, Kontak, Footer.
5. Contact area must include all of: **WhatsApp, Email, Instagram, Facebook, Google Maps embed with a "Petunjuk Arah" button**, address, and opening hours. Add a floating WhatsApp button visible on every section.
6. Promotion features to keep and improve: promo banner above the navbar with dismiss, promo countdown, promo cards, package cards, **price estimate calculator** that sends the result to WhatsApp, referral card, and a before/after comparison slider section for kitchen transformations (add it between Portofolio and Proses Kerja).
7. Mobile first. Test at 360px, 390px, 768px, 1024px, 1440px. No horizontal scroll, touch targets at least 44px, readable text sizes, clear tap feedback.
8. Accessibility: WCAG AA contrast, visible focus states, semantic landmarks and headings, labels on every form field, alt text, `aria-*` on menus/dialogs/toggles, full keyboard navigation (Esc closes menu and lightbox, focus is trapped inside the lightbox and returned on close).
9. Conversion UX: every section ends in a clear next step; WhatsApp links always carry a pre-filled message relevant to the clicked item.
10. Performance and SEO: use `next/image` for all photos with correct `sizes`, lazy-load below the fold, keep JSON-LD, metadata, sitemap, robots. Aim for Lighthouse 90+ on Performance, Accessibility, Best Practices, SEO on mobile.

## Use /framer-motion for all animation
1. Keep `MotionConfig reducedMotion="user"` at the root. Every animation must degrade gracefully for reduced motion.
2. Shared motion language in `lib/motion.ts`: one easing curve, a small set of durations, reusable variants (`fadeUp`, `stagger`, `scaleIn`, `slideIn`). Use them everywhere instead of ad-hoc values.
3. Animate only `transform` and `opacity` (plus `clip-path` where useful). No layout-thrashing animations. Never animate on every scroll event without `useScroll`/`useTransform`.
4. Required interactions:
   - Hero: staged entrance (headline words or lines, subtext, CTAs, stats counting up), subtle parallax on the hero visual using `useScroll` + `useTransform`.
   - Navbar: animated active indicator with `layoutId`, smooth mobile menu with `AnimatePresence` and staggered links, height-collapse for the promo banner.
   - Sections: scroll-reveal with `whileInView` and `viewport={{ once: true }}`, staggered children for card grids.
   - Services cards: hover lift and icon transition, press feedback with `whileTap`.
   - Portfolio: filter tabs with shared `layoutId` pill, grid re-flow with `layout` and `AnimatePresence mode="popLayout"`, lightbox open/close as a shared-element-style transition with spring physics, swipe or arrow keys to move between items.
   - Process: a progress line that draws as the section scrolls into view (`pathLength` or `scaleX` bound to scroll).
   - Before/after slider: draggable handle using `drag="x"` with constraints and motion values.
   - Promo: countdown digits that flip or slide when they change, floating decorative elements with gentle infinite motion.
   - Floating WhatsApp button: delayed entrance with spring, soft pulse ring, hover and tap feedback.
5. Keep animation purposeful and restrained: professional, not playful. Durations mostly 0.3 to 0.7 seconds, springs with no visible overshoot except on small UI controls.
6. Avoid hydration mismatches: anything depending on `Date.now()` or `window` renders after mount.

## Constraints
- Do not hard-code business data inside components. Phone, email, social links, address, map, prices, promo dates, and copy stay in `lib/site.ts` and `lib/content.ts` (placeholders marked `TODO` are intentional; do not invent real phone numbers, reviews, or prices).
- Do not add heavy dependencies. Existing stack plus at most one small utility library, and justify it.
- Keep TypeScript strict and the build clean (`npm run typecheck` and `npm run build` must pass).
- Do not remove existing sections or features; improve them.
- Photos are not available yet. Keep elegant placeholders and make swapping in real photos a one-line change.

## Working method
1. First produce a short plan: the design system decisions, the motion language, and the list of files you will change.
2. Implement section by section, running the dev server and checking each section at mobile and desktop widths before moving on.
3. Finish with an audit pass: accessibility, reduced motion, keyboard navigation, mobile layout, Lighthouse.

## Deliverables
- Updated code in this workspace
- A short `DESIGN_NOTES.md` listing design tokens, the motion language, and where to change colors, fonts, and animation speed
- A final summary of what changed and anything still needing real data from the business owner

----

## Cadangan tambahan (opsional)

Setelah hasil pertama jadi, Anda bisa lanjutkan dengan prompt susulan seperti ini:

- `/ui-ux-pro-max Review the mobile layout at 360px and fix any spacing, wrapping, or tap-target issues.`
- `/framer-motion Reduce overall motion intensity by 30% and make sure nothing animates before the page is interactive.`
- `/ui-ux-pro-max Add a blog section with three tip cards (merawat kitchen set, memilih bahan tahan lembap, ukuran dapur ideal) in the same visual style.`
