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
// Package 3 — Himachal: Shimla & Manali, 8 nights / 9 days from Delhi (per-person prices, three transport options)
// Source: "Shimla Manali 8N 9D PKG" document supplied by Safari Masti.
// ======================================================================================================
const SM_ITINERARY: ItineraryStop[] = [
  {
    label: "Day 01",
    labelAr: "اليوم ٠١",
    title: "Arrival in Delhi",
    titleAr: "الوصول إلى دلهي",
    description:
      "Arrive in Delhi, with direct door-to-door pick-up from Indira Gandhi International Airport (DEL) or New Delhi Railway Station (NDLS). Enjoy local sightseeing if time permits. Overnight at a Delhi hotel.",
    descriptionAr:
      "الوصول إلى دلهي مع استقبال مباشر من الباب إلى الباب من مطار إنديرا غاندي الدولي (DEL) أو محطة قطار نيودلهي (NDLS). جولة محلية إن سمح الوقت. المبيت في فندق بدلهي.",
  },
  {
    label: "Day 02",
    labelAr: "اليوم ٠٢",
    title: "Delhi to Shimla",
    titleAr: "من دلهي إلى شيملا",
    description: "Travel from Delhi to Shimla by car (by Volvo coach on Option A). Overnight stay in Shimla.",
    descriptionAr: "السفر من دلهي إلى شيملا بالسيارة (وبحافلة فولفو في الخيار أ). المبيت في شيملا.",
  },
  {
    label: "Day 03",
    labelAr: "اليوم ٠٣",
    title: "Shimla sightseeing — Kufri and Jakhoo Temple",
    titleAr: "جولة في شيملا — كوفري ومعبد جاخو",
    description:
      "A full day of local sightseeing in Shimla, including the full-day excursion to Kufri and Jakhoo Temple. Overnight stay in Shimla.",
    descriptionAr:
      "يوم كامل من الجولات المحلية في شيملا، يشمل الرحلة ليوم كامل إلى كوفري ومعبد جاخو. المبيت في شيملا.",
  },
  {
    label: "Day 04",
    labelAr: "اليوم ٠٤",
    title: "Shimla to Manali via the Kullu Valley",
    titleAr: "من شيملا إلى مانالي عبر وادي كولو",
    description:
      "Travel from Shimla to Manali through the breathtaking Kullu Valley. A welcome non-alcoholic drink is served on arrival at the mountain resort. Overnight stay in Manali.",
    descriptionAr:
      "السفر من شيملا إلى مانالي عبر وادي كولو الخلاب. يُقدَّم مشروب ترحيبي غير كحولي عند الوصول إلى المنتجع الجبلي. المبيت في مانالي.",
  },
  {
    label: "Day 05",
    labelAr: "اليوم ٠٥",
    title: "Manali local sightseeing",
    titleAr: "جولة محلية في مانالي",
    description:
      "A full day in Manali with a local heritage walk to Hadimba Temple, Vashisht Springs and a Tibetan Monastery. Overnight stay in Manali.",
    descriptionAr:
      "يوم كامل في مانالي مع جولة تراثية محلية إلى معبد هاديمبا وينابيع فاشيشت ودير تبتي. المبيت في مانالي.",
  },
  {
    label: "Day 06",
    labelAr: "اليوم ٠٦",
    title: "Solang Valley and the Atal Tunnel",
    titleAr: "وادي سولانغ ونفق أتال",
    description:
      "Head out from Manali to Solang Valley and drive through the Atal Tunnel — or, if you choose, to Rohtang Pass. The Rohtang Pass excursion needs an NGT permit and a local Manali Union 4x4 vehicle, which cost extra (see What's not included). Overnight stay in Manali.",
    descriptionAr:
      "الانطلاق من مانالي إلى وادي سولانغ والمرور عبر نفق أتال — أو إلى ممر روهتانغ إن رغبتم. وتتطلب رحلة ممر روهتانغ تصريح NGT ومركبة 4x4 محلية من نقابة مانالي بتكلفة إضافية (انظروا «ما لا يشمله البرنامج»). المبيت في مانالي.",
  },
  {
    label: "Day 07",
    labelAr: "اليوم ٠٧",
    title: "Manali to Chandigarh",
    titleAr: "من مانالي إلى تشانديغار",
    description:
      "Check out from the hotel in Manali and travel to Chandigarh (by Volvo coach on Option A). Overnight stay in Chandigarh.",
    descriptionAr:
      "تسجيل المغادرة من فندق مانالي والسفر إلى تشانديغار (وبحافلة فولفو في الخيار أ). المبيت في تشانديغار.",
  },
  {
    label: "Day 08",
    labelAr: "اليوم ٠٨",
    title: "Chandigarh city tour and on to Delhi",
    titleAr: "جولة في تشانديغار ثم إلى دلهي",
    description:
      "Chandigarh urban sightseeing — Nek Chand's Rock Garden and Sukhna Lake. In the afternoon, travel to Delhi. Overnight stay at a Delhi hotel.",
    descriptionAr:
      "جولة في مدينة تشانديغار — حديقة الصخور لنيك تشاند وبحيرة سوخنا. وبعد الظهر السفر إلى دلهي. المبيت في فندق بدلهي.",
  },
  {
    label: "Day 09",
    labelAr: "اليوم ٠٩",
    title: "Delhi and departure",
    titleAr: "دلهي والمغادرة",
    description:
      "Some shopping in Delhi if time permits, then drop-off at Delhi Airport or the railway station for your departure.",
    descriptionAr:
      "تسوّق في دلهي إن سمح الوقت، ثم التوصيل إلى مطار دلهي أو محطة القطار للمغادرة.",
  },
];

const SM_INCLUSIONS = [
  "Transport by the option you choose: a dedicated AC sedan (Dzire / Etios) or AC SUV (Innova / Crysta) for the whole Delhi–Shimla–Manali–Chandigarh–Delhi circuit, or semi-sleeper AC luxury Volvo tickets for Delhi–Shimla and Manali–Chandigarh with a dedicated small local cab (Alto / Swift) for sightseeing and transfers",
  "Door-to-door pick-up from Indira Gandhi International Airport (DEL) or New Delhi Railway Station (NDLS) on Day 1, and the final drop-off on Day 9",
  "All state border toll taxes, green taxes, fuel, parking fees and the driver's daily night-halt allowance",
  "Welcome non-alcoholic drinks on arrival at the mountain resorts",
  "8 breakfasts and 8 dinners (MAP plan) at the hotel buffet — a mix of Himachali, North Indian and Continental dishes",
  "Full-day excursion to Kufri and Jakhoo Temple in Shimla",
  "Solang Valley excursion and a drive through the Atal Tunnel in Manali",
  "Local heritage walk in Manali: Hadimba Temple, Vashisht Springs and a Tibetan Monastery",
  "City tour of Chandigarh: Nek Chand's Rock Garden and Sukhna Lake",
];

const SM_INCLUSIONS_AR = [
  "التنقل بحسب الخيار الذي تختارونه: سيارة سيدان مكيّفة مخصصة (ديزاير / إيتيوس) أو سيارة دفع رباعي مكيّفة (إنوفا / كريستا) طوال مسار دلهي – شيملا – مانالي – تشانديغار – دلهي، أو تذاكر حافلة فولفو فاخرة شبه مستلقية مكيّفة لمساري دلهي – شيملا ومانالي – تشانديغار مع سيارة محلية صغيرة مخصصة (ألتو / سويفت) للجولات والتنقلات",
  "استقبال من الباب إلى الباب من مطار إنديرا غاندي الدولي (DEL) أو محطة قطار نيودلهي (NDLS) في اليوم الأول، والتوصيل النهائي في اليوم التاسع",
  "جميع رسوم الطرق على حدود الولايات والضرائب الخضراء والوقود ورسوم المواقف وبدل مبيت السائق اليومي",
  "مشروبات ترحيبية غير كحولية عند الوصول إلى المنتجعات الجبلية",
  "٨ وجبات إفطار و٨ وجبات عشاء (نظام MAP) في بوفيه الفندق — تشكيلة من الأطباق الهيماشالية والهندية الشمالية والقارية",
  "رحلة ليوم كامل إلى كوفري ومعبد جاخو في شيملا",
  "رحلة إلى وادي سولانغ والمرور عبر نفق أتال في مانالي",
  "جولة تراثية محلية في مانالي: معبد هاديمبا وينابيع فاشيشت ودير تبتي",
  "جولة في مدينة تشانديغار: حديقة الصخور لنيك تشاند وبحيرة سوخنا",
];

const SM_EXCLUSIONS = [
  "GST: mandatory 5% Government Goods and Services Tax, charged over and above the final bill amount",
  "Airfare or train tickets from your home town to Delhi and back",
  "Lunches, mid-day meals, roadside snacks and mineral water bottles",
  "Personal bills such as laundry, tips, telephone calls, alcoholic drinks and room-service orders",
  "Rohtang Pass excursion: the NGT (National Green Tribunal) permit and the local Manali Union 4x4 vehicle, if you choose to visit — approximately ₹3,000 – ₹4,500 extra per vehicle",
  "Extensive inner-city monument sightseeing within Delhi on Day 1 or Day 9, unless explicitly added",
  "Entry tickets to monuments, museums and Pinjore Gardens, and camera passes",
  "Adventure activities: tokens for white-water rafting in Kullu, paragliding, zorbing, skiing and horse riding in Kufri / Solang",
  "Room heater (electric blower) charges at Budget and 3-Star properties in peak winter snow periods — usually ₹300 – ₹500 per night, paid directly at the reception",
];

const SM_EXCLUSIONS_AR = [
  "ضريبة السلع والخدمات (GST): ٥٪ إلزامية تُضاف فوق قيمة الفاتورة النهائية",
  "تذاكر الطيران أو القطار من مدينتكم إلى دلهي والعودة",
  "وجبات الغداء ووجبات منتصف النهار والوجبات الخفيفة على الطريق وزجاجات المياه المعدنية",
  "الفواتير الشخصية مثل الغسيل والإكراميات والمكالمات الهاتفية والمشروبات الكحولية وطلبات خدمة الغرف",
  "رحلة ممر روهتانغ: تصريح NGT (المحكمة الخضراء الوطنية) والمركبة 4x4 المحلية من نقابة مانالي إن اخترتم الزيارة — نحو ٣٬٠٠٠ إلى ٤٬٥٠٠ روبية إضافية للمركبة",
  "جولات واسعة لمعالم دلهي داخل المدينة في اليوم الأول أو التاسع ما لم تُضَف صراحةً",
  "تذاكر دخول المعالم والمتاحف وحدائق بينجور ورسوم تصريح الكاميرا",
  "الأنشطة المغامِرة: رموز التجديف في المياه البيضاء في كولو والتحليق الشراعي والتدحرج داخل الكرة (زوربينغ) والتزلج وركوب الخيل في كوفري / سولانغ",
  "رسوم سخّان الغرفة (المدفأة الكهربائية) في الفنادق الاقتصادية وفئة ٣ نجوم في ذروة موسم الثلوج الشتوي — عادةً ٣٠٠ إلى ٥٠٠ روبية لليلة تُدفع مباشرةً في الاستقبال",
];

