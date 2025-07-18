import Image from "next/image";

const PageSection = ({ title, children }: { title: React.ReactNode, children: React.ReactNode }) => (
    <section className="py-20 bg-stone-900">
        <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-white text-center mb-12">{title}</h2>
            {children}
        </div>
    </section>
);

const SuccessStoryCard = ({ title, challenge, solution, results, image }: { title: string, challenge: string, solution: string, results: string, image: string }) => (
  <div className="bg-stone-800 rounded-lg shadow-lg p-6 flex flex-col md:flex-row items-center md:items-start gap-8 border border-stone-700">
    <div className="relative w-full md:w-1/3 h-64 rounded-lg flex-shrink-0">
        <Image
            src={image}
            alt={title}
            fill
            style={{ objectFit: "cover" }}
            className="rounded-lg"
        />
    </div>
    <div className="md:flex-grow">
      <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
      <p className="text-stone-300 mb-2">
        <span className="font-bold text-amber-400">Desafío:</span>{" "}
        {challenge}
      </p>
      <p className="text-stone-300 mb-2">
        <span className="font-bold text-amber-400">Solución:</span>{" "}
        {solution}
      </p>
      <p className="text-stone-300">
        <span className="font-bold text-amber-400">Resultados:</span>{" "}
        {results}
      </p>
    </div>
  </div>
);

export default function CasosExitoPage() {
    return (
        <PageSection title={<>Casos de <span className="text-amber-400">Éxito</span></>}>
            <p className="text-lg text-stone-300 mb-12 max-w-3xl mx-auto text-center">
                Nuestros casos de éxito demuestran nuestra capacidad para superar desafíos y entregar resultados excepcionales en proyectos complejos.
            </p>
            <div className="space-y-12">
                <SuccessStoryCard
                    title="Optimización de Extracción en Mina"
                    challenge="Reducir los tiempos de ciclo de extracción y mejorar la seguridad."
                    solution="Implementación de nueva maquinaria especializada y capacitación intensiva del personal."
                    results="Aumento del 20% en la productividad y reducción del 30% en incidentes de seguridad."
                    image="/images/slide_1.jpg"
                />
                <SuccessStoryCard
                    title="Construcción de Represa para Contención"
                    challenge="Diseñar y construir una represa segura y ambientalmente sostenible para el manejo de relaves."
                    solution="Uso de técnicas de ingeniería avanzadas y materiales de alta resistencia, con monitoreo constante."
                    results="Construcción completada en tiempo récord, superando las normativas ambientales más estrictas."
                    image="/images/slide_8.png"
                />
            </div>
        </PageSection>
    );
}
