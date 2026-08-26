import { Heart } from "lucide-react";

export function FloatingHearts() {
  const hearts = [
    { left: "6%", delay: "0s", size: "18px", dur: "9s" },
    { left: "18%", delay: "2s", size: "12px", dur: "11s" },
    { left: "32%", delay: "4.5s", size: "22px", dur: "10s" },
    { left: "58%", delay: "1s", size: "14px", dur: "12s" },
    { left: "74%", delay: "3.2s", size: "20px", dur: "9.5s" },
    { left: "88%", delay: "5.5s", size: "12px", dur: "13s" },
  ];

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {hearts.map((h, i) => (
        <span
          key={i}
          className="absolute -bottom-[10%] animate-float opacity-0 [animation-delay:var(--delay)] [animation-duration:var(--dur)] [left:var(--left)]"
          style={{
            "--left": h.left,
            "--delay": h.delay,
            "--dur": h.dur,
          }}
        >
          <Heart size={parseInt(h.size)} className="fill-[#C81E5C] stroke-0" />
        </span>
      ))}
    </div>
  );
}