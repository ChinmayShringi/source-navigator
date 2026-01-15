import ParticlesBackground from "@/components/ParticlesBackground";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FrameworksSection from "@/components/FrameworksSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-cosmic overflow-x-hidden">
      <ParticlesBackground />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <FrameworksSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
