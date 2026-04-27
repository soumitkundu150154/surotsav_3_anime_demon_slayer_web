import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useBreathing } from '../context/BreathingContext';
import { Flame, Waves, Zap, Wind, PawPrint } from 'lucide-react';

const BREATHING_CONFIG = {
  flame: {
    icon: Flame,
    title: 'Flame Breathing',
    description: 'The fire that consumes all. Masters ignite with passion and unwavering resolve.',
    form: 'First Form: Unknowing Fire',
    color: '#e63946',
    particleColor: '#ff6b6b',
  },
  water: {
    icon: Waves,
    title: 'Water Breathing',
    description: 'The flow that adapts to all. Masters flow like water, ever-changing yet constant.',
    form: 'First Form: Water Surface Slash',
    color: '#3498db',
    particleColor: '#74b9ff',
  },
  thunder: {
    icon: Zap,
    title: 'Thunder Breathing',
    description: 'The bolt that strikes faster than sound. Masters move with lightning speed.',
    form: 'First Form: Thunderclap and Flash',
    color: '#f1c40f',
    particleColor: '#ffeaa7',
  },
  wind: {
    icon: Wind,
    title: 'Wind Breathing',
    description: 'The gale that cuts through everything. Masters ride the winds of change.',
    form: 'First Form: Dust Whirlwind',
    color: '#2ecc71',
    particleColor: '#7bed9f',
  },
  beast: {
    icon: PawPrint,
    title: 'Beast Breathing',
    description: 'The ferocity of a wild beast. Masters channel primal strength.',
    form: 'First Form: Roar',
    color: '#9b59b6',
    particleColor: '#bb8fce',
  },
};

function BreathingCard({ type, config, isSelected, onSelect, index }) {
  const Icon = config.icon;

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <motion.button
        onClick={() => onSelect(type)}
        className={`relative w-full p-6 text-left transition-all duration-500 ${
          isSelected ? 'z-10' : 'z-0'
        }`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <motion.div
          className="absolute inset-0 rounded-xl"
          style={{
            background: isSelected
              ? `linear-gradient(135deg, ${config.color}20, transparent)`
              : 'rgba(255,255,255,0.03)',
            border: `1px solid ${isSelected ? config.color : 'rgba(255,255,255,0.1)'}`,
          }}
          animate={{
            boxShadow: isSelected
              ? `0 0 40px ${config.color}40, inset 0 0 40px ${config.color}10`
              : 'none',
          }}
        />

        {isSelected && (
          <motion.div
            className="absolute inset-0 rounded-xl"
            style={{
              background: `radial-gradient(circle at center, ${config.color}20, transparent 70%)`,
            }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        )}

        <div className="relative z-10">
          <motion.div
            className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
            style={{
              background: isSelected
                ? `linear-gradient(135deg, ${config.color}, ${config.particleColor})`
                : 'rgba(255,255,255,0.05)',
              border: `2px solid ${isSelected ? config.color : 'rgba(255,255,255,0.2)'}`,
            }}
            animate={isSelected ? {
              rotate: [0, 360],
              boxShadow: [
                `0 0 20px ${config.color}40`,
                `0 0 40px ${config.color}60`,
                `0 0 20px ${config.color}40`,
              ],
            } : {}}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          >
            <Icon
              size={28}
              style={{ color: isSelected ? '#fff' : config.color }}
            />
          </motion.div>

          <h3 className="text-xl font-cinzel font-bold mb-2" style={{ color: config.color }}>
            {config.title}
          </h3>

          <AnimatePresence>
            {isSelected && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                  {config.description}
                </p>
                <motion.div
                  className="text-xs uppercase tracking-widest py-2 px-3 rounded"
                  style={{
                    background: `${config.color}20`,
                    color: config.color,
                    borderLeft: `3px solid ${config.color}`,
                  }}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {config.form}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {isSelected && (
          <motion.div
            className="absolute top-2 right-2 w-3 h-3 rounded-full"
            style={{ background: config.color }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
      </motion.button>
    </motion.div>
  );
}

export function BreathingSelector() {
  const { selectedBreathing, selectBreathing } = useBreathing();
  const [hoveredBreathing, setHoveredBreathing] = useState(null);

  const handleSelect = (type) => {
    selectBreathing(type);
  };

  return (
    <section className="relative min-h-screen w-full py-24 px-6 bg-gradient-to-b from-[#0c0c1a] via-[#0f0f20] to-[#0c0c1a]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-wisteria-light text-sm tracking-[0.5em] mb-4 uppercase"
            initial={{ opacity: 0, letterSpacing: '2em' }}
            whileInView={{ opacity: 1, letterSpacing: '0.5em' }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            ARC 2 — Choose Your Path
          </motion.p>

          <h2 className="anime-title text-white mb-6">
            Breathing Selection
          </h2>

          <p className="anime-subtitle text-gray-400 max-w-2xl mx-auto">
            The Demon Slayer Corps practices five ancient breathing styles.
            Each grants unique powers to those who master it.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {Object.entries(BREATHING_CONFIG).map(([type, config], index) => (
            <BreathingCard
              key={type}
              type={type}
              config={config}
              isSelected={selectedBreathing === type}
              onSelect={handleSelect}
              index={index}
            />
          ))}
        </div>

        <AnimatePresence>
          {selectedBreathing !== 'none' && (
            <motion.div
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
            >
              <motion.div
                className="inline-block px-8 py-4 rounded-lg"
                style={{
                  background: `linear-gradient(135deg, ${BREATHING_CONFIG[selectedBreathing].color}20, transparent)`,
                  border: `1px solid ${BREATHING_CONFIG[selectedBreathing].color}50`,
                }}
                animate={{
                  boxShadow: [
                    `0 0 20px ${BREATHING_CONFIG[selectedBreathing].color}30`,
                    `0 0 40px ${BREATHING_CONFIG[selectedBreathing].color}50`,
                    `0 0 20px ${BREATHING_CONFIG[selectedBreathing].color}30`,
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <p className="text-white font-cinzel text-lg">
                  You have chosen{' '}
                  <span style={{ color: BREATHING_CONFIG[selectedBreathing].color }}>
                    {BREATHING_CONFIG[selectedBreathing].title}
                  </span>
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  This path will guide you through the festival
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