const SM_NOTES = [
  {
    label: "How the price is set",
    labelAr: "كيف يُحدَّد السعر",
    content:
      "The starting price is based on budget 2★ hotels. The final package cost is dynamic and depends on your travel dates, seasonal demand peaks and any custom changes to the baseline itinerary. A final, binding quote is issued when your booking is confirmed.",
    contentAr:
      "يستند السعر الابتدائي إلى فنادق اقتصادية من فئة نجمتين. وتكلفة الباقة النهائية متغيرة بحسب تواريخ سفركم وذروات الطلب الموسمية وأي تعديلات خاصة على البرنامج الأساسي. ويصدر عرض سعر نهائي مُلزِم عند تأكيد الحجز.",
  },
  {
    label: "Transport options",
    labelAr: "خيارات التنقل",
    content:
      "Option A (INR 14,500 per person) uses semi-sleeper AC luxury Volvo coaches for Delhi–Shimla and Manali–Chandigarh, with a small local cab for sightseeing and transfers. Option B (INR 19,500 per person) is an exclusive AC sedan, and Option C (INR 26,000 per person) is an exclusive AC SUV, both for the entire circuit.",
    contentAr:
      "يعتمد الخيار أ (١٤٬٥٠٠ روبية هندية للشخص) على حافلات فولفو فاخرة مكيّفة شبه مستلقية لمساري دلهي – شيملا ومانالي – تشانديغار مع سيارة محلية صغيرة للجولات والتنقلات. والخيار ب (١٩٬٥٠٠ روبية للشخص) سيارة سيدان مكيّفة مخصصة، والخيار ج (٢٦٬٠٠٠ روبية للشخص) سيارة دفع رباعي مكيّفة مخصصة، كلاهما للمسار كاملاً.",
  },
  {
    label: "Rohtang Pass",
    labelAr: "ممر روهتانغ",
    content:
      "Day 6 covers Solang Valley and the Atal Tunnel. If you would like to visit Rohtang Pass instead, the NGT permit and a local Manali Union 4x4 vehicle are paid extra — approximately ₹3,000 – ₹4,500 per vehicle.",
    contentAr:
      "يغطي اليوم السادس وادي سولانغ ونفق أتال. وإن رغبتم بزيارة ممر روهتانغ بدلاً من ذلك، فإن تصريح NGT والمركبة 4x4 المحلية من نقابة مانالي تُدفع إضافةً — نحو ٣٬٠٠٠ إلى ٤٬٥٠٠ روبية للمركبة.",
  },
  {
    label: "Winter room heaters",
    labelAr: "سخّانات الغرف في الشتاء",
    content:
      "At Budget and 3-Star properties, electric blower / heater charges apply in peak winter snow periods — usually ₹300 – ₹500 per night, billed directly at the hotel reception.",
    contentAr:
      "في الفنادق الاقتصادية وفئة ٣ نجوم تُطبَّق رسوم المدفأة / السخّان الكهربائي في ذروة موسم الثلوج الشتوي — عادةً ٣٠٠ إلى ٥٠٠ روبية لليلة، وتُحاسَب مباشرةً في استقبال الفندق.",
  },
];

// ======================================================================================================
// Package 4 — Kerala hills & backwaters, 4 nights / 5 days (Arabic-speaking driver, A/c Innova Crysta)
// Source: "4 Nights/5 Days" package details (itinerary, inclusions, exclusions, general terms and houseboat
// notes) supplied by Safari Masti. No price was supplied, so the page shows "Request a Quote".
// ======================================================================================================
const KH_ITINERARY: ItineraryStop[] = [
  {
    label: "Day 01",
    labelAr: "اليوم ٠١",
    title: "Cochin to Munnar",
    titleAr: "من كوتشي إلى مونار",
    description:
      "On your arrival at Cochin Airport or Railway Station, our representative will greet you and assist with your transfer to Munnar, a breathtaking hill station 1,800 metres above sea level, famously known as a paradise for nature lovers. Along the scenic route, take a break to see the spectacular Cheyyappara Waterfalls. Arrive in Munnar, check into your chosen hotel or resort and enjoy a restful overnight stay.",
    descriptionAr:
      "عند وصولكم إلى مطار كوتشي أو محطة القطار يستقبلكم ممثلنا ويساعدكم في الانتقال إلى مونار، المحطة الجبلية الخلابة على ارتفاع ١٬٨٠٠ متر فوق سطح البحر والمعروفة بأنها جنة لعشاق الطبيعة. وفي الطريق الخلاب خذوا استراحة لمشاهدة شلالات تشيّابارا الرائعة. الوصول إلى مونار وتسجيل الوصول في الفندق أو المنتجع الذي اخترتموه والاستمتاع بمبيت هادئ.",
  },
  {
    label: "Day 02",
    labelAr: "اليوم ٠٢",
    title: "Munnar sightseeing",
    titleAr: "جولة في مونار",
    description:
      "Explore the best tourist places in Munnar. Start your day with breakfast before a full day of sightseeing. The morning is dedicated to Eravikulam National Park, home to rare wildlife and panoramic mountain views. In the afternoon, enjoy a scenic boat ride at Mattupetty Dam or Kundala Dam, take photos at the popular Echo Point and discover local history at the Tata Tea Museum. Spend a relaxing evening at leisure. Overnight in Munnar.",
    descriptionAr:
      "اكتشفوا أجمل الأماكن السياحية في مونار. ابدؤوا يومكم بالإفطار قبل جولة تستغرق اليوم كاملًا. الصباح مخصص لمنتزه إيرافيكولام الوطني، موطن الحياة البرية النادرة والمناظر الجبلية البانورامية. وبعد الظهر استمتعوا بجولة بالقارب الخلابة في سد ماتوبيتي أو سد كوندالا، والتقطوا الصور عند نقطة الصدى الشهيرة، وتعرّفوا على التاريخ المحلي في متحف تاتا للشاي. أمسية مريحة في أوقات الفراغ. المبيت في مونار.",
  },
  {
    label: "Day 03",
    labelAr: "اليوم ٠٣",
    title: "Munnar to Thekkady",
    titleAr: "من مونار إلى ثيكادي",
    description:
      "Travel from Munnar to the spice plantations of Thekkady. After breakfast, check out from your resort and head towards the lush forests of Thekkady. On arrival, check into your hotel. The afternoon features an educational spice plantation tour to see how local spices are grown. In the evening, experience a peaceful boat safari inside Periyar National Park, followed by free time for local shopping. Overnight in Thekkady.",
    descriptionAr:
      "الانتقال من مونار إلى مزارع التوابل في ثيكادي. بعد الإفطار تسجّلون المغادرة من المنتجع وتتجهون نحو غابات ثيكادي الخضراء. عند الوصول تسجّلون الوصول في الفندق. وبعد الظهر جولة تعليمية في مزرعة توابل لمعرفة كيف تُزرع التوابل المحلية. وفي المساء تعيشون سفاري هادئة بالقارب داخل منتزه بيريار الوطني، ثم وقت حر للتسوق المحلي. المبيت في ثيكادي.",
  },
  {
    label: "Day 04",
    labelAr: "اليوم ٠٤",
    title: "Thekkady to Alleppey — houseboat",
    titleAr: "من ثيكادي إلى ألابوزا — قارب سكني",
    description:
      "After breakfast, check out from your hotel in Thekkady and proceed to Alleppey — a captivating destination often called the “Venice of the East” for its network of canals. Renowned for its iconic houseboats, serene backwaters and pristine beaches, it is also famous for traditional coir crafts and fresh marine produce. Check in to the houseboat and start a peaceful backwater cruise on a traditional houseboat. Overnight on the Alleppey houseboat.",
    descriptionAr:
      "بعد الإفطار تسجّلون المغادرة من فندق ثيكادي وتتجهون إلى ألابوزا — الوجهة الساحرة التي يُطلق عليها غالبًا «بندقية الشرق» لشبكة قنواتها. وتشتهر بقواربها السكنية الأيقونية ومسطحاتها المائية الهادئة وشواطئها النقية، كما تشتهر بحرف ألياف جوز الهند التقليدية والمنتجات البحرية الطازجة. تصعدون إلى القارب السكني وتبدؤون رحلة هادئة في المسطحات المائية على قارب سكني تقليدي. المبيت على القارب السكني في ألابوزا.",
  },
  {
    label: "Day 05",
    labelAr: "اليوم ٠٥",
    title: "Departure from Cochin",
    titleAr: "المغادرة من كوتشي",
    description:
      "After breakfast, check out from your stay and proceed to Cochin Airport or Railway Station for your departure. Your tour ends with beautiful memories.",
    descriptionAr:
      "بعد الإفطار تسجّلون المغادرة وتتجهون إلى مطار كوتشي أو محطة القطار لمغادرتكم. وتنتهي رحلتكم بذكريات جميلة.",
  },
];

const KH_INCLUSIONS = [
  "Accommodation in the mentioned hotels on a twin-sharing basis",
  "Breakfast at all hotels",
  "All three meals and evening tea with snacks on the houseboat (if the option is selected)",
  "Wildlife boating in Thekkady",
  "Elephant ride in Thekkady",
  "All meals on a premium houseboat",
  "Transportation by A/c Innova Crysta car as per the itinerary",
  "Arrival assistance and an Arabic-speaking driver",
  "Driver's expenses, parking, tolls and all taxes",
];
const KH_INCLUSIONS_AR = [
  "الإقامة في الفنادق المذكورة على أساس الإقامة المزدوجة",
  "الإفطار في جميع الفنادق",
  "الوجبات الثلاث وشاي المساء مع وجبات خفيفة على القارب السكني (في حال اختيار هذا الخيار)",
  "جولة قارب لمشاهدة الحياة البرية في ثيكادي",
  "ركوب الفيل في ثيكادي",
  "جميع الوجبات على قارب سكني فاخر",
  "التنقل بسيارة إنوفا كريستا مكيَّفة وفق البرنامج",
  "المساعدة عند الوصول وسائق يتحدث العربية",
  "نفقات السائق والمواقف ورسوم العبور وجميع الضرائب",
];

// ======================================================================================================
// Packages 5 & 6 — Kerala with Kovalam (6 nights / 7 days) and Kerala, Kanyakumari & Kovalam (7 nights / 8 days)
// Source: the "6 Nights /7 Days" and "7 Nights/8 Days" package details supplied by Safari Masti. Days 1–4 are the
// same as package 4; inclusions, exclusions, general terms and houseboat notes are identical. No price was
// supplied, so these pages show "Request a Quote".
// ======================================================================================================
const dayLabel = (n: number) => ({ label: `Day ${String(n).padStart(2, "0")}`, labelAr: `اليوم ${String(n).padStart(2, "0").replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[Number(d)])}` });

