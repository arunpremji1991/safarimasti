export const site = {
  name: "Safari Masti",
  tagline: "Crafting Unforgettable Indian Journeys",
  promise: "Seamless planning, absolute safety, and memories that last a lifetime.",
  base: "Cochin, Kerala",
  scope: "Pan-India",
  regionsLine: "North · South · East · Northeast",
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
    description:
      "Tailor-made itineraries across India, meticulously designed to match your choice and budget.",
    image: "/images/services/customized-pan-india.webp",
    href: "/build-your-journey",
  },
  {
    index: "02",
    title: "Luxury & Honeymoon Packages",
    description:
      "Premium, high-end travel experiences and romantic getaways with curated stays and exclusive amenities.",
    image: "/images/services/luxury-honeymoon.webp",
    href: "/collections/luxury-honeymoon",
  },
  {
    index: "03",
    title: "Adventure & Experiential Tourism",
    description:
      "Guided walking tours, trekking, hiking, and managed camping experiences for outdoor enthusiasts.",
    image: "/images/services/adventure-experiential.webp",
    href: "/collections/adventure-trekking",
  },
  {
    index: "04",
    title: "Corporate & Weekend Getaways",
    description:
      "Quick, refreshing travel packages structured for working professionals seeking a work-life balance.",
    image: "/images/services/corporate-weekend.webp",
    href: "/build-your-journey",
  },
  {
    index: "05",
    title: "Senior Citizen Travel Programs",
    description:
      "Specialized, slow-paced packages focused on comfort, accessibility, and maximum safety for older adults.",
    image: "/images/services/senior-citizen.webp",
    href: "/build-your-journey",
  },
] as const;

export const whyUs = [
  {
    index: "01",
    title: "Deep Local Expertise",
    description:
      "Experienced professionals with extensive destination knowledge, ensuring authentic and enriching travel experiences.",
  },
  {
    index: "02",
    title: "Budget-Flexibility",
    description:
      "We believe exceptional travel should be accessible, offering flexible planning that maximizes value without compromising quality.",
  },
  {
    index: "03",
    title: "Safety & Comfort First",
    description:
      "Comprehensive planning and on-ground support guarantee peace of mind, particularly for senior citizen and adventure tours.",
  },
  {
    index: "04",
    title: "End-to-End Service",
    description:
      "From conceptualization to execution, we handle all logistics to provide a hassle-free, seamless journey for every traveler.",
  },
] as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experiences", href: "/experiences" },
  { label: "Destinations", href: "/destinations" },
  { label: "Collections", href: "/collections" },
  { label: "Contact", href: "/contact" },
] as const;
