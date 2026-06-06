import Image from "next/image";
import { Section, SectionHead } from "./Section";
import { Reveal } from "./Reveal";
import { SERVICES } from "@/lib/content";

const WAYS = [
  {
    rank: "01",
    tag: "Primary",
    title: "Send-in finish service",
    blurb:
      "Ship in or drop off your own firearm under a compliance-reviewed intake. We finish it, inspect it, shoot it in studio, and send it back. Faster, lower cost to you, fully yours.",
  },
  {
    rank: "02",
    tag: "The engine",
    title: "Pre-sold limited drops",
    blurb:
      "One colorway, a fixed quantity, a clear window. Reserve with a deposit and we build only what is claimed. Sells out, then we decide if it ever comes back.",
  },
  {
    rank: "03",
    tag: "Flagship",
    title: "Complete custom builds",
    blurb:
      "A finished firearm built end to end in a signature or numbered finish. The halo piece, and proof of what the shop can do.",
  },
];

export function Finishes() {
  return (
    <Section id="finishes">
      <SectionHead eyebrow="The finish house" title="Three ways to own a ROOD finish">
        Send in the firearm you already own and we finish it. Reserve a numbered drop before we build it. Or
        buy a complete flagship build outright. Most people start with the first one.
      </SectionHead>

      <div className="grid gap-5 md:grid-cols-3">
        {WAYS.map((w, i) => (
          <Reveal key={w.rank} delay={i * 80}>
            <div className="group h-full rounded-md border border-line bg-panel p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blood/60">
              <div className="flex items-start justify-between">
                <span className="font-display text-[13px] uppercase tracking-[0.16em] text-blood">{w.tag}</span>
                <span className="font-display text-[46px] font-bold leading-none text-line transition-colors group-hover:text-blood/30">
                  {w.rank}
                </span>
              </div>
              <h3 className="mt-3 text-[23px]">{w.title}</h3>
              <p className="mt-3 text-[15px] text-ash">{w.blurb}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* accent image */}
      <Reveal className="relative mt-14 overflow-hidden rounded-lg border border-line" delay={60}>
        <div className="relative min-h-[420px] w-full sm:min-h-[340px] md:min-h-0 md:aspect-[21/7]">
          <Image
            src="/img/ar-charging-handle.jpg"
            alt="Finished AR-15 detail by ROOD Manufacturing"
            fill
            sizes="(max-width: 1180px) 100vw, 1180px"
            className="object-cover object-center brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30 md:bg-gradient-to-r md:from-ink/90 md:via-ink/30 md:to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end p-7 md:max-w-md md:justify-center md:p-12">
            <p className="font-display text-[clamp(22px,3vw,34px)] uppercase leading-tight">
              Finish artistry, not a parts list
            </p>
            <p className="mt-3 max-w-md text-sm text-ash">
              You own the firearm. We sell the finish, the detail work, and the turnaround. Pricing reflects
              difficulty and craft.
            </p>
          </div>
        </div>
      </Reveal>

      {/* services table */}
      <Reveal className="mt-8 overflow-hidden rounded-md border border-line bg-panel" delay={80}>
        {SERVICES.map((s) => (
          <div
            key={s.name}
            className="grid items-center gap-3 border-b border-line px-6 py-[22px] transition-colors last:border-0 hover:bg-panel-2 md:grid-cols-[1.4fr_1fr_1.6fr] md:gap-5"
          >
            <div>
              <div className="font-display text-[18px] font-semibold uppercase tracking-[0.04em]">{s.name}</div>
              <div className="mt-0.5 text-xs font-semibold text-blood">{s.tier}</div>
            </div>
            <div className="font-display text-[21px] font-semibold">{s.price}</div>
            <div className="text-sm text-ash">{s.note}</div>
          </div>
        ))}
      </Reveal>
    </Section>
  );
}
