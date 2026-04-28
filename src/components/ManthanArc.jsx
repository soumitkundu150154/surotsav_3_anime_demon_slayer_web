import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useArcFilter } from '../context/ArcFilterContext';
import { Sword, ChevronRight, X, Users, Trophy, Clock, Target, Zap, Brain, Puzzle, Code, Mic, Scroll, Shield, Gamepad2, Camera, Wrench, Car, Flag, Bot, Plane, Film, Box, MessageSquare } from 'lucide-react';

const MANTHAN_DATA = {
  title: 'Manthan',
  subtitle: 'The Tech War ARC',
  tagline: 'Forge Your Legacy Through Trials of Fire',
  narrative: `In the depths of the Swordsmith Village, where innovation meets ancient craftsmanship, a new challenge awaits. Manthan is not merely a competition—it is a crucible where raw potential is forged into excellence. 

The Tech War ARC demands everything: your intellect, your creativity, your competitive spirit. Through three trials of increasing difficulty, you will face challenges that test the very limits of your abilities. Only those who survive all three chapters will earn their place among the legends.

The forge is lit. The hammer awaits. Will you answer the call?`,
  chapters: [
    {
      id: 'chapter-1',
      number: 1,
      title: 'Initiation',
      subtitle: 'The First Trial',
      description: 'Every legend begins with a first step. Prove your wit and determination.',
      icon: Scroll,
      color: '#f39c12',
      missions: [
        {
          id: 'c1-m1',
          title: 'Treasure Hunt',
          icon: Target,
          description: 'Navigate through clues scattered across the village. Only the sharpest minds will uncover the hidden treasures.',
          details: 'A campus-wide treasure hunt testing problem-solving, teamwork, and quick thinking. Clues lead to locations, locations lead to treasures.',
          difficulty: 'Medium',
          teamSize: '4-5 members',
          duration: '3 hours',
          prize: 'Mystery Box + Certificates',
        },
      ],
    },
    {
      id: 'chapter-2',
      number: 2,
      title: 'Trials',
      subtitle: 'The Gauntlet of Skill',
      description: 'Four trials await, each testing different aspects of your abilities.',
      icon: Shield,
      color: '#e74c3c',
      missionGroups: [
        {
          title: 'Combat Trials',
          icon: Zap,
          description: 'Physical challenges testing agility and precision',
          missions: [
            {
              id: 'c2-m1',
              title: 'Tyre Changing',
              description: 'Speed and precision under pressure. Change a tyre faster than your opponents.',
              icon: Car,
              details: 'Teams compete to change a car tyre in the shortest time. Judged on speed, technique, and safety.',
              difficulty: 'Medium',
              teamSize: '2 members',
              duration: '10 min per team',
              prize: 'Tool Kit + Certificates',
            },
            {
              id: 'c2-m2',
              title: 'Hit the Wicket',
              description: 'Cricket precision challenge. Hit the stumps with unerring accuracy.',
              icon: Target,
              details: 'Players throw cricket balls at wickets from varying distances. Most accurate hitter wins.',
              difficulty: 'Easy',
              teamSize: 'Individual',
              duration: '15 min per round',
              prize: 'Sports Gear',
            },
            {
              id: 'c2-m3',
              title: 'Target the Goal',
              description: 'Football accuracy test. Bend it like Beckham into the target zones.',
              icon: Flag,
              details: 'Shoot footballs at marked target zones on a goal. Points based on accuracy and zone difficulty.',
              difficulty: 'Medium',
              teamSize: 'Individual',
              duration: '10 min per player',
              prize: 'Football Equipment',
            },
          ],
        },
        {
          title: 'Tech Trials',
          icon: Bot,
          description: 'Engineering challenges pushing innovation to the limit',
          missions: [
            {
              id: 'c2-m4',
              title: 'Line Follower',
              description: 'Build a robot that follows the path with machine precision.',
              icon: Bot,
              details: 'Design and program autonomous robots to navigate a complex track. Fastest and most accurate bot wins.',
              difficulty: 'Hard',
              teamSize: '2-3 members',
              duration: '5 min per robot',
              prize: 'Electronics Kit',
            },
            {
              id: 'c2-m5',
              title: 'Robo Race',
              description: 'Speed is everything. Race your robot through the obstacle course.',
              icon: Zap,
              details: 'Remote-controlled robots race through a challenging obstacle course. Speed and control determine the winner.',
              difficulty: 'Medium',
              teamSize: '2 members',
              duration: '3 min per race',
              prize: 'RC Components',
            },
            {
              id: 'c2-m6',
              title: 'UAV Race',
              description: 'Take to the skies. Pilot your drone through aerial obstacles.',
              icon: Plane,
              details: 'Drone racing through a 3D obstacle course. Precision flying through gates and hoops.',
              difficulty: 'Hard',
              teamSize: '2 members (1 pilot, 1 spotter)',
              duration: '5 min per drone',
              prize: 'Drone Parts',
            },
          ],
        },
        {
          title: 'Digital Arena',
          icon: Gamepad2,
          description: 'Esports battles where champions are crowned',
          missions: [
            {
              id: 'c2-m7',
              title: 'BGMI Championship',
              description: 'Battlegrounds Mobile India. Drop, loot, survive, conquer.',
              icon: Gamepad2,
              details: 'Squad-based BGMI tournament. Classic mode with custom room settings. Winner takes all.',
              difficulty: 'Competitive',
              teamSize: '4 members',
              duration: '30 min per match',
              prize: 'Gaming Peripherals + Cash',
            },
            {
              id: 'c2-m8',
              title: 'Free Fire Clash',
              description: 'Fast-paced battle royale action. Quick reflexes, quicker victories.',
              icon: Zap,
              details: 'Garena Free Fire tournament. Squad matches with custom settings. Clutch or get clutched.',
              difficulty: 'Competitive',
              teamSize: '4 members',
              duration: '15 min per match',
              prize: 'Gaming Peripherals',
            },
            {
              id: 'c2-m9',
              title: 'E-Football Masters',
              description: 'Virtual football at its finest. Outplay, outscore, outlast.',
              icon: Trophy,
              details: '1v1 E-Football (PES) tournament. Single elimination bracket. Master of the pitch wins.',
              difficulty: 'Medium',
              teamSize: 'Individual',
              duration: '15 min per match',
              prize: 'Gaming Controller',
            },
          ],
        },
        {
          title: 'Creative Trials',
          icon: Camera,
          description: 'Express creativity through various artistic mediums',
          missions: [
            {
              id: 'c2-m10',
              title: 'Model Making',
              description: 'Build miniature worlds. Craft detailed models from imagination.',
              icon: Box,
              details: 'Create detailed scale models on given themes. Judged on creativity, detail, and presentation.',
              difficulty: 'Medium',
              teamSize: '2-3 members',
              duration: '4 hours',
              prize: 'Art Supplies Kit',
            },
            {
              id: 'c2-m11',
              title: 'Reels Making',
              description: 'Tell stories in seconds. Create viral-worthy short videos.',
              icon: Film,
              details: 'Produce engaging short-form video content. Judged on creativity, editing, and engagement potential.',
              difficulty: 'Easy',
              teamSize: '2-4 members',
              duration: '2 hours',
              prize: 'Content Creator Kit',
            },
            {
              id: 'c2-m12',
              title: 'Photography',
              description: 'Capture moments that speak a thousand words.',
              icon: Camera,
              details: 'Theme-based photography competition. Submit your best shots and explain your vision.',
              difficulty: 'Medium',
              teamSize: 'Individual',
              duration: '3 hours',
              prize: 'Camera Accessories',
            },
          ],
        },
      ],
    },
    {
      id: 'chapter-3',
      number: 3,
      title: 'Final Confrontation',
      subtitle: 'The Ultimate Test',
      description: 'Four final challenges. Only the worthy shall prevail.',
      icon: Sword,
      color: '#9b59b6',
      missions: [
        {
          id: 'c3-m1',
          title: 'Quiz',
          icon: Brain,
          description: 'Knowledge is power. Test your intellect across diverse domains.',
          details: 'General knowledge quiz covering tech, science, current affairs, and pop culture. Fastest correct answers win.',
          difficulty: 'Hard',
          teamSize: '2 members',
          duration: '45 minutes',
          prize: 'Brain Champion Trophy + Books',
        },
        {
          id: 'c3-m2',
          title: 'Debate',
          icon: MessageSquare,
          description: 'Words are weapons. Convince, conquer, claim victory.',
          details: 'Parliamentary style debate on tech and societal topics. Judged on argument quality, rebuttals, and presentation.',
          difficulty: 'Hard',
          teamSize: '2 members',
          duration: '30 min per debate',
          prize: 'Orator Trophy + Mics',
        },
        {
          id: 'c3-m3',
          title: 'Puzzle',
          icon: Puzzle,
          description: 'Every puzzle has a solution. Find it before time runs out.',
          details: 'Escape room style puzzle solving. Teams race against time to solve interconnected puzzles.',
          difficulty: 'Hard',
          teamSize: '4 members',
          duration: '1 hour',
          prize: 'Puzzle Master Trophy + Board Games',
        },
        {
          id: 'c3-m4',
          title: 'Debugging',
          icon: Code,
          description: 'Find the bugs. Fix the code. Save the system.',
          details: 'Code debugging challenge with intentionally buggy programs. Find and fix errors in minimal time.',
          difficulty: 'Hard',
          teamSize: '2 members',
          duration: '45 minutes',
          prize: 'Coder Trophy + Dev Tools License',
        },
      ],
    },
  ],
};

