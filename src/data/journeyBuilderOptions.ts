export interface BilingualOption {
  value: string;
  en: string;
  ar: string;
}

export const journeyTypeOptions: BilingualOption[] = [
  { value: "Adventure", en: "Adventure", ar: "مغامرة" },
  { value: "Luxury", en: "Luxury", ar: "فخامة" },
  { value: "Honeymoon", en: "Honeymoon", ar: "شهر عسل" },
  { value: "Family", en: "Family", ar: "عائلي" },
  { value: "Wildlife", en: "Wildlife", ar: "حياة برية" },
  { value: "Spiritual", en: "Spiritual", ar: "روحاني" },
  { value: "Cultural", en: "Cultural", ar: "ثقافي" },
  { value: "Weekend Escape", en: "Weekend Escape", ar: "هروب لعطلة نهاية الأسبوع" },
  { value: "Senior Citizen", en: "Senior Citizen", ar: "كبار السن" },
  { value: "Corporate", en: "Corporate", ar: "رحلات الشركات" },
  { value: "Other", en: "Other", ar: "أخرى" },
];

export const regionOptions: BilingualOption[] = [
  { value: "North India", en: "North India", ar: "شمال الهند" },
  { value: "South India", en: "South India", ar: "جنوب الهند" },
  { value: "East India", en: "East India", ar: "شرق الهند" },
  { value: "Northeast India", en: "Northeast India", ar: "شمال شرق الهند" },
  { value: "West India", en: "West India", ar: "غرب الهند" },
  { value: "Central India", en: "Central India", ar: "وسط الهند" },
  { value: "Not Sure Yet", en: "Not Sure Yet", ar: "لست متأكدًا بعد" },
];

export const durationOptions: BilingualOption[] = [
  { value: "3–5 days", en: "3–5 days", ar: "٣–٥ أيام" },
  { value: "5–7 days", en: "5–7 days", ar: "٥–٧ أيام" },
  { value: "7–10 days", en: "7–10 days", ar: "٧–١٠ أيام" },
  { value: "10+ days", en: "10+ days", ar: "أكثر من ١٠ أيام" },
];

export const travelStyleOptions: BilingualOption[] = [
  { value: "Budget Friendly", en: "Budget Friendly", ar: "مناسب للميزانية" },
  { value: "Comfort", en: "Comfort", ar: "مريح" },
  { value: "Premium", en: "Premium", ar: "متميز" },
  { value: "Luxury", en: "Luxury", ar: "فاخر" },
  { value: "Not Sure", en: "Not Sure", ar: "غير متأكد" },
];

export const groupPreferenceOptions: BilingualOption[] = [
  { value: "Private Journey", en: "Private Journey", ar: "رحلة خاصة" },
  { value: "Small Group", en: "Small Group", ar: "مجموعة صغيرة" },
  { value: "Open to Either", en: "Open to Either", ar: "لا فرق لدي" },
];

export const interestOptions: BilingualOption[] = [
  { value: "Nature", en: "Nature", ar: "الطبيعة" },
  { value: "Adventure", en: "Adventure", ar: "المغامرة" },
  { value: "Culture", en: "Culture", ar: "الثقافة" },
  { value: "Wildlife", en: "Wildlife", ar: "الحياة البرية" },
  { value: "Food", en: "Food", ar: "الطعام" },
  { value: "Photography", en: "Photography", ar: "التصوير" },
  { value: "Shopping", en: "Shopping", ar: "التسوق" },
  { value: "Relaxation", en: "Relaxation", ar: "الاسترخاء" },
  { value: "Spiritual Experiences", en: "Spiritual Experiences", ar: "التجارب الروحانية" },
  { value: "Family Friendly", en: "Family Friendly", ar: "مناسب للعائلات" },
  { value: "Senior Friendly", en: "Senior Friendly", ar: "مناسب لكبار السن" },
];

export const preferredContactOptions: BilingualOption[] = [
  { value: "WhatsApp", en: "WhatsApp", ar: "واتساب" },
  { value: "Phone", en: "Phone", ar: "الهاتف" },
  { value: "Email", en: "Email", ar: "البريد الإلكتروني" },
];
