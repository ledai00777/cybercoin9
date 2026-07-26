import Background from './components/Background';
import CursorGlow from './components/CursorGlow';
import DataStream from './components/DataStream';
import Navbar from './components/Navbar';
import Ticker, { MiniStats } from './components/Ticker';
import Hero from './components/Hero';
import About from './components/About';
import CrewDatabase from './components/CrewDatabase';
import Tokenomics from './components/Tokenomics';
import CyberpsychoMeter from './components/CyberpsychoMeter';
import Roadmap from './components/Roadmap';
import HowToBuy from './components/HowToBuy';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { useScrollReveal } from './lib/useScrollReveal';
import { useSmoothScroll } from './lib/useSmoothScroll';
import { HeroTimelineProvider } from './lib/heroTimeline';

export default function App() {
  useScrollReveal();
  useSmoothScroll();

  return (
    <HeroTimelineProvider>
    <div className="relative min-h-screen">
      <Background />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <div className="mx-auto max-w-6xl px-5 py-8">
          <MiniStats />
        </div>
        <About />
        <CrewDatabase />
        <Tokenomics />
        <CyberpsychoMeter />
        <Roadmap />
        <Quotes />
        <HowToBuy />
        <FAQ />
      </main>
      <Footer />
    </div>
    </HeroTimelineProvider>
  );
}
