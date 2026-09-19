import Image from "next/image";
import Link from "next/link";
import { Tour } from "@/data/types";

export function TourCard({ tour }: { tour: Tour }) {
  return (
    <Link
      href={`/tours/${tour.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl bg-cream-100/60 transition-shadow hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={tour.heroImages[0]}
          alt={tour.title}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <span className="text-xs font-semibold uppercase tracking-widest text-maroon-700">
          {tour.destination}
        </span>
        <h3 className="font-display mt-2 text-xl leading-snug text-charcoal-950">{tour.title}</h3>
        <p className="mt-2 flex-1 text-sm text-charcoal-800/70">{tour.shortDescription}</p>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-maroon-700">
          Plan This Journey <span aria-hidden>→</span>
        </span>
      </div>
    </Link>
  );
}
