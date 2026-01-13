import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Smart IV Fluid Monitoring System",
    description: "A comprehensive healthcare monitoring solution that tracks IV fluid levels in real-time, preventing complications and enabling timely interventions by medical staff.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io", "Express"],
    features: [
      "Real-time fluid level monitoring",
      "Automated alert system for nurses",
      "Dashboard for multiple patient tracking",
      "Historical data analysis",
    ],
  },
  {
    title: "Online Exam Portal",
    description: "A secure and scalable examination platform with robust authentication, automatic evaluation, and comprehensive result management for educational institutions.",
    tech: ["Java", "MySQL", "Swing", "JDBC"],
    features: [
      "Secure user authentication",
      "Randomized question generation",
      "Auto-evaluation with instant results",
      "Admin panel for exam management",
    ],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-mono text-sm mb-4 block">// MY WORK</span>
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've built. Each one taught me something new
            and pushed my skills further.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tech={project.tech}
              features={project.features}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground text-sm">
            More projects coming soon... Currently working on exciting new things! 🚀
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
