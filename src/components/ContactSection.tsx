import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, Sparkles } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFocused, setIsFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "gudasharanyareddy2703@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 7989696226" },
    { icon: MapPin, label: "Location", value: "Hyderabad, India" },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-mono text-sm mb-4 block">// GET IN TOUCH</span>
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's connect and create something amazing!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-accent" />
                Contact Info
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                      <info.icon className="w-5 h-5 text-accent group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{info.label}</p>
                      <p className="text-sm font-medium">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-xl font-bold mb-4">Quick Message</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                I'm currently open to new opportunities and collaborations. 
                Whether you have a project, job opportunity, or just want to say hi, 
                feel free to reach out!
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Your Name</label>
                <div className="relative">
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    onFocus={() => setIsFocused("name")}
                    onBlur={() => setIsFocused(null)}
                    className={`w-full px-4 py-3 bg-muted/50 rounded-xl border transition-all duration-300 outline-none ${
                      isFocused === "name"
                        ? "border-accent shadow-[0_0_20px_hsl(258_90%_66%_/_0.3)]"
                        : "border-accent/20 hover:border-accent/40"
                    }`}
                    placeholder="John Doe"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Email Address</label>
                <div className="relative">
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    onFocus={() => setIsFocused("email")}
                    onBlur={() => setIsFocused(null)}
                    className={`w-full px-4 py-3 bg-muted/50 rounded-xl border transition-all duration-300 outline-none ${
                      isFocused === "email"
                        ? "border-accent shadow-[0_0_20px_hsl(258_90%_66%_/_0.3)]"
                        : "border-accent/20 hover:border-accent/40"
                    }`}
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <div className="relative">
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    onFocus={() => setIsFocused("message")}
                    onBlur={() => setIsFocused(null)}
                    rows={5}
                    className={`w-full px-4 py-3 bg-muted/50 rounded-xl border transition-all duration-300 outline-none resize-none ${
                      isFocused === "message"
                        ? "border-accent shadow-[0_0_20px_hsl(258_90%_66%_/_0.3)]"
                        : "border-accent/20 hover:border-accent/40"
                    }`}
                    placeholder="Tell me about your project..."
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                whileHover={{ 
                  scale: 1.02, 
                  boxShadow: "0 0 30px hsl(258 90% 66% / 0.5)" 
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-neon-gradient rounded-xl font-semibold text-white flex items-center justify-center gap-2 transition-all duration-300"
              >
                <Send className="w-5 h-5" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
