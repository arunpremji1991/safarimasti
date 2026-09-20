"use client";

import { PageHero } from "@/components/ui/PageHero";
import { TourCard } from "@/components/ui/TourCard";
import { Collection, Tour } from "@/data/types";
import { useLanguage } from "@/i18n/LanguageContext";

export function CollectionDetailContent({
  collection,
  tours,
}: {
  collection: Collection;
  tours: Tour[];
}) {
  const { t, pick } = useLanguage();

  return (
    <>
      <PageHero
        eyebrow={
          collection.hideFromSignatureCollections
            ? "Featured Product"
            : `Signature Collection · ${String(collection.index).padStart(2, "0")} / 07`
        }
        eyebrowAr={
          collection.hideFromSignatureCollections
            ? "منتج مميز"
            : `مجموعة مميزة · ${String(collection.index).padStart(2, "0")} / ٠٧`
        }
        title={collection.title}
        titleAr={collection.titleAr}
        description={collection.description}
        descriptionAr={collection.descriptionAr}
        image={collection.heroImage}
        crumbs={[
          { label: "Home", labelAr: "الرئيسية", href: "/" },
          { label: "Collections", labelAr: "المجموعات", href: "/collections" },
          { label: collection.title, labelAr: collection.titleAr },
        ]}
      />

      <section className="bg-cream-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          {collection.advantages && (
            <div className="mb-16 grid gap-px overflow-hidden rounded-2xl bg-charcoal-950/10 sm:grid-cols-3">
              {collection.advantages.map((a) => (
                <div key={a.title} className="bg-cream-100 p-6">
                  <h3 className="font-display text-xl text-charcoal-950">{pick(a.title, a.titleAr)}</h3>
                  <p className="mt-2 text-sm text-charcoal-800/75">
                    {pick(a.description, a.descriptionAr)}
                  </p>
                </div>
              ))}
            </div>
          )}

          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-maroon-700">
            {t("collectionDetail.featuredIn")}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {collection.destinations.map((d) => (
              <span
                key={d.name}
                className="rounded-full bg-cream-200 px-4 py-1.5 text-sm text-charcoal-900"
                title={pick(d.description ?? "", d.descriptionAr) || undefined}
              >
                {pick(d.name, d.nameAr)}
              </span>
            ))}
          </div>

          {tours.length > 0 && (
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {tours.map((tour) => (
                <TourCard key={tour.slug} tour={tour} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
