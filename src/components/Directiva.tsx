import { useQuery } from "@tanstack/react-query";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import presidenteImg from "@/assets/presidente.jpg";
import vicepresidenteImg from "@/assets/vicepresidente.jpg";
import secretarioImg from "@/assets/secretario.jpg";

const fallbackDirectiva = [
  {
    id: "local-1",
    position: "Presidente",
    name: "Dr. Carlos Mendoza",
    image: presidenteImg,
    description:
      "Líder visionario con más de 15 años de experiencia en la promoción del basketball a nivel provincial. Comprometido con el desarrollo deportivo juvenil.",
  },
  {
    id: "local-2",
    position: "Vicepresidente",
    name: "Lcda. María Fernández",
    image: vicepresidenteImg,
    description:
      "Apasionada por el deporte y la gestión deportiva. Ha liderado múltiples iniciativas para fortalecer el basketball femenino en la región.",
  },
  {
    id: "local-3",
    position: "Secretario",
    name: "Ing. Roberto Salazar",
    image: secretarioImg,
    description:
      "Experto en administración deportiva con una trayectoria destacada en la organización de torneos y eventos de alto nivel competitivo.",
  },
];

const fetchDirectiva = async () => {
  const snap = await getDocs(collection(db, "directiva"));
  return snap.docs.map((d) => ({ id: d.id, ...(d.data() as any) }));
};

const Directiva = () => {
  const { data: directiva = fallbackDirectiva } = useQuery<any[]>({
    queryKey: ["directiva"],
    queryFn: fetchDirectiva,
    staleTime: 1000 * 60 * 5,
  });

  return (
    <section id="directiva" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
          Nuestra Directiva
        </h2>
        <p className="text-center text-lg text-muted-foreground mb-16 max-w-2xl mx-auto">
          Conoce al equipo que lidera la Asociación de Basketball del Guayas
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {directiva.map((member: any) => (
            <div
              key={member.id || member.position}
              className="bg-card rounded-2xl overflow-hidden border-2 border-primary/10 card-hover shadow-lg"
            >
              {/* Header con color primario */}
              <div className="bg-gradient-to-r from-primary to-secondary p-6 text-center">
                <h3 className="text-2xl font-bold text-primary-foreground">{member.position}</h3>
              </div>

              {/* Contenido */}
              <div className="p-6 text-center">
                {/* Imagen circular */}
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <img
                    src={member.image || member.photoUrl}
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover border-4 border-primary/20 shadow-md"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 to-transparent" />
                </div>

                {/* Nombre */}
                <h4 className="text-xl font-bold text-foreground mb-3">{member.name}</h4>

                {/* Descripción */}
                <p className="text-muted-foreground leading-relaxed">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Directiva;
