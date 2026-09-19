import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { CollectionCard } from "@/components/ui/CollectionCard";
import { BuildJourneyCTA } from "@/components/sections/BuildJourneyCTA";
import { collections } from "@/data/collections";

export const metadata: Metadata = {
  title: "Signature Collections",
  description:
    "Explore Safari Masti's Signature Collections — bucket-list India tour packages spanning adventure treks, the Golden Triangle, luxury escapes, the Northeast, wildlife safaris, South India and sacred temple trails.",
};

export default function CollectionsPage() {
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
        </div>
      </section>

      <BuildJourneyCTA />
    </>
  );
}
