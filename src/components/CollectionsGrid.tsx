"use client";

import Image from "next/image";
import Link from "next/link";
import { CollectionCard } from "@/components/ui/CollectionCard";
import { getSignatureCollections, getCollectionBySlug } from "@/data/collections";
import { useLanguage } from "@/i18n/LanguageContext";

export function CollectionsGrid() {
  const collections = getSignatureCollections();
  const ayurveda = getCollectionBySlug("kerala-ayurveda");
  const { t, pick } = useLanguage();

  return (
    <section className="bg-cream-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {collections.map((collection) => (
            <CollectionCard key={collection.slug} collection={collection} />
          ))}
        </div>

        {ayurveda && (
          <Link
            href={`/collections/${ayurveda.slug}`}
            className="group mt-14 grid overflow-hidden rounded-2xl border border-amber-500/40 bg-cream-100 sm:grid-cols-2"
          >
            <div className="relative aspect-[16/10] sm:aspect-auto">
              <Image
                src={ayurveda.cardImage}
                alt={pick(ayurveda.title, ayurveda.titleAr)}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-amber-600">
                {t("ayurveda.alsoFrom")}
              </span>
              <h3 className="font-display mt-3 text-2xl text-charcoal-950 sm:text-3xl">
                {pick(ayurveda.title, ayurveda.titleAr)}
              </h3>
              <p className="mt-3 text-charcoal-800/75">{pick(ayurveda.description, ayurveda.descriptionAr)}</p>
              <span className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-semibold uppercase tracking-widest text-maroon-700">
                {t("ayurveda.explore")} <span className="inline-block rtl:rotate-180">→</span>
              </span>
            </div>
          </Link>
        )}
      </div>
    </section>
  );
}
