// ─────────────────────────────────────────────
// The Block – zentrale Konfiguration
// Alles, was sich später ändert (Links, Episoden, Hosts),
// wird NUR hier angepasst.
// ─────────────────────────────────────────────

export const SITE = {
  name: "The Block",
  shortName: "TB",
  tagline: "Der Minecraft-Podcast für Gespräche, Geschichten und alles dazwischen.",
  subline: "Minecraft ist mehr als Blöcke. Es sind die Geschichten, Projekte, Server und Menschen dahinter.",
  language: "de",
  // Hinweis: Aktuell gibt es noch keine Folgen – der Podcast ist in
  // Vorbereitung und daher noch nicht auf Spotify zu finden.
  // Echte URLs hier eintragen, sobald vorhanden.
  links: {
    discord: "https://discord.gg/dPpRKbSYAh",
    spotify: "https://open.spotify.com/show/7CI5MdEEnKHI349d7jeYlX",
    youtube: "https://youtube.com/@lokrogamer",
    impressum: "#impressum",
    datenschutz: "#datenschutz",
  },
  nav: [
    { label: "Start", href: "#home" },
    { label: "Status", href: "#status" },
    { label: "Über uns", href: "#about" },
    { label: "Themen", href: "#topics" },
    { label: "Hosts", href: "#hosts" },
    { label: "Community", href: "#community" },
  ],
};

// ─────────────────────────────────────────────
// Aktuell: noch keine Folgen veröffentlicht.
// Sobald die erste Folge da ist: hier als Objekt ergänzen –
// die Folgenliste erscheint dann automatisch wieder.
// ─────────────────────────────────────────────
export const EPISODES = [];

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
    name: "Lokrogamer",
    role: "Host & Minecraft Enthusiast",
    bio: "Baut seit der Beta, redet gerne über Redstone und verliert sich regelmäßig in neuen Welten. Zuständig für Technik-Themen und tiefe Lore-Dives.",
    initials: "LG",
    socials: [
      { label: "Spotify", href: SITE.links.spotify },
      { label: "Discord", href: SITE.links.discord },
    ],
  },
  {
    id: "host-two",
    name: "JamJam1312",
    role: "Host & Community Nerd",
    bio: "Lebt für Server-Communities, Events und gute Geschichten. Sammelt Chaos-Momente und bringt die Community-Stimmen in den Podcast.",
    initials: "JJ",
    socials: [
      { label: "Spotify", href: SITE.links.spotify },
      { label: "Discord", href: SITE.links.discord },
    ],
  },
];

export const FOOTER_LINKS = {
  podcast: [
    { label: "Start", href: "#home" },
    { label: "Status", href: "#status" },
    { label: "Über uns", href: "#about" },
  ],
  community: [
    { label: "Discord", href: SITE.links.discord },
    { label: "Spotify", href: SITE.links.spotify },
    { label: "YouTube", href: SITE.links.youtube },
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
