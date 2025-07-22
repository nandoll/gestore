import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const equipmentSections = [
  {
    title: "Maquinaria Pesada",
    description:
      "Nuestra flota de excavadoras, cargadores, bulldozers y más, para todo tipo de movimiento de tierras.",
    image: "/images/equipos/1-equipos-maquinaria-pesada.webp",
    href: "/equipos/maquinaria",
  },
  {
    title: "Equipos Especializados",
    description:
      "Herramientas y maquinaria específica para tareas de perforación, voladura, y proyectos complejos.",
    image: "/images/equipos/2-equipos-especializados.webp",
    href: "/equipos/especializados",
  },
  {
    title: "Especificaciones Técnicas",
    description:
      "Accede a las fichas técnicas detalladas de cada uno de nuestros equipos.",
    image: "/images/equipos/3-equipos-especificaciones.webp",
    href: "/equipos/especificaciones",
  },
  {
    title: "Disponibilidad",
    description:
      "Consulta la disponibilidad actual de nuestra maquinaria para planificar tu próximo proyecto.",
    image: "/images/equipos/4-equipos-disponiblidad.webp",
    href: "/equipos/disponibilidad",
  },
];

export default function EquiposPage() {
  return (
    <section className="py-20 bg-stone-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white">
          Nuestros <span className="text-amber-400">Equipos</span>
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-stone-400">
          Contamos con una flota de maquinaria pesada y equipos especializados
          de última generación, listos para enfrentar cualquier desafío.
        </p>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {equipmentSections.map((section) => (
            <Card
              key={section.title}
              className="bg-stone-800 border-stone-700 text-white overflow-hidden group"
            >
              <CardHeader className="p-0">
                <div className="overflow-hidden h-56 flex items-center justify-center">
                  <Image
                    src={section.image}
                    alt={section.title}
                    width={400}
                    height={400}
                    className="w-full h-auto object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6 text-left">
                <CardTitle className="mt-2 text-xl font-bold text-white h-16">
                  {section.title}
                </CardTitle>
                <p className="mt-2 text-stone-400 h-24">
                  {section.description}
                </p>
                <Button asChild className="mt-4">
                  <Link href={section.href}>Ver Detalles</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
