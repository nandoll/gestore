import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Gem, HardHat, Shovel, Tractor } from "lucide-react";

const services = [
  {
    icon: <Tractor size={32} className="text-amber-400" />,
    title: "Alquiler de Maquinaria",
    description:
      "Flota moderna y con mantenimiento riguroso para garantizar máxima operatividad.",
  },
  {
    icon: <HardHat size={32} className="text-amber-400" />,
    title: "Proyectos de Construcción",
    description:
      "Ejecución de obras civiles, movimiento de tierras y más, con altos estándares de calidad.",
  },
  {
    icon: <Gem size={32} className="text-amber-400" />,
    title: "Servicios Mineros",
    description:
      "Soluciones especializadas para el sector minero, enfocadas en seguridad y eficiencia.",
  },
  {
    icon: <Shovel size={32} className="text-amber-400" />,
    title: "Operación de Equipos",
    description:
      "Contamos con personal certificado y con amplia experiencia para operar nuestros equipos.",
  },
];

export function Services() {
  return (
    <section id="servicios" className="py-20 bg-stone-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white">
          Nuestros <span className="text-amber-400">Servicios</span>
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-stone-400">
          Ofrecemos soluciones integrales adaptadas a las necesidades de los
          proyectos más exigentes.
        </p>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Card
              key={service.title}
              className="bg-stone-800 border-stone-700 text-white"
            >
              <CardHeader className="items-center">
                <div className="bg-amber-400/10 rounded-full p-4">
                  {service.icon}
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <CardTitle className="text-xl font-bold text-white">
                  {service.title}
                </CardTitle>
                <p className="mt-2 text-stone-400">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
