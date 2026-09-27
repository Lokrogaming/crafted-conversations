import { useEffect, useRef, useState } from "react";
import { EPISODES, formatTime } from "../data/site.js";
import Reveal from "./Reveal.jsx";

// Auffälliger Featured-Player. Dummy-Wiedergabe per Timer.
// Sobald echte Audio-Datei vorhanden: episode.audioSrc setzen –
// der Player nutzt dann automatisch ein <audio>-Element.
export default function Player({ onSelectEpisode }) {
  const episode = EPISODES.find((e) => e.featured) ?? EPISODES[0];
  const [playing, setPlaying] = useState(false);
  const [pos, setPos] = useState(0); // Sekunden
  const [rate] = useState(20); // simulierte Sekunden pro echter Sekunde (Demo)
  const audioRef = useRef(null);
  const timerRef = useRef(null);

  const total = episode.durationSec;

  // Falls echte Audioquelle existiert, diese verwenden
  useEffect(() => {
    if (!episode.audioSrc || !audioRef.current) return;
    const audio = audioRef.current;
    const onTime = () => setPos(audio.currentTime);
    const onEnd = () => setPlaying(false);
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("ended", onEnd);
    return () => {
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("ended", onEnd);
    };
  }, [episode.audioSrc]);

  // Dummy-Timer, wenn keine echte Quelle
  useEffect(() => {
    if (episode.audioSrc) return;
    if (!playing) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(() => {
      setPos((p) => {
        if (p + rate / 10 >= total) {
          setPlaying(false);
          return total;
        }
        return p + rate / 10;
      });
    }, 100);
    return () => clearInterval(timerRef.current);
  }, [playing, episode.audioSrc, total, rate]);

  const toggle = async () => {
    if (episode.audioSrc && audioRef.current) {
      if (playing) audioRef.current.pause();
      else await audioRef.current.play().catch(() => setPlaying(true));
      setPlaying(!playing);
    } else {
      if (pos >= total) setPos(0);
      setPlaying((v) => !v);
    }
  };

  const seek = (v) => {
    const next = Number(v);
    setPos(next);
    if (episode.audioSrc && audioRef.current) audioRef.current.currentTime = next;
  };

  const pct = Math.min(100, (pos / total) * 100);

  return (
    <section id="listen" className="scroll-mt-24 py-6 md:py-10">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <div className="cc-card relative overflow-hidden p-6 md:p-8 !border-[#5ed951]/25 shadow-[0_0_60px_-20px_rgba(94,217,81,0.4)]">
            <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#2f9e44] via-[#5ed951] to-[#c6ff4d]" aria-hidden="true" />
            <div className="grid md:grid-cols-[auto_1fr_auto] gap-6 items-center">
              {/* Cover */}
              <div className="flex items-center gap-5">
                <button
                  onClick={toggle}
                  aria-label={playing ? "Pause" : `Episode ${episode.number} abspielen`}
                  className="grid place-items-center w-[76px] h-[76px] rounded-2xl bg-[#5ed951] text-[#08130a] text-[26px] shrink-0 hover:scale-105 hover:shadow-[0_0_36px_rgba(94,217,81,0.6)] transition-all"
                >
                  {playing ? (
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="5" y="4" width="5" height="16" rx="1"/><rect x="14" y="4" width="5" height="16" rx="1"/></svg>
                  ) : (
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 4.5v15l13-7.5z"/></svg>
                  )}
                </button>
                <div className="md:hidden">
                  <p className="font-mono text-[11px] tracking-[0.2em] text-[#5ed951] uppercase">Latest Episode</p>
                  <p className="font-display font-bold text-white text-[18px] leading-tight">#{episode.number} {episode.title}</p>
                </div>
              </div>

              {/* Meta + Progress */}
              <div className="min-w-0">
                <p className="hidden md:block font-mono text-[11px] tracking-[0.2em] text-[#5ed951] uppercase">
                  Latest Episode · #{episode.number} · {episode.dateLabel} · {episode.duration}
                </p>
                <h2 className="hidden md:block font-display font-bold text-white text-[22px] mt-1 truncate">
                  „{episode.title}“
                </h2>
                <p className="hidden md:block text-[14px] text-[#a7b0a6] mt-1 line-clamp-1">{episode.description}</p>

                <div className="mt-4 flex items-center gap-3">
                  <span className="font-mono text-[12px] text-[#dfe5dd] tabular-nums">{formatTime(pos)}</span>
                  <input
                    type="range"
                    className="cc-range flex-1"
                    min={0}
                    max={total}
                    value={Math.floor(pos)}
                    onChange={(e) => seek(e.target.value)}
                    style={{ "--fill": `${pct}%` }}
                    aria-label="Wiedergabeposition"
                  />
                  <span className="font-mono text-[12px] text-[#6b756a] tabular-nums">{episode.duration}</span>
                </div>
                {!episode.audioSrc && (
                  <p className="mt-2 font-mono text-[11px] text-[#6b756a]">
                    Demo-Player (Platzhalter) – echte Audio-Datei in <span className="text-[#a7b0a6]">src/data/site.js → audioSrc</span> eintragen.
                  </p>
                )}
              </div>

              {/* Actions */}
              <div className="flex md:flex-col gap-2.5">
                <button
                  onClick={() => onSelectEpisode?.(episode.id)}
                  className="cc-btn-ghost flex-1 md:w-44 rounded-xl px-4 py-2.5 text-[13px] font-semibold text-white"
                >
                  Details
                </button>
                <a
                  href={episode.spotify}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 md:w-44 text-center rounded-xl px-4 py-2.5 text-[13px] font-semibold bg-white/8 border border-white/12 text-white hover:border-[#5ed951]/40 hover:bg-[#5ed951]/10 transition-all"
                >
                  Spotify ↗
                </a>
              </div>
            </div>
            {episode.audioSrc && <audio ref={audioRef} src={episode.audioSrc} preload="metadata" />}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
