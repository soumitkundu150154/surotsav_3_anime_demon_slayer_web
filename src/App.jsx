import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
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
import { SystemGuides } from './components/SystemGuides';

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

function ScrollLockOverlay({ onSelectBreathing }) {
  const [showPulse, setShowPulse] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPulse(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-40 pointer-events-none flex items-end justify-center pb-32"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="pointer-events-auto bg-black/80 backdrop-blur-md border border-wisteria/50 rounded-2xl px-8 py-6 max-w-lg mx-4"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', damping: 20 }}
      >
        <div className="flex items-center gap-4 mb-4">
          <motion.div
            className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #a29bfe30, #6c5ce730)' }}
            animate={showPulse ? {
              scale: [1, 1.2, 1],
              boxShadow: [
                '0 0 20px rgba(162, 155, 254, 0.4)',
                '0 0 40px rgba(162, 155, 254, 0.6)',
                '0 0 20px rgba(162, 155, 254, 0.4)',
              ],
            } : {}}
            transition={{ duration: 1.5, repeat: showPulse ? Infinity : 0 }}
          >
            <span className="text-2xl">⚔️</span>
          </motion.div>
          <div>
            <h3 className="text-xl font-cinzel font-bold text-white">Choose Your Path</h3>
            <p className="text-wisteria-light text-sm">A breathing style is required to proceed</p>
          </div>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          To explore the Demon Slayer Corps and continue your journey, 
          you must first select a breathing style above. Each style grants 
          unique powers to aid you in the battles ahead.
        </p>
        <motion.div
          className="mt-4 flex items-center gap-2 text-wisteria/70 text-xs"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span>↑ Scroll up to select your breathing style</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

function AppContent() {
  const mainRef = useRef(null);
  const { selectedBreathing } = useBreathing();
  const [showScrollLock, setShowScrollLock] = useState(false);
  const breathingSectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (selectedBreathing === 'none') {
        const breathingSection = document.getElementById('breathing');
        if (breathingSection) {
          const rect = breathingSection.getBoundingClientRect();
          const breathingBottom = rect.bottom;
          // Show lock overlay when user tries to scroll past breathing section
          setShowScrollLock(breathingBottom < window.innerHeight * 0.3);
        }
      } else {
        setShowScrollLock(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [selectedBreathing]);

  useEffect(() => {
    if (selectedBreathing === 'none') {
      document.body.style.overflow = 'hidden';
      // Snap back to breathing section if user tries to scroll down
      const preventScroll = (e) => {
        const breathingSection = document.getElementById('breathing');
        if (breathingSection) {
          const rect = breathingSection.getBoundingClientRect();
          if (rect.bottom < window.innerHeight && e.deltaY > 0) {
            e.preventDefault();
            breathingSection.scrollIntoView({ behavior: 'smooth' });
          }
        }
      };
      window.addEventListener('wheel', preventScroll, { passive: false });
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('wheel', preventScroll);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [selectedBreathing]);

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

        <section id="arcs">
          <FeaturedArcs />
        </section>

        <section id="missions">
          <MissionArcs />
        </section>

        {/* <section id="hashira">
          <HashiraRoster />
        </section> */}

        <section id="guides">
          <SystemGuides />
        </section>

        <section id="oath">
          <CorpsOath />
        </section>

        <section id="countdown">
          <CountdownBattleTimer />
        </section>

        <AnimatePresence>
          {showScrollLock && selectedBreathing === 'none' && (
            <ScrollLockOverlay onSelectBreathing={scrollToBreathing} />
          )}
        </AnimatePresence>
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
