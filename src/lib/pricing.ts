import { Tour } from "@/data/types";
import { UiKey } from "@/i18n/ui";

type Pricing = NonNullable<Tour["pricing"]>;

/** Short caption under a price: "Including government taxes", or "per person · plus 5% GST". */
export function priceCaption(pricing: Pricing, t: (key: UiKey) => string, locale: "en" | "ar"): string {
  const parts: string[] = [];
  if (pricing.perPerson) parts.push(t("package.perPerson"));
  if (pricing.gstPercentExtra) {
    const pct = locale === "ar" ? `${new Intl.NumberFormat("ar-EG").format(pricing.gstPercentExtra)}٪` : `${pricing.gstPercentExtra}%`;
    parts.push(locale === "ar" ? `بالإضافة إلى ضريبة السلع والخدمات ${pct}` : `plus ${pct} GST`);
  } else {
    parts.push(t("package.inclTaxes"));
  }
  return parts.join(" · ");
}
