import { Users, Trophy, Target } from "lucide-react";

const About = () => {
  return (
    <section id="nosotros" className="py-20 bg-gradient-to-b from-background to-accent/10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gradient">
          ¿Quiénes Somos?
        </h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg md:text-xl text-center mb-12 text-muted-foreground">
            La Asociación de Basketball del Guayas es la organización líder en el desarrollo 
            del baloncesto en la región. Con más de una década de experiencia, promovemos 
            el deporte, formamos talentos y organizamos torneos de alto nivel que unen a 
            comunidades enteras bajo la pasión del basketball.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-6 rounded-xl bg-card card-hover border border-border">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2">Comunidad Unida</h3>
              <p className="text-muted-foreground">
                Miles de jugadores y fanáticos que comparten la pasión por el basketball
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-card card-hover border border-border">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <Trophy className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2">Torneos Profesionales</h3>
              <p className="text-muted-foreground">
                Organizamos competencias de alto nivel que impulsan el talento local
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-card card-hover border border-border">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2">Desarrollo Deportivo</h3>
              <p className="text-muted-foreground">
                Formamos atletas y promovemos valores a través del deporte
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
