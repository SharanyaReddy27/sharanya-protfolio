import { motion } from "framer-motion";
import { Heart, Github, Linkedin, Code, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/sharanyareddy", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/sharanyareddy", label: "LinkedIn" },
    { icon: Code, href: "https://leetcode.com/sharanyareddy", label: "LeetCode" },
    { icon: Mail, href: "mailto:gudasharanyareddy2703@gmail.com", label: "Email" },
  ];

  return (
    <footer className="py-12 border-t border-accent/10">
      <div className="container mx-auto px-8">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="w-14 h-14 rounded-xl bg-neon-gradient flex items-center justify-center cursor-pointer"
          >
            <span className="text-xl font-bold text-white">SR</span>
          </motion.div>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 glass-card hover:border-accent/50 transition-colors"
              >
                <social.icon className="w-5 h-5 text-muted-foreground hover:text-accent transition-colors" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© {currentYear} Sharanya Reddy G. Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-accent fill-accent" />
            </motion.div>
            <span>in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
