import { useEffect, useState } from "react";
import { SITE } from "../data/site.js";
import Logo from "./Logo.jsx";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open ]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0c0a]/85 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav
        className="mx-auto max-w-6xl px-5 md:px-8 h-[68px] flex items-center justify-between"
        aria-label="Hauptnavigation"
      >
        <Logo />

        <ul className="hidden md:flex items-center gap-7 text-[14px] font-medium text-[#a7b0a6]">
          {SITE.nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="hover:text-white transition-colors relative after:absolute after:-bottom-1.5 after:left-0 after:h-[2px] after:w-0 after:bg-[#5ed951] after:transition-all hover:after:w-full"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href="#status"
            className="inline-flex items-center gap-2 rounded-full border border-[#5ed951]/40 bg-[#5ed951]/10 px-5 py-2.5 text-[13px] font-semibold text-[#5ed951]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#5ed951] animate-blink" aria-hidden="true" />
            Bald verfügbar
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden grid place-items-center w-11 h-11 rounded-xl border border-white/10 bg-white/5"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
        >
          <span className="relative block w-5 h-[14px]" aria-hidden="true">
            <span
              className={`absolute left-0 top-0 h-[2px] w-full bg-white transition-transform duration-300 ${open ? "translate-y-[6px] rotate-45" : ""}`}
            />
            <span className={`absolute left-0 top-[6px] h-[2px] w-full bg-white transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
            <span
              className={`absolute left-0 bottom-0 h-[2px] w-full bg-white transition-transform duration-300 ${open ? "-translate-y-[6px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
          open ? "max-h-[440px] opacity-100" : "max-h-0 opacity-0"
        } bg-[#0a0c0a]/95 backdrop-blur-xl border-b border-white/10`}
      >
        <ul className="px-6 py-4 space-y-1 text-[16px]">
          {SITE.nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-3 border-b border-white/5 text-[#dfe5dd] hover:text-[#5ed951] hover:pl-1 transition-all"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="pt-3 pb-2">
            <a
              href="#status"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-xl border border-[#5ed951]/40 bg-[#5ed951]/10 px-5 py-3 text-[14px] font-semibold text-[#5ed951]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#5ed951]" aria-hidden="true" />
              Bald verfügbar
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
