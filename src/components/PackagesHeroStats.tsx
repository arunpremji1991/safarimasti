"use client";

import { Tour } from "@/data/types";
import { formatInr } from "@/lib/format";
import { packageDays } from "@/components/ui/PackageCard";
import { useLanguage } from "@/i18n/LanguageContext";

const chip =
  "inline-flex items-center rounded-full border border-cream-100/30 bg-charcoal-950/35 px-4 py-2 text-sm text-cream-50 backdrop-blur-sm";

/** Quick facts under the packages hero, all computed from the package list. */
export function PackagesHeroStats({ packages }: { packages: Tour[] }) {
  const { t, locale } = useLanguage();
  const fmt = (n: number) => new Intl.NumberFormat(locale === "ar" ? "ar-EG" : "en").format(n);
  const days = packages.map(packageDays);
  const prices = packages.flatMap((p) => p.pricing?.options.map((o) => o.amountInr) ?? []);

  return (
    <div className="mt-7 flex flex-wrap gap-3">
      <span className={chip}>
        {fmt(packages.length)} {t("packages.many")}
      </span>
      <span className={chip}>
        {fmt(Math.min(...days))}–{fmt(Math.max(...days))} {t("packages.days")}
      </span>
      {prices.length > 0 && (
        <span className={chip}>
          {t("package.from")} {formatInr(Math.min(...prices), locale)}
        </span>
      )}
    </div>
  );
}