const KANYAKUMARI_DAY = (n: number): ItineraryStop => ({
  ...dayLabel(n),
  title: "Alleppey to Kanyakumari",
  titleAr: "من ألابوزا إلى كانيياكوماري",
  description:
    "After breakfast, check out from the houseboat and travel to Kanyakumari. After checking into your hotel, spend the afternoon exploring the iconic Vivekananda Rock Memorial, the towering Thiruvalluvar Statue and the historic Bhagavathy Amman Temple. End your day watching the spectacular sunset at Kanyakumari Beach, where three oceans meet (Triveni Sangam). Overnight in Kanyakumari.",
  descriptionAr:
    "بعد الإفطار تسجّلون المغادرة من القارب السكني وتتجهون إلى كانيياكوماري. وبعد تسجيل الوصول في الفندق تقضون فترة بعد الظهر في استكشاف نصب فيفيكاناندا التذكاري الأيقوني وتمثال ثيروفالوفار الشاهق ومعبد باغافاتي أمّان التاريخي. وتختمون يومكم بمشاهدة غروب الشمس الرائع على شاطئ كانيياكوماري حيث تلتقي ثلاثة محيطات (تريفيني سانغام). المبيت في كانيياكوماري.",
});

const KOVALAM_DAY = (n: number, from: "Alleppey" | "Kanyakumari"): ItineraryStop => ({
  ...dayLabel(n),
  title: `${from} to Kovalam`,
  titleAr: from === "Alleppey" ? "من ألابوزا إلى كوفالام" : "من كانيياكوماري إلى كوفالام",
  description: `After breakfast, check out from your ${from === "Alleppey" ? "houseboat" : "hotel"} and head towards Kovalam. On arrival, check into your beachside hotel or resort. Enjoy a completely free afternoon to unwind, stroll along the shore and take in the beautiful beach vibes. Spend the night resting comfortably in Kovalam.`,
  descriptionAr: `بعد الإفطار تسجّلون المغادرة من ${from === "Alleppey" ? "القارب السكني" : "الفندق"} وتتجهون نحو كوفالام. عند الوصول تسجّلون الوصول في فندقكم أو منتجعكم المطل على الشاطئ. استمتعوا بفترة بعد ظهر حرة تمامًا للاسترخاء والتنزه على الشاطئ والاستمتاع بأجواء الشاطئ الجميلة. المبيت براحة في كوفالام.`,
});

const TRIVANDRUM_DAY = (n: number): ItineraryStop => ({
  ...dayLabel(n),
  title: "Trivandrum day tour",
  titleAr: "جولة نهارية في ترفاندروم",
  description:
    "After breakfast, leave for a full day of sightseeing in Trivandrum. Begin with a visit to the magnificent Sree Padmanabhaswamy Temple to explore its grand heritage. Afterwards, head to the city's museum grounds to visit the Napier Museum, the Sree Chitra Art Gallery and the historic Thiruvananthapuram Zoo. Return to Kovalam in the evening for your overnight stay.",
  descriptionAr:
    "بعد الإفطار تنطلقون في جولة سياحية ليوم كامل في ترفاندروم. تبدؤون بزيارة معبد سري بادمانابهاسوامي المهيب لاستكشاف تراثه العريق. ثم تتجهون إلى حرم متاحف المدينة لزيارة متحف نابير ومعرض سري تشيترا للفنون وحديقة حيوان ثيروفانانتابورام التاريخية. العودة إلى كوفالام في المساء للمبيت.",
});

const KOVALAM_DEPARTURE = (n: number): ItineraryStop => ({
  ...dayLabel(n),
  title: "Departure from Trivandrum or Cochin",
  titleAr: "المغادرة من ترفاندروم أو كوتشي",
  description:
    "After breakfast, check out of the hotel. We will drop you at the airport or railway station in either Trivandrum or Cochin for your trip home. Your tour ends with beautiful memories.",
  descriptionAr:
    "بعد الإفطار تسجّلون المغادرة من الفندق. وسنوصلكم إلى المطار أو محطة القطار في ترفاندروم أو كوتشي لرحلة العودة إلى الديار. وتنتهي رحلتكم بذكريات جميلة.",
});

const KOV7_ITINERARY: ItineraryStop[] = [
  ...KH_ITINERARY.slice(0, 4),
  KOVALAM_DAY(5, "Alleppey"),
  TRIVANDRUM_DAY(6),
  KOVALAM_DEPARTURE(7),
];

const KKK8_ITINERARY: ItineraryStop[] = [
  ...KH_ITINERARY.slice(0, 4),
  KANYAKUMARI_DAY(5),
  KOVALAM_DAY(6, "Kanyakumari"),
  TRIVANDRUM_DAY(7),
  KOVALAM_DEPARTURE(8),
];

// ======================================================================================================
// Packages 7–9 — Golden Triangle (5 nights / 6 days), Goa (3 nights / 4 days) and Kashmir (5 nights / 6 days)
// Source: the "6 Days Golden Triangle Tour", "Goa 3 Nights" and "Kashmir PKG" documents supplied by Safari
// Masti. No prices were supplied (rates change from week to week), so these pages show "Request a Quote".
// The Golden Triangle and Goa documents list "Driver Allowance" and "Fuel Cost" under Inclusions with no
// detail, so they appear here as plain included items.
// ======================================================================================================
const QUOTE_NOTE = {
  label: "Rates and availability",
  labelAr: "الأسعار والتوافر",
  content:
    "Rates and availability change from week to week, so we quote each trip individually. Request a quote with your travel dates and group size and we will confirm a current rate.",
  contentAr:
    "تتغير الأسعار والتوافر من أسبوع إلى آخر، لذا نقدّم عرض سعر خاصًا لكل رحلة. أرسلوا لنا طلب عرض سعر مع تواريخ سفركم وعدد المسافرين وسنؤكد لكم السعر الحالي.",
};

const GT_ITINERARY: ItineraryStop[] = [
  {
    ...dayLabel(1),
    title: "Delhi — arrival",
    titleAr: "الوصول إلى دلهي",
    description:
      "Your holiday begins the moment you land in Delhi. Our representative will meet you at the airport or railway station and drive you straight to your hotel for a smooth check-in. The rest of the day is entirely yours to unwind, adjust to the vibrant local energy, or take a gentle stroll around the neighbourhood before a peaceful night's rest.",
    descriptionAr:
      "تبدأ إجازتكم لحظة وصولكم إلى دلهي. يستقبلكم ممثلنا في المطار أو محطة القطار ويوصلكم مباشرة إلى الفندق لتسجيل وصول سلس. وبقية اليوم لكم بالكامل للاسترخاء والتأقلم مع أجواء المدينة النابضة بالحياة، أو للتنزه بهدوء في الحي المحيط قبل ليلة هادئة.",
  },
  {
    ...dayLabel(2),
    title: "Delhi to Agra — Mughal grandeur",
    titleAr: "من دلهي إلى أغرا — عظمة المغول",
    description:
      "After breakfast, check out from the hotel and take a smooth drive down the expressway to Agra. After settling into your new hotel, head out to explore the massive Agra Fort, a red-stone fortress packed with fascinating history. As evening approaches, visit Mehtab Bagh across the river to watch the sunset paint the Taj Mahal in beautiful twilight colours. Overnight stay at your hotel in Agra.",
    descriptionAr:
      "بعد الإفطار تسجّلون المغادرة من الفندق وتنطلقون في رحلة سلسة عبر الطريق السريع إلى أغرا. وبعد الاستقرار في فندقكم الجديد تنطلقون لاستكشاف قلعة أغرا الضخمة، وهي حصن من الحجر الأحمر يزخر بتاريخ مشوّق. ومع اقتراب المساء تزورون ميهتاب باغ على الضفة المقابلة من النهر لمشاهدة الغروب وهو يلوّن تاج محل بألوان الشفق الجميلة. المبيت في فندقكم في أغرا.",
  },
  {
    ...dayLabel(3),
    title: "The Taj at sunrise and drive to Jaipur",
    titleAr: "تاج محل عند الشروق والتوجه إلى جايبور",
    description:
      "Rise early for a magical moment: watching the Taj Mahal glow at sunrise as the morning light hits the white marble. Return to the hotel for breakfast, check out, and head towards Jaipur. Along the way, stop to explore the red-sandstone ruins of Fatehpur Sikri. Arrive in the royal Pink City by evening, check in and relax.",
    descriptionAr:
      "انهضوا مبكرًا للحظة ساحرة: مشاهدة تاج محل وهو يتوهج عند الشروق حين يلامس ضوء الصباح الرخام الأبيض. تعودون إلى الفندق لتناول الإفطار وتسجيل المغادرة ثم تتجهون نحو جايبور. وفي الطريق تتوقفون لاستكشاف أطلال فاتح بور سيكري من الحجر الرملي الأحمر. تصلون إلى المدينة الوردية الملكية مساءً وتسجّلون الوصول وتسترخون.",
  },
  {
    ...dayLabel(4),
    title: "Jaipur — palaces and hilltop forts",
    titleAr: "جايبور — القصور والحصون على التلال",
    description:
      "After breakfast, spend a full day diving into Jaipur's royal heritage. Start with the majestic Amber Fort, nestled on a hilltop, to explore its stunning decorated halls. Later, take iconic photos outside the pink-hued Hawa Mahal (Palace of Winds), wander through the grand City Palace museum and see the giant historic sundials at Jantar Mantar. Overnight stay in Jaipur.",
    descriptionAr:
      "بعد الإفطار تقضون يومًا كاملًا في الغوص في تراث جايبور الملكي. تبدؤون بقلعة آمبر المهيبة المتربعة على التل لاستكشاف قاعاتها المزخرفة الرائعة. ثم تلتقطون صورًا أيقونية خارج هوا محل (قصر الرياح) الوردي، وتتجولون في متحف قصر المدينة الكبير، وتشاهدون المزاول الشمسية التاريخية العملاقة في جانتار مانتار. المبيت في جايبور.",
  },
  {
    ...dayLabel(5),
    title: "Jaipur to Delhi — back to the capital",
    titleAr: "من جايبور إلى دلهي — العودة إلى العاصمة",
    description:
      "After breakfast, check out from your hotel and proceed to Delhi, where you check in to your hotel. In the afternoon, visit the soaring Qutub Minar, the peaceful Humayun's Tomb and the grand India Gate, followed by a drive past the impressive Parliament House. Overnight stay at the hotel in Delhi.",
    descriptionAr:
      "بعد الإفطار تسجّلون المغادرة من فندقكم وتتجهون إلى دلهي حيث تسجّلون الوصول في الفندق. وبعد الظهر تزورون قطب منار الشاهق وقبر همايون الهادئ وبوابة الهند المهيبة، ثم تمرون بمبنى البرلمان المميز. المبيت في فندق بدلهي.",
  },
  {
    ...dayLabel(6),
    title: "Delhi sightseeing and departure",
    titleAr: "جولة في دلهي والمغادرة",
    description:
      "Before heading home, do some shopping in Delhi (if time permits). Finally, we will transfer you directly to the airport or railway station for your onward journey home.",
    descriptionAr:
      "قبل العودة إلى الديار يمكنكم التسوق في دلهي (إن سمح الوقت). وفي النهاية ننقلكم مباشرة إلى المطار أو محطة القطار لمتابعة رحلة العودة.",
  },
];

