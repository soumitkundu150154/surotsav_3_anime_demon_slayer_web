import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useBreathing } from '../context/BreathingContext';
import { Sparkles, Sword, Crown, Music, ChevronRight, X } from 'lucide-react';

const FEATURED_ARCS = [
  {
    id: 1,
    title: 'Mobmania',
    subtitle: 'Entertainment District Arc',
    tagline: 'Where Legends Are Born',
    description: 'Step into the Entertainment District. A grand theatrical showcase where performers become legends. Dance, drama, and cultural excellence await those brave enough to take the stage.',
    highlights: ['Theatrical Performances', 'Dance Competitions', 'Cultural Exhibitions', 'Grand Finale'],
    color: '#e63946',
    icon: Sparkles,
    episode: 'Season 2 - Episode 1',
  },
  {
    id: 2,
    title: 'Manthan',
    subtitle: 'Swordsmith Village Arc',
    tagline: 'Forge Your Legacy',
    description: 'At the Swordsmith Village, innovation meets craftsmanship. Technical competitions, robotics challenges, and engineering marvels await those who seek to forge the future.',
    highlights: ['Robotics Championship', 'Coding Wars', 'Innovation Showcase', 'Engineering Challenges'],
    color: '#3498db',
    icon: Sword,
    episode: 'Season 2 - Episode 2',
  },
  {
    id: 3,
    title: 'Udaan',
    subtitle: 'Final Selection Arc',
    tagline: 'Prove Your Worth',
    description: 'The Final Selection awaits on Mount Sagiri. Only those with true strength and determination will survive the trials and earn their place among the Corps.',
    highlights: ['Athletic Events', 'Endurance Challenges', 'Team Sports', 'Final Trials'],
    color: '#f1c40f',
    icon: Crown,
    episode: 'Season 1 - Episode 1',
  },
  {
    id: 4,
    title: 'Tarang',
    subtitle: 'Festival Arc',
    tagline: 'Celebrate Victory',
    description: 'The Festival Arc brings together all slayers for a celebration of culture, music, and unity. The ultimate culmination of your journey through the night.',
    highlights: ['Music Festival', 'Art Exhibitions', 'Cultural Parade', 'Closing Ceremony'],
    color: '#2ecc71',
    icon: Music,
    episode: 'Season 3 - Episode 1',
  },
];

