import { Section, SectionHead } from "./Section";
import { Reveal } from "./Reveal";
import { DROPS } from "@/lib/content";

export function Drops() {
  return (
    <Section id="drops">
      <SectionHead eyebrow="The drop calendar" title="One colorway. One window. Then it's gone.">
        Every drop is a fixed quantity reserved with a deposit. We build only what is claimed, document the
        whole thing, and let sell-through decide what comes next.
      </SectionHead>

      <div className="grid gap-[18px] md:grid-cols-4">
        {DROPS.map((d, i) => (
          <Reveal key={d.when} delay={i * 70}>
            <div className="relative h-full rounded-md border border-line bg-panel p-6 transition-colors hover:border-blood/40">
              {d.live && (
                <span className="absolute right-5 top-5 flex items-center gap-1.5 font-display text-[10px] uppercase tracking-[0.14em] text-blood">
                  <span className="relative flex h-[7px] w-[7px]">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blood opacity-75" />
                    <span className="relative inline-flex h-[7px] w-[7px] rounded-full bg-blood" />
                  </span>
                  Live now
                </span>
              )}
              <div className="font-display text-xs uppercase tracking-[0.16em] text-ash-dim">{d.when}</div>
              <h3 className="mb-1 mt-2.5 text-[21px]">{d.name}</h3>
              <div className="text-[13px] font-semibold text-blood">{d.qty}</div>
              <p className="mt-2.5 text-[13.5px] text-ash">{d.blurb}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
