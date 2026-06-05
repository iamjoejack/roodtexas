import Image from "next/image";
import { Section, SectionHead } from "./Section";
import { Reveal } from "./Reveal";

const DOORS = [
  {
    href: "#shop",
    img: "/assets/shop-parts.png",
    tag: "The parts shop",
    title: "AR-15 uppers & parts",
    blurb:
      "Barreled uppers, bolt carrier groups, handguards, muzzle devices, triggers, and optics. The same catalog you know from AR15 Rifle Shop.",
    cta: "Browse live inventory",
  },
  {
    href: "#finishes",
    img: "/img/cerakote-sig.jpg",
    tag: "The finish house",
    title: "Custom finishes & drops",
    blurb:
      "Send in your own firearm for a signature finish, reserve a numbered monthly drop, or order a complete flagship build.",
    cta: "See finish services",
  },
];

export function TwoDoors() {
  return (
    <Section id="two-doors">
      <SectionHead eyebrow="One shop, two doors" title="Parts on one side. Custom finishes on the other.">
        The shop that already builds and sells AR-15 parts is the same shop that finishes your firearm. Buy a
        part, or hand us yours and let us make it one of one.
      </SectionHead>

      <div className="grid gap-5 md:grid-cols-2">
        {DOORS.map((d, i) => (
          <Reveal key={d.title} delay={i * 90}>
            <a
              href={d.href}
              className="group relative flex min-h-[360px] flex-col justify-end overflow-hidden rounded-md border border-line"
            >
              <Image
                src={d.img}
                alt={d.title}
                fill
                sizes="(max-width: 768px) 100vw, 580px"
                className="object-cover brightness-[0.62] grayscale-[0.35] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05] group-hover:brightness-75 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/10" />
              <div className="relative z-10 p-8">
                <div className="font-display text-xs uppercase tracking-[0.18em] text-blood">{d.tag}</div>
                <h3 className="mt-2.5 text-[28px]">{d.title}</h3>
                <p className="mt-2.5 max-w-[42ch] text-[15px] text-ash">{d.blurb}</p>
                <span className="mt-[18px] inline-flex items-center gap-2 font-display text-[13px] uppercase tracking-[0.1em] text-bone">
                  {d.cta}
                  <span className="text-blood transition-transform duration-200 group-hover:translate-x-1.5">→</span>
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
