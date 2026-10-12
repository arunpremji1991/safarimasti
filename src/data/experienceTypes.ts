export interface ExperienceType {
  label: string;
  labelAr: string;
  image: string;
  /** Additional images the selector cycles through for this type. */
  extraImages?: string[];
  description: string;
  descriptionAr: string;
  href: string;
}

export const experienceTypes: ExperienceType[] = [
  {
    label: "Adventure",
    labelAr: "مغامرة",
    image: "/images/collections/adventure-trekking-hero.b4a9ab3d.webp",
    description: "Guided treks, hikes and managed camping across the Himalayas.",
    descriptionAr: "رحلات تسلق ومشي جبلي ومخيمات منظّمة في جبال الهيمالايا برفقة مرشدين.",
    href: "/collections/adventure-trekking",
  },
  {
    label: "Luxury",
    labelAr: "فخامة",
    image: "/images/collections/luxury-honeymoon-hero.b5d83428.webp",
    description: "Premium stays and exclusive amenities across India.",
    descriptionAr: "إقامات فاخرة ومرافق حصرية في مختلف أنحاء الهند.",
    href: "/collections/luxury-honeymoon",
  },
  {
    label: "Honeymoon",
    labelAr: "شهر العسل",
    image: "/images/honeymoon/kerala-canoe.70d2a9fe.webp",
    description: "Romantic escapes through Kerala, Munnar, Goa and Rajasthan.",
    descriptionAr: "إجازات رومانسية عبر كيرالا ومونار وغوا وراجستان.",
    href: "/collections/luxury-honeymoon",
  },
  {
    label: "Wildlife",
    labelAr: "الحياة البرية",
    image: "/images/collections/wildlife-safaris-hero.e57ab0df.webp",
    description: "Safaris through India's most celebrated national parks.",
    descriptionAr: "رحلات سفاري في أشهر المحميات الطبيعية في الهند.",
    href: "/collections/wildlife-safaris",
  },
  {
    label: "Culture",
    labelAr: "الثقافة",
    image: "/images/culture/ellora.cfab445e.webp",
    extraImages: [
      "/images/culture/ajanta.cab46ea6.webp",
      "/images/culture/hampi.4e028ffb.webp",
      "/images/collections/golden-triangle-hero.4734d6a7.webp",
    ],
    description: "India's living heritage — Mughal grandeur, ancient cave temples, ruined empires and royal forts.",
    descriptionAr: "تراث الهند الحيّ — عظمة العمارة المغولية، ومعابد الكهوف القديمة، وأطلال الإمبراطوريات، والقلاع الملكية.",
    href: "/collections/golden-triangle",
  },
  {
    label: "Spiritual",
    labelAr: "الروحانية",
    image: "/images/collections/divine-trails-hero.7e7ce1cd.webp",
    description: "Sacred temple trails across North and South India.",
    descriptionAr: "مسارات المعابد المقدسة في شمال الهند وجنوبها.",
    href: "/collections/divine-trails",
  },
  {
    label: "Wellness",
    labelAr: "العافية",
    image: "/images/collections/kerala-ayurveda-hero.1fc4c569.webp",
    description: "Authentic Kerala Ayurveda rejuvenation packages.",
    descriptionAr: "برامج تجديد الحيوية الأصيلة بطب الأيورفيدا في كيرالا.",
    href: "/collections/kerala-ayurveda",
  },
  {
    label: "Family",
    labelAr: "العائلة",
    image: "/images/collections/jewels-of-the-south-hero.cde936f4.webp",
    description: "Budget-friendly journeys across South India for every generation.",
    descriptionAr: "رحلات مناسبة للميزانية في جنوب الهند تلائم جميع أفراد العائلة.",
    href: "/collections/jewels-of-the-south",
  },
  {
    label: "Senior Citizen",
    labelAr: "كبار السن",
    image: "/images/services/senior-citizen-tea.b8aa39c9.webp",
    description: "Slow-paced programs focused on comfort, accessibility and safety.",
    descriptionAr: "برامج بوتيرة هادئة تركز على الراحة وسهولة التنقل والسلامة.",
    href: "/build-your-journey",
  },
  {
    label: "Corporate",
    labelAr: "رحلات الشركات",
    image: "/images/services/corporate-weekend.26f1caa7.webp",
    description: "Quick, refreshing packages for working professionals.",
    descriptionAr: "باقات سريعة ومنعشة مخصصة للمهنيين العاملين.",
    href: "/build-your-journey",
  },
  {
    label: "Weekend Escape",
    labelAr: "هروب لعطلة نهاية الأسبوع",
    image: "/images/services/corporate-weekend.26f1caa7.webp",
    description: "Short, restorative getaways designed around your schedule.",
    descriptionAr: "إجازات قصيرة ومريحة تُصمَّم بما يناسب جدول أعمالكم.",
    href: "/build-your-journey",
  },
];