function ChapterCard({ chapter, isExpanded, onToggle }) {
  const Icon = chapter.icon;
  
  return (
    <motion.div
      className="relative mb-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8 }}
    >
      {/* Chapter Header Card */}
      <motion.div
        className="relative cursor-pointer rounded-2xl overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${chapter.color}20, #0f0f1a)`,
          border: `2px solid ${isExpanded ? chapter.color : `${chapter.color}50`}`,
          boxShadow: isExpanded ? `0 0 60px ${chapter.color}40` : 'none',
        }}
        onClick={onToggle}
        whileHover={{ scale: 1.01 }}
      >
        <div className="p-8 flex items-center gap-8">
          {/* Chapter Number */}
          <motion.div
            className="relative w-24 h-24 rounded-2xl flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${chapter.color}, ${chapter.color}dd)`,
              boxShadow: `0 0 40px ${chapter.color}60`,
            }}
            animate={{ 
              boxShadow: [
                `0 0 40px ${chapter.color}60`,
                `0 0 60px ${chapter.color}80`,
                `0 0 40px ${chapter.color}60`,
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-5xl font-black text-white">{chapter.number}</span>
          </motion.div>

          {/* Chapter Info */}
          <div className="flex-1">
            <h3 className="text-3xl font-cinzel font-black text-white mb-2">
              {chapter.title}
            </h3>
            <p className="text-sm uppercase tracking-widest mb-2" style={{ color: chapter.color }}>
              {chapter.subtitle}
            </p>
            <p className="text-gray-400">{chapter.description}</p>
          </div>

          {/* Expand Icon */}
          <motion.div
            className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{ background: `${chapter.color}30` }}
            animate={{ rotate: isExpanded ? 90 : 0 }}
          >
            <ChevronRight size={24} style={{ color: chapter.color }} />
          </motion.div>
        </div>

        {/* Glow Effect */}
        <motion.div
          className="absolute inset-0 opacity-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at 30% 50%, ${chapter.color}20, transparent 70%)`,
          }}
          animate={{ opacity: isExpanded ? 0.5 : 0 }}
        />
      </motion.div>

      {/* Expanded Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pt-6 pl-8">
              {/* Timeline Line */}
              <div 
                className="absolute left-16 top-32 bottom-0 w-0.5"
                style={{ background: `linear-gradient(to bottom, ${chapter.color}50, transparent)` }}
              />

              {/* Mission Groups or Missions */}
              <div className="space-y-6">
                {chapter.missionGroups ? (
                  // Chapter 2 with mission groups
                  chapter.missionGroups.map((group, groupIndex) => (
                    <MissionGroupCard 
                      key={groupIndex} 
                      group={group} 
                      accentColor={chapter.color}
                    />
                  ))
                ) : (
                  // Chapters with direct missions
                  chapter.missions.map((mission) => (
                    <MissionCard 
                      key={mission.id} 
                      mission={mission} 
                      accentColor={chapter.color}
                    />
                  ))
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function MissionGroupCard({ group, accentColor }) {
  const GroupIcon = group.icon;
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="relative ml-8"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      {/* Group Card */}
      <motion.div
        className="p-6 rounded-xl cursor-pointer"
        style={{
          background: `linear-gradient(135deg, ${accentColor}15, #0f0f1a)`,
          border: `1px solid ${accentColor}40`,
        }}
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ scale: 1.01, borderColor: accentColor }}
      >
        <div className="flex items-center gap-4">
          <div 
            className="w-12 h-12 rounded-lg flex items-center justify-center"
            style={{ background: `${accentColor}30` }}
          >
            <GroupIcon size={24} style={{ color: accentColor }} />
          </div>
          <div className="flex-1">
            <h4 className="text-xl font-bold text-white">{group.title}</h4>
            <p className="text-sm text-gray-400">{group.description}</p>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronRight size={20} style={{ color: accentColor }} />
          </motion.div>
        </div>
      </motion.div>

      {/* Missions Grid */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 ml-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {group.missions.map((mission) => (
                <MissionCard 
                  key={mission.id} 
                  mission={mission} 
                  accentColor={accentColor}
                  compact
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function MissionCard({ mission, accentColor, compact = false }) {
  const [showModal, setShowModal] = useState(false);
  const Icon = mission.icon;

  return (
    <>
      <motion.div
        className={`relative p-4 rounded-xl cursor-pointer ${compact ? '' : 'mb-4 ml-8'}`}
        style={{
          background: `linear-gradient(135deg, ${accentColor}10, #0f0f1a)`,
          border: `1px solid ${accentColor}30`,
        }}
        onClick={() => setShowModal(true)}
        whileHover={{ 
          scale: 1.02, 
          borderColor: accentColor,
          boxShadow: `0 0 30px ${accentColor}30`,
        }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="flex items-start gap-3">
          <div 
            className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ background: `${accentColor}25` }}
          >
            <Icon size={20} style={{ color: accentColor }} />
          </div>
          <div className="flex-1 min-w-0">
            <h5 className="font-bold text-white text-sm mb-1">{mission.title}</h5>
            <p className="text-xs text-gray-400 line-clamp-2">{mission.description}</p>
            <div className="flex items-center gap-3 mt-2">
              <span className="text-xs flex items-center gap-1" style={{ color: accentColor }}>
                <Target size={10} />
                {mission.difficulty}
              </span>
              <span className="text-xs text-gray-500 flex items-center gap-1">
                <Users size={10} />
                {mission.teamSize}
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mission Detail Modal */}
      <AnimatePresence>
        {showModal && (
          <MissionModal 
            mission={mission} 
            accentColor={accentColor}
            onClose={() => setShowModal(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

function MissionModal({ mission, accentColor, onClose }) {
  const Icon = mission.icon;

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
        className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-2xl"
        style={{
          background: 'linear-gradient(180deg, #1a1a2e, #0f0f1a)',
          border: `2px solid ${accentColor}50`,
        }}
        initial={{ scale: 0.8, y: 50, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.8, y: 50, opacity: 0 }}
        transition={{ type: 'spring', damping: 25 }}
      >
        {/* Header */}
        <div
          className="h-40 relative overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${accentColor}40, transparent)`,
          }}
        >
          <motion.div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at center, ${accentColor}30, transparent)`,
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
              className="w-20 h-20 rounded-2xl flex items-center justify-center"
              style={{
                background: `linear-gradient(135deg, ${accentColor}, ${accentColor}dd)`,
                boxShadow: `0 0 60px ${accentColor}80`,
              }}
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              <Icon size={40} className="text-white" />
            </motion.div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <h2 className="text-3xl font-cinzel font-black text-white mb-2">{mission.title}</h2>
          <p className="text-lg mb-6" style={{ color: accentColor }}>{mission.description}</p>

          <div 
            className="p-4 rounded-xl mb-6"
            style={{ background: `${accentColor}10`, border: `1px solid ${accentColor}30` }}
          >
            <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-2">Mission Briefing</h3>
            <p className="text-gray-300 leading-relaxed">{mission.details}</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="p-4 rounded-xl text-center" style={{ background: `${accentColor}10` }}>
              <div className="flex items-center justify-center gap-2 text-gray-400 text-sm mb-1">
                <Target size={16} />
                Difficulty
              </div>
              <p className="text-white font-semibold">{mission.difficulty}</p>
            </div>
            <div className="p-4 rounded-xl text-center" style={{ background: `${accentColor}10` }}>
              <div className="flex items-center justify-center gap-2 text-gray-400 text-sm mb-1">
                <Users size={16} />
                Team Size
              </div>
              <p className="text-white font-semibold">{mission.teamSize}</p>
            </div>
            <div className="p-4 rounded-xl text-center" style={{ background: `${accentColor}10` }}>
              <div className="flex items-center justify-center gap-2 text-gray-400 text-sm mb-1">
                <Clock size={16} />
                Duration
              </div>
              <p className="text-white font-semibold">{mission.duration}</p>
            </div>
          </div>

          {/* Prize */}
          <div 
            className="p-6 rounded-xl text-center mb-6"
            style={{
              background: `linear-gradient(135deg, ${accentColor}20, transparent)`,
              border: `1px solid ${accentColor}40`,
            }}
          >
            <div className="flex items-center justify-center gap-2 text-gray-400 text-sm mb-2">
              <Trophy size={20} />
              Victory Reward
            </div>
            <p className="text-xl font-cinzel text-white">{mission.prize}</p>
          </div>

          {/* Register Button */}
          <motion.button
            className="w-full py-4 rounded-xl font-cinzel font-bold text-lg"
            style={{
              background: `linear-gradient(135deg, ${accentColor}, ${accentColor}dd)`,
              color: 'white',
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Accept Mission
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function ManthanArc() {
  const [expandedChapter, setExpandedChapter] = useState(null);

  return (
    <section className="relative min-h-screen w-full py-24 px-6 bg-gradient-to-b from-[#0c0c1a] via-[#0a0a15] to-[#0c0c1a]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="w-32 h-32 mx-auto mb-6 rounded-2xl flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, #3498db, #2980b9)',
              boxShadow: '0 0 60px rgba(52, 152, 219, 0.5)',
            }}
            animate={{
              boxShadow: [
                '0 0 60px rgba(52, 152, 219, 0.3)',
                '0 0 80px rgba(52, 152, 219, 0.6)',
                '0 0 60px rgba(52, 152, 219, 0.3)',
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Sword size={56} className="text-white" />
          </motion.div>

          <p className="text-blue-400 text-sm tracking-[0.5em] mb-4 uppercase">
            {MANTHAN_DATA.subtitle}
          </p>

          <h2 className="anime-title text-white mb-6">
            {MANTHAN_DATA.title}
          </h2>

          <p className="text-2xl font-cinzel mb-8" style={{ color: '#3498db' }}>
            {MANTHAN_DATA.tagline}
          </p>

          {/* Narrative Box */}
          <motion.div
            className="relative p-8 rounded-2xl max-w-3xl mx-auto"
            style={{
              background: 'linear-gradient(135deg, rgba(52, 152, 219, 0.1), rgba(15, 15, 26, 0.8))',
              border: '1px solid rgba(52, 152, 219, 0.3)',
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="absolute top-4 left-4 text-blue-400 opacity-50">
              <Scroll size={24} />
            </div>
            <p className="text-gray-300 leading-relaxed whitespace-pre-line font-serif">
              {MANTHAN_DATA.narrative}
            </p>
            <div className="absolute bottom-4 right-4 text-blue-400 opacity-50">
              <Scroll size={24} />
            </div>
          </motion.div>
        </motion.div>

        {/* Chapters */}
        <div className="space-y-6">
          {MANTHAN_DATA.chapters.map((chapter) => (
            <ChapterCard
              key={chapter.id}
              chapter={chapter}
              isExpanded={expandedChapter === chapter.id}
              onToggle={() => setExpandedChapter(
                expandedChapter === chapter.id ? null : chapter.id
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
