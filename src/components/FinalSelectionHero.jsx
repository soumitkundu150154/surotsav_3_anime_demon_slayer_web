import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ElementalParticleScene } from './ElementalParticleScene';
import logoBlack from '../asstes/logo_black.png';

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
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#0a0a1a] via-[#1a1a3e] to-[#0c0c1a]"
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
          className="relative w-32 h-32 rounded-full"
          style={{
            background: 'radial-gradient(circle at 30% 30%, #fffacd, #f0e68c 40%, #daa520 70%, #b8860b)',
            boxShadow: '0 0 60px 20px rgba(255, 250, 205, 0.3), 0 0 100px 40px rgba(218, 165, 32, 0.1)',
          }}
          animate={{
            boxShadow: [
              '0 0 60px 20px rgba(255, 250, 205, 0.3), 0 0 100px 40px rgba(218, 165, 32, 0.1)',
              '0 0 80px 30px rgba(255, 250, 205, 0.4), 0 0 120px 50px rgba(218, 165, 32, 0.15)',
              '0 0 60px 20px rgba(255, 250, 205, 0.3), 0 0 100px 40px rgba(218, 165, 32, 0.1)',
            ],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          {/* Competition Logo on Moon */}
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <img
              src={logoBlack}
              /* alt="Competition Logo" */
              className="w-20 h-20 object-contain drop-shadow-lg"
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
        className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center"
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

        <motion.button
          onClick={onEnter}
          className="group relative px-12 py-4 text-lg font-cinzel tracking-wider overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.div
            className="absolute inset-0 border-2 border-wisteria"
            initial={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' }}
            whileHover={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
            transition={{ duration: 0.4 }}
          />
          <motion.div
            className="absolute inset-1 bg-gradient-to-r from-wisteria/20 to-wisteria-dark/20"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <span className="relative z-10 text-wisteria-light group-hover:text-white transition-colors">
            Join the Corps
          </span>

          <motion.div
            className="absolute inset-1"
            initial={{ x: '-100%' }}
            whileHover={{ x: '100%' }}
            transition={{ duration: 0.6 }}
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(162, 155, 254, 0.3), transparent)',
            }}
          />
        </motion.button>
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
