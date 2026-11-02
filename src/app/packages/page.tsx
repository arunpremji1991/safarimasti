import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { PackagesPageBody } from "@/components/PackagesPageBody";
import { packages } from "@/data/packages";

export const metadata: Metadata = {
  title: "Tour Packages — Kerala & Himachal",
  description:
    "Ready-made journeys by Safari Masti — Kerala (a 5-day Munnar, Thekkady & Alleppey package and an 8-day Luxury Kerala package) and a 9-day Shimla & Manali package, with full itineraries and published prices.",
  alternates: { canonical: "/packages" },
};

export default function PackagesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: packages.map((p, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: p.title,
              url: `https://safarimasti.com/packages/${p.slug}`,
            })),
          }),
        }}
      />
      <PageHero
        eyebrow="New"
        eyebrowAr="جديد"
        title="Packages"
        titleAr="الباقات"
        description="Ready-made journeys across Kerala and Himachal with full day-by-day itineraries and published prices."
        descriptionAr="رحلات جاهزة في كيرالا وهيماشال مع برامج يومية كاملة وأسعار معلنة."
        image="/images/packages/alleppey-houseboat.968d7769.webp"
        crumbs={[
          { label: "Home", labelAr: "الرئيسية", href: "/" },
          { label: "Packages", labelAr: "الباقات" },
        ]}
      />
      <PackagesPageBody packages={packages} />
    </>
  );
}
