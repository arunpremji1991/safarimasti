"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface StepShellProps {
  step: number;
  total: number;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export function StepShell({ step, total, title, subtitle, children }: StepShellProps) {
  return (
    <motion.div
      key={step}
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -24 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto w-full max-w-2xl"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-600">
        {String(step).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </p>
      <h2 className="font-display text-balance mt-3 text-3xl leading-tight text-charcoal-950 sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-3 text-charcoal-800/70">{subtitle}</p>}
      <div className="mt-8">{children}</div>
    </motion.div>
  );
}
