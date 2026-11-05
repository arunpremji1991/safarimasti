"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { site } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageContext";

interface ThankYouModalProps {
  open: boolean;
  onClose: () => void;
  /** Visitor's full name; only the first name is shown. */
  name?: string;
  /** Short eyebrow line above the heading. */
  eyebrow: string;
  /** Message under the greeting. */
  body: string;
}

const CONFETTI_COLORS = ["#feb147", "#ffd596", "#ffffff", "#ffc267", "#a32836", "#bf6c00"];

// Deterministic burst so the animation looks the same on every render.
const CONFETTI = Array.from({ length: 34 }, (_, i) => {
  const angle = (i / 34) * Math.PI * 2 + (i % 3) * 0.21;
  const distance = 120 + ((i * 53) % 150);
  return {
    x: Math.cos(angle) * distance,
    y: Math.sin(angle) * distance - 40,
    rotate: (i * 67) % 360,
    size: 6 + ((i * 7) % 7),
    color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
    round: i % 3 === 0,
    delay: 0.35 + (i % 6) * 0.025,
  };
});

export function ThankYouModal({ open, onClose, name, eyebrow, body }: ThankYouModalProps) {
  const { t } = useLanguage();
  const reduce = useReducedMotion();
  const closeRef = useRef<HTMLButtonElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!mounted) return null;

  const firstName = name?.trim().split(/\s+/)[0];

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          key="thank-you"
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div
            className="absolute inset-0 bg-charcoal-950/70 backdrop-blur-md"
            onClick={onClose}
            aria-hidden
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="thank-you-title"
            className="relative w-full max-w-md overflow-hidden rounded-[32px] bg-gradient-to-b from-maroon-800 via-maroon-900 to-maroon-950 px-7 pb-8 pt-12 text-center text-cream-50 shadow-[0_40px_120px_-20px_rgba(0,0,0,0.8)] ring-1 ring-amber-300/25 sm:px-10"
            initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.8, y: 50, rotateX: 12 }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0, rotateX: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.92, y: 24 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            style={{ transformPerspective: 900 }}
          >
            {/* Soft golden glows */}
            <div aria-hidden className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-amber-500/30 blur-3xl" />
            <div aria-hidden className="pointer-events-none absolute -bottom-28 -end-16 h-56 w-56 rounded-full bg-amber-400/15 blur-3xl" />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, #ffd596 1px, transparent 0)",
                backgroundSize: "22px 22px",
              }}
            />

            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label={t("thanks.close")}
              className="absolute end-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-cream-100/25 bg-charcoal-950/30 text-cream-50 backdrop-blur-sm transition hover:rotate-90 hover:bg-cream-50/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>

            {/* Animated tick with ripple rings + confetti burst */}
            <div className="relative mx-auto flex h-28 w-28 items-center justify-center">
              {!reduce &&
                [0, 1].map((n) => (
                  <motion.span
                    key={n}
                    aria-hidden
                    className="absolute inset-0 rounded-full border border-amber-300/60"
                    initial={{ scale: 0.7, opacity: 0.8 }}
                    animate={{ scale: 2.1, opacity: 0 }}
                    transition={{ duration: 2.2, delay: 0.5 + n * 0.9, repeat: Infinity, ease: "easeOut" }}
                  />
                ))}

              <motion.div
                className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-amber-300 via-amber-500 to-amber-600 shadow-[0_10px_40px_-5px_rgba(238,170,76,0.7)]"
                initial={reduce ? false : { scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 220, damping: 14, delay: 0.15 }}
              >
                <svg viewBox="0 0 52 52" className="h-12 w-12" fill="none" stroke="#510007" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
                  <motion.path
                    d="M14 27l8 8 16-18"
                    initial={reduce ? false : { pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                  />
                </svg>
              </motion.div>

              {!reduce && (
                <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2">
                  {CONFETTI.map((c, i) => (
                    <motion.span
                      key={i}
                      className="absolute block"
                      style={{
                        width: c.size,
                        height: c.round ? c.size : c.size * 0.45,
                        borderRadius: c.round ? "9999px" : 2,
                        backgroundColor: c.color,
                      }}
                      initial={{ x: 0, y: 0, opacity: 0, scale: 0.4, rotate: 0 }}
                      animate={{
                        x: c.x,
                        y: [0, c.y, c.y + 70],
                        opacity: [0, 1, 1, 0],
                        scale: [0.4, 1, 1, 0.8],
                        rotate: c.rotate * 2,
                      }}
                      transition={{ duration: 1.8, delay: c.delay, ease: "easeOut" }}
                    />
                  ))}
                </div>
              )}
            </div>

            <motion.p
              className="mt-7 text-[11px] font-semibold uppercase tracking-[0.3em] text-amber-300"
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
            >
              {eyebrow}
            </motion.p>

            <motion.h2
              id="thank-you-title"
              className="font-display mt-3 text-balance text-4xl leading-[1.05] sm:text-5xl"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
            >
              {firstName ? `${t("thanks.thankYou")}, ` : `${t("thanks.thankYou")}`}
              {firstName && (
                <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                  {firstName}
                </span>
              )}
              <span className="text-amber-400">!</span>
            </motion.h2>

            <motion.p
              className="mx-auto mt-4 max-w-sm text-cream-100/85"
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.78 }}
            >
              {body}
            </motion.p>

            <motion.p
              className="font-display mt-5 text-lg italic text-amber-200"
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.95 }}
            >
              {t("thanks.tagline")}
            </motion.p>

            <motion.div
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center"
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05 }}
            >
              <Link
                href="/packages"
                onClick={onClose}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-sm font-bold uppercase tracking-[0.1em] text-maroon-950 transition-colors hover:bg-amber-400"
              >
                {t("thanks.explore")}
                <span aria-hidden className="inline-block transition-transform rtl:rotate-180 group-hover:translate-x-1">
                  →
                </span>
              </Link>
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-cream-100/30 px-6 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-cream-50 transition-colors hover:bg-cream-50/10"
              >
                {t("thanks.whatsapp")}
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
