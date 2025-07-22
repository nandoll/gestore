import { Button } from "@/components/ui/button";
import Link from "next/link";
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

export default function DisponibilidadPage() {
  return (
    <PageSection
      title={
        <>
          Disponibilidad de <span className="text-amber-400">Equipos</span>
        </>
      }
    >
      <div className="bg-stone-800 border border-stone-700 rounded-lg shadow-lg p-8 text-center max-w-3xl mx-auto">
        <p className="text-xl font-bold text-white mb-4">
          ¡Planifica tu proyecto con anticipación!
        </p>
        <div className="relative w-full h-64 max-w-md mx-auto rounded-lg shadow-md mb-6">
          <Image
            src="/images/equipos/disponibilidad.webp"
            alt="Calendario de Disponibilidad"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-lg"
          />
        </div>
        <p className="text-lg text-stone-300 mb-8">
          Para consultar la disponibilidad de nuestra maquinaria y equipos, por
          favor, contáctenos directamente o utilice nuestro formulario de
          cotización. Nuestro equipo de logística está listo para ayudarte.
        </p>
        <Button asChild size="lg">
          <Link href="/cotizacion">Consultar Disponibilidad</Link>
        </Button>
      </div>
    </PageSection>
  );
}
