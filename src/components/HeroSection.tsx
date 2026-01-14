import { motion } from "framer-motion";
import TypewriterText from "./TypewriterText";
import { ArrowDown, Download, Mail } from "lucide-react";
const HeroSection = () => {
  const roles = ["Full-Stack Developer", "Data Science Enthusiast", "Problem Solver", "Competitive Programmer"];
  return <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Floating Orbs */}
      <motion.div animate={{
      y: [-20, 20, -20],
      x: [-10, 10, -10],
      rotate: [0, 360]
    }} transition={{
      duration: 20,
      repeat: Infinity,
      ease: "linear"
    }} className="absolute top-20 right-20 w-32 h-32 rounded-full bg-neon-gradient opacity-20 blur-xl" />
      <motion.div animate={{
      y: [20, -20, 20],
      x: [10, -10, 10]
    }} transition={{
      duration: 15,
      repeat: Infinity,
      ease: "easeInOut"
    }} className="absolute bottom-20 left-40 w-48 h-48 rounded-full bg-accent/20 blur-2xl" />

      <div className="container mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center pt-20 lg:pt-0">
        {/* Left Content */}
        <motion.div initial={{
        opacity: 0,
        x: -50
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.8
      }} className="space-y-6">
          <motion.span initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.2
        }} className="inline-block px-4 py-2 glass-card text-sm font-medium text-accent">
            👋 Welcome to my portfolio
          </motion.span>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
            <span className="text-foreground">Hi, I'm</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-purple-500 drop-shadow-[0_0_25px_rgba(139,92,246,0.5)]">SHARANYA</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-500">REDDY </span>
          </h1>

          <div className="text-xl lg:text-2xl text-muted-foreground h-10">
            <TypewriterText words={roles} className="font-mono" />
          </div>

          

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.6
        }} className="flex flex-wrap gap-4 pt-4">
            <motion.a href="#contact" whileHover={{
            scale: 1.05,
            boxShadow: "0 0 30px hsl(258 90% 66% / 0.5)"
          }} whileTap={{
            scale: 0.95
          }} className="px-6 py-3 lg:px-8 lg:py-4 bg-neon-gradient rounded-xl font-semibold text-white flex items-center gap-2 transition-all duration-300">
              <Mail className="w-5 h-5" />
              Get in Touch
            </motion.a>
            <motion.a href="/resume.pdf" target="_blank" rel="noopener noreferrer" whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} className="px-6 py-3 lg:px-8 lg:py-4 glass-card font-semibold flex items-center gap-2 hover:border-accent/50 transition-all duration-300">
              <Download className="w-5 h-5" />
              View Resume
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right - Profile Orb */}
        <motion.div initial={{
        opacity: 0,
        scale: 0.5
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        duration: 0.8,
        delay: 0.3
      }} className="flex justify-center items-center">
          <div className="relative">
            {/* Outer glow ring */}
            <motion.div animate={{
            rotate: 360
          }} transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }} className="absolute inset-0 w-80 h-80 rounded-full border-2 border-dashed border-accent/30" />
            
            {/* Inner rotating ring */}
            <motion.div animate={{
            rotate: -360
          }} transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }} className="absolute inset-4 w-72 h-72 rounded-full border border-neon-blue/40" />

            {/* Profile orb */}
            <motion.div animate={{
            y: [-10, 10, -10]
          }} transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }} className="relative w-64 h-64 rounded-full bg-neon-gradient p-1 glow-pulse floating-orb">
              <div className="w-full h-full rounded-full glass flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <span className="text-6xl font-bold gradient-text">SR</span>
                  <p className="text-sm text-muted-foreground mt-2">B.Tech CS (DS)</p>
                </div>
              </div>
            </motion.div>

            {/* Floating badges */}
            <motion.div animate={{
            y: [-5, 5, -5],
            x: [0, 5, 0]
          }} transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }} className="absolute -top-4 -right-4 px-4 py-2 glass-card text-sm font-medium">
              💻 React Expert
            </motion.div>
            <motion.div animate={{
            y: [5, -5, 5],
            x: [0, -5, 0]
          }} transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }} className="absolute -bottom-4 -left-4 px-4 py-2 glass-card text-sm font-medium">
              🎯 Problem Solver
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1,
      y: [0, 10, 0]
    }} transition={{
      delay: 1,
      duration: 1.5,
      repeat: Infinity
    }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
          <span className="text-sm">Scroll Down</span>
          <ArrowDown className="w-5 h-5" />
        </a>
      </motion.div>
    </section>;
};
export default HeroSection;