const GOA_ITINERARY: ItineraryStop[] = [
  {
    ...dayLabel(1),
    title: "Arrival and sunsets at leisure",
    titleAr: "الوصول وغروب الشمس في أجواء الاسترخاء",
    description:
      "Pick-up from Goa Airport or Railway Station and check in to your hotel or resort in Goa. The afternoon is entirely yours to unwind by the pool, sink your toes into the nearby sand and sample fresh seafood at a local beach shack.",
    descriptionAr:
      "الاستقبال من مطار غوا أو محطة القطار وتسجيل الوصول في الفندق أو المنتجع في غوا. وبعد الظهر لكم بالكامل للاسترخاء بجانب المسبح وغمس أقدامكم في رمال الشاطئ القريب وتذوّق المأكولات البحرية الطازجة في أحد أكواخ الشاطئ المحلية.",
  },
  {
    ...dayLabel(2),
    title: "The energy of North Goa",
    titleAr: "حيوية شمال غوا",
    description:
      "Dedicate your first full day to the high-spirited coastline. Your dedicated private transport takes you on a panoramic route exploring the historic battlements of Fort Aguada. Spend your afternoon beach-hopping between the buzzing shorelines of Calangute and Baga, catching an unforgettable golden-hour sunset at the rocky cliffs of Vagator or Anjuna. Overnight stay at your hotel in Goa.",
    descriptionAr:
      "خصصوا أول يوم كامل للساحل النابض بالحياة. تنقلكم سيارتكم الخاصة المخصصة في طريق بانورامي لاستكشاف أسوار حصن أغوادا التاريخية. وبعد الظهر تتنقلون بين شواطئ كالانغوت وباغا الصاخبة، وتشاهدون غروبًا ذهبيًا لا يُنسى عند المنحدرات الصخرية في فاغاتور أو أنجونا. المبيت في فندقكم في غوا.",
  },
  {
    ...dayLabel(3),
    title: "Heritage and solitude in South Goa",
    titleAr: "التراث والسكينة في جنوب غوا",
    description:
      "Transition into a completely different vibe. Immerse yourself in the timeless architectural beauty of Old Goa by visiting the iconic UNESCO World Heritage sites, including the Se Cathedral and the Basilica of Bom Jesus. Conclude your day with a scenic drive past the viewpoint of Dona Paula and the serene riverfront of Miramar Beach. After the sightseeing tour of South Goa, overnight stay at your hotel in Goa.",
    descriptionAr:
      "انتقلوا إلى أجواء مختلفة تمامًا. انغمسوا في جمال العمارة الخالد لغوا القديمة بزيارة مواقع التراث العالمي لليونسكو الشهيرة، ومنها كاتدرائية سي وبازيليكا بوم جيسوس. وتختمون يومكم بجولة خلابة تمر بمنظر دونا باولا والواجهة النهرية الهادئة لشاطئ ميرامار. وبعد جولة جنوب غوا، المبيت في فندقكم في غوا.",
  },
  {
    ...dayLabel(4),
    title: "Spice markets and departure",
    titleAr: "أسواق التوابل والمغادرة",
    description:
      "Savour a final tropical breakfast at your resort. Depending on your departure timing, enjoy a relaxed morning hunting for unique local spices, cashews and handicrafts at a traditional market before your private cab transfers you seamlessly back to the airport or railway station.",
    descriptionAr:
      "تناولوا إفطارًا استوائيًا أخيرًا في منتجعكم. وبحسب موعد مغادرتكم، استمتعوا بصباح هادئ للبحث عن التوابل المحلية الفريدة والكاجو والحرف اليدوية في سوق تقليدي قبل أن تنقلكم سيارتكم الخاصة بسلاسة إلى المطار أو محطة القطار.",
  },
];

const KASHMIR_ITINERARY: ItineraryStop[] = [
  {
    ...dayLabel(1),
    title: "Arrival in Srinagar",
    titleAr: "الوصول إلى سريناغار",
    description:
      "Our service begins with your arrival at Srinagar Airport, where our representative will meet you and transfer you to a traditional houseboat on Dal Lake. After relaxing for an hour, experience a peaceful evening Shikara ride exploring the interiors of Dal Lake against the backdrop of the stunning Zabarwan mountain range. Overnight stay at the Srinagar houseboat.",
    descriptionAr:
      "تبدأ خدمتنا بوصولكم إلى مطار سريناغار حيث يستقبلكم ممثلنا وينقلكم إلى قارب سكني تقليدي على بحيرة دال. وبعد ساعة من الاسترخاء تستمتعون بجولة مسائية هادئة بقارب الشيكارا لاستكشاف أرجاء بحيرة دال على خلفية سلسلة جبال زابارفان الخلابة. المبيت على القارب السكني في سريناغار.",
  },
  {
    ...dayLabel(2),
    title: "Srinagar to Gulmarg",
    titleAr: "من سريناغار إلى غولمارغ",
    description:
      "After breakfast, drive to Gulmarg, a premier hill station celebrated for its lush slopes and vibrant wildflowers. In winter, it transforms into India's top skiing destination. You can ride the famous Gondola Cable Car to the Kongdori meadows and up to the Apharwat peak (14,000 ft) for sweeping Himalayan views. Drive back to Srinagar for an overnight stay.",
    descriptionAr:
      "بعد الإفطار تتجهون إلى غولمارغ، المحطة الجبلية الشهيرة بمنحدراتها الخضراء وأزهارها البرية المتفتحة. وفي الشتاء تتحول إلى أفضل وجهة للتزلج في الهند. يمكنكم ركوب التلفريك الشهير (الغندولا) إلى مروج كونغدوري وصولًا إلى قمة أفاروات (١٤٬٠٠٠ قدم) لمشاهدة الهيمالايا بإطلالات واسعة. العودة إلى سريناغار للمبيت.",
  },
  {
    ...dayLabel(3),
    title: "Srinagar to Pahalgam",
    titleAr: "من سريناغار إلى باهالغام",
    description:
      "Enjoy an early breakfast, check out, and head to Pahalgam, the beautiful “Valley of Shepherds” and a favourite spot for Bollywood films. En route, stop by the historic Awantipura ruins and fragrant saffron fields. Once there, enjoy breathtaking views or opt for a local cab to visit the scenic Betaab Valley and Chandanwari (on direct payment). Overnight stay in Pahalgam.",
    descriptionAr:
      "بعد إفطار مبكر وتسجيل المغادرة تتجهون إلى باهالغام، «وادي الرعاة» الجميل ومن المواقع المفضلة لأفلام بوليوود. وفي الطريق تتوقفون عند أطلال أوانتيبورا التاريخية وحقول الزعفران العطرة. وعند الوصول تستمتعون بالمناظر الخلابة أو تختارون سيارة أجرة محلية لزيارة وادي بيتاب وتشانداناواري (بالدفع المباشر). المبيت في باهالغام.",
  },
  {
    ...dayLabel(4),
    title: "Pahalgam to Srinagar — local sightseeing",
    titleAr: "من باهالغام إلى سريناغار — جولة محلية",
    description:
      "After breakfast, check out and drive back to Srinagar for a local sightseeing tour. Explore the iconic Mughal Gardens: Nishat Bagh (Garden of Pleasure) and Shalimar Bagh (Garden of Love), both featuring terraced flower beds and fountains overlooking Dal Lake. Conclude your tour at the Chashme Shahi (Royal Spring). Overnight stay at a hotel in Srinagar.",
    descriptionAr:
      "بعد الإفطار تسجّلون المغادرة وتعودون إلى سريناغار لجولة سياحية محلية. تستكشفون حدائق المغول الأيقونية: نيشات باغ (حديقة المتعة) وشاليمار باغ (حديقة الحب)، وكلتاهما تضمان مدرجات من أحواض الزهور والنوافير المطلة على بحيرة دال. وتختمون جولتكم عند تشاشما شاهي (النبع الملكي). المبيت في فندق في سريناغار.",
  },
  {
    ...dayLabel(5),
    title: "Full-day excursion to Sonamarg",
    titleAr: "رحلة ليوم كامل إلى سونامارغ",
    description:
      "After breakfast, embark on a full-day trip to Sonamarg, known as “The Meadow of Gold.” Surrounded by snow-capped peaks and dense pine forests, it serves as a spectacular gateway to Ladakh. Here, you can trek or take a pony ride to the stunning Thajiwas Glacier and admire the alpine meadows. Return to Srinagar for an overnight stay.",
    descriptionAr:
      "بعد الإفطار تنطلقون في رحلة ليوم كامل إلى سونامارغ، المعروفة بـ«مرج الذهب». تحيط بها قمم مكسوة بالثلوج وغابات صنوبر كثيفة، وهي بوابة رائعة نحو لداخ. وهنا يمكنكم المشي أو ركوب الخيل (البوني) إلى نهر ثاجيواس الجليدي الخلاب والإعجاب بالمروج الألبية. العودة إلى سريناغار للمبيت.",
  },
  {
    ...dayLabel(6),
    title: "Srinagar — departure",
    titleAr: "سريناغار — المغادرة",
    description:
      "After breakfast, check out from the hotel and enjoy a comfortable transfer to Srinagar Airport for your onward journey. Your magical Kashmir tour concludes here, leaving you with beautiful memories to cherish forever.",
    descriptionAr:
      "بعد الإفطار تسجّلون المغادرة من الفندق وتستمتعون برحلة مريحة إلى مطار سريناغار لمتابعة رحلتكم. وتنتهي رحلتكم الساحرة في كشمير هنا، تاركةً لكم ذكريات جميلة تعتزون بها إلى الأبد.",
  },
];

// Golden Triangle and Goa share the same inclusions list.
const ROAD_INCLUSIONS = [
  "Private vehicle for all your transfers and sightseeing",
  "Comfortable double-occupancy stay at a hotel or resort",
  "Complimentary breakfast at your accommodation",
  "Tolls and parking",
  "Driver allowance",
  "Fuel cost",
];
const ROAD_INCLUSIONS_AR = [
  "سيارة خاصة لجميع التنقلات والجولات السياحية",
  "إقامة مريحة بنظام الإقامة المزدوجة في فندق أو منتجع",
  "إفطار مجاني في مكان الإقامة",
  "رسوم العبور والمواقف",
  "بدل السائق",
  "تكلفة الوقود",
];

const GT_EXCLUSIONS = [
  "Airfare or train tickets to and from Delhi",
  "Entry tickets to monuments, camera fees and any optional activities",
  "Personal expenses: laundry, tips, shopping and travel insurance",
  "Any items not mentioned in the inclusions or the itinerary",
];
const GT_EXCLUSIONS_AR = [
  "تذاكر الطيران أو القطار من دلهي وإليها",
  "تذاكر دخول المعالم ورسوم التصوير وأي أنشطة اختيارية",
  "المصروفات الشخصية: الغسيل والإكراميات والتسوق والتأمين على السفر",
  "أي بنود غير مذكورة في البنود المشمولة أو البرنامج",
];

