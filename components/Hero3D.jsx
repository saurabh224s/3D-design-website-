"use client";

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sparkles, Float, MeshDistortMaterial } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

const FloatingObject = () => {
  const meshRef = useRef();

  useFrame((state) => {
    // Smoothly rotate the object based on mouse position
    const targetX = (state.pointer.x * Math.PI) / 4;
    const targetY = (state.pointer.y * Math.PI) / 4;
    
    meshRef.current.rotation.y += 0.01;
    meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetY, 0.1);
    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetX, 0.1);
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[2, 0]} />
        <MeshDistortMaterial 
          color="#b700ff" 
          emissive="#0055ff"
          emissiveIntensity={0.5}
          wireframe={true}
          distort={0.4} 
          speed={2} 
        />
      </mesh>
    </Float>
  );
};

export default function Hero3D() {
  return (
    <div className="absolute inset-0 z-0 h-screen w-full">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#00f3ff" />
        <pointLight position={[-10, -10, -5]} intensity={1} color="#b700ff" />
        
        <FloatingObject />
        
        <Sparkles count={200} scale={12} size={2} speed={0.4} opacity={0.3} color="#00f3ff" />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
          }
    
