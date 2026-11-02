import { ItineraryStop, Tour } from "./types";

/**
 * Safari Masti packages with published prices. Every itinerary, price, hotel, inclusion, exclusion and
 * term below comes from the package details supplied by Safari Masti (an emailed 5-day quotation and the
 * "Lux Tour Itinerary" document). Photos are free Unsplash images of the places named in each day.
 */

// ---- Shared terms -------------------------------------------------------------------------------------
const GENERAL_NOTES = {
  label: "Rates and booking terms",
  labelAr: "الأسعار وشروط الحجز",
  content:
    "Package rates are net and valid only for the mentioned dates. Quotations are based on the mentioned category of rooms at all hotels. All reservations are subject to availability at the time of confirmation, and rates may change without prior notice. Any change in the property, room category or transfers after confirmation will be payable extra, and services that are not used after confirmation are not refundable.",
  contentAr:
    "أسعار الباقة صافية وسارية للتواريخ المذكورة فقط. وتستند عروض الأسعار إلى فئة الغرف المذكورة في جميع الفنادق. وجميع الحجوزات خاضعة للتوافر وقت التأكيد، وقد تتغير الأسعار دون إشعار مسبق. أي تغيير في الفندق أو فئة الغرفة أو التنقلات بعد التأكيد يُدفع مقابله مبلغ إضافي، والخدمات غير المستخدمة بعد التأكيد غير قابلة للاسترداد.",
};

const ID_NOTE = {
  label: "Travel documents",
  labelAr: "وثائق السفر",
  content:
    "As per government policy, please carry a photo identity proof for every guest, for security reasons and smooth check-in. Non-resident Indian and foreign guests must carry their passport.",
  contentAr:
    "وفق سياسة الحكومة، يُرجى اصطحاب إثبات هوية بصورة لكل ضيف لأسباب أمنية وليتم تسجيل الوصول بسلاسة. وعلى المقيمين غير الهنود والضيوف الأجانب اصطحاب جواز السفر.",
};

const COMMON_EXCLUSIONS_AR = {
  noInsurance: "تذاكر الطيران ورسوم التأشيرة وضرائب المطار وأي نوع من أنواع التأمين",
};

// ======================================================================================================
// Package 1 — Kerala: Munnar, Thekkady & Alleppey, 5 days (two price options)
// ======================================================================================================
const FIVE_DAY_ITINERARY: ItineraryStop[] = [
  {
    label: "Day 01",
    labelAr: "اليوم ٠١",
    title: "Cochin to Munnar",
    titleAr: "من كوتشي إلى مونار",
    description:
      "Pick-up from Cochin Airport / Railway Station and drive to Munnar. On the way you can see the Cheeyappara and Valara waterfalls. Check in to the hotel on arrival. In the afternoon, visit Pothamedu View Point and the Tea Museum, and see tea gardens spread out like a green carpet. Overnight at the hotel.",
    descriptionAr:
      "الاستقبال من مطار كوتشي / محطة القطار والتوجه إلى مونار. وفي الطريق يمكنكم مشاهدة شلالات تشيّابارا وفالارا. تسجيل الوصول في الفندق عند الوصول. وبعد الظهر زيارة نقطة بوثاميدو للمشاهدة ومتحف الشاي، ورؤية مزارع الشاي ممتدة كسجادة خضراء. المبيت في الفندق.",
  },
  {
    label: "Day 02",
    labelAr: "اليوم ٠٢",
    title: "Munnar sightseeing",
    titleAr: "جولة في مونار",
    description:
      "After breakfast, continue sightseeing in Munnar: Rajamala (Eravikulam National Park), Top Station, Mattupetty Dam, Echo Point and Kundala Lake, where you can enjoy boating. Overnight at the hotel.",
    descriptionAr:
      "بعد الإفطار تواصلون الجولة في مونار: راجامالا (منتزه إيرافيكولام الوطني)، وتوب ستيشن، وسد ماتوبيتي، ونقطة الصدى، وبحيرة كوندالا حيث يمكنكم الاستمتاع بالقوارب. المبيت في الفندق.",
  },
  {
    label: "Day 03",
    labelAr: "اليوم ٠٣",
    title: "Munnar to Thekkady",
    titleAr: "من مونار إلى ثيكادي",
    description:
      "After breakfast, check out and drive to Thekkady through the panoramic Western Ghats, covered with spice plantations and streams. Check in to the hotel. Enjoy the stunning view of calm, crystal-clear Periyar Lake and a boat ride on it, watching wild animals. Overnight at the hotel in Thekkady.",
    descriptionAr:
      "بعد الإفطار تسجّلون المغادرة وتتجهون إلى ثيكادي عبر جبال الغاتس الغربية الخلابة المكسوّة بمزارع التوابل والجداول. تسجيل الوصول في الفندق. استمتعوا بمنظر بحيرة بيريار الهادئة الصافية وبجولة بالقارب فيها لمشاهدة الحيوانات البرية. المبيت في فندق ثيكادي.",
  },
  {
    label: "Day 04",
    labelAr: "اليوم ٠٤",
    title: "Thekkady to Alleppey — houseboat",
    titleAr: "من ثيكادي إلى ألابوزا — قارب سكني",
    description:
      "After breakfast, check out and drive to Alleppey. Check into the houseboat by noon and cruise the backwaters, taking in paddy fields, narrow canals, toddy-tapping, coir-making and village life. Overnight on the houseboat.",
    descriptionAr:
      "بعد الإفطار تسجّلون المغادرة وتتجهون إلى ألابوزا. تصعدون إلى القارب السكني بحلول الظهيرة وتجوبون المسطحات المائية، مشاهدين حقول الأرز والقنوات الضيقة وحصاد عصير النخيل وصناعة ألياف جوز الهند وحياة القرى. المبيت على القارب السكني.",
  },
  {
    label: "Day 05",
    labelAr: "اليوم ٠٥",
    title: "Departure from Cochin",
    titleAr: "المغادرة من كوتشي",
    description:
      "After breakfast, check out from the houseboat and proceed to Cochin Airport / Railway Station for your departure.",
    descriptionAr: "بعد الإفطار تسجّلون المغادرة من القارب السكني وتتجهون إلى مطار كوتشي / محطة القطار لمغادرتكم.",
  },
];

