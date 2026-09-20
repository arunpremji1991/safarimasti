import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CollectionDetailContent } from "@/components/CollectionDetailContent";
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
      <CollectionDetailContent collection={collection} tours={tours} />
      <BuildJourneyCTA />
    </>
  );
}
