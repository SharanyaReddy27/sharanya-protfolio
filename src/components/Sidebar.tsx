import { motion } from "framer-motion";
import { Home, User, Briefcase, Award, Mail, Github, Linkedin, Code, GraduationCap } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { icon: Home, label: "Home", href: "/", isRoute: true },
  { icon: User, label: "About", href: "/about", isRoute: true },
  { icon: GraduationCap, label: "Education", href: "/about#education", isRoute: true },
  { icon: Briefcase, label: "Projects", href: "/#projects", isRoute: false },
  { icon: Award, label: "Certifications", href: "/#certifications", isRoute: false },
  { icon: Mail, label: "Contact", href: "/#contact", isRoute: false },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/sharanyareddy", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/sharanyareddy", label: "LinkedIn" },
  { icon: Code, href: "https://leetcode.com/sharanyareddy", label: "LeetCode" },
];

const Sidebar = () => {
  const location = useLocation();
  
  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed left-0 top-0 h-screen w-20 lg:w-24 backdrop-blur-xl bg-card/60 border-r border-accent/40 flex flex-col items-center py-8 z-50 shadow-[0_0_30px_hsl(258_90%_66%_/_0.15)]"
    >
      {/* Logo */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="w-12 h-12 rounded-xl bg-neon-gradient flex items-center justify-center mb-12 cursor-pointer"
      >
        <span className="text-xl font-bold text-white">SR</span>
      </motion.div>

      {/* Navigation */}
      <nav className="flex-1 flex flex-col items-center gap-4">
        {navItems.map((item, index) => {
          const isActive = item.isRoute 
            ? location.pathname === item.href || (item.href.includes('#') && location.pathname === item.href.split('#')[0])
            : false;
          
          const NavWrapper = item.isRoute ? Link : 'a';
          const navProps = item.isRoute 
            ? { to: item.href }
            : { href: item.href };

          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
              whileHover={{ scale: 1.2, x: 5 }}
            >
              <NavWrapper
                {...navProps as any}
                className={`group relative p-3 rounded-xl hover:bg-accent/20 transition-all duration-300 block ${
                  isActive ? "bg-accent/20" : ""
                }`}
              >
                <item.icon className={`w-6 h-6 transition-colors duration-300 ${
                  isActive ? "text-accent" : "text-muted-foreground group-hover:text-accent"
                }`} />
                <span className="absolute left-full ml-4 px-3 py-1 bg-card/90 backdrop-blur-md rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap border border-accent/20">
                  {item.label}
                </span>
              </NavWrapper>
            </motion.div>
          );
        })}
      </nav>

      {/* Social Links */}
      <div className="flex flex-col items-center gap-3 pt-8 border-t border-accent/20">
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
            whileHover={{ scale: 1.3, rotate: 10 }}
            className="p-2 rounded-lg hover:bg-accent/20 transition-colors duration-300"
          >
            <social.icon className="w-5 h-5 text-muted-foreground hover:text-accent transition-colors" />
          </motion.a>
        ))}
      </div>
    </motion.aside>
  );
};

export default Sidebar;
