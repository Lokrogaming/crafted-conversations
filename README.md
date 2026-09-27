# Crafted Conversations – A Minecraft Podcast

Moderne, hochwertige Podcast-Website – **minimalistisch auf GitHub Pages**, **volles Erlebnis auf Vercel**.

- **Vollversion (Vercel, Vite + React + Tailwind):** Root-Verzeichnis → `npm run dev` / `npm run build`
- **Minimal-Version (GitHub Pages, pure static):** [`/docs`](./docs/index.html) – kein Build nötig

## Struktur

```
crafted-conversations/
├── src/                    # Vollversion (Vercel)
│   ├── data/site.js        # ← ZENTRALE CONFIG: Links, Episoden, Hosts, Topics
│   ├── components/         # Navbar, Hero, Player, Episodes, About, Topics, Hosts, Community, Footer
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

- `SITE.links` – Podcast / YouTube / Discord / Spotify / RSS / Impressum / Datenschutz
- `EPISODES` – neue Folge = neues Objekt (mit `audioSrc`, sobald echte Datei vorhanden)
- `HOSTS` – Namen, Rollen, Bios, Socials
- `TOPICS` – Themen-Cards

Für die GitHub-Pages-Version zusätzlich die Links in `docs/index.html` anpassen
(YouTube / Discord / Spotify) und ggf. `docs/script.js` → Vercel-URL.

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
- Player funktioniert ohne Backend (Dummy-Timer, später `audioSrc` setzen)

## Links (Platzhalter)

Echte URLs in `src/data/site.js` eintragen:
- YouTube: `https://youtube.com/@craftedconversations`
- Discord: `https://discord.gg/craftedconversations`
- Spotify: `https://open.spotify.com/show/craftedconversations`
