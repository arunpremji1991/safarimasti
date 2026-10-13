/**
 * Content for the Kerala Ayurveda page: a 7-day Rejuvenation & Detoxification Healing Program
 * followed by a Kerala tour of the guest's choice (6 or 8 days).
 *
 * Sources: the supplied "Kerala PKG" document (tour itineraries, inclusions, exclusions, terms) and the
 * supplied Rejuvenation & Detoxification programme page (treatment details), rewritten in our own words.
 * The therapy explanations are general descriptions of what each named treatment is — they make no
 * medical claims and promise no specific outcome, price or property.
 */

interface Bi {
  en: string;
  ar: string;
}

export interface AyurvedaTherapy {
  id: string;
  name: Bi;
  tag: Bi;
  description: Bi;
  image: string;
  alt: Bi;
}

export const ayurvedaTherapies: AyurvedaTherapy[] = [
  {
    id: "abhyangam",
    name: { en: "Abhyangam — Herbal Oil Massage", ar: "أبهيانغام — التدليك بالزيوت العشبية" },
    tag: { en: "Part of the daily therapies", ar: "من العلاجات اليومية" },
    description: {
      en: "A rhythmic massage with warm herbal oils, given by trained therapists. In the Ayurvedic tradition it is used to ease muscle tension, settle the nerves and prepare the body for the therapies that follow.",
      ar: "تدليك إيقاعي بزيوت عشبية دافئة، يقوم به معالجون مدرَّبون. وفي تقاليد الأيورفيدا يُستخدم لتخفيف شد العضلات وتهدئة الأعصاب وتهيئة الجسم للعلاجات التي تليه.",
    },
    image: "/images/ayurveda/head-massage-woman.80fc83a9.webp",
    alt: {
      en: "A therapist gives a woman a calming head and shoulder massage in an open Kerala pavilion",
      ar: "معالجة تقدّم لسيدة تدليكًا مهدئًا للرأس والكتفين في جناح مفتوح في كيرالا",
    },
  },
  {
    id: "shirodhara",
    name: { en: "Shirodhara — Warm Oil on the Forehead", ar: "شيرودارا — الزيت الدافئ على الجبين" },
    tag: { en: "Part of the daily therapies", ar: "من العلاجات اليومية" },
    description: {
      en: "A thin, steady stream of warm medicated oil poured slowly over the forehead while you lie at rest. It is one of Ayurveda's most recognised therapies for calming an overactive mind.",
      ar: "خيط رفيع ثابت من الزيت الطبي الدافئ يُصبّ ببطء على الجبين وأنتم مستلقون في راحة تامة. وهو من أشهر علاجات الأيورفيدا لتهدئة الذهن المفرط النشاط.",
    },
    image: "/images/ayurveda/shirodhara-man.b7e878d8.webp",
    alt: {
      en: "A man receiving Shirodhara, a stream of warm oil flowing onto his forehead",
      ar: "رجل يتلقى علاج شيرودارا بينما ينساب الزيت الدافئ على جبينه",
    },
  },
  {
    id: "udvarthana",
    name: { en: "Udvarthana — Herbal Powder Massage", ar: "أودفارتانا — التدليك بمسحوق الأعشاب" },
    tag: { en: "Part of the daily therapies", ar: "من العلاجات اليومية" },
    description: {
      en: "A massage with dry herbal powders, applied in firm, upward strokes. Traditionally it is used to stimulate circulation and leave the body feeling light and refreshed.",
      ar: "تدليك بمساحيق الأعشاب الجافة بحركات قوية صاعدة. ويُستخدم تقليديًا لتنشيط الدورة الدموية وإشعار الجسم بالخفة والانتعاش.",
    },
    image: "/images/ayurveda/herbs-oils.2d622258.webp",
    alt: {
      en: "Brass bowls of Ayurvedic herbs, powders and golden herbal oils on a wooden table",
      ar: "أوعية نحاسية من الأعشاب والمساحيق الأيورفيدية والزيوت العشبية الذهبية على طاولة خشبية",
    },
  },
  {
    id: "yoga-meditation",
    name: { en: "Group Yoga & Guided Meditation", ar: "اليوغا الجماعية والتأمل الموجَّه" },
    tag: { en: "Every day", ar: "كل يوم" },
    description: {
      en: "Yoga and breathing practice in the morning, following your doctor's advice, and a guided meditation in the evening to settle the mind before rest.",
      ar: "يوغا وتمارين تنفس في الصباح وفق إرشادات طبيبكم، وتأمل موجَّه في المساء لتهدئة الذهن قبل الراحة.",
    },
    image: "/images/ayurveda/yoga-group.ed9d4bda.webp",
    alt: {
      en: "Men and women practising morning yoga on an open-air pavilion among coconut palms",
      ar: "رجال ونساء يمارسون يوغا الصباح في جناح مفتوح بين أشجار جوز الهند",
    },
  },
  {
    id: "diet",
    name: { en: "A Personalised Diet", ar: "نظام غذائي مخصص" },
    tag: { en: "Every day", ar: "كل يوم" },
    description: {
      en: "Three meals a day planned by your doctor around your constitution and digestion — light, nourishing food, freshly prepared and easy to digest.",
      ar: "ثلاث وجبات يوميًا يخطّطها طبيبكم بما يناسب طبيعة جسمكم وجهازكم الهضمي — طعام خفيف مغذٍّ يُحضَّر طازجًا وسهل الهضم.",
    },
    image: "/images/ayurveda/ayurvedic-meal.1dc5e044.webp",
    alt: {
      en: "A Kerala-style vegetarian meal served on a banana leaf",
      ar: "وجبة نباتية على الطريقة الكيرالية مقدَّمة على ورقة موز",
    },
  },
];

