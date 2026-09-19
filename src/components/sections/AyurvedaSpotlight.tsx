import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { getCollectionBySlug } from "@/data/collections";

export function AyurvedaSpotlight() {
  const collection = getCollectionBySlug("kerala-ayurveda");
  if (!collection) return null;

  return (
    <section className="bg-cream-100 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-2 md:items-center md:gap-16 md:px-8">
        <Reveal>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
            <Image
              src={collection.heroImage}
              alt={collection.title}
              fill
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-maroon-700">
            Featured Product
          </p>
          <h2 className="font-display mt-4 text-4xl leading-tight text-charcoal-950 sm:text-5xl">
            {collection.subtitle ?? collection.title}
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-charcoal-800/80">
            {collection.description}
          </p>

          {collection.advantages && (
            <ul className="mt-8 space-y-4">
              {collection.advantages.map((a) => (
                <li key={a.title} className="flex gap-3">
                  <span className="mt-1 text-amber-600" aria-hidden>
                    ✦
                  </span>
                  <div>
                    <p className="font-semibold text-charcoal-950">{a.title}</p>
                    <p className="text-sm text-charcoal-800/70">{a.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-10">
            <Button href={`/collections/${collection.slug}`} variant="secondary" arrow>
              Explore Ayurveda Retreats
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
