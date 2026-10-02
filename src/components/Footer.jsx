import { FOOTER_LINKS, SITE } from "../data/site.js";
import Logo from "./Logo.jsx";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070907]">
      <div className="mx-auto max-w-6xl px-5 md:px-8 py-12 grid gap-10 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 text-[14px] text-[#6b756a]">Der Minecraft-Podcast</p>
          <p className="mt-3 text-[13px] leading-relaxed text-[#6b756a] max-w-xs">
            Gespräche, Geschichten und alles dazwischen – der Launch ist in Vorbereitung.
          </p>
          <div className="mt-5 flex gap-2">
            {[
              { label: "Discord", href: SITE.links.discord, short: "DC" },
              { label: "Spotify (bald)", href: "#status", short: "SP" },
              { label: "YouTube", href: SITE.links.youtube, short: "YT" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={s.label}
                title={s.label}
                className="grid place-items-center min-w-10 h-10 px-2 rounded-xl border border-white/10 bg-white/5 font-mono text-[12px] font-semibold text-[#a7b0a6] hover:border-[#5ed951]/40 hover:text-[#5ed951] transition-all"
              >
                {s.short}
              </a>
            ))}
          </div>
        </div>
        <nav aria-label="Podcast">
          <p className="font-mono text-[11px] tracking-[0.2em] text-[#6b756a] uppercase mb-4">Podcast</p>
          <ul className="space-y-2.5 text-[14px]">
            {FOOTER_LINKS.podcast.map((l) => (
              <li key={l.label}><a href={l.href} className="text-[#a7b0a6] hover:text-white transition-colors">{l.label}</a></li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Community">
          <p className="font-mono text-[11px] tracking-[0.2em] text-[#6b756a] uppercase mb-4">Community</p>
          <ul className="space-y-2.5 text-[14px]">
            {FOOTER_LINKS.community.map((l) => (
              <li key={l.label}><a href={l.href} target="_blank" rel="noreferrer" className="text-[#a7b0a6] hover:text-white transition-colors">{l.label}</a></li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Rechtliches">
          <p className="font-mono text-[11px] tracking-[0.2em] text-[#6b756a] uppercase mb-4">Legal</p>
          <ul className="space-y-2.5 text-[14px]">
            {FOOTER_LINKS.legal.map((l) => (
              <li key={l.label}><a href={l.href} className="text-[#a7b0a6] hover:text-white transition-colors">{l.label}</a></li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-white/5">
        <div className="mx-auto max-w-6xl px-5 md:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-[12px] text-[#6b756a]">
          <p>© 2026 {SITE.name}. Alle Rechte vorbehalten.</p>
          <p><span className="text-[#5ed951]">●</span> Bald verfügbar – Launch in Vorbereitung</p>
        </div>
      </div>
    </footer>
  );
}
