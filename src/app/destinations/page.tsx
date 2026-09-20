import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { DestinationsList } from "@/components/DestinationsList";
import { BuildJourneyCTA } from "@/components/sections/BuildJourneyCTA";

export const metadata: Metadata = {
  title: "Destinations",
  description:
    "Explore India region by region with Safari Masti — North, South, East, Northeast, Central and West India.",
};

export default function DestinationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Destination Explorer"
        eyebrowAr="مستكشف الوجهات"
        title="Six Regions, One Incredible India"
        titleAr="ست مناطق، وهند واحدة مذهلة"
        description="From Himalayan passes to southern backwaters — every region, curated by local experts."
        descriptionAr="من ممرات جبال الهيمالايا إلى المسطحات المائية الجنوبية الهادئة — كل منطقة مُصمَّمة بخبرة محلية."
        image="/images/destinations/north-india.webp"
        crumbs={[
          { label: "Home", labelAr: "الرئيسية", href: "/" },
          { label: "Destinations", labelAr: "الوجهات" },
        ]}
      />

      <DestinationsList />

      <BuildJourneyCTA />
    </>
  );
}
