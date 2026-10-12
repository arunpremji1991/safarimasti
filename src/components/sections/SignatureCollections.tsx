"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  MotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { getSignatureCollections } from "@/data/collections";
import { Collection } from "@/data/types";
import { useLanguage } from "@/i18n/LanguageContext";

const collections = getSignatureCollections();
const COUNT = collections.length;

const toArabicDigits = (n: string) => n.replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[Number(d)]);

/**
 * One card of the stacking deck. Each card pins to the top of the viewport while the next one
 * slides up over it; the card underneath shrinks and darkens slightly, and the incoming image
 * settles from a gentle zoom.
 */
function StackCard({
  collection,
  i,
  progress,
}: {
  collection: Collection;
  i: number;
  progress: MotionValue<number>;
}) {
  const { t, pick, locale } = useLanguage();
  const reduce = useReducedMotion();
  const wrapRef = useRef<HTMLDivElement>(null);

  // 0 → 1 while this card travels from the bottom of the viewport up to its pinned position.
  const { scrollYProgress: arrive } = useScroll({
    target: wrapRef,
    offset: ["start end", "start start"],
  });
  const imageScale = useTransform(arrive, [0, 1], [1.28, 1]);

  // While later cards cover this one: shrink + darken. The last card never recedes.
  const isLast = i === COUNT - 1;
  const start = isLast ? 0 : i / (COUNT - 1);
  const targetScale = isLast ? 1 : 1 - (COUNT - 1 - i) * 0.035;
  const cardScale = useTransform(progress, [start, 1], [1, targetScale]);
  const dim = useTransform(progress, [start, Math.min(1, start + 1 / (COUNT - 1))], [0, isLast ? 0 : 0.55]);

  const num = String(collection.index).padStart(2, "0");
  const total = String(COUNT).padStart(2, "0");
  const title = pick(collection.title, collection.titleAr);

  return (
    <div ref={wrapRef} className="sticky top-0 flex h-[100svh] items-center justify-center px-3 md:px-8">
      <motion.article
        style={{
          scale: reduce ? 1 : cardScale,
          top: `${i * 16}px`,
          transformOrigin: "top center",
        }}
        className="relative h-[80svh] w-full max-w-7xl overflow-hidden rounded-[28px] bg-charcoal-900 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] ring-1 ring-white/10 md:h-[82svh] md:rounded-[36px]"
      >
        <motion.div
          className="absolute inset-0"
          style={reduce ? undefined : { scale: imageScale }}
        >
          <Image
            src={collection.heroImage}
            alt={title}
            fill
            sizes="(min-width: 1280px) 1280px, 100vw"
            className="object-cover"
            style={collection.heroPosition ? { objectPosition: collection.heroPosition } : undefined}
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/45 to-charcoal-950/5" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/50 via-transparent to-transparent rtl:bg-gradient-to-l" />

        {/* Top row: giant index + label */}
        <div className="absolute inset-x-0 top-0 flex items-start justify-between p-6 md:p-10">
          <span className="font-display text-6xl leading-none text-cream-50/90 md:text-8xl">
            {locale === "ar" ? toArabicDigits(num) : num}
            <span className="ms-2 align-top text-base text-amber-400 md:text-xl">
              / {locale === "ar" ? toArabicDigits(total) : total}
            </span>
          </span>
          <span className="rounded-full border border-cream-100/30 bg-charcoal-950/30 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-cream-50 backdrop-blur-sm">
            {t("collectionDetail.signatureCollection")}
          </span>
        </div>

        {/* Bottom: content */}
        <div className="absolute inset-x-0 bottom-0 p-6 md:p-12">
          <h3 className="font-display max-w-3xl text-balance text-3xl leading-[1.05] text-cream-50 sm:text-4xl md:text-6xl">
            {title}
          </h3>
          <p className="mt-4 line-clamp-3 max-w-2xl text-cream-100/85 md:line-clamp-none md:text-lg">
            {pick(collection.description, collection.descriptionAr)}
          </p>

          <ul className="mt-5 hidden flex-wrap gap-2 sm:flex">
            {collection.destinations.slice(0, 5).map((d) => (
              <li
                key={d.name}
                className="rounded-full border border-cream-100/25 bg-charcoal-950/25 px-4 py-1.5 text-sm text-cream-50 backdrop-blur-sm"
              >
                {pick(d.name, d.nameAr)}
              </li>
            ))}
          </ul>

          <Link
            href={`/collections/${collection.slug}`}
            className="group mt-6 inline-flex items-center gap-3 rounded-full bg-amber-500 px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-maroon-950 transition-colors hover:bg-amber-400"
          >
            {t("signatureCollections.explore")}
            <span aria-hidden className="inline-block transition-transform rtl:rotate-180 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        {/* Darkens as the next card covers this one */}
        {!reduce && <motion.div aria-hidden className="pointer-events-none absolute inset-0 bg-black" style={{ opacity: dim }} />}
      </motion.article>
    </div>
  );
}

export function SignatureCollections() {
  const deckRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const { scrollYProgress } = useScroll({
    target: deckRef,
    offset: ["start start", "end end"],
  });

  return (
    <section className="bg-charcoal-950 text-cream-50">
      <div className="px-5 pb-12 pt-24 md:px-8">
        <h2 className="font-display max-w-2xl text-4xl leading-tight sm:text-5xl">
          {t("signatureCollections.title")}
        </h2>
      </div>

      <div ref={deckRef} className="relative pb-24">
        {collections.map((collection, i) => (
          <StackCard key={collection.slug} collection={collection} i={i} progress={scrollYProgress} />
        ))}
      </div>
    </section>
  );
}
