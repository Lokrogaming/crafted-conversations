import { TOPICS } from "../data/site.js";
import Reveal from "./Reveal.jsx";

export default function Topics() {
  return (
    <section id="topics" className="py-14 md:py-20 border-t border-white/8">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="font-mono text-[12px] tracking-[0.25em] text-[#5ed951] uppercase">Themen</p>
          <h2 className="mt-2 font-display font-bold text-white text-[clamp(1.8rem,4vw,2.6rem)] tracking-tight">
            Worüber wir reden
          </h2>
        </Reveal>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {TOPICS.map((t, i) => (
            <Reveal key={t.label} delay={Math.min(i * 60, 300)}>
              <div className="cc-card group p-5 text-center cursor-default">
                <span className="text-[28px] block group-hover:scale-125 group-hover:-rotate-6 transition-transform duration-300" aria-hidden="true">
                  {t.icon}
                </span>
                <p className="mt-3 font-display font-bold text-white text-[15px]">{t.label}</p>
                <p className="mt-1 text-[12px] text-[#6b756a]">{t.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
