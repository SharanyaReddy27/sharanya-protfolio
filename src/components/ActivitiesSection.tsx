import { motion } from "framer-motion";
import { Trophy, Users, Code, Award } from "lucide-react";

const activities = [
  {
    icon: Users,
    title: "VNR VJIET Coding Club Member",
    description: "Active member participating in coding challenges and workshops"
  },
  {
    icon: Code,
    title: "Technical Team Member",
    description: "Contributing to technical projects and team initiatives"
  },
  {
    icon: Award,
    title: "Competitive Programming",
    description: "Active on competitive programming platforms solving algorithmic problems"
  },
];

const ActivitiesSection = () => {
  return (
    <section id="activities" className="py-24 relative">
      <div className="container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-mono text-sm mb-4 block">// ACTIVITIES</span>
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text">
            Extracurricular Activities
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-card p-6 text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <activity.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-lg font-bold mb-2">{activity.title}</h3>
              <p className="text-muted-foreground text-sm">{activity.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
