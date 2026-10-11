/**
 * Extra content for the Kerala Ayurveda Rejuvenation page.
 *
 * Programme names, durations, "best for", key therapies and the "included in every stay" list all come
 * from the supplied Kerala Ayurveda document. The therapy explanations are general, widely known
 * descriptions of what each named treatment is — they make no medical claims and promise no specific
 * outcome, price, schedule or property. Anything not in the source (price, exact daily timetable,
 * resort name) is deliberately left out.
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
    name: { en: "Abhyangam — Full-Body Oil Massage", ar: "أبهيانغام — تدليك الجسم الكامل بالزيوت" },
    tag: { en: "Essential Body Refresh", ar: "الانتعاش الأساسي للجسم" },
    description: {
      en: "A rhythmic massage with warm herbal oils, traditionally given by two therapists working together. In the Ayurvedic tradition it is used to ease muscle tension, settle the nerves and prepare the body for the therapies that follow.",
      ar: "تدليك إيقاعي بزيوت عشبية دافئة، يقوم به عادةً معالجان يعملان معًا. وفي تقاليد الأيورفيدا يُستخدم لتخفيف شد العضلات وتهدئة الأعصاب وتهيئة الجسم للعلاجات التي تليه.",
    },
    image: "/images/ayurveda/head-massage-woman.webp",
    alt: {
      en: "A therapist gives a woman a calming head and shoulder massage in an open Kerala pavilion",
      ar: "معالجة تقدّم لسيدة تدليكًا مهدئًا للرأس والكتفين في جناح مفتوح في كيرالا",
    },
  },
  {
    id: "herbal-steam",
    name: { en: "Herbal Steam Bath", ar: "حمّام البخار العشبي" },
    tag: { en: "Essential Body Refresh", ar: "الانتعاش الأساسي للجسم" },
    description: {
      en: "Warm herbal steam taken in a traditional wooden chamber with the head kept outside. It is customarily paired with oil massage to leave the body feeling light, warm and deeply relaxed.",
      ar: "بخار عشبي دافئ يُؤخذ داخل غرفة خشبية تقليدية مع بقاء الرأس خارجها. ويُقرَن عادةً بتدليك الزيوت ليترك الجسم خفيفًا ودافئًا ومسترخيًا بعمق.",
    },
    image: "/images/ayurveda/steam-bath.webp",
    alt: {
      en: "A woman relaxing in a traditional wooden herbal steam cabinet",
      ar: "سيدة تسترخي داخل حمّام بخار عشبي خشبي تقليدي",
    },
  },
  {
    id: "shirodhara",
    name: { en: "Shirodhara — Warm Oil Pouring on the Forehead", ar: "شيرودارا — انسكاب الزيت الدافئ على الجبين" },
    tag: { en: "Deep Stress Relief", ar: "التخلص العميق من التوتر" },
    description: {
      en: "A thin, steady stream of warm herbal oil poured slowly over the forehead while you lie at rest. It is one of Ayurveda's most recognised therapies for calming an overactive mind.",
      ar: "خيط رفيع ثابت من الزيت العشبي الدافئ يُصبّ ببطء على الجبين وأنتم مستلقون في راحة تامة. وهو من أشهر علاجات الأيورفيدا لتهدئة الذهن المفرط النشاط.",
    },
    image: "/images/ayurveda/shirodhara-man.webp",
    alt: {
      en: "A man receiving Shirodhara, a stream of warm oil flowing onto his forehead",
      ar: "رجل يتلقى علاج شيرودارا بينما ينساب الزيت الدافئ على جبينه",
    },
  },
  {
    id: "herbal-pouch",
    name: { en: "Herbal Pouch Massage", ar: "التدليك بأكياس الأعشاب" },
    tag: { en: "Deep Stress Relief", ar: "التخلص العميق من التوتر" },
    description: {
      en: "Warm cloth pouches filled with herbs and medicinal powders, heated over steam and pressed gently over the body in a steady rhythm to release tension.",
      ar: "أكياس قماشية دافئة محشوّة بالأعشاب والمساحيق الطبية، تُسخَّن على البخار ثم تُضغط برفق على الجسم بإيقاع ثابت لتخفيف الشد.",
    },
    image: "/images/ayurveda/herbal-pouch.webp",
    alt: {
      en: "A therapist presses warm herbal pouches on a woman's shoulders",
      ar: "معالجة تضغط بأكياس الأعشاب الدافئة على كتفي سيدة",
    },
  },
  {
    id: "panchakarma",
    name: { en: "Panchakarma — Classical Cleansing Therapies", ar: "بانتشاكارما — علاجات التطهير الكلاسيكية" },
    tag: { en: "Total Body Detox & Reset", ar: "التطهير الشامل للجسم وإعادة الضبط" },
    description: {
      en: "Panchakarma, meaning “five actions”, is Ayurveda's classical system of internal and external cleansing. In your programme it is followed under the guidance of our Ayurvedic doctors, together with tissue-strengthening massages and a personalised diet.",
      ar: "بانتشاكارما، وتعني «الأفعال الخمسة»، هي منظومة الأيورفيدا الكلاسيكية للتطهير الداخلي والخارجي. وفي برنامجكم تُتَّبع بإشراف أطبائنا المتخصصين في الأيورفيدا، إلى جانب تدليك يقوّي الأنسجة ونظام غذائي مخصص لكم.",
    },
    image: "/images/ayurveda/herbs-oils.webp",
    alt: {
      en: "Brass bowls of Ayurvedic herbs, powders and golden herbal oils on a wooden table",
      ar: "أوعية نحاسية من الأعشاب والمساحيق الأيورفيدية والزيوت العشبية الذهبية على طاولة خشبية",
    },
  },
  {
    id: "yoga-meditation",
    name: { en: "Yoga & Guided Meditation", ar: "اليوغا والتأمل الموجَّه" },
    tag: { en: "Part of every stay", ar: "ضمن كل إقامة" },
    description: {
      en: "Gentle morning yoga to wake the body, and an evening guided meditation to close the day — an everyday rhythm that carries the calm of the therapies into the rest of your time.",
      ar: "يوغا صباحية هادئة توقظ الجسم، وتأمل موجَّه مسائي يختم اليوم — إيقاع يومي ينقل سكينة العلاجات إلى بقية وقتكم.",
    },
    image: "/images/ayurveda/yoga-group.webp",
    alt: {
      en: "Men and women practising morning yoga on an open-air pavilion among coconut palms",
      ar: "رجال ونساء يمارسون يوغا الصباح في جناح مفتوح بين أشجار جوز الهند",
    },
  },
];

export const ayurvedaSteps: { title: Bi; description: Bi }[] = [
  {
    title: { en: "Consult", ar: "الاستشارة" },
    description: {
      en: "You meet our Ayurvedic doctors, who understand your body type, your routine and what you hope to feel at the end of your stay.",
      ar: "تلتقون أطباءنا المتخصصين في الأيورفيدا، ليفهموا طبيعة جسمكم ونمط حياتكم وما تأملون أن تشعروا به في نهاية إقامتكم.",
    },
  },
  {
    title: { en: "Prescribe", ar: "وصف العلاج" },
    description: {
      en: "Treatments and oils are prescribed for you by certified traditional doctors — not picked from a fixed menu.",
      ar: "يصف لكم أطباء تقليديون معتمدون العلاجات والزيوت المناسبة لكم، بدلًا من اختيارها من قائمة ثابتة.",
    },
  },
  {
    title: { en: "Restore", ar: "التجديد" },
    description: {
      en: "Experienced therapists carry out your therapies, supported by tailored vegetarian meals, morning yoga and evening meditation.",
      ar: "يقوم معالجون ذوو خبرة بتنفيذ علاجاتكم، بدعم من وجبات نباتية مخصصة ويوغا صباحية وتأمل مسائي.",
    },
  },
  {
    title: { en: "Review", ar: "المتابعة" },
    description: {
      en: "Daily consultations with the doctors keep your programme in step with how your body responds.",
      ar: "تبقي الاستشارات اليومية مع الأطباء برنامجكم متوافقًا مع استجابة جسمكم.",
    },
  },
];

export const ayurvedaIncluded: { title: Bi; description: Bi; image: string; alt: Bi }[] = [
  {
    title: { en: "Daily Doctor Consultations", ar: "استشارات طبية يومية" },
    description: {
      en: "Personalised consultations with our Ayurvedic doctors every day.",
      ar: "استشارات شخصية يوميًا مع أطبائنا المتخصصين في الأيورفيدا.",
    },
    image: "/images/ayurveda/consultation.webp",
    alt: {
      en: "An Ayurvedic doctor checking a guest's pulse during a consultation",
      ar: "طبيبة أيورفيدا تفحص نبض أحد الضيوف خلال الاستشارة",
    },
  },
  {
    title: { en: "Three Tailored Vegetarian Meals", ar: "ثلاث وجبات نباتية مخصصة" },
    description: {
      en: "Three vegetarian meals daily, designed for your body type.",
      ar: "ثلاث وجبات نباتية يوميًا، مصمَّمة بما يناسب طبيعة جسمكم.",
    },
    image: "/images/ayurveda/ayurvedic-meal.webp",
    alt: {
      en: "A Kerala-style vegetarian meal served on a banana leaf",
      ar: "وجبة نباتية على الطريقة الكيرالية مقدَّمة على ورقة موز",
    },
  },
  {
    title: { en: "Morning Yoga", ar: "يوغا صباحية" },
    description: {
      en: "Gentle morning yoga sessions to begin each day.",
      ar: "جلسات يوغا صباحية هادئة لبدء كل يوم.",
    },
    image: "/images/ayurveda/yoga-woman.webp",
    alt: {
      en: "A woman in a seated yoga pose beside the Kerala backwaters at sunrise",
      ar: "سيدة في وضعية يوغا جلوس بجوار مياه كيرالا الراكدة عند شروق الشمس",
    },
  },
  {
    title: { en: "Evening Guided Meditation", ar: "تأمل موجَّه مسائي" },
    description: {
      en: "A guided meditation each evening to settle the mind before rest.",
      ar: "تأمل موجَّه كل مساء لتهدئة الذهن قبل الراحة.",
    },
    image: "/images/ayurveda/meditation-man.webp",
    alt: {
      en: "A man meditating on a quiet wooden veranda surrounded by greenery",
      ar: "رجل يتأمل على شرفة خشبية هادئة تحيط بها الخضرة",
    },
  },
];

export const ayurvedaGallery: { src: string; alt: Bi }[] = [
  {
    src: "/images/ayurveda/pavilion.webp",
    alt: { en: "An open-air treatment pavilion beside the Kerala backwaters", ar: "جناح علاج مفتوح بجوار مياه كيرالا الراكدة" },
  },
  {
    src: "/images/ayurveda/shirodhara-woman.webp",
    alt: { en: "A woman receiving Shirodhara in a calm treatment room", ar: "سيدة تتلقى علاج شيرودارا في غرفة علاج هادئة" },
  },
  {
    src: "/images/ayurveda/head-massage-man.webp",
    alt: { en: "A man receiving a calming head and shoulder massage", ar: "رجل يتلقى تدليكًا مهدئًا للرأس والكتفين" },
  },
  {
    src: "/images/ayurveda/couple-herbal-tea.webp",
    alt: { en: "A couple enjoying herbal tea on a wooden veranda", ar: "زوجان يستمتعان بشاي الأعشاب على شرفة خشبية" },
  },
];

export const ayurvedaFaqs: { q: Bi; a: Bi }[] = [
  {
    q: { en: "How long should I stay?", ar: "كم ينبغي أن تكون مدة الإقامة؟" },
    a: {
      en: "It depends on what you want from the stay. Essential Body Refresh is 3 to 5 days for a short, effective break; Deep Stress Relief is 7 days; Total Body Detox & Reset is 14 days or more for deeper, longer-term goals.",
      ar: "يعتمد ذلك على ما تريدونه من الإقامة. فبرنامج الانتعاش الأساسي للجسم من ٣ إلى ٥ أيام لاستراحة قصيرة وفعّالة، والتخلص العميق من التوتر ٧ أيام، والتطهير الشامل للجسم وإعادة الضبط ١٤ يومًا فأكثر لأهداف أعمق وأطول أمدًا.",
    },
  },
  {
    q: { en: "Who prescribes and performs the treatments?", ar: "من يصف العلاجات ومن ينفّذها؟" },
    a: {
      en: "Treatments are prescribed by certified traditional Ayurvedic doctors and performed by experienced therapists, with daily consultations throughout your stay.",
      ar: "يصف العلاجات أطباء أيورفيدا تقليديون معتمدون، وينفّذها معالجون ذوو خبرة، مع استشارات يومية طوال فترة إقامتكم.",
    },
  },
  {
    q: { en: "What about food?", ar: "وماذا عن الطعام؟" },
    a: {
      en: "Three tailored vegetarian meals a day are part of every stay, designed for your body type. Detox programmes follow a stricter personalised diet.",
      ar: "ثلاث وجبات نباتية مخصصة يوميًا جزء من كل إقامة، ومصمَّمة بما يناسب طبيعة جسمكم. وتعتمد برامج التطهير نظامًا غذائيًا شخصيًا أكثر صرامة.",
    },
  },
  {
    q: { en: "Do I need yoga experience?", ar: "هل أحتاج إلى خبرة في اليوغا؟" },
    a: {
      en: "The daily yoga is gentle, and the evening meditation is guided, so both are suited to those new to them.",
      ar: "اليوغا اليومية هادئة والتأمل المسائي موجَّه، لذا فهما مناسبان لمن لم يمارسهما من قبل.",
    },
  },
  {
    q: { en: "Can I combine it with sightseeing in Kerala or India?", ar: "هل يمكن الجمع بينها وبين زيارة معالم كيرالا أو الهند؟" },
    a: {
      en: "Yes. Safari Masti designs custom journeys across India, so we can plan Kerala sightseeing or another destination before or after your Ayurveda stay.",
      ar: "نعم. تصمّم سفاري ماستي رحلات مخصصة في أنحاء الهند، لذا يمكننا تخطيط زيارة معالم كيرالا أو وجهة أخرى قبل إقامتكم الأيورفيدية أو بعدها.",
    },
  },
  {
    q: { en: "How do I get prices and dates?", ar: "كيف أحصل على الأسعار والمواعيد؟" },
    a: {
      en: "Every programme is shaped around your dates and goals, so we prepare a personal proposal rather than a fixed price list. Message us on WhatsApp or use Build Your Journey and we will get back to you.",
      ar: "يُصمَّم كل برنامج حسب تواريخكم وأهدافكم، لذلك نعدّ لكم عرضًا شخصيًا بدلًا من قائمة أسعار ثابتة. راسلونا عبر واتساب أو استخدموا «صمّم رحلتك» وسنعاود التواصل معكم.",
    },
  },
  {
    q: { en: "Is Ayurveda a substitute for medical care?", ar: "هل تغني الأيورفيدا عن الرعاية الطبية؟" },
    a: {
      en: "No. These are wellness programmes. Please tell our doctors about any health condition or medication so your programme can be planned safely, and keep following your own doctor's advice.",
      ar: "لا. هذه برامج للعافية. يُرجى إبلاغ أطبائنا بأي حالة صحية أو أدوية تتناولونها ليُخطَّط برنامجكم بأمان، ومواصلة اتباع نصائح طبيبكم الخاص.",
    },
  },
];

export const ayurvedaCopy = {
  therapiesEyebrow: { en: "The Therapies", ar: "العلاجات" },
  therapiesTitle: { en: "What your stay is made of", ar: "ما تتكوّن منه إقامتكم" },
  therapiesIntro: {
    en: "Each programme draws on classical Ayurvedic therapies. Here is what the treatments named in our programmes actually are.",
    ar: "يستند كل برنامج إلى علاجات أيورفيدية كلاسيكية. وهذا شرح لما تعنيه العلاجات المذكورة في برامجنا.",
  },
  stepsEyebrow: { en: "How It Works", ar: "كيف يسير البرنامج" },
  stepsTitle: { en: "A stay shaped around your body", ar: "إقامة مصمَّمة على مقاس جسمكم" },
  includedEyebrow: { en: "Included in Every Stay", ar: "ضمن كل إقامة" },
  includedTitle: { en: "The daily rhythm of your retreat", ar: "الإيقاع اليومي لخلوتكم" },
  compareEyebrow: { en: "Compare Programmes", ar: "قارنوا بين البرامج" },
  compareTitle: { en: "Which programme is right for you?", ar: "أي البرامج يناسبكم؟" },
  colProgramme: { en: "Programme", ar: "البرنامج" },
  colDuration: { en: "Duration", ar: "المدة" },
  colBestFor: { en: "Best for", ar: "الأنسب لـ" },
  colTherapies: { en: "Key therapies", ar: "أبرز العلاجات" },
  viewProgramme: { en: "View programme", ar: "عرض البرنامج" },
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
    en: "Share your dates and what you hope to feel, and we'll design your Ayurveda stay — on its own, or as part of a wider journey through Kerala and India.",
    ar: "شاركونا تواريخكم وما تأملون أن تشعروا به، وسنصمّم لكم إقامتكم الأيورفيدية — بمفردها أو ضمن رحلة أوسع في كيرالا والهند.",
  },
  ctaPrimary: { en: "Plan my Ayurveda stay", ar: "خطّطوا لإقامتي الأيورفيدية" },
  ctaWhatsapp: { en: "Chat on WhatsApp", ar: "تحدثوا معنا عبر واتساب" },
  ctaWhatsappMessage: {
    en: "Hello Safari Masti, I'd like to know more about your Kerala Ayurveda programmes.",
    ar: "مرحبًا سفاري ماستي، أودّ معرفة المزيد عن برامج الأيورفيدا في كيرالا.",
  },
};
