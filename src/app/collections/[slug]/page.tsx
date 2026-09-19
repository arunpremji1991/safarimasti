import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { TourCard } from "@/components/ui/TourCard";
import { BuildJourneyCTA } from "@/components/sections/BuildJourneyCTA";
import { collections, getCollectionBySlug } from "@/data/collections";
import { getToursByCollection } from "@/data/tours";

export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);
  if (!collection) return {};
  return {
    title: { absolute: collection.seoTitle },
    description: collection.seoDescription,
    alternates: { canonical: `/collections/${collection.slug}` },
  };
}

export default async function CollectionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);
  if (!collection) notFound();

  const tours = getToursByCollection(collection.slug);

  return (
    <>
      <PageHero
        eyebrow={
          collection.hideFromSignatureCollections
            ? "Featured Product"
            : `Signature Collection · ${String(collection.index).padStart(2, "0")} / 07`
        }
        title={collection.title}
        description={collection.description}
        image={collection.heroImage}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Collections", href: "/collections" },
          { label: collection.title },
        ]}
      />

      <section className="bg-cream-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          {collection.advantages && (
            <div className="mb-16 grid gap-px overflow-hidden rounded-2xl bg-charcoal-950/10 sm:grid-cols-3">
              {collection.advantages.map((a) => (
                <div key={a.title} className="bg-cream-100 p-6">
                  <h3 className="font-display text-xl text-charcoal-950">{a.title}</h3>
                  <p className="mt-2 text-sm text-charcoal-800/75">{a.description}</p>
                </div>
              ))}
            </div>
          )}

          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-maroon-700">
            Featured In This Collection
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {collection.destinations.map((d) => (
              <span
                key={d.name}
                className="rounded-full bg-cream-200 px-4 py-1.5 text-sm text-charcoal-900"
                title={d.description}
              >
                {d.name}
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

      <BuildJourneyCTA />
    </>
  );
}
