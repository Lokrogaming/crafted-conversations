import { useState } from "react";
import { EPISODES } from "../data/site.js";
import Reveal from "./Reveal.jsx";

function EpisodeCard({ ep, index, active, onPlay }) {
  return (
    <article
      id={ep.id}
      className={`cc-card p-6 flex flex-col gap-4 scroll-mt-28 ${active ? "!border-[#c6ff4d]/50 shadow-[0_0_50px_-16px_rgba(198,255,77,0.4)]" : ""}`}
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-[12px] tracking-[0.2em] text-[#5ed951] border border-[#5ed951]/30 bg-[#5ed951]/10 rounded-lg px-2.5 py-1">
          EP #{ep.number}
        </span>
        <span className="font-mono text-[12px] text-[#6b756a]">
          {ep.dateLabel} · {ep.duration}
        </span>
      </div>
      <h3 className="font-display font-bold text-white text-[19px] leading-snug">„{ep.title}“</h3>
      <p className="text-[14px] leading-relaxed text-[#a7b0a6] flex-1">{ep.description}</p>
      <div className="flex items-center gap-2.5 pt-1">
        <button
          onClick={() => onPlay(ep.id)}
          className="cc-btn-primary inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-[13px] font-semibold"
          aria-label={`Episode ${ep.number} abspielen`}
        >
          <span aria-hidden="true">▶</span> Play
        </button>
        <a
          href={ep.youtube}
          target="_blank"
          rel="noreferrer"
          className="cc-btn-ghost rounded-xl px-4 py-2.5 text-[13px] font-semibold text-white"
          aria-label={`Episode ${ep.number} auf YouTube`}
        >
          YouTube
        </a>
        <a
          href={ep.spotify}
          target="_blank"
          rel="noreferrer"
          className="cc-btn-ghost rounded-xl px-4 py-2.5 text-[13px] font-semibold text-white"
          aria-label={`Episode ${ep.number} auf Spotify`}
        >
          Spotify
        </a>
      </div>
    </article>
  );
}

export default function Episodes({ highlightId }) {
  const [active, setActive] = useState(highlightId);

  const handlePlay = (id) => {
    setActive(id);
    document.getElementById("listen")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="episodes" className="scroll-mt-20 py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div>
              <p className="font-mono text-[12px] tracking-[0.25em] text-[#5ed951] uppercase">Archiv</p>
              <h2 className="mt-2 font-display font-bold text-white text-[clamp(1.8rem,4vw,2.6rem)] tracking-tight">
                Latest Episodes
              </h2>
              <p className="mt-2 text-[#a7b0a6] max-w-lg text-[15px]">
                Alle Folgen kommen aus einer zentralen Datenstruktur – neue Episoden einfach in <span className="font-mono text-[13px] text-[#dfe5dd]">site.js</span> ergänzen.
              </p>
            </div>
            <span className="font-mono text-[12px] text-[#6b756a] border border-white/10 rounded-full px-4 py-2">
              {EPISODES.length} Episoden · alle 2 Wochen neu
            </span>
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5">
          {EPISODES.map((ep, i) => (
            <Reveal key={ep.id} delay={Math.min(i * 80, 240)}>
              <EpisodeCard ep={ep} index={i} active={active === ep.id || highlightId === ep.id} onPlay={handlePlay} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