const FIVE_DAY_INCLUSIONS = [
  "Accommodation on double-sharing occupancy at hotels, subject to availability",
  "All meals on the private houseboat, featuring authentic, curated Kerala cuisine",
  "Private transfers and sightseeing, including all tolls, parking fees, fuel and driver allowances",
  "All applicable government taxes and service charges",
];
const FIVE_DAY_INCLUSIONS_AR = [
  "الإقامة على أساس الإشغال المزدوج في الفنادق، رهنًا بالتوافر",
  "جميع الوجبات على القارب السكني الخاص، من المطبخ الكيرالي الأصيل المنتقى",
  "التنقلات والجولات السياحية الخاصة شاملةً جميع رسوم العبور والمواقف والوقود وبدلات السائق",
  "جميع الضرائب الحكومية ورسوم الخدمة المطبقة",
];
const FIVE_DAY_EXCLUSIONS = [
  "Any meals and beverages not specified in the inclusions",
  "Domestic or international airfare and train tickets",
  "Mandatory Christmas and New Year's Eve gala dinner supplements",
  "Entry fees to monuments, parks and attractions",
  "Hotel and airport porterage, gratuities, travel insurance, alcoholic beverages, mineral water, telephone charges and laundry",
  "Any activities or services not explicitly detailed in the itinerary",
  "Incidental expenses from circumstances beyond our control, including flight or train delays, roadblocks, vehicle malfunctions, political disruptions or natural calamities",
];
const FIVE_DAY_EXCLUSIONS_AR = [
  "أي وجبات ومشروبات غير مذكورة ضمن البنود المشمولة",
  "تذاكر الطيران الداخلي أو الدولي وتذاكر القطار",
  "رسوم عشاء الغالا الإلزامي في عيد الميلاد وليلة رأس السنة",
  "رسوم الدخول إلى المعالم والمنتزهات والمواقع السياحية",
  "أجور الحمالين في الفنادق والمطارات، والإكراميات، والتأمين على السفر، والمشروبات الكحولية، والمياه المعدنية، ورسوم الهاتف، والغسيل",
  "أي أنشطة أو خدمات غير مفصّلة صراحةً في البرنامج",
  "النفقات الطارئة الناتجة عن ظروف خارجة عن إرادتنا، ومنها تأخر الرحلات الجوية أو القطارات، وإغلاق الطرق، وأعطال المركبات، والاضطرابات السياسية، والكوارث الطبيعية",
];

