import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, User, Briefcase, Award, Mail, Github, Linkedin, Code } from "lucide-react";

const navItems = [
  { icon: Home, label: "Home", href: "#home" },
  { icon: User, label: "About", href: "#about" },
  { icon: Briefcase, label: "Projects", href: "#projects" },
  { icon: Award, label: "Certifications", href: "#certifications" },
  { icon: Mail, label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/sharanyareddy", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/sharanyareddy", label: "LinkedIn" },
  { icon: Code, href: "https://leetcode.com/sharanyareddy", label: "LeetCode" },
];

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      {/* Toggle Button */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-[60] p-3 rounded-xl backdrop-blur-xl bg-card/80 border border-accent/30 shadow-lg"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-accent" />
        ) : (
          <Menu className="w-6 h-6 text-accent" />
        )}
      </motion.button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[55]"
            />
            <motion.nav
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 h-screen w-72 backdrop-blur-xl bg-card/90 border-r border-accent/30 z-[58] p-8 pt-20"
            >
              {/* Logo */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-neon-gradient flex items-center justify-center">
                  <span className="text-xl font-bold text-white">SR</span>
                </div>
                <div>
                  <p className="font-bold text-foreground">Sharanya</p>
                  <p className="text-xs text-muted-foreground">Developer</p>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="space-y-2">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-accent/20 transition-colors group"
                  >
                    <item.icon className="w-5 h-5 text-accent" />
                    <span className="font-medium text-foreground group-hover:text-accent transition-colors">
                      {item.label}
                    </span>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-xs text-muted-foreground mb-4">Connect with me</p>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-accent/10 hover:bg-accent/20 transition-colors"
                    >
                      <social.icon className="w-5 h-5 text-accent" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;
