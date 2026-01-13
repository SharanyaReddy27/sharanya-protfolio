import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { ExternalLink, Github, Layers } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  features: string[];
  index: number;
}

const ProjectCard = ({ title, description, tech, features, index }: ProjectCardProps) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    setRotateX(-mouseY / 20);
    setRotateY(mouseX / 20);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transformStyle: "preserve-3d",
      }}
      className="glass-card p-8 transition-all duration-200 cursor-pointer group relative overflow-hidden"
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />
      </div>

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-neon-gradient flex items-center justify-center">
            <Layers className="w-6 h-6 text-white" />
          </div>
          <div className="flex gap-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-lg hover:bg-accent/20 transition-colors"
            >
              <Github className="w-5 h-5 text-muted-foreground hover:text-accent" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-lg hover:bg-accent/20 transition-colors"
            >
              <ExternalLink className="w-5 h-5 text-muted-foreground hover:text-accent" />
            </motion.button>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
          {description}
        </p>

        <div className="mb-4">
          <h4 className="text-xs font-semibold text-accent mb-2">KEY FEATURES</h4>
          <ul className="space-y-1">
            {features.map((feature, i) => (
              <li key={i} className="text-xs text-muted-foreground flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-accent" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2 pt-4 border-t border-accent/10">
          {tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 text-xs font-mono rounded-full bg-accent/10 text-accent border border-accent/20"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
