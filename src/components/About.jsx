import Reveal from "./Reveal.jsx";

const POINTS = [
  { k: "01", t: "Kein News-Ticker", d: "Keine Patchnotes zum Vorlesen. Wir reden über das, was zwischen den Updates passiert." },
  { k: "02", t: "Projekte & Server", d: "Großbuilds, SMPs, Events – die Orte, an denen Minecraft wirklich lebt." },
  { k: "03", t: "Menschen & Stories", d: "Erinnerungen, Community-Legenden und Chaos-Momente aus über einem Jahrzehnt." },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 py-14 md:py-20 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-5 md:px-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
        <Reveal>
          <p className="font-mono text-[12px] tracking-[0.25em] text-[#5ed951] uppercase">Über uns</p>
          <h2 className="mt-2 font-display font-bold text-white text-[clamp(1.8rem,4vw,2.6rem)] tracking-tight leading-tight">
            Was ist The Block?
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-[#dfe5dd]">
            The Block ist ein Podcast über Minecraft – aber nicht nur über das Spiel selbst.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-[#a7b0a6]">
            Wir sprechen über Projekte, Communitys, Server, Updates, Erinnerungen, Trends und die
            Geschichten, die Minecraft seit Jahren begleiten. Ruhig, ehrlich und mit viel Liebe zum Detail –
            wie ein guter Abend auf dem Lieblings-Server.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <span className="flex gap-1.5" aria-hidden="true">
              <span className="w-3 h-3 rounded-[3px] bg-[#5ed951]" />
              <span className="w-3 h-3 rounded-[3px] bg-[#5ed951]/60" />
              <span className="w-3 h-3 rounded-[3px] bg-[#5ed951]/30" />
            </span>
            <span className="font-mono text-[12px] text-[#6b756a]">DEUTSCH · ALLE 2 WOCHEN NACH LAUNCH</span>
          </div>
        </Reveal>
        <div className="grid gap-4">
          {POINTS.map((p, i) => (
            <Reveal key={p.k} delay={i * 90}>
              <div className="cc-card p-6 flex gap-5 items-start">
                <span className="font-mono text-[13px] text-[#08130a] font-bold bg-[#5ed951] rounded-lg w-9 h-9 grid place-items-center shrink-0">
                  {p.k}
                </span>
                <div>
                  <h3 className="font-display font-bold text-white text-[17px]">{p.t}</h3>
                  <p className="mt-1 text-[14px] text-[#a7b0a6] leading-relaxed">{p.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
