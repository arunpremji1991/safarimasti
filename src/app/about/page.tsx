import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { WhyUs } from "@/components/sections/WhyUs";
import { Services } from "@/components/sections/Services";
import { BuildJourneyCTA } from "@/components/sections/BuildJourneyCTA";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Safari Masti is a premier travel management company based in Cochin, Kerala, specializing in curated Pan-India travel experiences.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Who We Are"
        title="About Safari Masti"
        description="Cochin-based, Pan-India in reach — a team of local experts designing journeys around every traveler."
        image="/images/collections/jewels-of-the-south-hero.webp"
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <section className="bg-cream-50 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-2 md:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-maroon-700">
              Our Story
            </p>
            <h2 className="font-display mt-4 text-3xl leading-tight text-charcoal-950 sm:text-4xl">
              {site.base} · {site.scope}
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-charcoal-800/80">
              Safari Masti is a premier travel management company based in Cochin, Kerala,
              specializing in curated travel experiences across Pan-India. Driven by deeply
              knowledgeable local experts and seasoned travel professionals, we design tailored
              itineraries that align with every guest&apos;s preferences, budget, and travel style.
            </p>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-charcoal-800/80">
              From high-energy adventure expeditions to leisurely, secure retreats for senior
              citizens, we are dedicated to delivering safe, immersive, and unforgettable journeys.
            </p>
            <div className="mt-8 border-l-2 border-amber-500 pl-6">
              <p className="font-display text-xl italic text-maroon-800">&ldquo;{site.promise}&rdquo;</p>
              <p className="mt-1 text-sm uppercase tracking-widest text-charcoal-800/60">
                Our Promise
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Image
              src="/images/about/about-kerala.webp"
              alt="A silhouetted boatman on Kerala's backwaters at dusk"
              fill
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <Services />
      <WhyUs />
      <BuildJourneyCTA />
    </>
  );
}
