// Central content for ROOD Manufacturing. Edit copy/pricing here.

export const SERVICES = [
  {
    name: "Single-color refinish",
    tier: "Entry service",
    price: "$325 to $550",
    note: "Clean, fast, and a great first job. The easiest way to try the shop.",
  },
  {
    name: "Two-tone custom",
    tier: "Core service",
    price: "$550 to $850",
    note: "The sweet spot. Best balance of price, demand, and visual payoff.",
  },
  {
    name: "Battleworn / distressed",
    tier: "Premium service",
    price: "$750 to $1,100",
    note: "Hand-worked character and wear. Made to be photographed.",
  },
  {
    name: "Signature ROOD colorway",
    tier: "Brand service",
    price: "$850 to $1,300+",
    note: "Named, protectable color systems you cannot get anywhere else.",
  },
  {
    name: "Rush slot",
    tier: "Add-on",
    price: "+20% to 35%",
    note: "Jump the queue when a slot is open. Offered only when we can deliver.",
  },
  {
    name: "Studio photo + video set",
    tier: "Add-on",
    price: "$75 to $250",
    note: "Pro images and short clips of your build, shot in the ROOD studio.",
  },
] as const;

export const COLORWAYS = [
  {
    name: "Midnight Forge",
    type: "Dark tactical premium",
    blurb: "Deep graphite-black with a forged sheen. The safe, sharp base every collection needs.",
    badge: "Permanent",
    css: "linear-gradient(135deg, #1a1c22 0%, #0c0d10 45%, #2a2d36 100%)",
  },
  {
    name: "Copperhead",
    type: "High-visual collector",
    blurb: "Burnt copper bleeding into black. Built for the feed and the front of the case.",
    badge: "Drop favorite",
    css: "linear-gradient(135deg, #5a2a12 0%, #1a0f08 40%, #b5642e 100%)",
  },
  {
    name: "Stormline Gray",
    type: "Clean modern contrast",
    blurb: "Cool, clean, and contemporary. The one that pulls first-time and display buyers.",
    badge: "Permanent",
    css: "linear-gradient(135deg, #6b7178 0%, #2c3036 50%, #aeb4ba 100%)",
  },
] as const;

export const FINISHES = [
  { name: "Midnight Forge", c1: "#1a1c22", c2: "#0c0d10", c3: "#2a2d36", dot: "#1a1c22" },
  { name: "Copperhead", c1: "#5a2a12", c2: "#1a0f08", c3: "#b5642e", dot: "#b5642e" },
  { name: "Stormline Gray", c1: "#6b7178", c2: "#2c3036", c3: "#aeb4ba", dot: "#8a9097" },
  { name: "Black Cherry", c1: "#4a0d18", c2: "#14060a", c3: "#7d1828", dot: "#7d1828" },
  { name: "Arctic Smoke", c1: "#cfd4d8", c2: "#7e858c", c3: "#eef1f3", dot: "#cfd4d8" },
  { name: "Blackout Redline", c1: "#181818", c2: "#050505", c3: "#b01620", dot: "#b01620" },
] as const;

export const PLATFORMS = ["AR-15 Carbine", "AR-15 Pistol", "Handgun slide", "Bolt rifle"] as const;

export const DROPS = [
  {
    when: "Drop 01",
    name: "Black Cherry",
    qty: "10 to 15 slots",
    blurb: "Founders pricing for the first serious buyers. Deposit reserves your slot.",
    live: true,
  },
  {
    when: "Drop 02",
    name: "Copperhead",
    qty: "15 to 25 slots",
    blurb: "High-visual run for the feed. Price climbs if Drop 01 sells out.",
    live: false,
  },
  {
    when: "Drop 03",
    name: "Stormline Gray",
    qty: "15 to 25 slots",
    blurb: "Cleaner tactical color tested against the broader market.",
    live: false,
  },
  {
    when: "Drop 04",
    name: "Dealer exclusive",
    qty: "5 to 10 display",
    blurb: "Display guns plus finish orders for select ranges and partners.",
    live: false,
  },
] as const;

export const SHOP_CATEGORIES = [
  "Barreled uppers",
  "Bolt carrier groups",
  "Handguards & rails",
  "Muzzle brakes",
  "Gas blocks & tubes",
  "Lower parts",
  "Triggers",
  "Optics & red dots",
] as const;

export const BRANDS = [
  "Aero Precision",
  "Anderson Manufacturing",
  "Ballistic Advantage",
  "Elftmann Tactical",
  "MMC Armory",
  "FN",
  "Glock",
  "Smith & Wesson",
  "Sig Sauer",
  "Federal Armament",
] as const;

export const INTENTS = [
  "Send-in finish service",
  "Reserve a drop slot",
  "Complete flagship build",
  "Parts / uppers question",
  "Collector Club waitlist",
  "Dealer or range inquiry",
] as const;

export const STORE_URL = process.env.NEXT_PUBLIC_STORE_URL || "https://www.ar15rifleshop.com";
