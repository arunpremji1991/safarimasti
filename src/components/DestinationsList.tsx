"use client";

import Image from "next/image";
import Link from "next/link";
import { regionExplorers } from "@/data/destinations";
import { collections } from "@/data/collections";
import { useLanguage } from "@/i18n/LanguageContext";

export function DestinationsList() {
  const { pick } = useLanguage();

  return (
    <section className="bg-cream-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col gap-20">
          {regionExplorers.map((region, i) => {
            const relatedCollections = collections.filter((c) => c.regions.includes(region.region));
            return (
              <div
                key={region.slug}
                id={region.slug}
                className="grid scroll-mt-28 gap-8 md:grid-cols-2 md:items-center"
              >
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                    <Image
                      src={region.image}
                      alt={pick(region.title, region.titleAr)}
                      fill
                      sizes="(min-width: 768px) 45vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h2 className="font-display text-3xl text-charcoal-950 sm:text-4xl">
                    {pick(region.title, region.titleAr)}
                  </h2>
                  <p className="mt-4 max-w-lg text-lg text-charcoal-800/80">
                    {pick(region.description, region.descriptionAr)}
                  </p>
                  {relatedCollections.length > 0 && (
                    <div className="mt-6 flex flex-wrap gap-2">
                      {relatedCollections.map((c) => (
                        <Link
                          key={c.slug}
                          href={`/collections/${c.slug}`}
                          className="rounded-full bg-cream-200 px-4 py-1.5 text-sm text-charcoal-900 hover:bg-amber-200"
                        >
                          {pick(c.title, c.titleAr)}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
