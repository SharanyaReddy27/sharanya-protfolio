import { motion } from "framer-motion";

const ParticleBackground = () => {
  const glassShapes = [
    { size: 180, x: "5%", y: "10%", delay: 0, duration: 12, rotate: 45 },
    { size: 120, x: "80%", y: "5%", delay: 2, duration: 15, rotate: -30 },
    { size: 200, x: "70%", y: "60%", delay: 1, duration: 18, rotate: 60 },
    { size: 100, x: "15%", y: "70%", delay: 3, duration: 14, rotate: -45 },
    { size: 140, x: "50%", y: "80%", delay: 0.5, duration: 16, rotate: 30 },
    { size: 90, x: "90%", y: "40%", delay: 2.5, duration: 13, rotate: -60 },
    { size: 160, x: "25%", y: "35%", delay: 1.5, duration: 17, rotate: 15 },
    { size: 70, x: "60%", y: "20%", delay: 4, duration: 11, rotate: -15 },
  ];

  const floatingOrbs = [
    { size: 300, x: "-5%", y: "20%", color: "primary", delay: 0 },
    { size: 400, x: "70%", y: "-10%", color: "accent", delay: 1 },
    { size: 350, x: "80%", y: "70%", color: "neon-violet", delay: 2 },
    { size: 250, x: "30%", y: "80%", color: "neon-blue", delay: 1.5 },
  ];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />
      
      {/* Animated gradient mesh */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(ellipse at 0% 0%, hsl(var(--primary) / 0.15) 0%, transparent 50%)",
            "radial-gradient(ellipse at 100% 100%, hsl(var(--primary) / 0.15) 0%, transparent 50%)",
            "radial-gradient(ellipse at 0% 100%, hsl(var(--accent) / 0.1) 0%, transparent 50%)",
            "radial-gradient(ellipse at 0% 0%, hsl(var(--primary) / 0.15) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Large soft glow orbs */}
      {floatingOrbs.map((orb, index) => (
        <motion.div
          key={`orb-${index}`}
          className={`absolute rounded-full blur-3xl`}
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: `radial-gradient(circle, hsl(var(--${orb.color}) / 0.2) 0%, transparent 70%)`,
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.7, 0.4],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10 + index * 2,
            delay: orb.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating glassmorphism shapes */}
      {glassShapes.map((shape, index) => (
        <motion.div
          key={`glass-${index}`}
          className="absolute rounded-2xl backdrop-blur-sm border border-white/10"
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
            background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
            boxShadow: "0 8px 32px rgba(139, 92, 246, 0.1), inset 0 0 20px rgba(255,255,255,0.02)",
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            rotate: [shape.rotate, shape.rotate + 10, shape.rotate],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating glass circles with neon glow */}
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={`circle-${index}`}
          className="absolute rounded-full"
          style={{
            width: 20 + index * 15,
            height: 20 + index * 15,
            left: `${15 + index * 15}%`,
            top: `${20 + index * 12}%`,
            background: "rgba(139, 92, 246, 0.1)",
            boxShadow: "0 0 20px rgba(139, 92, 246, 0.3), inset 0 0 10px rgba(255,255,255,0.1)",
            border: "1px solid rgba(139, 92, 246, 0.2)",
          }}
          animate={{
            y: [0, -30 - index * 5, 0],
            x: [0, 15 + index * 3, 0],
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 6 + index,
            delay: index * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Thin floating lines */}
      {[...Array(4)].map((_, index) => (
        <motion.div
          key={`line-${index}`}
          className="absolute h-px"
          style={{
            width: 100 + index * 50,
            left: `${10 + index * 25}%`,
            top: `${30 + index * 15}%`,
            background: `linear-gradient(90deg, transparent, hsl(var(--accent) / 0.3), transparent)`,
          }}
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scaleX: [0.8, 1.2, 0.8],
            x: [-20, 20, -20],
          }}
          transition={{
            duration: 8 + index * 2,
            delay: index,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Sparkle dots */}
      {[...Array(12)].map((_, index) => (
        <motion.div
          key={`sparkle-${index}`}
          className="absolute rounded-full bg-white"
          style={{
            width: 2 + Math.random() * 3,
            height: 2 + Math.random() * 3,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 0.8, 0],
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
    </div>
  );
};

export default ParticleBackground;
