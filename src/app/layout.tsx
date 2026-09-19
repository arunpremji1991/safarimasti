import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { site } from "@/data/site";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://safarimasti.com"),
  title: {
    default: `${site.name} | Crafting Unforgettable Indian Journeys`,
    template: `%s | ${site.name}`,
  },
  description:
    "Safari Masti is a premier travel management company based in Cochin, Kerala, crafting curated, customized Pan-India journeys — from Himalayan treks to luxury honeymoons.",
  openGraph: {
    title: `${site.name} | Crafting Unforgettable Indian Journeys`,
    description:
      "Curated journeys across India, designed around your travel style, comfort and budget.",
    siteName: site.name,
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${manrope.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              name: site.name,
              description:
                "Premier travel management company based in Cochin, Kerala, specializing in curated Pan-India travel experiences.",
              telephone: site.phone,
              email: site.email,
              address: {
                "@type": "PostalAddress",
                streetAddress: `${site.address.line1} ${site.address.line2}`,
                addressLocality: "Cochin",
                addressRegion: "Kerala",
                postalCode: "683520",
                addressCountry: "IN",
              },
            }),
          }}
        />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
