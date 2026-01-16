import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

// Simple floating sphere
function FloatingSphere({ position, size, color }: { position: [number, number, number]; size: number; color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5 + position[0]) * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshBasicMaterial color={color} transparent opacity={0.15} />
      </mesh>
    </Float>
  );
}

// Main 3D Scene - simplified
function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      
      {/* Subtle sparkles */}
      <Sparkles
        count={50}
        scale={12}
        size={1.5}
        speed={0.2}
        color="#8b5cf6"
        opacity={0.4}
      />

      {/* Few floating spheres */}
      <FloatingSphere position={[-3, 1, -4]} size={1.5} color="#8b5cf6" />
      <FloatingSphere position={[3, -1, -5]} size={1} color="#06b6d4" />
      <FloatingSphere position={[0, 2, -6]} size={0.8} color="#a855f7" />
    </>
  );
}

const ParticleBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#030014] via-[#0a0a20] to-[#0f0728]" />
      
      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        style={{ position: "absolute", inset: 0 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/40 pointer-events-none" />
    </div>
  );
};

export default ParticleBackground;
