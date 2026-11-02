import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TourPageContent } from "@/components/TourPageContent";
import { getPackageBySlug, getRelatedPackages, packages } from "@/data/packages";

export function generateStaticParams() {
  return packages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);
  if (!pkg) return {};
  return {
    title: { absolute: pkg.seoTitle },
    description: pkg.seoDescription,
    alternates: { canonical: `/packages/${pkg.slug}` },
  };
}

export default async function PackagePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);
  if (!pkg) notFound();

  const low = pkg.pricing ? Math.min(...pkg.pricing.options.map((o) => o.amountInr)) : undefined;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://safarimasti.com/" },
                { "@type": "ListItem", position: 2, name: "Packages", item: "https://safarimasti.com/packages" },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: pkg.title,
                  item: `https://safarimasti.com/packages/${pkg.slug}`,
                },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "TouristTrip",
              name: pkg.title,
              description: pkg.shortDescription,
              touristType: "Leisure",
              provider: { "@type": "TravelAgency", name: "Safari Masti", url: "https://safarimasti.com" },
              ...(low !== undefined && {
                offers: {
                  "@type": "Offer",
                  priceCurrency: "INR",
                  price: low,
                  url: `https://safarimasti.com/packages/${pkg.slug}`,
                },
              }),
            },
          ]),
        }}
      />
      <TourPageContent tour={pkg} collection={undefined} related={getRelatedPackages(pkg)} kind="package" />
    </>
  );
}
