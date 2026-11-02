export interface PhoneCountry {
  /** ISO 3166-1 alpha-2, lower-case; also the flag file name in /flags. */
  code: string;
  dial: string;
  name: string;
  nameAr: string;
}

export const phoneCountries: PhoneCountry[] = [
  { code: "in", dial: "+91", name: "India", nameAr: "الهند" },
  { code: "ae", dial: "+971", name: "United Arab Emirates", nameAr: "الإمارات العربية المتحدة" },
  { code: "sa", dial: "+966", name: "Saudi Arabia", nameAr: "المملكة العربية السعودية" },
  { code: "qa", dial: "+974", name: "Qatar", nameAr: "قطر" },
  { code: "kw", dial: "+965", name: "Kuwait", nameAr: "الكويت" },
  { code: "bh", dial: "+973", name: "Bahrain", nameAr: "البحرين" },
  { code: "om", dial: "+968", name: "Oman", nameAr: "عُمان" },
  { code: "jo", dial: "+962", name: "Jordan", nameAr: "الأردن" },
  { code: "lb", dial: "+961", name: "Lebanon", nameAr: "لبنان" },
  { code: "eg", dial: "+20", name: "Egypt", nameAr: "مصر" },
  { code: "tr", dial: "+90", name: "Türkiye", nameAr: "تركيا" },
  { code: "gb", dial: "+44", name: "United Kingdom", nameAr: "المملكة المتحدة" },
  { code: "us", dial: "+1", name: "United States", nameAr: "الولايات المتحدة" },
  { code: "ca", dial: "+1", name: "Canada", nameAr: "كندا" },
  { code: "au", dial: "+61", name: "Australia", nameAr: "أستراليا" },
  { code: "nz", dial: "+64", name: "New Zealand", nameAr: "نيوزيلندا" },
  { code: "sg", dial: "+65", name: "Singapore", nameAr: "سنغافورة" },
  { code: "my", dial: "+60", name: "Malaysia", nameAr: "ماليزيا" },
  { code: "id", dial: "+62", name: "Indonesia", nameAr: "إندونيسيا" },
  { code: "th", dial: "+66", name: "Thailand", nameAr: "تايلاند" },
  { code: "ph", dial: "+63", name: "Philippines", nameAr: "الفلبين" },
  { code: "lk", dial: "+94", name: "Sri Lanka", nameAr: "سريلانكا" },
  { code: "np", dial: "+977", name: "Nepal", nameAr: "نيبال" },
  { code: "bd", dial: "+880", name: "Bangladesh", nameAr: "بنغلاديش" },
  { code: "pk", dial: "+92", name: "Pakistan", nameAr: "باكستان" },
  { code: "mv", dial: "+960", name: "Maldives", nameAr: "جزر المالديف" },
  { code: "mu", dial: "+230", name: "Mauritius", nameAr: "موريشيوس" },
  { code: "jp", dial: "+81", name: "Japan", nameAr: "اليابان" },
  { code: "cn", dial: "+86", name: "China", nameAr: "الصين" },
  { code: "kr", dial: "+82", name: "South Korea", nameAr: "كوريا الجنوبية" },
  { code: "ru", dial: "+7", name: "Russia", nameAr: "روسيا" },
  { code: "de", dial: "+49", name: "Germany", nameAr: "ألمانيا" },
  { code: "fr", dial: "+33", name: "France", nameAr: "فرنسا" },
  { code: "it", dial: "+39", name: "Italy", nameAr: "إيطاليا" },
  { code: "es", dial: "+34", name: "Spain", nameAr: "إسبانيا" },
  { code: "nl", dial: "+31", name: "Netherlands", nameAr: "هولندا" },
  { code: "ch", dial: "+41", name: "Switzerland", nameAr: "سويسرا" },
  { code: "se", dial: "+46", name: "Sweden", nameAr: "السويد" },
  { code: "ie", dial: "+353", name: "Ireland", nameAr: "أيرلندا" },
  { code: "za", dial: "+27", name: "South Africa", nameAr: "جنوب أفريقيا" },
  { code: "ke", dial: "+254", name: "Kenya", nameAr: "كينيا" },
  { code: "ng", dial: "+234", name: "Nigeria", nameAr: "نيجيريا" },
  { code: "br", dial: "+55", name: "Brazil", nameAr: "البرازيل" },
  { code: "mx", dial: "+52", name: "Mexico", nameAr: "المكسيك" },
];
