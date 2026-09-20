"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageContext";

export function Services() {
  const { t, pick } = useLanguage();

  return (
    <section className="bg-cream-50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-maroon-700">
            {t("services.eyebrow")}
          </p>
          <h2 className="font-display mt-4 max-w-2xl text-4xl leading-tight text-charcoal-950 sm:text-5xl">
            {t("services.title")}
          </h2>
        </Reveal>

        <div className="mt-16 flex flex-col">
          {services.map((service, i) => (
            <Reveal key={service.index} delay={i * 0.05}>
              <Link
                href={service.href}
                className="group grid items-center gap-6 border-t border-charcoal-950/10 py-8 last:border-b md:grid-cols-[80px_1fr_240px] md:gap-10"
              >
                <span className="font-display text-3xl text-amber-600">{service.index}</span>

                <div>
                  <h3 className="font-display text-2xl text-charcoal-950 transition-colors group-hover:text-maroon-700 sm:text-3xl">
                    {pick(service.title, service.titleAr)}
                  </h3>
                  <p className="mt-2 max-w-xl text-charcoal-800/75">
                    {pick(service.description, service.descriptionAr)}
                  </p>
                </div>

                <div className="relative hidden h-32 w-full overflow-hidden rounded-xl md:block">
                  <Image
                    src={service.image}
                    alt={pick(service.title, service.titleAr)}
                    fill
                    sizes="240px"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
