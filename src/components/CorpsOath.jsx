import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useBreathing } from '../context/BreathingContext';
import { Check, Sword, Sparkles } from 'lucide-react';

export function CorpsOath() {
  const { breathing } = useBreathing();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const breathingColor = breathing.color || '#2d24aa';

  const handleTakeOath = () => {
    setIsSubmitted(true);
    // Redirect to Google Form after animation
    setTimeout(() => {
      window.open('https://docs.google.com/forms/d/e/1FAIpQLSf9pqbG4vWppeFYsb6pky4W9CKSk62Kbiv9qHIXsI7R4Sy_hQ/viewform', '_blank');
    }, 800);
  };

  return (
    <section className="relative min-h-[60vh] w-full py-24 px-6 bg-gradient-to-b from-[#0c0c1a] via-[#0a0a12] to-[#0c0c1a] overflow-hidden">
      {/* Animated background glow */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at center, ${breathingColor}15, transparent 60%)`,
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: breathingColor,
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div
              key="oath-prompt"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
            >
              {/* Decorative element */}
              <motion.div
                className="flex items-center justify-center gap-4 mb-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <motion.div
                  className="h-px w-16"
                  style={{ background: `linear-gradient(90deg, transparent, ${breathingColor}60)` }}
                />
                <motion.div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${breathingColor}30, ${breathingColor}10)`,
                    border: `1px solid ${breathingColor}40`,
                  }}
                  animate={{
                    boxShadow: [
                      `0 0 20px ${breathingColor}30`,
                      `0 0 40px ${breathingColor}50`,
                      `0 0 20px ${breathingColor}30`,
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Sparkles size={20} style={{ color: breathingColor }} />
                </motion.div>
                <motion.div
                  className="h-px w-16"
                  style={{ background: `linear-gradient(90deg, ${breathingColor}60, transparent)` }}
                />
              </motion.div>

              {/* Title */}
              <motion.h2
                className="text-4xl md:text-5xl font-cinzel font-black text-white mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Take the Oath
              </motion.h2>

              {/* Tagline */}
              <motion.p
                className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto mb-12 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Swear your allegiance to the Demon Slayer Corps.
                <br />
                Stand with us against the darkness.
              </motion.p>

              {/* The Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <motion.button
                  onClick={handleTakeOath}
                  className="relative px-12 py-5 rounded-2xl font-cinzel font-bold text-lg text-white overflow-hidden group"
                  style={{
                    background: `linear-gradient(135deg, ${breathingColor}, ${breathingColor}dd)`,
                    boxShadow: `0 0 40px ${breathingColor}40`,
                  }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: `0 0 60px ${breathingColor}60`,
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Animated shimmer */}
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                    }}
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.8 }}
                  />

                  {/* Pulse ring */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      border: `2px solid ${breathingColor}`,
                    }}
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />

                  <span className="relative z-10 flex items-center justify-center gap-3">
                    <Sword size={22} />
                    Take the Corps Oath
                  </span>
                </motion.button>
              </motion.div>

              {/* Subtle hint */}
              <motion.p
                className="text-gray-500 text-sm mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                Your journey begins with a single commitment
              </motion.p>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, type: 'spring', damping: 20 }}
            >
              {/* Success icon */}
              <motion.div
                className="w-24 h-24 mx-auto mb-8 rounded-full flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${breathingColor}, ${breathingColor}dd)`,
                  boxShadow: `0 0 60px ${breathingColor}60`,
                }}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', damping: 15, delay: 0.2 }}
              >
                <Check size={48} className="text-white" />
              </motion.div>

              {/* Success message */}
              <motion.h3
                className="text-3xl md:text-4xl font-cinzel font-black text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Welcome to the Corps
              </motion.h3>

              <motion.p
                className="text-gray-300 text-lg max-w-lg mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Your oath has been recorded.
                <br />
                Stand proud among the Demon Slayers.
              </motion.p>

              {/* Decorative closing */}
              <motion.div
                className="flex items-center justify-center gap-4 mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div
                  className="h-px w-12"
                  style={{ background: `linear-gradient(90deg, transparent, ${breathingColor}40)` }}
                />
                <Sword size={14} style={{ color: breathingColor }} />
                <div
                  className="h-px w-12"
                  style={{ background: `linear-gradient(90deg, ${breathingColor}40, transparent)` }}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
