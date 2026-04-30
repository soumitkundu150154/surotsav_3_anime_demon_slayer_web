import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronRight, X, Users, Trophy, Clock, Target, Scroll,
  Sparkles, Sword, Crown, Music, Zap, Brain, Puzzle, Code, Mic, MessageSquare,
  Car, Flag, Bot, Plane, Box, Film, Camera, Gamepad2, Star, Palette, User, Drama,
  Sparkle
} from 'lucide-react';

// Poster image mapping - maps mission titles to their poster image files
const POSTER_MAP = {
  'Treasure Hunt': 'treasure_hunt_event.jpeg',
  'Tyre Changing': 'tyre_changing.jpeg',
  'Hit the Wicket': 'Hit_the_wicket.jpeg',
  'Target the Goal': 'Target_the_goal.jpeg',
  'Line Follower': 'Line_follower.jpeg',
  'Robo Race': 'robo_race.jpeg',
  'UAV Race': 'uav_race.jpeg',
  'BGMI Championship': 'BGMI.jpeg',
  'Free Fire Clash': 'Free-Fire_event.jpeg',
  'E-Football Masters': 'E-Football.jpeg',
  'Model Making': 'Model_making_event.jpeg',
  'Reels Making': 'reels.jpeg',
  'Photography': 'photography.jpeg',
  'Quiz': 'quize_event.jpeg',
  'Debate': 'debate_event.jpeg',
  'Puzzle': 'puzzel_event.jpeg',
  'Debugging': 'debugging_event.jpeg',
  'Flash Mob': 'flash_mob.jpeg',
};

function getMissionPoster(missionTitle) {
  return POSTER_MAP[missionTitle] || null;
}

