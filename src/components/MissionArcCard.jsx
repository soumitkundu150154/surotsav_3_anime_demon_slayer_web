import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useArcFilter } from '../context/ArcFilterContext';
import { useBreathing } from '../context/BreathingContext';
import { ManthanArc } from './ManthanArc';
import { Flame, Waves, Zap, Wind, PawPrint, X, Clock, Users, Trophy, FilterX } from 'lucide-react';

const BREATHING_ICONS = {
  flame: Flame,
  water: Waves,
  thunder: Zap,
  wind: Wind,
  beast: PawPrint,
};

const EVENTS_DATA = [
  {
    id: 1,
    title: 'Flash Mob',
    category: 'flame',
    description: 'The ground transforms into a battlefield of synchronized energy. Performers move as one, creating a spectacle of rhythm and motion that ignites the festival spirit.',
    details: 'An energetic dance performance where participants move in perfect synchronization. This is the spark that sets everything in motion — a burst of collective energy that transforms silence into celebration.',
    date: 'Day 1 - Opening',
    participants: 'All welcome',
    prize: 'Performance Spotlight',
    arc: 'Mobmania',
  },
  {
    id: 2,
    title: 'Poster Reveal',
    category: 'flame',
    description: 'The unveiling of the official fest poster stands as the mission banner — the signal that the journey has begun.',
    details: 'Witness the grand unveiling of the official Surotsav 2026 poster. This moment marks the official beginning of the festival journey, revealing the visual identity that will guide us through the celebration.',
    date: 'Day 1 - Opening',
    participants: 'All attendees',
    prize: 'Exclusive Merchandise',
    arc: 'Mobmania',
  },
  {
    id: 3,
    title: 'Manthan Opening',
    category: 'water',
    description: 'Forge innovation at the Swordsmith Village. Technical events that challenge your engineering spirit and creative problem-solving.',
    details: 'Robotics, coding competitions, and engineering challenges await. Craft your own Nichirin blade of innovation.',
    date: 'Day 2 - All Day',
    participants: 'Open to all',
    prize: 'Tech Prizes + Internship Opportunities',
    arc: 'Manthan',
  },
  {
    id: 4,
    title: 'Udaan Athletics',
    category: 'thunder',
    description: 'The Final Selection awaits. Athletic prowess and competitive spirit determine who joins the Corps.',
    details: 'Sports competitions, athletic events, and physical challenges. Prove your worth through speed, strength, and endurance.',
    date: 'Day 1-2',
    participants: 'Individual & Team events',
    prize: 'Medals + Sports Gear',
    arc: 'Udaan',
  },
  {
    id: 5,
    title: 'Tarang Festival',
    category: 'wind',
    description: 'The Festival Arc begins. Cultural celebrations that flow like the wind across our campus.',
    details: 'Music, dance, art exhibitions, and cultural showcases. Express yourself through the traditional and modern arts.',
    date: 'Day 2 - Evening',
    participants: 'All students welcome',
    prize: 'Cultural Trophies',
    arc: 'Tarang',
  },
  {
    id: 6,
    title: 'Nexus Arena',
    category: 'beast',
    description: 'Unleash your wild side in creative competitions. Gaming, art battles, and freestyle challenges.',
    details: 'Gaming tournaments, art duels, and creative face-offs. Channel the Beast Breathing ferocity.',
    date: 'Day 1-2',
    participants: 'Individual competitions',
    prize: 'Gaming Gear + Art Supplies',
    arc: 'Hashira Training',
  },
];

function EventCard({ event, onClick }) {
  const Icon = BREATHING_ICONS[event.category];
  const { BREATHING_STYLES } = useBreathing();
  const config = BREATHING_STYLES[event.category];

  return (
    <motion.div
      className="relative cursor-pointer"
      whileHover={{ scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onClick(event)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="absolute inset-0 rounded-xl"
        style={{
          background: `linear-gradient(135deg, ${config.color}20, transparent)`,
          border: `1px solid ${config.color}30`,
        }}
        whileHover={{
          boxShadow: `0 0 40px ${config.color}40`,
          borderColor: `${config.color}60`,
        }}
      />

      <div className="relative p-6">
        <div className="flex items-start justify-between mb-4">
          <motion.div
            className="w-12 h-12 rounded-lg flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${config.color}, ${config.particleColor})`,
            }}
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.8 }}
          >
            <Icon className="text-white" size={24} />
          </motion.div>

          <span
            className="text-xs uppercase tracking-wider px-2 py-1 rounded"
            style={{
              background: `${config.color}20`,
              color: config.color,
            }}
          >
            {config.name}
          </span>
        </div>

        <h3 className="text-2xl font-cinzel font-bold text-white mb-2">
          {event.title}
        </h3>

        <p className="text-sm text-gray-400 mb-4 leading-relaxed">
          {event.description}
        </p>

        <div className="flex items-center gap-4 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <Clock size={14} />
            {event.date}
          </span>
          <span className="flex items-center gap-1">
            <Users size={14} />
            {event.participants}
          </span>
        </div>

        <motion.div
          className="mt-4 text-xs uppercase tracking-widest"
          style={{ color: config.color }}
          initial={{ opacity: 0.7 }}
          whileHover={{ opacity: 1 }}
        >
          {event.arc}
        </motion.div>
      </div>
    </motion.div>
  );
}

