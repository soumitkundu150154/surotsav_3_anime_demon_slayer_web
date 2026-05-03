import React, { useEffect, useRef, useState, useCallback } from 'react';
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

function ScrollLockOverlay() {
  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 z-40 pointer-events-none pb-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="mx-auto max-w-xl px-4"
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', damping: 20 }}
      >
        <motion.div
          className="bg-gradient-to-r from-red-900/80 via-red-800/80 to-red-900/80 backdrop-blur-lg border border-red-500/50 rounded-2xl px-6 py-4 shadow-2xl"
          animate={{
            boxShadow: [
              '0 0 30px rgba(220, 38, 38, 0.3)',
              '0 0 60px rgba(220, 38, 38, 0.5)',
              '0 0 30px rgba(220, 38, 38, 0.3)',
            ],
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="flex items-center justify-center gap-4">
            <motion.div
              className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center border border-red-400/50"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
            >
              <span className="text-xl">🔒</span>
            </motion.div>
            <div className="text-center">
              <h3 className="text-lg font-cinzel font-bold text-white">Path Blocked</h3>
              <p className="text-red-200 text-sm">Select a breathing style above to continue</p>
            </div>
            <motion.div
              className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center border border-red-400/50"
              animate={{ scale: [1, 1.2, 1], rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, delay: 0.25 }}
            >
              <span className="text-xl">🔒</span>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

function MobileScrollLock({ isVisible, onSelectBreathing }) {
  if (!isVisible) return null;
  
  return (
    <motion.div
      className="fixed inset-x-0 bottom-20 z-50 px-4 md:hidden"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
    >
      <motion.div 
        className="bg-gradient-to-r from-red-900/95 via-red-800/95 to-red-900/95 backdrop-blur-xl border-2 border-red-500/60 rounded-2xl px-4 py-4 shadow-2xl"
        animate={{
          boxShadow: [
            '0 8px 32px rgba(220, 38, 38, 0.4)',
            '0 8px 48px rgba(220, 38, 38, 0.6)',
            '0 8px 32px rgba(220, 38, 38, 0.4)',
          ],
        }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="flex items-start gap-3">
          <motion.div
            className="w-10 h-10 rounded-full bg-red-500/30 flex items-center justify-center border border-red-400/50 flex-shrink-0"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          >
            <span className="text-xl">👆</span>
          </motion.div>
          <div className="flex-1">
            <h3 className="text-white font-cinzel font-bold text-base mb-1">Choose Your Path</h3>
            <p className="text-red-100 text-xs leading-relaxed">
              Tap any breathing style card above to unlock the rest of the website
            </p>
            <motion.button
              onClick={onSelectBreathing}
              className="mt-2 text-xs text-wisteria-light underline"
              whileTap={{ scale: 0.95 }}
            >
              Scroll to breathing styles ↑
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function DesktopScrollLock({ isVisible }) {
  if (!isVisible) return null;
  
  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 z-40 pointer-events-none pb-8 hidden md:block"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="mx-auto max-w-xl px-4"
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', damping: 20 }}
      >
        <motion.div
          className="bg-gradient-to-r from-red-900/80 via-red-800/80 to-red-900/80 backdrop-blur-lg border border-red-500/50 rounded-2xl px-6 py-4 shadow-2xl"
          animate={{
            boxShadow: [
              '0 0 30px rgba(220, 38, 38, 0.3)',
              '0 0 60px rgba(220, 38, 38, 0.5)',
              '0 0 30px rgba(220, 38, 38, 0.3)',
            ],
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="flex items-center justify-center gap-4">
            <motion.div
              className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center border border-red-400/50"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
            >
              <span className="text-xl">🔒</span>
            </motion.div>
            <div className="text-center">
              <h3 className="text-lg font-cinzel font-bold text-white">Path Blocked</h3>
              <p className="text-red-200 text-sm">Select a breathing style above to continue</p>
            </div>
            <motion.div
              className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center border border-red-400/50"
              animate={{ scale: [1, 1.2, 1], rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, delay: 0.25 }}
            >
              <span className="text-xl">🔒</span>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

function AppContent() {
  const mainRef = useRef(null);
  const { selectedBreathing } = useBreathing();
  const [showScrollLock, setShowScrollLock] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const scrollLockRef = useRef({ isLocked: false });

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Scroll detection - gentler approach for mobile
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (selectedBreathing === 'none') {
            const breathingSection = document.getElementById('breathing');
            if (breathingSection) {
              const rect = breathingSection.getBoundingClientRect();
              // Show lock when breathing section is in view but user tries to go past
              const shouldLock = rect.top < 100 && rect.bottom < window.innerHeight * 0.8;
              setShowScrollLock(shouldLock);
              scrollLockRef.current.isLocked = shouldLock;
            }
          } else {
            setShowScrollLock(false);
            scrollLockRef.current.isLocked = false;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [selectedBreathing]);

  // Gentle scroll guidance - only on desktop
  useEffect(() => {
    if (selectedBreathing === 'none' && !isMobile) {
      let lastScrollY = window.scrollY;
      
      const gentleRedirect = (e) => {
        const breathingSection = document.getElementById('breathing');
        if (breathingSection && scrollLockRef.current.isLocked) {
          const rect = breathingSection.getBoundingClientRect();
          const scrollDelta = window.scrollY - lastScrollY;
          
          // Only intervene if user is actively scrolling down past the section
          if (scrollDelta > 5 && rect.top < -50) {
            e.preventDefault?.();
            window.scrollTo({
              top: breathingSection.offsetTop,
              behavior: 'smooth'
            });
          }
        }
        lastScrollY = window.scrollY;
      };
      
      window.addEventListener('scroll', gentleRedirect, { passive: false });
      return () => window.removeEventListener('scroll', gentleRedirect);
    }
  }, [selectedBreathing, isMobile]);

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
            <>
              <MobileScrollLock 
                isVisible={isMobile} 
                onSelectBreathing={scrollToBreathing} 
              />
              <DesktopScrollLock isVisible={!isMobile} />
            </>
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