export const ayurvedaSteps: { title: Bi; description: Bi }[] = [
  {
    title: { en: "Assess", ar: "التقييم" },
    description: {
      en: "An Ayurvedic doctor reviews your health history, habits and goals, and maps your body's constitution and imbalances.",
      ar: "يراجع طبيب أيورفيدا تاريخكم الصحي وعاداتكم وأهدافكم، ويحدد طبيعة جسمكم وما يعتريه من اختلال.",
    },
  },
  {
    title: { en: "Personalise", ar: "التخصيص" },
    description: {
      en: "Your therapies, diet and daily routine are planned for you — not picked from a fixed menu.",
      ar: "تُخطَّط علاجاتكم ونظامكم الغذائي وروتينكم اليومي خصيصًا لكم، لا تُختار من قائمة ثابتة.",
    },
  },
  {
    title: { en: "Restore", ar: "التجديد" },
    description: {
      en: "Two Ayurvedic therapies every day, supported by yoga, meditation and meals that follow your plan.",
      ar: "علاجان أيورفيديان كل يوم، بدعم من اليوغا والتأمل ووجبات تتبع خطتكم.",
    },
  },
  {
    title: { en: "Review", ar: "المتابعة" },
    description: {
      en: "Daily check-ins with the doctor keep your plan in step with how your body responds.",
      ar: "تبقي الاستشارات اليومية مع الطبيب خطتكم متوافقة مع استجابة جسمكم.",
    },
  },
];