// Arc configurations with chapters and missions
export const ARCS_DATA = {
  Mobmania: {
    title: 'Mobmania',
    subtitle: 'The Opening ARC',
    tagline: 'The Spark That Sets Everything in Motion',
    color: '#e63946',
    iconName: 'Sparkles',
    narrative: `The festival awakens here.

Mobmania marks the beginning of the journey — where silence breaks into rhythm, and anticipation turns into celebration. Inspired by the vibrant energy of the Entertainment District, this arc ignites the stage with movement, music, and visual storytelling.

The unveiling of the official fest poster stands as the mission banner — the signal that the journey has begun. As the beats rise, the Flash Mob transforms the ground into a battlefield of synchronized energy, where performers move as one, creating a spectacle of rhythm and motion.

This is not just an inauguration. This is the spark that sets everything in motion.`,
    chapters: [
      {
        id: 'mob-ch1',
        number: 1,
        title: 'The Awakening',
        subtitle: 'The Journey Begins',
        description: 'The first pulse of energy that signals the start of something extraordinary.',
        color: '#e63946',
        missions: [
          {
            id: 'mob-m1',
            title: 'Poster Reveal',
            description: 'The unveiling of the official fest poster stands as the mission banner — the signal that the journey has begun.',
            details: 'Witness the grand unveiling of the official Surotsav 2026 poster. This moment marks the official beginning of the festival journey, revealing the visual identity that will guide us through the celebration.',
            difficulty: 'Ceremonial',
            teamSize: 'All attendees',
            duration: '30 minutes',
            prize: 'Exclusive Merchandise + Poster',
            icon: 'Scroll',
          },
          {
            id: 'mob-m2',
            title: 'Flash Mob',
            description: 'The ground transforms into a battlefield of synchronized energy. Performers move as one, creating a spectacle of rhythm and motion.',
            details: 'An energetic dance performance where participants move in perfect synchronization. This is the spark that sets everything in motion — a burst of collective energy that transforms silence into celebration.',
            difficulty: 'Medium',
            teamSize: 'Open participation',
            duration: '15 minutes',
            prize: 'Performance Spotlight + Certificate',
            icon: 'Zap',
          },
        ],
      },
    ],
  },
  Manthan: {
    title: 'Manthan',
    subtitle: 'The Tech War ARC',
    tagline: 'Forge Your Legacy Through Trials of Fire',
    color: '#3498db',
    iconName: 'Sword',
    narrative: `In the depths of the Swordsmith Village, where innovation meets ancient craftsmanship, a new challenge awaits. Manthan is not merely a competition—it is a crucible where raw potential is forged into excellence. 

The Tech War ARC demands everything: your intellect, your creativity, your competitive spirit. Through three trials of increasing difficulty, you will face challenges that test the very limits of your abilities. Only those who survive all three chapters will earn their place among the legends.

The forge is lit. The hammer awaits. Will you answer the call?`,
    chapters: [
      {
        id: 'man-ch1',
        number: 1,
        title: 'Initiation',
        subtitle: 'The First Trial',
        description: 'Every legend begins with a first step. Prove your wit and determination.',
        color: '#1b66c7',
        missions: [
          {
            id: 'man-m1',
            title: 'Treasure Hunt',
            description: 'Navigate through clues scattered across the village. Only the sharpest minds will uncover the hidden treasures.',
            details: 'A campus-wide treasure hunt testing problem-solving, teamwork, and quick thinking. Clues lead to locations, locations lead to treasures.',
            difficulty: 'Medium',
            teamSize: '4-5 members',
            duration: '3 hours',
            prize: 'Mystery Box + Certificates',
            icon: 'Target',
          },
        ],
      },
      {
        id: 'man-ch2',
        number: 2,
        title: 'Trials',
        subtitle: 'The Gauntlet of Skill',
        description: 'Four trials await, each testing different aspects of your abilities.',
        color: '#1e6bd6',
        missionGroups: [
          {
            title: 'Combat Trials',
            color: '#1431e9',
            missions: [
              {
                id: 'man-m2',
                title: 'Tyre Changing',
                description: 'Speed and precision under pressure. Change a tyre faster than your opponents.',
                details: 'Teams compete to change a car tyre in the shortest time. Judged on speed, technique, and safety.',
                difficulty: 'Medium',
                teamSize: '2 members',
                duration: '10 min per team',
                prize: 'Tool Kit + Certificates',
                icon: 'Car',
              },
              {
                id: 'man-m3',
                title: 'Hit the Wicket',
                description: 'Cricket precision challenge. Hit the stumps with unerring accuracy.',
                details: 'Players throw cricket balls at wickets from varying distances. Most accurate hitter wins.',
                difficulty: 'Easy',
                teamSize: 'Individual',
                duration: '15 min per round',
                prize: 'Sports Gear',
                icon: 'Target',
              },
              {
                id: 'man-m4',
                title: 'Target the Goal',
                description: 'Football accuracy test. Bend it like Beckham into the target zones.',
                details: 'Shoot footballs at marked target zones on a goal. Points based on accuracy and zone difficulty.',
                difficulty: 'Medium',
                teamSize: 'Individual',
                duration: '10 min per player',
                prize: 'Football Equipment',
                icon: 'Flag',
              },
            ],
          },
          {
            title: 'Tech Trials',
            color: '#3498db',
            missions: [
              {
                id: 'man-m5',
                title: 'Line Follower',
                description: 'Build a robot that follows the path with machine precision.',
                details: 'Design and program autonomous robots to navigate a complex track. Fastest and most accurate bot wins.',
                difficulty: 'Hard',
                teamSize: '2-3 members',
                duration: '5 min per robot',
                prize: 'Electronics Kit',
                icon: 'Bot',
              },
              {
                id: 'man-m6',
                title: 'Robo Race',
                description: 'Speed is everything. Race your robot through the obstacle course.',
                details: 'Remote-controlled robots race through a challenging obstacle course. Speed and control determine the winner.',
                difficulty: 'Medium',
                teamSize: '2 members',
                duration: '3 min per race',
                prize: 'RC Components',
                icon: 'Zap',
              },
              {
                id: 'man-m7',
                title: 'UAV Race',
                description: 'Take to the skies. Pilot your drone through aerial obstacles.',
                details: 'Drone racing through a 3D obstacle course. Precision flying through gates and hoops.',
                difficulty: 'Hard',
                teamSize: '2 members (1 pilot, 1 spotter)',
                duration: '5 min per drone',
                prize: 'Drone Parts',
                icon: 'Plane',
              },
            ],
          },
          {
            title: 'Digital Arena',
            color: '#091c97',
            missions: [
              {
                id: 'man-m8',
                title: 'BGMI Championship',
                description: 'Battlegrounds Mobile India. Drop, loot, survive, conquer.',
                details: 'Squad-based BGMI tournament. Classic mode with custom room settings. Winner takes all.',
                difficulty: 'Competitive',
                teamSize: '4 members',
                duration: '30 min per match',
                prize: 'Gaming Peripherals + Cash',
                icon: 'Gamepad2',
              },
              {
                id: 'man-m9',
                title: 'Free Fire Clash',
                description: 'Fast-paced battle royale action. Quick reflexes, quicker victories.',
                details: 'Garena Free Fire tournament. Squad matches with custom settings. Clutch or get clutched.',
                difficulty: 'Competitive',
                teamSize: '4 members',
                duration: '15 min per match',
                prize: 'Gaming Peripherals',
                icon: 'Zap',
              },
              {
                id: 'man-m10',
                title: 'E-Football Masters',
                description: 'Virtual football at its finest. Outplay, outscore, outlast.',
                details: '1v1 E-Football (PES) tournament. Single elimination bracket. Master of the pitch wins.',
                difficulty: 'Medium',
                teamSize: 'Individual',
                duration: '15 min per match',
                prize: 'Gaming Controller',
                icon: 'Trophy',
              },
            ],
          },
          {
            title: 'Creative Trials',
            color: '#0938a7',
            missions: [
              {
                id: 'man-m11',
                title: 'Model Making',
                description: 'Build miniature worlds. Craft detailed models from imagination.',
                details: 'Create detailed scale models on given themes. Judged on creativity, detail, and presentation.',
                difficulty: 'Medium',
                teamSize: '2-3 members',
                duration: '4 hours',
                prize: 'Art Supplies Kit',
                icon: 'Box',
              },
              {
                id: 'man-m12',
                title: 'Reels Making',
                description: 'Tell stories in seconds. Create viral-worthy short videos.',
                details: 'Produce engaging short-form video content. Judged on creativity, editing, and engagement potential.',
                difficulty: 'Easy',
                teamSize: '2-4 members',
                duration: '2 hours',
                prize: 'Content Creator Kit',
                icon: 'Film',
              },
              {
                id: 'man-m13',
                title: 'Photography',
                description: 'Capture moments that speak a thousand words.',
                details: 'Theme-based photography competition. Submit your best shots and explain your vision.',
                difficulty: 'Medium',
                teamSize: 'Individual',
                duration: '3 hours',
                prize: 'Camera Accessories',
                icon: 'Camera',
              },
            ],
          },
        ],
      },
      {
        id: 'man-ch3',
        number: 3,
        title: 'Final Confrontation',
        subtitle: 'The Ultimate Test',
        description: 'Four final challenges. Only the worthy shall prevail.',
        color: '#1b1297',
        missions: [
          {
            id: 'man-m14',
            title: 'Quiz',
            description: 'Knowledge is power. Test your intellect across diverse domains.',
            details: 'General knowledge quiz covering tech, science, current affairs, and pop culture. Fastest correct answers win.',
            difficulty: 'Hard',
            teamSize: '2 members',
            duration: '45 minutes',
            prize: 'Brain Champion Trophy + Books',
            icon: 'Brain',
          },
          {
            id: 'man-m15',
            title: 'Debate',
            description: 'Words are weapons. Convince, conquer, claim victory.',
            details: 'Parliamentary style debate on tech and societal topics. Judged on argument quality, rebuttals, and presentation.',
            difficulty: 'Hard',
            teamSize: '2 members',
            duration: '30 min per debate',
            prize: 'Orator Trophy + Mics',
            icon: 'MessageSquare',
          },
          {
            id: 'man-m16',
            title: 'Puzzle',
            description: 'Every puzzle has a solution. Find it before time runs out.',
            details: 'Escape room style puzzle solving. Teams race against time to solve interconnected puzzles.',
            difficulty: 'Hard',
            teamSize: '4 members',
            duration: '1 hour',
            prize: 'Puzzle Master Trophy + Board Games',
            icon: 'Puzzle',
          },
          {
            id: 'man-m17',
            title: 'Debugging',
            description: 'Find the bugs. Fix the code. Save the system.',
            details: 'Code debugging challenge with intentionally buggy programs. Find and fix errors in minimal time.',
            difficulty: 'Hard',
            teamSize: '2 members',
            duration: '45 minutes',
            prize: 'Coder Trophy + Dev Tools License',
            icon: 'Code',
          },
        ],
      },
    ],
  },
Udaan: {
  title: 'Udaan',
  subtitle: 'The Rising ARC',
  tagline: 'Prove Your Presence',
  color: '#f1c40f',
  iconName: 'Crown',
  narrative: `Every journey begins with a moment of courage. The Rising ARC is where new faces step forward to be seen, heard, and remembered.

Udaan is not just a welcome—it is a journey of expression, confidence, and identity. Through a series of carefully designed rounds, participants reveal their awareness, creativity, and presence.

From the first step to the final spotlight, only those who truly stand out will rise.

The stage is set. The spotlight awaits. Will you claim your place?`,

  chapters: [
    {
      id: 'ud-ch1',
      number: 1,
      title: 'The First Step',
      subtitle: 'The Screening Round',
      description: 'An online MCQ round testing awareness, thinking, and presence of mind.',
      color: '#f39c12',
      missions: [
        {
          id: 'ud-m1',
          title: 'Online MCQ Round',
          description: 'A test of awareness, logic, and quick thinking.',
          details: 'Participants take an online MCQ test based on current affairs, general knowledge, and basic aptitude. Only those who qualify move forward to the next stage.',
          difficulty: 'Elimination Round',
          teamSize: 'Individual',
          duration: '30-45 minutes',
          prize: 'Qualification to next round',
          icon: 'Zap',
        },
      ],
    },

    {
      id: 'ud-ch2',
      number: 2,
      title: 'The Spotlight',
      subtitle: 'Talent & Expression',
      description: 'A stage to showcase individuality through performance and creativity.',
      color: '#f1c40f',
      missions: [
        {
          id: 'ud-m2',
          title: 'Cultural Performance Round',
          description: 'Express yourself through talent, creativity, and confidence.',
          details: 'Qualified participants perform on stage through dance, music, acting, or any creative act. This round evaluates stage presence, originality, and expression.',
          difficulty: 'Creative',
          teamSize: 'Individual',
          duration: '3-5 minutes per participant',
          prize: 'Qualification to final round',
          icon: 'Target',
        },
      ],
    },

    {
      id: 'ud-ch3',
      number: 3,
      title: 'The Final Stand',
      subtitle: 'Judgment & Presence',
      description: 'The ultimate test of confidence, clarity, and personality.',
      color: '#d68910',
      missions: [
        {
          id: 'ud-m3',
          title: 'Final Q&A Round',
          description: 'Where words define presence and personality.',
          details: 'Finalists face a panel of judges in a Q&A session based on situational and general questions. Confidence, clarity of thought, and composure determine the winners.',
          difficulty: 'Final Round',
          teamSize: 'Individual',
          duration: '5-10 minutes per finalist',
          prize: 'Mr. Fresher & Miss Fresher Titles',
          icon: 'Trophy',
        },
      ],
    },
  ],
},
Tarang: {
  title: 'Tarang',
  subtitle: 'The Celebration ARC',
  tagline: 'Feel the Rhythm',
  color: '#2ecc71',
  iconName: 'Music',
  narrative: `As the journey reaches its peak, the Celebration ARC begins.

Tarang is where energy, creativity, and expression come alive on one stage. It is not about competition—it is about experience, rhythm, and unforgettable moments shared together.

From soulful melodies to electrifying beats, the night unfolds as a vibrant celebration of music, performance, and spirit.

Lights rise. Music echoes. The stage is alive.`,

  chapters: [
    {
      id: 'tr-ch1',
      number: 1,
      title: 'The Opening Notes',
      subtitle: 'Live Music Experience',
      description: 'An evening that begins with powerful live performances.',
      color: '#27ae60',
      missions: [
        {
          id: 'tr-m1',
          title: 'Biswarup Live',
          description: 'A soulful live music performance to set the tone for the night.',
          details: 'Experience a captivating live performance by Biswarup (Indian Idol), bringing melody, emotion, and energy to the stage.',
          difficulty: 'Experience',
          teamSize: 'Audience Event',
          duration: 'Live Performance',
          prize: '—',
          icon: 'Music',
        },
        {
          id: 'tr-m2',
          title: 'Tushar Joshi Live',
          description: 'A high-energy musical experience with electrifying vocals.',
          details: 'Witness an unforgettable live performance by Tushar Joshi, filling the stage with powerful vocals and dynamic presence.',
          difficulty: 'Experience',
          teamSize: 'Audience Event',
          duration: 'Live Performance',
          prize: '—',
          icon: 'Mic',
        },
      ],
    },

    {
      id: 'tr-ch2',
      number: 2,
      title: 'The Spotlight',
      subtitle: 'Student Performances',
      description: 'Where creativity and talent take center stage.',
      color: '#2ecc71',
      missions: [
        {
          id: 'tr-m3',
          title: 'Dance Performances',
          description: 'Energy, rhythm, and expression through movement.',
          details: 'Students showcase dynamic dance performances across various styles, bringing life and vibrance to the stage.',
          difficulty: 'Showcase',
          teamSize: 'Solo & Group',
          duration: 'Varies',
          prize: '—',
          icon: 'Zap',
        },
        {
          id: 'tr-m4',
          title: 'Music & Singing',
          description: 'Melodies that resonate with the crowd.',
          details: 'From solo vocals to group performances, students present their musical talent through song and sound.',
          difficulty: 'Showcase',
          teamSize: 'Solo & Group',
          duration: 'Varies',
          prize: '—',
          icon: 'Music',
        },
        {
          id: 'tr-m5',
          title: 'Drama & Acts',
          description: 'Stories brought to life on stage.',
          details: 'Engaging dramatic performances and theatrical acts that captivate and entertain the audience.',
          difficulty: 'Showcase',
          teamSize: 'Group',
          duration: 'Varies',
          prize: '—',
          icon: 'Theater',
        },
      ],
    },

    {
      id: 'tr-ch3',
      number: 3,
      title: 'The Finale',
      subtitle: 'DJ Night',
      description: 'An electrifying end to the celebration.',
      color: '#27ae60',
      missions: [
        {
          id: 'tr-m6',
          title: 'DJ Night',
          description: 'High-energy beats that bring everyone together.',
          details: 'As the night reaches its peak, the DJ takes over with electrifying music, turning the fest into a vibrant celebration of rhythm and energy.',
          difficulty: 'Experience',
          teamSize: 'Open to All',
          duration: 'Till Late Night',
          prize: 'Memories',
          icon: 'Music',
        },
      ],
    },
  ],
}
};

