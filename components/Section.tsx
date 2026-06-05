import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`border-t border-line py-24 md:py-28 ${className}`}>
      <div className="mx-auto max-w-[1180px] px-6">{children}</div>
    </section>
  );
}

export function SectionHead({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <Reveal className="mb-14 max-w-[46rem]">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-[clamp(30px,4.4vw,50px)] tracking-[0.01em]">{title}</h2>
      {children && <p className="mt-[18px] text-[17px] text-ash">{children}</p>}
    </Reveal>
  );
}
