"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/** Menghormati pengaturan "reduce motion" di perangkat pengunjung. */
export function Providers({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