function EventModal({ event, onClose }) {
  const { BREATHING_STYLES } = useBreathing();
  const config = BREATHING_STYLES[event.category];
  const Icon = BREATHING_ICONS[event.category];

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      <motion.div
        className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-2xl"
        style={{
          background: 'linear-gradient(180deg, #1a1a2e, #0f0f1a)',
          border: `2px solid ${config.color}50`,
        }}
        initial={{ scale: 0.8, y: 50, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.8, y: 50, opacity: 0 }}
        transition={{ type: 'spring', damping: 25 }}
      >
        <motion.div
          className="absolute inset-1 rounded-xl opacity-50"
          style={{
            background: `radial-gradient(ellipse at top, ${config.color}20, transparent 70%)`,
          }}
        />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors"
        >
          <X className="text-white" size={20} />
        </button>

        <div className="relative p-8">
          <motion.div
            className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 mx-auto"
            style={{
              background: `linear-gradient(135deg, ${config.color}, ${config.particleColor})`,
              boxShadow: `0 0 40px ${config.color}60`,
            }}
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Icon className="text-white" size={40} />
          </motion.div>

          <motion.h2
            className="text-4xl font-cinzel font-black text-center mb-2"
            style={{ color: config.color }}
          >
            {event.title}
          </motion.h2>

          <p className="text-center text-gray-400 text-sm mb-8">{event.arc}</p>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-cinzel text-white mb-2">Mission Briefing</h3>
              <p className="text-gray-300 leading-relaxed">{event.details}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div
                className="p-4 rounded-lg"
                style={{ background: `${config.color}10` }}
              >
                <div className="flex items-center gap-2 text-gray-400 text-sm mb-1">
                  <Clock size={16} />
                  When
                </div>
                <p className="text-white">{event.date}</p>
              </div>

              <div
                className="p-4 rounded-lg"
                style={{ background: `${config.color}10` }}
              >
                <div className="flex items-center gap-2 text-gray-400 text-sm mb-1">
                  <Users size={16} />
                  Who
                </div>
                <p className="text-white">{event.participants}</p>
              </div>
            </div>

            <div
              className="p-6 rounded-xl text-center"
              style={{
                background: `linear-gradient(135deg, ${config.color}20, transparent)`,
                border: `1px solid ${config.color}30`,
              }}
            >
              <div className="flex items-center justify-center gap-2 text-gray-400 text-sm mb-2">
                <Trophy size={20} />
                Reward
              </div>
              <p className="text-xl font-cinzel text-white">{event.prize}</p>
            </div>

            <motion.button
              className="w-full py-4 rounded-xl font-cinzel font-bold text-lg"
              style={{
                background: `linear-gradient(135deg, ${config.color}, ${config.particleColor})`,
                color: 'white',
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Accept Mission
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function MissionArcs() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const { selectedArcFilter, clearFilter } = useArcFilter();

  // Render special Manthan arc component when Manthan is selected
  if (selectedArcFilter === 'Manthan') {
    return <ManthanArc />;
  }

  // Filter events based on selected arc
  const filteredEvents = selectedArcFilter
    ? EVENTS_DATA.filter((event) => event.arc === selectedArcFilter)
    : EVENTS_DATA;

  return (
    <section className="relative min-h-screen w-full py-24 px-6 bg-gradient-to-b from-[#0c0c1a] via-[#0f0f20] to-[#0c0c1a]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-wisteria-light text-sm tracking-[0.5em] mb-4 uppercase">
            ARC 5 — Mission Arcs
          </p>

          <h2 className="anime-title text-white mb-6">
            {selectedArcFilter ? `${selectedArcFilter} Missions` : 'Available Missions'}
          </h2>

          <p className="anime-subtitle text-gray-400 max-w-2xl mx-auto">
            {selectedArcFilter
              ? `Explore missions from the ${selectedArcFilter} arc. Each mission is waiting for worthy participants.`
              : 'Each event is a mission waiting for worthy slayers. Choose your path and prove your skills.'}
          </p>

          {/* Clear Filter Button */}
          {selectedArcFilter && (
            <motion.button
              className="mt-6 px-6 py-2 rounded-full flex items-center gap-2 mx-auto"
              style={{
                background: 'rgba(162, 155, 254, 0.2)',
                border: '1px solid rgba(162, 155, 254, 0.5)',
                color: '#a29bfe',
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={clearFilter}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <FilterX size={16} />
              <span>Show All Missions</span>
            </motion.button>
          )}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} onClick={setSelectedEvent} />
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-gray-500">No missions available for this arc yet.</p>
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {selectedEvent && (
          <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
