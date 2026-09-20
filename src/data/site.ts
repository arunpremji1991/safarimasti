export const site = {
  name: "Safari Masti",
  nameAr: "سفاري ماستي",
  tagline: "Crafting Unforgettable Indian Journeys",
  taglineAr: "نصنع لكم رحلات هندية لا تُنسى",
  promise: "Seamless planning, absolute safety, and memories that last a lifetime.",
  promiseAr: "تخطيط سلس، وأمان تام، وذكريات تدوم مدى الحياة.",
  base: "Cochin, Kerala",
  baseAr: "كوتشي، كيرالا",
  scope: "Pan-India",
  scopeAr: "جميع أنحاء الهند",
  regionsLine: "North · South · East · Northeast",
  regionsLineAr: "الشمال · الجنوب · الشرق · الشمال الشرقي",
  address: {
    line1: "Building No 4, Kudilinkal,",
    line2: "Thathappilly P.O., North Paravur,",
    line3: "Ernakulam, Cochin 683520",
  },
  phone: "+91 85890 96860",
  phoneHref: "tel:+918589096860",
  whatsappHref: "https://wa.me/918589096860",
  email: "safarimasti@gmail.com",
  emailHref: "mailto:safarimasti@gmail.com",
} as const;

export const services = [
  {
    index: "01",
    title: "Customized Pan-India Tour Packages",
    titleAr: "باقات جولات مخصصة في جميع أنحاء الهند",
    description:
      "Tailor-made itineraries across India, meticulously designed to match your choice and budget.",
    descriptionAr:
      "برامج رحلات مصمَّمة خصيصًا في مختلف أنحاء الهند، بعناية فائقة لتناسب اختياراتكم وميزانيتكم.",
    image: "/images/services/customized-pan-india.webp",
    href: "/build-your-journey",
  },
  {
    index: "02",
    title: "Luxury & Honeymoon Packages",
    titleAr: "باقات الفخامة وشهر العسل",
    description:
      "Premium, high-end travel experiences and romantic getaways with curated stays and exclusive amenities.",
    descriptionAr:
      "تجارب سفر راقية وإجازات رومانسية، مع إقامات مُنتقاة بعناية ومرافق حصرية.",
    image: "/images/services/luxury-honeymoon.webp",
    href: "/collections/luxury-honeymoon",
  },
  {
    index: "03",
    title: "Adventure & Experiential Tourism",
    titleAr: "سياحة المغامرة والتجارب الحية",
    description:
      "Guided walking tours, trekking, hiking, and managed camping experiences for outdoor enthusiasts.",
    descriptionAr:
      "جولات مشي ورحلات تسلق ومخيمات منظّمة برفقة مرشدين، مخصصة لعشاق الأنشطة الخارجية.",
    image: "/images/services/adventure-experiential.webp",
    href: "/collections/adventure-trekking",
  },
  {
    index: "04",
    title: "Corporate & Weekend Getaways",
    titleAr: "رحلات الشركات وإجازات نهاية الأسبوع",
    description:
      "Quick, refreshing travel packages structured for working professionals seeking a work-life balance.",
    descriptionAr:
      "باقات سفر سريعة ومنعشة، مصمَّمة للمهنيين الباحثين عن توازن بين العمل والحياة.",
    image: "/images/services/corporate-weekend.webp",
    href: "/build-your-journey",
  },
  {
    index: "05",
    title: "Senior Citizen Travel Programs",
    titleAr: "برامج سفر مخصصة لكبار السن",
    description:
      "Specialized, slow-paced packages focused on comfort, accessibility, and maximum safety for older adults.",
    descriptionAr:
      "باقات متخصصة بوتيرة هادئة، تركز على الراحة وسهولة التنقل وأعلى معايير السلامة لكبار السن.",
    image: "/images/services/senior-citizen.webp",
    href: "/build-your-journey",
  },
] as const;

export const whyUs = [
  {
    index: "01",
    title: "Deep Local Expertise",
    titleAr: "خبرة محلية عميقة",
    description:
      "Experienced professionals with extensive destination knowledge, ensuring authentic and enriching travel experiences.",
    descriptionAr:
      "فريق من المحترفين ذوي الخبرة الواسعة بالوجهات، لضمان تجارب سفر أصيلة وغنية.",
  },
  {
    index: "02",
    title: "Budget-Flexibility",
    titleAr: "مرونة في الميزانية",
    description:
      "We believe exceptional travel should be accessible, offering flexible planning that maximizes value without compromising quality.",
    descriptionAr:
      "نؤمن بأن السفر الاستثنائي يجب أن يكون في متناول الجميع، لذا نقدّم تخطيطًا مرنًا يحقق أعلى قيمة دون المساس بالجودة.",
  },
  {
    index: "03",
    title: "Safety & Comfort First",
    titleAr: "السلامة والراحة أولًا",
    description:
      "Comprehensive planning and on-ground support guarantee peace of mind, particularly for senior citizen and adventure tours.",
    descriptionAr:
      "تخطيط شامل ودعم ميداني يضمنان راحة البال، وخصوصًا في رحلات كبار السن ورحلات المغامرة.",
  },
  {
    index: "04",
    title: "End-to-End Service",
    titleAr: "خدمة متكاملة من الألف إلى الياء",
    description:
      "From conceptualization to execution, we handle all logistics to provide a hassle-free, seamless journey for every traveler.",
    descriptionAr:
      "من فكرة الرحلة إلى تنفيذها، نتولى كل التفاصيل اللوجستية لنقدّم لكل مسافر رحلة سلسة وخالية من العناء.",
  },
] as const;

export const navLinks = [
  { label: "Home", labelAr: "الرئيسية", href: "/" },
  { label: "About", labelAr: "من نحن", href: "/about" },
  { label: "Experiences", labelAr: "التجارب", href: "/experiences" },
  { label: "Destinations", labelAr: "الوجهات", href: "/destinations" },
  { label: "Collections", labelAr: "المجموعات", href: "/collections" },
  { label: "Ayurveda", labelAr: "الأيورفيدا", href: "/collections/kerala-ayurveda" },
  { label: "Contact", labelAr: "تواصل معنا", href: "/contact" },
] as const;
