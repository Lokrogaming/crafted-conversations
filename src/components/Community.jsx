import { SITE } from "../data/site.js";
import Reveal from "./Reveal.jsx";

export default function Community() {
  return (
    <section id="community" className="scroll-mt-20 py-14 md:py-20 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0d120d] p-8 md:p-14 text-center">
            <div
              className="absolute inset-0 opacity-60"
              style={{
                background:
                  "radial-gradient(ellipse 60% 80% at 50% 110%, rgba(94,217,81,0.16), transparent 70%)",
              }}
              aria-hidden="true"
            />
            <div className="relative">
              <p className="font-mono text-[12px] tracking-[0.25em] text-[#5ed951] uppercase">Community</p>
              <h2 className="mt-3 font-display font-bold text-white text-[clamp(1.9rem,4.5vw,3rem)] tracking-tight">
                Sei von Anfang an dabei
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-[15px] md:text-[16px] leading-relaxed text-[#a7b0a6]">
                Der Podcast startet bald. Komm jetzt schon auf den Discord,
                tausch dich aus und verpass keine Neuigkeiten zum Launch.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a
                  href={SITE.links.discord}
                  target="_blank"
                  rel="noreferrer"
                  className="cc-btn-primary inline-flex items-center rounded-2xl px-7 py-3.5 font-semibold text-[15px]"
                >
                  Join Discord
                </a>
                <a
                  href={SITE.links.spotify}
                  target="_blank"
                  rel="noreferrer"
                  className="cc-btn-ghost inline-flex items-center rounded-2xl px-7 py-3.5 font-semibold text-[15px] text-white"
                >
                  Spotify
                </a>
                <a
                  href={SITE.links.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="cc-btn-ghost inline-flex items-center rounded-2xl px-7 py-3.5 font-semibold text-[15px] text-white"
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
