import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MissionVision from "@/components/MissionVision";
import Directiva from "@/components/Directiva";
import Tournaments from "@/components/Tournaments";
import Inscription from "@/components/Inscription";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <MissionVision />
      <Directiva />
      <Tournaments />
      <Inscription />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
