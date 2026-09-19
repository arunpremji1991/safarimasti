"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { getSignatureCollections } from "@/data/collections";

const collections = getSignatureCollections();
const COUNT = collections.length;

export function SignatureCollections() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${((COUNT - 1) / COUNT) * 100}%`]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(COUNT - 1, Math.max(0, Math.round(v * (COUNT - 1))));
    setActive(idx);
  });

  return (
    <section className="bg-charcoal-950 text-cream-50">
      <div className="px-5 pt-24 md:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
          Bucket-List India
        </p>
        <h2 className="font-display mt-4 max-w-2xl text-4xl leading-tight sm:text-5xl">
          Safari Masti&apos;s Signature Collections
        </h2>
      </div>

      {/* Desktop: scroll-driven horizontal storytelling */}
      <div ref={sectionRef} className="relative hidden md:block" style={{ height: `${COUNT * 100}vh` }}>
        <div className="sticky top-0 h-screen overflow-hidden">
          <motion.div className="flex h-full" style={{ width: `${COUNT * 100}%`, x }}>
            {collections.map((collection) => (
              <div key={collection.slug} className="relative h-full" style={{ width: `${100 / COUNT}%` }}>
                <Image
                  src={collection.heroImage}
                  alt={collection.title}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/50 to-charcoal-950/10" />

                <div className="relative z-10 flex h-full max-w-3xl flex-col justify-end px-5 pb-24 pt-32 md:px-16">
                  <span className="font-display text-lg text-amber-400">
                    {String(collection.index).padStart(2, "0")} / {String(COUNT).padStart(2, "0")}
                  </span>
                  <h3 className="font-display mt-3 text-4xl leading-tight lg:text-6xl">
                    {collection.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-cream-100/80">{collection.description}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {collection.destinations.slice(0, 5).map((d) => (
                      <li
                        key={d.name}
                        className="rounded-full border border-cream-100/25 px-4 py-1.5 text-sm"
                      >
                        {d.name}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/collections/${collection.slug}`}
                    className="group mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold uppercase tracking-widest text-amber-400"
                  >
                    Explore Collection
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>

          <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
            {collections.map((c, i) => (
              <span
                key={c.slug}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === active ? "w-8 bg-amber-400" : "w-1.5 bg-cream-100/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile: swipeable cards */}
      <div className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 py-10 md:hidden">
        {collections.map((collection) => (
          <div
            key={collection.slug}
            className="relative h-[70vh] w-[85vw] shrink-0 snap-center overflow-hidden rounded-2xl"
          >
            <Image
              src={collection.cardImage}
              alt={collection.title}
              fill
              sizes="85vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/50 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <span className="font-display text-sm text-amber-400">
                {String(collection.index).padStart(2, "0")} / {String(COUNT).padStart(2, "0")}
              </span>
              <h3 className="font-display mt-2 text-2xl leading-tight">{collection.title}</h3>
              <p className="mt-2 line-clamp-2 text-sm text-cream-100/80">{collection.description}</p>
              <Link
                href={`/collections/${collection.slug}`}
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-amber-400"
              >
                Explore Collection →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