const HOUSEBOAT_5 = {
  label: "About houseboat stays",
  labelAr: "عن الإقامة على القوارب السكنية",
  content:
    "Check-in is at 12:00 and check-out at 09:00. By government regulation the houseboat stays anchored in one place from 6:00 pm to 8:00 am. Every houseboat has a navigator, a cook and a helper, and is for your exclusive use unless stated. In Deluxe houseboats the A/c runs from 9:00 pm to 6:00 am; in Premium houseboats it runs on request at any time. No two houseboats are alike in size, quality or interiors. Rooms are small with basic amenities, food is mostly South Indian with a limited choice, and a houseboat cannot be compared with the hotels you stay in. As the boat is anchored along the waterway at night, please carry mosquito and insect repellent and keep the bedroom and bathroom doors closed.",
  contentAr:
    "تسجيل الوصول الساعة ١٢:٠٠ والمغادرة الساعة ٠٩:٠٠. وبموجب لوائح الحكومة يبقى القارب السكني راسيًا في مكان واحد من الساعة ٦:٠٠ مساءً حتى ٨:٠٠ صباحًا. ولكل قارب ملاح وطاهٍ ومساعد، وهو مخصص لكم وحدكم ما لم يُذكر خلاف ذلك. وفي القوارب من فئة ديلوكس يعمل المكيّف من ٩:٠٠ مساءً حتى ٦:٠٠ صباحًا، أما في فئة بريميوم فيعمل عند الطلب في أي وقت. ولا يتشابه قاربان في الحجم أو الجودة أو التصميم الداخلي. والغرف صغيرة بمرافق أساسية، والطعام جنوب هندي في الغالب مع خيارات محدودة، ولا يمكن مقارنة القارب السكني بالفنادق التي تقيمون فيها. ولأن القارب يرسو على المجرى المائي ليلًا، يُرجى اصطحاب طارد للبعوض والحشرات وإبقاء أبواب غرفة النوم والحمام مغلقة.",
};

const FIVE_DAY_NOTES = [
  {
    label: "Payment",
    labelAr: "الدفع",
    content:
      "A minimum of 50% of the package cost is due with confirmation. The balance is due on or before the arrival date, or by the cut-off date given by the respective hotels, whichever is earlier.",
    contentAr:
      "يُدفع ما لا يقل عن ٥٠٪ من تكلفة الباقة عند التأكيد، ويُسدَّد الباقي في موعد أقصاه تاريخ الوصول أو تاريخ الإغلاق الذي تحدده الفنادق المعنية، أيهما أسبق.",
  },
  HOUSEBOAT_5,
  {
    label: "Important notes",
    labelAr: "ملاحظات مهمة",
    content:
      "This package is an offer, not a confirmation; we proceed with the booking only after we receive your confirmation. If rooms are not available at the hotels mentioned, we will provide alternative hotels of a similar category. Hotel check-in is at 14:00 and check-out at 11:00. Booking confirmation is subject to availability, and the rates are valid only for the stated period.",
    contentAr:
      "هذه الباقة عرض وليست تأكيدًا؛ ولن نمضي في الحجز إلا بعد استلام تأكيدكم. وفي حال عدم توفر الغرف في الفنادق المذكورة سنوفر فنادق بديلة من الفئة نفسها. تسجيل الوصول في الفندق الساعة ١٤:٠٠ والمغادرة الساعة ١١:٠٠. وتأكيد الحجز خاضع للتوافر، والأسعار سارية للفترة المذكورة فقط.",
  },
  ID_NOTE,
];

