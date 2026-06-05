# Old site content pull, ar15rifleshop.com

Everything I could recover from the existing AR15 Rifle Shop site. Saved as a
reference for what to carry over into ROOD Manufacturing.

## What's live today vs what I could read

- **Current site** is a custom Angular storefront powered by **Gearfire**
  (firearms e-commerce / dropship platform). It boots from
  `dealer-settings.gearfire.com/dealer-info/get-initialization-data`. That API
  is bot-protected, so it returned 403 to direct requests and status 0 in the
  automated browser. The page renders blank without it, so the live catalog
  could not be scraped from here. Its product data is the generic Gearfire
  distributor feed, not original ROOD content.
- **Only one archive exists** in the Wayback Machine: **2018-08-19**. Back then
  the site ran on **Shopify** (store id 2223/5295). That snapshot is the source
  of everything below, including the images in this folder.

## Brand / contact

- Name: AR15RIFLESHOP.COM
- Tagline lines in rotation: "PISTOLS COMING SOON", "THE GOOD STUFF",
  ".224 GRENDEL BACK IN STOCK SOON"
- Footer: "Thank you for stopping in"
- Payments accepted (2018): American Express, Apple Pay, Diners Club, Discover,
  JCB, Mastercard, PayPal, Visa
- 2018 platform: Shopify. Current platform: Gearfire.

## Product categories / collections (2018 Shopify handles)

| Category | Collection URL |
|---|---|
| Upper Receivers Barreled | /collections/complete-barreled-upper-receivers |
| Upper Receiver Parts AR15 (gas blocks / tubes) | /collections/ar15-gas-blocks-and-gas-tubes |
| Muzzle Brakes / Flash Hiders | /collections/frontpage |
| Hand Guards and Picatinny Rails | /collections/hand-guards-and-picatinny-rails |
| Bolt Carrier Group [BCG] | /collections/bolt-carrier-group-bcg |
| Lower Parts AR15 | /collections/lower-parts-ar15 |
| Optics, Scopes, Red Dot, RMR | /collections/optics-scopes-red-dot-rmr |
| Rifle Food, Rifle Snacks, and Rifle Treats | /collections/rifle-food-rifle-snacks-and-rifle-treats |

## Brands carried (2018)

Aero Precision, FN Herstal USA, Anderson Manufacturing, Ballistic Advantage,
MMC Armory, Elftmann (Elf Tactical / competition triggers), Glock,
Smith & Wesson M&P, Sig Sauer, Federal Armament (FedArm).

## Original copy worth keeping, the .224 Grendel writeup

Heading: "Grendel, hard hitting and accurate variations"

> The .224 Grendel (224 AR) is a necked down 6.5 Grendel cartridge developed by
> Robert Whitley a decade ago. .224 Grendel is capable of easily producing
> velocities such as 70gr RDF @ 3350fps, 80gr ELD @ 3070fps, 90gr BT @ 2970fps,
> and 95gr BT @ 2880fps. When compared to the published velocity data of just
> 2700fps for 90gr BT Valkyrie, it is not at all difficult to see the advantage
> in one cartridge over the other. Having a larger case capacity and shallow
> shoulder position respective of the case head when compared to the 6.8SPC,
> (6.8SPC is necked down to .224 Valkyrie) physics and chemistry dictates that
> the Valkyrie will never be faster than the 224 Grendel across any projectile
> weight class. Nor has the 6.8SPC case proved to be more accurate than the
> Grendel.
>
> Of note regarding the Grendel case and accuracy; on June 8th 2013 Michael
> Stinnett shot a world record group at a 100yds measuring a mere 0.0077" using
> a light varmint class bench rest rifle. The record setting round is in fact a
> necked up 6.5 Grendel case to .30cal (called the .30 Stewart)
>
> This cartridge is of course made possible by the hard work of the 6.5 Grendel
> development team of Arne Brennan, Bill Alexander, and Janne Pohjoispää. THANK
> YOU ALL for bringing the Grendel to us.
>
> BR 2018

## Images saved in this folder (full resolution)

Hero / banners:
- `shopify_cover_art_dd69d19e-71dd-43d7-a0fa-451bebe57779.jpg` — main homepage cover
- `224_Grendel_banner_b4ad9ee5-5668-4cbc-bb10-afd4340b71c5.jpg` — Grendel banner

Category covers:
- `ar_cover_art.png` — AR upper/receiver hero (3.5 MB, the blue-steel lowers shot)
- `Gas_block_cover.png`
- `muzzle_brake_cover.png`
- `223_upper_ss_sale_2.jpg` — stainless .223 upper
- `toolcraft-bolt-carriers-glory-shot_...jpg` — BCG
- `shopify_lower_parts.jpg`
- `Rifle_Food_snack_bar.jpg`

Brand logos:
- `aero_precision.jpg`, `FN_...gif`, `AndersonManufacturingLogo.jpg`,
  `ballistic_advantage_logo.jpg`, `mmc_armory.JPG`, `Elftmann_tactical.JPG`,
  `Glock_Logo.JPG`, `Smith_and_Wesson_Logo.jpg`, `Optics_b_and_w.JPG`,
  `Sig_black_and_white.JPG`, `Fed_arm_b_and_w.JPG`

## Notes for the ROOD rebuild

- Most images are third-party brand logos and generic AR part shots, useful as
  reference but not ROOD-original brand assets.
- The genuinely original, reusable asset is the Grendel writeup (technical,
  knowledgeable, on-brand voice). It shows the owner knows the product deeply.
- The `ar_cover_art.png` blue-steel receiver shot is the strongest original
  photo and could anchor a "parts / uppers" section if ROOD keeps a catalog.
- The current Gearfire catalog (uppers, BCGs, handguards, muzzle devices,
  triggers, optics) is the live product surface; if ROOD wants that catalog on
  the new site we either keep Gearfire embedded or export the product list.
