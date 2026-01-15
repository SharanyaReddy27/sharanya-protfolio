import { Canvas, useFrame, extend } from "@react-three/fiber";
import { Float, MeshDistortMaterial, MeshWobbleMaterial, Sparkles, Line } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

// Rotating wireframe cube with glow
function GlowingCube({ position, size, color, speed }: { position: [number, number, number]; size: number; color: string; speed: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005 * speed;
      meshRef.current.rotation.y += 0.008 * speed;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5 + position[0]) * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[size, size, size]} />
        <meshBasicMaterial color={color} wireframe transparent opacity={0.6} />
      </mesh>
      {/* Inner glow */}
      <mesh position={position}>
        <boxGeometry args={[size * 0.9, size * 0.9, size * 0.9]} />
        <meshBasicMaterial color={color} transparent opacity={0.1} />
      </mesh>
    </Float>
  );
}

// Floating glass sphere
function GlassSphere({ position, size, color }: { position: [number, number, number]; size: number; color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.3 + position[0] * 2) * 0.5;
      meshRef.current.position.x = position[0] + Math.cos(state.clock.elapsedTime * 0.2 + position[2]) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[size, 32, 32]} />
      <MeshDistortMaterial
        color={color}
        transparent
        opacity={0.3}
        distort={0.3}
        speed={2}
        roughness={0}
        metalness={0.8}
      />
    </mesh>
  );
}

// Rotating torus
function GlowingTorus({ position, size, color, speed }: { position: [number, number, number]; size: number; color: string; speed: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.5;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position}>
        <torusGeometry args={[size, size * 0.15, 16, 50]} />
        <meshBasicMaterial color={color} wireframe transparent opacity={0.5} />
      </mesh>
    </Float>
  );
}

// Floating icosahedron
function FloatingIcosahedron({ position, size, color }: { position: [number, number, number]; size: number; color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.003;
      meshRef.current.rotation.z += 0.005;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.8} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        <icosahedronGeometry args={[size, 0]} />
        <MeshWobbleMaterial
          color={color}
          transparent
          opacity={0.4}
          wireframe
          factor={0.3}
          speed={1}
        />
      </mesh>
    </Float>
  );
}

// Orbiting ring system
function OrbitRing({ radius, color, speed, tilt }: { radius: number; color: string; speed: number; tilt: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = state.clock.elapsedTime * speed;
    }
  });

  const points = useMemo(() => {
    const pts: [number, number, number][] = [];
    for (let i = 0; i <= 64; i++) {
      const angle = (i / 64) * Math.PI * 2;
      pts.push([Math.cos(angle) * radius, Math.sin(angle) * radius, 0]);
    }
    return pts;
  }, [radius]);

  return (
    <group ref={groupRef} rotation={tilt}>
      <Line
        points={points}
        color={color}
        lineWidth={1}
        transparent
        opacity={0.4}
      />
      {/* Orbiting dot */}
      <mesh position={[radius, 0, 0]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial color={color} />
      </mesh>
    </group>
  );
}

// Grid plane with glow
function TechGrid() {
  return (
    <gridHelper
      args={[30, 30, "#8b5cf6", "#3b0764"]}
      position={[0, -5, 0]}
      rotation={[0, 0, 0]}
    />
  );
}

// Main 3D Scene
function Scene() {
  return (
    <>
      {/* Ambient lighting */}
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#8b5cf6" />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#06b6d4" />

      {/* Sparkles for magical effect */}
      <Sparkles
        count={100}
        scale={15}
        size={2}
        speed={0.3}
        color="#8b5cf6"
      />

      {/* Cubes */}
      <GlowingCube position={[-4, 2, -3]} size={1.2} color="#8b5cf6" speed={1} />
      <GlowingCube position={[4, -1, -5]} size={0.8} color="#06b6d4" speed={1.5} />
      <GlowingCube position={[2, 3, -4]} size={0.6} color="#a855f7" speed={0.8} />
      <GlowingCube position={[-3, -2, -6]} size={1} color="#7c3aed" speed={1.2} />

      {/* Glass Spheres */}
      <GlassSphere position={[3, 1, -2]} size={0.8} color="#8b5cf6" />
      <GlassSphere position={[-2, -1, -4]} size={0.5} color="#06b6d4" />
      <GlassSphere position={[0, 2.5, -3]} size={0.6} color="#a855f7" />

      {/* Torus rings */}
      <GlowingTorus position={[-3, 0, -5]} size={1.5} color="#8b5cf6" speed={1} />
      <GlowingTorus position={[4, 2, -6]} size={1} color="#06b6d4" speed={0.7} />

      {/* Icosahedrons */}
      <FloatingIcosahedron position={[0, -2, -4]} size={0.7} color="#a855f7" />
      <FloatingIcosahedron position={[-4, 1.5, -7]} size={0.5} color="#8b5cf6" />

      {/* Orbit rings */}
      <OrbitRing radius={2.5} color="#8b5cf6" speed={0.3} tilt={[1.2, 0.3, 0]} />
      <OrbitRing radius={3.5} color="#06b6d4" speed={-0.2} tilt={[0.8, 0.5, 0.3]} />
      <OrbitRing radius={1.8} color="#a855f7" speed={0.4} tilt={[0.5, 1, 0.2]} />

      {/* Tech grid floor */}
      <TechGrid />
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

      {/* Overlay gradients for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-background/50 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/30 via-transparent to-background/30 pointer-events-none" />
    </div>
  );
};

export default ParticleBackground;