export const ayurvedaIncluded: { title: Bi; description: Bi; image: string; alt: Bi }[] = [
  {
    title: { en: "Daily Doctor Consultation", ar: "استشارة طبية يومية" },
    description: {
      en: "A personal consultation with your Ayurvedic doctor every day.",
      ar: "استشارة شخصية مع طبيب الأيورفيدا الخاص بكم كل يوم.",
    },
    image: "/images/ayurveda/consultation.5044c25f.webp",
    alt: {
      en: "An Ayurvedic doctor checking a guest's pulse during a consultation",
      ar: "طبيبة أيورفيدا تفحص نبض أحد الضيوف خلال الاستشارة",
    },
  },
  {
    title: { en: "Two Therapies Every Day", ar: "علاجان كل يوم" },
    description: {
      en: "Two Ayurvedic therapies daily, chosen and adapted by your doctor.",
      ar: "علاجان أيورفيديان يوميًا، يختارهما طبيبكم ويكيّفهما معكم.",
    },
    image: "/images/ayurveda/head-massage-man.88c86736.webp",
    alt: {
      en: "A man receiving a calming head and shoulder massage",
      ar: "رجل يتلقى تدليكًا مهدئًا للرأس والكتفين",
    },
  },
  {
    title: { en: "Personalised Diet", ar: "نظام غذائي مخصص" },
    description: {
      en: "Meals designed for your body type, three times a day.",
      ar: "وجبات مصمَّمة بما يناسب طبيعة جسمكم، ثلاث مرات يوميًا.",
    },
    image: "/images/ayurveda/ayurvedic-meal.1dc5e044.webp",
    alt: {
      en: "A Kerala-style vegetarian meal served on a banana leaf",
      ar: "وجبة نباتية على الطريقة الكيرالية مقدَّمة على ورقة موز",
    },
  },
  {
    title: { en: "Group Yoga & Meditation", ar: "يوغا جماعية وتأمل" },
    description: {
      en: "Yoga sessions and a guided meditation every day.",
      ar: "جلسات يوغا وتأمل موجَّه كل يوم.",
    },
    image: "/images/ayurveda/yoga-woman.46691773.webp",
    alt: {
      en: "A woman in a seated yoga pose beside the Kerala backwaters at sunrise",
      ar: "سيدة في وضعية يوغا جلوس بجوار مياه كيرالا الراكدة عند شروق الشمس",
    },
  },
];

/** A general outline of a programme day. Times and therapies follow each guest's doctor's plan. */
export const ayurvedaTypicalDay: { time: string; title: Bi; text: Bi }[] = [
  {
    time: "06:30",
    title: { en: "Yoga & breathing", ar: "اليوغا والتنفس" },
    text: { en: "Morning yoga and pranayama, as advised by your doctor.", ar: "يوغا صباحية وتمارين تنفس وفق إرشادات طبيبكم." },
  },
  {
    time: "08:00",
    title: { en: "Breakfast", ar: "الإفطار" },
    text: { en: "A light, nourishing breakfast.", ar: "إفطار خفيف ومغذٍّ." },
  },
  {
    time: "09:30",
    title: { en: "Morning therapy", ar: "علاج الصباح" },
    text: {
      en: "The first Ayurvedic therapy of the day, followed by rest and a doctor's review when scheduled.",
      ar: "أول علاج أيورفيدي في اليوم، يعقبه استراحة ومراجعة مع الطبيب عند الحاجة.",
    },
  },
  {
    time: "13:00",
    title: { en: "Lunch", ar: "الغداء" },
    text: { en: "A balanced meal planned for your constitution.", ar: "وجبة متوازنة مخططة بما يناسب طبيعة جسمكم." },
  },
  {
    time: "14:00",
    title: { en: "Learning & rest", ar: "التعلّم والراحة" },
    text: {
      en: "A rotating session — such as a cooking demonstration, garden visit or talk — when it suits you.",
      ar: "جلسة متنوعة — كعرض للطبخ أو زيارة للحديقة أو محاضرة — عندما تناسبكم.",
    },
  },
  {
    time: "15:30",
    title: { en: "Afternoon therapy", ar: "علاج بعد الظهر" },
    text: { en: "The second Ayurvedic therapy of the day, followed by rest.", ar: "العلاج الأيورفيدي الثاني في اليوم، يعقبه استراحة." },
  },
  {
    time: "18:30",
    title: { en: "Guided meditation", ar: "التأمل الموجَّه" },
    text: { en: "A guided meditation to calm the mind.", ar: "تأمل موجَّه لتهدئة الذهن." },
  },
  {
    time: "19:30",
    title: { en: "Dinner", ar: "العشاء" },
    text: { en: "A light, easily digestible dinner before an early night.", ar: "عشاء خفيف سهل الهضم قبل نوم مبكر." },
  },
];

