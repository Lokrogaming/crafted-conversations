import { useState } from "react";
import Background from "./components/Background.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Player from "./components/Player.jsx";
import Episodes from "./components/Episodes.jsx";
import About from "./components/About.jsx";
import Topics from "./components/Topics.jsx";
import Hosts from "./components/Hosts.jsx";
import Community from "./components/Community.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [highlight, setHighlight] = useState(null);

  return (
    <div className="min-h-screen font-body">
      <a
        href="#episodes"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-[#5ed951] focus:text-black focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold"
      >
        Zum Inhalt springen
      </a>
      <Background />
      <Navbar />
      <main>
        <Hero />
        <Player onSelectEpisode={setHighlight} />
        <Episodes highlightId={highlight} />
        <About />
        <Topics />
        <Hosts />
        <Community />
      </main>
      <Footer />
    </div>
  );
}
