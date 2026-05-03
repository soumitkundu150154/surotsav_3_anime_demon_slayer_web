import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ElementalParticleScene } from './ElementalParticleScene';
import logoBlack from '../asstes/logo_black.png';
import logoWhite from '../asstes/logo_white.png';

function WisteriaPetal({ delay, x }) {
  return (
    <motion.div
      className="absolute w-3 h-3 rounded-full"
      style={{
        background: 'radial-gradient(circle at 30% 30%, #c8a2c8, #9b59b6, #5b2c6f)',
        left: `${x}%`,
        boxShadow: '0 0 10px rgba(155, 89, 182, 0.5)',
      }}
      initial={{ y: '-10vh', opacity: 0, rotate: 0, scale: 1 }}
      animate={{
        y: '110vh',
        opacity: [0, 1, 1, 0],
        rotate: 720,
        x: [0, 30, -20, 40, 0],
        scale: [0.8, 1, 0.9, 1.1, 0.8],
      }}
      transition={{
        duration: 10 + Math.random() * 5,
        delay,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  );
}

function FogLayer({ delay, opacity }) {
  return (
    <motion.div
      className="absolute inset-2 pointer-events-none"
      style={{
        background: 'radial-gradient(ellipse at center, transparent 0%, rgba(108, 92, 231, 0.1) 50%, rgba(20, 20, 40, 0.4) 100%)',
        filter: 'blur(20px)',
      }}
      animate={{
        opacity: [opacity * 0.5, opacity, opacity * 0.5],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}

function KasugaiCrow() {
  return (
    <motion.div
      className="absolute"
      initial={{ x: '-20vw', y: '20vh' }}
      animate={{
        x: ['-20vw', '50vw', '120vw'],
        y: ['20vh', '30vh', '25vh', '40vh'],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        repeatDelay: 5,
        ease: 'linear',
      }}
    >
      <motion.svg
        width="60"
        height="40"
        viewBox="0 0 60 40"
        animate={{
          y: [0, -5, 0],
          rotate: [-5, 5, -5],
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <ellipse cx="30" cy="20" rx="15" ry="10" fill="#1a1a2e" />
        <ellipse cx="25" cy="18" rx="8" ry="6" fill="#0f0f1a" />
        <polygon points="42,20 52,16 52,24" fill="#1a1a2e" />
        <motion.ellipse
          cx="12"
          cy="20"
          rx="18"
          ry="6"
          fill="#1a1a2e"
          animate={{ ry: [6, 3, 6] }}
          transition={{ duration: 0.25, repeat: Infinity }}
        />
        <motion.ellipse
          cx="48"
          cy="20"
          rx="18"
          ry="6"
          fill="#1a1a2e"
          animate={{ ry: [6, 3, 6] }}
          transition={{ duration: 0.25, repeat: Infinity, delay: 0.125 }}
        />
        <circle cx="18" cy="17" r="2" fill="#ffd700" />
        <polygon points="15,20 8,22 15,24" fill="#333" />
      </motion.svg>
    </motion.div>
  );
}

export function FinalSelectionHero({ onEnter }) {
  const containerRef = useRef(null);
  const [petals] = useState(() => Array.from({ length: 30 }, (_, i) => ({
    id: i,
    delay: Math.random() * 10,
    x: Math.random() * 100,
  })));

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const moonY = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#0a0a1a] via-[#1a1a3e] to-[#0c0c1a] flex items-center justify-center"
    >
      <motion.div
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `
              radial-gradient(ellipse at 20% 50%, rgba(108, 92, 231, 0.15) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 30%, rgba(147, 112, 219, 0.1) 0%, transparent 40%),
              radial-gradient(ellipse at 50% 100%, rgba(75, 0, 130, 0.2) 0%, transparent 60%)
            `,
          }}
        />
      </motion.div>

      <motion.div
        className="absolute top-20 right-1/4"
        style={{ y: moonY }}
      >
        <motion.div
          className="relative w-40 h-40 rounded-full"
          style={{
            background: 'radial-gradient(circle at 30% 30%, #ff6b6b, #e63946 40%, #c0392b 70%, #8b0000)',
            boxShadow: '0 0 80px 30px rgba(230, 57, 70, 0.4), 0 0 120px 50px rgba(139, 0, 0, 0.2)',
          }}
          animate={{
            boxShadow: [
              '0 0 80px 30px rgba(230, 57, 70, 0.4), 0 0 120px 50px rgba(139, 0, 0, 0.2)',
              '0 0 100px 40px rgba(230, 57, 70, 0.5), 0 0 140px 60px rgba(139, 0, 0, 0.25)',
              '0 0 80px 30px rgba(230, 57, 70, 0.4), 0 0 120px 50px rgba(139, 0, 0, 0.2)',
            ],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          {/* Competition Logo on Moon */}
          <div className="absolute inset-0 flex items-center justify-center p-5">
            <img
              // src={logoBlack}
              src={logoWhite}
              /* alt="Competition Logo" */
              className="w-28 h-28 object-contain drop-shadow-lg"
            />
          </div>
        </motion.div>
      </motion.div>

      <FogLayer delay={0} opacity={0.3} />
      <FogLayer delay={2} opacity={0.2} />
      <FogLayer delay={4} opacity={0.25} />

      <KasugaiCrow />

      {petals.map((petal) => (
        <WisteriaPetal key={petal.id} delay={petal.delay} x={petal.x} />
      ))}

      <ElementalParticleScene className="opacity-50" />

      <motion.div
        className="relative z-10 flex flex-col items-center justify-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center"
        style={{ y: textY, opacity }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
          className="mb-6"
        >
          <motion.div
            className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-wisteria-light/50"
            animate={{
              rotate: [0, 360],
              borderColor: ['rgba(162, 155, 254, 0.5)', 'rgba(108, 92, 231, 0.8)', 'rgba(162, 155, 254, 0.5)'],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          >
            <motion.div
              className="w-full h-full rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, transparent, #a29bfe, transparent)',
              }}
              animate={{ rotate: [0, -360] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            />
          </motion.div>
        </motion.div>

        <motion.p
          className="text-wisteria-light text-sm md:text-base tracking-[0.5em] mb-4 uppercase"
          initial={{ opacity: 0, letterSpacing: '1em' }}
          animate={{ opacity: 1, letterSpacing: '0.5em' }}
          transition={{ duration: 1.5, delay: 0.8 }}
        >
          The Final Selection
        </motion.p>

        <motion.h1
          className="anime-title text-white mb-6"
          initial={{ opacity: 0, y: 50, filter: 'blur(20px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, delay: 1, ease: 'easeOut' }}
        >
          <span className="block text-6xl md:text-8xl lg:text-9xl">Surotsav</span>
          <span className="block text-4xl md:text-6xl lg:text-7xl mt-2 text-wisteria">2026</span>
        </motion.h1>

        <motion.p
          className="anime-subtitle text-gray-300 max-w-2xl mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          Demons Are Rising.
        </motion.p>

        <motion.p
          className="anime-subtitle text-wisteria-light max-w-2xl mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
        >
          Will You Join the Corps?
        </motion.p>

        {/* Pulsing glow behind button */}
        <motion.div
          className="absolute mb-4"
          initial={{ opacity: 1 }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            width: '280px',
            height: '80px',
            background: 'radial-gradient(ellipse, rgba(162, 155, 254, 0.5) 0%, transparent 70%)',
            filter: 'blur(20px)',
          }}
        />

        {/* Animated arrows pointing down at button */}
        <motion.div
          className="absolute -mt-20 flex flex-col items-center gap-1"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-wisteria/60 text-xs font-cinzel tracking-widest uppercase">Your journey awaits</span>
          <motion.svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#a29bfe"
            strokeWidth="2"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </motion.svg>
        </motion.div>

        <motion.button
          onClick={onEnter}
          className="group relative px-12 py-4 text-lg font-cinzel tracking-wider overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Outer pulsing ring */}
          <motion.div
            className="absolute -inset-2 rounded-xl border-2 border-wisteria/50"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.2, 0.5],
              boxShadow: [
                '0 0 20px rgba(162, 155, 254, 0.3)',
                '0 0 40px rgba(162, 155, 254, 0.6)',
                '0 0 20px rgba(162, 155, 254, 0.3)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />

          <motion.div
            className="absolute inset-0 border-2 border-wisteria bg-wisteria/10"
            initial={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' }}
            whileHover={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
            transition={{ duration: 0.4 }}
          />
          
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-wisteria via-wisteria-light to-wisteria opacity-0 group-hover:opacity-20"
            transition={{ duration: 0.3 }}
          />
          
          <span className="relative z-10 text-wisteria-light group-hover:text-white transition-colors duration-300 flex items-center gap-3">
            <motion.span
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              ⚔️
            </motion.span>
            Join the Corps
            <motion.span
              animate={{ x: [0, -3, 0] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
            >
              ⚔️
            </motion.span>
          </span>

          <motion.div
            className="absolute inset-0"
            initial={{ x: '-100%' }}
            whileHover={{ x: '100%' }}
            transition={{ duration: 0.6 }}
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(162, 155, 254, 0.4), transparent)',
            }}
          />
        </motion.button>

        {/* Urgency text below button */}
        <motion.p
          className="absolute mt-24 text-sm text-wisteria/60 font-cinzel tracking-wider"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <motion.span
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Click to begin your destiny
          </motion.span>
        </motion.p>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-wisteria/50 rounded-full flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
        >
          <motion.div
            className="w-1.5 h-3 bg-wisteria rounded-full mt-2"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
