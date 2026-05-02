import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useBreathing } from '../context/BreathingContext';
import * as THREE from 'three';

function Particles({ breathingType, isInfinityCastle }) {
  const meshRef = useRef();
  const { breathing } = useBreathing();

  const particleCount = useMemo(() => {
    return breathingType === 'none' ? 100 : 200;
  }, [breathingType]);

  const [positions, velocities, colors] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const vel = new Float32Array(particleCount * 3);
    const col = new Float32Array(particleCount * 3);

    const colorMap = {
      none: [1, 1, 1],
      flame: [1, 0.4, 0.3],
      water: [0.2, 0.6, 1],
      thunder: [1, 0.9, 0.3],
      wind: [0.3, 0.9, 0.5],
      beast: [0.7, 0.3, 0.9],
    };

    const baseColor = isInfinityCastle ? [0.8, 0.1, 0.1] : (colorMap[breathingType] || colorMap.none);

    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;

      vel[i * 3] = (Math.random() - 0.5) * 0.02;
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.02;
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.01;

      const variation = 0.3;
      col[i * 3] = baseColor[0] + (Math.random() - 0.5) * variation;
      col[i * 3 + 1] = baseColor[1] + (Math.random() - 0.5) * variation;
      col[i * 3 + 2] = baseColor[2] + (Math.random() - 0.5) * variation;
    }

    return [pos, vel, col];
  }, [particleCount, breathingType, isInfinityCastle]);

  useFrame((state) => {
    if (!meshRef.current) return;

    const positions = meshRef.current.geometry.attributes.position.array;
    const time = state.clock.elapsedTime;

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;

      positions[i3] += velocities[i3] + Math.sin(time + i * 0.1) * 0.001;
      positions[i3 + 1] += velocities[i3 + 1] + Math.cos(time + i * 0.1) * 0.001;
      positions[i3 + 2] += velocities[i3 + 2];

      if (positions[i3 + 1] > 10) positions[i3 + 1] = -10;
      if (positions[i3 + 1] < -10) positions[i3 + 1] = 10;
      if (positions[i3] > 10) positions[i3] = -10;
      if (positions[i3] < -10) positions[i3] = 10;
      if (positions[i3 + 2] > 5) positions[i3 + 2] = -5;
      if (positions[i3 + 2] < -5) positions[i3 + 2] = 5;
    }

    meshRef.current.geometry.attributes.position.needsUpdate = true;
    meshRef.current.rotation.y = time * 0.05;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function BreathingRings({ breathingType, isInfinityCastle }) {
  const groupRef = useRef();

  const ringColor = useMemo(() => {
    const colorMap = {
      none: '#7e5ecf',
      flame: '#ff4757',
      water: '#74b9ff',
      thunder: '#ffeaa7',
      wind: '#7bed9f',
      beast: '#bb8fce',
    };
    return isInfinityCastle ? '#ff0000' : colorMap[breathingType] || colorMap.none;
  }, [breathingType, isInfinityCastle]);

  useFrame((state) => {
    if (!groupRef.current) return;
    const time = state.clock.elapsedTime;

    groupRef.current.children.forEach((child, i) => {
      child.rotation.x = time * 0.1 + i * 0.5;
      child.rotation.y = time * 0.15 + i * 0.3;
      child.scale.setScalar(1 + Math.sin(time + i) * 0.1);
    });
  });

  return (
    <group ref={groupRef}>
      {[1, 2, 3].map((i) => (
        <mesh key={i} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[i * 2, 0.02, 16, 100]} />
          <meshBasicMaterial color={ringColor} transparent opacity={0.3 / i} />
        </mesh>
      ))}
    </group>
  );
}

export function ElementalParticleScene({ className = '' }) {
  const { selectedBreathing, isInfinityCastle } = useBreathing();

  return (
    <div className={`absolute inset-0 ${className}`} style={{ zIndex: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <Particles breathingType={selectedBreathing} isInfinityCastle={isInfinityCastle} />
        <BreathingRings breathingType={selectedBreathing} isInfinityCastle={isInfinityCastle} />
      </Canvas>
    </div>
  );
}
