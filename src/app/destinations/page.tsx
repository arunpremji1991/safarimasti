import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { BuildJourneyCTA } from "@/components/sections/BuildJourneyCTA";
import { regionExplorers } from "@/data/destinations";
import { collections } from "@/data/collections";

export const metadata: Metadata = {
  title: "Destinations",
  description:
    "Explore India region by region with Safari Masti — North, South, East, Northeast, Central and West India.",
};

export default function DestinationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Destination Explorer"
        title="Six Regions, One Incredible India"
        description="From Himalayan passes to southern backwaters — every region, curated by local experts."
        image="/images/destinations/north-india.webp"
        crumbs={[{ label: "Home", href: "/" }, { label: "Destinations" }]}
      />

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
                        alt={region.title}
                        fill
                        sizes="(min-width: 768px) 45vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h2 className="font-display text-3xl text-charcoal-950 sm:text-4xl">
                      {region.title}
                    </h2>
                    <p className="mt-4 max-w-lg text-lg text-charcoal-800/80">{region.description}</p>
                    {relatedCollections.length > 0 && (
                      <div className="mt-6 flex flex-wrap gap-2">
                        {relatedCollections.map((c) => (
                          <Link
                            key={c.slug}
                            href={`/collections/${c.slug}`}
                            className="rounded-full bg-cream-200 px-4 py-1.5 text-sm text-charcoal-900 hover:bg-amber-200"
                          >
                            {c.title}
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

      <BuildJourneyCTA />
    </>
  );
}
