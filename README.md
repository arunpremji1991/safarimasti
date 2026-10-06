# Safari Masti — Website

Premium Pan-India travel website for Safari Masti (Cochin, Kerala), built with
Next.js (App Router), TypeScript, Tailwind CSS v4 and Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & deploy (static site + PHP forms)

The site is a static export, hosted on any PHP/HTML host (e.g. Hostinger "PHP/HTML website").

```bash
npm run package   # builds ./out and zips it to safarimasti-static.zip
```

1. In hPanel, open File Manager -> `public_html`, delete the default files, upload
   `safarimasti-static.zip` and extract it there (make sure `.htaccess` is present).
2. In `public_html/api/`, copy `config.sample.php` to `config.php` and fill in the
   recipient and SMTP details (a mailbox on your own domain, e.g. `info@safarimasti.com`).
   `config.php` is never committed and is blocked from web access.
3. Enable the free SSL certificate for the domain.

The contact form (`/contact`) and journey builder (`/build-your-journey`) post to
`/api/contact.php` and `/api/journey-request.php` (source in `public/api/`). Until
`config.php` exists they fall back to PHP `mail()`; if sending fails, visitors are
asked to call or WhatsApp instead.

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
