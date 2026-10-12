"use client";

import { Reveal } from "@/components/ui/Reveal";
import { ParallaxImage } from "@/components/ui/ParallaxImage";
import { useLanguage } from "@/i18n/LanguageContext";

export function BrandStatement() {
  const { t } = useLanguage();

  return (
    <section className="relative flex min-h-[85svh] items-center overflow-hidden bg-maroon-950 py-28 md:py-40">
      <ParallaxImage src="/images/sections/brand-backwaters.84af54c3.webp" />
      <div className="absolute inset-0 bg-maroon-950/50" />
      <div className="absolute inset-0 bg-gradient-to-b from-maroon-950/50 via-transparent to-maroon-950/60" />

      <div className="relative mx-auto max-w-6xl px-5 text-center md:px-8">
        <Reveal>
          <p className="font-display text-balance text-4xl leading-[1.1] text-cream-50 sm:text-5xl md:text-6xl lg:text-7xl">
            {t("brand.part1")} <span className="text-amber-400 italic">{t("brand.himalayas")}</span>{" "}
            {t("brand.part2")} <span className="text-amber-400 italic">{t("brand.backwaters")}</span>{" "}
            {t("brand.part3")}
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-cream-100/85">{t("brand.sub")}</p>
        </Reveal>
      </div>
    </section>
  );
}
