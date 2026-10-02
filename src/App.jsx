import Background from "./components/Background.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Trailer from "./components/Trailer.jsx";
import ComingSoon from "./components/ComingSoon.jsx";
import About from "./components/About.jsx";
import Topics from "./components/Topics.jsx";
import Hosts from "./components/Hosts.jsx";
import Community from "./components/Community.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen font-body">
      <a
        href="#inhalt"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-[#5ed951] focus:text-black focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold"
      >
        Zum Inhalt springen
      </a>
      <Background />
      <Navbar />
      <main id="inhalt">
        <Hero />
        <Trailer />
        <ComingSoon />
        <About />
        <Topics />
        <Hosts />
        <Community />
      </main>
      <Footer />
    </div>
  );
}
