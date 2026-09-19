import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { BuildJourneyCTA } from "@/components/sections/BuildJourneyCTA";
import { blogCategories, blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Travel guides and stories from Safari Masti — Pan-India travel experts based in Cochin, Kerala.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Stories & Guides"
        title="The Safari Masti Blog"
        description="Travel guides, itineraries and stories from across India."
        image="/images/collections/divine-trails-hero.webp"
        compact
        crumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />

      <section className="bg-cream-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-wrap gap-2">
            {blogCategories.map((cat) => (
              <span
                key={cat}
                className="rounded-full bg-cream-200 px-4 py-1.5 text-sm text-charcoal-900"
              >
                {cat}
              </span>
            ))}
          </div>

          {blogPosts.length === 0 ? (
            <div className="mt-16 rounded-2xl bg-cream-100 p-12 text-center">
              <h2 className="font-display text-2xl text-charcoal-950">
                New stories are on their way.
              </h2>
              <p className="mx-auto mt-3 max-w-md text-charcoal-800/70">
                We&apos;re preparing travel guides across every collection above. Check back soon,
                or get in touch and our team can help plan your trip right now.
              </p>
            </div>
          ) : (
            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Rendered once posts exist in src/data/blog.ts */}
            </div>
          )}
        </div>
      </section>

      <BuildJourneyCTA />
    </>
  );
}