/** The two packages: the same 7-day programme, then one of two Kerala tours. */
export const ayurvedaPackageRoutes: { slug: string; tourDays: number; route: Bi[] }[] = [
  {
    slug: "rejuvenation-detox-kerala-6-day-tour",
    tourDays: 6,
    route: [
      { en: "Cochin", ar: "كوتشي" },
      { en: "Munnar", ar: "مونار" },
      { en: "Thekkady", ar: "ثيكادي" },
      { en: "Alleppey houseboat", ar: "قارب سكني في ألابوزا" },
      { en: "Cochin drop-off", ar: "التوصيل في كوتشي" },
    ],
  },
  {
    slug: "rejuvenation-detox-kerala-8-day-tour",
    tourDays: 8,
    route: [
      { en: "Cochin", ar: "كوتشي" },
      { en: "Munnar", ar: "مونار" },
      { en: "Thekkady", ar: "ثيكادي" },
      { en: "Alleppey houseboat", ar: "قارب سكني في ألابوزا" },
      { en: "Kovalam", ar: "كوفالام" },
      { en: "Trivandrum drop-off", ar: "التوصيل في ترفاندروم" },
    ],
  },
];

export const ayurvedaGallery: { src: string; alt: Bi }[] = [
  {
    src: "/images/ayurveda/pavilion.1fc4c569.webp",
    alt: { en: "An open-air treatment pavilion beside the Kerala backwaters", ar: "جناح علاج مفتوح بجوار مياه كيرالا الراكدة" },
  },
  {
    src: "/images/ayurveda/shirodhara-woman.36f13e04.webp",
    alt: { en: "A woman receiving Shirodhara in a calm treatment room", ar: "سيدة تتلقى علاج شيرودارا في غرفة علاج هادئة" },
  },
  {
    src: "/images/ayurveda/munnar-tea.eceeb9ea.webp",
    alt: { en: "Tea plantations on the misty hills of Munnar", ar: "مزارع الشاي على تلال مونار الضبابية" },
  },
  {
    src: "/images/ayurveda/thekkady-periyar.2e7c1e2f.webp",
    alt: { en: "A boat on Periyar Lake in Thekkady with elephants at the shore", ar: "قارب على بحيرة بيريار في ثيكادي مع أفيال عند الشاطئ" },
  },
];

