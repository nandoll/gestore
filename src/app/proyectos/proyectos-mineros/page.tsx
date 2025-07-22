import Image from "next/image";

const PageSection = ({
  title,
  children,
}: {
  title: React.ReactNode;
  children: React.ReactNode;
}) => (
  <section className="py-20 bg-stone-900">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold text-white text-center mb-12">
        {title}
      </h2>
      {children}
    </div>
  </section>
);

const ProjectDetailCard = ({
  title,
  description,
  image,
  details,
}: {
  title: string;
  description: string;
  image: string;
  details: string[];
}) => (
  <div className="bg-stone-800 rounded-lg shadow-lg overflow-hidden group border border-stone-700">
    <div className="relative w-full h-64">
      <Image
        src={image}
        alt={title}
        fill
        style={{ objectFit: "cover" }}
        className="group-hover:scale-110 transition-transform duration-500"
      />
    </div>
    <div className="p-6">
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-stone-400 mb-4">{description}</p>
      <ul className="list-disc list-inside text-stone-300 text-sm space-y-1">
        {details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    </div>
  </div>
);

export default function ProyectosMinerosPage() {
  return (
    <PageSection
      title={
        <>
          Proyectos <span className="text-amber-400">Mineros</span>
        </>
      }
    >
      <p className="text-lg text-stone-300 mb-12 max-w-3xl mx-auto text-center">
        Hemos participado en diversos proyectos mineros, aportando nuestra
        experiencia en movimiento de tierras, construcción de plataformas, y
        gestión de infraestructura para operaciones de gran escala.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        <ProjectDetailCard
          title="Desarrollo de Plataforma Minera"
          description="Preparación de terreno y construcción de plataformas para una nueva operación minera a cielo abierto."
          image="/images/proyecto-minero/proyecto-minero-1.webp"
          details={[
            "Mineral: Cobre",
            "Fase: Desarrollo",
            "Ubicación: Zona Andina",
          ]}
        />
        <ProjectDetailCard
          title="Optimización de Rutas de Acarreo"
          description="Diseño y construcción de nuevas rutas para el transporte de mineral, mejorando la eficiencia y seguridad."
          image="/images/proyecto-minero/proyecto-minero-2.webp"
          details={[
            "Impacto: Reducción de costos 15%",
            "Duración: 6 meses",
            "Ubicación: Mina Activa",
          ]}
        />
      </div>
    </PageSection>
  );
}
