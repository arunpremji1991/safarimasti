import { Region } from "./types";

export interface RegionExplorer {
  region: Region;
  slug: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  image: string;
}

export const regionExplorers: RegionExplorer[] = [
  {
    region: "North",
    slug: "north-india",
    title: "North India",
    titleAr: "شمال الهند",
    description:
      "The Golden Triangle, Himalayan treks and the Ganges pilgrimage trail — Delhi, Agra, Jaipur, Uttarakhand, Ladakh and Rishikesh.",
    descriptionAr:
      "المثلث الذهبي، ورحلات تسلق جبال الهيمالايا، ومسار الحج على نهر الغانج — دلهي وأغرا وجايبور وأوتاراخاند ولداخ وريشيكيش.",
    image: "/images/destinations/north-india.webp",
  },
  {
    region: "South",
    slug: "south-india",
    title: "South India",
    titleAr: "جنوب الهند",
    description:
      "Kerala's backwaters, Tamil Nadu and Karnataka's temple heritage, and Hyderabad — the Jewels of the South.",
    descriptionAr:
      "المسطحات المائية الهادئة في كيرالا، والتراث المعماري لمعابد تاميل نادو وكارناتاكا، وحيدر آباد — جواهر الجنوب.",
    image: "/images/destinations/south-india.webp",
  },
  {
    region: "East",
    slug: "east-india",
    title: "East India",
    titleAr: "شرق الهند",
    description: "Ridge-line treks to Sandakphu & Phalut in the Eastern Himalayas.",
    descriptionAr: "رحلات تسلق على خط التلال نحو سانداكفو وفالوت في شرق جبال الهيمالايا.",
    image: "/images/destinations/east-india.webp",
  },
  {
    region: "Northeast",
    slug: "northeast-india",
    title: "Northeast India",
    titleAr: "شمال شرق الهند",
    description:
      "Meghalaya, Assam and Arunachal Pradesh — the Scotland of the East and the Land of the Dawn-Lit Peaks.",
    descriptionAr:
      "ميغالايا وآسام وأروناتشال براديش — المعروفة بـ«اسكتلندا الشرق» و«أرض القمم المضيئة عند الفجر».",
    image: "/images/destinations/northeast-india.webp",
  },
  {
    region: "Central",
    slug: "central-india",
    title: "Central India",
    titleAr: "وسط الهند",
    description: "Tiger country — guided safaris through Kanha and Bandhavgarh in Madhya Pradesh.",
    descriptionAr: "أرض النمور — رحلات سفاري بمرافقة مرشدين في كانها وبانداغفار بولاية ماديا براديش.",
    image: "/images/destinations/central-india.webp",
  },
  {
    region: "West",
    slug: "west-india",
    title: "West India",
    titleAr: "غرب الهند",
    description: "Goa's beaches and Rajasthan's palace stays and desert heritage.",
    descriptionAr: "شواطئ غوا، وإقامات القصور في راجستان، وتراث الصحراء.",
    image: "/images/destinations/west-india.webp",
  },
];
