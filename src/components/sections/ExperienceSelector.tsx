"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { experienceTypes } from "@/data/experienceTypes";
import { useLanguage } from "@/i18n/LanguageContext";

export function ExperienceSelector() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slide, setSlide] = useState(0);
  const active = experienceTypes[activeIndex];
  const { t, pick } = useLanguage();
  const reduceMotion = useReducedMotion();

  // Types with several images (e.g. Culture) slowly cycle through them.
  const images = [active.image, ...(active.extraImages ?? [])];
  const currentImage = images[slide % images.length];

  useEffect(() => {
    setSlide(0);
  }, [activeIndex]);

  useEffect(() => {
    if (images.length < 2 || reduceMotion) return;
    const id = setInterval(() => setSlide((s) => (s + 1) % images.length), 5000);
    return () => clearInterval(id);
  }, [activeIndex, images.length, reduceMotion]);

  return (
    <section className="relative overflow-hidden bg-charcoal-950 py-24 text-cream-50 md:py-32">
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={currentImage}
              alt={pick(active.label, active.labelAr)}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-charcoal-950/75" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
          {t("experienceSelector.eyebrow")}
        </p>
        <h2 className="font-display mt-4 max-w-2xl text-4xl leading-tight sm:text-5xl">
          {t("experienceSelector.title")}
        </h2>

        <div className="mt-10 flex flex-wrap gap-3">
          {experienceTypes.map((exp, i) => (
            <button
              key={exp.label}
              onClick={() => setActiveIndex(i)}
              className={`rounded-full border px-5 py-2.5 text-sm font-semibold uppercase tracking-wide transition-colors ${
                i === activeIndex
                  ? "border-amber-400 bg-amber-400 text-maroon-950"
                  : "border-cream-100/30 text-cream-100/80 hover:border-cream-100/60"
              }`}
            >
              {pick(exp.label, exp.labelAr)}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="mt-10 max-w-xl"
          >
            <p className="text-lg text-cream-100/85">{pick(active.description, active.descriptionAr)}</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href={`/build-your-journey?type=${encodeURIComponent(active.label)}`}
                className="group inline-flex items-center gap-3 rounded-full bg-amber-500 px-8 py-4 text-sm font-bold uppercase tracking-[0.12em] text-maroon-950 shadow-[0_10px_30px_-10px_rgba(238,170,76,0.9)] transition-all hover:-translate-y-0.5 hover:bg-amber-400"
              >
                {t("experienceSelector.buildThis")}
                <span aria-hidden className="inline-block transition-transform rtl:rotate-180 group-hover:translate-x-1">
                  →
                </span>
              </Link>
              {active.href !== "/build-your-journey" && (
                <Link
                  href={active.href}
                  className="inline-flex items-center rounded-full border border-cream-100/40 px-7 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-cream-50 transition-colors hover:bg-white/10"
                >
                  {t("signatureCollections.explore")}
                </Link>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
