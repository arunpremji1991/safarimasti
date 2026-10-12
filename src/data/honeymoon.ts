/**
 * Extra content for the Luxury & Honeymoon Escapes page.
 *
 * The four escapes, their descriptions and their highlights come from the existing tour data
 * (taken from the Company Profile). The lines below add mood and storytelling only — they make no
 * claims about prices, inclusions, properties or itineraries that aren't in the source material.
 */

interface Bi {
  en: string;
  ar: string;
}

export interface HoneymoonChapter {
  slug: string;
  place: Bi;
  mood: Bi;
  image: string;
  alt: Bi;
}

export const honeymoonChapters: HoneymoonChapter[] = [
  {
    slug: "kerala-backwater-retreats",
    place: { en: "Kerala", ar: "كيرالا" },
    mood: {
      en: "Drift through quiet green canals, sharing slow mornings and golden evenings on the water.",
      ar: "انسابوا عبر قنوات خضراء هادئة، وتقاسموا صباحات بطيئة ومساءات ذهبية على صفحة الماء.",
    },
    image: "/images/honeymoon/kerala-canoe.70d2a9fe.webp",
    alt: {
      en: "A honeymoon couple in a traditional canoe on a Kerala backwater canal at sunrise",
      ar: "زوجان في شهر العسل داخل قارب تقليدي على قناة مائية في كيرالا عند الشروق",
    },
  },
  {
    slug: "munnar-hill-romance",
    place: { en: "Munnar", ar: "مونار" },
    mood: {
      en: "Misty tea hills, cool mornings and long walks with nowhere else to be.",
      ar: "تلال شاي يلفّها الضباب، وصباحات باردة، ونزهات طويلة بلا أي التزام سواكما.",
    },
    image: "/images/honeymoon/munnar-picnic.da47a80d.webp",
    alt: {
      en: "A couple sharing a morning picnic among the tea plantations of Munnar",
      ar: "زوجان يتشاركان نزهة صباحية بين مزارع الشاي في مونار",
    },
  },
  {
    slug: "goa-beach-escapes",
    place: { en: "Goa", ar: "غوا" },
    mood: {
      en: "Warm sand, easy sunsets and unhurried evenings by the sea.",
      ar: "رمال دافئة، وغروب هادئ، وأمسيات بلا استعجال على ضفاف البحر.",
    },
    image: "/images/honeymoon/goa-walk.6e4fab09.webp",
    alt: {
      en: "A couple walking hand in hand along a Goa beach at sunset",
      ar: "زوجان يسيران يدًا بيد على شاطئ في غوا عند الغروب",
    },
  },
  {
    slug: "rajasthan-palace-stays",
    place: { en: "Rajasthan", ar: "راجستان" },
    mood: {
      en: "Royal Rajasthan, made for two — palace stays and golden evenings under open skies.",
      ar: "راجستان الملكية، بمقياس اثنين — إقامات في القصور وأمسيات ذهبية تحت سماء مفتوحة.",
    },
    image: "/images/honeymoon/rajasthan-dunes.d18c3aa7.webp",
    alt: {
      en: "A couple walking across golden desert dunes in Rajasthan at sunset",
      ar: "زوجان يسيران عبر كثبان صحراوية ذهبية في راجستان عند الغروب",
    },
  },
];

export const honeymoonGallery: { src: string; alt: Bi }[] = [
  {
    src: "/images/honeymoon/kerala-deck.b4fedd39.webp",
    alt: { en: "A couple sharing tea on a houseboat deck at sunset", ar: "زوجان يتشاركان الشاي على سطح قارب سكني عند الغروب" },
  },
  {
    src: "/images/honeymoon/munnar-view.0f7a5696.webp",
    alt: { en: "A couple wrapped in a shawl above the misty hills of Munnar", ar: "زوجان متدثران بشال فوق تلال مونار الضبابية" },
  },
  {
    src: "/images/honeymoon/goa-dinner.0d8e8df9.webp",
    alt: { en: "A candle-lit dinner for two on a Goa beach at sunset", ar: "عشاء على ضوء الشموع لشخصين على شاطئ في غوا عند الغروب" },
  },
  {
    src: "/images/honeymoon/rajasthan-dinner.f71ce101.webp",
    alt: { en: "A candle-lit dinner for two on the dunes at dusk", ar: "عشاء على ضوء الشموع لشخصين فوق الكثبان عند الغسق" },
  },
];

export const honeymoonCopy = {
  chaptersEyebrow: { en: "Four Romantic Escapes", ar: "أربع إجازات رومانسية" },
  chaptersTitle: { en: "Choose the first chapter of your story", ar: "اختاروا الفصل الأول من حكايتكما" },
  chapter: { en: "Escape", ar: "إجازة" },
  viewEscape: { en: "View this escape", ar: "عرض هذه الإجازة" },
  bandEyebrow: { en: "Your honeymoon, your way", ar: "شهر عسلكما، على طريقتكما" },
  bandTitle: {
    en: "The first chapter of your life together, designed around you.",
    ar: "الفصل الأول من حياتكما معًا، مصمَّم على مقاسكما.",
  },
  forTwoEyebrow: { en: "Designed for Two", ar: "مصمَّمة لاثنين" },
  forTwoTitle: { en: "What every escape is built around", ar: "ما تقوم عليه كل إجازة" },
  galleryEyebrow: { en: "Moments", ar: "لحظات" },
  galleryTitle: { en: "Romance, set in India", ar: "رومانسية في قلب الهند" },
  galleryNote: {
    en: "Images on this page are illustrative and created with AI to show the mood of each escape; they do not depict a specific property or guests.",
    ar: "الصور في هذه الصفحة توضيحية وأُنشئت بالذكاء الاصطناعي لتعبّر عن أجواء كل إجازة، ولا تصوّر منشأة أو ضيوفًا بعينهم.",
  },
  ctaTitle: { en: "Tell us about the two of you", ar: "حدّثونا عنكما" },
  ctaBody: {
    en: "Share your dates and the kind of honeymoon you imagine, and we'll shape it around you — a single escape, or a journey across India.",
    ar: "شاركونا تواريخكما وصورة شهر العسل الذي تحلمان به، وسنصمّمه على مقاسكما — إجازة واحدة، أو رحلة عبر أنحاء الهند.",
  },
  ctaPrimary: { en: "Plan our honeymoon", ar: "خطّطوا لشهر عسلنا" },
  ctaWhatsapp: { en: "Chat on WhatsApp", ar: "تحدثوا معنا عبر واتساب" },
  ctaWhatsappMessage: {
    en: "Hello Safari Masti, we'd like to plan a honeymoon in India.",
    ar: "مرحبًا سفاري ماستي، نودّ التخطيط لشهر عسل في الهند.",
  },
};
