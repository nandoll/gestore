import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const projects = [
  {
    image: "/images/slide_6.png",
    category: "Minería",
    title: "Expansión Minera del Sur",
    description:
      "Movimiento masivo de tierras y construcción de accesos para importante proyecto minero en Arequipa.",
  },
  {
    image: "/images/slide_7.png",
    category: "Obra Civil",
    title: "Carretera Interoceánica Tramo IV",
    description:
      "Participación clave en la construcción de uno de los tramos más complejos de la vía.",
  },
  {
    image: "/images/slide_8.png",
    category: "Industrial",
    title: "Plataforma para Planta de Gas",
    description:
      "Nivelación y compactación de terreno para la instalación de una planta de procesamiento.",
  },
];

export function Projects() {
  return (
    <section id="proyectos" className="py-20 bg-stone-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center">
          Proyectos que{" "}
          <span className="text-amber-400">Hablan por Nosotros</span>
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-stone-400 text-center">
          Nuestra experiencia se refleja en la calidad y magnitud de las obras
          que hemos ejecutado.
        </p>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="bg-stone-800 border-stone-700 text-white overflow-hidden group"
            >
              <CardHeader className="p-0">
                <div className="overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <span className="text-sm font-semibold text-amber-400">
                  {project.category}
                </span>
                <CardTitle className="mt-2 text-xl font-bold text-white">
                  {project.title}
                </CardTitle>
                <p className="mt-2 text-stone-400">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
