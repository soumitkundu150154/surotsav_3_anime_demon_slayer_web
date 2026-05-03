import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useBreathing } from '../context/BreathingContext';
import { Flame, Waves, Zap, Wind, PawPrint, Lock, AlertTriangle } from 'lucide-react';

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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <motion.button
        onClick={() => onSelect(type)}
        className={`relative w-full p-3 sm:p-4 md:p-6 text-left transition-all duration-500 ${
          isSelected ? 'z-10' : 'z-0'
        }`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          className="absolute inset-0 rounded-lg sm:rounded-xl"
          style={{
            background: isSelected
              ? `linear-gradient(135deg, ${config.color}20, transparent)`
              : 'rgba(255,255,255,0.03)',
            border: `1px solid ${isSelected ? config.color : 'rgba(255,255,255,0.1)'}`,
          }}
          animate={{
            boxShadow: isSelected
              ? `0 0 30px ${config.color}40, inset 0 0 30px ${config.color}10`
              : 'none',
          }}
        />

        {isSelected && (
          <motion.div
            className="absolute inset-0 rounded-lg sm:rounded-xl"
            style={{
              background: `radial-gradient(circle at center, ${config.color}15, transparent 70%)`,
            }}
            animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        )}

        <div className="relative z-10">
          <motion.div
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-2 sm:mb-3 md:mb-4 mx-auto sm:mx-0"
            style={{
              background: isSelected
                ? `linear-gradient(135deg, ${config.color}, ${config.particleColor})`
                : 'rgba(255,255,255,0.05)',
              border: `2px solid ${isSelected ? config.color : 'rgba(255,255,255,0.2)'}`,
            }}
            animate={isSelected ? {
              rotate: [0, 360],
              boxShadow: [
                `0 0 15px ${config.color}40`,
                `0 0 30px ${config.color}60`,
                `0 0 15px ${config.color}40`,
              ],
            } : {}}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          >
            <Icon
              size={20}
              className="sm:w-6 sm:h-6 md:w-7 md:h-7"
              style={{ color: isSelected ? '#fff' : config.color }}
            />
          </motion.div>

          <h3 className="text-sm sm:text-base md:text-xl font-cinzel font-bold mb-1 sm:mb-2 text-center sm:text-left" style={{ color: config.color }}>
            <span className="hidden sm:inline">{config.title}</span>
            <span className="sm:hidden">{config.title.split(' ')[0]}</span>
          </h3>

          <AnimatePresence>
            {isSelected && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-gray-300 text-xs sm:text-sm mb-2 sm:mb-3 leading-relaxed hidden sm:block">
                  {config.description}
                </p>
                <motion.div
                  className="text-[10px] sm:text-xs uppercase tracking-wider py-1.5 sm:py-2 px-2 sm:px-3 rounded"
                  style={{
                    background: `${config.color}20`,
                    color: config.color,
                    borderLeft: `2px solid ${config.color}`,
                  }}
                  initial={{ x: -10, opacity: 0 }}
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
            className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full"
            style={{ background: config.color }}
            animate={{
              scale: [1, 1.4, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
      </motion.button>
    </motion.div>
  );
}

function RequirementWarning() {
  return (
    <motion.div
      className="absolute top-0 left-0 right-0 z-20"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <motion.div
        className="bg-gradient-to-r from-red-900/40 via-red-600/20 to-red-900/40 border-y border-red-500/50 py-2 md:py-3"
        animate={{
          background: [
            'linear-gradient(90deg, rgba(220, 38, 38, 0.4) 0%, rgba(239, 68, 68, 0.2) 50%, rgba(220, 38, 38, 0.4) 100%)',
            'linear-gradient(90deg, rgba(239, 68, 68, 0.5) 0%, rgba(220, 38, 38, 0.3) 50%, rgba(239, 68, 68, 0.5) 100%)',
            'linear-gradient(90deg, rgba(220, 38, 38, 0.4) 0%, rgba(239, 68, 68, 0.2) 50%, rgba(220, 38, 38, 0.4) 100%)',
          ],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-2 md:gap-3 px-3 md:px-4">
          <motion.div
            animate={{
              rotate: [0, 15, -15, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <AlertTriangle size={16} className="text-red-400 md:w-5 md:h-5" />
          </motion.div>
          <p className="text-red-200 text-xs md:text-base font-cinzel text-center">
            <span className="font-bold hidden sm:inline">PATH SELECTION REQUIRED:</span>
            <span className="sm:hidden">TAP a card below ↓</span>
            <span className="hidden sm:inline"> You must choose a breathing style to continue</span>
          </p>
          <motion.div
            animate={{
              rotate: [0, -15, 15, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 1, repeat: Infinity }}
            className="hidden sm:block"
          >
            <AlertTriangle size={16} className="text-red-400 md:w-5 md:h-5" />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function LockOverlay() {
  return (
    <motion.div
      className="absolute bottom-0 left-0 right-0 h-1/4 md:h-1/3 pointer-events-none"
      style={{
        background: 'linear-gradient(to top, rgba(220, 38, 38, 0.15), transparent)',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 md:gap-4">
        <motion.div
          className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-red-500/50 flex items-center justify-center"
          animate={{
            scale: [1, 1.1, 1],
            boxShadow: [
              '0 0 20px rgba(220, 38, 38, 0.3)',
              '0 0 40px rgba(220, 38, 38, 0.5)',
              '0 0 20px rgba(220, 38, 38, 0.3)',
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Lock size={20} className="text-red-400 md:w-7 md:h-7" />
        </motion.div>
        <motion.p
          className="text-red-400 text-xs md:text-sm font-cinzel tracking-wider text-center px-2"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="hidden sm:inline">Content Locked - Select a Breathing Style</span>
          <span className="sm:hidden">Tap a style above to unlock ↓</span>
        </motion.p>
      </div>
    </motion.div>
  );
}

export function BreathingSelector() {
  const { selectedBreathing, selectBreathing } = useBreathing();
  const [showPulse, setShowPulse] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowPulse(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleSelect = (type) => {
    selectBreathing(type);
  };

  const isNoneSelected = selectedBreathing === 'none';

  return (
    <section id="breathing" className="relative min-h-screen w-full py-24 px-6 bg-gradient-to-b from-[#0c0c1a] via-[#0f0f20] to-[#0c0c1a]">
      {isNoneSelected && <RequirementWarning />}
      {isNoneSelected && <LockOverlay />}
      
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

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-4">
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
          {selectedBreathing !== 'none' ? (
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
              
              <motion.div
                className="mt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <motion.div
                  className="inline-flex items-center gap-2 text-wisteria-light/70 text-sm"
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <span>↓ Scroll down to continue your journey</span>
                  <motion.div
                    className="w-2 h-2 rounded-full bg-wisteria"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              className="mt-10 sm:mt-16 text-center"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
            >
              <motion.div
                className="inline-block px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg border border-red-500/30 bg-red-900/20 mx-2"
                animate={showPulse ? {
                  boxShadow: [
                    '0 0 15px rgba(220, 38, 38, 0.2)',
                    '0 0 30px rgba(220, 38, 38, 0.4)',
                    '0 0 15px rgba(220, 38, 38, 0.2)',
                  ],
                } : {}}
                transition={{ duration: 1.5, repeat: showPulse ? Infinity : 0 }}
              >
                {/* Mobile message */}
                <div className="flex items-center gap-2 sm:hidden">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                  >
                    <AlertTriangle size={18} className="text-red-400" />
                  </motion.div>
                  <p className="text-red-300/90 text-sm font-cinzel">
                    Tap any card above to continue ↓
                  </p>
                </div>
                
                {/* Desktop message */}
                <div className="hidden sm:flex items-center gap-3">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                  >
                    <AlertTriangle size={20} className="text-red-400" />
                  </motion.div>
                  <p className="text-red-300/80 text-sm font-cinzel">
                    Select a breathing style above to unlock the path forward
                  </p>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity, delay: 0.25 }}
                  >
                    <AlertTriangle size={20} className="text-red-400" />
                  </motion.div>
                </div>
              </motion.div>
              
              {/* Additional mobile hint */}
              <motion.p
                className="mt-3 text-red-400/60 text-xs sm:hidden"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                The rest of the website is locked until you choose
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
