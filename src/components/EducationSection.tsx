import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const education = [
  {
    degree: "B.Tech in Computer Science (Data Science)",
    institution: "VNR Vignana Jyothi Institute of Engineering and Technology",
    location: "Hyderabad, Telangana",
    duration: "2023 - 2027 (Expected)",
    grade: "CGPA: 9.75",
    highlights: [
      "Specialization in Data Science",
      "Active member of Coding Club",
      "Technical Team Member",
    ],
  },
  {
    degree: "Intermediate (MPC)",
    institution: "Sri Chaitanya Junior College",
    location: "Hyderabad, Telangana",
    duration: "2021 - 2023",
    grade: "Percentage: 98.5%",
    highlights: [
      "Mathematics, Physics, Chemistry",
      "Strong foundation in analytical skills",
    ],
  },
  {
    degree: "Secondary School (SSC)",
    institution: "High School",
    location: "Hyderabad, Telangana",
    duration: "2020 - 2021",
    grade: "CGPA: 10",
    highlights: [
      "Excellence in academics",
      "Foundation in computer basics",
    ],
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-mono text-sm mb-4 block">// EDUCATION</span>
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text">
            Academic Journey
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-primary to-accent/20 hidden md:block" />

          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex flex-col lg:flex-row gap-8 ${
                  index % 2 === 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-8 lg:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background z-10 shadow-[0_0_20px_hsl(var(--accent))]" />

                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? "lg:pr-16" : "lg:pl-16"} md:ml-16 lg:ml-0`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="glass-card p-8 relative overflow-hidden group"
                  >
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
                          <GraduationCap className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-foreground mb-1">
                            {edu.degree}
                          </h3>
                          <p className="text-accent font-medium">{edu.institution}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-accent" />
                          {edu.duration}
                        </span>
                        <span className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-accent" />
                          {edu.location}
                        </span>
                      </div>

                      <div className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
                        {edu.grade}
                      </div>

                      <ul className="space-y-2">
                        {edu.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-center gap-2 text-muted-foreground text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>

                {/* Spacer for timeline layout */}
                <div className="hidden lg:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
