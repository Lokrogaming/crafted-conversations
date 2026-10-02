// Ruhiger, cleaner Hintergrund: dezentes Grid + zwei weiche Glows.
// Kein Pixel-Gewusel – bewusst minimal, damit das Logo im Fokus steht.
export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[#0a0c0a]" />
      <div className="cc-bg-grid absolute inset-0" />
      <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[760px] h-[420px] rounded-full blur-[160px] opacity-20 bg-[#2f9e44]" />
      <div className="absolute top-[60%] -left-48 w-[480px] h-[480px] rounded-full blur-[180px] opacity-10 bg-[#1d5c2e]" />
    </div>
  );
}
