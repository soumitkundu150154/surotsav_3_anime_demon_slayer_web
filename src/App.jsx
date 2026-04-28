import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { BreathingProvider, useBreathing } from './context/BreathingContext';
import { ArcFilterProvider } from './context/ArcFilterContext';
import { useKonami } from './hooks/useKonami';

import { SwordCursor } from './components/SwordCursor';
import { FinalSelectionHero } from './components/FinalSelectionHero';
import { BreathingSelector } from './components/BreathingSelector';
import { CountdownBattleTimer } from './components/CountdownBattleTimer';
import { MissionArcs } from './components/MissionArcCard';
import { FeaturedArcs } from './components/FeaturedArcs';
import { HashiraRoster } from './components/HashiraRoster';
import { CorpsOath } from './components/CorpsOath';
import { InfinityCastleMode } from './components/InfinityCastleMode';
import { Navigation } from './components/Navigation';

function ProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-50 origin-left"
      style={{
        scaleX,
        background: 'linear-gradient(90deg, var(--breathing-primary, #a29bfe), var(--breathing-glow, #c8a2c8))',
      }}
    />
  );
}

function KonamiTrigger() {
  const { toggleInfinityCastle } = useBreathing();
  const isKonamiActive = useKonami(
    () => toggleInfinityCastle(),
    () => toggleInfinityCastle()
  );

  return null;
}

function Footer() {
  const { breathing } = useBreathing();

  return (
    <footer className="relative py-16 px-6 bg-night-dark">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-cinzel font-bold text-white mb-4">
            <span style={{ color: breathing.color || '#a29bfe' }}>Surotsav</span> 2026
          </h3>
          <p className="text-gray-500 text-sm">
            Enter the world of Demon Slayer. Live the anime experience.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {[
            { title: 'Arcs', items: ['Final Selection', 'Breathing', 'Missions', 'Hashira'] },
            { title: 'Events', items: ['Mobmania', 'Manthan', 'Udaan', 'Tarang'] },
            { title: 'Resources', items: ['Schedule', 'Rules', 'FAQs', 'Contact'] },
            { title: 'Connect', items: ['Instagram', 'Discord', 'Email', 'Location'] },
          ].map((section, i) => (
            <div key={i}>
              <h4 className="text-white font-cinzel font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.items.map((item, j) => (
                  <li key={j}>
                    <a
                      href="#"
                      className="text-gray-500 text-sm hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="pt-8 border-t border-white/10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-gray-600 text-xs">
            © Surotsav 2026. Inspired by Demon Slayer: Kimetsu no Yaiba.
            <br />
            A fan-made festival experience. Not affiliated with official productions.
          </p>
          <p className="text-gray-700 text-xs mt-2">
            Press ↑↑↓↓←→←→BA to enter Infinity Castle
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

function AppContent() {
  const mainRef = useRef(null);

  const scrollToBreathing = () => {
    const element = document.getElementById('breathing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={mainRef} className="relative min-h-screen bg-night">
      <SwordCursor />
      <KonamiTrigger />
      <ProgressBar />
      <Navigation />
      <InfinityCastleMode />

      <main>
        <section id="hero">
          <FinalSelectionHero onEnter={scrollToBreathing} />
        </section>

        <section id="breathing">
          <BreathingSelector />
        </section>

        <section id="countdown">
          <CountdownBattleTimer />
        </section>

        <section id="arcs">
          <FeaturedArcs />
        </section>

        <section id="missions">
          <MissionArcs />
        </section>

        <section id="hashira">
          <HashiraRoster />
        </section>

        <section id="oath">
          <CorpsOath />
        </section>
      </main>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <BreathingProvider>
      <ArcFilterProvider>
        <AppContent />
      </ArcFilterProvider>
    </BreathingProvider>
  );
}

export default App;
