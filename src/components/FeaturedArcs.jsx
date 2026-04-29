import React from 'react';
import { motion } from 'framer-motion';
import { useArcFilter } from '../context/ArcFilterContext';
import { useBreathing } from '../context/BreathingContext';
import { Sparkles, Sword, Crown, Music, ChevronRight } from 'lucide-react';

const FEATURED_ARCS = [
  {
    id: 1,
    title: 'Mobmania',
    subtitle: 'The Opening Arc',
    tagline: 'The Spark That Sets Everything in Motion',
    description: 'Mobmania marks the beginning of the journey — where silence breaks into rhythm, and anticipation turns into celebration. The unveiling of the official fest poster stands as the mission banner, followed by the Flash Mob that transforms the ground into a battlefield of synchronized energy. This is not just an inauguration. This is the spark that sets everything in motion.',
    highlights: ['Flash Mob', 'Poster Reveal', 'Opening Ceremony', 'Stage Performances'],
    color: '#e63946',
    icon: Sparkles,
    episode: 'Arc 1',
  },
  {
    id: 2,
    title: 'Manthan',
    subtitle: 'The Tech War ARC',
    tagline: 'Forge Your Legacy Through Trials of Fire',
    description: 'In the depths of the Swordsmith Village, where innovation meets ancient craftsmanship, a new challenge awaits. Manthan is not merely a competition—it is a crucible where raw potential is forged into excellence through three trials of increasing difficulty.',
    highlights: ['Chapter 1: Initiation', 'Chapter 2: Trials', 'Chapter 3: Final Confrontation', 'Multi-stage Campaign'],
    color: '#3498db',
    icon: Sword,
    episode: 'Arc 2',
  },
  {
    id: 3,
    title: 'Udaan',
    subtitle: 'The Rising ARC',
    tagline: 'Prove Your Worth',
    description: 'The Final Selection awaits on Mount Sagiri. Only those with true strength and determination will survive the trials and earn their place among the Corps.',
    highlights: ['Athletic Events', 'Endurance Challenges', 'Team Sports', 'Final Trials'],
    color: '#f1c40f',
    icon: Crown,
    episode: 'Arc 3',
  },
  {
    id: 4,
    title: 'Tarang',
    subtitle: 'The Celebration ARC',
    tagline: 'Celebrate Victory',
    description: 'The Festival Arc brings together all slayers for a celebration of culture, music, and unity. The ultimate culmination of your journey through the night.',
    highlights: ['Music Festival', 'Art Exhibitions', 'Cultural Parade', 'Closing Ceremony'],
    color: '#2ecc71',
    icon: Music,
    episode: 'Arc 3',
  },
];

function ArcCard({ arc, index }) {
  const Icon = arc.icon;
  const { filterByArc } = useArcFilter();
  const isEven = index % 2 === 0;

  const handleClick = () => {
    filterByArc(arc.title);
  };

  return (
    <motion.div
      className={`relative flex flex-col-reverse lg:flex-row items-center gap-8 py-16 ${
        isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
      }`}
      initial={{ opacity: 0, x: isEven ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="relative flex-1 cursor-pointer group"
        onClick={handleClick}
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
              className="mt-4 flex items-center gap-2 text-sm"
              style={{ color: arc.color }}
              whileHover={{ x: 10 }}
            >
              <span>View Missions</span>
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

export function FeaturedArcs() {
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
            />
          ))}
        </div>
      </div>
    </section>
  );
}
