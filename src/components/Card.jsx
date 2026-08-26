export function Card({ children }) {
  return (
    <div className="bg-white/85 relative z-10 w-full max-w-[600px] rounded-3xl px-9 py-11 text-center shadow-[0_20px_50px_rgba(220,100,140,0.08)] ring-1 ring-white/60">
      {children}
    </div>
  );
}

export function CardEyebrow({ children }) {
  return (
    <span className="mb-3.5 inline-block rounded-full bg-pink-200 px-3.5 py-0.5 text-[11px] font-medium uppercase">
      {children}
    </span>
  )
}