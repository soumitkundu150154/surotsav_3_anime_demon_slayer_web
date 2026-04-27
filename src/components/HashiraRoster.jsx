import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useBreathing } from '../context/BreathingContext';
import { Flame, Waves, Zap, Wind, PawPrint, X } from 'lucide-react';

const TEAM_MEMBERS = [
  {
    id: 1,
    name: 'Tanaka Rengoku',
    role: 'Flame Hashira',
    title: 'Festival Director',
    breathing: 'flame',
    description: 'Sets your heart ablaze with passion. Leads the entire festival with unwavering resolve.',
    quote: 'Set your heart ablaze!',
    color: '#e63946',
  },
  {
    id: 2,
    name: 'Giyu Tomioka',
    role: 'Water Hashira',
    title: 'Technical Lead',
    breathing: 'water',
    description: 'Flowing and adaptable, ensuring smooth execution of all technical aspects.',
    quote: 'Feel the rage. The powerful, pure rage.',
    color: '#3498db',
  },
  {
    id: 3,
    name: 'Zenitsu Agatsuma',
    role: 'Thunder Hashira',
    title: 'Marketing Lead',
    breathing: 'thunder',
    description: 'Strikes fast with creative campaigns that electrify the audience.',
    quote: 'If you master one thing, you become proficient at all.',
    color: '#f1c40f',
  },
  {
    id: 4,
    name: 'Sanemi Shinazugawa',
    role: 'Wind Hashira',
    title: 'Operations Lead',
    breathing: 'wind',
    description: 'Cuts through obstacles like a gale, keeping operations running smoothly.',
    quote: 'The strong should save the weak.',
    color: '#2ecc71',
  },
  {
    id: 5,
    name: 'Inosuke Hashibira',
    role: 'Beast Hashira',
    title: 'Creative Lead',
    breathing: 'beast',
    description: 'Wild and untamed creativity that brings unique experiences to life.',
    quote: 'I am Inosuke Hashibira!',
    color: '#9b59b6',
  },
  {
    id: 6,
    name: 'Shinobu Kocho',
    role: 'Insect Hashira',
    title: 'Design Lead',
    breathing: 'beast',
    description: 'Elegant and precise, crafting beautiful visual experiences.',
    quote: 'I am angry. Angry at myself.',
    color: '#9b59b6',
  },
];

const BREATHING_ICONS = {
  flame: Flame,
  water: Waves,
  thunder: Zap,
  wind: Wind,
  beast: PawPrint,
};

function MemberCard({ member, onClick }) {
  const Icon = BREATHING_ICONS[member.breathing];
  const { BREATHING_STYLES } = useBreathing();
  const config = BREATHING_STYLES[member.breathing];

  return (
    <motion.div
      className="relative cursor-pointer"
      onClick={() => onClick(member)}
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
          background: `linear-gradient(135deg, ${member.color}20, transparent)`,
          border: `2px solid ${member.color}40`,
        }}
        whileHover={{
          boxShadow: `0 0 60px ${member.color}50`,
          borderColor: `${member.color}80`,
        }}
      >
        <div className="absolute inset-4 rounded-full flex items-center justify-center">
          <motion.div
            className="w-full h-full rounded-full flex items-center justify-center"
            style={{
              background: `radial-gradient(circle at center, ${member.color}30, transparent)`,
            }}
            animate={{
              rotate: [0, 360],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            <Icon size={48} style={{ color: member.color }} />
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-0 left-0 right-0 p-4 text-center"
          style={{
            background: `linear-gradient(to top, ${member.color}40, transparent)`,
          }}
        >
          <h3 className="font-cinzel font-bold text-white text-lg">{member.name}</h3>
          <p className="text-xs uppercase tracking-wider" style={{ color: member.color }}>
            {member.role}
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

function MemberModal({ member, onClose }) {
  const Icon = BREATHING_ICONS[member.breathing];

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
        className="relative max-w-lg w-full rounded-2xl overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #1a1a2e, #0f0f1a)',
          border: `2px solid ${member.color}50`,
        }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: 'spring', damping: 25 }}
      >
        <div
          className="h-40 relative overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${member.color}40, transparent)`,
          }}
        >
          <motion.div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at center, ${member.color}30, transparent)`,
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
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-32 h-32 rounded-full flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${member.color}, ${member.color}dd)`,
              border: '4px solid #1a1a2e',
            }}
          >
            <Icon size={48} className="text-white" />
          </div>
        </div>

        <div className="pt-20 pb-8 px-8 text-center">
          <h2 className="text-3xl font-cinzel font-black text-white mb-1">{member.name}</h2>
          <p className="text-lg mb-1" style={{ color: member.color }}>{member.role}</p>
          <p className="text-gray-400 text-sm mb-6">{member.title}</p>

          <div
            className="p-4 rounded-lg mb-6 italic"
            style={{ background: `${member.color}10` }}
          >
            <p className="text-gray-300">&ldquo;{member.quote}&rdquo;</p>
          </div>

          <p className="text-gray-400 leading-relaxed">{member.description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function HashiraRoster() {
  const [selectedMember, setSelectedMember] = useState(null);

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
            ARC 6 — Hashira Headquarters
          </p>

          <h2 className="anime-title text-white mb-6">
            The Hashira Assembly
          </h2>

          <p className="anime-subtitle text-gray-400 max-w-2xl mx-auto">
            The elite of the Demon Slayer Corps. Each Hashira represents the pinnacle
            of their breathing style and guides the festival to victory.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <motion.div
              className="w-[600px] h-[600px] rounded-full border-2 border-wisteria"
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            />
          </div>

          <div className="relative grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {TEAM_MEMBERS.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <MemberCard member={member} onClick={setSelectedMember} />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 text-sm">
            Click on a Hashira to learn more about their role
          </p>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedMember && (
          <MemberModal member={selectedMember} onClose={() => setSelectedMember(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
