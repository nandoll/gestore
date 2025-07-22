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

export default function ObrasCivilesPage() {
  return (
    <PageSection
      title={
        <>
          Obras <span className="text-amber-400">Civiles</span>
        </>
      }
    >
      <p className="text-lg text-stone-300 mb-12 max-w-3xl mx-auto text-center">
        Nuestra experiencia en obras civiles incluye la construcción de
        infraestructura vial, edificaciones, puentes y más, siempre con un
        enfoque en la durabilidad y la funcionalidad.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        <ProjectDetailCard
          title="Rehabilitación de Carretera Regional"
          description="Proyecto de mejora y ampliación de una vía principal, optimizando el flujo de tráfico y la seguridad vial."
          image="/images/proyecto-rehabilitacion.webp"
          details={[
            "Longitud: 50 km",
            "Duración: 18 meses",
            "Ubicación: Región Centro",
          ]}
        />
        <ProjectDetailCard
          title="Construcción de Puente de Acceso"
          description="Diseño y construcción de un puente estratégico para conectar dos áreas industriales, facilitando el transporte de carga pesada."
          image="/images/proyecto-construccion.webp"
          details={[
            "Tipo: Puente de concreto",
            "Capacidad: 100 toneladas",
            "Ubicación: Zona Industrial",
          ]}
        />
      </div>
    </PageSection>
  );
}
