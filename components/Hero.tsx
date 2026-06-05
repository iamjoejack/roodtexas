import Image from "next/image";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-[120px] pb-24 md:pt-[150px] md:pb-32">
      {/* atmospheric image — full-bleed on mobile, right side on desktop */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 md:left-auto md:right-0 md:h-full md:w-[46%]">
          <Image
            src="/img/cerakote-sig.jpg"
            alt="Custom battleworn Cerakote finish by ROOD"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 46vw"
            className="object-cover object-[68%_center] md:object-left"
          />
          {/* desktop scrims */}
          <div className="absolute inset-0 hidden bg-gradient-to-r from-ink via-ink/55 to-ink/10 md:block" />
          <div className="absolute inset-0 hidden bg-gradient-to-t from-ink via-transparent to-ink/40 md:block" />
          {/* mobile scrims — keep the headline readable over the photo */}
          <div className="absolute inset-0 bg-ink/45 md:hidden" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/35 md:hidden" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_82%_18%,rgba(209,31,42,0.16),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(700px_500px_at_6%_95%,rgba(209,31,42,0.07),transparent_60%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1180px] px-6">
        <p className="eyebrow">Lubbock, Texas · Built and finished in house</p>
        <h1 className="mt-5 text-[clamp(46px,8vw,94px)] tracking-[0.004em]">
          We build it.
          <br />
          We{" "}
          <span className="text-transparent [-webkit-text-stroke:1.5px_var(--color-blood)]">finish</span> it.
        </h1>
        <p className="mt-6 max-w-[34rem] text-[clamp(17px,2vw,20px)] text-ash">
          ROOD Manufacturing makes and finishes AR-15 platforms in Lubbock, Texas. Shop our uppers, bolt
          carriers, and parts, or send in your own iron for a custom finish, a limited drop, or a complete
          flagship build.
        </p>
        <div className="mt-9 flex flex-wrap gap-3.5">
          <a
            href="#start"
            className="inline-flex items-center gap-2.5 rounded-[2px] bg-blood px-7 py-[15px] font-display text-sm font-semibold uppercase tracking-[0.12em] text-white transition-all hover:-translate-y-0.5 hover:bg-blood-bright"
          >
            Start a custom finish ›
          </a>
          <a
            href="#shop"
            className="inline-flex items-center gap-2.5 rounded-[2px] border border-line px-7 py-[15px] font-display text-sm font-semibold uppercase tracking-[0.12em] text-bone transition-colors hover:border-blood"
          >
            Shop parts & uppers
          </a>
        </div>

        <div className="mt-14 flex flex-wrap gap-x-10 gap-y-6">
          {[
            ["Two sides", "Parts shop + finish house"],
            ["Monthly", "Limited drops"],
            ["Built to order", "Never metered"],
          ].map(([num, lbl]) => (
            <div key={lbl}>
              <div className="font-display text-[30px] font-bold">{num}</div>
              <div className="mt-0.5 text-xs uppercase tracking-[0.14em] text-ash-dim">{lbl}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
