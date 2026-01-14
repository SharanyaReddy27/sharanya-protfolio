import { motion } from "framer-motion";
import CounterStat from "./CounterStat";
import { Code, Trophy, Briefcase, Coffee } from "lucide-react";

const stats = [
  { value: 200, label: "Problems Solved", suffix: "+", icon: <Code className="w-6 h-6" /> },
  { value: 2, label: "Projects Completed", suffix: "", icon: <Briefcase className="w-6 h-6" /> },
  { value: 4, label: "Certifications", suffix: "", icon: <Trophy className="w-6 h-6" /> },
  { value: 500, label: "Cups of Coffee", suffix: "+", icon: <Coffee className="w-6 h-6" /> },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-mono text-sm mb-4 block">// ABOUT ME</span>
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text">
            Know Who I Am
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <CounterStat
              key={stat.label}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              icon={stat.icon}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto glass-card p-8"
        >
          <h3 className="text-2xl font-bold mb-6">About Me</h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            I'm a passionate 2nd-year B.Tech Computer Science student specializing in Data Science at VNR VJIET, Hyderabad. 
            My journey in tech has been driven by curiosity and a desire to build impactful solutions.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            When I'm not coding, you'll find me solving competitive programming challenges, 
            exploring new technologies, or contributing to open-source projects.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