function ArcCard({ arc, index, onClick }) {
  const Icon = arc.icon;
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className={`relative flex flex-col lg:flex-row items-center gap-8 py-16 ${
        isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
      }`}
      initial={{ opacity: 0, x: isEven ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="relative flex-1 cursor-pointer group"
        onClick={() => onClick(arc)}
        whileHover={{ scale: 1.02 }}
      >
        <div
          className="relative aspect-[16/10] rounded-xl overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${arc.color}30, #0f0f1a)`,
            border: `2px solid ${arc.color}50`,
          }}
        >
          <motion.div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(ellipse at center, ${arc.color}20, transparent 70%)`,
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
            <motion.div
              className="w-24 h-24 rounded-full flex items-center justify-center mb-4"
              style={{
                background: `linear-gradient(135deg, ${arc.color}, ${arc.color}dd)`,
                boxShadow: `0 0 40px ${arc.color}60`,
              }}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8 }}
            >
              <Icon size={48} className="text-white" />
            </motion.div>

            <h3 className="text-4xl font-cinzel font-black text-white text-center mb-2">
              {arc.title}
            </h3>

            <p className="text-lg" style={{ color: arc.color }}>
              {arc.tagline}
            </p>

            <motion.div
              className="mt-4 flex items-center gap-2 text-sm text-gray-400"
              whileHover={{ x: 10 }}
            >
              <span>View Arc Details</span>
              <ChevronRight size={16} />
            </motion.div>
          </div>

          <motion.div
            className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs"
            style={{
              background: `${arc.color}30`,
              color: arc.color,
              border: `1px solid ${arc.color}50`,
            }}
          >
            {arc.episode}
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="flex-1 text-center lg:text-left"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <motion.p
          className="text-sm tracking-widest uppercase mb-2"
          style={{ color: arc.color }}
        >
          {arc.subtitle}
        </motion.p>

        <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
          {arc.description}
        </p>

        <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
          {arc.highlights.map((highlight, i) => (
            <motion.span
              key={i}
              className="px-3 py-1 rounded-full text-xs"
              style={{
                background: `${arc.color}15`,
                color: arc.color,
                border: `1px solid ${arc.color}30`,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
            >
              {highlight}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

function ArcModal({ arc, onClose }) {
  const Icon = arc.icon;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="absolute inset-0 bg-black/90 backdrop-blur-lg"
        onClick={onClose}
      />

      <motion.div
        className="relative max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-2xl"
        style={{
          background: 'linear-gradient(180deg, #1a1a2e, #0f0f1a)',
          border: `2px solid ${arc.color}50`,
        }}
        initial={{ scale: 0.8, y: 50, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.8, y: 50, opacity: 0 }}
        transition={{ type: 'spring', damping: 25 }}
      >
        <div
          className="h-48 relative overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${arc.color}40, transparent)`,
          }}
        >
          <motion.div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at center, ${arc.color}30, transparent)`,
            }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center bg-black/50 hover:bg-black/70 transition-colors"
          >
            <X className="text-white" size={20} />
          </button>

          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-32 h-32 rounded-full flex items-center justify-center"
              style={{
                background: `linear-gradient(135deg, ${arc.color}, ${arc.color}dd)`,
                boxShadow: `0 0 60px ${arc.color}80`,
              }}
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              <Icon size={56} className="text-white" />
            </motion.div>
          </div>
        </div>

        <div className="p-8">
          <div className="text-center mb-8">
            <p className="text-sm tracking-widest uppercase mb-2" style={{ color: arc.color }}>
              {arc.subtitle}
            </p>
            <h2 className="text-4xl font-cinzel font-black text-white mb-2">{arc.title}</h2>
            <p className="text-xl text-gray-300">{arc.tagline}</p>
          </div>

          <p className="text-gray-400 leading-relaxed mb-8 text-center max-w-2xl mx-auto">
            {arc.description}
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            {arc.highlights.map((highlight, i) => (
              <motion.div
                key={i}
                className="p-4 rounded-lg text-center"
                style={{
                  background: `${arc.color}10`,
                  border: `1px solid ${arc.color}30`,
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
              >
                <span className="text-white text-sm">{highlight}</span>
              </motion.div>
            ))}
          </div>

          <motion.button
            className="w-full py-4 rounded-xl font-cinzel font-bold text-lg"
            style={{
              background: `linear-gradient(135deg, ${arc.color}, ${arc.color}dd)`,
              color: 'white',
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Enter This Arc
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function FeaturedArcs() {
  const [selectedArc, setSelectedArc] = useState(null);

  return (
    <section className="relative min-h-screen w-full py-24 px-6 bg-gradient-to-b from-[#0c0c1a] via-[#0a0a15] to-[#0c0c1a]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-wisteria-light text-sm tracking-[0.5em] mb-4 uppercase">
            ARC 4 — Featured Arcs
          </p>

          <h2 className="anime-title text-white mb-6">
            Story Arcs
          </h2>

          <p className="anime-subtitle text-gray-400 max-w-2xl mx-auto">
            The festival unfolds across multiple arcs, each with its own challenges,
            triumphs, and legendary moments waiting to be written.
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-wisteria/30 to-transparent hidden lg:block"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          />

          {FEATURED_ARCS.map((arc, index) => (
            <ArcCard
              key={arc.id}
              arc={arc}
              index={index}
              onClick={setSelectedArc}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedArc && (
          <ArcModal arc={selectedArc} onClose={() => setSelectedArc(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
