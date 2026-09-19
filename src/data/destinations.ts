import { Region } from "./types";

export interface RegionExplorer {
  region: Region;
  slug: string;
  title: string;
  description: string;
  image: string;
}

export const regionExplorers: RegionExplorer[] = [
  {
    region: "North",
    slug: "north-india",
    title: "North India",
    description:
      "The Golden Triangle, Himalayan treks and the Ganges pilgrimage trail — Delhi, Agra, Jaipur, Uttarakhand, Ladakh and Rishikesh.",
    image: "/images/destinations/north-india.webp",
  },
  {
    region: "South",
    slug: "south-india",
    title: "South India",
    description:
      "Kerala's backwaters, Tamil Nadu and Karnataka's temple heritage, and Hyderabad — the Jewels of the South.",
    image: "/images/destinations/south-india.webp",
  },
  {
    region: "East",
    slug: "east-india",
    title: "East India",
    description: "Ridge-line treks to Sandakphu & Phalut in the Eastern Himalayas.",
    image: "/images/destinations/east-india.webp",
  },
  {
    region: "Northeast",
    slug: "northeast-india",
    title: "Northeast India",
    description:
      "Meghalaya, Assam and Arunachal Pradesh — the Scotland of the East and the Land of the Dawn-Lit Peaks.",
    image: "/images/destinations/northeast-india.webp",
  },
  {
    region: "Central",
    slug: "central-india",
    title: "Central India",
    description: "Tiger country — guided safaris through Kanha and Bandhavgarh in Madhya Pradesh.",
    image: "/images/destinations/central-india.webp",
  },
  {
    region: "West",
    slug: "west-india",
    title: "West India",
    description: "Goa's beaches and Rajasthan's palace stays and desert heritage.",
    image: "/images/destinations/west-india.webp",
  },
];
