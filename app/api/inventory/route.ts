import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const revalidate = 300; // cache reachability for 5 minutes

/**
 * Live inventory.
 *
 * The storefront (ar15rifleshop.com) runs on Gearfire. Gearfire's product APIs
 * (consumer-product.gearfire.com/consumer-products/get-deals, get-featured-products,
 * etc.) are gated behind Cloudflare Turnstile — every request must carry an
 * Authorization token minted by solving a browser bot-challenge. A server cannot
 * mint that token, so a server-side product proxy is not possible without a
 * Gearfire partner API key.
 *
 * The reliable way to show genuinely live inventory is therefore to embed the
 * storefront itself: inside the iframe the store solves its own Turnstile and
 * renders real-time stock and pricing. This route returns the embed metadata
 * (store URL, deep-link tabs) and a best-effort reachability check so the UI can
 * show a status dot.
 */

const STORE = (process.env.NEXT_PUBLIC_STORE_URL || "https://www.ar15rifleshop.com").replace(/\/$/, "");

const TABS = [
  { id: "home", label: "Shop all", path: "/" },
  { id: "deals", label: "Deals", path: "/deals" },
  { id: "manufacturers", label: "Brands", path: "/manufacturers" },
];

export async function GET() {
  let reachable = false;
  try {
    const res = await fetch(STORE, {
      method: "HEAD",
      // Short timeout so the UI never hangs on this.
      signal: AbortSignal.timeout(5000),
      headers: { "user-agent": "ROOD-status-check" },
    });
    reachable = res.ok || res.status === 403; // 403 still means the host is up
  } catch {
    reachable = false;
  }

  return NextResponse.json({
    storeUrl: STORE,
    reachable,
    tabs: TABS,
    note: "Live inventory is served from the Gearfire storefront inside the embed.",
  });
}
