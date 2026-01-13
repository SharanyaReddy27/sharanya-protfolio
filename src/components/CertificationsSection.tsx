import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Tableau for Data Science",
    issuer: "Udemy",
    year: "2024",
    description: "Comprehensive data visualization and analytics with Tableau",
  },
  {
    title: "Data Analytics Virtual Experience",
    issuer: "Deloitte (Forage)",
    year: "2024",
    description: "Real-world data analytics and business intelligence projects",
  },
  {
    title: "GenAI Analytics",
    issuer: "Tata Group",
    year: "2024",
    description: "Generative AI applications in data analytics",
  },
  {
    title: "Cloud Computing",
    issuer: "NPTEL",
    year: "2024",
    description: "Foundation concepts of cloud architecture and services",
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-mono text-sm mb-4 block">// ACHIEVEMENTS</span>
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">
            Certifications
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Continuous learning is key. Here are some certifications I've earned.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 0 40px hsl(258 90% 66% / 0.3)",
              }}
              className="glass-card p-6 group cursor-pointer relative overflow-hidden"
            >
              {/* Animated border */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 rounded-xl border-2 border-accent/50 pointer-events-none"
              />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <Award className="w-6 h-6 text-accent group-hover:text-white transition-colors" />
                </div>

                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-sm leading-tight group-hover:text-accent transition-colors">
                    {cert.title}
                  </h3>
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="p-1"
                  >
                    <ExternalLink className="w-4 h-4 text-accent" />
                  </motion.div>
                </div>

                <p className="text-accent text-xs font-medium mb-2">{cert.issuer}</p>
                <p className="text-muted-foreground text-xs leading-relaxed mb-3">
                  {cert.description}
                </p>

                <span className="inline-block px-2 py-1 text-xs font-mono rounded bg-accent/10 text-accent border border-accent/20">
                  {cert.year}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
