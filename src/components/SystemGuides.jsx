import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, EyeOff, Sparkles, Crown, Heart, X } from 'lucide-react';

const GUIDES_DATA = {
  title: 'THE NAVIGATORS',
  subtitle: 'The Ubuyashiki Estate',
  narrative: `Beyond the surface of every arc and every mission, there exists a layer that quietly guides the journey — the structure beneath the experience.

  Every path you take, every interaction you feel, every transition you follow has been carefully designed to move with clarity and purpose.

  We do not lead the events.
  We do not stand in the spotlight.

  We build the journey you experience.

  Not to control where you go -
  but to ensure you never feel lost long the way.

The system you navigate, the arcs that unfold, the missions that challenge — all were carefully designed to guide you through this world. Like Kagaya Ubuyashiki guiding the Corps with calm wisdom, and Amane supporting with unwavering grace, we are not the leaders of events, nor the heroes of battles. We are the silent hand that shapes the path, ensuring every interaction feels intentional, every transition seamless, every moment immersive.

We built the vessel. You bring it to life.`,
};

const SYSTEM_GUIDES = [
  {
    id: 'ubuyashiki',
    name: 'Soumit Kundu',
    role: 'System Architect',
    title: 'Designed the structure, flow, and logic of the experience.',
    description: 'With the calm wisdom of the Corps leader, the system was architected to guide every user through their journey. Every arc, every chapter, every mission — structured with purpose and precision.',
    quote: 'Even in darkness, there is a path forward.',
    color: '#a29bfe',
    icon: Crown,
    traits: ['Vision', 'Structure', 'Guidance'],
  },
  {
    id: 'amane',
    name: 'Sayantani Dey',
    role: 'Experience Guide',
    title: 'Refined interactions, balance, and visual harmony of the system.',
    description: 'With graceful precision, every interaction was shaped to feel natural and immersive. The visual harmony, the smooth transitions, the balanced experience — all carefully composed.',
    quote: 'Balance is not found, it is created.',
    color: '#74b9ff',
    icon: Heart,
    traits: ['Harmony', 'Balance', 'Refinement'],
  },
];

function GuideCard({ guide, onClick }) {
  const Icon = guide.icon;

  return (
    <motion.div
      className="relative cursor-pointer"
      onClick={() => onClick(guide)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="relative aspect-square rounded-full overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${guide.color}15, transparent)`,
          border: `2px solid ${guide.color}30`,
        }}
        whileHover={{
          boxShadow: `0 0 60px ${guide.color}40`,
          borderColor: `${guide.color}60`,
        }}
      >
        {/* Inner glow */}
        <div className="absolute inset-4 rounded-full flex items-center justify-center">
          <motion.div
            className="w-full h-full rounded-full flex items-center justify-center"
            style={{
              background: `radial-gradient(circle at center, ${guide.color}20, transparent)`,
            }}
            animate={{
              rotate: [0, 360],
            }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          >
            <Icon size={48} style={{ color: guide.color }} />
          </motion.div>
        </div>

        {/* Bottom text overlay */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 p-4 text-center"
          style={{
            background: `linear-gradient(to top, ${guide.color}30, transparent)`,
          }}
        >
          <h3 className="font-cinzel font-bold text-white text-lg">{guide.name}</h3>
          <p className="text-xs uppercase tracking-wider" style={{ color: guide.color }}>
            {guide.role}
          </p>
        </motion.div>

        {/* Subtle ring animation */}
        <motion.div
          className="absolute inset-0 rounded-full border border-white/5"
          animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.1, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </motion.div>
  );
}

function GuideModal({ guide, onClose }) {
  const Icon = guide.icon;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Card */}
      <motion.div
        className="relative max-w-lg w-full rounded-2xl overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #1a1a2e, #0f0f1a)',
          border: `2px solid ${guide.color}40`,
        }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: 'spring', damping: 25 }}
      >
        {/* Header with gradient */}
        <div
          className="h-40 relative overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${guide.color}30, transparent)`,
          }}
        >
          <motion.div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at center, ${guide.color}20, transparent)`,
            }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center bg-black/50 hover:bg-black/70 transition-colors"
          >
            <X className="text-white" size={20} />
          </button>

          {/* Center icon */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-28 h-28 rounded-full flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${guide.color}, ${guide.color}dd)`,
              border: '4px solid #1a1a2e',
              boxShadow: `0 0 40px ${guide.color}60`,
            }}
          >
            <Icon size={44} className="text-white" />
          </div>
        </div>

        {/* Content */}
        <div className="pt-16 pb-8 px-8 text-center">
          <h2 className="text-3xl font-cinzel font-black text-white mb-1">{guide.name}</h2>
          <p className="text-lg mb-1" style={{ color: guide.color }}>{guide.role}</p>
          <p className="text-gray-400 text-sm mb-6">{guide.title}</p>

          {/* Quote */}
          <div
            className="p-4 rounded-lg mb-6 italic"
            style={{ background: `${guide.color}10`, border: `1px solid ${guide.color}20` }}
          >
            <p className="text-gray-300">&ldquo;{guide.quote}&rdquo;</p>
          </div>

          {/* Description */}
          <p className="text-gray-400 leading-relaxed mb-6">{guide.description}</p>

          {/* Traits */}
          <div className="flex justify-center gap-3">
            {guide.traits.map((trait, i) => (
              <span
                key={i}
                className="px-4 py-1.5 rounded-full text-xs"
                style={{
                  background: `${guide.color}15`,
                  border: `1px solid ${guide.color}30`,
                  color: guide.color,
                }}
              >
                {trait}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function SystemGuides() {
  const [selectedGuide, setSelectedGuide] = useState(null);

  return (
    <section className="relative min-h-screen w-full py-24 px-6 bg-gradient-to-b from-[#0c0c1a] via-[#080810] to-[#0a0a12]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-purple-300/70 text-sm tracking-[0.5em] mb-4 uppercase">
            {GUIDES_DATA.subtitle}
          </p>

          <h2 className="anime-title text-white mb-6">
            {GUIDES_DATA.title}
          </h2>

          <p className="anime-subtitle text-gray-400 max-w-2xl mx-auto">
            The ones who shape the path you walk.
          </p>
        </motion.div>

        {/* Narrative */}
        <motion.div
          className="relative max-w-2xl mx-auto p-8 rounded-xl mb-20"
          style={{
            background: 'linear-gradient(135deg, rgba(162, 155, 254, 0.05), rgba(10, 10, 18, 0.8))',
            border: '1px solid rgba(162, 155, 254, 0.1)',
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-gray-300 leading-relaxed whitespace-pre-line text-sm md:text-base">
            {GUIDES_DATA.narrative}
          </p>
        </motion.div>

        {/* Guide Cards - Hashira Style */}
        <div className="relative max-w-2xl mx-auto">
          {/* Decorative ring */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <motion.div
              className="w-[400px] h-[400px] rounded-full border-2 border-purple-400/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            />
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 max-w-lg mx-auto">
            {SYSTEM_GUIDES.map((guide, index) => (
              <motion.div
                key={guide.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <GuideCard guide={guide} onClick={setSelectedGuide} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Hint text */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 text-sm">
            Click on a guide to learn more about their role
          </p>
        </motion.div>

        {/* Closing element */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-purple-400/30 to-transparent" />
            <Sparkles size={14} className="text-purple-300/50" />
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-purple-400/30 to-transparent" />
          </div>
          <p className="text-gray-500 text-sm italic">
            "The journey continues, guided by those who remain unseen."
          </p>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedGuide && (
          <GuideModal guide={selectedGuide} onClose={() => setSelectedGuide(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
