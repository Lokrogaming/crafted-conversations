import { SITE } from "../data/site.js";
import Reveal from "./Reveal.jsx";

const STEPS = [
  {
    n: "01",
    title: "Konzept steht",
    text: "Format, Themen und Rhythmus sind geplant – alle zwei Wochen eine neue Folge.",
  },
  {
    n: "02",
    title: "Erste Aufnahme läuft",
    text: "Wir nehmen gerade die ersten Gespräche auf und bauen alles in Ruhe auf.",
  },
  {
    n: "03",
    title: "Launch folgt",
    text: "Zum Start findest du uns hier und auf Spotify.",
  },
];

const PLATFORMS = ["Spotify"];

export default function ComingSoon() {
  return (
    <section id="status" className="scroll-mt-24 py-8 md:py-12">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0e130e] p-8 md:p-12">
            <div
              className="absolute inset-0 opacity-70"
              style={{
                background:
                  "radial-gradient(ellipse 55% 75% at 50% 115%, rgba(94,217,81,0.18), transparent 70%)",
              }}
              aria-hidden="true"
            />
            <div className="relative">
              <p className="font-mono text-[12px] tracking-[0.25em] text-[#5ed951] uppercase">
                Status
              </p>
              <h2 className="mt-2 font-display font-bold text-white text-[clamp(1.8rem,4vw,2.6rem)] tracking-tight">
                Der Podcast startet bald
              </h2>
              <p className="mt-3 max-w-2xl text-[15px] md:text-[16px] leading-relaxed text-[#a7b0a6]">
                Es gibt aktuell noch keine Folgen – deshalb ist der Podcast auf
                Spotify noch nicht zu finden. Hör dir bis dahin schon mal den Trailer
                an – sobald die erste Folge erscheint, findest du hier automatisch
                die komplette Folgenliste.
              </p>

              <div className="mt-8 grid sm:grid-cols-3 gap-4">
                {STEPS.map((s) => (
                  <div key={s.n} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-left">
                    <span className="font-mono text-[12px] font-bold text-[#08130a] bg-[#5ed951] rounded-lg px-2.5 py-1">
                      {s.n}
                    </span>
                    <h3 className="mt-3 font-display font-bold text-white text-[16px]">{s.title}</h3>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-[#a7b0a6]">{s.text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-2.5">
                {PLATFORMS.map((p) => (
                  <span
                    key={p}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[13px] font-medium text-[#a7b0a6]"
                    title={`${p} – folgt zum Launch`}
                  >
                    {p}
                    <span className="rounded-full bg-[#5ed951]/15 px-2 py-0.5 font-mono text-[10px] tracking-widest text-[#5ed951] uppercase">
                      Bald
                    </span>
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#trailer"
                  className="cc-btn-primary inline-flex items-center rounded-2xl px-6 py-3 font-semibold text-[15px]"
                >
                  Trailer anhören
                </a>
                <a
                  href={SITE.links.discord}
                  target="_blank"
                  rel="noreferrer"
                  className="cc-btn-ghost inline-flex items-center rounded-2xl px-6 py-3 font-semibold text-[15px] text-white"
                >
                  Launch nicht verpassen – Discord
                </a>
                <a
                  href={SITE.links.spotify}
                  target="_blank"
                  rel="noreferrer"
                  className="cc-btn-ghost inline-flex items-center rounded-2xl px-6 py-3 font-semibold text-[15px] text-white"
                >
                  Spotify
                </a>
                <a
                  href={SITE.links.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="cc-btn-ghost inline-flex items-center rounded-2xl px-6 py-3 font-semibold text-[15px] text-white"
                >
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
