import type { Variants } from "framer-motion";

/** Kurva easing profesional (ease-out expo-smooth). */
export const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];
export const easeSmooth: [number, number, number, number] = [0.16, 1, 0.3, 1];

/** Durasi standar untuk konsistensi */
export const durations = {
  fast: 0.25,
  normal: 0.45,
  slow: 0.7,
  draw: 1.1,
} as const;

/** Spring configs */
export const springPhysics = {
  snappy: { type: "spring", stiffness: 380, damping: 28 },
  smooth: { type: "spring", stiffness: 260, damping: 26 },
  gentle: { type: "spring", stiffness: 180, damping: 24 },
} as const;

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: durations.normal, ease: easeOut },
  },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: durations.slow, ease: easeOut },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: durations.normal, ease: easeOut },
  },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: durations.normal, ease: easeOut },
  },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 24 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: durations.normal, ease: easeOut },
  },
};

export const stagger = (staggerChildren = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren, delayChildren },
  },
});

