import { HOSTS } from "../data/site.js";
import Reveal from "./Reveal.jsx";

function Avatar({ initials, index }) {
  const bg = index === 0 ? "#1d3a22" : "#232d3a";
  const accent = index === 0 ? "#5ed951" : "#7de8f0";
  return (
    <div
      className="w-20 h-20 rounded-2xl grid place-items-center border border-white/12 font-display font-bold text-[22px] relative overflow-hidden shrink-0"
      style={{ background: bg, color: accent }}
      role="img"
      aria-label="Avatar Platzhalter"
    >
      {/* pixel texture */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `linear-gradient(${accent}22 1px, transparent 1px), linear-gradient(90deg, ${accent}22 1px, transparent 1px)`,
          backgroundSize: "10px 10px",
        }}
        aria-hidden="true"
      />
      <span className="relative">{initials}</span>
      <span className="absolute bottom-1.5 right-1.5 w-2.5 h-2.5 rounded-[3px] bg-[#28c840] border-2 border-[#0a0c0a]" aria-hidden="true" />
    </div>
  );
}

export default function Hosts() {
  return (
    <section id="hosts" className="scroll-mt-20 py-14 md:py-20 border-t border-white/8">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="font-mono text-[12px] tracking-[0.25em] text-[#5ed951] uppercase">Hosts</p>
          <h2 className="mt-2 font-display font-bold text-white text-[clamp(1.8rem,4vw,2.6rem)] tracking-tight">
            Meet the Hosts
          </h2>
          <p className="mt-2 text-[#a7b0a6] text-[15px] max-w-lg">
            Zwei Stimmen, ein Block. Platzhalter-Profile – einfach in <span className="font-mono text-[13px] text-[#dfe5dd]">site.js → HOSTS</span> austauschen.
          </p>
        </Reveal>
        <div className="mt-8 grid md:grid-cols-2 gap-5">
          {HOSTS.map((h, i) => (
            <Reveal key={h.id} delay={i * 100}>
              <article className="cc-card p-7 flex gap-5 items-start">
                <Avatar initials={h.initials} index={i} />
                <div className="min-w-0">
                  <h3 className="font-display font-bold text-white text-[20px]">{h.name}</h3>
                  <p className="font-mono text-[12px] text-[#5ed951] mt-0.5">{h.role}</p>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#a7b0a6]">{h.bio}</p>
                  <div className="mt-4 flex gap-2">
                    {h.socials.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[12px] font-semibold text-[#dfe5dd] border border-white/12 rounded-lg px-3 py-1.5 hover:border-[#5ed951]/40 hover:text-[#5ed951] transition-colors"
                      >
                        {s.label} ↗
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
