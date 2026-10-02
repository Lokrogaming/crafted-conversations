import { useState } from "react";

// Nutzt das offizielle Logo aus `public/logo.png` (Vollversion)
// bzw. `docs/logo.png` (Minimal-Version).
// Falls die Datei noch nicht abgelegt wurde, greift automatisch
// ein schlichter CSS-Fallback im gleichen Stil.
function FallbackMark() {
  return (
    <span
      className="relative grid place-items-center w-9 h-9 rounded-[10px] overflow-hidden shrink-0 border border-white/10 bg-[#111311]"
      aria-hidden="true"
    >
      <svg viewBox="0 0 36 36" className="w-full h-full">
        <rect x="0" y="0" width="36" height="36" fill="#141714" />
        <rect x="0" y="0" width="36" height="11" fill="#5ed951" />
        <rect x="0" y="9" width="36" height="3" fill="#3fae3a" />
        <rect x="13" y="15" width="7" height="7" fill="#5ed951" />
        <rect x="20" y="17" width="6" height="6" fill="#5ed951" opacity="0.7" />
        <rect x="13" y="24" width="7" height="6" fill="#232a23" />
        <rect x="23" y="24" width="6" height="6" fill="#232a23" />
      </svg>
    </span>
  );
}

export default function Logo({ compact = false }) {
  const [imgOk, setImgOk] = useState(true);

  return (
    <a href="#home" className="flex items-center gap-3 group" aria-label="The Block – Home">
      {imgOk ? (
        <img
          src="/logo.png"
          alt="The Block – Der Minecraft-Podcast"
          width={36}
          height={36}
          className="w-9 h-9 rounded-[10px] object-cover border border-white/10 bg-black shrink-0 group-hover:border-[#5ed951]/50 transition-colors"
          onError={() => setImgOk(false)}
        />
      ) : (
        <FallbackMark />
      )}
      {!compact && (
        <span className="leading-none">
          <span className="block font-display tracking-tight text-[15px] font-bold text-white">
            THE BLOCK
          </span>
          <span className="block font-display text-[11px] tracking-[0.32em] text-[#5ed951] font-medium">
            PODCAST
          </span>
        </span>
      )}
    </a>
  );
}
