// Minimal Demo-Player für GitHub Pages (kein Build, keine Dependencies)
(function () {
  var btn = document.getElementById("playBtn");
  var seek = document.getElementById("seek");
  var tCur = document.getElementById("tCur");
  var total = 2538;
  var pos = 0;
  var playing = false;
  var timer = null;

  function fmt(s) {
    s = Math.max(0, Math.floor(s));
    var m = Math.floor(s / 60);
    var r = s % 60;
    return String(m).padStart(2, "0") + ":" + String(r).padStart(2, "0");
  }

  function render() {
    seek.value = Math.floor(pos);
    tCur.textContent = fmt(pos);
    btn.textContent = playing ? "❚❚" : "▶";
    btn.setAttribute("aria-label", playing ? "Pause" : "Episode abspielen");
  }

  btn.addEventListener("click", function () {
    playing = !playing;
    if (playing) {
      if (pos >= total) pos = 0;
      // 20x Speed für Demo
      timer = setInterval(function () {
        pos += 2;
        if (pos >= total) {
          pos = total;
          playing = false;
          clearInterval(timer);
        }
        render();
      }, 100);
    } else if (timer) {
      clearInterval(timer);
    }
    render();
  });

  seek.addEventListener("input", function () {
    pos = Number(seek.value);
    render();
  });

  // Vercel-Link: Platzhalter – nach Deploy echte URL eintragen
  // (wird in README dokumentiert)
  var vercelLink = document.getElementById("vercelLink");
  if (vercelLink && vercelLink.getAttribute("href") === "#") {
    vercelLink.setAttribute("title", "Vercel-URL nach dem Deploy hier eintragen (docs/index.html + README)");
  }

  render();
})();
