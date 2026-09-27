// Dezente schwebende Pixel + Grid. Performant: reine CSS-Animation, wenige Nodes.
// Respektiert prefers-reduced-motion via CSS.
const PIXELS = [
  { left: "8%", top: "22%", size: 10, color: "#5ed951", delay: "0s", dur: "7s", o: 0.5 },
  { left: "16%", top: "68%", size: 8, color: "#c6ff4d", delay: "1.2s", dur: "6s", o: 0.35 },
  { left: "84%", top: "28%", size: 12, color: "#5ed951", delay: "0.6s", dur: "8s", o: 0.4 },
  { left: "90%", top: "62%", size: 8, color: "#7de8f0", delay: "2s", dur: "7s", o: 0.3 },
  { left: "72%", top: "78%", size: 10, color: "#2f9e44", delay: "0.3s", dur: "6.5s", o: 0.5 },
  { left: "28%", top: "12%", size: 8, color: "#7de8f0", delay: "1.8s", dur: "7.5s", o: 0.25 },
  { left: "48%", top: "8%", size: 6, color: "#5ed951", delay: "2.4s", dur: "6s", o: 0.4 },
  { left: "60%", top: "88%", size: 8, color: "#c6ff4d", delay: "0.9s", dur: "8s", o: 0.3 },
];

export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[#0a0c0a]" />
      <div className="cc-bg-grid absolute inset-0" />
      {/* weiche Glows, sehr dezent */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[720px] h-[420px] rounded-full blur-[140px] opacity-25 bg-[#2f9e44]" />
      <div className="absolute top-[55%] -left-40 w-[480px] h-[480px] rounded-full blur-[160px] opacity-15 bg-[#1d5c2e]" />
      <div className="absolute bottom-0 right-0 w-[520px] h-[320px] rounded-full blur-[150px] opacity-10 bg-[#7de8f0]" />
      {PIXELS.map((p, i) => (
        <span
          key={i}
          className="px-block absolute animate-float-slow"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            background: p.color,
            opacity: p.o,
            animationDelay: p.delay,
            animationDuration: p.dur,
            boxShadow: `0 0 18px ${p.color}55`,
          }}
        />
      ))}
    </div>
  );
}
