import { Tour } from "./types";

/**
 * Every field here traces back to Safari Masti's Company Profile & Signature
 * Collections PDF. No itinerary day-plans, inclusions, exclusions, prices or
 * reviews are invented — those sections render a "designed around you" CTA
 * on the tour page until real package detail is supplied.
 */
const CUSTOMIZED_AR = "حسب تواريخكم الخاصة";
const TREK_HIGHLIGHTS_AR = [
  "بقيادة مرشدي تسلق ذوي معرفة عميقة بالمنطقة",
  "إدارة كاملة للتخييم واللوجستيات الميدانية من الألف إلى الياء",
  "مسار ووتيرة يُخططان بحسب خبرة مجموعتكم ولياقتها",
];
const SAFARI_HIGHLIGHTS_AR = (guided: string) => [
  guided,
  "لوجستيات ودعم ميداني متكاملان من الألف إلى الياء",
  "تخطيط بحسب مواعيد سفركم ووتيرتكم",
];
const HONEYMOON_HIGHLIGHTS_AR = (third: string) => [
  "إقامات مُنتقاة بعناية مع مرافق حصرية",
  "وتيرة رومانسية مصممة للأزواج",
  third,
];
const AYURVEDA_INCLUSIONS_AR = [
  "استشارات يومية شخصية مع أطبائنا المتخصصين في الأيورفيدا",
  "ثلاث وجبات نباتية يومية مصممة خصيصًا بما يناسب طبيعة جسمكم",
  "جلسات يوغا صباحية وتأمل موجّه مسائي",
];

