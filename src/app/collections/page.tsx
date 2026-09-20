import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { CollectionsGrid } from "@/components/CollectionsGrid";
import { BuildJourneyCTA } from "@/components/sections/BuildJourneyCTA";

export const metadata: Metadata = {
  title: "Signature Collections",
  description:
    "Explore Safari Masti's Signature Collections — bucket-list India tour packages spanning adventure treks, the Golden Triangle, luxury escapes, the Northeast, wildlife safaris, South India and sacred temple trails.",
};

export default function CollectionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Bucket-List India"
        eyebrowAr="وجهات لا بد من زيارتها في الهند"
        title="Signature Collections"
        titleAr="المجموعات المميزة"
        description="Seven curated collections spanning the length and breadth of India — each one built to be tailored around you."
        descriptionAr="سبع مجموعات مُنتقاة بعناية تمتد عبر طول الهند وعرضها — كل واحدة منها قابلة للتصميم خصيصًا لكم."
        image="/images/collections/wildlife-safaris-hero.webp"
        crumbs={[
          { label: "Home", labelAr: "الرئيسية", href: "/" },
          { label: "Collections", labelAr: "المجموعات" },
        ]}
      />

      <CollectionsGrid />

      <BuildJourneyCTA />
    </>
  );
}
