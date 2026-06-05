import { Section, SectionHead } from "./Section";
import { Reveal } from "./Reveal";
import { InventoryEmbed } from "./InventoryEmbed";
import { SHOP_CATEGORIES, BRANDS, STORE_URL } from "@/lib/content";

export function Shop() {
  return (
    <Section id="shop">
      <SectionHead eyebrow="The parts shop" title="Parts and uppers we stock and build">
        The working catalog, live below. Quality AR-15 components from the brands we trust, plus our own
        barreled uppers. Real-time stock and pricing come straight from the store.
      </SectionHead>

      <Reveal>
        <InventoryEmbed />
      </Reveal>

      <Reveal className="mt-8 grid grid-cols-2 gap-3.5 md:grid-cols-4" delay={60}>
        {SHOP_CATEGORIES.map((c) => (
          <a
            key={c}
            href={STORE_URL}
            target="_blank"
            rel="noopener"
            className="flex items-center justify-between gap-2.5 rounded-md border border-line bg-panel px-5 py-[18px] transition-colors hover:border-blood hover:bg-panel-2"
          >
            <span className="font-display text-[15px] uppercase tracking-[0.04em]">{c}</span>
            <span className="text-blood">›</span>
          </a>
        ))}
      </Reveal>

      <Reveal className="mt-9 border-t border-line pt-8" delay={120}>
        <span className="mb-[18px] block font-display text-xs uppercase tracking-[0.16em] text-ash-dim">
          Brands we carry
        </span>
        <ul className="flex flex-wrap gap-x-7 gap-y-3.5">
          {BRANDS.map((b, i) => (
            <li
              key={b}
              className={`relative font-display text-[17px] uppercase tracking-[0.06em] text-ash transition-colors hover:text-bone ${
                i > 0
                  ? "before:absolute before:-left-[15px] before:top-1/2 before:h-1 before:w-1 before:-translate-y-1/2 before:rounded-full before:bg-blood before:content-['']"
                  : ""
              }`}
            >
              {b}
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
