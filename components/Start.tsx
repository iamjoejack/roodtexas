import { Section, SectionHead } from "./Section";
import { Reveal } from "./Reveal";
import { LeadForm } from "./LeadForm";

export function Start() {
  return (
    <Section id="start">
      <SectionHead eyebrow="Start your order" title="Tell us what you want finished">
        Send the details and we follow up with the right next step: a send-in intake, a drop slot, a quote, or
        a parts question. Real people you can reach, no spam, no metered surprises.
      </SectionHead>

      <Reveal>
        <LeadForm />
      </Reveal>

      <Reveal className="mt-12 flex max-w-[760px] items-start gap-5 rounded-md border border-line bg-panel p-8" delay={60}>
        <div className="shrink-0 text-[28px] text-blood">⚠</div>
        <div>
          <h3 className="mb-2 text-[19px]">Done right, by the book</h3>
          <p className="text-[14.5px] text-ash">
            ROOD operates inside a conservative compliance system. Every intake, transfer, return, and shipment
            follows current ATF guidance and state-by-state rules, reviewed by counsel. This site is brand and
            strategy, not legal advice.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
