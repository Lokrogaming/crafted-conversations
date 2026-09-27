import { SITE } from "../data/site.js";
import Reveal from "./Reveal.jsx";

export default function Community() {
  return (
    <section id="community" className="py-14 md:py-20 border-t border-white/8">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-[#5ed951]/25 bg-[#0e140e] p-8 md:p-14 text-center">
            <div
              className="absolute inset-0 opacity-60"
              style={{
                background:
                  "radial-gradient(ellipse 60% 80% at 50% 110%, rgba(94,217,81,0.22), transparent 70%)",
              }}
              aria-hidden="true"
            />
            <div className="relative">
              <p className="font-mono text-[12px] tracking-[0.25em] text-[#5ed951] uppercase">Community</p>
              <h2 className="mt-3 font-display font-bold text-white text-[clamp(1.9rem,4.5vw,3rem)] tracking-tight">
                Join the Conversation
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-[15px] md:text-[16px] leading-relaxed text-[#a7b0a6]">
                Der Podcast endet nicht nach der Episode. Diskutiere mit uns, teile deine Meinung
                und werde Teil der Community.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a
                  href={SITE.links.discord}
                  target="_blank"
                  rel="noreferrer"
                  className="cc-btn-primary inline-flex items-center gap-2 rounded-2xl px-7 py-3.5 font-semibold text-[15px]"
                >
                  <span aria-hidden="true">💬</span> Join Discord
                </a>
                <a
                  href={SITE.links.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="cc-btn-ghost inline-flex items-center gap-2 rounded-2xl px-7 py-3.5 font-semibold text-[15px] text-white"
                >
                  <span aria-hidden="true">＋</span> Follow us
                </a>
              </div>
              <p className="mt-6 font-mono text-[12px] text-[#6b756a]">
                Platzhalter-Links – echte Invite-URLs in <span className="text-[#a7b0a6]">site.js</span> eintragen
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
