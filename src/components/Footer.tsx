import { Facebook, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gradient">ABG</h3>
            <p className="text-background/70">
              Asociación de Basketball del Guayas - Promoviendo el baloncesto en Ecuador desde 2010
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => document.getElementById("nosotros")?.scrollIntoView({ behavior: "smooth" })} className="text-background/70 hover:text-background transition-colors">
                  Quiénes Somos
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById("mision")?.scrollIntoView({ behavior: "smooth" })} className="text-background/70 hover:text-background transition-colors">
                  Misión y Visión
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById("torneos")?.scrollIntoView({ behavior: "smooth" })} className="text-background/70 hover:text-background transition-colors">
                  Torneos
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contáctanos</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-background/70">
                <Phone size={18} />
                <span>+593 4 123 4567</span>
              </li>
              <li className="flex items-center gap-2 text-background/70">
                <Mail size={18} />
                <span>info@abg.ec</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a href="#" className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-full flex items-center justify-center transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-full flex items-center justify-center transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 text-center text-background/60">
          <p>&copy; {new Date().getFullYear()} Asociación de Basketball del Guayas. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
