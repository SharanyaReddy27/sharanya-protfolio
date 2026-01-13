import { motion } from "framer-motion";
import SkillBar from "./SkillBar";
import CounterStat from "./CounterStat";
import { Code, Trophy, Briefcase, Coffee } from "lucide-react";

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

const stats = [
  { value: 200, label: "LeetCode Problems", suffix: "+", icon: <Code className="w-6 h-6" /> },
  { value: 2, label: "Projects Completed", suffix: "", icon: <Briefcase className="w-6 h-6" /> },
  { value: 4, label: "Certifications", suffix: "", icon: <Trophy className="w-6 h-6" /> },
  { value: 500, label: "Cups of Coffee", suffix: "+", icon: <Coffee className="w-6 h-6" /> },
];

const activities = [
  "VNR VJIET Coding Club Member",
  "Technical Team Member",
  "Active on competitive programming platforms",
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

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8"
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
                <Code className="w-5 h-5 text-accent" />
              </span>
              Technical Skills
            </h3>
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

          {/* Activities & Bio */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6">About Me</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm a passionate 2nd-year B.Tech Computer Science student specializing in Data Science at VNR VJIET, Hyderabad. 
                My journey in tech has been driven by curiosity and a desire to build impactful solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me solving competitive programming challenges on LeetCode and CodeForces, 
                exploring new technologies, or contributing to open-source projects.
              </p>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-accent" />
                </span>
                Activities
              </h3>
              <ul className="space-y-3">
                {activities.map((activity, index) => (
                  <motion.li
                    key={activity}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 text-muted-foreground"
                  >
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    {activity}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
