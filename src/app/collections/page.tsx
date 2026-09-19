import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { CollectionCard } from "@/components/ui/CollectionCard";
import { BuildJourneyCTA } from "@/components/sections/BuildJourneyCTA";
import { getSignatureCollections, getCollectionBySlug } from "@/data/collections";

export const metadata: Metadata = {
  title: "Signature Collections",
  description:
    "Explore Safari Masti's Signature Collections — bucket-list India tour packages spanning adventure treks, the Golden Triangle, luxury escapes, the Northeast, wildlife safaris, South India and sacred temple trails.",
};

export default function CollectionsPage() {
  const collections = getSignatureCollections();
  const ayurveda = getCollectionBySlug("kerala-ayurveda");

  return (
    <>
      <PageHero
        eyebrow="Bucket-List India"
        title="Signature Collections"
        description="Seven curated collections spanning the length and breadth of India — each one built to be tailored around you."
        image="/images/collections/wildlife-safaris-hero.webp"
        crumbs={[{ label: "Home", href: "/" }, { label: "Collections" }]}
      />

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
                  alt={ayurveda.title}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center p-8 md:p-10">
                <span className="text-xs font-semibold uppercase tracking-widest text-amber-600">
                  Also From Safari Masti
                </span>
                <h3 className="font-display mt-3 text-2xl text-charcoal-950 sm:text-3xl">
                  {ayurveda.title}
                </h3>
                <p className="mt-3 text-charcoal-800/75">{ayurveda.description}</p>
                <span className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-semibold uppercase tracking-widest text-maroon-700">
                  Explore Ayurveda Retreats <span aria-hidden>→</span>
                </span>
              </div>
            </Link>
          )}
        </div>
      </section>

      <BuildJourneyCTA />
    </>
  );
}
