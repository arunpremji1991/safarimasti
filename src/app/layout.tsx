import type { Metadata } from "next";
import { Fraunces, Manrope, Cairo } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { LanguageProvider } from "@/i18n/LanguageContext";
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

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try {
              var l = localStorage.getItem('safarimasti-locale');
              if (l === 'ar') {
                document.documentElement.lang = 'ar';
                document.documentElement.dir = 'rtl';
              }
            } catch (e) {}`,
          }}
        />
      </head>
      <body
        className={`${fraunces.variable} ${manrope.variable} ${cairo.variable} antialiased`}
        suppressHydrationWarning
      >
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
        <LanguageProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-amber-500 focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-maroon-950"
          >
            Skip to content
          </a>
          <Nav />
          <main id="main-content">{children}</main>
          <Footer />
          <FloatingContact />
        </LanguageProvider>
      </body>
    </html>
  );
}
