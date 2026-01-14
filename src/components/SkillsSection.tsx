import { motion } from "framer-motion";
import SkillBar from "./SkillBar";
import { Code } from "lucide-react";

const skills = [
  { name: "Java", level: 85 },
  { name: "C++", level: 80 },
  { name: "Python", level: 75 },
  { name: "React.js", level: 88 },
  { name: "Node.js", level: 82 },
  { name: "MongoDB", level: 78 },
  { name: "MySQL", level: 80 },
  { name: "Express.js", level: 75 },
  { name: "Tableau", level: 70 },
  { name: "SQL", level: 85 },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-mono text-sm mb-4 block">// MY SKILLS</span>
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text">
            Technical Skills
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto glass-card p-8"
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
              <Code className="w-6 h-6 text-accent" />
            </span>
            <h3 className="text-2xl font-bold">Programming & Frameworks</h3>
          </div>
          <div className="space-y-5">
            {skills.map((skill, index) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                delay={index * 0.1}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
