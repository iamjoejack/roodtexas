import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Image credits",
  description: "Attribution for Creative Commons photography used on roodtexas.",
};

const CREDITS = [
  {
    use: "Hero & finish house — custom battleworn Cerakote Sig Sauer",
    title: "A Sig Sauer with a custom Cerakote finish",
    author: "Whitfield1967",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    source: "https://commons.wikimedia.org/wiki/File:A_Sig_Sauer_with_a_Cerakote_custom_Cerakote_finish.jpg",
  },
  {
    use: "Finishes — AR-15 detail",
    title: "Aero Precision Breach Charging Handle on AR-15 Rifle",
    author: "Tony Webster",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
    source: "https://commons.wikimedia.org/wiki/File:Aero_Precision_Breach_Charging_Handle_on_AR-15_Rifle.jpg",
  },
  {
    use: "From the bench — finished AR build",
    title: ".308 AR-15",
    author: "Mitch Barrie, Reno, NV, USA",
    license: "CC BY-SA 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
    source: "https://commons.wikimedia.org/wiki/File:.308_AR-15_(16184373714).jpg",
  },
  {
    use: "AR-15 bolt carrier group",
    title: "AR-15 Bolt Carrier Group (BCG)",
    author: "Tony Webster",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
    source: "https://commons.wikimedia.org/wiki/File:AR-15_Bolt_Carrier_Group_(BCG).jpg",
  },
  {
    use: "AR-15 bolt / dust cover",
    title: "AR-15 Dust Cover Open - Rifle Bolt - BCG",
    author: "Tony Webster",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
    source: "https://commons.wikimedia.org/wiki/File:AR-15_Dust_Cover_Open_-_Rifle_Bolt_-_BCG.jpg",
  },
  {
    use: "AR-15 safety selector",
    title: "AR-15 Safe Fire Selector - Rifle Safety Switch",
    author: "Tony Webster",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
    source: "https://commons.wikimedia.org/wiki/File:AR-15_Safe_Fire_Selector_-_Rifle_Safety_Switch.jpg",
  },
];

export default function CreditsPage() {
  return (
    <main className="mx-auto max-w-[820px] px-6 py-24">
      <Link href="/" className="font-display text-xs uppercase tracking-[0.14em] text-blood hover:text-blood-bright">
        ← Back to ROOD
      </Link>
      <h1 className="mt-6 text-[clamp(30px,5vw,46px)]">Image credits</h1>
      <p className="mt-4 max-w-[60ch] text-ash">
        Some photography on this site is licensed under Creative Commons. The originals and their licenses are
        credited below. ROOD&apos;s own product, drop, and finish photography will replace these placeholders as
        studio shoots are completed.
      </p>

      <ul className="mt-10 space-y-5">
        {CREDITS.map((c) => (
          <li key={c.source} className="rounded-md border border-line bg-panel p-6">
            <div className="font-display text-xs uppercase tracking-[0.14em] text-ash-dim">{c.use}</div>
            <div className="mt-1.5 text-[17px] font-semibold text-bone">{c.title}</div>
            <div className="mt-1 text-sm text-ash">
              by {c.author} —{" "}
              <a href={c.licenseUrl} target="_blank" rel="noopener" className="text-blood hover:underline">
                {c.license}
              </a>
            </div>
            <a
              href={c.source}
              target="_blank"
              rel="noopener"
              className="mt-2 inline-block text-xs text-ash-dim hover:text-ash"
            >
              View original on Wikimedia Commons ↗
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