export const ayurvedaFaqs: { q: Bi; a: Bi }[] = [
  {
    q: { en: "How long is the package?", ar: "ما مدة الباقة؟" },
    a: {
      en: "Every package starts with a 7-day Rejuvenation & Detoxification Healing Program. After it you continue on a Kerala tour of your choice: 6 days (13 days in total) or 8 days (15 days in total).",
      ar: "تبدأ كل باقة ببرنامج التجديد والتطهير العلاجي لمدة ٧ أيام. وبعده تتابعون في جولة بكيرالا من اختياركم: ٦ أيام (١٣ يومًا في المجموع) أو ٨ أيام (١٥ يومًا في المجموع).",
    },
  },
  {
    q: { en: "What does the healing programme include?", ar: "ماذا يشمل البرنامج العلاجي؟" },
    a: {
      en: "A daily consultation with your Ayurvedic doctor, two Ayurvedic therapies every day, a personalised diet, group yoga and guided meditation. Therapies and timings follow your doctor's plan.",
      ar: "استشارة يومية مع طبيب الأيورفيدا الخاص بكم، وعلاجان أيورفيديان كل يوم، ونظام غذائي مخصص، ويوغا جماعية وتأمل موجَّه. وتتبع العلاجات ومواعيدها خطة طبيبكم.",
    },
  },
  {
    q: { en: "Who plans and performs the treatments?", ar: "من يخطّط العلاجات ومن ينفّذها؟" },
    a: {
      en: "Ayurvedic doctors plan your programme around your constitution and goals and review it with you daily; trained therapists carry out the therapies.",
      ar: "يخطّط أطباء الأيورفيدا برنامجكم بما يناسب طبيعة جسمكم وأهدافكم ويراجعونه معكم يوميًا، بينما ينفّذ العلاجات معالجون مدرَّبون.",
    },
  },
  {
    q: { en: "Can I choose my tour?", ar: "هل يمكنني اختيار الجولة؟" },
    a: {
      en: "Yes. After the 7 days of treatment you choose either the 6-day Kerala tour, or the 8-day tour that adds Kovalam beach and Trivandrum.",
      ar: "نعم. بعد ٧ أيام من العلاج تختارون إما جولة كيرالا لمدة ٦ أيام، أو جولة ٨ أيام التي تضيف شاطئ كوفالام ومدينة ترفاندروم.",
    },
  },
  {
    q: { en: "What is included in the tour?", ar: "ماذا تشمل الجولة؟" },
    a: {
      en: "Pick-up and drop-off, 3-star accommodation as per the itinerary, a houseboat stay at Alleppey with meals on board, an English or Hindi speaking driver and AC private transportation. Entry tickets, optional activities, airfare and GST are not included — each package page lists everything.",
      ar: "الاستقبال والتوصيل، وإقامة بفنادق ثلاث نجوم وفق البرنامج، ومبيت على قارب سكني في ألابوزا مع الوجبات على متنه، وسائق يتحدث الإنجليزية أو الهندية، وتنقل خاص مكيَّف. ولا تشمل تذاكر الدخول والأنشطة الاختيارية وتذاكر الطيران وضريبة GST — وتسرد صفحة كل باقة جميع التفاصيل.",
    },
  },
  {
    q: { en: "How do I get prices and dates?", ar: "كيف أحصل على الأسعار والمواعيد؟" },
    a: {
      en: "Every package is shaped around your dates and goals, so we prepare a personal proposal rather than a fixed price list. Message us on WhatsApp or use Build Your Journey and we will get back to you.",
      ar: "يُصمَّم كل برنامج حسب تواريخكم وأهدافكم، لذلك نعدّ لكم عرضًا شخصيًا بدلًا من قائمة أسعار ثابتة. راسلونا عبر واتساب أو استخدموا «صمّم رحلتك» وسنعاود التواصل معكم.",
    },
  },
  {
    q: { en: "Is Ayurveda a substitute for medical care?", ar: "هل تغني الأيورفيدا عن الرعاية الطبية؟" },
    a: {
      en: "No. This is a wellness programme. Please tell our doctors about any health condition or medication so your programme can be planned safely, and keep following your own doctor's advice.",
      ar: "لا. هذا برنامج للعافية. يُرجى إبلاغ أطبائنا بأي حالة صحية أو أدوية تتناولونها ليُخطَّط برنامجكم بأمان، ومواصلة اتباع نصائح طبيبكم الخاص.",
    },
  },
];

