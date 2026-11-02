import { ItineraryStop, Tour } from "./types";
import { packages } from "./packages";

/**
 * Every field here traces back to Safari Masti's Company Profile & Signature
 * Collections PDF. No itinerary day-plans, inclusions, exclusions, prices or
 * reviews are invented — those sections render a "designed around you" CTA
 * on the tour page until real package detail is supplied.
 *
 * The two Kerala Ayurveda packages are the exception: their itineraries, inclusions,
 * exclusions and terms come from the supplied "Kerala PKG" document, and the treatment
 * programme from the supplied Rejuvenation & Detoxification programme page (rewritten in
 * our own words). Prices are not published — the page asks for a quote.
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

// ---- Kerala Ayurveda packages: shared pieces ----------------------------------------------------
const PROGRAMME_STOP: ItineraryStop = {
  label: "Days 01–07",
  labelAr: "الأيام ١–٧",
  title: "Rejuvenation & Detoxification Healing Program",
  titleAr: "برنامج التجديد والتطهير العلاجي",
  description:
    "Seven days of Ayurvedic rejuvenation and detoxification under the guidance of Ayurvedic doctors. After your first consultation, your doctor plans therapies, diet and routine around your constitution and goals. Every day includes two Ayurvedic therapies — such as Abhyangam (herbal oil massage), Shirodhara (medicated oil on the forehead) and Udvarthana (herbal powder massage), as prescribed — together with a personalised diet, group yoga, guided meditation and a doctor's consultation. Therapies and timings follow your doctor's plan.",
  descriptionAr:
    "سبعة أيام من التجديد والتطهير بطب الأيورفيدا بإرشاد أطباء الأيورفيدا. بعد الاستشارة الأولى، يضع الطبيب العلاجات والنظام الغذائي والروتين اليومي بما يناسب طبيعة جسمكم وأهدافكم. يشمل كل يوم علاجين أيورفيديين — مثل أبهيانغام (تدليك بالزيوت العشبية) وشيرودارا (صبّ الزيت الطبي على الجبين) وأودفارتانا (تدليك بمسحوق الأعشاب) وفق ما يصفه الطبيب — إلى جانب نظام غذائي مخصص ويوغا جماعية وتأمل موجَّه واستشارة مع الطبيب. تتبع العلاجات ومواعيدها خطة طبيبكم.",
};

const KERALA_TOUR_COMMON: ItineraryStop[] = [
  {
    label: "Day 08",
    labelAr: "اليوم ٠٨",
    title: "Cochin — arrival and sightseeing",
    titleAr: "كوتشي — الوصول والجولة السياحية",
    description:
      "Your Kerala tour begins. Pick-up from Cochin Airport / Railway Station and drive to the hotel; check in and relax. Then Cochin sightseeing: Fort Cochin, the Jewish Synagogue, the Dutch Palace, Marine Drive and the Chinese fishing nets. Overnight at the hotel.",
    descriptionAr:
      "تبدأ جولتكم في كيرالا. الاستقبال من مطار كوتشي / محطة القطار والتوجه إلى الفندق وتسجيل الوصول والاسترخاء. ثم جولة في كوتشي: حصن كوتشي، والمعبد اليهودي (السيناغوغ)، وقصر الهولنديين، وكورنيش مارين درايف، وشباك الصيد الصينية. المبيت في الفندق.",
  },
  {
    label: "Day 09",
    labelAr: "اليوم ٠٩",
    title: "Cochin to Munnar",
    titleAr: "من كوتشي إلى مونار",
    description:
      "After breakfast, check out and drive to Munnar. On the way, enjoy the Cheeyappara and Valara waterfalls and a spice plantation visit. Check in and relax. In the evening you can enjoy a Kathakali and Kalaripayattu show (direct payment), an elephant ride (direct payment) and the Munnar market. Overnight in Munnar.",
    descriptionAr:
      "بعد الإفطار تسجّلون المغادرة وتتجهون إلى مونار. وفي الطريق تستمتعون بشلالات تشيّابارا وفالارا وبزيارة مزرعة توابل. تسجيل الوصول والاسترخاء. وفي المساء يمكنكم حضور عرض الكاثاكالي والكالاريبّاياتّو (بدفع مباشر)، وركوب الفيل (بدفع مباشر)، وزيارة سوق مونار. المبيت في مونار.",
  },
  {
    label: "Day 10",
    labelAr: "اليوم ١٠",
    title: "Munnar sightseeing",
    titleAr: "جولة في مونار",
    description:
      "After breakfast, Munnar sightseeing: the flower garden, photo point, Mattupetty Dam, Echo Point, Kundala Dam, Rajamalai (Eravikulam National Park) and Hydel Park. Overnight at the hotel.",
    descriptionAr:
      "بعد الإفطار جولة في مونار: حديقة الزهور، ونقطة التصوير، وسد ماتوبيتي، ونقطة الصدى، وسد كوندالا، وراجاماليه (منتزه إيرافيكولام الوطني)، وحديقة هايدل. المبيت في الفندق.",
  },
  {
    label: "Day 11",
    labelAr: "اليوم ١١",
    title: "Munnar to Thekkady",
    titleAr: "من مونار إلى ثيكادي",
    description:
      "After breakfast, check out and drive to Thekkady; check in. You can enjoy Periyar boating (own payment) and an optional massage and jeep safari (direct payment). Overnight at the hotel.",
    descriptionAr:
      "بعد الإفطار تسجّلون المغادرة وتتجهون إلى ثيكادي وتسجّلون الوصول. يمكنكم الاستمتاع بجولة قوارب في بحيرة بيريار (على نفقتكم الخاصة)، وبتدليك وسفاري بالجيب اختياريين (بدفع مباشر). المبيت في الفندق.",
  },
  {
    label: "Day 12",
    labelAr: "اليوم ١٢",
    title: "Thekkady to Alleppey — houseboat stay",
    titleAr: "من ثيكادي إلى ألابوزا — المبيت على قارب سكني",
    description:
      "After breakfast, check out and drive to Alleppey; check into the houseboat. Enjoy Alleppey beach and local sightseeing. Full-board meals are provided on the houseboat. Overnight on the houseboat.",
    descriptionAr:
      "بعد الإفطار تسجّلون المغادرة وتتجهون إلى ألابوزا وتصعدون إلى القارب السكني. استمتعوا بشاطئ ألابوزا وبجولة محلية. تُقدَّم الوجبات كاملة (إقامة كاملة) على متن القارب. المبيت على القارب السكني.",
  },
];

const KERALA_TOUR_END_6: ItineraryStop[] = [
  {
    label: "Day 13",
    labelAr: "اليوم ١٣",
    title: "Alleppey to Cochin — drop-off",
    titleAr: "من ألابوزا إلى كوتشي — التوصيل",
    description: "After breakfast, check out from the houseboat and drop-off at Cochin Airport / Railway Station.",
    descriptionAr: "بعد الإفطار تسجّلون المغادرة من القارب السكني ثم التوصيل إلى مطار كوتشي / محطة القطار.",
  },
];

const KERALA_TOUR_END_8: ItineraryStop[] = [
  {
    label: "Day 13",
    labelAr: "اليوم ١٣",
    title: "Alleppey to Kovalam",
    titleAr: "من ألابوزا إلى كوفالام",
    description:
      "After breakfast, check out from the houseboat and drive to Kovalam. You can visit the Trivandrum Museum and Zoo. Check in and relax; in the evening enjoy Kovalam beach. Overnight at the hotel.",
    descriptionAr:
      "بعد الإفطار تسجّلون المغادرة من القارب السكني وتتجهون إلى كوفالام. يمكنكم زيارة متحف ترفاندروم وحديقة الحيوان. تسجيل الوصول والاسترخاء، وفي المساء الاستمتاع بشاطئ كوفالام. المبيت في الفندق.",
  },
  {
    label: "Day 14",
    labelAr: "اليوم ١٤",
    title: "Kovalam sightseeing",
    titleAr: "جولة في كوفالام",
    description:
      "After breakfast, sightseeing: you can visit the Padmanabhaswamy Temple, the Azhimala Shiva Temple, Kuthiramalika and Lulu Mall. Enjoy Kovalam beach in the evening. Overnight in Kovalam.",
    descriptionAr:
      "بعد الإفطار جولة سياحية: يمكنكم زيارة معبد بادمانابهاسوامي، ومعبد أزيمالا شيفا، وكوتيراماليكا، ومركز لولو التجاري. في المساء الاستمتاع بشاطئ كوفالام. المبيت في كوفالام.",
  },
  {
    label: "Day 15",
    labelAr: "اليوم ١٥",
    title: "Trivandrum — drop-off",
    titleAr: "ترفاندروم — التوصيل",
    description: "After breakfast, check out and drop-off at Trivandrum Airport / Railway Station.",
    descriptionAr: "بعد الإفطار تسجّلون المغادرة ثم التوصيل إلى مطار ترفاندروم / محطة القطار.",
  },
];

const AYURVEDA_PKG_INCLUSIONS = [
  "Seven-day Rejuvenation & Detoxification Healing Program: two Ayurvedic therapies daily, daily doctor consultation, personalised diet, daily group yoga and meditation",
  "Pick-up and drop-off for the Kerala tour",
  "3-star accommodation as per the tour itinerary",
  "Houseboat stay at Alleppey, with special breakfast, lunch and dinner on board",
  "English or Hindi speaking driver",
  "AC private transportation, including parking, toll, driver bata, permits, fuel, transfers, sightseeing and night-halt charges",
];
const AYURVEDA_PKG_INCLUSIONS_AR = [
  "برنامج التجديد والتطهير العلاجي لمدة سبعة أيام: علاجان أيورفيديان يوميًا، واستشارة يومية مع الطبيب، ونظام غذائي مخصص، ويوغا جماعية وتأمل يوميًا",
  "الاستقبال والتوصيل لجولة كيرالا",
  "إقامة بفنادق ثلاث نجوم وفق برنامج الجولة",
  "المبيت على قارب سكني في ألابوزا، مع إفطار وغداء وعشاء خاصة على متنه",
  "سائق يتحدث الإنجليزية أو الهندية",
  "تنقل خاص مكيَّف يشمل رسوم المواقف والعبور، وبدل السائق، والتصاريح، والوقود، والتنقلات، والجولات السياحية، ورسوم المبيت",
];
const AYURVEDA_PKG_EXCLUSIONS = [
  "Entry tickets and all sightseeing entry fees not included in the package",
  "Extra activities (jeep safari, boating and other entertainment or sports activities)",
  "Personal expenses such as tips, telephone, laundry, medical bills, drinks and alcoholic beverages, and porterage",
  "Extra stay before or after the tour",
  "Airfare, visa fees, airport tax and any kind of insurance cover",
  "GST",
  "Anything not specifically mentioned in the inclusions",
];
const AYURVEDA_PKG_EXCLUSIONS_AR = [
  "تذاكر الدخول ورسوم الدخول لجميع المعالم غير المشمولة في الباقة",
  "الأنشطة الإضافية (سفاري بالجيب، والجولات بالقوارب، وسائر أنشطة الترفيه والرياضة)",
  "المصاريف الشخصية كالإكراميات والهاتف والغسيل والفواتير الطبية والمشروبات والمشروبات الكحولية وأجور الحمالين",
  "الإقامة الإضافية قبل الجولة أو بعدها",
  "تذاكر الطيران ورسوم التأشيرة وضرائب المطار وأي نوع من أنواع التأمين",
  "ضريبة السلع والخدمات (GST)",
  "أي بند لم يُذكر صراحةً ضمن البنود المشمولة",
];
const AYURVEDA_PKG_GOOD_TO_KNOW = [
  {
    label: "Wellness programme, not medical care",
    labelAr: "برنامج للعافية وليس رعاية طبية",
    content:
      "The healing programme is a wellness programme guided by Ayurvedic doctors. It does not replace medical care. Please tell the doctors about any health condition or medication so your plan can be prepared safely.",
    contentAr:
      "برنامج التجديد والتطهير برنامج للعافية بإرشاد أطباء الأيورفيدا، ولا يغني عن الرعاية الطبية. يُرجى إبلاغ الأطباء بأي حالة صحية أو أدوية تتناولونها ليُعدّوا خطتكم بأمان.",
  },
  {
    label: "Optional activities are paid directly",
    labelAr: "الأنشطة الاختيارية تُدفع مباشرة",
    content:
      "Kathakali and Kalaripayattu shows, elephant rides, Periyar boating, massages and jeep safaris on the tour are optional and paid for directly.",
    contentAr:
      "عروض الكاثاكالي والكالاريبّاياتّو، وركوب الفيل، والجولات بالقوارب في بيريار، والتدليك، والسفاري بالجيب خلال الجولة كلها أنشطة اختيارية تُدفع مباشرة.",
  },
  {
    label: "Rates and quotation",
    labelAr: "الأسعار وعرض السعر",
    content:
      "Package rates are net. Quotations are based on the mentioned category of rooms at all hotels. Rates are valid only for the mentioned dates, and all reservations are subject to availability at the time of confirmation — rates may change without prior notice.",
    contentAr:
      "أسعار الباقة صافية. وتستند عروض الأسعار إلى فئة الغرف المذكورة في جميع الفنادق. والأسعار سارية للتواريخ المذكورة فقط، وجميع الحجوزات خاضعة للتوافر وقت التأكيد — وقد تتغير الأسعار دون إشعار مسبق.",
  },
  {
    label: "Early arrival and late check-out",
    labelAr: "الوصول المبكر والمغادرة المتأخرة",
    content:
      "Early arrival is subject to availability. For a guaranteed early check-in, the reservation needs to start from the previous night. Late check-outs are available on request, subject to availability.",
    contentAr:
      "الوصول المبكر خاضع للتوافر. ولضمان تسجيل الوصول المبكر يجب أن يبدأ الحجز من الليلة السابقة. وتتوفر المغادرة المتأخرة عند الطلب ورهنًا بالتوافر.",
  },
  {
    label: "Changes and refunds",
    labelAr: "التغييرات والاسترداد",
    content:
      "Any change in the property, room category or transfers after confirmation will be payable extra. Services that are not used after confirmation are not refundable.",
    contentAr:
      "أي تغيير في الفندق أو فئة الغرفة أو التنقلات بعد التأكيد يُدفع مقابله مبلغ إضافي. والخدمات غير المستخدمة بعد التأكيد غير قابلة للاسترداد.",
  },
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
    heroImages: ["/images/tours/kedarkantha-peak-1.bd359c7e.webp"],
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
    heroImages: ["/images/tours/hampta-pass-chandratal-lake-1.addd3ef7.webp"],
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
    heroImages: ["/images/tours/valley-of-flowers-hemkund-sahib-1.bdb853ed.webp"],
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
    heroImages: ["/images/tours/markha-valley-1.bb6421b2.webp"],
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
    heroImages: ["/images/tours/sandakphu-phalut-1.14042a3a.webp"],
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
    heroImages: ["/images/tours/incredible-ladakh-1.48d57452.webp"],
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
    heroImages: ["/images/tours/golden-triangle-1.cd3a5e72.webp", "/images/tours/golden-triangle-2.584aaab5.webp"],
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
    heroImages: ["/images/honeymoon/kerala-canoe.70d2a9fe.webp", "/images/honeymoon/kerala-deck.b4fedd39.webp"],
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
    heroImages: ["/images/honeymoon/munnar-picnic.da47a80d.webp", "/images/honeymoon/munnar-view.0f7a5696.webp"],
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
    heroImages: ["/images/honeymoon/goa-walk.6e4fab09.webp", "/images/honeymoon/goa-dinner.0d8e8df9.webp"],
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
    heroImages: ["/images/honeymoon/rajasthan-dunes.d18c3aa7.webp", "/images/honeymoon/rajasthan-dinner.f71ce101.webp"],
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
    heroImages: ["/images/tours/meghalaya-assam-1.89cdf39d.webp"],
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
    heroImages: ["/images/tours/arunachal-pradesh-assam-1.6ea72711.webp"],
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
    heroImages: ["/images/tours/kanha-bandhavgarh-1.580afc4a.webp"],
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
    heroImages: ["/images/tours/kaziranga-national-park-1.ba9f26ed.webp"],
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
    heroImages: ["/images/tours/ranthambore-national-park-1.0b6d9e8b.webp"],
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
    heroImages: ["/images/tours/jim-corbett-national-park-1.82b32930.webp"],
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
    heroImages: ["/images/tours/kerala-1.10453c2e.webp"],
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
    heroImages: ["/images/tours/tamil-nadu-1.8fe7fc3c.webp"],
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
    heroImages: ["/images/tours/karnataka-1.f5e469c8.webp"],
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
    heroImages: ["/images/tours/hyderabad-1.f4411102.webp"],
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
    heroImages: ["/images/tours/goa-1.cdf12508.webp"],
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
    heroImages: ["/images/tours/ganges-himalayan-foothills-1.0f1139b8.webp"],
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
    heroImages: ["/images/tours/tamil-nadu-kerala-trails-1.e69a991e.webp"],
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

  // ---------------- Kerala Ayurveda: healing programme + Kerala tour ----------------
  {
    slug: "rejuvenation-detox-kerala-6-day-tour",
    collectionSlug: "kerala-ayurveda",
    title: "Rejuvenation & Detox + 6-Day Kerala Tour",
    titleAr: "برنامج التجديد والتطهير + جولة كيرالا لمدة ٦ أيام",
    destination: "Kerala",
    destinationAr: "كيرالا",
    region: ["South"],
    category: ["Wellness", "Ayurveda"],
    duration: "13 Days · 7-day programme + 6-day tour",
    durationAr: "١٣ يومًا · برنامج ٧ أيام + جولة ٦ أيام",
    travelStyle: ["Comfort"],
    bestFor: ["Rejuvenation & detox seekers", "Wellness and sightseeing in one trip"],
    bestForAr: ["الباحثون عن التجديد والتطهير", "العافية والسياحة في رحلة واحدة"],
    shortDescription:
      "Seven days of Ayurvedic rejuvenation and detoxification, followed by a 6-day Kerala tour through Cochin, Munnar, Thekkady and an Alleppey houseboat.",
    shortDescriptionAr:
      "سبعة أيام من التجديد والتطهير بطب الأيورفيدا، تعقبها جولة في كيرالا لمدة ٦ أيام عبر كوتشي ومونار وثيكادي ومبيت على قارب سكني في ألابوزا.",
    overview:
      "This package pairs Safari Masti's Rejuvenation & Detoxification Healing Program — seven days of Ayurvedic treatment guided by Ayurvedic doctors — with a 6-day Kerala tour. After the programme you travel on to Cochin, Munnar, Thekkady and a houseboat night in Alleppey, ending with a drop-off at Cochin. Prefer a longer tour? See the 8-day option.",
    overviewAr:
      "تجمع هذه الباقة بين برنامج سفاري ماستي للتجديد والتطهير العلاجي — سبعة أيام من العلاج بالأيورفيدا بإرشاد أطباء الأيورفيدا — وجولة في كيرالا لمدة ٦ أيام. وبعد البرنامج تنتقلون إلى كوتشي ومونار وثيكادي مع ليلة على قارب سكني في ألابوزا، وتنتهي الرحلة بالتوصيل في كوتشي. تفضّلون جولة أطول؟ اطّلعوا على خيار ٨ أيام.",
    heroImages: [
      "/images/ayurveda/head-massage-woman.80fc83a9.webp",
      "/images/ayurveda/shirodhara-man.b7e878d8.webp",
      "/images/ayurveda/munnar-tea.eceeb9ea.webp",
      "/images/ayurveda/thekkady-periyar.2e7c1e2f.webp",
      "/images/collections/jewels-of-the-south-hero.cde936f4.webp",
    ],
    highlights: [
      "7-day Rejuvenation & Detoxification Healing Program",
      "Two Ayurvedic therapies every day, with a daily doctor consultation",
      "Personalised diet, daily group yoga and meditation",
      "Then a Kerala tour: Cochin, Munnar, Thekkady and a night on an Alleppey houseboat",
    ],
    highlightsAr: [
      "برنامج التجديد والتطهير العلاجي لمدة ٧ أيام",
      "علاجان أيورفيديان يوميًا مع استشارة يومية مع الطبيب",
      "نظام غذائي مخصص ويوغا جماعية وتأمل يوميًا",
      "ثم جولة في كيرالا: كوتشي ومونار وثيكادي وليلة على قارب سكني في ألابوزا",
    ],
    itinerary: [PROGRAMME_STOP, ...KERALA_TOUR_COMMON, ...KERALA_TOUR_END_6],
    inclusions: AYURVEDA_PKG_INCLUSIONS,
    inclusionsAr: AYURVEDA_PKG_INCLUSIONS_AR,
    exclusions: AYURVEDA_PKG_EXCLUSIONS,
    exclusionsAr: AYURVEDA_PKG_EXCLUSIONS_AR,
    goodToKnow: AYURVEDA_PKG_GOOD_TO_KNOW,
    seoTitle: "Ayurveda Rejuvenation + 6-Day Kerala Tour (13 Days) | Safari Masti",
    seoDescription:
      "A 7-day Ayurvedic Rejuvenation & Detoxification Healing Program followed by a 6-day Kerala tour through Cochin, Munnar, Thekkady and an Alleppey houseboat — curated by Safari Masti.",
    relatedTourSlugs: ["rejuvenation-detox-kerala-8-day-tour"],
  },
  {
    slug: "rejuvenation-detox-kerala-8-day-tour",
    collectionSlug: "kerala-ayurveda",
    title: "Rejuvenation & Detox + 8-Day Kerala Tour",
    titleAr: "برنامج التجديد والتطهير + جولة كيرالا لمدة ٨ أيام",
    destination: "Kerala",
    destinationAr: "كيرالا",
    region: ["South"],
    category: ["Wellness", "Ayurveda"],
    duration: "15 Days · 7-day programme + 8-day tour",
    durationAr: "١٥ يومًا · برنامج ٧ أيام + جولة ٨ أيام",
    travelStyle: ["Comfort"],
    bestFor: ["Rejuvenation & detox seekers", "A longer Kerala tour with beach time"],
    bestForAr: ["الباحثون عن التجديد والتطهير", "جولة أطول في كيرالا مع وقت على الشاطئ"],
    shortDescription:
      "Seven days of Ayurvedic rejuvenation and detoxification, followed by an 8-day Kerala tour that adds Kovalam beach and Trivandrum.",
    shortDescriptionAr:
      "سبعة أيام من التجديد والتطهير بطب الأيورفيدا، تعقبها جولة في كيرالا لمدة ٨ أيام تضيف شاطئ كوفالام ومدينة ترفاندروم.",
    overview:
      "This package pairs Safari Masti's Rejuvenation & Detoxification Healing Program — seven days of Ayurvedic treatment guided by Ayurvedic doctors — with an 8-day Kerala tour. The tour covers Cochin, Munnar, Thekkady and an Alleppey houseboat, then continues to Kovalam for beach evenings and Trivandrum sightseeing, ending with a drop-off at Trivandrum. Prefer a shorter tour? See the 6-day option.",
    overviewAr:
      "تجمع هذه الباقة بين برنامج سفاري ماستي للتجديد والتطهير العلاجي — سبعة أيام من العلاج بالأيورفيدا بإرشاد أطباء الأيورفيدا — وجولة في كيرالا لمدة ٨ أيام. تشمل الجولة كوتشي ومونار وثيكادي وقاربًا سكنيًا في ألابوزا، ثم تتابع إلى كوفالام لأمسيات الشاطئ وجولات ترفاندروم، وتنتهي بالتوصيل في ترفاندروم. تفضّلون جولة أقصر؟ اطّلعوا على خيار ٦ أيام.",
    heroImages: [
      "/images/ayurveda/shirodhara-woman.36f13e04.webp",
      "/images/ayurveda/head-massage-man.88c86736.webp",
      "/images/ayurveda/munnar-tea.eceeb9ea.webp",
      "/images/ayurveda/thekkady-periyar.2e7c1e2f.webp",
      "/images/collections/jewels-of-the-south-hero.cde936f4.webp",
      "/images/ayurveda/kovalam-beach.cb954b81.webp",
    ],
    highlights: [
      "7-day Rejuvenation & Detoxification Healing Program",
      "Two Ayurvedic therapies every day, with a daily doctor consultation",
      "Personalised diet, daily group yoga and meditation",
      "Then a Kerala tour: Cochin, Munnar, Thekkady, an Alleppey houseboat and Kovalam beach",
    ],
    highlightsAr: [
      "برنامج التجديد والتطهير العلاجي لمدة ٧ أيام",
      "علاجان أيورفيديان يوميًا مع استشارة يومية مع الطبيب",
      "نظام غذائي مخصص ويوغا جماعية وتأمل يوميًا",
      "ثم جولة في كيرالا: كوتشي ومونار وثيكادي وقارب سكني في ألابوزا وشاطئ كوفالام",
    ],
    itinerary: [PROGRAMME_STOP, ...KERALA_TOUR_COMMON, ...KERALA_TOUR_END_8],
    inclusions: AYURVEDA_PKG_INCLUSIONS,
    inclusionsAr: AYURVEDA_PKG_INCLUSIONS_AR,
    exclusions: AYURVEDA_PKG_EXCLUSIONS,
    exclusionsAr: AYURVEDA_PKG_EXCLUSIONS_AR,
    goodToKnow: AYURVEDA_PKG_GOOD_TO_KNOW,
    seoTitle: "Ayurveda Rejuvenation + 8-Day Kerala Tour (15 Days) | Safari Masti",
    seoDescription:
      "A 7-day Ayurvedic Rejuvenation & Detoxification Healing Program followed by an 8-day Kerala tour through Cochin, Munnar, Thekkady, Alleppey and Kovalam — curated by Safari Masti.",
    relatedTourSlugs: ["rejuvenation-detox-kerala-6-day-tour"],
  },
];

export function getTourBySlug(slug: string) {
  // Packages are resolved here too so the Build Your Journey form can name the selected package.
  return tours.find((t) => t.slug === slug) ?? packages.find((p) => p.slug === slug);
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
