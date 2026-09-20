import { Collection } from "./types";

export const collections: Collection[] = [
  {
    slug: "adventure-trekking",
    index: 1,
    title: "Premier Adventure & Trekking Expeditions",
    titleAr: "رحلات المغامرة والتسلق الفاخرة",
    subtitle: "For the trail-hungry and the summit-bound",
    subtitleAr: "لعشاق الدروب الجبلية والمتوجهين نحو القمم",
    description:
      "Guided walking tours, trekking, hiking and managed camping experiences for outdoor enthusiasts, from Himalayan summits to alpine lakes.",
    descriptionAr:
      "جولات مشي ورحلات تسلق ومخيمات منظّمة برفقة مرشدين، مخصصة لعشاق الأنشطة الخارجية، من قمم جبال الهيمالايا إلى البحيرات الجبلية.",
    heroImage: "/images/collections/adventure-trekking-hero.webp",
    cardImage: "/images/collections/adventure-trekking-card.webp",
    regions: ["North"],
    destinations: [
      { name: "Kedarkantha Peak", nameAr: "قمة كيدارْكانتا" },
      { name: "Hampta Pass & Chandratal Lake", nameAr: "ممر هامبتا وبحيرة تشاندراتال" },
      { name: "Valley of Flowers & Hemkund Sahib", nameAr: "وادي الزهور ومعبد هيمكوند صاحب" },
      { name: "Markha Valley", nameAr: "وادي ماركا" },
      { name: "Sandakphu & Phalut", nameAr: "سانداكفو وفالوت" },
      { name: "Incredible Ladakh", nameAr: "لداخ المذهلة" },
    ],
    seoTitle: "Adventure & Trekking Tours in India | Safari Masti",
    seoDescription:
      "Guided treks across Kedarkantha, Hampta Pass, Valley of Flowers, Markha Valley, Sandakphu and Ladakh — curated adventure expeditions by Safari Masti.",
  },
  {
    slug: "golden-triangle",
    index: 2,
    title: "The Golden Triangle",
    titleAr: "المثلث الذهبي",
    description:
      "A luxury tour through Delhi, Agra, and Jaipur — India's most iconic circuit of Mughal grandeur, royal forts, and vibrant bazaars.",
    descriptionAr:
      "جولة فاخرة عبر دلهي وأغرا وجايبور — أشهر مسار سياحي في الهند، يجمع بين عظمة العمارة المغولية والقلاع الملكية والأسواق النابضة بالحياة.",
    heroImage: "/images/collections/golden-triangle-hero.webp",
    cardImage: "/images/collections/golden-triangle-card.webp",
    regions: ["North"],
    destinations: [
      { name: "Delhi", nameAr: "دلهي" },
      { name: "Agra", nameAr: "أغرا" },
      { name: "Jaipur", nameAr: "جايبور" },
    ],
    seoTitle: "Golden Triangle Tour Packages — Delhi, Agra, Jaipur | Safari Masti",
    seoDescription:
      "Experience India's most iconic circuit — Delhi, Agra and Jaipur — with a luxury Golden Triangle tour crafted by Safari Masti.",
  },
  {
    slug: "luxury-honeymoon",
    index: 3,
    title: "Luxury & Honeymoon Escapes",
    titleAr: "إجازات الفخامة وشهر العسل",
    description:
      "Premium, high-end experiences and romantic getaways with curated stays and exclusive amenities.",
    descriptionAr:
      "تجارب راقية وإجازات رومانسية، مع إقامات مُنتقاة بعناية ومرافق حصرية.",
    heroImage: "/images/collections/luxury-honeymoon-hero.webp",
    cardImage: "/images/collections/luxury-honeymoon-card.webp",
    regions: ["South", "West"],
    destinations: [
      { name: "Kerala Backwater Retreats", nameAr: "إقامات على المسطحات المائية في كيرالا" },
      { name: "Munnar Hill Romance", nameAr: "رومانسية تلال مونار" },
      { name: "Goa Beach Escapes", nameAr: "إجازات شواطئ غوا" },
      { name: "Rajasthan Palace Stays", nameAr: "إقامات القصور في راجستان" },
    ],
    seoTitle: "Luxury & Honeymoon Packages in India | Safari Masti",
    seoDescription:
      "Kerala backwaters, Munnar hills, Goa beaches and Rajasthan palaces — curated luxury and honeymoon escapes by Safari Masti.",
  },
  {
    slug: "northeast",
    index: 4,
    title: "Hidden Jewels of the Northeast",
    titleAr: "جواهر الشمال الشرقي الخفية",
    description:
      "Two ways into India's most untouched corner — the Scotland of the East, and the Land of the Dawn-Lit Peaks.",
    descriptionAr:
      "طريقان للوصول إلى أكثر أركان الهند بكارةً — «اسكتلندا الشرق» و«أرض القمم المضيئة عند الفجر».",
    heroImage: "/images/collections/northeast-hero.webp",
    cardImage: "/images/collections/northeast-card.webp",
    regions: ["Northeast"],
    destinations: [
      {
        name: "Meghalaya & Assam",
        nameAr: "ميغالايا وآسام",
        description: "The Scotland of the East",
        descriptionAr: "اسكتلندا الشرق",
      },
      {
        name: "Arunachal Pradesh & Assam",
        nameAr: "أروناتشال براديش وآسام",
        description: "Land of the Dawn-Lit Peaks",
        descriptionAr: "أرض القمم المضيئة عند الفجر",
      },
    ],
    seoTitle: "Northeast India Tour Packages — Meghalaya, Assam, Arunachal | Safari Masti",
    seoDescription:
      "Discover Meghalaya, Assam and Arunachal Pradesh with Safari Masti's curated Northeast India journeys.",
  },
  {
    slug: "wildlife-safaris",
    index: 5,
    title: "Premier National Park Safaris",
    titleAr: "رحلات السفاري الفاخرة في المحميات الوطنية",
    description:
      "Guided safaris through India's most celebrated national parks and tiger reserves.",
    descriptionAr:
      "رحلات سفاري برفقة مرشدين عبر أشهر المحميات الوطنية ومحميات النمور في الهند.",
    heroImage: "/images/collections/wildlife-safaris-hero.webp",
    cardImage: "/images/collections/wildlife-safaris-card.webp",
    regions: ["Central", "East", "North"],
    destinations: [
      { name: "Kanha & Bandhavgarh", nameAr: "كانها وبانداغفار" },
      { name: "Kaziranga National Park", nameAr: "محمية كازيرانغا الوطنية" },
      { name: "Ranthambore National Park", nameAr: "محمية رانثامبور الوطنية" },
      { name: "Jim Corbett National Park", nameAr: "محمية جيم كوربيت الوطنية" },
    ],
    seoTitle: "India Wildlife Safari Tours — Kanha, Kaziranga, Ranthambore, Corbett | Safari Masti",
    seoDescription:
      "Premier national park safaris across Kanha, Bandhavgarh, Kaziranga, Ranthambore and Jim Corbett, curated by Safari Masti.",
  },
  {
    slug: "jewels-of-the-south",
    index: 6,
    title: "Jewels of the South",
    titleAr: "جواهر الجنوب",
    description:
      "Customized, budget-friendly tours from misty hills and backwaters to sunny beaches and royal heritage.",
    descriptionAr:
      "جولات مخصصة ومناسبة للميزانية، من التلال الضبابية والمسطحات المائية الهادئة إلى الشواطئ المشمسة والتراث الملكي.",
    heroImage: "/images/collections/jewels-of-the-south-hero.webp",
    cardImage: "/images/collections/jewels-of-the-south-card.webp",
    regions: ["South"],
    destinations: [
      { name: "Kerala", nameAr: "كيرالا" },
      { name: "Tamil Nadu", nameAr: "تاميل نادو" },
      { name: "Karnataka", nameAr: "كارناتاكا" },
      { name: "Hyderabad", nameAr: "حيدر آباد" },
      { name: "Goa", nameAr: "غوا" },
    ],
    seoTitle: "South India Tour Packages — Kerala, Tamil Nadu, Karnataka | Safari Masti",
    seoDescription:
      "From misty hills and backwaters to beaches and royal heritage — customized South India tours across Kerala, Tamil Nadu, Karnataka, Hyderabad and Goa.",
  },
  {
    slug: "divine-trails",
    index: 7,
    title: "The Divine Trails — Sacred Temple Tours",
    titleAr: "المسارات المقدسة — جولات المعابد الدينية",
    description:
      "Pilgrimage journeys along the Ganges and Himalayan foothills in the north, and the great temple trails of Tamil Nadu and Kerala in the south.",
    descriptionAr:
      "رحلات حج على ضفاف نهر الغانج وسفوح جبال الهيمالايا في الشمال، ومسارات المعابد الكبرى في تاميل نادو وكيرالا في الجنوب.",
    heroImage: "/images/collections/divine-trails-hero.webp",
    cardImage: "/images/collections/divine-trails-card.webp",
    regions: ["North", "South"],
    destinations: [
      {
        name: "Ganges & Himalayan Foothills",
        nameAr: "نهر الغانج وسفوح جبال الهيمالايا",
        description: "Varanasi, Ayodhya, Prayagraj, Haridwar, Rishikesh, Badrinath, Kedarnath",
        descriptionAr: "فاراناسي، أيوديا، براياغراج، هاريدوار، ريشيكيش، بادريناث، كيدارناث",
      },
      {
        name: "Tamil Nadu & Kerala Trails",
        nameAr: "مسارات تاميل نادو وكيرالا",
        description:
          "Meenakshi Amman, Brihadeeswarar, Ramanathaswamy, Padmanabhaswamy, Guruvayur, Chottanikara",
        descriptionAr:
          "مينا كشي أمّان، بريهاديسوارار، رامَاناثاسوامي، بادمانابهاسوامي، غوروفايور، تشوتانيكارا",
      },
    ],
    seoTitle: "Sacred Temple Tours in India | Safari Masti",
    seoDescription:
      "Divine trails across Varanasi, Rishikesh, Kedarnath, Meenakshi Amman, Padmanabhaswamy and more — spiritual journeys curated by Safari Masti.",
  },
  {
    slug: "kerala-ayurveda",
    index: 8,
    title: "Kerala Ayurveda Rejuvenation",
    titleAr: "تجديد الحيوية بطب الأيورفيدا في كيرالا",
    subtitle: "Revitalize Your Mind & Body",
    subtitleAr: "جدّد حيويّة عقلك وجسدك",
    description:
      "Experience the profound healing of Ayurveda in its purest, most authentic form. Nestled in the tropical cradle of Kerala, India, our rejuvenation therapies are designed to detoxify the body, restore cellular vitality, and bring deep peace to the mind.",
    descriptionAr:
      "عيشوا تجربة الشفاء العميق لطب الأيورفيدا بأنقى صوره الأصيلة. في حضن كيرالا الاستوائي بالهند، صُمِّمت علاجات تجديد الحيوية لدينا لتطهير الجسم، واستعادة حيوية الخلايا، ومنح العقل سكينة عميقة.",
    heroImage: "/images/collections/kerala-ayurveda-hero.webp",
    cardImage: "/images/collections/kerala-ayurveda-card.webp",
    regions: ["South"],
    destinations: [
      { name: "Essential Body Refresh", nameAr: "الانتعاش الأساسي للجسم", description: "3 to 5 Days", descriptionAr: "من ٣ إلى ٥ أيام" },
      { name: "Deep Stress Relief", nameAr: "التخلص العميق من التوتر", description: "7 Days", descriptionAr: "٧ أيام" },
      { name: "Total Body Detox & Reset", nameAr: "التطهير الشامل للجسم وإعادة الضبط", description: "14+ Days", descriptionAr: "أكثر من ١٤ يومًا" },
    ],
    advantages: [
      {
        title: "100% Authentic",
        titleAr: "أصالة كاملة ١٠٠٪",
        description:
          "Treatments are prescribed by certified traditional doctors and performed by experienced therapists.",
        descriptionAr:
          "توصف العلاجات من قبل أطباء تقليديين معتمدين، ويقوم بتنفيذها معالجون ذوو خبرة.",
      },
      {
        title: "Natural Healing",
        titleAr: "شفاء طبيعي",
        description:
          "We use pure, locally sourced herbal oils tailored to your unique body type.",
        descriptionAr:
          "نستخدم زيوتًا عشبية نقية مصدرها محلي، تُختار خصيصًا بما يناسب طبيعة جسمكم.",
      },
      {
        title: "Complete Care",
        titleAr: "رعاية متكاملة",
        description:
          "Every stay combines healing therapies, a nutritious organic diet, and gentle daily yoga.",
        descriptionAr:
          "تجمع كل إقامة بين العلاجات الشفائية، وغذاء عضوي متوازن، وتمارين يوغا يومية هادئة.",
      },
    ],
    hideFromSignatureCollections: true,
    seoTitle: "Kerala Ayurveda Rejuvenation Packages | Safari Masti",
    seoDescription:
      "Authentic Kerala Ayurveda rejuvenation packages — Essential Body Refresh, Deep Stress Relief, and Total Body Detox & Reset — curated by Safari Masti.",
  },
];

export function getCollectionBySlug(slug: string) {
  return collections.find((c) => c.slug === slug);
}

/** The 7 Signature Collections from the Company Profile — excludes standalone
 * featured products like Kerala Ayurveda, which get their own spotlight instead. */
export function getSignatureCollections() {
  return collections.filter((c) => !c.hideFromSignatureCollections);
}
