import { useEffect, useRef, useState } from "react";
import { formatTime } from "../data/site.js";
import Reveal from "./Reveal.jsx";

// Echter Trailer-Player – spielt `/public/trailer.mp3` ab.
export default function Trailer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [pos, setPos] = useState(0);
  const [dur, setDur] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onTime = () => setPos(audio.currentTime);
    const onMeta = () => setDur(Number.isFinite(audio.duration) ? audio.duration : 0);
    const onEnd = () => setPlaying(false);
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("loadedmetadata", onMeta);
    audio.addEventListener("ended", onEnd);
    return () => {
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("loadedmetadata", onMeta);
      audio.removeEventListener("ended", onEnd);
    };
  }, []);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      try {
        await audio.play();
        setPlaying(true);
      } catch {
        setPlaying(false);
      }
    }
  };

  const seek = (v) => {
    const audio = audioRef.current;
    const next = Number(v);
    setPos(next);
    if (audio) audio.currentTime = next;
  };

  const pct = dur > 0 ? Math.min(100, (pos / dur) * 100) : 0;

  return (
    <section id="trailer" className="scroll-mt-24 py-6 md:py-10">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] border border-[#5ed951]/25 bg-[#0e130e] p-6 md:p-8 shadow-[0_0_60px_-24px_rgba(94,217,81,0.4)]">
            <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#2f9e44] via-[#5ed951] to-[#c6ff4d]" aria-hidden="true" />
            <div className="grid md:grid-cols-[auto_1fr] gap-6 items-center">
              <div className="flex items-center gap-5">
                <button
                  onClick={toggle}
                  aria-label={playing ? "Trailer pausieren" : "Trailer abspielen"}
                  className="grid place-items-center w-[76px] h-[76px] rounded-2xl bg-[#5ed951] text-[#08130a] text-[26px] shrink-0 hover:scale-105 hover:shadow-[0_0_36px_rgba(94,217,81,0.6)] transition-all"
                >
                  {playing ? (
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="5" y="4" width="5" height="16" rx="1"/><rect x="14" y="4" width="5" height="16" rx="1"/></svg>
                  ) : (
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 4.5v15l13-7.5z"/></svg>
                  )}
                </button>
                <div>
                  <p className="font-mono text-[11px] tracking-[0.2em] text-[#5ed951] uppercase">Trailer</p>
                  <h2 className="font-display font-bold text-white text-[20px] md:text-[22px] leading-tight">
                    Schon mal reinhören
                  </h2>
                </div>
              </div>

              <div className="min-w-0">
                <p className="text-[14px] text-[#a7b0a6]">
                  Noch keine Folge da? Hier ein erster Eindruck vom Podcast.
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <span className="font-mono text-[12px] text-[#dfe5dd] tabular-nums">{formatTime(pos)}</span>
                  <input
                    type="range"
                    className="cc-range flex-1"
                    min={0}
                    max={dur || 0}
                    step={0.1}
                    value={Math.min(pos, dur || 0)}
                    onChange={(e) => seek(e.target.value)}
                    style={{ "--fill": `${pct}%` }}
                    aria-label="Wiedergabeposition Trailer"
                  />
                  <span className="font-mono text-[12px] text-[#6b756a] tabular-nums">
                    {dur > 0 ? formatTime(dur) : "--:--"}
                  </span>
                </div>
              </div>
            </div>
            <audio ref={audioRef} src="/trailer.mp3" preload="metadata" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
