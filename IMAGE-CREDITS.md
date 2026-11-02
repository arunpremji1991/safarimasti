# Image Credits

Every image on this site is **AI-generated with Higgsfield (model: GPT Image 2.5)**,
created for Safari Masti, **except the Packages photos** in `public/images/packages/`, which are
real Unsplash photographs (credited below). The earlier Unsplash stock photography used on the
other pages has been fully replaced.

Images are illustrative scenes of the places, activities and experiences each page
describes. They are not photographs of a specific property, guide or guest, and the
Kerala Ayurveda page says so. Prompts requested no text, logos or watermarks.

## Packages photos — real photographs from Unsplash

The Packages pages (`public/images/packages/`) use real photographs of the exact places in each itinerary,
downloaded from [Unsplash](https://unsplash.com) under the [Unsplash License](https://unsplash.com/license)
(free for commercial use; attribution appreciated). Each was checked against its Unsplash location tag or
description (for example Pariyaram/Athirappilly, Munnar, Mattupetty, Eravikulam, Kumily/Periyar, Alleppey).

| Local asset | Unsplash photo |
|---|---|
| athirappilly-falls | https://unsplash.com/photos/fpgnOPxR-xc |
| athirappilly-walkway | https://unsplash.com/photos/DZMbt0ffPlA |
| munnar-tea-hills | https://unsplash.com/photos/2_aLe9hC3_E |
| munnar-tea-road | https://unsplash.com/photos/zmr9TeA7WjU |
| munnar-tea-estate | https://unsplash.com/photos/uA2mNEkMzdo |
| mattupetty-dam | https://unsplash.com/photos/_B3GGRhRWLo |
| eravikulam-nilgiri-tahr | https://unsplash.com/photos/oguTHIRSyHQ |
| eravikulam-tahr-closeup | https://unsplash.com/photos/BIulZvfsRMA |
| periyar-lake | https://unsplash.com/photos/v3eO3TSUU18 |
| alleppey-houseboat | https://unsplash.com/photos/N3VzleBhOvk |
| alleppey-houseboat-canoe | https://unsplash.com/photos/0vS3dp4mo9U |
| kerala-black-pepper | https://unsplash.com/photos/07mSvSqbij4 |
| fort-kochi-fishing-nets | https://unsplash.com/photos/33Z4FsBTiAY |

## Where they are used

| Folder | Contents |
|---|---|
| `hero/` | Homepage hero (Ladakh lake with travellers and prayer flags) |
| `about/` | About section (Chinese fishing nets, Fort Kochi, Kerala) |
| `sections/` | Full-bleed homepage sections: Kerala backwaters (brand statement), Himalayan road (Build Your Journey), Thar Desert caravan (image band) |
| `collections/` | One 16:9 hero and one card image for each of the 8 collections |
| `destinations/` | One image for each of the 6 regions |
| `services/` | One image for each of the 5 services (the honeymoon service shows a couple; the senior citizen service shows a group of seniors, with a second tea-table image for the Senior Citizen experience tile) |
| `tours/` | One image per tour/programme (named `<tour-slug>-1.webp`; Golden Triangle also has `-2`) |
| `honeymoon/` | Couples-only imagery for the Luxury & Honeymoon page and its four escapes (Kerala, Munnar, Goa, Rajasthan), plus a full-bleed backwaters band |
| `culture/` | Ellora Kailasa Temple, Ajanta Caves and Hampi — the Culture tile cycles these with the Taj Mahal |
| `packages/` | Real Unsplash photographs for the two Kerala packages (see the table above) |
| `ayurveda/` | Treatments, yoga, meditation, consultation and meals for the Kerala Ayurveda page and its two packages, plus Munnar, Thekkady and Kovalam scenes for the tour part |

## Replacing with real photography

Safari Masti's own photography should replace these as it becomes available,
especially for destinations and properties where accuracy matters most. To swap an
image, drop the new file into the same `public/images/**` folder (ideally 3:2 for
cards/tours and 16:9 for heroes), then run `npm run images:hash` and rebuild. Image
files carry a short content hash in their name (e.g. `about-friends.fb9c1b58.webp`), so
visitors' browsers always fetch the new picture instead of an old cached one.
