import ParticleBackground from "@/components/ParticleBackground";
import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import Footer from "@/components/Footer";

const About = () => {
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
        {/* Page Header */}
        <section className="pt-32 pb-12 relative">
          <div className="container mx-auto px-8 text-center">
            <span className="text-accent font-mono text-sm mb-4 block animate-pulse">
              // GET TO KNOW ME
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold gradient-text mb-6">
              About Me
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover my journey, skills, and academic background
            </p>
          </div>
        </section>
        
        <AboutSection />
        <EducationSection />
        <Footer />
      </main>
    </div>
  );
};

export default About;
