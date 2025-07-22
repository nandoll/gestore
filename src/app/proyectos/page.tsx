import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projectSections = [
  {
    title: "Obras Civiles",
    description:
      "Proyectos de infraestructura vial, edificación y desarrollo urbano con los más altos estándares.",
    image: "/images/landing/proyecto-civil.webp",
    href: "/proyectos/obras-civiles",
  },
  {
    title: "Proyectos Mineros",
    description:
      "Soluciones innovadoras para el sector minero, desde la extracción hasta la gestión ambiental.",
    image: "/images/landing/proyecto-minero.webp",
    href: "/proyectos/proyectos-mineros",
  },
  {
    title: "Casos de Éxito",
    description:
      "Historias detalladas de cómo hemos resuelto desafíos complejos para nuestros clientes.",
    image: "/images/landing/proyecto-industrial.webp",
    href: "/proyectos/casos-exito",
  },
];

export default function ProyectosPage() {
  return (
    <section className="py-20 bg-stone-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white">
          Nuestros <span className="text-amber-400">Proyectos</span>
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-stone-400">
          Explora nuestra cartera de proyectos exitosos en obras civiles y
          minería.
        </p>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectSections.map((section) => (
            <Card
              key={section.title}
              className="bg-stone-800 border-stone-700 text-white overflow-hidden group"
            >
              <CardHeader className="p-0">
                <div className="overflow-hidden">
                  <Image
                    src={section.image}
                    alt={section.title}
                    width={600}
                    height={400}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6 text-left">
                <CardTitle className="mt-2 text-xl font-bold text-white">
                  {section.title}
                </CardTitle>
                <p className="mt-2 text-stone-400">{section.description}</p>
                <Button asChild className="mt-4">
                  <Link href={section.href}>Ver Proyectos</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
