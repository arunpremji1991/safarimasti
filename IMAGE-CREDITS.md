# Image Credits

Every image on this site is **AI-generated with Higgsfield (model: GPT Image 2.5)**,
created for Safari Masti. The earlier Unsplash stock photography has been fully
replaced; no third-party photographs remain in `public/images/`.

Images are illustrative scenes of the places, activities and experiences each page
describes. They are not photographs of a specific property, guide or guest, and the
Kerala Ayurveda page says so. Prompts requested no text, logos or watermarks.

## Where they are used

| Folder | Contents |
|---|---|
| `hero/` | Homepage hero (Ladakh lake with travellers and prayer flags) |
| `about/` | About section (Chinese fishing nets, Fort Kochi, Kerala) |
| `sections/` | Full-bleed homepage sections: Kerala backwaters (brand statement), Himalayan road (Build Your Journey), Thar Desert caravan (image band) |
| `collections/` | One 16:9 hero and one card image for each of the 8 collections |
| `destinations/` | One image for each of the 6 regions |
| `services/` | One image for each of the 5 services (the honeymoon service shows a couple) |
| `tours/` | One image per tour/programme (named `<tour-slug>-1.webp`; Golden Triangle also has `-2`) |
| `honeymoon/` | Couples-only imagery for the Luxury & Honeymoon page and its four escapes (Kerala, Munnar, Goa, Rajasthan), plus a full-bleed backwaters band |
| `ayurveda/` | Treatments, yoga, meditation, consultation and meals for the Kerala Ayurveda page and programmes |

## Replacing with real photography

Safari Masti's own photography should replace these as it becomes available,
especially for destinations and properties where accuracy matters most. To swap an
image, replace the file in `public/images/**` with the same filename (any size,
ideally 3:2 for cards/tours and 16:9 for heroes), or update the path in
`src/data/*.ts`.
