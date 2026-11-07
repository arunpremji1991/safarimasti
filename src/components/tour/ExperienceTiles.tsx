"use client";

import Image from "next/image";
import Link from "next/link";
import { experienceTypes } from "@/data/experienceTypes";
import { useLanguage } from "@/i18n/LanguageContext";

const FEATURED = ["Honeymoon", "Adventure", "Wildlife", "Wellness"];
const tiles = FEATURED.map((label) => experienceTypes.find((e) => e.label === label)).filter(
  (e): e is (typeof experienceTypes)[number] => Boolean(e)
);

/** Four experience tiles — an image and a name, each linking to that experience's page. */
export function ExperienceTiles() {
  const { t, pick } = useLanguage();

  return (
    <section className="mt-24">
      <h2 className="font-display text-2xl text-charcoal-950 sm:text-3xl">{t("tour.exploreExperiences")}</h2>
      <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
        {tiles.map((e) => (
          <Link
            key={e.label}
            href={e.href}
            className="group relative block aspect-[4/5] overflow-hidden rounded-2xl bg-charcoal-950"
          >
            <Image
              src={e.image}
              alt=""
              fill
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-maroon-950/85 via-maroon-950/10 to-transparent" />
            <span className="font-display absolute inset-x-4 bottom-4 text-xl leading-tight text-cream-50 sm:text-2xl">
              {pick(e.label, e.labelAr)}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
