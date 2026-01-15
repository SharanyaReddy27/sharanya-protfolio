import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const ParticleBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // 3D Floating Cubes
  const cubes = [
    { size: 60, x: "10%", y: "15%", delay: 0, duration: 20 },
    { size: 40, x: "85%", y: "10%", delay: 2, duration: 18 },
    { size: 80, x: "75%", y: "65%", delay: 1, duration: 22 },
    { size: 50, x: "20%", y: "75%", delay: 3, duration: 16 },
    { size: 35, x: "60%", y: "85%", delay: 1.5, duration: 19 },
    { size: 45, x: "92%", y: "45%", delay: 2.5, duration: 17 },
  ];

  // Hexagonal shapes
  const hexagons = [
    { size: 100, x: "15%", y: "30%", delay: 0, duration: 15 },
    { size: 70, x: "70%", y: "20%", delay: 1.5, duration: 18 },
    { size: 120, x: "80%", y: "75%", delay: 0.5, duration: 20 },
    { size: 60, x: "35%", y: "85%", delay: 2, duration: 14 },
    { size: 90, x: "55%", y: "45%", delay: 1, duration: 16 },
  ];

  // Orbital rings
  const rings = [
    { size: 200, x: "20%", y: "25%", rotateX: 70, rotateY: 20, duration: 25 },
    { size: 300, x: "70%", y: "60%", rotateX: 60, rotateY: -30, duration: 30 },
    { size: 150, x: "50%", y: "80%", rotateX: 75, rotateY: 45, duration: 20 },
  ];

  // Grid points for circuit pattern
  const gridPoints = Array.from({ length: 20 }, (_, i) => ({
    x: `${5 + (i % 5) * 23}%`,
    y: `${10 + Math.floor(i / 5) * 25}%`,
    delay: i * 0.2,
  }));

  // Binary rain columns
  const binaryColumns = Array.from({ length: 8 }, (_, i) => ({
    x: `${12 + i * 12}%`,
    delay: i * 0.5,
    duration: 8 + Math.random() * 4,
  }));

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" style={{ perspective: "1000px" }}>
      {/* Deep gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a1a] via-background to-[#0d1033]" />

      {/* Animated gradient mesh */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(ellipse at 20% 20%, hsl(var(--primary) / 0.2) 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, hsl(var(--accent) / 0.15) 0%, transparent 50%)",
            "radial-gradient(ellipse at 80% 20%, hsl(var(--primary) / 0.2) 0%, transparent 50%), radial-gradient(ellipse at 20% 80%, hsl(var(--accent) / 0.15) 0%, transparent 50%)",
            "radial-gradient(ellipse at 50% 50%, hsl(var(--neon-blue) / 0.1) 0%, transparent 60%), radial-gradient(ellipse at 20% 20%, hsl(var(--primary) / 0.2) 0%, transparent 50%)",
            "radial-gradient(ellipse at 20% 20%, hsl(var(--primary) / 0.2) 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, hsl(var(--accent) / 0.15) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Interactive mouse glow */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 70%)",
          left: mousePosition.x - 200,
          top: mousePosition.y - 200,
          filter: "blur(40px)",
        }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Circuit grid pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Horizontal grid lines */}
        {[20, 40, 60, 80].map((y, i) => (
          <motion.line
            key={`h-${i}`}
            x1="0%"
            y1={`${y}%`}
            x2="100%"
            y2={`${y}%`}
            stroke="url(#lineGradient)"
            strokeWidth="0.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 4, delay: i * 0.5, repeat: Infinity }}
          />
        ))}
        {/* Vertical grid lines */}
        {[20, 40, 60, 80].map((x, i) => (
          <motion.line
            key={`v-${i}`}
            x1={`${x}%`}
            y1="0%"
            x2={`${x}%`}
            y2="100%"
            stroke="url(#lineGradient)"
            strokeWidth="0.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 4, delay: i * 0.5 + 0.25, repeat: Infinity }}
          />
        ))}
      </svg>

      {/* Circuit grid points */}
      {gridPoints.map((point, i) => (
        <motion.div
          key={`point-${i}`}
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: point.x,
            top: point.y,
            background: "hsl(var(--primary))",
            boxShadow: "0 0 10px hsl(var(--primary)), 0 0 20px hsl(var(--primary) / 0.5)",
          }}
          animate={{ scale: [0.5, 1, 0.5], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2, delay: point.delay, repeat: Infinity }}
        />
      ))}

      {/* Data flow pulses along grid */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`pulse-${i}`}
          className="absolute w-4 h-4 rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)",
            boxShadow: "0 0 15px hsl(var(--accent)), 0 0 30px hsl(var(--accent) / 0.5)",
          }}
          initial={{ left: "0%", top: `${20 + i * 15}%`, opacity: 0 }}
          animate={{
            left: ["0%", "100%"],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 4,
            delay: i * 1.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* 3D Rotating Cubes */}
      {cubes.map((cube, index) => (
        <motion.div
          key={`cube-${index}`}
          className="absolute"
          style={{
            width: cube.size,
            height: cube.size,
            left: cube.x,
            top: cube.y,
            transformStyle: "preserve-3d",
          }}
          animate={{
            rotateX: [0, 360],
            rotateY: [0, 360],
            rotateZ: [0, 180],
          }}
          transition={{
            duration: cube.duration,
            delay: cube.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Cube faces */}
          {[
            { transform: `translateZ(${cube.size / 2}px)` },
            { transform: `translateZ(-${cube.size / 2}px) rotateY(180deg)` },
            { transform: `translateX(${cube.size / 2}px) rotateY(90deg)` },
            { transform: `translateX(-${cube.size / 2}px) rotateY(-90deg)` },
            { transform: `translateY(-${cube.size / 2}px) rotateX(90deg)` },
            { transform: `translateY(${cube.size / 2}px) rotateX(-90deg)` },
          ].map((face, faceIndex) => (
            <div
              key={faceIndex}
              className="absolute border border-primary/30 rounded-sm"
              style={{
                width: cube.size,
                height: cube.size,
                ...face,
                background: "linear-gradient(135deg, hsl(var(--primary) / 0.05) 0%, hsl(var(--primary) / 0.02) 100%)",
                backdropFilter: "blur(2px)",
                boxShadow: "inset 0 0 20px hsl(var(--primary) / 0.1), 0 0 10px hsl(var(--primary) / 0.2)",
              }}
            />
          ))}
        </motion.div>
      ))}

      {/* Glassmorphism Hexagons */}
      {hexagons.map((hex, index) => (
        <motion.div
          key={`hex-${index}`}
          className="absolute"
          style={{
            width: hex.size,
            height: hex.size * 1.15,
            left: hex.x,
            top: hex.y,
            clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)",
            backdropFilter: "blur(4px)",
            border: "1px solid rgba(139, 92, 246, 0.2)",
            boxShadow: "0 0 30px hsl(var(--primary) / 0.15), inset 0 0 20px rgba(255,255,255,0.03)",
          }}
          animate={{
            y: [-15, 15, -15],
            x: [-8, 8, -8],
            rotate: [0, 5, 0, -5, 0],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: hex.duration,
            delay: hex.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* 3D Orbital Rings */}
      {rings.map((ring, index) => (
        <motion.div
          key={`ring-${index}`}
          className="absolute rounded-full border-2"
          style={{
            width: ring.size,
            height: ring.size,
            left: ring.x,
            top: ring.y,
            transform: `translate(-50%, -50%) rotateX(${ring.rotateX}deg) rotateY(${ring.rotateY}deg)`,
            borderColor: "hsl(var(--accent) / 0.3)",
            boxShadow: "0 0 20px hsl(var(--accent) / 0.2), inset 0 0 20px hsl(var(--accent) / 0.1)",
          }}
          animate={{ rotate: [0, 360] }}
          transition={{
            duration: ring.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Orbiting dot */}
          <motion.div
            className="absolute w-3 h-3 rounded-full -top-1.5 left-1/2 -translate-x-1/2"
            style={{
              background: "hsl(var(--accent))",
              boxShadow: "0 0 15px hsl(var(--accent)), 0 0 30px hsl(var(--accent) / 0.5)",
            }}
          />
        </motion.div>
      ))}

      {/* Binary Rain Effect */}
      {binaryColumns.map((col, colIndex) => (
        <div key={`col-${colIndex}`} className="absolute overflow-hidden h-full" style={{ left: col.x, width: "20px" }}>
          <motion.div
            className="text-primary/20 font-mono text-xs leading-relaxed whitespace-pre"
            initial={{ y: "-100%" }}
            animate={{ y: "100%" }}
            transition={{
              duration: col.duration,
              delay: col.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {Array.from({ length: 30 }, () => (Math.random() > 0.5 ? "1" : "0")).join("\n")}
          </motion.div>
        </div>
      ))}

      {/* Floating code brackets */}
      {["{ }", "< />", "[ ]", "( )"].map((code, index) => (
        <motion.div
          key={`code-${index}`}
          className="absolute font-mono text-2xl text-primary/20"
          style={{
            left: `${20 + index * 20}%`,
            top: `${15 + index * 18}%`,
            textShadow: "0 0 10px hsl(var(--primary) / 0.3)",
          }}
          animate={{
            y: [-10, 10, -10],
            opacity: [0.2, 0.5, 0.2],
            rotate: [-5, 5, -5],
          }}
          transition={{
            duration: 5 + index,
            delay: index * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {code}
        </motion.div>
      ))}

      {/* Sparkle particles */}
      {[...Array(15)].map((_, index) => (
        <motion.div
          key={`sparkle-${index}`}
          className="absolute rounded-full"
          style={{
            width: 2 + Math.random() * 2,
            height: 2 + Math.random() * 2,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: "white",
            boxShadow: "0 0 6px white, 0 0 12px hsl(var(--primary))",
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            delay: Math.random() * 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/40" />
    </div>
  );
};

export default ParticleBackground;
