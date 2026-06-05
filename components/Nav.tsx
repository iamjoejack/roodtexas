"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const LINKS = [
  { href: "#shop", label: "The shop" },
  { href: "#finishes", label: "Finishes" },
  { href: "#colorways", label: "Colorways" },
  { href: "#drops", label: "Drops" },
  { href: "#visualizer", label: "Visualizer" },
  { href: "#bench", label: "From the bench" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ink/85 backdrop-blur-xl border-b border-line" : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-[74px] max-w-[1180px] items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-3 font-display text-[20px] font-bold tracking-[0.16em]">
          <Image src="/assets/rood-badge-white.png" alt="ROOD Manufacturing" width={44} height={44} priority />
          ROOD
        </a>

        <nav className="hidden items-center gap-7 text-sm font-medium md:flex">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-ash transition-colors hover:text-bone">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#start"
            className="hidden rounded-[2px] bg-blood px-5 py-[11px] font-display text-[13px] font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-blood-bright sm:inline-block"
          >
            Start a finish
          </a>
          <button
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
            className="flex h-10 w-10 items-center justify-center text-bone md:hidden"
          >
            <span className="text-2xl leading-none">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-line bg-ink/95 px-6 py-4 backdrop-blur-xl md:hidden">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 font-display text-sm uppercase tracking-[0.08em] text-ash hover:text-bone"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#start"
            onClick={() => setOpen(false)}
            className="mt-2 inline-block rounded-[2px] bg-blood px-5 py-2.5 font-display text-[13px] font-semibold uppercase tracking-[0.12em] text-white"
          >
            Start a finish
          </a>
        </nav>
      )}
    </header>
  );
}
