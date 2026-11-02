/** Formats an Indian-rupee amount: "INR 1,30,500" in English, "١٣٠٬٥٠٠ روبية هندية" in Arabic. */
export function formatInr(amount: number, locale: "en" | "ar"): string {
  if (locale === "ar") {
    return `${new Intl.NumberFormat("ar-EG").format(amount)} روبية هندية`;
  }
  return `INR ${new Intl.NumberFormat("en-IN").format(amount)}`;
}
