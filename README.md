# The Block – Der Minecraft-Podcast

Moderne, hochwertige Podcast-Website – **minimalistisch auf GitHub Pages**, **volles Erlebnis auf Vercel**.

- **Vollversion (Vercel, Vite + React + Tailwind):** Root-Verzeichnis → `npm run dev` / `npm run build`
- **Minimal-Version (GitHub Pages, pure static):** [`/docs`](./docs/index.html) – kein Build nötig

## Struktur

```
crafted-conversations/
├── src/                    # Vollversion (Vercel)
│   ├── data/site.js        # ← ZENTRALE CONFIG: Links, Hosts, Topics (EPISODES folgen zum Launch)
│   ├── components/         # Navbar, Hero, Trailer, ComingSoon, About, Topics, Hosts, Community, Footer
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css           # Tailwind v4 Theme + Animationen
├── docs/                   # Minimal-Version (GitHub Pages)
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│   └── favicon.svg
├── public/favicon.svg
├── vercel.json
└── .github/workflows/pages-minimal.yml
```

## Lokal starten

**Vollversion:**
```bash
npm install
npm run dev
# → http://localhost:5173
```

**Minimal-Version:**
Einfach `docs/index.html` im Browser öffnen – kein Server nötig.

## Build (Pflicht-Check)

```bash
npm run build
npm run preview
```

## Konfigurieren

Alles in **`src/data/site.js`**:

- `SITE.links` – Discord / Spotify / YouTube / Impressum / Datenschutz
- `EPISODES` – aktuell leer (keine Folgen, nur Trailer unter `public/trailer.mp3`). Zum Launch: neues Objekt pro Folge ergänzen + Folgenliste wieder einblenden
- `HOSTS` – Namen, Rollen, Bios, Socials
- `TOPICS` – Themen-Cards

**Logo:** Das angehängte Logo als `public/logo.png` (Vollversion) **und** `docs/logo.png`
(Minimal-Version) ablegen – exakt diese Dateinamen, dann wird es automatisch verwendet
(Navbar, Hero, Favicon, Social-Preview). Falls die Datei fehlt, greift ein dezenter Fallback.

Für die GitHub-Pages-Version zusätzlich die Links in `docs/index.html` anpassen
(Discord / Spotify / YouTube) und ggf. `docs/script.js` → Vercel-URL.
Der Trailer liegt als `docs/trailer.mp3` (Kopie von `public/trailer.mp3`) bei.

## Deploy

### Vercel (volles Erlebnis, empfohlen)

1. https://vercel.com → **Add New Project** → Repo `crafted-conversations` importieren
2. Framework: **Vite** (wird automatisch erkannt, `vercel.json` liegt bei)
3. Build Command: `npm run build`, Output: `dist`
4. Deploy → fertige URL in `docs/script.js` + hier unten eintragen

**Live-URL (GitHub Pages, minimal):** https://lokrogaming.github.io/crafted-conversations/

**Live-URL (Vercel, voll):** _(nach Deploy eintragen)_

### GitHub Pages (minimalistisch)

Automatisch via GitHub Actions (`.github/workflows/pages-minimal.yml`):
- deployed den Ordner `docs/` bei jedem Push auf `main`
- Nach dem ersten Push: Repo → **Settings → Pages → Source: GitHub Actions** prüfen
- URL: `https://<username>.github.io/crafted-conversations/`

## Qualität

- Responsive (Desktop / Tablet / Mobile) + Hamburger-Menü
- Keine externen Bilder – alles CSS/SVG (keine kaputten Assets möglich)
- Accessibility: Skip-Link, ARIA-Labels, Fokus-Ringe, Kontraste, `prefers-reduced-motion`
- Performance: keine schweren Dependencies, nur React + Tailwind, System-Fonts + 3 Google-Fonts mit `display=swap`
- Trailer-Player mit echter MP3 (`public/trailer.mp3`, nativem `<audio>`-Element)

## Links

Echte URLs in `src/data/site.js` eingetragen:
- Discord: `https://discord.gg/dPpRKbSYAh`
- Spotify: `https://open.spotify.com/show/craftedconversations` (Platzhalter-Show, anpassen sobald live)
- YouTube: `https://youtube.com/@lokrogamer`
