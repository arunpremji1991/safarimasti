import { Collection } from "./types";

export const collections: Collection[] = [
  {
    slug: "adventure-trekking",
    index: 1,
    title: "Premier Adventure & Trekking Expeditions",
    subtitle: "For the trail-hungry and the summit-bound",
    description:
      "Guided walking tours, trekking, hiking and managed camping experiences for outdoor enthusiasts, from Himalayan summits to alpine lakes.",
    heroImage: "/images/collections/adventure-trekking-hero.webp",
    cardImage: "/images/collections/adventure-trekking-card.webp",
    regions: ["North"],
    destinations: [
      { name: "Kedarkantha Peak" },
      { name: "Hampta Pass & Chandratal Lake" },
      { name: "Valley of Flowers & Hemkund Sahib" },
      { name: "Markha Valley" },
      { name: "Sandakphu & Phalut" },
      { name: "Incredible Ladakh" },
    ],
    seoTitle: "Adventure & Trekking Tours in India | Safari Masti",
    seoDescription:
      "Guided treks across Kedarkantha, Hampta Pass, Valley of Flowers, Markha Valley, Sandakphu and Ladakh — curated adventure expeditions by Safari Masti.",
  },
  {
    slug: "golden-triangle",
    index: 2,
    title: "The Golden Triangle",
    description:
      "A luxury tour through Delhi, Agra, and Jaipur — India's most iconic circuit of Mughal grandeur, royal forts, and vibrant bazaars.",
    heroImage: "/images/collections/golden-triangle-hero.webp",
    cardImage: "/images/collections/golden-triangle-card.webp",
    regions: ["North"],
    destinations: [
      { name: "Delhi" },
      { name: "Agra" },
      { name: "Jaipur" },
    ],
    seoTitle: "Golden Triangle Tour Packages — Delhi, Agra, Jaipur | Safari Masti",
    seoDescription:
      "Experience India's most iconic circuit — Delhi, Agra and Jaipur — with a luxury Golden Triangle tour crafted by Safari Masti.",
  },
  {
    slug: "luxury-honeymoon",
    index: 3,
    title: "Luxury & Honeymoon Escapes",
    description:
      "Premium, high-end experiences and romantic getaways with curated stays and exclusive amenities.",
    heroImage: "/images/collections/luxury-honeymoon-hero.webp",
    cardImage: "/images/collections/luxury-honeymoon-card.webp",
    regions: ["South", "West"],
    destinations: [
      { name: "Kerala Backwater Retreats" },
      { name: "Munnar Hill Romance" },
      { name: "Goa Beach Escapes" },
      { name: "Rajasthan Palace Stays" },
    ],
    seoTitle: "Luxury & Honeymoon Packages in India | Safari Masti",
    seoDescription:
      "Kerala backwaters, Munnar hills, Goa beaches and Rajasthan palaces — curated luxury and honeymoon escapes by Safari Masti.",
  },
  {
    slug: "northeast",
    index: 4,
    title: "Hidden Jewels of the Northeast",
    description:
      "Two ways into India's most untouched corner — the Scotland of the East, and the Land of the Dawn-Lit Peaks.",
    heroImage: "/images/collections/northeast-hero.webp",
    cardImage: "/images/collections/northeast-card.webp",
    regions: ["Northeast"],
    destinations: [
      { name: "Meghalaya & Assam", description: "The Scotland of the East" },
      { name: "Arunachal Pradesh & Assam", description: "Land of the Dawn-Lit Peaks" },
    ],
    seoTitle: "Northeast India Tour Packages — Meghalaya, Assam, Arunachal | Safari Masti",
    seoDescription:
      "Discover Meghalaya, Assam and Arunachal Pradesh with Safari Masti's curated Northeast India journeys.",
  },
  {
    slug: "wildlife-safaris",
    index: 5,
    title: "Premier National Park Safaris",
    description:
      "Guided safaris through India's most celebrated national parks and tiger reserves.",
    heroImage: "/images/collections/wildlife-safaris-hero.webp",
    cardImage: "/images/collections/wildlife-safaris-card.webp",
    regions: ["Central", "East", "North"],
    destinations: [
      { name: "Kanha & Bandhavgarh" },
      { name: "Kaziranga National Park" },
      { name: "Ranthambore National Park" },
      { name: "Jim Corbett National Park" },
    ],
    seoTitle: "India Wildlife Safari Tours — Kanha, Kaziranga, Ranthambore, Corbett | Safari Masti",
    seoDescription:
      "Premier national park safaris across Kanha, Bandhavgarh, Kaziranga, Ranthambore and Jim Corbett, curated by Safari Masti.",
  },
  {
    slug: "jewels-of-the-south",
    index: 6,
    title: "Jewels of the South",
    description:
      "Customized, budget-friendly tours from misty hills and backwaters to sunny beaches and royal heritage.",
    heroImage: "/images/collections/jewels-of-the-south-hero.webp",
    cardImage: "/images/collections/jewels-of-the-south-card.webp",
    regions: ["South"],
    destinations: [
      { name: "Kerala" },
      { name: "Tamil Nadu" },
      { name: "Karnataka" },
      { name: "Hyderabad" },
      { name: "Goa" },
    ],
    seoTitle: "South India Tour Packages — Kerala, Tamil Nadu, Karnataka | Safari Masti",
    seoDescription:
      "From misty hills and backwaters to beaches and royal heritage — customized South India tours across Kerala, Tamil Nadu, Karnataka, Hyderabad and Goa.",
  },
  {
    slug: "divine-trails",
    index: 7,
    title: "The Divine Trails — Sacred Temple Tours",
    description:
      "Pilgrimage journeys along the Ganges and Himalayan foothills in the north, and the great temple trails of Tamil Nadu and Kerala in the south.",
    heroImage: "/images/collections/divine-trails-hero.webp",
    cardImage: "/images/collections/divine-trails-card.webp",
    regions: ["North", "South"],
    destinations: [
      {
        name: "Ganges & Himalayan Foothills",
        description: "Varanasi, Ayodhya, Prayagraj, Haridwar, Rishikesh, Badrinath, Kedarnath",
      },
      {
        name: "Tamil Nadu & Kerala Trails",
        description:
          "Meenakshi Amman, Brihadeeswarar, Ramanathaswamy, Padmanabhaswamy, Guruvayur, Chottanikara",
      },
    ],
    seoTitle: "Sacred Temple Tours in India | Safari Masti",
    seoDescription:
      "Divine trails across Varanasi, Rishikesh, Kedarnath, Meenakshi Amman, Padmanabhaswamy and more — spiritual journeys curated by Safari Masti.",
  },
];

export function getCollectionBySlug(slug: string) {
  return collections.find((c) => c.slug === slug);
}
