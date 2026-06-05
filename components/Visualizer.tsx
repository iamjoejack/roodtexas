"use client";

import { Section, SectionHead } from "./Section";
import { Reveal } from "./Reveal";
import { useBuild } from "./BuildProvider";
import { FINISHES, PLATFORMS } from "@/lib/content";

export function Visualizer() {
  const { platform, finish, setPlatform, setFinish } = useBuild();
  const active = FINISHES.find((f) => f.name === finish) ?? FINISHES[0];

  return (
    <Section id="visualizer">
      <SectionHead eyebrow="Finish visualizer" title="See it before you ship it">
        Pick a platform and a finish to preview the look on a familiar shape. Save your build and we follow up
        with a quote or a drop slot. Previews are representative, final finish varies with lighting, material,
        and coating.
      </SectionHead>

      <div className="grid items-stretch gap-10 md:grid-cols-2">
        <Reveal>
          <div className="relative grid min-h-[420px] place-items-center overflow-hidden rounded-lg border border-line bg-panel">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:34px_34px]" />
            <svg
              viewBox="0 0 460 150"
              className="relative z-10 w-[78%] max-w-[420px] drop-shadow-[0_18px_40px_rgba(0,0,0,0.6)]"
            >
              <defs>
                <linearGradient id="finishGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor={active.c1} />
                  <stop offset="45%" stopColor={active.c2} />
                  <stop offset="100%" stopColor={active.c3} />
                </linearGradient>
              </defs>
              <g
                fill="url(#finishGrad)"
                stroke="rgba(0,0,0,0.35)"
                strokeWidth="1"
                style={{ transition: "fill 0.35s ease" }}
              >
                <rect x="40" y="40" width="300" height="26" rx="5" />
                <rect x="338" y="46" width="92" height="9" rx="4" />
                <rect x="360" y="30" width="9" height="18" rx="2" />
                <rect x="150" y="46" width="170" height="5" rx="2" fill="rgba(0,0,0,0.25)" />
                <rect x="150" y="56" width="170" height="5" rx="2" fill="rgba(0,0,0,0.25)" />
                <path d="M120 66 L160 66 L150 120 L130 120 Z" />
                <path d="M60 66 L120 66 L120 88 L96 88 L86 120 L66 116 Z" />
                <rect x="6" y="48" width="56" height="22" rx="5" />
                <rect x="0" y="50" width="14" height="34" rx="4" />
                <path d="M96 88 L120 88 L120 100 L100 100 Z" fill="rgba(0,0,0,0.2)" />
              </g>
            </svg>
            <div className="absolute bottom-[18px] left-[22px] z-20 font-display text-[13px] uppercase tracking-[0.12em] text-ash">
              Finish: <b className="text-bone">{finish}</b> on <b className="text-bone">{platform}</b>
            </div>
          </div>
        </Reveal>

        <Reveal className="flex flex-col gap-7" delay={80}>
          <div>
            <label className="mb-3 block font-display text-[13px] uppercase tracking-[0.14em] text-ash">
              1. Choose a platform
            </label>
            <div className="flex flex-wrap gap-2.5">
              {PLATFORMS.map((p) => (
                <button
                  key={p}
                  onClick={() => setPlatform(p)}
                  className={`rounded-[2px] border px-4 py-[9px] font-display text-[13px] uppercase tracking-[0.06em] transition-all ${
                    platform === p
                      ? "border-blood bg-blood text-white"
                      : "border-line bg-panel text-ash hover:border-ash-dim hover:text-bone"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="mb-3 block font-display text-[13px] uppercase tracking-[0.14em] text-ash">
              2. Choose a finish
            </label>
            <div className="flex flex-wrap gap-2.5">
              {FINISHES.map((f) => (
                <button
                  key={f.name}
                  onClick={() => setFinish(f.name)}
                  className={`flex items-center gap-2.5 rounded-[2px] border px-4 py-[9px] font-display text-[13px] uppercase tracking-[0.06em] transition-all ${
                    finish === f.name
                      ? "border-blood bg-blood text-white"
                      : "border-line bg-panel text-ash hover:border-ash-dim hover:text-bone"
                  }`}
                >
                  <span
                    className="h-3.5 w-3.5 rounded-full border border-white/25"
                    style={{ background: f.dot }}
                  />
                  {f.name}
                </button>
              ))}
            </div>
          </div>

          <a
            href="#start"
            className="inline-flex w-fit items-center gap-2.5 rounded-[2px] bg-blood px-7 py-[15px] font-display text-sm font-semibold uppercase tracking-[0.12em] text-white transition-all hover:-translate-y-0.5 hover:bg-blood-bright"
          >
            Save this build ›
          </a>
          <p className="text-[12.5px] leading-relaxed text-ash-dim">
            Representative preview only. Final finish may vary based on lighting, material, prep, coating
            process, and screen settings. We confirm every detail on the work order before any work begins.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
