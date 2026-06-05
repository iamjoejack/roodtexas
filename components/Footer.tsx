import Image from "next/image";
import { STORE_URL } from "@/lib/content";

const COLS = [
  {
    title: "The shop",
    links: [
      { label: "Uppers & parts", href: STORE_URL, ext: true },
      { label: "Bolt carrier groups", href: STORE_URL, ext: true },
      { label: "Optics", href: STORE_URL, ext: true },
      { label: "From the bench", href: "#bench", ext: false },
    ],
  },
  {
    title: "Finish house",
    links: [
      { label: "Send-in service", href: "#finishes", ext: false },
      { label: "Signature colorways", href: "#colorways", ext: false },
      { label: "Drop calendar", href: "#drops", ext: false },
      { label: "Finish visualizer", href: "#visualizer", ext: false },
    ],
  },
  {
    title: "Compliance",
    links: [
      { label: "ATF Q&A", href: "https://www.atf.gov/firearms/questions-and-answers", ext: true },
      {
        label: "FFL best practices",
        href: "https://www.atf.gov/firearms/tools-and-services-firearms-industry/current-licensees/federal-firearms-licensee-quick-reference-and-best-practices-guide",
        ext: true,
      },
      { label: "Verify our FFL", href: "#start", ext: false },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-line pb-10 pt-16">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="flex flex-wrap justify-between gap-10">
          <div className="max-w-[300px]">
            <Image src="/assets/rood-badge-white.png" alt="ROOD Manufacturing" width={64} height={64} />
            <p className="mt-3.5 text-sm text-ash">
              AR-15 parts, custom firearm finishes, limited drops, and flagship builds. Built and finished in
              Lubbock, Texas.
            </p>
          </div>
          {COLS.map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 font-display text-xs uppercase tracking-[0.16em] text-ash-dim">{col.title}</h4>
              {col.links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.ext ? "_blank" : undefined}
                  rel={l.ext ? "noopener" : undefined}
                  className="mb-2.5 block text-sm text-ash transition-colors hover:text-bone"
                >
                  {l.label}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-3.5 border-t border-line pt-7 text-[13px] text-ash-dim">
          <span>© 2026 ROOD Manufacturing. All rights reserved.</span>
          <div className="flex items-center gap-5">
            <a href="/credits" className="transition-colors hover:text-ash">
              Image credits
            </a>
            <span>Lubbock, TX · Built to order, never metered.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
