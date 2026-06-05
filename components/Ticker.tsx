const ITEMS = [
  "AR-15 uppers & parts",
  "Customer-owned finish service",
  "Numbered limited drops",
  "Battleworn & two-tone",
  "Signature ROOD colorways",
];

export function Ticker() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="overflow-hidden border-y border-line bg-panel">
      <div className="flex w-max animate-[ticker_30s_linear_infinite] whitespace-nowrap py-3.5">
        {row.map((item, i) => (
          <span
            key={i}
            className="mx-7 font-display text-[13px] uppercase tracking-[0.22em] text-ash"
          >
            {item}
            <span className="ml-7 text-blood">•</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </div>
  );
}
