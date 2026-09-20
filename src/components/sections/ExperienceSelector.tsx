"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { experienceTypes } from "@/data/experienceTypes";
import { useLanguage } from "@/i18n/LanguageContext";

export function ExperienceSelector() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = experienceTypes[activeIndex];
  const { t, pick } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-charcoal-950 py-24 text-cream-50 md:py-32">
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.image}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={active.image}
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
            <Link
              href={active.href}
              className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-amber-400"
            >
              {t("experienceSelector.buildThis")}
              <span className="inline-block transition-transform rtl:rotate-180 group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
