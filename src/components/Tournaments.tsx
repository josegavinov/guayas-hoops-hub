import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useQuery } from "@tanstack/react-query";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

// Fallback local data (se muestra mientras carga o si Firestore está vacío)
import tournament1 from "@/assets/tournament-1.jpg";
import tournament2 from "@/assets/tournament-2.jpg";
import tournament3 from "@/assets/tournament-3.jpg";

const fallbackTournaments = [
  {
    id: "local-1",
    title: "Copa Provincial 2024",
    image: tournament1,
    description: "El torneo más esperado del año con los mejores equipos de la región",
  },
  {
    id: "local-2",
    title: "Campeonato Juvenil",
    image: tournament2,
    description: "Desarrollando las futuras estrellas del basketball ecuatoriano",
  },
  {
    id: "local-3",
    title: "Liga de Verano",
    image: tournament3,
    description: "Acción intensa y competencia de alto nivel durante todo el verano",
  },
];

const fetchTournaments = async () => {
  const snap = await getDocs(collection(db, "tournaments"));
  return snap.docs.map((d) => ({ id: d.id, ...(d.data() as any) }));
};

const Tournaments = () => {
  const { data: tournaments = fallbackTournaments, isLoading } = useQuery<any[]>({
    queryKey: ["tournaments"],
    queryFn: fetchTournaments,
    staleTime: 1000 * 60 * 5,
  });

  return (
    <section id="torneos" className="py-20 bg-gradient-to-b from-accent/10 to-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
          Nuestros Torneos
        </h2>
        <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Descubre los emocionantes torneos que organizamos durante todo el año
        </p>

        <div className="max-w-5xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {tournaments.map((tournament: any) => (
                <CarouselItem key={tournament.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-4">
                    <div className="bg-card rounded-xl overflow-hidden border border-border card-hover h-full">
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={tournament.image || tournament.imageUrl}
                          alt={tournament.title}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <h3 className="absolute bottom-4 left-4 right-4 text-white text-2xl font-bold">
                          {tournament.title}
                        </h3>
                      </div>
                      <div className="p-6">
                        <p className="text-muted-foreground">
                          {tournament.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Tournaments;
