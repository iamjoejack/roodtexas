"use client";

import { useEffect, useState } from "react";

type Tab = { id: string; label: string; path: string };
type Info = { storeUrl: string; reachable: boolean; tabs: Tab[] };

const FALLBACK: Info = {
  storeUrl: "https://www.ar15rifleshop.com",
  reachable: true,
  tabs: [
    { id: "home", label: "Shop all", path: "/" },
    { id: "deals", label: "Deals", path: "/deals" },
    { id: "manufacturers", label: "Brands", path: "/manufacturers" },
  ],
};

export function InventoryEmbed() {
  const [info, setInfo] = useState<Info>(FALLBACK);
  const [active, setActive] = useState("home");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let alive = true;
    fetch("/api/inventory")
      .then((r) => r.json())
      .then((d: Info) => {
        if (alive && d?.storeUrl) setInfo(d);
      })
      .catch(() => {});
    return () => {
      alive = false;
    };
  }, []);

  const tab = info.tabs.find((t) => t.id === active) ?? info.tabs[0];
  const src = `${info.storeUrl}${tab.path}`;

  return (
    <div className="overflow-hidden rounded-lg border border-line bg-panel">
      {/* browser chrome */}
      <div className="flex flex-wrap items-center gap-3 border-b border-line bg-panel-2 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className={`h-2.5 w-2.5 rounded-full ${info.reachable ? "bg-blood" : "bg-ash-dim"}`} />
          <span className="font-display text-xs uppercase tracking-[0.14em] text-ash">
            {info.reachable ? "Live inventory" : "Inventory offline"}
          </span>
        </div>
        <div className="ml-auto flex flex-wrap gap-1.5">
          {info.tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => {
                setActive(t.id);
                setLoaded(true);
              }}
              className={`rounded-[2px] px-3.5 py-1.5 font-display text-xs uppercase tracking-[0.06em] transition-colors ${
                active === t.id && loaded
                  ? "bg-blood text-white"
                  : "border border-line text-ash hover:text-bone"
              }`}
            >
              {t.label}
            </button>
          ))}
          <a
            href={info.storeUrl}
            target="_blank"
            rel="noopener"
            className="rounded-[2px] border border-line px-3.5 py-1.5 font-display text-xs uppercase tracking-[0.06em] text-ash transition-colors hover:text-bone"
          >
            Open ↗
          </a>
        </div>
      </div>

      {/* viewport */}
      <div className="relative aspect-[16/10] w-full bg-ink md:aspect-[16/9]">
        {loaded ? (
          <iframe
            key={src}
            src={src}
            title="ROOD live inventory"
            loading="lazy"
            className="h-full w-full"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          />
        ) : (
          <button
            onClick={() => setLoaded(true)}
            className="group absolute inset-0 flex flex-col items-center justify-center gap-4"
            aria-label="Load live inventory"
          >
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30 grayscale"
              style={{ backgroundImage: "url('/assets/shop-parts.png')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />
            <span className="relative flex h-16 w-16 items-center justify-center rounded-full border border-blood bg-ink/70 text-blood transition-transform duration-300 group-hover:scale-110">
              <span className="ml-1 text-2xl">▶</span>
            </span>
            <span className="relative font-display text-sm uppercase tracking-[0.14em] text-bone">
              Load live inventory
            </span>
            <span className="relative max-w-xs px-6 text-center text-xs text-ash">
              Real-time stock and pricing, served straight from the store.
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
