import React, { useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useBreathing } from '../context/BreathingContext';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { AlertTriangle, X } from 'lucide-react';

function InfinityGeometry() {
  const meshRef = useRef();
  const timeRef = useRef(0);

  const geometry = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(2, 1);
    const posAttribute = geo.attributes.position;
    const vertex = new THREE.Vector3();

    for (let i = 0; i < posAttribute.count; i++) {
      vertex.fromBufferAttribute(posAttribute, i);
      const noise = Math.sin(vertex.x * 2) * Math.cos(vertex.y * 2) * Math.sin(vertex.z * 2);
      vertex.multiplyScalar(1 + noise * 0.3);
      posAttribute.setXYZ(i, vertex.x, vertex.y, vertex.z);
    }

    geo.computeVertexNormals();
    return geo;
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    timeRef.current += 0.01;

    meshRef.current.rotation.x = timeRef.current * 0.1;
    meshRef.current.rotation.y = timeRef.current * 0.15;
    meshRef.current.rotation.z = timeRef.current * 0.05;

    const scale = 1 + Math.sin(timeRef.current * 2) * 0.1;
    meshRef.current.scale.setScalar(scale);
  });

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshBasicMaterial
        color="#dc2626"
        wireframe
        transparent
        opacity={0.3}
      />
    </mesh>
  );
}

function BloodParticles() {
  const pointsRef = useRef();
  const particleCount = 200;

  const [positions, velocities] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const vel = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 5;
      const height = (Math.random() - 0.5) * 10;

      pos[i * 3] = Math.cos(angle) * radius;
      pos[i * 3 + 1] = height;
      pos[i * 3 + 2] = Math.sin(angle) * radius;

      vel[i * 3] = (Math.random() - 0.5) * 0.01;
      vel[i * 3 + 1] = -Math.random() * 0.02 - 0.01;
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.01;
    }

    return [pos, vel];
  }, []);

  useFrame(() => {
    if (!pointsRef.current) return;
    const positions = pointsRef.current.geometry.attributes.position.array;

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;

      positions[i3] += velocities[i3];
      positions[i3 + 1] += velocities[i3 + 1];
      positions[i3 + 2] += velocities[i3 + 2];

      if (positions[i3 + 1] < -5) {
        positions[i3 + 1] = 5;
        positions[i3] = (Math.random() - 0.5) * 8;
        positions[i3 + 2] = (Math.random() - 0.5) * 8;
      }
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#7f1d1d"
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function FloatingEyes() {
  const groupRef = useRef();
  const timeRef = useRef(0);

  useFrame(() => {
    if (!groupRef.current) return;
    timeRef.current += 0.02;

    groupRef.current.children.forEach((child, i) => {
      const offset = i * 0.5;
      child.position.y = Math.sin(timeRef.current + offset) * 0.3;
      child.material.opacity = 0.5 + Math.sin(timeRef.current * 2 + offset) * 0.3;
    });
  });

  return (
    <group ref={groupRef}>
      {[-2, -1, 0, 1, 2].map((x, i) => (
        <mesh key={i} position={[x, Math.sin(i), -3 - i * 0.5]}>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshBasicMaterial color="#dc2626" transparent opacity={0.6} />
        </mesh>
      ))}
    </group>
  );
}

export function InfinityCastleMode() {
  const { isInfinityCastle, toggleInfinityCastle } = useBreathing();

  if (!isInfinityCastle) return null;

  return (
    <AnimatePresence>
      {isInfinityCastle && (
        <motion.div
          className="fixed inset-0 z-[100]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-[#0a0000]">
            <Canvas
              camera={{ position: [0, 0, 6], fov: 60 }}
              dpr={[1, 1.5]}
            >
              <ambientLight intensity={0.1} color="#dc2626" />
              <pointLight position={[10, 10, 10]} color="#dc2626" intensity={0.5} />
              <InfinityGeometry />
              <BloodParticles />
              <FloatingEyes />
            </Canvas>
          </div>

          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at center, transparent 0%, rgba(139, 0, 0, 0.3) 100%)',
            }}
            animate={{
              background: [
                'radial-gradient(circle at center, transparent 0%, rgba(139, 0, 0, 0.3) 100%)',
                'radial-gradient(circle at center, transparent 0%, rgba(139, 0, 0, 0.5) 100%)',
                'radial-gradient(circle at center, transparent 0%, rgba(139, 0, 0, 0.3) 100%)',
              ],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          <motion.div
            className="absolute inset-1 opacity-20"
            style={{
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(220, 38, 38, 0.1) 2px, rgba(220, 38, 38, 0.1) 4px)',
            }}
          />

          <motion.div
            className="absolute top-8 left-8 flex items-center gap-4"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, #dc2626, #991b1b)',
                boxShadow: '0 0 30px rgba(220, 38, 38, 0.6)',
              }}
              animate={{
                boxShadow: [
                  '0 0 30px rgba(220, 38, 38, 0.6)',
                  '0 0 60px rgba(220, 38, 38, 0.8)',
                  '0 0 30px rgba(220, 38, 38, 0.6)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <AlertTriangle size={24} className="text-white" />
            </motion.div>

            <div>
              <h2 className="text-2xl font-cinzel font-black text-red-500">
                Infinity Castle
              </h2>
              <p className="text-red-400/70 text-sm">Upper Moon Territory</p>
            </div>
          </motion.div>

          <motion.button
            onClick={toggleInfinityCastle}
            className="absolute top-8 right-8 w-12 h-12 rounded-full flex items-center justify-center bg-red-900/50 border border-red-500/50 text-red-400 hover:bg-red-900/70 transition-colors"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <X size={24} />
          </motion.button>

          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <p className="text-red-400/50 text-sm tracking-widest">
              ESCAPE THE CASTLE
            </p>
          </motion.div>

          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.3, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
            style={{
              background: 'radial-gradient(circle at random positions, rgba(220, 38, 38, 0.2), transparent)',
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
