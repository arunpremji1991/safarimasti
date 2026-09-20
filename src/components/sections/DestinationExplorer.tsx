"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { regionExplorers } from "@/data/destinations";
import { useLanguage } from "@/i18n/LanguageContext";

export function DestinationExplorer() {
  const { t, pick } = useLanguage();

  return (
    <section className="bg-cream-100 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-maroon-700">
            {t("destinationExplorer.eyebrow")}
          </p>
          <h2 className="font-display mt-4 max-w-2xl text-4xl leading-tight text-charcoal-950 sm:text-5xl">
            {t("destinationExplorer.title")}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {regionExplorers.map((region, i) => (
            <Reveal key={region.slug} delay={i * 0.06}>
              <Link
                href={`/destinations#${region.slug}`}
                className="group relative block aspect-[4/5] overflow-hidden rounded-2xl"
              >
                <Image
                  src={region.image}
                  alt={pick(region.title, region.titleAr)}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-950/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-display text-2xl text-cream-50">
                    {pick(region.title, region.titleAr)}
                  </h3>
                  <p className="mt-2 text-sm text-cream-100/80">
                    {pick(region.description, region.descriptionAr)}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
