"use client";

import { Reveal } from "@/components/ui/Reveal";
import { ParallaxImage } from "@/components/ui/ParallaxImage";
import { useLanguage } from "@/i18n/LanguageContext";

/** Full-screen cinematic break between homepage sections. */
export function ImageBand() {
  const { t } = useLanguage();

  return (
    <section
      aria-label={t("band.label")}
      className="relative flex min-h-[80svh] items-end overflow-hidden bg-charcoal-950"
    >
      <ParallaxImage
        src="/images/sections/thar-caravan.webp"
        alt={t("band.alt")}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-charcoal-950/10 to-transparent" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-14 md:px-8 md:pb-20">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-300">{t("band.label")}</p>
          <p className="font-display mt-3 max-w-3xl text-balance text-3xl leading-tight text-cream-50 sm:text-4xl md:text-5xl">
            {t("band.tagline")}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
