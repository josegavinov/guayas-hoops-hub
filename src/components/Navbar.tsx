import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95">
      <div className="container ">
        <div className="flex items-center justify-evenly h-20">
          <div className="text-2xl font-bold text-gradient">
            ABG
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-strech gap-20">
            <button onClick={() => scrollToSection("inicio")} className="text-foreground hover:text-primary transition-colors font-medium bold">
              Inicio
            </button>
            <button onClick={() => scrollToSection("nosotros")} className="text-foreground hover:text-primary transition-colors font-medium">
              Nosotros
            </button>
            <button onClick={() => scrollToSection("mision")} className="text-foreground hover:text-primary transition-colors font-medium">
              Misión y Visión
            </button>
            <button onClick={() => scrollToSection("directiva")} className="text-foreground hover:text-primary transition-colors font-medium">
              Directiva
            </button>
            <button onClick={() => scrollToSection("torneos")} className="text-foreground hover:text-primary transition-colors font-medium">
              Torneos
            </button>
            <button onClick={() => scrollToSection("inscripcion")} className="text-foreground hover:text-primary transition-colors font-medium">
              Inscripción
            </button>
            <Button 
              onClick={() => window.open("https://copafacil.com/-aakm9@mre7", "_blank")}
              className="bg-primary hover:bg-primary/90"
            >
              Perfil Copa Facil
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              <button onClick={() => scrollToSection("inicio")} className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Inicio
              </button>
              <button onClick={() => scrollToSection("nosotros")} className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Nosotros
              </button>
              <button onClick={() => scrollToSection("mision")} className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Misión y Visión
              </button>
              <button onClick={() => scrollToSection("directiva")} className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Directiva
              </button>
              <button onClick={() => scrollToSection("torneos")} className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Torneos
              </button>
              <button onClick={() => scrollToSection("inscripcion")} className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Inscripción
              </button>
              <Button 
                onClick={() => window.open("https://copafacil.com/-aakm9@mre7", "_blank")}
                className="bg-primary hover:bg-primary/90 w-full"
              >
                Únete
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
