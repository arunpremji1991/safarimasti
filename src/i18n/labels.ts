import { Region, TravelStyle } from "@/data/types";

/** Shared enum-style label translations reused across many tours/collections. */
export const regionAr: Record<Region, string> = {
  North: "الشمال",
  South: "الجنوب",
  East: "الشرق",
  Northeast: "الشمال الشرقي",
  Central: "الوسط",
  West: "الغرب",
};

export const travelStyleAr: Record<TravelStyle, string> = {
  "Budget Friendly": "مناسب للميزانية",
  Comfort: "مريح",
  Premium: "متميز",
  Luxury: "فاخر",
};

export const categoryAr: Record<string, string> = {
  Adventure: "مغامرة",
  Trekking: "تسلق",
  Heritage: "تراث",
  Culture: "ثقافة",
  Luxury: "فخامة",
  Honeymoon: "شهر عسل",
  Northeast: "الشمال الشرقي",
  Nature: "طبيعة",
  "South India": "جنوب الهند",
  Beaches: "شواطئ",
  Spiritual: "روحانية",
  "Temple Trail": "مسار المعابد",
  Wellness: "عافية",
  Ayurveda: "أيورفيدا",
  Wildlife: "حياة برية",
  Safari: "رحلة سفاري",
};

export function translateCategory(cat: string, locale: "en" | "ar") {
  if (locale === "en") return cat;
  return categoryAr[cat] ?? cat;
}

export function translateRegion(region: Region, locale: "en" | "ar") {
  return locale === "ar" ? regionAr[region] : region;
}

export function translateTravelStyle(style: TravelStyle, locale: "en" | "ar") {
  return locale === "ar" ? travelStyleAr[style] : style;
}
