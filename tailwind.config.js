/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'flame': {
          DEFAULT: '#e63946',
          light: '#ff6b6b',
          dark: '#9a1b0d',
          glow: '#ff4757',
        },
        'water': {
          DEFAULT: '#3498db',
          light: '#74b9ff',
          dark: '#0c3483',
          glow: '#00d2ff',
        },
        'thunder': {
          DEFAULT: '#f1c40f',
          light: '#ffeaa7',
          dark: '#b7950b',
          glow: '#fdcb6e',
        },
        'wind': {
          DEFAULT: '#2ecc71',
          light: '#7bed9f',
          dark: '#0a7e3d',
          glow: '#55efc4',
        },
        'beast': {
          DEFAULT: '#9b59b6',
          light: '#bb8fce',
          dark: '#5b2c6f',
          glow: '#e056fd',
        },
        'wisteria': {
          DEFAULT: '#6c5ce7',
          light: '#a29bfe',
          dark: '#3d348b',
        },
        'night': {
          DEFAULT: '#0c0c1a',
          light: '#1a1a2e',
          dark: '#050510',
        },
        'ink': {
          DEFAULT: '#0d0d0d',
          light: '#1a1a1a',
        },
        'hanafuda': {
          red: '#e74c3c',
          gold: '#f39c12',
          green: '#27ae60',
        }
      },
      fontFamily: {
        'cinzel': ['Cinzel', 'serif'],
        'japanese': ['Noto Serif JP', 'serif'],
      },
      animation: {
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'drift': 'drift 20s linear infinite',
        'slash': 'slash 0.3s ease-out forwards',
        'bloom': 'bloom 2s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'petal-fall': 'petalFall 8s linear infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        drift: {
          '0%': { transform: 'translateX(-100px)' },
          '100%': { transform: 'translateX(100px)' },
        },
        slash: {
          '0%': { clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' },
          '100%': { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' },
        },
        bloom: {
          '0%, 100%': { filter: 'brightness(1)' },
          '50%': { filter: 'brightness(1.3)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        petalFall: {
          '0%': { transform: 'translateY(-10vh) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(110vh) rotate(720deg)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
