import { Heart, Eye } from "lucide-react";

const MissionVision = () => {
  return (
    <section id="mision" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Misión */}
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-2xl border-2 border-primary/20 card-hover">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <Heart className="w-7 h-7 text-primary-foreground" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gradient">Misión</h2>
            </div>
            <p className="text-lg text-foreground leading-relaxed">
              Promover y desarrollar el baloncesto en la provincia del Guayas, 
              brindando oportunidades de competencia profesional y formación deportiva 
              que impulsen el talento local, fomenten valores y contribuyan al 
              crecimiento de nuestra comunidad a través del deporte.
            </p>
          </div>

          {/* Visión */}
          <div className="bg-gradient-to-br from-secondary/5 to-secondary/10 p-8 rounded-2xl border-2 border-secondary/20 card-hover">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center">
                <Eye className="w-7 h-7 text-primary-foreground" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gradient">Visión</h2>
            </div>
            <p className="text-lg text-foreground leading-relaxed">
              Ser la asociación líder de baloncesto en Ecuador, reconocida por la 
              excelencia de nuestros torneos, el desarrollo integral de deportistas 
              de clase mundial y nuestro compromiso con el fortalecimiento del 
              deporte como pilar fundamental de la sociedad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
