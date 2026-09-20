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
  cardImage: string;
  destinations: CollectionDestinationItem[];
  regions: Region[];
  seoTitle: string;
  seoDescription: string;
  /** Optional "why this product" points, rendered on the collection page when present. */
  advantages?: CollectionAdvantage[];
  /** Excluded from the homepage Signature Collections carousel and the main
   * /collections "Bucket-List India" grid — still gets its own /collections/[slug] page. */
  hideFromSignatureCollections?: boolean;
}

export interface ItineraryStop {
  label: string; // "Day 01" or "Step 01"
  title: string;
  location?: string;
  time?: string;
  description: string;
  image?: string;
}

export interface Tour {
  slug: string;
  collectionSlug: string;
  title: string;
  titleAr?: string;
  destination: string;
  destinationAr?: string;
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
  goodToKnow: { label: string; content: string }[];
  seoTitle: string;
  seoDescription: string;
  relatedTourSlugs?: string[];
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
