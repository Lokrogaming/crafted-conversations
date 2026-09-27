// ─────────────────────────────────────────────
// Crafted Conversations – zentrale Konfiguration
// Alles, was sich später ändert (Links, Episoden, Hosts),
// wird NUR hier angepasst.
// ─────────────────────────────────────────────

export const SITE = {
  name: "Crafted Conversations",
  shortName: "CC",
  tagline: "Der Minecraft-Podcast für Gespräche, Geschichten und alles dazwischen.",
  subline: "Minecraft ist mehr als Blöcke. Es sind die Geschichten, Projekte, Server und Menschen dahinter.",
  language: "de",
  // Platzhalter-Links – hier echte URLs eintragen, sobald vorhanden
  links: {
    podcast: "#listen",
    youtube: "https://youtube.com/@craftedconversations",
    discord: "https://discord.gg/craftedconversations",
    spotify: "https://open.spotify.com/show/craftedconversations",
    rss: "#rss",
    impressum: "#impressum",
    datenschutz: "#datenschutz",
  },
  nav: [
    { label: "Home", href: "#home" },
    { label: "Episodes", href: "#episodes" },
    { label: "About", href: "#about" },
    { label: "Hosts", href: "#hosts" },
  ],
};

export const EPISODES = [
  {
    id: "ep-01",
    number: "01",
    title: "Willkommen bei Crafted Conversations",
    date: "2026-09-20",
    dateLabel: "20. Sep 2026",
    duration: "42:18",
    durationSec: 2538,
    description:
      "Wer sind wir, warum dieser Podcast, und was hat uns nach all den Jahren immer noch in Minecraft verliebt? Die Pilotfolge – ehrlich, chaotisch, herzlich.",
    // audioSrc: sobald echte Datei/Feed vorhanden ist, hier eintragen, z.B. "/audio/ep01.mp3"
    audioSrc: null,
    spotify: SITE.links.spotify,
    youtube: SITE.links.youtube,
    featured: true,
  },
  {
    id: "ep-02",
    number: "02",
    title: "Warum wir Minecraft immer noch lieben",
    date: "2026-09-27",
    dateLabel: "27. Sep 2026",
    duration: "58:04",
    durationSec: 3484,
    description:
      "Nostalgie, Updates, Mods, Server – wir graben aus, was Minecraft nach über einem Jahrzehnt immer noch besonders macht.",
    audioSrc: null,
    spotify: SITE.links.spotify,
    youtube: SITE.links.youtube,
  },
  {
    id: "ep-03",
    number: "03",
    title: "Die verrücktesten Minecraft-Projekte",
    date: "2026-10-04",
    dateLabel: "04. Okt 2026",
    duration: "51:37",
    durationSec: 3097,
    description:
      "Von 1:1-Erde bis funktionierendem Computer in Redstone – die Builds und Projekte, bei denen man nur noch staunen kann.",
    audioSrc: null,
    spotify: SITE.links.spotify,
    youtube: SITE.links.youtube,
  },
  {
    id: "ep-04",
    number: "04",
    title: "Server, Community & Chaos",
    date: "2026-10-11",
    dateLabel: "11. Okt 2026",
    duration: "1:03:52",
    durationSec: 3832,
    description:
      "Griefing, Großprojekte, Admin-Drama und die besten Community-Stories – warum Server das eigentliche Endgame sind.",
    audioSrc: null,
    spotify: SITE.links.spotify,
    youtube: SITE.links.youtube,
  },
];

export const TOPICS = [
  { icon: "⛏️", label: "Minecraft", desc: "Spiel, Updates & Kultur" },
  { icon: "🎙️", label: "Community", desc: "Stimmen aus der Szene" },
  { icon: "🌍", label: "Server", desc: "SMPs, Events & Drama" },
  { icon: "🧱", label: "Builds", desc: "Architektur & Redstone" },
  { icon: "⚙️", label: "Updates", desc: "Patches & Snapshots" },
  { icon: "🔥", label: "Stories", desc: "Legenden & Erinnerungen" },
  { icon: "💡", label: "Projekte", desc: "Ideen zum Nachbauen" },
  { icon: "😂", label: "Chaos", desc: "Fails & Fun-Momente" },
];

export const HOSTS = [
  {
    id: "host-one",
    name: "Host One",
    role: "Host & Minecraft Enthusiast",
    bio: "Baut seit der Beta, redet gerne über Redstone und verliert sich regelmäßig in neuen Welten. Zuständig für Technik-Themen und tiefe Lore-Dives.",
    initials: "H1",
    socials: [
      { label: "YouTube", href: SITE.links.youtube },
      { label: "Discord", href: SITE.links.discord },
    ],
  },
  {
    id: "host-two",
    name: "Host Two",
    role: "Host & Community Nerd",
    bio: "Lebt für Server-Communities, Events und gute Geschichten. Sammelt Chaos-Momente und bringt die Community-Stimmen in den Podcast.",
    initials: "H2",
    socials: [
      { label: "YouTube", href: SITE.links.youtube },
      { label: "Discord", href: SITE.links.discord },
    ],
  },
];

export const FOOTER_LINKS = {
  podcast: [
    { label: "Home", href: "#home" },
    { label: "Episodes", href: "#episodes" },
    { label: "About", href: "#about" },
  ],
  community: [
    { label: "Discord", href: SITE.links.discord },
    { label: "YouTube", href: SITE.links.youtube },
    { label: "Spotify", href: SITE.links.spotify },
  ],
  legal: [
    { label: "Impressum", href: SITE.links.impressum },
    { label: "Datenschutz", href: SITE.links.datenschutz },
  ],
};

export function formatTime(totalSeconds) {
  const s = Math.max(0, Math.floor(totalSeconds));
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${String(m).padStart(2, "0")}:${String(r).padStart(2, "0")}`;
}