export const ayurvedaCopy = {
  planEyebrow: { en: "Your Journey in Two Parts", ar: "رحلتكم على مرحلتين" },
  planTitle: { en: "Heal first, then explore Kerala", ar: "ابدؤوا بالتعافي ثم استكشفوا كيرالا" },
  planPart1Label: { en: "Part 1", ar: "المرحلة ١" },
  planPart1Title: { en: "7-day Rejuvenation & Detoxification Healing Program", ar: "برنامج التجديد والتطهير العلاجي لمدة ٧ أيام" },
  planPart1Body: {
    en: "Two Ayurvedic therapies a day, a daily doctor consultation, a personalised diet, group yoga and meditation.",
    ar: "علاجان أيورفيديان يوميًا، واستشارة يومية مع الطبيب، ونظام غذائي مخصص، ويوغا جماعية وتأمل.",
  },
  planPart2Label: { en: "Part 2 — choose one", ar: "المرحلة ٢ — اختاروا واحدة" },
  planDays: { en: "days", ar: "أيام" },
  planTourWord: { en: "Kerala tour", ar: "جولة كيرالا" },
  planTotal: { en: "days in total", ar: "يومًا في المجموع" },
  therapiesEyebrow: { en: "The Programme", ar: "البرنامج" },
  therapiesTitle: { en: "What your healing programme is made of", ar: "ما يتكوّن منه برنامجكم العلاجي" },
  therapiesIntro: {
    en: "The seven days draw on classical Ayurvedic therapies and a daily rhythm of yoga, meditation and carefully planned meals. Here is what the treatments are.",
    ar: "تستند الأيام السبعة إلى علاجات أيورفيدية كلاسيكية وإيقاع يومي من اليوغا والتأمل ووجبات مخططة بعناية. وهذا شرح لما تعنيه هذه العلاجات.",
  },
  stepsEyebrow: { en: "How It Works", ar: "كيف يسير البرنامج" },
  stepsTitle: { en: "A programme shaped around your body", ar: "برنامج مصمَّم على مقاس جسمكم" },
  includedEyebrow: { en: "Every Day of the Programme", ar: "كل يوم من البرنامج" },
  includedTitle: { en: "The daily rhythm of your retreat", ar: "الإيقاع اليومي لخلوتكم" },
  dayEyebrow: { en: "A Day at the Programme", ar: "يوم في البرنامج" },
  dayTitle: { en: "What a typical day looks like", ar: "كيف يبدو يوم نموذجي" },
  dayNote: {
    en: "This is a general outline. Therapies, durations and timings follow your own doctor's plan.",
    ar: "هذا مخطط عام. وتتبع العلاجات ومدتها ومواعيدها خطة طبيبكم الخاص.",
  },
  compareEyebrow: { en: "Choose Your Package", ar: "اختاروا باقتكم" },
  compareTitle: { en: "Treatment first, then the Kerala tour you prefer", ar: "العلاج أولًا، ثم جولة كيرالا التي تفضّلونها" },
  colProgramme: { en: "Programme", ar: "البرنامج" },
  colRoute: { en: "Tour route", ar: "مسار الجولة" },
  colDuration: { en: "Duration", ar: "المدة" },
  programmeDays: { en: "7-day healing programme", ar: "برنامج علاجي لمدة ٧ أيام" },
  viewProgramme: { en: "View full itinerary", ar: "عرض البرنامج الكامل" },
  galleryEyebrow: { en: "Glimpses", ar: "لمحات" },
  galleryTitle: { en: "Calm, set in Kerala", ar: "سكينة في قلب كيرالا" },
  galleryNote: {
    en: "Images on this page are illustrative and created with AI to show the kind of experience; they do not depict a specific property.",
    ar: "الصور في هذه الصفحة توضيحية وأُنشئت بالذكاء الاصطناعي لتعبّر عن طبيعة التجربة، ولا تصوّر منشأة بعينها.",
  },
  faqEyebrow: { en: "Good to Know", ar: "معلومات مفيدة" },
  faqTitle: { en: "Questions, answered", ar: "أسئلة وأجوبتها" },
  ctaTitle: { en: "Tell us when you'd like to restore", ar: "أخبرونا متى تودّون استعادة حيويتكم" },
  ctaBody: {
    en: "Share your dates and which tour you prefer, and we'll prepare your personal proposal.",
    ar: "شاركونا تواريخكم والجولة التي تفضّلونها، وسنعدّ لكم عرضًا شخصيًا.",
  },
  ctaPrimary: { en: "Plan my Ayurveda stay", ar: "خطّطوا لإقامتي الأيورفيدية" },
  ctaWhatsapp: { en: "Chat on WhatsApp", ar: "تحدثوا معنا عبر واتساب" },
  ctaWhatsappMessage: {
    en: "Hello Safari Masti, I'd like to know more about your Ayurveda healing program with the Kerala tour.",
    ar: "مرحبًا سفاري ماستي، أودّ معرفة المزيد عن برنامج الأيورفيدا العلاجي مع جولة كيرالا.",
  },
};
