import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useBreathing } from '../context/BreathingContext';

export function SwordCursor() {
  const { breathing, isInfinityCastle } = useBreathing();
  const [trails, setTrails] = useState([]);
  const [isHovering, setIsHovering] = useState(false);
  const trailId = useRef(0);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 400 };
  const swordX = useSpring(cursorX, springConfig);
  const swordY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      if (trailId.current % 2 === 0) {
        const newTrail = {
          id: trailId.current++,
          x: e.clientX,
          y: e.clientY,
          timestamp: Date.now(),
        };
        setTrails(prev => [...prev.slice(-8), newTrail]);
      } else {
        trailId.current++;
      }
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (target.closest('button, a, [data-hover="true"]')) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    const cleanup = setInterval(() => {
      const now = Date.now();
      setTrails(prev => prev.filter(t => now - t.timestamp < 400));
    }, 100);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      clearInterval(cleanup);
    };
  }, [cursorX, cursorY]);

  const getTrailColor = (index, total) => {
    const opacity = (index + 1) / total;
    const baseColor = isInfinityCastle ? '#dc2626' : breathing.color;
    return baseColor + Math.floor(opacity * 255).toString(16).padStart(2, '0');
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-screen"
        style={{
          x: swordX,
          y: swordY,
        }}
      >
        <motion.svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          className="-translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: isHovering ? 1.5 : 1,
            rotate: isHovering ? 45 : 0,
          }}
          transition={{ duration: 0.2 }}
        >
          <defs>
            <linearGradient id="swordGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={isInfinityCastle ? '#ff0000' : breathing.color} />
              <stop offset="50%" stopColor={isInfinityCastle ? '#990000' : breathing.particleColor} />
              <stop offset="100%" stopColor={isInfinityCastle ? '#330000' : breathing.color} />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <motion.path
            d="M8 28 L16 4 L24 28 L16 24 Z"
            fill="url(#swordGradient)"
            filter="url(#glow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5 }}
          />

          <circle
            cx="16"
            cy="26"
            r="3"
            fill={isInfinityCastle ? '#ff0000' : '#ffd700'}
            filter="url(#glow)"
          />
        </motion.svg>
      </motion.div>

      {trails.map((trail, index) => (
        <motion.div
          key={trail.id}
          className="fixed pointer-events-none z-[9998]"
          initial={{ opacity: 0.8, scale: 1 }}
          animate={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          style={{
            left: trail.x,
            top: trail.y,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20">
            <path
              d="M6 16 L10 4 L14 16"
              stroke={getTrailColor(index, trails.length)}
              strokeWidth="2"
              fill="none"
              opacity={0.6}
            />
          </svg>
        </motion.div>
      ))}

      {isHovering && (
        <motion.div
          className="fixed pointer-events-none z-[9997] rounded-full"
          style={{
            left: swordX,
            top: swordY,
            width: 60,
            height: 60,
            transform: 'translate(-50%, -50%)',
            background: `radial-gradient(circle, ${isInfinityCastle ? 'rgba(220,38,38,0.3)' : breathing.particleColor + '40'} 0%, transparent 70%)`,
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      )}
    </>
  );
}
