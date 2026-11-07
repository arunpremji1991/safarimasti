import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { PackagesPageBody } from "@/components/PackagesPageBody";
import { packages } from "@/data/packages";

export const metadata: Metadata = {
  title: "Tour Packages — Kerala, Kashmir, Himachal, Goa & Golden Triangle",
  description:
    "Ready-made journeys by Safari Masti — Kerala (Munnar, Thekkady & Alleppey packages from 5 to 8 days, with Kovalam and Kanyakumari options, and an 8-day Luxury Kerala package) a 9-day Shimla & Manali package, a 6-day Kashmir tour, a 6-day Golden Triangle (Delhi, Agra, Jaipur) and a 4-day Goa break, with full day-by-day itineraries.",
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
        description="Ready-made journeys across Kerala, Kashmir, Himachal, Goa and the Golden Triangle with full day-by-day itineraries."
        descriptionAr="رحلات جاهزة في كيرالا وكشمير وهيماشال وغوا والمثلث الذهبي مع برامج يومية كاملة."
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
