# Safari Masti — Website

Premium Pan-India travel website for Safari Masti (Cochin, Kerala), built with
Next.js (App Router), TypeScript, Tailwind CSS v4 and Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Email setup (contact form + Build Your Journey)

The contact form (`/contact`) and the journey builder (`/build-your-journey`)
both send email via `src/lib/mailer.ts` using SMTP credentials from
environment variables. Copy `.env.example` to `.env.local` and fill in real
credentials — see that file for the easiest option (a Gmail App Password on
`safarimasti@gmail.com`). Until these are set, both forms fail gracefully with
a message pointing the visitor to call or WhatsApp instead.

## Content & data

All copy is sourced from Safari Masti's Company Profile & Signature
Collections PDF and Package Options PDF — see `src/data/*.ts`:

- `site.ts` — brand copy, contact details, services, "why us"
- `collections.ts` — the 7 Signature Collections
- `tours.ts` — individual journeys within each collection
- `destinations.ts`, `experienceTypes.ts`, `journeyBuilderOptions.ts`, `blog.ts`

Tour pages intentionally omit fabricated itineraries, inclusions, prices and
reviews — see the comment at the top of `tours.ts`. Add real day-by-day detail
to a tour's `itinerary`/`inclusions`/`goodToKnow` fields as it becomes
available; the product page renders it automatically once present.

## Images

All photography is sourced from Unsplash under the Unsplash License — see
[`IMAGE-CREDITS.md`](./IMAGE-CREDITS.md) for the full source list and a
replacement checklist for swapping in Safari Masti's own photography.

## Structure

- `src/app/*` — routes (home, about, experiences, destinations, collections
  + `[slug]`, tours/`[slug]`, build-your-journey, contact, blog + `[slug]`)
- `src/components/sections/*` — homepage sections
- `src/components/tour/*`, `src/components/journey/*` — product page and
  journey-builder specific components
- `src/app/api/contact`, `src/app/api/journey-request` — form submission routes
