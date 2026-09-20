"use client";

import Image from "next/image";
import Link from "next/link";
import { Collection } from "@/data/types";
import { useLanguage } from "@/i18n/LanguageContext";

export function CollectionCard({ collection }: { collection: Collection }) {
  const { pick } = useLanguage();

  return (
    <Link
      href={`/collections/${collection.slug}`}
      className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-2xl"
    >
      <Image
        src={collection.cardImage}
        alt={pick(collection.title, collection.titleAr)}
        fill
        sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-950/25 to-transparent" />
      <div className="relative z-10 p-6">
        <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">
          {String(collection.index).padStart(2, "0")}
        </span>
        <h3 className="font-display mt-2 text-2xl leading-tight text-cream-50">
          {pick(collection.title, collection.titleAr)}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-cream-100/80">
          {pick(collection.description, collection.descriptionAr)}
        </p>
      </div>
    </Link>
  );
}