// Icon mapping - using imported components
const ICONS = {
  Sparkles, Sword, Crown, Music, Target, Zap, Brain, Puzzle, Code, Mic,
  MessageSquare, Car, Flag, Bot, Plane, Box, Film, Camera, Gamepad2, Scroll,
  Star, Trophy: Trophy, Palette, Users, User, Theater: Drama
};

function ChapterCard({ chapter, isExpanded, onToggle, arcColor }) {
  const Icon = ICONS[chapter.iconName] || Scroll;
  
  return (
    <motion.div
      className="relative mb-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8 }}
    >
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

          <div className="flex-1">
            <h3 className="text-3xl font-cinzel font-black text-white mb-2">
              {chapter.title}
            </h3>
            <p className="text-sm uppercase tracking-widest mb-2" style={{ color: chapter.color }}>
              {chapter.subtitle}
            </p>
            <p className="text-gray-400">{chapter.description}</p>
          </div>

          <motion.div
            className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{ background: `${chapter.color}30` }}
            animate={{ rotate: isExpanded ? 90 : 0 }}
          >
            <ChevronRight size={24} style={{ color: chapter.color }} />
          </motion.div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pt-6 pl-4">
              <div className="space-y-6">
                {chapter.missionGroups ? (
                  chapter.missionGroups.map((group, groupIndex) => (
                    <MissionGroupCard 
                      key={groupIndex} 
                      group={group} 
                      accentColor={chapter.color}
                    />
                  ))
                ) : (
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
  const GroupIcon = ICONS[group.icon] || Target;
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="p-6 rounded-xl cursor-pointer"
        style={{
          background: `linear-gradient(135deg, ${group.color || accentColor}15, #0f0f1a)`,
          border: `1px solid ${group.color || accentColor}40`,
        }}
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ scale: 1.01, borderColor: group.color || accentColor }}
      >
        <div className="flex items-center gap-4">
          <div 
            className="w-12 h-12 rounded-lg flex items-center justify-center"
            style={{ background: `${group.color || accentColor}30` }}
          >
            <GroupIcon size={24} style={{ color: group.color || accentColor }} />
          </div>
          <div className="flex-1">
            <h4 className="text-xl font-bold text-white">{group.title}</h4>
            {group.description && <p className="text-sm text-gray-400">{group.description}</p>}
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronRight size={20} style={{ color: group.color || accentColor }} />
          </motion.div>
        </div>
      </motion.div>

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
                  accentColor={group.color || accentColor}
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
  const Icon = ICONS[mission.icon] || Target;

  return (
    <>
      <motion.div
        className={`relative p-4 rounded-xl cursor-pointer ${compact ? '' : 'mb-4'}`}
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
  const Icon = ICONS[mission.icon] || Target;

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

          <motion.button
            className="w-full py-4 rounded-xl font-cinzel font-bold text-lg"
            style={{
              background: `linear-gradient(135deg, ${accentColor}, ${accentColor}dd)`,
              color: 'white',
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              if (getMissionPoster(mission.title)) {
                onClose();
                // Small delay to let modal close before poster reveal
                setTimeout(() => {
                  window.dispatchEvent(new CustomEvent('showMissionPoster', {
                    detail: { title: mission.title, accentColor }
                  }));
                }, 300);
              }
            }}
          >
            Accept Mission
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Cinematic Poster Reveal Component
function MissionPosterReveal() {
  const [posterData, setPosterData] = useState(null);
  const [showPoster, setShowPoster] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const handleShowPoster = (e) => {
      const { title, accentColor } = e.detail;
      const posterFile = getMissionPoster(title);
      if (posterFile) {
        setPosterData({ title, posterFile, accentColor });
        setShowPoster(true);
        // Generate sparkle particles
        const newParticles = Array.from({ length: 20 }, (_, i) => ({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          delay: Math.random() * 1.5,
          size: Math.random() * 6 + 2,
        }));
        setParticles(newParticles);
      }
    };

    window.addEventListener('showMissionPoster', handleShowPoster);
    return () => window.removeEventListener('showMissionPoster', handleShowPoster);
  }, []);

  const handleClose = () => {
    setShowPoster(false);
    setTimeout(() => setPosterData(null), 500);
  };

  if (!posterData) return null;

  const posterUrl = new URL(`../asstes/${posterData.posterFile}`, import.meta.url).href;

  return (
    <AnimatePresence>
      {showPoster && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Dark overlay with vignette */}
          <motion.div
            className="absolute inset-0 bg-black/95"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />

          {/* Ambient glow behind poster */}
          <motion.div
            className="absolute w-[600px] h-[600px] rounded-full blur-[120px]"
            style={{ background: posterData.accentColor }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.3, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 1 }}
          />

          {/* Sparkle particles */}
          {particles.map((p) => (
            <motion.div
              key={p.id}
              className="absolute pointer-events-none"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                width: p.size,
                height: p.size,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
                y: [0, -30, -60],
              }}
              transition={{
                duration: 2,
                delay: p.delay,
                repeat: Infinity,
                repeatDelay: Math.random() * 2,
              }}
            >
              <Sparkle
                size={p.size}
                style={{ color: posterData.accentColor }}
                className="fill-current"
              />
            </motion.div>
          ))}

          {/* Poster container */}
          <motion.div
            className="relative z-10 max-w-2xl w-full"
            initial={{ scale: 0.3, rotateY: -30, opacity: 0 }}
            animate={{ scale: 1, rotateY: 0, opacity: 1 }}
            exit={{ scale: 0.3, rotateY: 30, opacity: 0 }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 15,
              delay: 0.2,
            }}
          >
            {/* Glow border */}
            <motion.div
              className="absolute -inset-2 rounded-2xl blur-md"
              style={{ background: `linear-gradient(135deg, ${posterData.accentColor}, transparent, ${posterData.accentColor})` }}
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            {/* Poster frame */}
            <motion.div
              className="relative rounded-2xl overflow-hidden"
              style={{
                border: `2px solid ${posterData.accentColor}60`,
                boxShadow: `0 0 80px ${posterData.accentColor}40`,
              }}
            >
              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 rounded-tl-2xl z-10" style={{ borderColor: posterData.accentColor }} />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 rounded-tr-2xl z-10" style={{ borderColor: posterData.accentColor }} />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 rounded-bl-2xl z-10" style={{ borderColor: posterData.accentColor }} />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 rounded-br-2xl z-10" style={{ borderColor: posterData.accentColor }} />

              {/* Poster image */}
              <motion.img
                src={posterUrl}
                alt={posterData.title}
                className="w-full h-auto object-cover"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />

            </motion.div>

            {/* Event title below poster */}
            <motion.h3
              className="text-center mt-6 text-2xl font-cinzel font-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              {posterData.title}
            </motion.h3>

            <motion.p
              className="text-center mt-2 text-sm tracking-widest uppercase"
              style={{ color: posterData.accentColor }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              Your challenge awaits
            </motion.p>
          </motion.div>

          {/* Close button */}
          <motion.button
            className="absolute top-6 right-6 z-20 w-12 h-12 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors border border-white/20"
            onClick={handleClose}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ delay: 2.2 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <X className="text-white" size={20} />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function CinematicArc({ arcKey }) {
  const arc = ARCS_DATA[arcKey];
  const [expandedChapter, setExpandedChapter] = useState(null);
  
  if (!arc) return null;

  const ArcIcon = ICONS[arc.iconName] || Scroll;

  return (
    <section className="relative min-h-screen w-full py-24 px-6 bg-gradient-to-b from-[#0c0c1a] via-[#0a0a15] to-[#0c0c1a]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="w-32 h-32 mx-auto mb-6 rounded-2xl flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${arc.color}, ${arc.color}dd)`,
              boxShadow: `0 0 60px ${arc.color}50`,
            }}
            animate={{
              boxShadow: [
                `0 0 60px ${arc.color}30`,
                `0 0 80px ${arc.color}60`,
                `0 0 60px ${arc.color}30`,
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <ArcIcon size={56} className="text-white" />
          </motion.div>

          <p className="text-sm tracking-[0.5em] mb-4 uppercase" style={{ color: arc.color }}>
            {arc.subtitle}
          </p>

          <h2 className="anime-title text-white mb-6">
            {arc.title}
          </h2>

          <p className="text-2xl font-cinzel mb-8" style={{ color: arc.color }}>
            {arc.tagline}
          </p>

          <motion.div
            className="relative p-8 rounded-2xl max-w-3xl mx-auto"
            style={{
              background: `linear-gradient(135deg, ${arc.color}10, rgba(15, 15, 26, 0.8))`,
              border: `1px solid ${arc.color}30`,
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="absolute top-4 left-4 opacity-50" style={{ color: arc.color }}>
              <Scroll size={24} />
            </div>
            <p className="text-gray-300 leading-relaxed whitespace-pre-line font-serif">
              {arc.narrative}
            </p>
            <div className="absolute bottom-4 right-4 opacity-50" style={{ color: arc.color }}>
              <Scroll size={24} />
            </div>
          </motion.div>
        </motion.div>

        <div className="space-y-6">
          {arc.chapters.map((chapter) => (
            <ChapterCard
              key={chapter.id}
              chapter={chapter}
              isExpanded={expandedChapter === chapter.id}
              onToggle={() => setExpandedChapter(
                expandedChapter === chapter.id ? null : chapter.id
              )}
              arcColor={arc.color}
            />
          ))}
        </div>
      </div>

      {/* Global Poster Reveal Overlay */}
      <MissionPosterReveal />
    </section>
  );
}
