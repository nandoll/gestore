import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const aboutSections = [
  {
    title: "Historia y Misión",
    description:
      "Descubre cómo nuestra empresa se ha convertido en un referente en el sector, desde sus humildes inicios.",
    image: "/images/nosotros/historia.webp",
    href: "/nosotros/historia",
  },
  {
    title: "Certificaciones",
    description:
      "Nuestro compromiso con la calidad, seguridad y el medio ambiente, avalado por reconocidas certificaciones.",
    image: "/images/nosotros/certificacion.webp",
    href: "/nosotros/certificaciones",
  },
  {
    title: "Equipo Profesional",
    description:
      "Conoce a los expertos que impulsan nuestra empresa, su experiencia y dedicación a la excelencia.",
    image: "/images/nosotros/equipo.webp",
    href: "/nosotros/equipo",
  },
];

export default function NosotrosPage() {
  return (
    <section className="py-20 bg-stone-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white">
          Sobre <span className="text-amber-400">Nosotros</span>
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-stone-400">
          Conoce nuestra trayectoria, valores y el equipo que hace posible el
          éxito de cada proyecto.
        </p>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aboutSections.map((section) => (
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
                  <Link href={section.href}>Leer Más</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
