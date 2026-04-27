# Nichirin Nexus — A Demon Slayer Themed Website for College Fest Promotion

A cinematic, highly interactive, anime-quality festival website inspired by the visual storytelling of **Demon Slayer: Kimetsu no Yaiba** with **Ufotable** production quality.

![Demon Slayer Theme](https://img.shields.io/badge/theme-Demon%20Slayer-crimson)
![React](https://img.shields.io/badge/react-18.2.0-blue)
![Vite](https://img.shields.io/badge/vite-5.0.8-purple)
![Three.js](https://img.shields.io/badge/three.js-0.160.0-black)

## 🎥 Visual Direction

This website emulates:
- Dynamic anime camera movements
- Dramatic lighting bloom
- Layered compositing
- Painterly environments
- Elemental effects integrated into motion
- Cinematic sword trails
- Atmospheric particles

## 🗡 Website Structure as Story Arcs

### ARC 1 — Final Selection (Landing)
Moonlit forest, wisteria petals, fog, distant lanterns. Camera pushes inward through the forest.

### ARC 2 — Breathing Selection
Choose your path: Flame, Water, Thunder, Wind, or Beast Breathing. Dynamic theming based on selection.

### ARC 3 — Mission Countdown
Countdown timer to the festival with breathing energy pulse effects.

### ARC 4 — Mission Arcs (Events)
Each event presented as a full anime mission with cinematic panels.

### ARC 5 — Featured Arcs
Flagship events presented as anime story arcs (Entertainment District, Swordsmith Village, etc.).

### ARC 6 — Hashira Headquarters
Team section as Hashira assembly with circular chamber layout.

### ARC 7 — Corps Oath (Registration)
Ceremonial registration form with katana unsheath animation.

## ⚔️ Advanced Interactions

### Custom Cursor
- Mini Nichirin sword trail
- Elemental slash follows movement on hover

### Infinity Castle Mode
- **Konami Code**: ↑↑↓↓←→←→BA
- Unlocks surreal shifting geometry with Upper Moon aesthetic

## 🛠 Tech Stack

**Frontend:**
- React + Vite
- Tailwind CSS

**Motion:**
- Framer Motion
- GSAP (via @gsap/react)

**3D / Effects:**
- React Three Fiber
- Three.js

**State Management:**
- React Context API

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 🎮 Easter Egg

Enter the Konami code (↑↑↓↓←→←→BA) anywhere on the site to activate **Infinity Castle Mode** — a surreal 3D experience with Upper Moon aesthetic.

Press `ESC` to exit.

## 🎨 Breathing Styles

| Style | Color | Characteristic |
|-------|-------|----------------|
| Flame | `#e63946` | Passion & Resolve |
| Water | `#3498db` | Adaptability & Flow |
| Thunder | `#f1c40f` | Speed & Precision |
| Wind | `#2ecc71` | Agility & Cutting |
| Beast | `#9b59b6` | Ferocity & Wildness |

## 📁 Project Structure

```
src/
├── components/
│   ├── SwordCursor.jsx
│   ├── ElementalParticleScene.jsx
│   ├── FinalSelectionHero.jsx
│   ├── BreathingSelector.jsx
│   ├── CountdownBattleTimer.jsx
│   ├── MissionArcCard.jsx
│   ├── FeaturedArcs.jsx
│   ├── HashiraRoster.jsx
│   ├── CorpsOath.jsx
│   ├── InfinityCastleMode.jsx
│   └── Navigation.jsx
├── context/
│   └── BreathingContext.jsx
├── hooks/
│   └── useKonami.js
├── styles/
│   └── index.css
├── App.jsx
└── main.jsx
```

## 🌟 Features

- **Cinematic Scrolling**: Anime-style section transitions
- **Dynamic Theming**: Breathing style changes affect entire site
- **3D Particle Systems**: Elemental particles using Three.js
- **Custom Cursor**: Nichirin sword with elemental trail
- **Responsive Design**: Works on all screen sizes
- **Smooth Animations**: 60fps optimized animations

## 🎭 Credits

Inspired by **Demon Slayer: Kimetsu no Yaiba** by Koyoharu Gotouge.
Visual style influenced by **Ufotable** studio's animation work.

---

*Not affiliated with official Demon Slayer productions. Fan-made project for educational purposes.*
