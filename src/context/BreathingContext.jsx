import React, { createContext, useContext, useState, useCallback } from 'react';

const BREATHING_STYLES = {
  none: {
    id: 'none',
    name: 'None',
    color: '#ffffff',
    icon: 'circle',
    particleColor: '#ffffff',
    gradient: 'from-gray-400 to-gray-600',
    className: '',
  },
  flame: {
    id: 'flame',
    name: 'Flame Breathing',
    color: '#e63946',
    icon: 'flame',
    particleColor: '#ff6b6b',
    gradient: 'from-red-400 via-red-600 to-orange-500',
    className: 'breathing-flame',
    description: 'The fire that consumes all',
    form: 'First Form: Unknowing Fire',
  },
  water: {
    id: 'water',
    name: 'Water Breathing',
    color: '#3498db',
    icon: 'waves',
    particleColor: '#74b9ff',
    gradient: 'from-blue-300 via-blue-500 to-cyan-400',
    className: 'breathing-water',
    description: 'The flow that adapts to all',
    form: 'First Form: Water Surface Slash',
  },
  thunder: {
    id: 'thunder',
    name: 'Thunder Breathing',
    color: '#f1c40f',
    icon: 'zap',
    particleColor: '#ffeaa7',
    gradient: 'from-yellow-300 via-yellow-500 to-amber-400',
    className: 'breathing-thunder',
    description: 'The bolt that strikes faster than sound',
    form: 'First Form: Thunderclap and Flash',
  },
  wind: {
    id: 'wind',
    name: 'Wind Breathing',
    color: '#2ecc71',
    icon: 'wind',
    particleColor: '#7bed9f',
    gradient: 'from-green-300 via-green-500 to-emerald-400',
    className: 'breathing-wind',
    description: 'The gale that cuts through everything',
    form: 'First Form: Dust Whirlwind',
  },
  beast: {
    id: 'beast',
    name: 'Beast Breathing',
    color: '#9b59b6',
    icon: 'paw-print',
    particleColor: '#bb8fce',
    gradient: 'from-purple-300 via-purple-500 to-fuchsia-400',
    className: 'breathing-beast',
    description: 'The ferocity of a wild beast',
    form: 'First Form: Roar',
  },
};

const BreathingContext = createContext(null);

export function BreathingProvider({ children }) {
  const [selectedBreathing, setSelectedBreathing] = useState('none');
  const [isInfinityCastle, setIsInfinityCastle] = useState(false);

  const selectBreathing = useCallback((breathingId) => {
    setSelectedBreathing(breathingId);
    document.documentElement.className = BREATHING_STYLES[breathingId]?.className || '';
  }, []);

  const toggleInfinityCastle = useCallback(() => {
    setIsInfinityCastle(prev => !prev);
  }, []);

  const breathing = BREATHING_STYLES[selectedBreathing] || BREATHING_STYLES.none;

  return (
    <BreathingContext.Provider value={{
      selectedBreathing,
      breathing,
      selectBreathing,
      isInfinityCastle,
      toggleInfinityCastle,
      BREATHING_STYLES,
    }}>
      {children}
    </BreathingContext.Provider>
  );
}

export function useBreathing() {
  const context = useContext(BreathingContext);
  if (!context) {
    throw new Error('useBreathing must be used within BreathingProvider');
  }
  return context;
}
