"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden bg-charcoal-950">
      <Image
        src="/images/hero/home-hero.webp"
        alt="Snow-capped Himalayan peaks reflected in a still valley lake in Ladakh"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/40 to-charcoal-950/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-maroon-950/50 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-40 md:px-8 md:pb-24">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-300"
        >
          Cochin, Kerala · Pan-India
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display mt-4 max-w-3xl text-balance text-5xl leading-[1.02] text-cream-50 sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Crafting Unforgettable Indian Journeys
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-6 max-w-lg text-lg text-cream-100/85"
        >
          Curated journeys across India, designed around your travel style, comfort and budget.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button href="/experiences" variant="primary" arrow>
            Explore India
          </Button>
          <Button href="/build-your-journey" variant="outline" className="text-cream-50" arrow>
            Build Your Journey
          </Button>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 right-8 z-10 hidden flex-col items-center gap-2 text-xs font-semibold uppercase tracking-widest text-cream-100/80 md:flex"
      >
        Explore
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          ↓
        </motion.span>
      </motion.a>
    </section>
  );
}
