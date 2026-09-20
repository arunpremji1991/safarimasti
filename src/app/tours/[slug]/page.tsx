import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TourPageContent } from "@/components/TourPageContent";
import { getCollectionBySlug } from "@/data/collections";
import { getRelatedTours, getTourBySlug, tours } from "@/data/tours";

export function generateStaticParams() {
  return tours.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tour = getTourBySlug(slug);
  if (!tour) return {};
  return {
    title: { absolute: tour.seoTitle },
    description: tour.seoDescription,
    alternates: { canonical: `/tours/${tour.slug}` },
  };
}

export default async function TourPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tour = getTourBySlug(slug);
  if (!tour) notFound();

  const collection = getCollectionBySlug(tour.collectionSlug);
  const related = getRelatedTours(tour);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://safarimasti.com/" },
              {
                "@type": "ListItem",
                position: 2,
                name: "Collections",
                item: "https://safarimasti.com/collections",
              },
              collection && {
                "@type": "ListItem",
                position: 3,
                name: collection.title,
                item: `https://safarimasti.com/collections/${collection.slug}`,
              },
              {
                "@type": "ListItem",
                position: 4,
                name: tour.title,
                item: `https://safarimasti.com/tours/${tour.slug}`,
              },
            ].filter(Boolean),
          }),
        }}
      />

      <TourPageContent tour={tour} collection={collection} related={related} />
    </>
  );
}
