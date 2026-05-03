import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useBreathing } from '../context/BreathingContext';

function TimeUnit({ value, label, color }) {
  const digits = value.toString().padStart(2, '0').split('');

  return (
    <div className="flex flex-col items-center flex-shrink-0">
      <div className="flex gap-0.5 sm:gap-1">
        {digits.map((digit, i) => (
          <motion.div
            key={`${label}-${i}`}
            className="relative w-12 h-16 sm:w-14 sm:h-20 md:w-20 md:h-28 flex items-center justify-center rounded-md sm:rounded-lg overflow-hidden"
            style={{
              background: 'linear-gradient(180deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02))',
              border: `1px solid ${color}40`,
            }}
          >
            <motion.div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(180deg, ${color}10, transparent)`,
              }}
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            <AnimatePresence mode="popLayout">
              <motion.span
                key={digit}
                className="text-2xl sm:text-3xl md:text-6xl font-cinzel font-black"
                style={{ color }}
                initial={{ y: -20, opacity: 0, filter: 'blur(6px)' }}
                animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                exit={{ y: 20, opacity: 0, filter: 'blur(6px)' }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              >
                {digit}
              </motion.span>
            </AnimatePresence>

            <motion.div
              className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1"
              style={{ background: color }}
              animate={{
                scaleX: [0, 1, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </motion.div>
        ))}
      </div>
      <motion.span
        className="text-[10px] sm:text-xs md:text-sm uppercase tracking-widest mt-2 sm:mt-3"
        style={{ color: `${color}80` }}
      >
        {label}
      </motion.span>
    </div>
  );
}

function EnergyWave({ color, delay }) {
  return (
    <motion.div
      className="absolute inset-0 pointer-events-none"
      style={{
        background: `radial-gradient(ellipse at center, ${color}20 0%, transparent 70%)`,
      }}
      initial={{ scale: 0.5, opacity: 1 }}
      animate={{
        scale: [1, 1.5, 2],
        opacity: [0.6, 0.3, 0],
      }}
      transition={{
        duration: 3,
        delay,
        repeat: Infinity,
        ease: 'easeOut',
      }}
    />
  );
}

export function CountdownBattleTimer() {
  const { breathing, isInfinityCastle } = useBreathing();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2026-05-12T14:00:00+05:30');

    const updateTimer = () => {
      const now = new Date();
      const diff = targetDate - now;

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const timerColor = isInfinityCastle ? '#dc2626' : breathing.color || '#a29bfe';
  const totalSeconds = timeLeft.days * 86400 + timeLeft.hours * 3600 + timeLeft.minutes * 60 + timeLeft.seconds;
  const isUrgent = totalSeconds < 86400;

  return (
    <section className="relative min-h-screen w-full py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-[#0c0c1a] via-[#0a0a15] to-[#0c0c1a] overflow-hidden">
      <EnergyWave color={timerColor} delay={0} />
      <EnergyWave color={timerColor} delay={1} />
      <EnergyWave color={timerColor} delay={2} />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-10 sm:mb-14 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-xs sm:text-sm tracking-[0.3em] sm:tracking-[0.5em] mb-3 sm:mb-4 uppercase"
            style={{ color: timerColor }}
            animate={isUrgent ? {
              opacity: [0.5, 1, 0.5],
              textShadow: [
                `0 0 10px ${timerColor}`,
                `0 0 30px ${timerColor}`,
                `0 0 10px ${timerColor}`,
              ],
            } : {}}
            transition={{ duration: 1, repeat: Infinity }}
          >
            ARC 3 — The Final Battle Approaches
          </motion.p>

          <h2 className="anime-title text-white mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl">
            Mission Countdown
          </h2>

          <motion.div
            className="w-24 sm:w-32 h-0.5 mx-auto mb-4 sm:mb-6"
            style={{ background: timerColor }}
            animate={{
              boxShadow: [
                `0 0 10px ${timerColor}`,
                `0 0 30px ${timerColor}`,
                `0 0 10px ${timerColor}`,
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto px-2">
            The festival draws near. The demons grow restless.
            Your training must be complete before the final moon rises.
          </p>
        </motion.div>

        <div className="grid grid-cols-4 gap-2 sm:gap-4 md:gap-6 lg:gap-8 max-w-xs sm:max-w-lg md:max-w-4xl mx-auto">
          <TimeUnit value={timeLeft.days} label="Days" color={timerColor} />
          <TimeUnit value={timeLeft.hours} label="Hours" color={timerColor} />
          <TimeUnit value={timeLeft.minutes} label="Mins" color={timerColor} />
          <TimeUnit value={timeLeft.seconds} label="Secs" color={timerColor} />
        </div>

        <AnimatePresence>
          {isUrgent && (
            <motion.div
              className="mt-8 sm:mt-12 text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <motion.div
                className="inline-block px-4 sm:px-6 py-2 sm:py-3 rounded-lg border-2"
                style={{
                  borderColor: timerColor,
                  background: `${timerColor}10`,
                }}
                animate={{
                  boxShadow: [
                    `0 0 15px ${timerColor}30`,
                    `0 0 40px ${timerColor}60`,
                    `0 0 15px ${timerColor}30`,
                  ],
                }}
                transition={{ duration: 0.8, repeat: Infinity }}
              >
                <span className="text-white font-cinzel text-sm sm:text-base md:text-lg" style={{ color: timerColor }}>
                  ⚠ The Final Battle Approaches ⚠
                </span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          className="mt-10 sm:mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-gray-500"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <span>Breathing energy pulsing</span>
            <motion.span
              className="inline-block w-2 h-2 rounded-full"
              style={{ background: timerColor }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
