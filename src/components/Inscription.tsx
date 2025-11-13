import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Inscription = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    team: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Aquí puedes integrar tu servicio de envío de emails o API
      console.log("Form data:", formData);
      
      toast({
        title: "¡Inscripción enviada!",
        description: "Nos pondremos en contacto contigo pronto.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        team: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Ocurrió un error al enviar el formulario.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="inscripcion" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
          Inscripción
        </h2>
        <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          ¿Tu equipo quiere participar en nuestros torneos? Completa el formulario y nos pondremos en contacto contigo.
        </p>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-card rounded-xl border border-border p-8 space-y-6">
            {/* Nombre */}
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Nombre *
              </label>
              <Input
                id="name"
                name="name"
                placeholder="Tu nombre completo"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Correo Electrónico *
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="tu@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Teléfono */}
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium">
                Teléfono *
              </label>
              <Input
                id="phone"
                name="phone"
                placeholder="+593 9 XXXX XXXX"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            {/* Equipo */}
            <div className="space-y-2">
              <label htmlFor="team" className="text-sm font-medium">
                Nombre del Equipo *
              </label>
              <Input
                id="team"
                name="team"
                placeholder="Nombre de tu equipo"
                value={formData.team}
                onChange={handleChange}
                required
              />
            </div>

            {/* Mensaje */}
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Mensaje Adicional
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Cuéntanos más sobre tu equipo o cualquier pregunta"
                value={formData.message}
                onChange={handleChange}
                className="resize-none"
                rows={4}
              />
            </div>

            {/* Submit Button */}
            <div className="flex gap-4">
              <Button
                type="submit"
                disabled={isLoading}
                className="flex-1 bg-primary hover:bg-primary/90"
              >
                {isLoading ? "Enviando..." : "Enviar Inscripción"}
              </Button>
              <Button
                type="reset"
                variant="outline"
                onClick={() =>
                  setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    team: "",
                    message: "",
                  })
                }
              >
                Limpiar
              </Button>
            </div>
          </form>

          {/* Info Box */}
          <div className="mt-12 p-6 bg-accent/10 rounded-lg border border-accent/20">
            <h3 className="text-lg font-semibold mb-3">¿Preguntas?</h3>
            <p className="text-muted-foreground mb-4">
              Si tienes dudas sobre el proceso de inscripción o necesitas más información, no dudes en contactarnos.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>📧 Email: </p>
              <p>📞 Teléfono:</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inscription;
