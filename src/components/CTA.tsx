import { Button } from "./ui/button";
import { Smartphone, Users, Trophy } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary opacity-90" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-8 mb-8">
            <div className="w-16 h-16 bg-primary-foreground/20 backdrop-blur rounded-full flex items-center justify-center animate-fade-in">
              <Smartphone className="w-8 h-8 text-primary-foreground" />
            </div>
            <div className="w-16 h-16 bg-primary-foreground/20 backdrop-blur rounded-full flex items-center justify-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <Users className="w-8 h-8 text-primary-foreground" />
            </div>
            <div className="w-16 h-16 bg-primary-foreground/20 backdrop-blur rounded-full flex items-center justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Trophy className="w-8 h-8 text-primary-foreground" />
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold text-primary-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            ¡Tu Momento Es Ahora!
          </h2>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-10 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Únete a la comunidad de basketball más apasionada del Ecuador. 
            Registra tu equipo, sigue los torneos en vivo y vive cada jugada.
          </p>
          
          <Button 
            onClick={() => window.open("https://copafacil.com/-aakm9@mre7", "_blank")}
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-xl px-12 py-8 h-auto font-bold shadow-2xl hover:shadow-primary-foreground/20 transform hover:scale-105 transition-all duration-300 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            ¡Únete a la Acción en Nuestra App!
          </Button>

          <p className="mt-8 text-primary-foreground/70 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            Descarga ahora y forma parte de la historia del basketball guayasense
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
