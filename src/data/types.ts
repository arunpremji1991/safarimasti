export type Region = "North" | "South" | "East" | "Northeast" | "Central" | "West";

export type TravelStyle = "Budget Friendly" | "Comfort" | "Premium" | "Luxury";

export interface Destination {
  slug: string;
  name: string;
  region: Region;
  description: string;
  image: string;
}

export interface CollectionDestinationItem {
  name: string;
  nameAr?: string;
  description?: string;
  descriptionAr?: string;
}

export interface CollectionAdvantage {
  title: string;
  titleAr?: string;
  description: string;
  descriptionAr?: string;
}

export interface Collection {
  slug: string;
  index: number;
  title: string;
  titleAr?: string;
  subtitle?: string;
  subtitleAr?: string;
  description: string;
  descriptionAr?: string;
  heroImage: string;
  /** CSS object-position for the hero/cover crop, e.g. "72% 50%", so the subject stays in frame on narrow screens. */
  heroPosition?: string;
  cardImage: string;
  destinations: CollectionDestinationItem[];
  regions: Region[];
  seoTitle: string;
  seoDescription: string;
  /** Optional "why this product" points, rendered on the collection page when present. */
  advantages?: CollectionAdvantage[];
  /** Excluded from the homepage Signature Collections carousel and the main
   * /collections signature grid — still gets its own /collections/[slug] page. */
  hideFromSignatureCollections?: boolean;
}

export interface ItineraryStop {
  label: string; // "Day 01" or "Step 01"
  labelAr?: string;
  title: string;
  titleAr?: string;
  location?: string;
  time?: string;
  description: string;
  descriptionAr?: string;
  image?: string;
}

export interface TourPriceOption {
  label: string;
  labelAr?: string;
  /** What this option covers, e.g. "3★ hotels with a Deluxe A/c houseboat". */
  detail?: string;
  detailAr?: string;
  amountInr: number;
}

export interface TourHotel {
  place: string;
  placeAr?: string;
  name: string;
  nights: string;
  nightsAr?: string;
}

export interface Tour {
  slug: string;
  collectionSlug: string;
  title: string;
  titleAr?: string;
  destination: string;
  destinationAr?: string;
  /** Packages: the single place name used by the listing's Destination filter and card label, e.g. "Kerala". */
  destinationGroup?: string;
  destinationGroupAr?: string;
  /** Packages: the city a journey starts in, shown on the card as "Starts in Cochin". */
  startsIn?: string;
  startsInAr?: string;
  region: Region[];
  category: string[];
  duration: string;
  durationAr?: string;
  travelStyle: TravelStyle[];
  bestFor: string[];
  bestForAr?: string[];
  shortDescription: string;
  shortDescriptionAr?: string;
  overview: string;
  overviewAr?: string;
  heroImages: string[];
  highlights: string[];
  highlightsAr?: string[];
  itinerary: ItineraryStop[];
  inclusions: string[];
  inclusionsAr?: string[];
  exclusions: string[];
  exclusionsAr?: string[];
  goodToKnow: { label: string; content: string; labelAr?: string; contentAr?: string }[];
  seoTitle: string;
  seoDescription: string;
  relatedTourSlugs?: string[];
  /** Published prices (packages only). Tours without it show "Request a Quote". */
  pricing?: {
    options: TourPriceOption[];
    note?: string;
    noteAr?: string;
    /** Prices are per person rather than for the whole booking. */
    perPerson?: boolean;
    /** GST is charged on top of the listed prices (otherwise prices are shown as tax-inclusive). */
    gstPercentExtra?: number;
  };
  hotels?: TourHotel[];
}

export interface Service {
  index: string;
  title: string;
  titleAr?: string;
  description: string;
  descriptionAr?: string;
  image: string;
  href: string;
}

export interface WhyUsPoint {
  index: string;
  title: string;
  titleAr?: string;
  description: string;
  descriptionAr?: string;
}
