// Minimal JS für GitHub Pages – aktuell kein Player nötig,
// da noch keine Folgen veröffentlicht sind.
(function () {
  // Vercel-Link: Platzhalter – nach Deploy echte URL eintragen
  var vercelLink = document.getElementById("vercelLink");
  if (vercelLink && vercelLink.getAttribute("href") === "#") {
    vercelLink.setAttribute("title", "Vercel-URL nach dem Deploy hier eintragen (docs/index.html + README)");
  }
})();
