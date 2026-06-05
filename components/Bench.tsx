import Image from "next/image";
import { Section, SectionHead } from "./Section";
import { Reveal } from "./Reveal";

const DATA = [
  ["3,350 fps", "70gr RDF"],
  ["2,970 fps", "90gr BT"],
  ['0.0077"', "100yd record group"],
];

export function Bench() {
  return (
    <Section id="bench">
      <SectionHead eyebrow="From the bench" title="We know this stuff cold">
        Real knowledge, not marketing. A note from the shop on one of our favorite cartridges.
      </SectionHead>

      <div className="grid items-center gap-10 md:grid-cols-[0.85fr_1.15fr]">
        <Reveal className="overflow-hidden rounded-lg border border-line">
          <div className="relative aspect-[4/5]">
            <Image
              src="/img/ar-308-build.jpg"
              alt="Finished AR platform build"
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-cover grayscale-[0.15]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h3 className="text-[28px]">The .224 Grendel</h3>
          <div className="mb-[18px] mt-2 font-display text-xs uppercase tracking-[0.16em] text-blood">
            Hard hitting and accurate
          </div>
          <p className="mb-3.5 text-[15px] text-ash">
            The .224 Grendel (224 AR) is a necked-down 6.5 Grendel cartridge developed by Robert Whitley. It
            pushes 70gr RDF at 3,350 fps and 90gr BT at 2,970 fps. Against the published 2,700 fps for 90gr BT
            Valkyrie, the advantage is hard to miss. Larger case capacity and a shallow shoulder mean the
            Valkyrie never beats the Grendel across any projectile weight, and the Grendel case has proven more
            accurate than the 6.8 SPC it descends from.
          </p>
          <div className="my-5 flex flex-wrap gap-6">
            {DATA.map(([v, l]) => (
              <div key={l} className="border-l-2 border-blood pl-3">
                <b className="block font-display text-[20px]">{v}</b>
                <span className="text-xs uppercase tracking-[0.1em] text-ash-dim">{l}</span>
              </div>
            ))}
          </div>
          <p className="text-[15px] text-ash">
            On June 8, 2013, Michael Stinnett shot a world-record 100-yard group of just 0.0077&quot; with a
            light varmint bench-rest rifle on a necked-up Grendel case. Credit to the 6.5 Grendel team, Arne
            Brennan, Bill Alexander, and Janne Pohjoispää, for bringing it to us.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