const GOA_EXCLUSIONS = [
  "Airfare or train tickets to and from Goa",
  "Entry tickets to monuments, water sports charges, casino passes, camera fees and optional river cruises",
  "Personal expenses: laundry, tips, shopping and travel insurance",
];
const GOA_EXCLUSIONS_AR = [
  "تذاكر الطيران أو القطار من غوا وإليها",
  "تذاكر دخول المعالم ورسوم الرياضات المائية وتذاكر الكازينو ورسوم التصوير والرحلات النهرية الاختيارية",
  "المصروفات الشخصية: الغسيل والإكراميات والتسوق والتأمين على السفر",
];

const KASHMIR_INCLUSIONS = [
  "Accommodation in 3-star or 4-star hotels (as per the option you choose)",
  "Daily breakfast and dinner",
  "Transportation by private A/c vehicle",
  "Sightseeing as per the itinerary",
  "Traditional Shikara ride on Dal Lake",
  "Gondola ride in Gulmarg",
  "Horse riding in Pahalgam",
  "Services of an English-speaking driver cum guide",
];
const KASHMIR_INCLUSIONS_AR = [
  "الإقامة في فنادق ٣ نجوم أو ٤ نجوم (حسب الخيار الذي تختارونه)",
  "الإفطار والعشاء يوميًا",
  "التنقل بمركبة خاصة مكيَّفة",
  "الجولات السياحية وفق البرنامج",
  "رحلة شيكارا تقليدية على بحيرة دال",
  "ركوب التلفريك (الغندولا) في غولمارغ",
  "ركوب الخيل في باهالغام",
  "سائق مرشد يتحدث الإنجليزية",
];
const KASHMIR_EXCLUSIONS = [
  "Air tickets and train tickets",
  "Entry fees: all garden and monument entry fees",
  "Sonamarg activities: Thajiwas Glacier sightseeing (by pony ride) at ₹800 per person",
  "Gulmarg Gondola ride: First Phase tickets at ₹800 per person; combined First and Second Phase tickets at ₹1,800 per person",
  "Pahalgam activities: river rafting at ₹500 per person",
  "Local cab services: Aru and Betaab Valley sightseeing by Union Cab at ₹1,800 per vehicle",
  "Winter transfer: Tangmarg to Gulmarg round trip by Union Cab at ₹1,800 per vehicle",
  "Any personal expenses or services not explicitly specified in the inclusions",
];
const KASHMIR_EXCLUSIONS_AR = [
  "تذاكر الطيران والقطار",
  "رسوم الدخول: جميع رسوم دخول الحدائق والمعالم",
  "أنشطة سونامارغ: جولة نهر ثاجيواس الجليدي (بركوب البوني) بسعر ٨٠٠ روبية للشخص",
  "تلفريك غولمارغ: تذاكر المرحلة الأولى بسعر ٨٠٠ روبية للشخص؛ وتذاكر المرحلتين الأولى والثانية معًا بسعر ١٬٨٠٠ روبية للشخص",
  "أنشطة باهالغام: التجديف في النهر (رافتينغ) بسعر ٥٠٠ روبية للشخص",
  "سيارات الأجرة المحلية: جولة آرو ووادي بيتاب بسيارة اتحاد السائقين (Union Cab) بسعر ١٬٨٠٠ روبية للمركبة",
  "التنقل الشتوي: الذهاب والعودة من تانغمارغ إلى غولمارغ بسيارة اتحاد السائقين بسعر ١٬٨٠٠ روبية للمركبة",
  "أي مصروفات شخصية أو خدمات غير مذكورة صراحةً في البنود المشمولة",
];
const KASHMIR_NOTES = [
  QUOTE_NOTE,
  {
    label: "Start and end point",
    labelAr: "نقطة البداية والنهاية",
    content: "The tour starts and ends at Srinagar Airport / Railway Station.",
    contentAr: "تبدأ الجولة وتنتهي في مطار سريناغار / محطة القطار.",
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
    relatedTourSlugs: ["kerala-hills-backwaters-4-nights-5-days", "luxury-kerala-8-days", "shimla-manali-8-nights-9-days"],
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
    relatedTourSlugs: ["kerala-munnar-thekkady-alleppey-5-days", "kerala-hills-backwaters-4-nights-5-days"],
  },
  {
    slug: "shimla-manali-8-nights-9-days",
    collectionSlug: "packages",
    title: "Shimla & Manali — 8 Nights / 9 Days",
    titleAr: "شيملا ومانالي — ٨ ليالٍ / ٩ أيام",
    destination: "Himachal Pradesh",
    destinationAr: "هيماشال براديش",
    region: ["North"],
    category: ["North India", "Hill Stations", "Family"],
    duration: "9 Days · 8 Nights",
    durationAr: "٩ أيام · ٨ ليالٍ",
    travelStyle: ["Budget Friendly", "Comfort"],
    bestFor: ["Families"],
    bestForAr: ["العائلات"],
    shortDescription:
      "Delhi – Shimla – Manali – Chandigarh – Delhi in 9 days: Kufri and Jakhoo, the Kullu Valley, Hadimba Temple, Solang Valley and the Atal Tunnel — from INR 14,500 per person.",
    shortDescriptionAr:
      "دلهي – شيملا – مانالي – تشانديغار – دلهي في ٩ أيام: كوفري وجاخو ووادي كولو ومعبد هاديمبا ووادي سولانغ ونفق أتال — ابتداءً من ١٤٬٥٠٠ روبية هندية للشخص.",
    overview:
      "A family-friendly circuit through the Himachal hills, starting and ending in Delhi. Spend two nights in Shimla with an excursion to Kufri and Jakhoo Temple, travel through the Kullu Valley to Manali for three nights of sightseeing, Hadimba Temple, Solang Valley and the Atal Tunnel, then finish with Nek Chand's Rock Garden and Sukhna Lake in Chandigarh before returning to Delhi. Breakfast and dinner are included, and you choose how you travel — a luxury Volvo coach with local transfers, a private sedan or a private SUV.",
    overviewAr:
      "مسار عائلي عبر تلال هيماشال ينطلق من دلهي وينتهي فيها. ليلتان في شيملا مع رحلة إلى كوفري ومعبد جاخو، ثم عبور وادي كولو إلى مانالي لثلاث ليالٍ من الجولات ومعبد هاديمبا ووادي سولانغ ونفق أتال، وتختمون بحديقة الصخور لنيك تشاند وبحيرة سوخنا في تشانديغار قبل العودة إلى دلهي. الإفطار والعشاء مشمولان، وتختارون وسيلة تنقلكم — حافلة فولفو فاخرة مع تنقلات محلية، أو سيارة سيدان خاصة، أو سيارة دفع رباعي خاصة.",
    heroImages: [
      "/images/packages/shimla-hillside.3b774666.webp",
      "/images/packages/shimla-christ-church.fd6c2a9f.webp",
      "/images/packages/kufri-hills.be022e50.webp",
      "/images/packages/kullu-beas-river.875eb548.webp",
      "/images/packages/manali-snow-mountains.2cec8985.webp",
      "/images/packages/hadimba-temple.5bf33d82.webp",
      "/images/packages/solang-paragliding.2282ee98.webp",
      "/images/packages/atal-tunnel-rohtang.55f7e2f7.webp",
      "/images/packages/chandigarh-rock-garden.afc90aaf.webp",
      "/images/packages/chandigarh-sukhna-lake.04c4cfba.webp",
    ],
    highlights: [
      "Shimla sightseeing with a full-day excursion to Kufri and Jakhoo Temple",
      "A scenic journey from Shimla to Manali through the Kullu Valley",
      "Manali's Hadimba Temple, Vashisht Springs and a Tibetan Monastery",
      "Solang Valley and a drive through the Atal Tunnel",
      "Chandigarh's Nek Chand Rock Garden and Sukhna Lake",
      "8 breakfasts and 8 dinners included — choose a Volvo coach, private sedan or private SUV",
    ],
    highlightsAr: [
      "جولة في شيملا مع رحلة ليوم كامل إلى كوفري ومعبد جاخو",
      "رحلة خلابة من شيملا إلى مانالي عبر وادي كولو",
      "معبد هاديمبا وينابيع فاشيشت ودير تبتي في مانالي",
      "وادي سولانغ والمرور عبر نفق أتال",
      "حديقة الصخور لنيك تشاند وبحيرة سوخنا في تشانديغار",
      "٨ وجبات إفطار و٨ وجبات عشاء مشمولة — واختاروا حافلة فولفو أو سيارة سيدان خاصة أو سيارة دفع رباعي خاصة",
    ],
    itinerary: SM_ITINERARY,
    inclusions: SM_INCLUSIONS,
    inclusionsAr: SM_INCLUSIONS_AR,
    exclusions: SM_EXCLUSIONS,
    exclusionsAr: SM_EXCLUSIONS_AR,
    pricing: {
      perPerson: true,
      gstPercentExtra: 5,
      options: [
        {
          label: "Option A — Luxury Volvo",
          labelAr: "الخيار أ — حافلة فولفو فاخرة",
          detail: "Luxury Volvo coach plus local transfers",
          detailAr: "حافلة فولفو فاخرة مع تنقلات محلية",
          amountInr: 14500,
        },
        {
          label: "Option B — Private sedan",
          labelAr: "الخيار ب — سيارة سيدان خاصة",
          detail: "Exclusive AC sedan (Dzire / Etios) for the whole circuit",
          detailAr: "سيارة سيدان مكيّفة مخصصة (ديزاير / إيتيوس) للمسار كاملاً",
          amountInr: 19500,
        },
        {
          label: "Option C — Private MUV",
          labelAr: "الخيار ج — سيارة دفع رباعي خاصة",
          detail: "Exclusive AC SUV (Innova / Crysta) for the whole circuit",
          detailAr: "سيارة دفع رباعي مكيّفة مخصصة (إنوفا / كريستا) للمسار كاملاً",
          amountInr: 26000,
        },
      ],
      note:
        "Prices are per person, starting from budget 2★ hotels, and 5% GST is charged extra. The final package cost depends on your travel dates, seasonal demand and any changes to the itinerary; a final quote is issued at booking confirmation.",
      noteAr:
        "الأسعار للشخص الواحد، وتبدأ من فنادق اقتصادية فئة نجمتين، وتُضاف ضريبة السلع والخدمات ٥٪. وتعتمد التكلفة النهائية على تواريخ السفر والطلب الموسمي وأي تعديلات على البرنامج؛ ويصدر عرض سعر نهائي عند تأكيد الحجز.",
    },
    goodToKnow: SM_NOTES,
    seoTitle: "Shimla Manali Tour Package — 8 Nights 9 Days from Delhi | Safari Masti",
    seoDescription:
      "A 9-day Delhi–Shimla–Manali–Chandigarh–Delhi family package with Kufri, Hadimba Temple, Solang Valley and the Atal Tunnel, from INR 14,500 per person plus GST — by Safari Masti.",
    relatedTourSlugs: ["kashmir-5-nights-6-days", "golden-triangle-5-nights-6-days", "luxury-kerala-8-days"],
  },
  {
    slug: "kerala-hills-backwaters-4-nights-5-days",
    collectionSlug: "packages",
    title: "Kerala Hills & Backwaters — 4 Nights / 5 Days",
    titleAr: "تلال كيرالا ومسطحاتها المائية — ٤ ليالٍ / ٥ أيام",
    destination: "Kerala",
    destinationAr: "كيرالا",
    region: ["South"],
    category: ["South India", "Nature"],
    duration: "5 Days · 4 Nights",
    durationAr: "٥ أيام · ٤ ليالٍ",
    travelStyle: ["Comfort", "Premium"],
    bestFor: ["Hills, wildlife and backwaters with an Arabic-speaking driver"],
    bestForAr: ["التلال والحياة البرية والمسطحات المائية مع سائق يتحدث العربية"],
    shortDescription:
      "Munnar, Thekkady and an Alleppey houseboat in 5 days — with an Arabic-speaking driver, an A/c Innova Crysta, a boat safari in Periyar and a night on the backwaters.",
    shortDescriptionAr:
      "مونار وثيكادي وقارب سكني في ألابوزا في ٥ أيام — مع سائق يتحدث العربية وسيارة إنوفا كريستا مكيَّفة وسفاري بالقارب في بيريار وليلة على المسطحات المائية.",
    overview:
      "Be greeted at Cochin and drive up to Munnar, 1,800 metres above sea level, for a full day among Eravikulam National Park, Mattupetty or Kundala Dam, Echo Point and the Tata Tea Museum. Continue to Thekkady for a spice plantation tour and a boat safari in Periyar National Park, then cruise the Alleppey backwaters and spend the night on a traditional houseboat before departing from Cochin. Your A/c Innova Crysta comes with an Arabic-speaking driver and arrival assistance.",
    overviewAr:
      "يستقبلكم فريقنا في كوتشي ثم تصعدون إلى مونار على ارتفاع ١٬٨٠٠ متر فوق سطح البحر ليوم كامل بين منتزه إيرافيكولام الوطني وسد ماتوبيتي أو كوندالا ونقطة الصدى ومتحف تاتا للشاي. ثم تتابعون إلى ثيكادي لجولة في مزرعة توابل وسفاري بالقارب في منتزه بيريار الوطني، فتجوبون مسطحات ألابوزا المائية وتبيتون على قارب سكني تقليدي قبل المغادرة من كوتشي. وتأتي سيارة إنوفا كريستا المكيَّفة مع سائق يتحدث العربية ومساعدة عند الوصول.",
    heroImages: [
      "/images/packages/munnar-tea-estate.30b7e082.webp",
      "/images/packages/munnar-tea-road.ddf3bd6d.webp",
      "/images/packages/eravikulam-tahr-closeup.f58cb0d1.webp",
      "/images/packages/mattupetty-dam.02b7b3fe.webp",
      "/images/packages/kerala-black-pepper.43635a5e.webp",
      "/images/packages/periyar-lake.068d63f0.webp",
      "/images/packages/alleppey-houseboat-canoe.8e5bd544.webp",
      "/images/packages/alleppey-houseboat.968d7769.webp",
    ],
    highlights: [
      "Cheyyappara Waterfalls on the drive up to Munnar, 1,800 metres above sea level",
      "A full day in Munnar: Eravikulam National Park, a boat ride at Mattupetty or Kundala Dam, Echo Point and the Tata Tea Museum",
      "A spice plantation tour and a boat safari in Periyar National Park, Thekkady",
      "A night on a traditional houseboat in the Alleppey backwaters",
      "A/c Innova Crysta with an Arabic-speaking driver and arrival assistance",
    ],
    highlightsAr: [
      "شلالات تشيّابارا في الطريق إلى مونار على ارتفاع ١٬٨٠٠ متر فوق سطح البحر",
      "يوم كامل في مونار: منتزه إيرافيكولام الوطني وجولة بالقارب في سد ماتوبيتي أو كوندالا ونقطة الصدى ومتحف تاتا للشاي",
      "جولة في مزرعة توابل وسفاري بالقارب في منتزه بيريار الوطني في ثيكادي",
      "ليلة على قارب سكني تقليدي في مسطحات ألابوزا المائية",
      "سيارة إنوفا كريستا مكيَّفة مع سائق يتحدث العربية ومساعدة عند الوصول",
    ],
    itinerary: KH_ITINERARY,
    inclusions: KH_INCLUSIONS,
    inclusionsAr: KH_INCLUSIONS_AR,
    exclusions: LUX_EXCLUSIONS,
    exclusionsAr: LUX_EXCLUSIONS_AR,
    goodToKnow: LUX_NOTES,
    seoTitle: "Kerala Tour Package: Munnar, Thekkady & Alleppey — 4 Nights 5 Days | Safari Masti",
    seoDescription:
      "A 5-day Kerala package through Munnar, Thekkady and an Alleppey houseboat, with an A/c Innova Crysta and an Arabic-speaking driver — request a quote from Safari Masti, Cochin.",
    relatedTourSlugs: ["kerala-munnar-thekkady-alleppey-5-days", "kerala-hills-backwaters-kovalam-6-nights-7-days", "kerala-kanyakumari-kovalam-7-nights-8-days"],
  },
  {
    slug: "kerala-hills-backwaters-kovalam-6-nights-7-days",
    collectionSlug: "packages",
    title: "Kerala Hills, Backwaters & Kovalam — 6 Nights / 7 Days",
    titleAr: "تلال كيرالا ومسطحاتها المائية وكوفالام — ٦ ليالٍ / ٧ أيام",
    destination: "Kerala",
    destinationAr: "كيرالا",
    region: ["South"],
    category: ["South India", "Nature"],
    travelStyle: ["Comfort", "Premium"],
    inclusions: KH_INCLUSIONS,
    inclusionsAr: KH_INCLUSIONS_AR,
    exclusions: LUX_EXCLUSIONS,
    exclusionsAr: LUX_EXCLUSIONS_AR,
    goodToKnow: LUX_NOTES,
    duration: "7 Days · 6 Nights",
    durationAr: "٧ أيام · ٦ ليالٍ",
    bestFor: ["Hills, backwaters and a beach finish, with an Arabic-speaking driver"],
    bestForAr: ["التلال والمسطحات المائية ونهاية على الشاطئ، مع سائق يتحدث العربية"],
    shortDescription:
      "Munnar, Thekkady, an Alleppey houseboat and the beach at Kovalam, plus a Trivandrum day tour — 7 days with an Arabic-speaking driver and an A/c Innova Crysta.",
    shortDescriptionAr:
      "مونار وثيكادي وقارب سكني في ألابوزا وشاطئ كوفالام، مع جولة نهارية في ترفاندروم — ٧ أيام مع سائق يتحدث العربية وسيارة إنوفا كريستا مكيَّفة.",
    overview:
      "Start in Cochin and drive up to Munnar for Eravikulam National Park, a boat ride at Mattupetty or Kundala Dam, Echo Point and the Tata Tea Museum. Continue to Thekkady for a spice plantation tour and a boat safari in Periyar National Park, spend a night on an Alleppey houseboat, then travel south to the beach at Kovalam. A full-day Trivandrum tour takes in Sree Padmanabhaswamy Temple, the Napier Museum, Sree Chitra Art Gallery and the zoo, before you depart from Trivandrum or Cochin.",
    overviewAr:
      "تبدؤون من كوتشي وتصعدون إلى مونار لزيارة منتزه إيرافيكولام الوطني وجولة بالقارب في سد ماتوبيتي أو كوندالا ونقطة الصدى ومتحف تاتا للشاي. ثم تتابعون إلى ثيكادي لجولة في مزرعة توابل وسفاري بالقارب في منتزه بيريار الوطني، وتبيتون ليلة على قارب سكني في ألابوزا، ثم تسافرون جنوبًا إلى شاطئ كوفالام. وتشمل جولة ترفاندروم ليوم كامل معبد سري بادمانابهاسوامي ومتحف نابير ومعرض سري تشيترا للفنون وحديقة الحيوان، قبل المغادرة من ترفاندروم أو كوتشي.",
    heroImages: [
      "/images/packages/kovalam-beach.36e4cc27.webp",
      "/images/packages/munnar-tea-estate.30b7e082.webp",
      "/images/packages/eravikulam-tahr-closeup.f58cb0d1.webp",
      "/images/packages/mattupetty-dam.02b7b3fe.webp",
      "/images/packages/kerala-black-pepper.43635a5e.webp",
      "/images/packages/periyar-lake.068d63f0.webp",
      "/images/packages/alleppey-houseboat.968d7769.webp",
      "/images/packages/kovalam-lighthouse.ad2b83e4.webp",
      "/images/packages/padmanabhaswamy-temple.3efe52bb.webp",
    ],
    highlights: [
      "A full day in Munnar: Eravikulam National Park, a boat ride at Mattupetty or Kundala Dam, Echo Point and the Tata Tea Museum",
      "A spice plantation tour and a boat safari in Periyar National Park, Thekkady",
      "A night on a traditional houseboat in the Alleppey backwaters",
      "A free afternoon on the beach at Kovalam",
      "A full-day Trivandrum tour: Sree Padmanabhaswamy Temple, Napier Museum, Sree Chitra Art Gallery and the zoo",
      "A/c Innova Crysta with an Arabic-speaking driver and arrival assistance",
    ],
    highlightsAr: [
      "يوم كامل في مونار: منتزه إيرافيكولام الوطني وجولة بالقارب في سد ماتوبيتي أو كوندالا ونقطة الصدى ومتحف تاتا للشاي",
      "جولة في مزرعة توابل وسفاري بالقارب في منتزه بيريار الوطني في ثيكادي",
      "ليلة على قارب سكني تقليدي في مسطحات ألابوزا المائية",
      "فترة بعد ظهر حرة على شاطئ كوفالام",
      "جولة ليوم كامل في ترفاندروم: معبد سري بادمانابهاسوامي ومتحف نابير ومعرض سري تشيترا للفنون وحديقة الحيوان",
      "سيارة إنوفا كريستا مكيَّفة مع سائق يتحدث العربية ومساعدة عند الوصول",
    ],
    itinerary: KOV7_ITINERARY,
    seoTitle: "Kerala Tour Package with Kovalam — 6 Nights 7 Days | Safari Masti",
    seoDescription:
      "A 7-day Kerala package: Munnar, Thekkady, an Alleppey houseboat, Kovalam beach and a Trivandrum day tour, with an A/c Innova Crysta and an Arabic-speaking driver — request a quote from Safari Masti, Cochin.",
    relatedTourSlugs: ["kerala-hills-backwaters-4-nights-5-days", "kerala-kanyakumari-kovalam-7-nights-8-days", "luxury-kerala-8-days"],
  },
  {
    slug: "kerala-kanyakumari-kovalam-7-nights-8-days",
    collectionSlug: "packages",
    title: "Kerala, Kanyakumari & Kovalam — 7 Nights / 8 Days",
    titleAr: "كيرالا وكانيياكوماري وكوفالام — ٧ ليالٍ / ٨ أيام",
    destination: "Kerala & Tamil Nadu",
    destinationAr: "كيرالا وتاميل نادو",
    region: ["South"],
    category: ["South India", "Nature"],
    travelStyle: ["Comfort", "Premium"],
    inclusions: KH_INCLUSIONS,
    inclusionsAr: KH_INCLUSIONS_AR,
    exclusions: LUX_EXCLUSIONS,
    exclusionsAr: LUX_EXCLUSIONS_AR,
    goodToKnow: LUX_NOTES,
    duration: "8 Days · 7 Nights",
    durationAr: "٨ أيام · ٧ ليالٍ",
    bestFor: ["Hills, backwaters, Kanyakumari's sunset and a beach finish, with an Arabic-speaking driver"],
    bestForAr: ["التلال والمسطحات المائية وغروب كانيياكوماري ونهاية على الشاطئ، مع سائق يتحدث العربية"],
    shortDescription:
      "Munnar, Thekkady, an Alleppey houseboat, the sunset at Kanyakumari, Kovalam beach and Trivandrum — 8 days with an Arabic-speaking driver and an A/c Innova Crysta.",
    shortDescriptionAr:
      "مونار وثيكادي وقارب سكني في ألابوزا وغروب كانيياكوماري وشاطئ كوفالام وترفاندروم — ٨ أيام مع سائق يتحدث العربية وسيارة إنوفا كريستا مكيَّفة.",
    overview:
      "Start in Cochin and drive up to Munnar for Eravikulam National Park, a boat ride at Mattupetty or Kundala Dam, Echo Point and the Tata Tea Museum. Continue to Thekkady for a spice plantation tour and a boat safari in Periyar National Park, then spend a night on an Alleppey houseboat. Head south to Kanyakumari for the Vivekananda Rock Memorial, the Thiruvalluvar Statue, Bhagavathy Amman Temple and the sunset where three oceans meet, relax on the beach at Kovalam, and take a full-day Trivandrum tour before departing from Trivandrum or Cochin.",
    overviewAr:
      "تبدؤون من كوتشي وتصعدون إلى مونار لزيارة منتزه إيرافيكولام الوطني وجولة بالقارب في سد ماتوبيتي أو كوندالا ونقطة الصدى ومتحف تاتا للشاي. ثم تتابعون إلى ثيكادي لجولة في مزرعة توابل وسفاري بالقارب في منتزه بيريار الوطني، وتبيتون ليلة على قارب سكني في ألابوزا. وتتجهون جنوبًا إلى كانيياكوماري لزيارة نصب فيفيكاناندا التذكاري وتمثال ثيروفالوفار ومعبد باغافاتي أمّان ومشاهدة الغروب حيث تلتقي ثلاثة محيطات، ثم تسترخون على شاطئ كوفالام وتقومون بجولة ليوم كامل في ترفاندروم قبل المغادرة من ترفاندروم أو كوتشي.",
    heroImages: [
      "/images/packages/kanyakumari-rock-memorial.472e4d1a.webp",
      "/images/packages/munnar-tea-estate.30b7e082.webp",
      "/images/packages/eravikulam-tahr-closeup.f58cb0d1.webp",
      "/images/packages/mattupetty-dam.02b7b3fe.webp",
      "/images/packages/kerala-black-pepper.43635a5e.webp",
      "/images/packages/periyar-lake.068d63f0.webp",
      "/images/packages/alleppey-houseboat.968d7769.webp",
      "/images/packages/thiruvalluvar-statue.f47b69a3.webp",
      "/images/packages/kanyakumari-sunset.19b43358.webp",
      "/images/packages/kanyakumari-sunset-crowd.37aeb6fd.webp",
      "/images/packages/kovalam-beach.36e4cc27.webp",
      "/images/packages/kovalam-lighthouse.ad2b83e4.webp",
      "/images/packages/padmanabhaswamy-temple.3efe52bb.webp",
    ],
    highlights: [
      "A full day in Munnar: Eravikulam National Park, a boat ride at Mattupetty or Kundala Dam, Echo Point and the Tata Tea Museum",
      "A spice plantation tour and a boat safari in Periyar National Park, Thekkady",
      "A night on a traditional houseboat in the Alleppey backwaters",
      "Kanyakumari: Vivekananda Rock Memorial, the Thiruvalluvar Statue, Bhagavathy Amman Temple and the sunset where three oceans meet",
      "A free afternoon on the beach at Kovalam, and a full-day Trivandrum tour with Sree Padmanabhaswamy Temple",
      "A/c Innova Crysta with an Arabic-speaking driver and arrival assistance",
    ],
    highlightsAr: [
      "يوم كامل في مونار: منتزه إيرافيكولام الوطني وجولة بالقارب في سد ماتوبيتي أو كوندالا ونقطة الصدى ومتحف تاتا للشاي",
      "جولة في مزرعة توابل وسفاري بالقارب في منتزه بيريار الوطني في ثيكادي",
      "ليلة على قارب سكني تقليدي في مسطحات ألابوزا المائية",
      "كانيياكوماري: نصب فيفيكاناندا التذكاري وتمثال ثيروفالوفار ومعبد باغافاتي أمّان وغروب الشمس حيث تلتقي ثلاثة محيطات",
      "فترة بعد ظهر حرة على شاطئ كوفالام وجولة ليوم كامل في ترفاندروم مع معبد سري بادمانابهاسوامي",
      "سيارة إنوفا كريستا مكيَّفة مع سائق يتحدث العربية ومساعدة عند الوصول",
    ],
    itinerary: KKK8_ITINERARY,
    seoTitle: "Kerala, Kanyakumari & Kovalam Tour Package — 7 Nights 8 Days | Safari Masti",
    seoDescription:
      "An 8-day package: Munnar, Thekkady, an Alleppey houseboat, Kanyakumari's sunset, Kovalam beach and Trivandrum, with an A/c Innova Crysta and an Arabic-speaking driver — request a quote from Safari Masti, Cochin.",
    relatedTourSlugs: ["kerala-hills-backwaters-kovalam-6-nights-7-days", "kerala-hills-backwaters-4-nights-5-days", "luxury-kerala-8-days"],
  },
  {
    slug: "golden-triangle-5-nights-6-days",
    collectionSlug: "packages",
    title: "Golden Triangle: Delhi, Agra & Jaipur — 5 Nights / 6 Days",
    titleAr: "المثلث الذهبي: دلهي وأغرا وجايبور — ٥ ليالٍ / ٦ أيام",
    destination: "Delhi, Agra & Jaipur",
    destinationAr: "دلهي وأغرا وجايبور",
    region: ["North"],
    category: ["North India", "Heritage"],
    duration: "6 Days · 5 Nights",
    durationAr: "٦ أيام · ٥ ليالٍ",
    travelStyle: ["Comfort"],
    bestFor: ["First-time visitors to India's iconic monuments"],
    bestForAr: ["الزوار لأول مرة لمعالم الهند الأيقونية"],
    shortDescription:
      "Delhi, Agra and Jaipur in 6 days: the Taj Mahal at sunrise, Agra Fort, Fatehpur Sikri, Amber Fort, Hawa Mahal and Delhi's Qutub Minar, Humayun's Tomb and India Gate — by private vehicle.",
    shortDescriptionAr:
      "دلهي وأغرا وجايبور في ٦ أيام: تاج محل عند الشروق وقلعة أغرا وفاتح بور سيكري وقلعة آمبر وهوا محل، وقطب منار وقبر همايون وبوابة الهند في دلهي — بسيارة خاصة.",
    overview:
      "India's classic circuit, starting and ending in Delhi. Drive to Agra for the red-stone Agra Fort and a sunset view of the Taj Mahal from Mehtab Bagh, return to the Taj at sunrise, then continue to Jaipur via the ruins of Fatehpur Sikri. Spend a full day among Jaipur's palaces and hilltop forts, then head back to Delhi for the Qutub Minar, Humayun's Tomb and India Gate before your departure. Everything is covered by a private vehicle, with breakfast at your hotel each morning.",
    overviewAr:
      "المسار الكلاسيكي للهند، ينطلق من دلهي وينتهي فيها. تتجهون إلى أغرا لزيارة قلعة أغرا من الحجر الأحمر ومشاهدة غروب تاج محل من ميهتاب باغ، ثم تعودون إلى تاج محل عند الشروق، وتتابعون إلى جايبور عبر أطلال فاتح بور سيكري. وتقضون يومًا كاملًا بين قصور جايبور وحصونها على التلال، ثم تعودون إلى دلهي لزيارة قطب منار وقبر همايون وبوابة الهند قبل مغادرتكم. وتغطي سيارة خاصة جميع تنقلاتكم، مع الإفطار في فندقكم كل صباح.",
    heroImages: [
      "/images/packages/taj-mahal-sunrise.d8bc1d09.webp",
      "/images/packages/taj-mahal-sunset.fbc9dfc6.webp",
      "/images/packages/agra-fort.c40b223e.webp",
      "/images/packages/fatehpur-sikri-buland-darwaza.3f0fc805.webp",
      "/images/packages/amber-fort.6ab29a82.webp",
      "/images/packages/hawa-mahal.2182ca42.webp",
      "/images/packages/jantar-mantar.c61f3147.webp",
      "/images/packages/india-gate.a4fa773b.webp",
      "/images/packages/qutub-minar.775dde61.webp",
      "/images/packages/humayuns-tomb.9ca692c5.webp",
    ],
    highlights: [
      "Agra Fort and a sunset view of the Taj Mahal from Mehtab Bagh",
      "The Taj Mahal at sunrise, then the red-sandstone ruins of Fatehpur Sikri on the way to Jaipur",
      "A full day in Jaipur: Amber Fort, Hawa Mahal, the City Palace museum and Jantar Mantar",
      "Delhi's Qutub Minar, Humayun's Tomb and India Gate",
      "A private vehicle for all transfers and sightseeing, with breakfast included",
    ],
    highlightsAr: [
      "قلعة أغرا ومشاهدة غروب تاج محل من ميهتاب باغ",
      "تاج محل عند الشروق، ثم أطلال فاتح بور سيكري من الحجر الرملي الأحمر في الطريق إلى جايبور",
      "يوم كامل في جايبور: قلعة آمبر وهوا محل ومتحف قصر المدينة وجانتار مانتار",
      "قطب منار وقبر همايون وبوابة الهند في دلهي",
      "سيارة خاصة لجميع التنقلات والجولات السياحية مع الإفطار",
    ],
    itinerary: GT_ITINERARY,
    inclusions: ROAD_INCLUSIONS,
    inclusionsAr: ROAD_INCLUSIONS_AR,
    exclusions: GT_EXCLUSIONS,
    exclusionsAr: GT_EXCLUSIONS_AR,
    goodToKnow: [QUOTE_NOTE, ID_NOTE],
    seoTitle: "Golden Triangle Tour Package — Delhi, Agra, Jaipur 5 Nights 6 Days | Safari Masti",
    seoDescription:
      "A 6-day Golden Triangle package: Delhi, Agra (Taj Mahal at sunrise, Agra Fort), Fatehpur Sikri and Jaipur (Amber Fort, Hawa Mahal) by private vehicle — request a quote from Safari Masti, Cochin.",
    relatedTourSlugs: ["kashmir-5-nights-6-days", "goa-3-nights-4-days", "shimla-manali-8-nights-9-days"],
  },
  {
    slug: "goa-3-nights-4-days",
    collectionSlug: "packages",
    title: "Goa — 3 Nights / 4 Days",
    titleAr: "غوا — ٣ ليالٍ / ٤ أيام",
    destination: "Goa",
    destinationAr: "غوا",
    region: ["West"],
    category: ["West India", "Beaches"],
    duration: "4 Days · 3 Nights",
    durationAr: "٤ أيام · ٣ ليالٍ",
    travelStyle: ["Comfort"],
    bestFor: ["Beach breaks with sightseeing and heritage"],
    bestForAr: ["عطلات الشاطئ مع الجولات والتراث"],
    shortDescription:
      "Four relaxed days in Goa: Fort Aguada, the beaches of Calangute, Baga, Vagator and Anjuna, Old Goa's UNESCO churches and a spice market — with a private vehicle throughout.",
    shortDescriptionAr:
      "أربعة أيام هادئة في غوا: حصن أغوادا وشواطئ كالانغوت وباغا وفاغاتور وأنجونا وكنائس غوا القديمة المدرجة لدى اليونسكو وسوق للتوابل — مع سيارة خاصة طوال الرحلة.",
    overview:
      "A first afternoon by the pool and the nearest beach, then a day on North Goa's coast: Fort Aguada, the lively shores of Calangute and Baga and a golden-hour sunset at the cliffs of Vagator or Anjuna. The next day turns to heritage in Old Goa, with its UNESCO World Heritage sites, the Se Cathedral and the Basilica of Bom Jesus, followed by the viewpoint at Dona Paula and Miramar Beach. On your last morning, browse a traditional market for spices, cashews and handicrafts before your private transfer to the airport or railway station.",
    overviewAr:
      "فترة بعد ظهر أولى بجانب المسبح وأقرب شاطئ، ثم يوم على ساحل شمال غوا: حصن أغوادا وشواطئ كالانغوت وباغا النابضة بالحياة وغروب ذهبي عند منحدرات فاغاتور أو أنجونا. ويتجه اليوم التالي إلى التراث في غوا القديمة بمواقعها المدرجة في التراث العالمي لليونسكو وكاتدرائية سي وبازيليكا بوم جيسوس، يليها منظر دونا باولا وشاطئ ميرامار. وفي صباحكم الأخير تتجولون في سوق تقليدي بحثًا عن التوابل والكاجو والحرف اليدوية قبل نقلكم الخاص إلى المطار أو محطة القطار.",
    heroImages: [
      "/images/packages/goa-beach.c92751ee.webp",
      "/images/packages/fort-aguada.6063fb0f.webp",
      "/images/packages/fort-aguada-cannon.ed2a42c9.webp",
      "/images/packages/calangute-beach.c734e701.webp",
      "/images/packages/anjuna-beach.ed44ecc2.webp",
      "/images/packages/basilica-bom-jesus.db53c17d.webp",
    ],
    highlights: [
      "Fort Aguada's historic battlements and the beaches of Calangute and Baga",
      "A golden-hour sunset at the rocky cliffs of Vagator or Anjuna",
      "Old Goa's UNESCO World Heritage sites: the Se Cathedral and the Basilica of Bom Jesus",
      "A drive past the Dona Paula viewpoint and Miramar Beach",
      "A private vehicle for all transfers and sightseeing, with breakfast included",
    ],
    highlightsAr: [
      "أسوار حصن أغوادا التاريخية وشواطئ كالانغوت وباغا",
      "غروب ذهبي عند المنحدرات الصخرية في فاغاتور أو أنجونا",
      "مواقع التراث العالمي لليونسكو في غوا القديمة: كاتدرائية سي وبازيليكا بوم جيسوس",
      "جولة بسيارة تمر بمنظر دونا باولا وشاطئ ميرامار",
      "سيارة خاصة لجميع التنقلات والجولات السياحية مع الإفطار",
    ],
    itinerary: GOA_ITINERARY,
    inclusions: ROAD_INCLUSIONS,
    inclusionsAr: ROAD_INCLUSIONS_AR,
    exclusions: GOA_EXCLUSIONS,
    exclusionsAr: GOA_EXCLUSIONS_AR,
    goodToKnow: [QUOTE_NOTE, ID_NOTE],
    seoTitle: "Goa Tour Package — 3 Nights 4 Days | Safari Masti",
    seoDescription:
      "A 4-day Goa package: Fort Aguada, Calangute, Baga, Vagator and Anjuna beaches and Old Goa's UNESCO churches, with a private vehicle — request a quote from Safari Masti, Cochin.",
    relatedTourSlugs: ["golden-triangle-5-nights-6-days", "kerala-hills-backwaters-kovalam-6-nights-7-days", "kashmir-5-nights-6-days"],
  },
  {
    slug: "kashmir-5-nights-6-days",
    collectionSlug: "packages",
    title: "Kashmir: Srinagar, Gulmarg, Pahalgam & Sonamarg — 5 Nights / 6 Days",
    titleAr: "كشمير: سريناغار وغولمارغ وباهالغام وسونامارغ — ٥ ليالٍ / ٦ أيام",
    destination: "Kashmir",
    destinationAr: "كشمير",
    region: ["North"],
    category: ["North India", "Hill Stations", "Nature"],
    duration: "6 Days · 5 Nights",
    durationAr: "٦ أيام · ٥ ليالٍ",
    travelStyle: ["Comfort", "Premium"],
    bestFor: ["Mountain scenery, lakes and Mughal gardens"],
    bestForAr: ["المناظر الجبلية والبحيرات وحدائق المغول"],
    shortDescription:
      "Srinagar, Gulmarg, Pahalgam and Sonamarg in 6 days: a night on a Dal Lake houseboat, a Shikara ride, the Gulmarg Gondola and the Mughal Gardens — with breakfast and dinner included.",
    shortDescriptionAr:
      "سريناغار وغولمارغ وباهالغام وسونامارغ في ٦ أيام: ليلة على قارب سكني في بحيرة دال ورحلة شيكارا وتلفريك غولمارغ وحدائق المغول — مع الإفطار والعشاء.",
    overview:
      "Land in Srinagar and settle onto a traditional Dal Lake houseboat, with an evening Shikara ride against the Zabarwan range. Day trips take you to Gulmarg's meadows and the Gondola Cable Car, and on to Pahalgam, the “Valley of Shepherds”, by way of the Awantipura ruins and saffron fields. Back in Srinagar you visit the Mughal Gardens of Nishat Bagh and Shalimar Bagh and the Chashme Shahi spring, then spend a full day in Sonamarg, the “Meadow of Gold”. You travel by private A/c vehicle with an English-speaking driver cum guide, in 3-star or 4-star hotels as you choose.",
    overviewAr:
      "تصلون إلى سريناغار وتستقرون في قارب سكني تقليدي على بحيرة دال، مع رحلة شيكارا مسائية على خلفية سلسلة زابارفان. وتأخذكم الرحلات النهارية إلى مروج غولمارغ والتلفريك، ثم إلى باهالغام «وادي الرعاة» مرورًا بأطلال أوانتيبورا وحقول الزعفران. وعند العودة إلى سريناغار تزورون حدائق المغول في نيشات باغ وشاليمار باغ ونبع تشاشما شاهي، ثم تقضون يومًا كاملًا في سونامارغ «مرج الذهب». وتتنقلون بمركبة خاصة مكيَّفة مع سائق مرشد يتحدث الإنجليزية، في فنادق ٣ نجوم أو ٤ نجوم بحسب اختياركم.",
    heroImages: [
      "/images/packages/dal-lake-houseboats.0b8238a7.webp",
      "/images/packages/dal-lake-shikara.0103f123.webp",
      "/images/packages/gulmarg-gondola.f91ca9e9.webp",
      "/images/packages/pahalgam-valley.c313b2eb.webp",
      "/images/packages/betaab-valley.f265c2e7.webp",
      "/images/packages/shalimar-bagh-srinagar.bfcbaa6a.webp",
      "/images/packages/sonamarg-thajiwas.98101e7c.webp",
    ],
    highlights: [
      "A night on a traditional houseboat on Dal Lake and an evening Shikara ride",
      "Gulmarg and the Gondola Cable Car to the Kongdori meadows and Apharwat peak",
      "Pahalgam, the “Valley of Shepherds”, with the Awantipura ruins and saffron fields on the way",
      "The Mughal Gardens of Nishat Bagh and Shalimar Bagh, and the Chashme Shahi spring",
      "A full-day excursion to Sonamarg, the “Meadow of Gold”",
      "Daily breakfast and dinner, with an English-speaking driver cum guide",
    ],
    highlightsAr: [
      "ليلة على قارب سكني تقليدي في بحيرة دال ورحلة شيكارا مسائية",
      "غولمارغ والتلفريك إلى مروج كونغدوري وقمة أفاروات",
      "باهالغام «وادي الرعاة» مع أطلال أوانتيبورا وحقول الزعفران في الطريق",
      "حدائق المغول في نيشات باغ وشاليمار باغ ونبع تشاشما شاهي",
      "رحلة ليوم كامل إلى سونامارغ «مرج الذهب»",
      "الإفطار والعشاء يوميًا مع سائق مرشد يتحدث الإنجليزية",
    ],
    itinerary: KASHMIR_ITINERARY,
    inclusions: KASHMIR_INCLUSIONS,
    inclusionsAr: KASHMIR_INCLUSIONS_AR,
    exclusions: KASHMIR_EXCLUSIONS,
    exclusionsAr: KASHMIR_EXCLUSIONS_AR,
    goodToKnow: KASHMIR_NOTES,
    seoTitle: "Kashmir Tour Package — Srinagar, Gulmarg, Pahalgam 5 Nights 6 Days | Safari Masti",
    seoDescription:
      "A 6-day Kashmir package: a Dal Lake houseboat, Shikara ride, Gulmarg Gondola, Pahalgam, the Mughal Gardens and Sonamarg, with breakfast and dinner — request a quote from Safari Masti, Cochin.",
    relatedTourSlugs: ["shimla-manali-8-nights-9-days", "golden-triangle-5-nights-6-days", "goa-3-nights-4-days"],
  },
];

export function getPackageBySlug(slug: string) {
  return packages.find((p) => p.slug === slug);
}

/** Up to `count` other packages: the hand-picked related ones first, then any others to fill the list. */
export function getRelatedPackages(pkg: Tour, count = 3) {
  const picked = (pkg.relatedTourSlugs ?? [])
    .map((slug) => getPackageBySlug(slug))
    .filter((p): p is Tour => Boolean(p));
  const rest = packages.filter((p) => p.slug !== pkg.slug && !picked.some((r) => r.slug === p.slug));
  return [...picked, ...rest].slice(0, count);
}

/** The lowest published price for a package, in INR. */
export function lowestPrice(pkg: Tour): number | undefined {
  const amounts = pkg.pricing?.options.map((o) => o.amountInr);
  return amounts && amounts.length > 0 ? Math.min(...amounts) : undefined;
}
