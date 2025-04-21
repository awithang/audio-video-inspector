
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TechnologiesSection from "@/components/TechnologiesSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 bg-[#101427]">
        <HeroSection />
        <TechnologiesSection />
        <CaseStudiesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
