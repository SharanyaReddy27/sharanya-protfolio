import ParticleBackground from "@/components/ParticleBackground";
import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import EducationSection from "@/components/EducationSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ParticleBackground />
      
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      
      {/* Mobile Navigation */}
      <MobileNav />
      
      <main className="lg:ml-24">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ActivitiesSection />
        <EducationSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