export const tours: Tour[] = [
  // ---------------- Adventure & Trekking ----------------
  {
    slug: "kedarkantha-peak",
    collectionSlug: "adventure-trekking",
    title: "Kedarkantha Peak",
    titleAr: "قمة كيدارْكانتا",
    destination: "Uttarakhand, Himalayas",
    destinationAr: "أوتاراخاند، جبال الهيمالايا",
    region: ["North"],
    category: ["Adventure", "Trekking"],
    duration: "Customized to your dates",
    durationAr: CUSTOMIZED_AR,
    travelStyle: ["Comfort", "Premium"],
    bestFor: ["Trekkers", "Adventure Groups"],
    bestForAr: ["المتسلقون", "مجموعات المغامرة"],
    shortDescription:
      "A guided Himalayan trekking expedition in Safari Masti's Premier Adventure & Trekking collection.",
    shortDescriptionAr:
      "رحلة تسلق جبلي في جبال الهيمالايا برفقة مرشدين، ضمن مجموعة سفاري ماستي الفاخرة للمغامرة والتسلق.",
    overview:
      "Kedarkantha Peak is one of the guided trekking expeditions in Safari Masti's Premier Adventure & Trekking Expeditions collection. As with every Safari Masti adventure journey, the route, pace, camping logistics and on-ground support are planned around your group's experience level, fitness and travel dates.",
    overviewAr:
      "قمة كيدارْكانتا واحدة من رحلات التسلق المصحوبة بمرشدين ضمن مجموعة سفاري ماستي الفاخرة للمغامرة والتسلق. وكما هو الحال في كل رحلة مغامرة مع سفاري ماستي، يُخطَّط المسار والوتيرة ولوجستيات التخييم والدعم الميداني بحسب مستوى خبرة مجموعتكم ولياقتها ومواعيد سفركم.",
    heroImages: ["/images/tours/kedarkantha-peak-1.webp"],
    highlights: [
      "Guided by trek leaders with deep regional knowledge",
      "Camping and on-ground logistics fully managed end-to-end",
      "Route and pace planned around your group's experience and fitness",
    ],
    highlightsAr: TREK_HIGHLIGHTS_AR,
    itinerary: [],
    inclusions: [],
    exclusions: [],
    goodToKnow: [],
    seoTitle: "Kedarkantha Peak Trek | Safari Masti",
    seoDescription:
      "Guided Kedarkantha Peak trekking expedition, part of Safari Masti's Premier Adventure & Trekking Expeditions collection.",
    relatedTourSlugs: ["hampta-pass-chandratal-lake", "incredible-ladakh"],
  },
  {
    slug: "hampta-pass-chandratal-lake",
    collectionSlug: "adventure-trekking",
    title: "Hampta Pass & Chandratal Lake",
    titleAr: "ممر هامبتا وبحيرة تشاندراتال",
    destination: "Himachal Pradesh, Himalayas",
    destinationAr: "هيماچال براديش، جبال الهيمالايا",
    region: ["North"],
    category: ["Adventure", "Trekking"],
    duration: "Customized to your dates",
    durationAr: CUSTOMIZED_AR,
    travelStyle: ["Comfort", "Premium"],
    bestFor: ["Trekkers", "Adventure Groups"],
    bestForAr: ["المتسلقون", "مجموعات المغامرة"],
    shortDescription:
      "A crossover trek from lush valleys to the high-altitude Chandratal Lake, in Safari Masti's Adventure & Trekking collection.",
    shortDescriptionAr:
      "رحلة عبور من الوديان الخضراء إلى بحيرة تشاندراتال المرتفعة، ضمن مجموعة سفاري ماستي للمغامرة والتسلق.",
    overview:
      "Hampta Pass & Chandratal Lake is part of Safari Masti's Premier Adventure & Trekking Expeditions collection. Every trek is designed and supported end-to-end around your group's pace, experience and travel dates.",
    overviewAr:
      "ممر هامبتا وبحيرة تشاندراتال جزء من مجموعة سفاري ماستي الفاخرة للمغامرة والتسلق. تُصمَّم كل رحلة تسلق وتُدار بالكامل بحسب وتيرة مجموعتكم وخبرتها ومواعيد سفركم.",
    heroImages: ["/images/tours/hampta-pass-chandratal-lake-1.webp"],
    highlights: [
      "Guided by trek leaders with deep regional knowledge",
      "Camping and on-ground logistics fully managed end-to-end",
      "Route and pace planned around your group's experience and fitness",
    ],
    highlightsAr: TREK_HIGHLIGHTS_AR,
    itinerary: [],
    inclusions: [],
    exclusions: [],
    goodToKnow: [],
    seoTitle: "Hampta Pass & Chandratal Lake Trek | Safari Masti",
    seoDescription:
      "Guided Hampta Pass & Chandratal Lake trek, part of Safari Masti's Premier Adventure & Trekking Expeditions collection.",
    relatedTourSlugs: ["kedarkantha-peak", "markha-valley"],
  },
  {
    slug: "valley-of-flowers-hemkund-sahib",
    collectionSlug: "adventure-trekking",
    title: "Valley of Flowers & Hemkund Sahib",
    titleAr: "وادي الزهور ومعبد هيمكوند صاحب",
    destination: "Uttarakhand, Himalayas",
    destinationAr: "أوتاراخاند، جبال الهيمالايا",
    region: ["North"],
    category: ["Adventure", "Trekking"],
    duration: "Customized to your dates",
    durationAr: CUSTOMIZED_AR,
    travelStyle: ["Comfort", "Premium"],
    bestFor: ["Trekkers", "Nature Lovers"],
    bestForAr: ["المتسلقون", "محبو الطبيعة"],
    shortDescription:
      "A trek through a UNESCO-listed alpine valley and a revered Sikh shrine, in Safari Masti's Adventure & Trekking collection.",
    shortDescriptionAr:
      "رحلة عبر وادٍ جبلي مدرج ضمن مواقع التراث العالمي لليونسكو ومزار سيخي مبجّل، ضمن مجموعة سفاري ماستي للمغامرة والتسلق.",
    overview:
      "Valley of Flowers & Hemkund Sahib is part of Safari Masti's Premier Adventure & Trekking Expeditions collection. Every trek is designed and supported end-to-end around your group's pace, experience and travel dates.",
    overviewAr:
      "وادي الزهور ومعبد هيمكوند صاحب جزء من مجموعة سفاري ماستي الفاخرة للمغامرة والتسلق. تُصمَّم كل رحلة تسلق وتُدار بالكامل بحسب وتيرة مجموعتكم وخبرتها ومواعيد سفركم.",
    heroImages: ["/images/tours/valley-of-flowers-hemkund-sahib-1.webp"],
    highlights: [
      "Guided by trek leaders with deep regional knowledge",
      "Camping and on-ground logistics fully managed end-to-end",
      "Route and pace planned around your group's experience and fitness",
    ],
    highlightsAr: TREK_HIGHLIGHTS_AR,
    itinerary: [],
    inclusions: [],
    exclusions: [],
    goodToKnow: [],
    seoTitle: "Valley of Flowers & Hemkund Sahib Trek | Safari Masti",
    seoDescription:
      "Guided Valley of Flowers & Hemkund Sahib trek, part of Safari Masti's Premier Adventure & Trekking Expeditions collection.",
    relatedTourSlugs: ["kedarkantha-peak", "sandakphu-phalut"],
  },
  {
    slug: "markha-valley",
    collectionSlug: "adventure-trekking",
    title: "Markha Valley",
    titleAr: "وادي ماركا",
    destination: "Ladakh, Himalayas",
    destinationAr: "لداخ، جبال الهيمالايا",
    region: ["North"],
    category: ["Adventure", "Trekking"],
    duration: "Customized to your dates",
    durationAr: CUSTOMIZED_AR,
    travelStyle: ["Comfort", "Premium"],
    bestFor: ["Trekkers", "Adventure Groups"],
    bestForAr: ["المتسلقون", "مجموعات المغامرة"],
    shortDescription:
      "A high-altitude trans-Himalayan trek through Ladakh's Markha Valley, in Safari Masti's Adventure & Trekking collection.",
    shortDescriptionAr:
      "رحلة تسلق عالية الارتفاع عبر جبال الهيمالايا في وادي ماركا بمنطقة لداخ، ضمن مجموعة سفاري ماستي للمغامرة والتسلق.",
    overview:
      "Markha Valley is part of Safari Masti's Premier Adventure & Trekking Expeditions collection. Every trek is designed and supported end-to-end around your group's pace, experience and travel dates.",
    overviewAr:
      "وادي ماركا جزء من مجموعة سفاري ماستي الفاخرة للمغامرة والتسلق. تُصمَّم كل رحلة تسلق وتُدار بالكامل بحسب وتيرة مجموعتكم وخبرتها ومواعيد سفركم.",
    heroImages: ["/images/tours/markha-valley-1.webp"],
    highlights: [
      "Guided by trek leaders with deep regional knowledge",
      "Camping and on-ground logistics fully managed end-to-end",
      "Route and pace planned around your group's experience and fitness",
    ],
    highlightsAr: TREK_HIGHLIGHTS_AR,
    itinerary: [],
    inclusions: [],
    exclusions: [],
    goodToKnow: [],
    seoTitle: "Markha Valley Trek | Safari Masti",
    seoDescription:
      "Guided Markha Valley trek in Ladakh, part of Safari Masti's Premier Adventure & Trekking Expeditions collection.",
    relatedTourSlugs: ["incredible-ladakh", "hampta-pass-chandratal-lake"],
  },
  {
    slug: "sandakphu-phalut",
    collectionSlug: "adventure-trekking",
    title: "Sandakphu & Phalut",
    titleAr: "سانداكفو وفالوت",
    destination: "West Bengal, Eastern Himalayas",
    destinationAr: "غرب البنغال، شرق جبال الهيمالايا",
    region: ["East"],
    category: ["Adventure", "Trekking"],
    duration: "Customized to your dates",
    durationAr: CUSTOMIZED_AR,
    travelStyle: ["Comfort", "Premium"],
    bestFor: ["Trekkers", "Nature Lovers"],
    bestForAr: ["المتسلقون", "محبو الطبيعة"],
    shortDescription:
      "A ridge-line trek to the highest peak of West Bengal, in Safari Masti's Adventure & Trekking collection.",
    shortDescriptionAr:
      "رحلة تسلق على خط تلال نحو أعلى قمة في ولاية غرب البنغال، ضمن مجموعة سفاري ماستي للمغامرة والتسلق.",
    overview:
      "Sandakphu & Phalut is part of Safari Masti's Premier Adventure & Trekking Expeditions collection. Every trek is designed and supported end-to-end around your group's pace, experience and travel dates.",
    overviewAr:
      "سانداكفو وفالوت جزء من مجموعة سفاري ماستي الفاخرة للمغامرة والتسلق. تُصمَّم كل رحلة تسلق وتُدار بالكامل بحسب وتيرة مجموعتكم وخبرتها ومواعيد سفركم.",
    heroImages: ["/images/tours/sandakphu-phalut-1.webp"],
    highlights: [
      "Guided by trek leaders with deep regional knowledge",
      "Camping and on-ground logistics fully managed end-to-end",
      "Route and pace planned around your group's experience and fitness",
    ],
    highlightsAr: TREK_HIGHLIGHTS_AR,
    itinerary: [],
    inclusions: [],
    exclusions: [],
    goodToKnow: [],
    seoTitle: "Sandakphu & Phalut Trek | Safari Masti",
    seoDescription:
      "Guided Sandakphu & Phalut trek, part of Safari Masti's Premier Adventure & Trekking Expeditions collection.",
    relatedTourSlugs: ["valley-of-flowers-hemkund-sahib", "kedarkantha-peak"],
  },
  {
    slug: "incredible-ladakh",
    collectionSlug: "adventure-trekking",
    title: "Incredible Ladakh",
    titleAr: "لداخ المذهلة",
    destination: "Ladakh",
    destinationAr: "لداخ",
    region: ["North"],
    category: ["Adventure", "Trekking"],
    duration: "Customized to your dates",
    durationAr: CUSTOMIZED_AR,
    travelStyle: ["Comfort", "Premium", "Luxury"],
    bestFor: ["Adventure Groups", "Photographers"],
    bestForAr: ["مجموعات المغامرة", "المصورون"],
    shortDescription:
      "A high-altitude journey through Ladakh's monasteries, passes and valleys, in Safari Masti's Adventure & Trekking collection.",
    shortDescriptionAr:
      "رحلة في المرتفعات عبر أديرة لداخ وممراتها ووديانها، ضمن مجموعة سفاري ماستي للمغامرة والتسلق.",
    overview:
      "Incredible Ladakh is part of Safari Masti's Premier Adventure & Trekking Expeditions collection. Every journey is designed and supported end-to-end around your group's pace, interests and travel dates.",
    overviewAr:
      "لداخ المذهلة جزء من مجموعة سفاري ماستي الفاخرة للمغامرة والتسلق. تُصمَّم كل رحلة وتُدار بالكامل بحسب وتيرة مجموعتكم واهتماماتها ومواعيد سفركم.",
    heroImages: ["/images/tours/incredible-ladakh-1.webp"],
    highlights: [
      "Guided by local experts with deep regional knowledge",
      "On-ground logistics fully managed end-to-end",
      "Pace and route planned around your group's interests and comfort",
    ],
    highlightsAr: [
      "بقيادة خبراء محليين ذوي معرفة عميقة بالمنطقة",
      "إدارة كاملة للوجستيات الميدانية من الألف إلى الياء",
      "وتيرة ومسار يُخططان بحسب اهتمامات مجموعتكم وراحتها",
    ],
    itinerary: [],
    inclusions: [],
    exclusions: [],
    goodToKnow: [],
    seoTitle: "Incredible Ladakh Tour | Safari Masti",
    seoDescription:
      "Guided Ladakh journey, part of Safari Masti's Premier Adventure & Trekking Expeditions collection.",
    relatedTourSlugs: ["markha-valley", "kedarkantha-peak"],
  },

  // ---------------- Golden Triangle ----------------
  {
    slug: "golden-triangle",
    collectionSlug: "golden-triangle",
    title: "The Golden Triangle",
    titleAr: "المثلث الذهبي",
    destination: "Delhi · Agra · Jaipur",
    destinationAr: "دلهي · أغرا · جايبور",
    region: ["North"],
    category: ["Heritage", "Culture"],
    duration: "Customized to your dates",
    durationAr: CUSTOMIZED_AR,
    travelStyle: ["Premium", "Luxury"],
    bestFor: ["Culture Seekers", "First-Time Visitors to India"],
    bestForAr: ["الباحثون عن الثقافة", "زوار الهند لأول مرة"],
    shortDescription:
      "A luxury tour through Delhi, Agra and Jaipur — India's most iconic circuit of Mughal grandeur, royal forts and vibrant bazaars.",
    shortDescriptionAr:
      "جولة فاخرة عبر دلهي وأغرا وجايبور — أشهر مسار سياحي في الهند يجمع عظمة العمارة المغولية والقلاع الملكية والأسواق النابضة بالحياة.",
    overview:
      "A luxury tour through Delhi, Agra, and Jaipur — India's most iconic circuit of Mughal grandeur, royal forts, and vibrant bazaars. Safari Masti designs the pace, stays and experiences across all three cities around your travel style and dates.",
    overviewAr:
      "جولة فاخرة عبر دلهي وأغرا وجايبور — أشهر مسار سياحي في الهند يجمع عظمة العمارة المغولية والقلاع الملكية والأسواق النابضة بالحياة. تصمم سفاري ماستي الوتيرة والإقامات والتجارب في المدن الثلاث بحسب أسلوبكم في السفر ومواعيدكم.",
    heroImages: ["/images/tours/golden-triangle-1.webp", "/images/tours/golden-triangle-2.webp"],
    highlights: [
      "Mughal grandeur across Delhi, Agra and Jaipur",
      "Royal forts and palaces on India's most iconic heritage circuit",
      "Vibrant bazaars and local culture in every city",
    ],
    highlightsAr: [
      "عظمة العمارة المغولية في دلهي وأغرا وجايبور",
      "قلاع وقصور ملكية على أشهر مسار تراثي في الهند",
      "أسواق نابضة بالحياة وثقافة محلية في كل مدينة",
    ],
    itinerary: [],
    inclusions: [],
    exclusions: [],
    goodToKnow: [],
    seoTitle: "Golden Triangle Tour — Delhi, Agra, Jaipur | Safari Masti",
    seoDescription:
      "A luxury Golden Triangle tour through Delhi, Agra and Jaipur, curated by Safari Masti.",
    relatedTourSlugs: ["kerala-backwater-retreats", "rajasthan-palace-stays"],
  },

  // ---------------- Luxury & Honeymoon ----------------
  {
    slug: "kerala-backwater-retreats",
    collectionSlug: "luxury-honeymoon",
    title: "Kerala Backwater Retreats",
    titleAr: "إقامات على المسطحات المائية في كيرالا",
    destination: "Kerala",
    destinationAr: "كيرالا",
    region: ["South"],
    category: ["Luxury", "Honeymoon"],
    duration: "Customized to your dates",
    durationAr: CUSTOMIZED_AR,
    travelStyle: ["Premium", "Luxury"],
    bestFor: ["Couples", "Honeymooners"],
    bestForAr: ["الأزواج", "المتزوجون حديثًا"],
    shortDescription:
      "A premium, high-end escape through Kerala's backwaters with curated stays and exclusive amenities.",
    shortDescriptionAr:
      "إجازة راقية عبر المسطحات المائية الهادئة في كيرالا مع إقامات مُنتقاة بعناية ومرافق حصرية.",
    overview:
      "Kerala Backwater Retreats is part of Safari Masti's Luxury & Honeymoon Escapes collection — premium, high-end experiences and romantic getaways with curated stays and exclusive amenities, planned around your dates and preferences.",
    overviewAr:
      "إقامات المسطحات المائية في كيرالا جزء من مجموعة سفاري ماستي للفخامة وشهر العسل — تجارب راقية وإجازات رومانسية مع إقامات مُنتقاة بعناية ومرافق حصرية، تُخطط بحسب مواعيدكم وتفضيلاتكم.",
    heroImages: ["/images/tours/kerala-backwater-retreats-1.webp"],
    highlights: [
      "Curated stays with exclusive amenities",
      "Romantic pacing designed for couples",
      "Local expertise from Safari Masti's home base in Kerala",
    ],
    highlightsAr: HONEYMOON_HIGHLIGHTS_AR("خبرة محلية من مقر سفاري ماستي الرئيسي في كيرالا"),
    itinerary: [],
    inclusions: [],
    exclusions: [],
    goodToKnow: [],
    seoTitle: "Kerala Backwater Honeymoon Retreat | Safari Masti",
    seoDescription:
      "A luxury Kerala backwater retreat, part of Safari Masti's Luxury & Honeymoon Escapes collection.",
    relatedTourSlugs: ["munnar-hill-romance", "goa-beach-escapes"],
  },
  {
    slug: "munnar-hill-romance",
    collectionSlug: "luxury-honeymoon",
    title: "Munnar Hill Romance",
    titleAr: "رومانسية تلال مونار",
    destination: "Kerala",
    destinationAr: "كيرالا",
    region: ["South"],
    category: ["Luxury", "Honeymoon"],
    duration: "Customized to your dates",
    durationAr: CUSTOMIZED_AR,
    travelStyle: ["Premium", "Luxury"],
    bestFor: ["Couples", "Honeymooners"],
    bestForAr: ["الأزواج", "المتزوجون حديثًا"],
    shortDescription:
      "A romantic escape into Munnar's tea-covered hills with curated stays and exclusive amenities.",
    shortDescriptionAr:
      "إجازة رومانسية بين تلال مونار المكسوة بمزارع الشاي، مع إقامات مُنتقاة بعناية ومرافق حصرية.",
    overview:
      "Munnar Hill Romance is part of Safari Masti's Luxury & Honeymoon Escapes collection — premium, high-end experiences and romantic getaways with curated stays and exclusive amenities, planned around your dates and preferences.",
    overviewAr:
      "رومانسية تلال مونار جزء من مجموعة سفاري ماستي للفخامة وشهر العسل — تجارب راقية وإجازات رومانسية مع إقامات مُنتقاة بعناية ومرافق حصرية، تُخطط بحسب مواعيدكم وتفضيلاتكم.",
    heroImages: ["/images/tours/munnar-hill-romance-1.webp"],
    highlights: [
      "Curated stays with exclusive amenities",
      "Romantic pacing designed for couples",
      "Local expertise from Safari Masti's home base in Kerala",
    ],
    highlightsAr: HONEYMOON_HIGHLIGHTS_AR("خبرة محلية من مقر سفاري ماستي الرئيسي في كيرالا"),
    itinerary: [],
    inclusions: [],
    exclusions: [],
    goodToKnow: [],
    seoTitle: "Munnar Hill Romance Honeymoon | Safari Masti",
    seoDescription:
      "A romantic Munnar hills escape, part of Safari Masti's Luxury & Honeymoon Escapes collection.",
    relatedTourSlugs: ["kerala-backwater-retreats", "goa-beach-escapes"],
  },
  {
    slug: "goa-beach-escapes",
    collectionSlug: "luxury-honeymoon",
    title: "Goa Beach Escapes",
    titleAr: "إجازات شواطئ غوا",
    destination: "Goa",
    destinationAr: "غوا",
    region: ["West"],
    category: ["Luxury", "Honeymoon"],
    duration: "Customized to your dates",
    durationAr: CUSTOMIZED_AR,
    travelStyle: ["Premium", "Luxury"],
    bestFor: ["Couples", "Honeymooners"],
    bestForAr: ["الأزواج", "المتزوجون حديثًا"],
    shortDescription: "A premium beach escape in Goa with curated stays and exclusive amenities.",
    shortDescriptionAr: "إجازة شاطئية راقية في غوا مع إقامات مُنتقاة بعناية ومرافق حصرية.",
    overview:
      "Goa Beach Escapes is part of Safari Masti's Luxury & Honeymoon Escapes collection — premium, high-end experiences and romantic getaways with curated stays and exclusive amenities, planned around your dates and preferences.",
    overviewAr:
      "إجازات شواطئ غوا جزء من مجموعة سفاري ماستي للفخامة وشهر العسل — تجارب راقية وإجازات رومانسية مع إقامات مُنتقاة بعناية ومرافق حصرية، تُخطط بحسب مواعيدكم وتفضيلاتكم.",
    heroImages: ["/images/tours/goa-beach-escapes-1.webp"],
    highlights: [
      "Curated stays with exclusive amenities",
      "Romantic pacing designed for couples",
      "Beachfront relaxation paired with local experiences",
    ],
    highlightsAr: HONEYMOON_HIGHLIGHTS_AR("استرخاء على الشاطئ إلى جانب تجارب محلية أصيلة"),
    itinerary: [],
    inclusions: [],
    exclusions: [],
    goodToKnow: [],
    seoTitle: "Goa Beach Honeymoon Escape | Safari Masti",
    seoDescription:
      "A luxury Goa beach escape, part of Safari Masti's Luxury & Honeymoon Escapes collection.",
    relatedTourSlugs: ["kerala-backwater-retreats", "munnar-hill-romance"],
  },
  {
    slug: "rajasthan-palace-stays",
    collectionSlug: "luxury-honeymoon",
    title: "Rajasthan Palace Stays",
    titleAr: "إقامات القصور في راجستان",
    destination: "Rajasthan",
    destinationAr: "راجستان",
    region: ["North", "West"],
    category: ["Luxury", "Honeymoon"],
    duration: "Customized to your dates",
    durationAr: CUSTOMIZED_AR,
    travelStyle: ["Premium", "Luxury"],
    bestFor: ["Couples", "Honeymooners"],
    bestForAr: ["الأزواج", "المتزوجون حديثًا"],
    shortDescription:
      "A royal escape through Rajasthan's palace stays with curated stays and exclusive amenities.",
    shortDescriptionAr:
      "إجازة ملكية عبر إقامات القصور في راجستان، مع إقامات مُنتقاة بعناية ومرافق حصرية.",
    overview:
      "Rajasthan Palace Stays is part of Safari Masti's Luxury & Honeymoon Escapes collection — premium, high-end experiences and romantic getaways with curated stays and exclusive amenities, planned around your dates and preferences.",
    overviewAr:
      "إقامات قصور راجستان جزء من مجموعة سفاري ماستي للفخامة وشهر العسل — تجارب راقية وإجازات رومانسية مع إقامات مُنتقاة بعناية ومرافق حصرية، تُخطط بحسب مواعيدكم وتفضيلاتكم.",
    heroImages: ["/images/tours/rajasthan-palace-stays-1.webp"],
    highlights: [
      "Curated palace stays with exclusive amenities",
      "Romantic pacing designed for couples",
      "Royal heritage woven through every stop",
    ],
    highlightsAr: [
      "إقامات قصور مُنتقاة بعناية مع مرافق حصرية",
      "وتيرة رومانسية مصممة للأزواج",
      "تراث ملكي يمتزج بكل محطة في الرحلة",
    ],
    itinerary: [],
    inclusions: [],
    exclusions: [],
    goodToKnow: [],
    seoTitle: "Rajasthan Palace Stay Honeymoon | Safari Masti",
    seoDescription:
      "A royal Rajasthan palace escape, part of Safari Masti's Luxury & Honeymoon Escapes collection.",
    relatedTourSlugs: ["golden-triangle", "goa-beach-escapes"],
  },

  // ---------------- Northeast ----------------
  {
    slug: "meghalaya-assam",
    collectionSlug: "northeast",
    title: "Meghalaya & Assam",
    titleAr: "ميغالايا وآسام",
    destination: "Meghalaya · Assam",
    destinationAr: "ميغالايا · آسام",
    region: ["Northeast"],
    category: ["Northeast", "Nature"],
    duration: "Customized to your dates",
    durationAr: CUSTOMIZED_AR,
    travelStyle: ["Comfort", "Premium"],
    bestFor: ["Nature Lovers", "Culture Seekers"],
    bestForAr: ["محبو الطبيعة", "الباحثون عن الثقافة"],
    shortDescription:
      "Known as the Scotland of the East — living root bridges, waterfalls and rolling hills across Meghalaya and Assam.",
    shortDescriptionAr:
      "المعروفة بـ«اسكتلندا الشرق» — جسور الجذور الحية والشلالات والتلال المتموجة في ميغالايا وآسام.",
    overview:
      "Meghalaya & Assam — the Scotland of the East — is part of Safari Masti's Hidden Jewels of the Northeast collection. Every journey through this untouched corner of India is planned around your pace and interests.",
    overviewAr:
      "ميغالايا وآسام — «اسكتلندا الشرق» — جزء من مجموعة سفاري ماستي «جواهر الشمال الشرقي الخفية». تُخطط كل رحلة إلى هذا الركن البكر من الهند بحسب وتيرتكم واهتماماتكم.",
    heroImages: ["/images/tours/meghalaya-assam-1.webp"],
    highlights: [
      "Explore the Scotland of the East at your own pace",
      "Local expertise across Meghalaya and Assam",
      "End-to-end logistics for a lesser-travelled region",
    ],
    highlightsAr: [
      "استكشاف «اسكتلندا الشرق» بالوتيرة التي تناسبكم",
      "خبرة محلية في ميغالايا وآسام",
      "لوجستيات متكاملة لمنطقة أقل ازدحامًا بالسياح",
    ],
    itinerary: [],
    inclusions: [],
    exclusions: [],
    goodToKnow: [],
    seoTitle: "Meghalaya & Assam Tour Package | Safari Masti",
    seoDescription:
      "Meghalaya & Assam, the Scotland of the East, part of Safari Masti's Hidden Jewels of the Northeast collection.",
    relatedTourSlugs: ["arunachal-pradesh-assam"],
  },
  {
    slug: "arunachal-pradesh-assam",
    collectionSlug: "northeast",
    title: "Arunachal Pradesh & Assam",
    titleAr: "أروناتشال براديش وآسام",
    destination: "Arunachal Pradesh · Assam",
    destinationAr: "أروناتشال براديش · آسام",
    region: ["Northeast"],
    category: ["Northeast", "Nature"],
    duration: "Customized to your dates",
    durationAr: CUSTOMIZED_AR,
    travelStyle: ["Comfort", "Premium"],
    bestFor: ["Nature Lovers", "Adventure Groups"],
    bestForAr: ["محبو الطبيعة", "مجموعات المغامرة"],
    shortDescription:
      "Known as the Land of the Dawn-Lit Peaks — remote mountains and valleys across Arunachal Pradesh and Assam.",
    shortDescriptionAr:
      "المعروفة بـ«أرض القمم المضيئة عند الفجر» — جبال ووديان نائية في أروناتشال براديش وآسام.",
    overview:
      "Arunachal Pradesh & Assam — the Land of the Dawn-Lit Peaks — is part of Safari Masti's Hidden Jewels of the Northeast collection. Every journey through this untouched corner of India is planned around your pace and interests.",
    overviewAr:
      "أروناتشال براديش وآسام — «أرض القمم المضيئة عند الفجر» — جزء من مجموعة سفاري ماستي «جواهر الشمال الشرقي الخفية». تُخطط كل رحلة إلى هذا الركن البكر من الهند بحسب وتيرتكم واهتماماتكم.",
    heroImages: ["/images/tours/arunachal-pradesh-assam-1.webp"],
    highlights: [
      "Explore the Land of the Dawn-Lit Peaks at your own pace",
      "Local expertise across Arunachal Pradesh and Assam",
      "End-to-end logistics for a lesser-travelled region",
    ],
    highlightsAr: [
      "استكشاف «أرض القمم المضيئة عند الفجر» بالوتيرة التي تناسبكم",
      "خبرة محلية في أروناتشال براديش وآسام",
      "لوجستيات متكاملة لمنطقة أقل ازدحامًا بالسياح",
    ],
    itinerary: [],
    inclusions: [],
    exclusions: [],
    goodToKnow: [],
    seoTitle: "Arunachal Pradesh & Assam Tour Package | Safari Masti",
    seoDescription:
      "Arunachal Pradesh & Assam, the Land of the Dawn-Lit Peaks, part of Safari Masti's Hidden Jewels of the Northeast collection.",
    relatedTourSlugs: ["meghalaya-assam"],
  },

  // ---------------- Wildlife Safaris ----------------
  {
    slug: "kanha-bandhavgarh",
    collectionSlug: "wildlife-safaris",
    title: "Kanha & Bandhavgarh",
    titleAr: "كانها وبانداغفار",
    destination: "Madhya Pradesh",
    destinationAr: "ماديا براديش",
    region: ["Central"],
    category: ["Wildlife", "Safari"],
    duration: "Customized to your dates",
    durationAr: CUSTOMIZED_AR,
    travelStyle: ["Comfort", "Premium"],
    bestFor: ["Wildlife Enthusiasts", "Photographers"],
    bestForAr: ["عشاق الحياة البرية", "المصورون"],
    shortDescription: "A guided safari through the tiger reserves of Kanha and Bandhavgarh.",
    shortDescriptionAr: "رحلة سفاري برفقة مرشدين عبر محميات النمور في كانها وبانداغفار.",
    overview:
      "Kanha & Bandhavgarh is part of Safari Masti's Premier National Park Safaris collection. Safaris, stays and logistics are planned end-to-end around your travel dates.",
    overviewAr:
      "كانها وبانداغفار جزء من مجموعة سفاري ماستي الفاخرة لرحلات السفاري في المحميات الوطنية. تُخطط رحلات السفاري والإقامات واللوجستيات بالكامل بحسب مواعيد سفركم.",
    heroImages: ["/images/tours/kanha-bandhavgarh-1.webp"],
    highlights: [
      "Guided safaris across two celebrated tiger reserves",
      "End-to-end logistics and on-ground support",
      "Planned around your travel dates and pace",
    ],
    highlightsAr: SAFARI_HIGHLIGHTS_AR("رحلات سفاري بمرافقة مرشدين في محميتين شهيرتين للنمور"),
    itinerary: [],
    inclusions: [],
    exclusions: [],
    goodToKnow: [],
    seoTitle: "Kanha & Bandhavgarh Safari | Safari Masti",
    seoDescription:
      "Kanha & Bandhavgarh wildlife safari, part of Safari Masti's Premier National Park Safaris collection.",
    relatedTourSlugs: ["ranthambore-national-park", "jim-corbett-national-park"],
  },
  {
    slug: "kaziranga-national-park",
    collectionSlug: "wildlife-safaris",
    title: "Kaziranga National Park",
    titleAr: "محمية كازيرانغا الوطنية",
    destination: "Assam",
    destinationAr: "آسام",
    region: ["Northeast"],
    category: ["Wildlife", "Safari"],
    duration: "Customized to your dates",
    durationAr: CUSTOMIZED_AR,
    travelStyle: ["Comfort", "Premium"],
    bestFor: ["Wildlife Enthusiasts", "Photographers"],
    bestForAr: ["عشاق الحياة البرية", "المصورون"],
    shortDescription: "A guided safari through Kaziranga, home to the great one-horned rhinoceros.",
    shortDescriptionAr: "رحلة سفاري برفقة مرشدين في كازيرانغا، موطن وحيد القرن ذي القرن الواحد الكبير.",
    overview:
      "Kaziranga National Park is part of Safari Masti's Premier National Park Safaris collection. Safaris, stays and logistics are planned end-to-end around your travel dates.",
    overviewAr:
      "محمية كازيرانغا الوطنية جزء من مجموعة سفاري ماستي الفاخرة لرحلات السفاري في المحميات الوطنية. تُخطط رحلات السفاري والإقامات واللوجستيات بالكامل بحسب مواعيد سفركم.",
    heroImages: ["/images/tours/kaziranga-national-park-1.webp"],
    highlights: [
      "Guided safaris through one of India's premier national parks",
      "End-to-end logistics and on-ground support",
      "Planned around your travel dates and pace",
    ],
    highlightsAr: SAFARI_HIGHLIGHTS_AR("رحلات سفاري بمرافقة مرشدين في إحدى أبرز المحميات الوطنية في الهند"),
    itinerary: [],
    inclusions: [],
    exclusions: [],
    goodToKnow: [],
    seoTitle: "Kaziranga National Park Safari | Safari Masti",
    seoDescription:
      "Kaziranga National Park wildlife safari, part of Safari Masti's Premier National Park Safaris collection.",
    relatedTourSlugs: ["kanha-bandhavgarh", "meghalaya-assam"],
  },
  {
    slug: "ranthambore-national-park",
    collectionSlug: "wildlife-safaris",
    title: "Ranthambore National Park",
    titleAr: "محمية رانثامبور الوطنية",
    destination: "Rajasthan",
    destinationAr: "راجستان",
    region: ["North", "West"],
    category: ["Wildlife", "Safari"],
    duration: "Customized to your dates",
    durationAr: CUSTOMIZED_AR,
    travelStyle: ["Comfort", "Premium"],
    bestFor: ["Wildlife Enthusiasts", "Photographers"],
    bestForAr: ["عشاق الحياة البرية", "المصورون"],
    shortDescription: "A guided tiger safari through Ranthambore National Park.",
    shortDescriptionAr: "رحلة سفاري لمشاهدة النمور برفقة مرشدين في محمية رانثامبور الوطنية.",
    overview:
      "Ranthambore National Park is part of Safari Masti's Premier National Park Safaris collection. Safaris, stays and logistics are planned end-to-end around your travel dates.",
    overviewAr:
      "محمية رانثامبور الوطنية جزء من مجموعة سفاري ماستي الفاخرة لرحلات السفاري في المحميات الوطنية. تُخطط رحلات السفاري والإقامات واللوجستيات بالكامل بحسب مواعيد سفركم.",
    heroImages: ["/images/tours/ranthambore-national-park-1.webp"],
    highlights: [
      "Guided tiger safaris in one of India's best-known reserves",
      "End-to-end logistics and on-ground support",
      "Planned around your travel dates and pace",
    ],
    highlightsAr: SAFARI_HIGHLIGHTS_AR("رحلات سفاري لمشاهدة النمور بمرافقة مرشدين في إحدى أشهر المحميات في الهند"),
    itinerary: [],
    inclusions: [],
    exclusions: [],
    goodToKnow: [],
    seoTitle: "Ranthambore National Park Safari | Safari Masti",
    seoDescription:
      "Ranthambore National Park wildlife safari, part of Safari Masti's Premier National Park Safaris collection.",
    relatedTourSlugs: ["kanha-bandhavgarh", "golden-triangle"],
  },
  {
    slug: "jim-corbett-national-park",
    collectionSlug: "wildlife-safaris",
    title: "Jim Corbett National Park",
    titleAr: "محمية جيم كوربيت الوطنية",
    destination: "Uttarakhand",
    destinationAr: "أوتاراخاند",
    region: ["North"],
    category: ["Wildlife", "Safari"],
    duration: "Customized to your dates",
    durationAr: CUSTOMIZED_AR,
    travelStyle: ["Comfort", "Premium"],
    bestFor: ["Wildlife Enthusiasts", "Photographers"],
    bestForAr: ["عشاق الحياة البرية", "المصورون"],
    shortDescription: "A guided safari through India's oldest national park.",
    shortDescriptionAr: "رحلة سفاري برفقة مرشدين في أقدم محمية وطنية في الهند.",
    overview:
      "Jim Corbett National Park is part of Safari Masti's Premier National Park Safaris collection. Safaris, stays and logistics are planned end-to-end around your travel dates.",
    overviewAr:
      "محمية جيم كوربيت الوطنية جزء من مجموعة سفاري ماستي الفاخرة لرحلات السفاري في المحميات الوطنية. تُخطط رحلات السفاري والإقامات واللوجستيات بالكامل بحسب مواعيد سفركم.",
    heroImages: ["/images/tours/jim-corbett-national-park-1.webp"],
    highlights: [
      "Guided safaris through India's oldest national park",
      "End-to-end logistics and on-ground support",
      "Planned around your travel dates and pace",
    ],
    highlightsAr: SAFARI_HIGHLIGHTS_AR("رحلات سفاري بمرافقة مرشدين في أقدم محمية وطنية بالهند"),
    itinerary: [],
    inclusions: [],
    exclusions: [],
    goodToKnow: [],
    seoTitle: "Jim Corbett National Park Safari | Safari Masti",
    seoDescription:
      "Jim Corbett National Park wildlife safari, part of Safari Masti's Premier National Park Safaris collection.",
    relatedTourSlugs: ["kanha-bandhavgarh", "kedarkantha-peak"],
  },

  // ---------------- Jewels of the South ----------------
  {
    slug: "kerala",
    collectionSlug: "jewels-of-the-south",
    title: "Kerala",
    titleAr: "كيرالا",
    destination: "Kerala",
    destinationAr: "كيرالا",
    region: ["South"],
    category: ["South India", "Heritage"],
    duration: "Customized to your dates",
    durationAr: CUSTOMIZED_AR,
    travelStyle: ["Budget Friendly", "Comfort"],
    bestFor: ["Families", "Nature Lovers"],
    bestForAr: ["العائلات", "محبو الطبيعة"],
    shortDescription:
      "Customized, budget-friendly journeys through Kerala's hills and backwaters, part of Jewels of the South.",
    shortDescriptionAr:
      "رحلات مخصصة ومناسبة للميزانية عبر تلال كيرالا ومسطحاتها المائية، ضمن مجموعة جواهر الجنوب.",
    overview:
      "Kerala is part of Safari Masti's Jewels of the South collection — customized, budget-friendly tours from misty hills and backwaters to sunny beaches and royal heritage, planned around your travel dates and style.",
    overviewAr:
      "كيرالا جزء من مجموعة سفاري ماستي «جواهر الجنوب» — جولات مخصصة ومناسبة للميزانية، من التلال الضبابية والمسطحات المائية الهادئة إلى الشواطئ المشمسة والتراث الملكي، تُخطط بحسب مواعيد سفركم وأسلوبكم.",
    heroImages: ["/images/tours/kerala-1.webp"],
    highlights: [
      "Local expertise from Safari Masti's home base in Kerala",
      "Budget-flexible planning without compromising quality",
      "Misty hills and backwaters woven into one journey",
    ],
    highlightsAr: [
      "خبرة محلية من مقر سفاري ماستي الرئيسي في كيرالا",
      "تخطيط مرن يناسب الميزانية دون المساس بالجودة",
      "تلال ضبابية ومسطحات مائية هادئة تلتقي في رحلة واحدة",
    ],
    itinerary: [],
    inclusions: [],
    exclusions: [],
    goodToKnow: [],
    seoTitle: "Kerala Tour Packages | Safari Masti",
    seoDescription: "Kerala tours, part of Safari Masti's Jewels of the South collection.",
    relatedTourSlugs: ["kerala-backwater-retreats", "munnar-hill-romance"],
  },
  {
    slug: "tamil-nadu",
    collectionSlug: "jewels-of-the-south",
    title: "Tamil Nadu",
    titleAr: "تاميل نادو",
    destination: "Tamil Nadu",
    destinationAr: "تاميل نادو",
    region: ["South"],
    category: ["South India", "Heritage"],
    duration: "Customized to your dates",
    durationAr: CUSTOMIZED_AR,
    travelStyle: ["Budget Friendly", "Comfort"],
    bestFor: ["Families", "Culture Seekers"],
    bestForAr: ["العائلات", "الباحثون عن الثقافة"],
    shortDescription:
      "Customized, budget-friendly journeys through Tamil Nadu's heritage and temple towns, part of Jewels of the South.",
    shortDescriptionAr:
      "رحلات مخصصة ومناسبة للميزانية عبر بلدات تاميل نادو التراثية ومعابدها، ضمن مجموعة جواهر الجنوب.",
    overview:
      "Tamil Nadu is part of Safari Masti's Jewels of the South collection — customized, budget-friendly tours from misty hills and backwaters to sunny beaches and royal heritage, planned around your travel dates and style.",
    overviewAr:
      "تاميل نادو جزء من مجموعة سفاري ماستي «جواهر الجنوب» — جولات مخصصة ومناسبة للميزانية، من التلال الضبابية والمسطحات المائية الهادئة إلى الشواطئ المشمسة والتراث الملكي، تُخطط بحسب مواعيد سفركم وأسلوبكم.",
    heroImages: ["/images/tours/tamil-nadu-1.webp"],
    highlights: [
      "Royal and temple heritage across Tamil Nadu",
      "Budget-flexible planning without compromising quality",
      "End-to-end logistics for a seamless journey",
    ],
    highlightsAr: [
      "تراث ملكي ومعابد أثرية في مختلف أنحاء تاميل نادو",
      "تخطيط مرن يناسب الميزانية دون المساس بالجودة",
      "لوجستيات متكاملة لرحلة سلسة",
    ],
    itinerary: [],
    inclusions: [],
    exclusions: [],
    goodToKnow: [],
    seoTitle: "Tamil Nadu Tour Packages | Safari Masti",
    seoDescription: "Tamil Nadu tours, part of Safari Masti's Jewels of the South collection.",
    relatedTourSlugs: ["tamil-nadu-kerala-trails", "kerala"],
  },
  {
    slug: "karnataka",
    collectionSlug: "jewels-of-the-south",
    title: "Karnataka",
    titleAr: "كارناتاكا",
    destination: "Karnataka",
    destinationAr: "كارناتاكا",
    region: ["South"],
    category: ["South India", "Heritage"],
    duration: "Customized to your dates",
    durationAr: CUSTOMIZED_AR,
    travelStyle: ["Budget Friendly", "Comfort"],
    bestFor: ["Families", "Culture Seekers"],
    bestForAr: ["العائلات", "الباحثون عن الثقافة"],
    shortDescription:
      "Customized, budget-friendly journeys through Karnataka, part of Jewels of the South.",
    shortDescriptionAr:
      "رحلات مخصصة ومناسبة للميزانية عبر كارناتاكا، ضمن مجموعة جواهر الجنوب.",
    overview:
      "Karnataka is part of Safari Masti's Jewels of the South collection — customized, budget-friendly tours from misty hills and backwaters to sunny beaches and royal heritage, planned around your travel dates and style.",
    overviewAr:
      "كارناتاكا جزء من مجموعة سفاري ماستي «جواهر الجنوب» — جولات مخصصة ومناسبة للميزانية، من التلال الضبابية والمسطحات المائية الهادئة إلى الشواطئ المشمسة والتراث الملكي، تُخطط بحسب مواعيد سفركم وأسلوبكم.",
    heroImages: ["/images/tours/karnataka-1.webp"],
    highlights: [
      "Local expertise across South India",
      "Budget-flexible planning without compromising quality",
      "End-to-end logistics for a seamless journey",
    ],
    highlightsAr: [
      "خبرة محلية في مختلف أنحاء جنوب الهند",
      "تخطيط مرن يناسب الميزانية دون المساس بالجودة",
      "لوجستيات متكاملة لرحلة سلسة",
    ],
    itinerary: [],
    inclusions: [],
    exclusions: [],
    goodToKnow: [],
    seoTitle: "Karnataka Tour Packages | Safari Masti",
    seoDescription: "Karnataka tours, part of Safari Masti's Jewels of the South collection.",
    relatedTourSlugs: ["kerala", "hyderabad"],
  },
  {
    slug: "hyderabad",
    collectionSlug: "jewels-of-the-south",
    title: "Hyderabad",
    titleAr: "حيدر آباد",
    destination: "Hyderabad, Telangana",
    destinationAr: "حيدر آباد، تيلانغانا",
    region: ["South"],
    category: ["South India", "Heritage"],
    duration: "Customized to your dates",
    durationAr: CUSTOMIZED_AR,
    travelStyle: ["Budget Friendly", "Comfort"],
    bestFor: ["Families", "Culture Seekers"],
    bestForAr: ["العائلات", "الباحثون عن الثقافة"],
    shortDescription:
      "Customized, budget-friendly journeys through Hyderabad, part of Jewels of the South.",
    shortDescriptionAr:
      "رحلات مخصصة ومناسبة للميزانية عبر حيدر آباد، ضمن مجموعة جواهر الجنوب.",
    overview:
      "Hyderabad is part of Safari Masti's Jewels of the South collection — customized, budget-friendly tours from misty hills and backwaters to sunny beaches and royal heritage, planned around your travel dates and style.",
    overviewAr:
      "حيدر آباد جزء من مجموعة سفاري ماستي «جواهر الجنوب» — جولات مخصصة ومناسبة للميزانية، من التلال الضبابية والمسطحات المائية الهادئة إلى الشواطئ المشمسة والتراث الملكي، تُخطط بحسب مواعيد سفركم وأسلوبكم.",
    heroImages: ["/images/tours/hyderabad-1.webp"],
    highlights: [
      "Local expertise across South India",
      "Budget-flexible planning without compromising quality",
      "End-to-end logistics for a seamless journey",
    ],
    highlightsAr: [
      "خبرة محلية في مختلف أنحاء جنوب الهند",
      "تخطيط مرن يناسب الميزانية دون المساس بالجودة",
      "لوجستيات متكاملة لرحلة سلسة",
    ],
    itinerary: [],
    inclusions: [],
    exclusions: [],
    goodToKnow: [],
    seoTitle: "Hyderabad Tour Packages | Safari Masti",
    seoDescription: "Hyderabad tours, part of Safari Masti's Jewels of the South collection.",
    relatedTourSlugs: ["karnataka", "kerala"],
  },
  {
    slug: "goa",
    collectionSlug: "jewels-of-the-south",
    title: "Goa",
    titleAr: "غوا",
    destination: "Goa",
    destinationAr: "غوا",
    region: ["West"],
    category: ["South India", "Beaches"],
    duration: "Customized to your dates",
    durationAr: CUSTOMIZED_AR,
    travelStyle: ["Budget Friendly", "Comfort"],
    bestFor: ["Families", "Beach Lovers"],
    bestForAr: ["العائلات", "محبو الشواطئ"],
    shortDescription: "Customized, budget-friendly beach journeys through Goa, part of Jewels of the South.",
    shortDescriptionAr: "رحلات شاطئية مخصصة ومناسبة للميزانية عبر غوا، ضمن مجموعة جواهر الجنوب.",
    overview:
      "Goa is part of Safari Masti's Jewels of the South collection — customized, budget-friendly tours from misty hills and backwaters to sunny beaches and royal heritage, planned around your travel dates and style.",
    overviewAr:
      "غوا جزء من مجموعة سفاري ماستي «جواهر الجنوب» — جولات مخصصة ومناسبة للميزانية، من التلال الضبابية والمسطحات المائية الهادئة إلى الشواطئ المشمسة والتراث الملكي، تُخطط بحسب مواعيد سفركم وأسلوبكم.",
    heroImages: ["/images/tours/goa-1.webp"],
    highlights: [
      "Sunny beaches paired with local culture",
      "Budget-flexible planning without compromising quality",
      "End-to-end logistics for a seamless journey",
    ],
    highlightsAr: [
      "شواطئ مشمسة إلى جانب ثقافة محلية أصيلة",
      "تخطيط مرن يناسب الميزانية دون المساس بالجودة",
      "لوجستيات متكاملة لرحلة سلسة",
    ],
    itinerary: [],
    inclusions: [],
    exclusions: [],
    goodToKnow: [],
    seoTitle: "Goa Tour Packages | Safari Masti",
    seoDescription: "Goa tours, part of Safari Masti's Jewels of the South collection.",
    relatedTourSlugs: ["goa-beach-escapes", "kerala"],
  },

  // ---------------- Divine Trails ----------------
  {
    slug: "ganges-himalayan-foothills",
    collectionSlug: "divine-trails",
    title: "Ganges & Himalayan Foothills",
    titleAr: "نهر الغانج وسفوح جبال الهيمالايا",
    destination: "Varanasi · Ayodhya · Prayagraj · Haridwar · Rishikesh · Badrinath · Kedarnath",
    destinationAr: "فاراناسي · أيوديا · براياغراج · هاريدوار · ريشيكيش · بادريناث · كيدارناث",
    region: ["North"],
    category: ["Spiritual", "Temple Trail"],
    duration: "Customized to your dates",
    durationAr: CUSTOMIZED_AR,
    travelStyle: ["Comfort", "Premium"],
    bestFor: ["Pilgrims", "Spiritual Travelers"],
    bestForAr: ["الحجاج", "المسافرون الروحانيون"],
    shortDescription:
      "A pilgrimage trail along the Ganges and Himalayan foothills, part of the Divine Trails collection.",
    shortDescriptionAr:
      "مسار حج على ضفاف نهر الغانج وسفوح جبال الهيمالايا، ضمن مجموعة المسارات المقدسة.",
    overview:
      "The Ganges & Himalayan Foothills trail is part of Safari Masti's Divine Trails — Sacred Temple Tours collection, covering Varanasi, Ayodhya, Prayagraj, Haridwar, Rishikesh, Badrinath and Kedarnath. The route and pace are planned around your travel dates.",
    overviewAr:
      "مسار نهر الغانج وسفوح جبال الهيمالايا جزء من مجموعة سفاري ماستي «المسارات المقدسة — جولات المعابد الدينية»، ويشمل فاراناسي وأيوديا وبراياغراج وهاريدوار وريشيكيش وبادريناث وكيدارناث. يُخطط المسار والوتيرة بحسب مواعيد سفركم.",
    heroImages: ["/images/tours/ganges-himalayan-foothills-1.webp"],
    highlights: [
      "Sacred stops include Varanasi, Ayodhya and Prayagraj",
      "Himalayan foothill shrines at Haridwar, Rishikesh, Badrinath and Kedarnath",
      "End-to-end logistics for a seamless pilgrimage",
    ],
    highlightsAr: [
      "محطات مقدسة تشمل فاراناسي وأيوديا وبراياغراج",
      "أضرحة سفوح جبال الهيمالايا في هاريدوار وريشيكيش وبادريناث وكيدارناث",
      "لوجستيات متكاملة لرحلة حج سلسة",
    ],
    itinerary: [],
    inclusions: [],
    exclusions: [],
    goodToKnow: [],
    seoTitle: "Varanasi, Rishikesh & Kedarnath Pilgrimage Tour | Safari Masti",
    seoDescription:
      "A Ganges & Himalayan Foothills pilgrimage trail across Varanasi, Ayodhya, Prayagraj, Haridwar, Rishikesh, Badrinath and Kedarnath, curated by Safari Masti.",
    relatedTourSlugs: ["tamil-nadu-kerala-trails"],
  },
  {
    slug: "tamil-nadu-kerala-trails",
    collectionSlug: "divine-trails",
    title: "Tamil Nadu & Kerala Trails",
    titleAr: "مسارات تاميل نادو وكيرالا",
    destination: "Madurai · Thanjavur · Rameswaram · Thiruvananthapuram · Guruvayur · Chottanikara",
    destinationAr: "مادوراي · تانجافور · راميسوارام · تيروفانانثابورام · غوروفايور · تشوتانيكارا",
    region: ["South"],
    category: ["Spiritual", "Temple Trail"],
    duration: "Customized to your dates",
    durationAr: CUSTOMIZED_AR,
    travelStyle: ["Comfort", "Premium"],
    bestFor: ["Pilgrims", "Spiritual Travelers"],
    bestForAr: ["الحجاج", "المسافرون الروحانيون"],
    shortDescription:
      "A temple pilgrimage trail across Tamil Nadu and Kerala, part of the Divine Trails collection.",
    shortDescriptionAr:
      "مسار حج للمعابد عبر تاميل نادو وكيرالا، ضمن مجموعة المسارات المقدسة.",
    overview:
      "The Tamil Nadu & Kerala Trails is part of Safari Masti's Divine Trails — Sacred Temple Tours collection, covering the Meenakshi Amman, Brihadeeswarar and Ramanathaswamy temples in Tamil Nadu, and the Padmanabhaswamy, Guruvayur and Chottanikara temples in Kerala. The route and pace are planned around your travel dates.",
    overviewAr:
      "مسارات تاميل نادو وكيرالا جزء من مجموعة سفاري ماستي «المسارات المقدسة — جولات المعابد الدينية»، وتشمل معابد مينا كشي أمّان وبريهاديسوارار ورامَاناثاسوامي في تاميل نادو، ومعابد بادمانابهاسوامي وغوروفايور وتشوتانيكارا في كيرالا. يُخطط المسار والوتيرة بحسب مواعيد سفركم.",
    heroImages: ["/images/tours/tamil-nadu-kerala-trails-1.webp"],
    highlights: [
      "Meenakshi Amman, Brihadeeswarar and Ramanathaswamy temples",
      "Padmanabhaswamy, Guruvayur and Chottanikara temples",
      "End-to-end logistics for a seamless pilgrimage",
    ],
    highlightsAr: [
      "معابد مينا كشي أمّان وبريهاديسوارار ورامَاناثاسوامي",
      "معابد بادمانابهاسوامي وغوروفايور وتشوتانيكارا",
      "لوجستيات متكاملة لرحلة حج سلسة",
    ],
    itinerary: [],
    inclusions: [],
    exclusions: [],
    goodToKnow: [],
    seoTitle: "Tamil Nadu & Kerala Temple Trail | Safari Masti",
    seoDescription:
      "A Tamil Nadu & Kerala temple pilgrimage trail across Meenakshi Amman, Brihadeeswarar, Ramanathaswamy, Padmanabhaswamy, Guruvayur and Chottanikara, curated by Safari Masti.",
    relatedTourSlugs: ["ganges-himalayan-foothills", "kerala"],
  },

  // ---------------- Kerala Ayurveda Rejuvenation ----------------
  {
    slug: "essential-body-refresh",
    collectionSlug: "kerala-ayurveda",
    title: "Essential Body Refresh",
    titleAr: "الانتعاش الأساسي للجسم",
    destination: "Kerala",
    destinationAr: "كيرالا",
    region: ["South"],
    category: ["Wellness", "Ayurveda"],
    duration: "3–5 Days",
    durationAr: "من ٣ إلى ٥ أيام",
    travelStyle: ["Premium"],
    bestFor: ["Busy Individuals", "Short Wellness Breaks"],
    bestForAr: ["الأشخاص المشغولون", "إجازات العافية القصيرة"],
    shortDescription:
      "A quick wellness getaway designed to dissolve superficial stress, relieve muscle tension, and recharge your energy levels.",
    shortDescriptionAr:
      "إجازة عافية سريعة مصممة لتبديد التوتر السطحي، وتخفيف شد العضلات، واستعادة طاقتكم.",
    overview:
      "Essential Body Refresh is a quick wellness getaway designed to dissolve superficial stress, relieve muscle tension, and recharge your energy levels — part of Safari Masti's Kerala Ayurveda Rejuvenation packages, prescribed by certified traditional doctors and performed by experienced therapists.",
    overviewAr:
      "الانتعاش الأساسي للجسم إجازة عافية سريعة مصممة لتبديد التوتر السطحي وتخفيف شد العضلات واستعادة طاقتكم — ضمن باقات سفاري ماستي لتجديد الحيوية بطب الأيورفيدا في كيرالا، والتي يصفها أطباء تقليديون معتمدون وينفذها معالجون ذوو خبرة.",
    heroImages: ["/images/tours/essential-body-refresh-1.webp"],
    highlights: ["Full-body oil massage (Abhyangam)", "Soothing warm herbal steam baths"],
    highlightsAr: ["تدليك زيتي كامل للجسم (أبهيانغام)", "حمامات بخار عشبية دافئة ومهدئة"],
    itinerary: [],
    inclusions: [
      "Daily personalized consultations with our Ayurvedic doctors",
      "Three tailored vegetarian meals daily, designed for your body type",
      "Morning yoga sessions and evening guided meditation",
    ],
    inclusionsAr: AYURVEDA_INCLUSIONS_AR,
    exclusions: [],
    goodToKnow: [],
    seoTitle: "Essential Body Refresh — Kerala Ayurveda | Safari Masti",
    seoDescription:
      "A 3 to 5 day Kerala Ayurveda wellness getaway with full-body oil massage (Abhyangam) and herbal steam baths, curated by Safari Masti.",
    relatedTourSlugs: ["deep-stress-relief", "total-body-detox-reset"],
  },
  {
    slug: "deep-stress-relief",
    collectionSlug: "kerala-ayurveda",
    title: "Deep Stress Relief",
    titleAr: "التخلص العميق من التوتر",
    destination: "Kerala",
    destinationAr: "كيرالا",
    region: ["South"],
    category: ["Wellness", "Ayurveda"],
    duration: "7 Days",
    durationAr: "٧ أيام",
    travelStyle: ["Premium"],
    bestFor: ["Chronic Stress", "Mental Exhaustion", "Insomnia"],
    bestForAr: ["التوتر المزمن", "الإرهاق الذهني", "الأرق"],
    shortDescription:
      "A week-long immersion to calm an overactive mind, improve sleep quality, and flush out daily environmental toxins.",
    shortDescriptionAr:
      "غمر لمدة أسبوع كامل لتهدئة الذهن المفرط النشاط، وتحسين جودة النوم، وطرد سموم البيئة اليومية.",
    overview:
      "Deep Stress Relief is a week-long immersion to calm an overactive mind, improve sleep quality, and flush out daily environmental toxins — part of Safari Masti's Kerala Ayurveda Rejuvenation packages, prescribed by certified traditional doctors and performed by experienced therapists.",
    overviewAr:
      "التخلص العميق من التوتر غمر لمدة أسبوع كامل لتهدئة الذهن المفرط النشاط وتحسين جودة النوم وطرد سموم البيئة اليومية — ضمن باقات سفاري ماستي لتجديد الحيوية بطب الأيورفيدا في كيرالا، والتي يصفها أطباء تقليديون معتمدون وينفذها معالجون ذوو خبرة.",
    heroImages: ["/images/tours/deep-stress-relief-1.webp"],
    highlights: [
      "Continuous oil pouring over the forehead (Shirodhara)",
      "Herbal pouch massages",
      "Custom meditation",
    ],
    highlightsAr: ["صبّ زيتي مستمر على الجبين (شيرودارا)", "تدليك بأكياس الأعشاب", "تأمل مخصص"],
    itinerary: [],
    inclusions: [
      "Daily personalized consultations with our Ayurvedic doctors",
      "Three tailored vegetarian meals daily, designed for your body type",
      "Morning yoga sessions and evening guided meditation",
    ],
    inclusionsAr: AYURVEDA_INCLUSIONS_AR,
    exclusions: [],
    goodToKnow: [],
    seoTitle: "Deep Stress Relief — Kerala Ayurveda | Safari Masti",
    seoDescription:
      "A 7 day Kerala Ayurveda program with Shirodhara, herbal pouch massages and custom meditation, curated by Safari Masti.",
    relatedTourSlugs: ["essential-body-refresh", "total-body-detox-reset"],
  },
  {
    slug: "total-body-detox-reset",
    collectionSlug: "kerala-ayurveda",
    title: "Total Body Detox & Reset",
    titleAr: "التطهير الشامل للجسم وإعادة الضبط",
    destination: "Kerala",
    destinationAr: "كيرالا",
    region: ["South"],
    category: ["Wellness", "Ayurveda"],
    duration: "14+ Days",
    durationAr: "أكثر من ١٤ يومًا",
    travelStyle: ["Premium"],
    bestFor: ["Long-Term Wellness", "Deep Detoxification", "Metabolic Health"],
    bestForAr: ["العافية طويلة الأمد", "التطهير العميق", "الصحة الأيضية"],
    shortDescription:
      "A comprehensive internal and external cleansing program that resets your metabolism and strengthens your immune system.",
    shortDescriptionAr:
      "برنامج تطهير داخلي وخارجي شامل يعيد ضبط عملية الأيض ويقوّي جهاز المناعة.",
    overview:
      "Total Body Detox & Reset is a comprehensive internal and external cleansing program that resets your metabolism and strengthens your immune system — part of Safari Masti's Kerala Ayurveda Rejuvenation packages, prescribed by certified traditional doctors and performed by experienced therapists.",
    overviewAr:
      "التطهير الشامل للجسم وإعادة الضبط برنامج تطهير داخلي وخارجي شامل يعيد ضبط عملية الأيض ويقوّي جهاز المناعة — ضمن باقات سفاري ماستي لتجديد الحيوية بطب الأيورفيدا في كيرالا، والتي يصفها أطباء تقليديون معتمدون وينفذها معالجون ذوو خبرة.",
    heroImages: ["/images/tours/total-body-detox-reset-1.webp"],
    highlights: [
      "Full Panchakarma elimination therapies",
      "Tissue-strengthening massages",
      "Strict personalized diet",
    ],
    highlightsAr: ["علاجات بانتشاكارما الكاملة للتطهير", "تدليك لتقوية الأنسجة", "نظام غذائي شخصي صارم"],
    itinerary: [],
    inclusions: [
      "Daily personalized consultations with our Ayurvedic doctors",
      "Three tailored vegetarian meals daily, designed for your body type",
      "Morning yoga sessions and evening guided meditation",
    ],
    inclusionsAr: AYURVEDA_INCLUSIONS_AR,
    exclusions: [],
    goodToKnow: [],
    seoTitle: "Total Body Detox & Reset — Kerala Ayurveda | Safari Masti",
    seoDescription:
      "A 14+ day Panchakarma-based Kerala Ayurveda detox and reset program, curated by Safari Masti.",
    relatedTourSlugs: ["essential-body-refresh", "deep-stress-relief"],
  },
];

export function getTourBySlug(slug: string) {
  return tours.find((t) => t.slug === slug);
}

export function getToursByCollection(collectionSlug: string) {
  return tours.filter((t) => t.collectionSlug === collectionSlug);
}

export function getRelatedTours(tour: Tour) {
  if (tour.relatedTourSlugs?.length) {
    return tour.relatedTourSlugs
      .map((slug) => getTourBySlug(slug))
      .filter((t): t is Tour => Boolean(t));
  }
  return getToursByCollection(tour.collectionSlug)
    .filter((t) => t.slug !== tour.slug)
    .slice(0, 3);
}
