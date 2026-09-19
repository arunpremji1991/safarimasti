export interface ExperienceType {
  label: string;
  image: string;
  description: string;
  href: string;
}

export const experienceTypes: ExperienceType[] = [
  {
    label: "Adventure",
    image: "/images/collections/adventure-trekking-hero.webp",
    description: "Guided treks, hikes and managed camping across the Himalayas.",
    href: "/collections/adventure-trekking",
  },
  {
    label: "Luxury",
    image: "/images/collections/luxury-honeymoon-hero.webp",
    description: "Premium stays and exclusive amenities across India.",
    href: "/collections/luxury-honeymoon",
  },
  {
    label: "Honeymoon",
    image: "/images/tours/kerala-backwater-retreats-1.webp",
    description: "Romantic escapes through Kerala, Munnar, Goa and Rajasthan.",
    href: "/collections/luxury-honeymoon",
  },
  {
    label: "Wildlife",
    image: "/images/collections/wildlife-safaris-hero.webp",
    description: "Safaris through India's most celebrated national parks.",
    href: "/collections/wildlife-safaris",
  },
  {
    label: "Culture",
    image: "/images/collections/golden-triangle-hero.webp",
    description: "Mughal grandeur, royal forts and heritage circuits.",
    href: "/collections/golden-triangle",
  },
  {
    label: "Spiritual",
    image: "/images/collections/divine-trails-hero.webp",
    description: "Sacred temple trails across North and South India.",
    href: "/collections/divine-trails",
  },
  {
    label: "Wellness",
    image: "/images/collections/kerala-ayurveda-hero.webp",
    description: "Authentic Kerala Ayurveda rejuvenation packages.",
    href: "/collections/kerala-ayurveda",
  },
  {
    label: "Family",
    image: "/images/collections/jewels-of-the-south-hero.webp",
    description: "Budget-friendly journeys across South India for every generation.",
    href: "/collections/jewels-of-the-south",
  },
  {
    label: "Senior Citizen",
    image: "/images/services/senior-citizen.webp",
    description: "Slow-paced programs focused on comfort, accessibility and safety.",
    href: "/build-your-journey",
  },
  {
    label: "Corporate",
    image: "/images/services/corporate-weekend.webp",
    description: "Quick, refreshing packages for working professionals.",
    href: "/build-your-journey",
  },
  {
    label: "Weekend Escape",
    image: "/images/services/corporate-weekend.webp",
    description: "Short, restorative getaways designed around your schedule.",
    href: "/build-your-journey",
  },
];
