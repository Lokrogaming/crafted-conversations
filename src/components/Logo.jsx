export default function Logo({ compact = false }) {
  return (
    <a href="#home" className="flex items-center gap-3 group" aria-label="Crafted Conversations – Home">
      {/* Wordmark-Block: stilisierter Grasblock, rein CSS/SVG – kein Mojang-Asset */}
      <span className="relative grid place-items-center w-9 h-9 rounded-[10px] overflow-hidden shrink-0 border border-white/15 bg-[#141814] group-hover:border-[#5ed951]/50 transition-colors" aria-hidden="true">
        <svg viewBox="0 0 36 36" className="w-full h-full">
          <rect x="0" y="0" width="36" height="36" fill="#1c241c" />
          {/* dirt */}
          <g fill="#2a332a">
            <rect x="4" y="20" width="6" height="6" />
            <rect x="14" y="24" width="6" height="6" />
            <rect x="24" y="20" width="6" height="6" />
            <rect x="9" y="28" width="5" height="5" />
            <rect x="22" y="28" width="5" height="5" />
          </g>
          {/* grass top */}
          <rect x="0" y="0" width="36" height="12" fill="#5ed951" />
          <rect x="0" y="10" width="36" height="4" fill="#3fae3a" />
          <g fill="#7cf06e">
            <rect x="3" y="2" width="5" height="5" />
            <rect x="14" y="4" width="4" height="4" />
            <rect x="25" y="3" width="6" height="5" />
          </g>
          {/* pixel highlight = play hint */}
          <rect x="15" y="17" width="4" height="4" fill="#c6ff4d" opacity="0.9" />
          <rect x="15" y="21" width="4" height="4" fill="#c6ff4d" opacity="0.55" />
          <rect x="19" y="19" width="4" height="4" fill="#c6ff4d" opacity="0.35" />
        </svg>
      </span>
      {!compact && (
        <span className="leading-none">
          <span className="block font-display font-700 tracking-tight text-[15px] font-bold text-white">
            CRAFTED
          </span>
          <span className="block font-display text-[11px] tracking-[0.32em] text-[#5ed951] font-medium">
            CONVERSATIONS
          </span>
        </span>
      )}
    </a>
  );
}
