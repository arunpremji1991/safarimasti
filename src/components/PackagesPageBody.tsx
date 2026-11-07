"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { PackagesExplorer } from "@/components/PackagesExplorer";
import { Tour } from "@/data/types";
import { useLanguage } from "@/i18n/LanguageContext";

export function PackagesPageBody({ packages }: { packages: Tour[] }) {
  const { t } = useLanguage();

  return (
    <section className="bg-cream-50 py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <PackagesExplorer packages={packages} />

        <Reveal>
          <div className="mt-16 rounded-3xl bg-maroon-950 p-10 text-center text-cream-50 md:p-16">
            <h2 className="font-display text-3xl sm:text-4xl">{t("packages.ctaTitle")}</h2>
            <p className="mx-auto mt-4 max-w-xl text-cream-100/80">{t("packages.ctaBody")}</p>
            <div className="mt-8 flex justify-center">
              <Button href="/build-your-journey" variant="primary" arrow>
                {t("nav.buildYourJourney")}
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