// ======================================================================================================
// Package 2 — Luxury Kerala, 8 days
// ======================================================================================================
const LUX_ITINERARY: ItineraryStop[] = [
  {
    label: "Day 01",
    labelAr: "اليوم ٠١",
    title: "Cochin arrival and Athirappilly",
    titleAr: "الوصول إلى كوتشي ثم أتيرابيلي",
    description:
      "Land at Cochin International Airport, meet your driver and drive straight to Athirappilly (about 1.5 hours) — an encounter with raw nature, famed for its 80-foot waterfall, often called the “Niagara of India”, set in ancient rainforest with misty river trails and the calls of the Great Indian Hornbill. Check in to your resort, then head to the falls and walk down to the base for a powerful view. Overnight at Athirappilly.",
    descriptionAr:
      "الهبوط في مطار كوتشي الدولي، ولقاء السائق والتوجه مباشرةً إلى أتيرابيلي (نحو ساعة ونصف) — لقاء مع الطبيعة البكر، تشتهر بشلالها الذي يبلغ ارتفاعه ٨٠ قدمًا والمعروف بـ«نياجرا الهند»، وسط غابات مطيرة قديمة ومسارات نهرية ضبابية وأصوات طائر أبو قرن الهندي الكبير. تسجيل الوصول في المنتجع، ثم التوجه إلى الشلالات والنزول إلى قاعدتها لمشاهدة مؤثرة. المبيت في أتيرابيلي.",
  },
  {
    label: "Day 02",
    labelAr: "اليوم ٠٢",
    title: "Scenic drive to misty Munnar",
    titleAr: "رحلة بانورامية إلى مونار الضبابية",
    description:
      "After breakfast, check out and enjoy a beautiful 4.5-hour drive up to the hill station of Munnar. Your driver stops at the Cheeyappara and Valara waterfalls for photos. As you climb into the cool mountain air, the road opens onto rolling carpets of tea estates. Check in to your hotel in the afternoon; in the evening stroll through the local spice markets or enjoy a warm cup of fresh local tea. Overnight in Munnar.",
    descriptionAr:
      "بعد الإفطار تسجّلون المغادرة وتستمتعون برحلة جميلة بالسيارة لمدة ٤٫٥ ساعات صعودًا إلى بلدة مونار الجبلية. يتوقف السائق عند شلالات تشيّابارا وفالارا لالتقاط الصور. ومع الصعود إلى هواء الجبل البارد، تنفتح الطريق على سجادات ممتدة من مزارع الشاي. تسجيل الوصول في الفندق بعد الظهر، وفي المساء جولة في أسواق التوابل المحلية أو فنجان دافئ من الشاي المحلي الطازج. المبيت في مونار.",
  },
  {
    label: "Day 03",
    labelAr: "اليوم ٠٣",
    title: "Munnar sightseeing — lakes and viewpoints",
    titleAr: "جولة في مونار — البحيرات ونقاط المشاهدة",
    description:
      "Visit the most scenic waterside spots of Munnar, starting with a morning drive to Mattupetty Dam, where wild elephants often come down to the water to drink. Next, Kundala Lake for an optional boat ride, then the popular Echo Point, where you can call your name out into the valley. Overnight in Munnar.",
    descriptionAr:
      "زيارة أجمل المواقع المطلة على المياه في مونار، تبدأ برحلة صباحية إلى سد ماتوبيتي حيث تنزل الأفيال البرية غالبًا إلى الماء لتشرب. ثم بحيرة كوندالا لجولة اختيارية بالقارب، فنقطة الصدى الشهيرة حيث يمكنكم أن تنادوا باسمكم في الوادي. المبيت في مونار.",
  },
  {
    label: "Day 04",
    labelAr: "اليوم ٠٤",
    title: "Munnar sightseeing — Eravikulam and tea country",
    titleAr: "جولة في مونار — إيرافيكولام وبلاد الشاي",
    description:
      "Start early at the famous Eravikulam National Park, natural home of the rare and endangered Nilgiri Tahr, with a scenic walk and mountain views. In the afternoon, visit the Tata Tea Museum to see how fresh leaves become tea, followed by a walk through a local spice garden. In the evening you can buy a ticket for a live Kathakali dance show, a colourful and ancient form of Kerala storytelling. Overnight in Munnar.",
    descriptionAr:
      "ابدؤوا مبكرًا بزيارة منتزه إيرافيكولام الوطني الشهير، الموطن الطبيعي لعنزة نيلغيري تار النادرة المهددة بالانقراض، مع نزهة خلابة ومناظر جبلية. وبعد الظهر زيارة متحف تاتا للشاي لمعرفة كيف تتحول الأوراق الطازجة إلى شاي، ثم نزهة في حديقة توابل محلية. وفي المساء يمكنكم شراء تذكرة لحضور عرض الكاثاكالي الحي، وهو فن رواية القصص الكيرالي القديم الملوّن. المبيت في مونار.",
  },
  {
    label: "Day 05",
    labelAr: "اليوم ٠٥",
    title: "To the wildlife and spice hills of Thekkady",
    titleAr: "إلى تلال الحياة البرية والتوابل في ثيكادي",
    description:
      "Leave the tea gardens and take a scenic 3.5-hour drive south to Thekkady, beside the Periyar Tiger Reserve. The afternoon begins with a guided tour of a spice plantation, where you can touch and smell black pepper, vanilla and cardamom growing on the plants. Later, enjoy a peaceful boat ride on Periyar Lake, spotting wild deer, bison and herds of elephants along the water's edge.",
    descriptionAr:
      "تغادرون حدائق الشاي وتستمتعون برحلة بانورامية بالسيارة لمدة ٣٫٥ ساعات جنوبًا إلى ثيكادي المجاورة لمحمية بيريار للنمور. تبدأ فترة ما بعد الظهر بجولة بصحبة مرشد في مزرعة توابل، حيث يمكنكم لمس الفلفل الأسود والفانيليا والهيل ورائحتها وهي تنمو على النباتات. وبعدها جولة هادئة بالقارب في بحيرة بيريار لمشاهدة الغزلان البرية والجاموس البري وقطعان الأفيال على ضفاف الماء.",
  },
  {
    label: "Day 06",
    labelAr: "اليوم ٠٦",
    title: "A luxury houseboat in Alleppey",
    titleAr: "قارب سكني فاخر في ألابوزا",
    description:
      "Move from the mountains to the lowlands of Alleppey, famous for its network of water canals. By lunchtime you step onto your private Kerala houseboat, where a personal chef and boat crew welcome you. Spend the day gliding down the quiet backwaters, eating freshly cooked local meals and watching village life pass by, before the boat anchors for the night.",
    descriptionAr:
      "الانتقال من الجبال إلى سهول ألابوزا المشهورة بشبكة قنواتها المائية. وبحلول وقت الغداء تصعدون إلى قاربكم السكني الخاص في كيرالا حيث يستقبلكم طاهٍ شخصي وطاقم القارب. تقضون اليوم في الإبحار بهدوء عبر المسطحات المائية الهادئة، وتتناولون وجبات محلية طازجة وتشاهدون حياة القرى تمر أمامكم، قبل أن يرسو القارب لليلة.",
  },
  {
    label: "Day 07",
    labelAr: "اليوم ٠٧",
    title: "Alleppey to Cochin",
    titleAr: "من ألابوزا إلى كوتشي",
    description:
      "After breakfast, check out of the houseboat and transfer to Cochin. On arrival, check in to your hotel, relax at your own pace and try the hotel's in-house activities. Overnight in Cochin.",
    descriptionAr:
      "بعد الإفطار تسجّلون المغادرة من القارب السكني وتنتقلون إلى كوتشي. وعند الوصول تسجّلون الدخول في الفندق وتستريحون على راحتكم وتجرّبون أنشطة الفندق الداخلية. المبيت في كوتشي.",
  },
  {
    label: "Day 08",
    labelAr: "اليوم ٠٨",
    title: "Departure from Cochin Airport",
    titleAr: "المغادرة من مطار كوتشي",
    description:
      "Enjoy a relaxed breakfast at the hotel and, depending on your flight time, some last-minute shopping for banana chips and local fabrics. In the afternoon, transfer to Cochin International Airport for your flight home, carrying unforgettable memories of Kerala.",
    descriptionAr:
      "إفطار هادئ في الفندق، وحسب موعد رحلتكم يمكنكم التسوق في اللحظات الأخيرة لشراء رقائق الموز والأقمشة المحلية. وبعد الظهر الانتقال إلى مطار كوتشي الدولي لرحلة العودة، حاملين معكم ذكريات لا تُنسى عن كيرالا.",
  },
];

