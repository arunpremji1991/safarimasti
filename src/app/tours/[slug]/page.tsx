import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TourGallery } from "@/components/tour/TourGallery";
import { BookingPanel } from "@/components/tour/BookingPanel";
import { DesignedAroundYou } from "@/components/tour/DesignedAroundYou";
import { GoodToKnow } from "@/components/tour/GoodToKnow";
import { TourCard } from "@/components/ui/TourCard";
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
  const hasItinerary = tour.itinerary.length > 0;
  const hasInclusions = tour.inclusions.length > 0 || tour.exclusions.length > 0;

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

      <div className="mx-auto max-w-7xl px-5 pb-24 pt-28 md:px-8 md:pt-32">
        <nav className="mb-6 flex flex-wrap items-center gap-2 text-xs uppercase tracking-widest text-charcoal-800/60">
          <Link href="/" className="hover:text-maroon-700">
            Home
          </Link>
          <span>/</span>
          <Link href="/collections" className="hover:text-maroon-700">
            Collections
          </Link>
          {collection && (
            <>
              <span>/</span>
              <Link href={`/collections/${collection.slug}`} className="hover:text-maroon-700">
                {collection.title}
              </Link>
            </>
          )}
          <span>/</span>
          <span className="text-maroon-700">{tour.title}</span>
        </nav>

        <div className="grid gap-12 lg:grid-cols-[1fr_360px]">
          <div>
            <TourGallery images={tour.heroImages} title={tour.title} />

            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-maroon-700">
                {tour.destination}
              </p>
              <h1 className="font-display mt-2 text-4xl leading-tight text-charcoal-950 sm:text-5xl">
                {tour.title}
              </h1>
              <div className="mt-4 flex flex-wrap gap-2">
                {tour.category.map((c) => (
                  <span
                    key={c}
                    className="rounded-full bg-cream-200 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-charcoal-900"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick info */}
            <div className="mt-8 grid grid-cols-2 gap-4 rounded-2xl bg-cream-100 p-6 sm:grid-cols-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-charcoal-800/60">Duration</p>
                <p className="mt-1 font-semibold text-charcoal-950">{tour.duration}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-charcoal-800/60">Travel Style</p>
                <p className="mt-1 font-semibold text-charcoal-950">{tour.travelStyle.join(", ")}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-charcoal-800/60">Best For</p>
                <p className="mt-1 font-semibold text-charcoal-950">{tour.bestFor.join(", ")}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-charcoal-800/60">Price</p>
                <p className="mt-1 font-semibold text-charcoal-950">Request a Quote</p>
              </div>
            </div>

            {/* Overview */}
            <section className="mt-14">
              <h2 className="font-display text-2xl text-charcoal-950 sm:text-3xl">
                About This Journey
              </h2>
              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-charcoal-800/80">
                {tour.overview}
              </p>
            </section>

            {/* Highlights */}
            {tour.highlights.length > 0 && (
              <section className="mt-14">
                <h2 className="font-display text-2xl text-charcoal-950 sm:text-3xl">
                  What Makes This Journey Special?
                </h2>
                <ul className="mt-5 grid gap-4 sm:grid-cols-2">
                  {tour.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-3 rounded-xl bg-cream-100 p-4 text-charcoal-800/85"
                    >
                      <span className="mt-0.5 text-amber-600" aria-hidden>
                        ✦
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Itinerary or designed-around-you CTA */}
            <section className="mt-14">
              <h2 className="font-display text-2xl text-charcoal-950 sm:text-3xl">Your Journey</h2>
              {hasItinerary ? (
                <ol className="mt-6 space-y-6 border-l-2 border-amber-500 pl-6">
                  {tour.itinerary.map((stop) => (
                    <li key={stop.label}>
                      <p className="text-xs font-semibold uppercase tracking-widest text-maroon-700">
                        {stop.label}
                      </p>
                      <h3 className="font-display mt-1 text-xl text-charcoal-950">{stop.title}</h3>
                      <p className="mt-1 text-charcoal-800/75">{stop.description}</p>
                    </li>
                  ))}
                </ol>
              ) : (
                <div className="mt-6">
                  <DesignedAroundYou tourSlug={tour.slug} />
                </div>
              )}
            </section>

            {/* Inclusions / Exclusions */}
            {hasInclusions && (
              <section className="mt-14 grid gap-8 sm:grid-cols-2">
                {tour.inclusions.length > 0 && (
                  <div>
                    <h3 className="font-display text-xl text-charcoal-950">What&apos;s Included</h3>
                    <ul className="mt-4 space-y-2 text-charcoal-800/80">
                      {tour.inclusions.map((i) => (
                        <li key={i}>+ {i}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {tour.exclusions.length > 0 && (
                  <div>
                    <h3 className="font-display text-xl text-charcoal-950">What&apos;s Not Included</h3>
                    <ul className="mt-4 space-y-2 text-charcoal-800/80">
                      {tour.exclusions.map((e) => (
                        <li key={e}>− {e}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>
            )}

            {/* Good to know */}
            {tour.goodToKnow.length > 0 && (
              <section className="mt-14">
                <h2 className="font-display text-2xl text-charcoal-950 sm:text-3xl">Good to Know</h2>
                <div className="mt-6">
                  <GoodToKnow items={tour.goodToKnow} />
                </div>
              </section>
            )}
          </div>

          <aside>
            <BookingPanel tour={tour} />
          </aside>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section className="mt-24">
            <h2 className="font-display text-2xl text-charcoal-950 sm:text-3xl">
              You May Also Like
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((t) => (
                <TourCard key={t.slug} tour={t} />
              ))}
            </div>
          </section>
        )}

        {/* Final CTA */}
        <section className="mt-24 rounded-3xl bg-maroon-950 p-10 text-center text-cream-50 md:p-16">
          <h2 className="font-display text-3xl sm:text-4xl">Your Next Journey Starts Here.</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href={`/build-your-journey?tour=${tour.slug}`}
              className="rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-maroon-950 hover:bg-amber-400"
            >
              Plan This Journey
            </Link>
            <Link
              href="/build-your-journey"
              className="rounded-full border border-cream-100/40 px-6 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-cream-50/10"
            >
              Build Your Own Journey
            </Link>
          </div>
        </section>
      </div>

      {/* spacer for mobile sticky bar */}
      <div className="h-20 lg:hidden" />
    </>
  );
}
