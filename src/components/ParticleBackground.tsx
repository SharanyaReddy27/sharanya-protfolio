import { motion } from "framer-motion";

const ParticleBackground = () => {
  // Resume-themed floating icons/shapes
  const floatingElements = [
    { icon: "</>", x: "10%", y: "20%", delay: 0, duration: 8 },
    { icon: "{ }", x: "85%", y: "15%", delay: 1, duration: 10 },
    { icon: "◆", x: "75%", y: "70%", delay: 2, duration: 9 },
    { icon: "//", x: "20%", y: "75%", delay: 0.5, duration: 11 },
    { icon: "★", x: "90%", y: "45%", delay: 1.5, duration: 7 },
    { icon: "○", x: "5%", y: "50%", delay: 2.5, duration: 12 },
    { icon: "△", x: "50%", y: "85%", delay: 3, duration: 8 },
    { icon: "[ ]", x: "60%", y: "10%", delay: 0.8, duration: 10 },
  ];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--accent)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--accent)) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Floating code-themed elements */}
      {floatingElements.map((el, index) => (
        <motion.div
          key={index}
          className="absolute text-accent/10 font-mono text-2xl select-none pointer-events-none"
          style={{ left: el.x, top: el.y }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.05, 0.15, 0.05],
            rotate: [-5, 5, -5],
          }}
          transition={{
            duration: el.duration,
            delay: el.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {el.icon}
        </motion.div>
      ))}

      {/* Soft glow orbs */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-primary/5 blur-3xl"
        style={{ left: "10%", top: "20%" }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-80 h-80 rounded-full bg-accent/5 blur-3xl"
        style={{ right: "10%", bottom: "20%" }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.2, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default ParticleBackground;
