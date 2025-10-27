import { Button } from "./ui/button";
import heroImage from "@/assets/hero-basketball-court.jpg";

const Hero = () => {
  const scrollToTournaments = () => {
    const element = document.getElementById("torneos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-secondary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-primary-foreground mb-6 animate-fade-in">
          Asociación de Basketball
          <br />
          del Guayas
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Donde el talento ecuatoriano brilla en cada cancha
        </p>
        <Button 
          onClick={scrollToTournaments}
          size="lg"
          className="btn-hero text-lg animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          Descubre nuestros torneos
        </Button>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
