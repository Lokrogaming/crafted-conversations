import { SITE } from "../data/site.js";
import Reveal from "./Reveal.jsx";

// Abstrakte Block-/Terrain-Komposition – rein CSS, keine externen Assets.
function TerrainArt() {
  const rows = [
    // [grass, dirt, stone] Breiten als Blöcke
    ["g", "g", "g", "g", "g", "g", "g", "g"],
    ["d", "d", "g", "d", "d", "d", "g", "d"],
    ["d", "s", "d", "d", "s", "d", "d", "d"],
    ["s", "s", "d", "s", "s", "s", "d", "s"],
  ];
  const color = { g: "#5ed951", d: "#3a2f28", s: "#2b2f2b" };
  const dark = { g: "#3fae3a", d: "#2c241e", s: "#1f2220" };

  return (
    <div className="relative select-none" aria-hidden="true">
      <div className="cc-glass rounded-3xl p-5 md:p-7 relative overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_70%_20%,rgba(94,217,81,0.25),transparent_60%)]" />
        {/* mini player mock */}
        <div className="flex items-center gap-3 mb-5">
          <span className="w-2.5 h-2.5 rounded-[3px] bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-[3px] bg-[#febc2e]" />
          <span className="w-2.5 h-2.5 rounded-[3px] bg-[#28c840]" />
          <span className="ml-2 font-mono text-[11px] text-[#6b756a] tracking-widest">CC_PLAYER — EP 01.WAV</span>
          <span className="ml-auto flex gap-1">
            <span className="w-1.5 h-1.5 bg-[#5ed951] rounded-[1px] animate-blink" />
            <span className="font-mono text-[11px] text-[#5ed951]">REC</span>
          </span>
        </div>

        {/* waveform */}
        <div className="flex items-end gap-[5px] h-20 mb-6" aria-hidden="true">
          {[34, 58, 44, 72, 90, 64, 40, 78, 96, 52, 68, 84, 48, 62, 88, 42, 56, 74, 92, 50, 66, 80, 38, 60].map((h, i) => (
            <span
              key={i}
              className="flex-1 rounded-full"
              style={{
                height: `${h}%`,
                background: i % 5 === 0 ? "#c6ff4d" : i % 3 === 0 ? "#5ed951" : "rgba(255,255,255,0.18)",
                boxShadow: i % 5 === 0 ? "0 0 12px rgba(198,255,77,0.5)" : undefined,
              }}
            />
          ))}
        </div>

        {/* terrain */}
        <div className="rounded-2xl overflow-hidden border border-white/10">
          {rows.map((row, r) => (
            <div key={r} className="grid grid-cols-8">
              {row.map((b, c) => (
                <div
                  key={c}
                  className="aspect-square relative"
                  style={{ background: (r + c) % 2 === 0 ? color[b] : dark[b] }}
                >
                  {b === "g" && <div className="absolute top-[18%] left-[18%] w-[22%] h-[22%] bg-white/40 rounded-[1px]" />}
                  {(r === 1 && c === 3) || (r === 2 && c === 5) ? (
                    <div className="absolute inset-[28%] bg-[#0a0c0a]/70 rounded-[2px] grid place-items-center">
                      <div className="w-1/2 h-1/2 bg-[#c6ff4d] rounded-[1px]" />
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between font-mono text-[11px] text-[#6b756a]">
          <span>48KHZ / STEREO</span>
          <span className="text-[#5ed951]">● ON AIR</span>
        </div>
      </div>

      {/* floating chips */}
      <div className="absolute -left-4 top-8 cc-glass rounded-2xl px-4 py-3 animate-float-med hidden sm:block">
        <p className="font-mono text-[11px] text-[#6b756a]">EPISODE</p>
        <p className="font-display font-bold text-white">#01 — Pilot</p>
      </div>
      <div className="absolute -right-3 bottom-10 cc-glass rounded-2xl px-4 py-3 animate-float-slow hidden sm:block">
        <p className="font-mono text-[11px] text-[#6b756a]">COMMUNITY</p>
        <p className="font-display font-bold text-[#5ed951]">+2.4k Listener</p>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative pt-[120px] md:pt-[150px] pb-10 md:pb-16 scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 md:px-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <div>
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-[#5ed951]/30 bg-[#5ed951]/10 px-4 py-1.5 font-mono text-[12px] tracking-[0.18em] text-[#5ed951] uppercase">
              <span className="w-2 h-2 rounded-[2px] bg-[#5ed951] animate-blink" aria-hidden="true" />
              A Minecraft Podcast
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 font-display font-bold leading-[0.95] tracking-tight text-[clamp(2.8rem,7vw,5.2rem)] text-white">
              CRAFTED
              <br />
              <span className="text-[#5ed951] drop-shadow-[0_0_28px_rgba(94,217,81,0.35)]">
                CONVERSATIONS
              </span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 text-[19px] md:text-[21px] leading-relaxed text-[#dfe5dd] font-medium max-w-xl">
              {SITE.tagline}
            </p>
            <p className="mt-4 text-[15px] md:text-[16px] leading-relaxed text-[#a7b0a6] max-w-xl">
              „{SITE.subline}“
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={SITE.links.podcast}
                className="cc-btn-primary inline-flex items-center gap-2 rounded-2xl px-6 py-3.5 font-semibold text-[15px]"
              >
                <span aria-hidden="true">🎧</span> Podcast anhören
              </a>
              <a
                href={SITE.links.youtube}
                target="_blank"
                rel="noreferrer"
                className="cc-btn-ghost inline-flex items-center gap-2 rounded-2xl px-6 py-3.5 font-semibold text-[15px] text-white"
              >
                <span aria-hidden="true">▶</span> YouTube
              </a>
              <a
                href={SITE.links.discord}
                target="_blank"
                rel="noreferrer"
                className="cc-btn-ghost inline-flex items-center gap-2 rounded-2xl px-6 py-3.5 font-semibold text-[15px] text-white"
              >
                <span aria-hidden="true">💬</span> Discord
              </a>
            </div>
            <p className="mt-5 font-mono text-[12px] text-[#6b756a]">
              <span className="text-[#5ed951]">■</span> Neue Folgen alle 2 Wochen
              <span className="mx-2">·</span> Spotify · YouTube · RSS
            </p>
          </Reveal>
        </div>
        <Reveal delay={200} className="relative">
          <TerrainArt />
        </Reveal>
      </div>
    </section>
  );
}