const LUX_INCLUSIONS = [
  "Accommodation in the mentioned hotels on a twin-sharing basis",
  "Breakfast at all hotels",
  "Visit to Valley Plantation in Munnar with a tea-tasting session and hi-tea with snacks (learn about different tea varieties)",
  "Wildlife boating and an elephant ride in Thekkady",
  "All meals on the premium houseboat",
  "Transportation by A/c Innova car as per the itinerary",
  "Arrival assistance and an English-speaking driver",
  "Driver's expenses, parking, tolls and all taxes",
];
const LUX_INCLUSIONS_AR = [
  "الإقامة في الفنادق المذكورة على أساس الإقامة المزدوجة",
  "الإفطار في جميع الفنادق",
  "زيارة مزرعة فالي في مونار مع جلسة تذوّق للشاي وشاي مع وجبات خفيفة (للتعرف على أصناف الشاي المختلفة)",
  "جولة قارب لمشاهدة الحياة البرية وركوب الفيل في ثيكادي",
  "جميع الوجبات على القارب السكني الفاخر",
  "التنقل بسيارة إنوفا مكيَّفة وفق البرنامج",
  "المساعدة عند الوصول وسائق يتحدث الإنجليزية",
  "نفقات السائق والمواقف ورسوم العبور وجميع الضرائب",
];
const LUX_EXCLUSIONS = [
  "Any airfare, visa fees, airport tax or any kind of insurance cover",
  "Extra activities (jeep safari, boating and other entertainment or sports activities)",
  "Extra meals, any drinks, alcoholic beverages and porterage",
  "Extra stay before or after the tour",
  "Personal expenses such as tips, telephone, laundry and medical bills",
  "Any entry fees for sightseeing not mentioned in the itinerary",
  "Any other expenses not mentioned in the inclusions",
];
const LUX_EXCLUSIONS_AR = [
  COMMON_EXCLUSIONS_AR.noInsurance,
  "الأنشطة الإضافية (سفاري بالجيب، والجولات بالقوارب، وسائر أنشطة الترفيه والرياضة)",
  "الوجبات الإضافية وأي مشروبات ومشروبات كحولية وأجور الحمالين",
  "الإقامة الإضافية قبل الجولة أو بعدها",
  "المصاريف الشخصية كالإكراميات والهاتف والغسيل والفواتير الطبية",
  "أي رسوم دخول للمعالم السياحية غير المذكورة في البرنامج",
  "أي نفقات أخرى غير مذكورة ضمن البنود المشمولة",
];

