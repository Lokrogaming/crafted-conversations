import { useState } from "react";
import { SITE } from "../data/site.js";
import Reveal from "./Reveal.jsx";

function LogoImage({ className = "" }) {
  const [imgOk, setImgOk] = useState(true);
  if (!imgOk) {
    return (
      <div
        className={`grid place-items-center bg-[#111311] border border-white/10 ${className}`}
        aria-hidden="true"
      >
        <svg viewBox="0 0 64 64" className="w-1/2 h-1/2">
          <rect x="22" y="10" width="14" height="14" fill="#5ed951" />
          <rect x="36" y="16" width="12" height="12" fill="#5ed951" opacity="0.75" />
          <rect x="22" y="28" width="14" height="12" fill="#232a23" />
          <rect x="40" y="30" width="12" height="10" fill="#232a23" />
        </svg>
      </div>
    );
  }
  return (
    <img
      src="/logo.png"
      alt="The Block – Der Minecraft-Podcast"
      className={`object-cover bg-black ${className}`}
      onError={() => setImgOk(false)}
    />
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative pt-[130px] md:pt-[160px] pb-12 md:pb-16 scroll-mt-20">
      <div className="mx-auto max-w-3xl px-5 md:px-8 text-center">
        <Reveal>
          <LogoImage className="mx-auto w-36 h-36 md:w-44 md:h-44 rounded-[28px] border border-white/10 shadow-[0_24px_80px_-24px_rgba(94,217,81,0.45)]" />
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#5ed951]/30 bg-[#5ed951]/10 px-4 py-1.5 font-mono text-[12px] tracking-[0.18em] text-[#5ed951] uppercase">
            <span className="w-2 h-2 rounded-full bg-[#5ed951] animate-blink" aria-hidden="true" />
            Bald verfügbar
          </p>
        </Reveal>
        <Reveal delay={140}>
          <h1 className="mt-5 font-display font-bold leading-[0.95] tracking-tight text-[clamp(2.6rem,7vw,4.6rem)] text-white">
            THE
            <br />
            <span className="text-[#5ed951]">BLOCK</span>
          </h1>
          <p className="mt-3 font-mono text-[12px] tracking-[0.3em] text-[#6b756a] uppercase">
            Der Minecraft-Podcast
          </p>
        </Reveal>
        <Reveal delay={200}>
          <p className="mx-auto mt-6 text-[18px] md:text-[20px] leading-relaxed text-[#dfe5dd] font-medium max-w-xl">
            {SITE.tagline}
          </p>
          <p className="mx-auto mt-3 text-[15px] md:text-[16px] leading-relaxed text-[#a7b0a6] max-w-xl">
            „{SITE.subline}“
          </p>
        </Reveal>
        <Reveal delay={260}>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={SITE.links.discord}
              target="_blank"
              rel="noreferrer"
              className="cc-btn-primary inline-flex items-center rounded-2xl px-6 py-3.5 font-semibold text-[15px]"
            >
              Join Discord
            </a>
            <a
              href={SITE.links.spotify}
              target="_blank"
              rel="noreferrer"
              className="cc-btn-ghost inline-flex items-center rounded-2xl px-6 py-3.5 font-semibold text-[15px] text-white"
            >
              Spotify
            </a>
            <a
              href={SITE.links.youtube}
              target="_blank"
              rel="noreferrer"
              className="cc-btn-ghost inline-flex items-center rounded-2xl px-6 py-3.5 font-semibold text-[15px] text-white"
            >
              YouTube
            </a>
          </div>
          <p className="mx-auto mt-6 max-w-xl rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3.5 text-[13px] md:text-[14px] leading-relaxed text-[#a7b0a6]">
            Aktuell gibt es noch keine Folgen – du findest uns daher noch nicht auf
            Spotify. Hör dir bis dahin schon mal{" "}
            <a href="#trailer" className="text-[#5ed951] font-semibold hover:underline">
              den Trailer an →
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