const LUX_NOTES = [
  GENERAL_NOTES,
  {
    label: "Early arrival and late check-out",
    labelAr: "الوصول المبكر والمغادرة المتأخرة",
    content:
      "Early arrival is subject to availability. For a guaranteed early check-in, the reservation needs to start from the previous night. Late check-outs are available on request, subject to availability.",
    contentAr:
      "الوصول المبكر خاضع للتوافر. ولضمان تسجيل الوصول المبكر يجب أن يبدأ الحجز من الليلة السابقة. وتتوفر المغادرة المتأخرة عند الطلب ورهنًا بالتوافر.",
  },
  {
    label: "About houseboat stays",
    labelAr: "عن الإقامة على القوارب السكنية",
    content:
      "Check-in is typically between 11:30 and 13:30, and check-out is around 09:00 the next morning. Government regulations generally permit cruising only from 12:00 to 17:30; night-time cruising is prohibited, so houseboats dock by evening (usually 17:30 to 18:00) until the next morning. In standard or deluxe houseboats the A/c usually runs only from 20:00 to 07:00, whereas in a luxury or premium category it runs at any time.",
    contentAr:
      "يكون تسجيل الوصول عادةً بين ١١:٣٠ و١٣:٣٠، والمغادرة نحو الساعة ٠٩:٠٠ صباح اليوم التالي. وتسمح اللوائح الحكومية عمومًا بالإبحار من الساعة ١٢:٠٠ إلى ١٧:٣٠ فقط؛ ويُحظر الإبحار ليلًا، لذا ترسو القوارب السكنية مساءً (عادةً من ١٧:٣٠ إلى ١٨:٠٠) حتى صباح اليوم التالي. وفي القوارب القياسية أو ديلوكس يعمل المكيّف عادةً من ٢٠:٠٠ إلى ٠٧:٠٠ فقط، بينما يعمل في الفئة الفاخرة أو بريميوم في أي وقت.",
  },
  ID_NOTE,
];

// ======================================================================================================
export const packages: Tour[] = [
  {
    slug: "kerala-munnar-thekkady-alleppey-5-days",
    collectionSlug: "packages",
    title: "Kerala: Munnar, Thekkady & Alleppey — 5 Days",
    titleAr: "كيرالا: مونار وثيكادي وألابوزا — ٥ أيام",
    destination: "Kerala",
    destinationAr: "كيرالا",
    region: ["South"],
    category: ["South India", "Nature"],
    duration: "5 Days · 4 Nights",
    durationAr: "٥ أيام · ٤ ليالٍ",
    travelStyle: ["Comfort", "Premium"],
    bestFor: ["Hills, wildlife and backwaters in five days"],
    bestForAr: ["التلال والحياة البرية والمسطحات المائية في خمسة أيام"],
    shortDescription:
      "Five days through Kerala's hills, wildlife and backwaters — Munnar's tea gardens, Periyar Lake in Thekkady and a night on an Alleppey houseboat.",
    shortDescriptionAr:
      "خمسة أيام عبر تلال كيرالا وحياتها البرية ومسطحاتها المائية — مزارع الشاي في مونار، وبحيرة بيريار في ثيكادي، وليلة على قارب سكني في ألابوزا.",
    overview:
      "Start in Cochin and drive into the cool hills of Munnar for tea gardens, viewpoints and lakes, continue to Thekkady for Periyar Lake and its wildlife, then glide through the Alleppey backwaters on a houseboat before departing from Cochin. Choose 3★ hotels with a Deluxe A/c houseboat, or 4★ hotels with a Premium A/c houseboat.",
    overviewAr:
      "تبدؤون من كوتشي وتصعدون إلى تلال مونار الباردة لمزارع الشاي ونقاط المشاهدة والبحيرات، ثم تتابعون إلى ثيكادي لبحيرة بيريار وحياتها البرية، فتنسابون عبر مسطحات ألابوزا المائية على قارب سكني قبل المغادرة من كوتشي. اختاروا فنادق ٣ نجوم مع قارب سكني مكيَّف (ديلوكس)، أو فنادق ٤ نجوم مع قارب سكني مكيَّف (بريميوم).",
    heroImages: [
      "/images/packages/munnar-tea-hills.f52bf9db.webp",
      "/images/packages/mattupetty-dam.02b7b3fe.webp",
      "/images/packages/eravikulam-nilgiri-tahr.f5c9e7ec.webp",
      "/images/packages/periyar-lake.068d63f0.webp",
      "/images/packages/alleppey-houseboat.968d7769.webp",
      "/images/packages/alleppey-houseboat-canoe.8e5bd544.webp",
    ],
    highlights: [
      "Munnar's tea gardens, Eravikulam (Rajamala), Mattupetty Dam, Echo Point and Kundala Lake",
      "A boat ride on Periyar Lake in Thekkady, watching wild animals",
      "A night on a private houseboat in the Alleppey backwaters, with all meals on board",
      "Two price options: 3★ hotels with a Deluxe houseboat, or 4★ hotels with a Premium houseboat",
    ],
    highlightsAr: [
      "مزارع الشاي في مونار وإيرافيكولام (راجامالا) وسد ماتوبيتي ونقطة الصدى وبحيرة كوندالا",
      "جولة بالقارب في بحيرة بيريار في ثيكادي لمشاهدة الحيوانات البرية",
      "ليلة على قارب سكني خاص في مسطحات ألابوزا المائية مع جميع الوجبات على متنه",
      "خياران للسعر: فنادق ٣ نجوم مع قارب ديلوكس، أو فنادق ٤ نجوم مع قارب بريميوم",
    ],
    itinerary: FIVE_DAY_ITINERARY,
    inclusions: FIVE_DAY_INCLUSIONS,
    inclusionsAr: FIVE_DAY_INCLUSIONS_AR,
    exclusions: FIVE_DAY_EXCLUSIONS,
    exclusionsAr: FIVE_DAY_EXCLUSIONS_AR,
    pricing: {
      options: [
        {
          label: "Option 1",
          labelAr: "الخيار ١",
          detail: "3★ hotels / resorts with a Deluxe A/c houseboat",
          detailAr: "فنادق / منتجعات ٣ نجوم مع قارب سكني مكيَّف (ديلوكس)",
          amountInr: 37300,
        },
        {
          label: "Option 2",
          labelAr: "الخيار ٢",
          detail: "4★ hotels / resorts with a Premium A/c houseboat",
          detailAr: "فنادق / منتجعات ٤ نجوم مع قارب سكني مكيَّف (بريميوم)",
          amountInr: 48500,
        },
      ],
      note:
        "Prices include government taxes. Vehicle: Swift Dzire or a similar sedan; Innova supplement INR 4,000. Rates apply from 1 Oct to 5 Nov, 18 Nov to 20 Dec and 10 Jan to 31 Mar 2027. Bookings are subject to hotel availability at the time of confirmation.",
      noteAr:
        "الأسعار شاملة الضرائب الحكومية. المركبة: سويفت ديزاير أو سيارة سيدان مماثلة؛ ويُضاف مبلغ ٤٬٠٠٠ روبية هندية لسيارة إنوفا. تسري الأسعار من ١ أكتوبر إلى ٥ نوفمبر، ومن ١٨ نوفمبر إلى ٢٠ ديسمبر، ومن ١٠ يناير إلى ٣١ مارس ٢٠٢٧. والحجوزات خاضعة لتوفر الفنادق وقت التأكيد.",
    },
    goodToKnow: FIVE_DAY_NOTES,
    seoTitle: "Kerala Tour Package: Munnar, Thekkady & Alleppey — 5 Days | Safari Masti",
    seoDescription:
      "A 5-day Kerala package through Munnar, Thekkady and an Alleppey houseboat, with 3★ or 4★ options from INR 37,300 including government taxes — by Safari Masti, Cochin.",
    relatedTourSlugs: ["luxury-kerala-8-days"],
  },
  {
    slug: "luxury-kerala-8-days",
    collectionSlug: "packages",
    title: "Luxury Kerala — 8 Days",
    titleAr: "كيرالا الفاخرة — ٨ أيام",
    destination: "Kerala",
    destinationAr: "كيرالا",
    region: ["South"],
    category: ["South India", "Luxury", "Nature"],
    duration: "8 Days · 7 Nights",
    durationAr: "٨ أيام · ٧ ليالٍ",
    travelStyle: ["Luxury"],
    bestFor: ["A luxury escape through Kerala"],
    bestForAr: ["إجازة فاخرة عبر كيرالا"],
    shortDescription:
      "From the Athirappilly waterfall to Munnar's tea hills, Thekkady's wildlife and spice country, and a private premium houseboat in Alleppey.",
    shortDescriptionAr:
      "من شلال أتيرابيلي إلى تلال الشاي في مونار، ومن الحياة البرية وبلاد التوابل في ثيكادي إلى قارب سكني خاص فاخر في ألابوزا.",
    overview:
      "A luxury tour of Kerala that begins at Athirappilly Falls in the Western Ghats rainforest, climbs to the tea hills of Munnar for lakes, wildlife and tea country, visits the spice and wildlife hills of Thekkady, then drifts through the Alleppey backwaters on a private premium houseboat with a personal chef and crew, finishing with a night in Cochin.",
    overviewAr:
      "جولة فاخرة في كيرالا تبدأ عند شلالات أتيرابيلي في الغابات المطيرة بجبال الغاتس الغربية، وتصعد إلى تلال الشاي في مونار للبحيرات والحياة البرية وبلاد الشاي، ثم تزور تلال التوابل والحياة البرية في ثيكادي، وتنساب عبر مسطحات ألابوزا المائية على قارب سكني خاص فاخر بصحبة طاهٍ شخصي وطاقم، وتختتم بليلة في كوتشي.",
    heroImages: [
      "/images/packages/athirappilly-falls.02518535.webp",
      "/images/packages/athirappilly-walkway.cae4bcb1.webp",
      "/images/packages/munnar-tea-road.ddf3bd6d.webp",
      "/images/packages/munnar-tea-estate.30b7e082.webp",
      "/images/packages/eravikulam-tahr-closeup.f58cb0d1.webp",
      "/images/packages/kerala-black-pepper.43635a5e.webp",
      "/images/packages/periyar-lake.068d63f0.webp",
      "/images/packages/alleppey-houseboat-canoe.8e5bd544.webp",
      "/images/packages/fort-kochi-fishing-nets.b52455f9.webp",
    ],
    highlights: [
      "Athirappilly Falls — the 80-foot “Niagara of India” in Western Ghats rainforest",
      "Munnar: Mattupetty Dam, Kundala Lake, Echo Point, Eravikulam National Park and the Tata Tea Museum",
      "A tea-tasting session with hi-tea at Valley Plantation, Munnar",
      "Wildlife boating and an elephant ride in Thekkady, plus a guided spice plantation tour",
      "A private premium A/c houseboat in Alleppey with a personal chef and crew, all meals on board",
    ],
    highlightsAr: [
      "شلالات أتيرابيلي — «نياجرا الهند» بارتفاع ٨٠ قدمًا في غابات جبال الغاتس الغربية المطيرة",
      "مونار: سد ماتوبيتي وبحيرة كوندالا ونقطة الصدى ومنتزه إيرافيكولام الوطني ومتحف تاتا للشاي",
      "جلسة تذوّق للشاي مع شاي ووجبات خفيفة في مزرعة فالي بمونار",
      "جولة قارب لمشاهدة الحياة البرية وركوب الفيل في ثيكادي، إضافةً إلى جولة بصحبة مرشد في مزرعة توابل",
      "قارب سكني خاص فاخر مكيَّف في ألابوزا بصحبة طاهٍ شخصي وطاقم، وجميع الوجبات على متنه",
    ],
    itinerary: LUX_ITINERARY,
    inclusions: LUX_INCLUSIONS,
    inclusionsAr: LUX_INCLUSIONS_AR,
    exclusions: LUX_EXCLUSIONS,
    exclusionsAr: LUX_EXCLUSIONS_AR,
    pricing: {
      options: [
        {
          label: "Total package cost",
          labelAr: "التكلفة الإجمالية للباقة",
          detail: "Including government taxes · twin-sharing accommodation",
          detailAr: "شاملة الضرائب الحكومية · إقامة مزدوجة",
          amountInr: 130500,
        },
      ],
    },
    hotels: [
      { place: "Athirappilly", placeAr: "أتيرابيلي", name: "Flora Misty Falls, Athirappilly / similar", nights: "1 Night", nightsAr: "ليلة واحدة" },
      { place: "Munnar", placeAr: "مونار", name: "Blanket Hotel & Spa / similar", nights: "3 Nights", nightsAr: "٣ ليالٍ" },
      { place: "Thekkady", placeAr: "ثيكادي", name: "Blanket Days Resort and Spa Thekkady / similar", nights: "1 Night", nightsAr: "ليلة واحدة" },
      { place: "Alleppey", placeAr: "ألابوزا", name: "Premium A/c Houseboat", nights: "1 Night", nightsAr: "ليلة واحدة" },
      { place: "Cochin", placeAr: "كوتشي", name: "Crowne Plaza Kochi / similar", nights: "1 Night", nightsAr: "ليلة واحدة" },
    ],
    goodToKnow: LUX_NOTES,
    seoTitle: "Luxury Kerala Tour Package — 8 Days | Safari Masti",
    seoDescription:
      "An 8-day luxury Kerala package: Athirappilly Falls, Munnar, Thekkady, a private premium Alleppey houseboat and Cochin, INR 130,500 including government taxes — by Safari Masti.",
    relatedTourSlugs: ["kerala-munnar-thekkady-alleppey-5-days"],
  },
];

export function getPackageBySlug(slug: string) {
  return packages.find((p) => p.slug === slug);
}

export function getRelatedPackages(pkg: Tour) {
  return (pkg.relatedTourSlugs ?? [])
    .map((slug) => getPackageBySlug(slug))
    .filter((p): p is Tour => Boolean(p));
}

/** The lowest published price for a package, in INR. */
export function lowestPrice(pkg: Tour): number | undefined {
  const amounts = pkg.pricing?.options.map((o) => o.amountInr);
  return amounts && amounts.length > 0 ? Math.min(...amounts) : undefined;
}
