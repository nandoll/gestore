
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Gem, Shovel, ShieldCheck, Wrench } from "lucide-react";

const PageSection = ({ title, children }: { title: React.ReactNode, children: React.ReactNode }) => (
    <section className="py-20 bg-stone-900">
        <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-white text-center mb-12">{title}</h2>
            {children}
        </div>
    </section>
);

const ServiceDetailCard = ({ title, description, icon }: { title: string, description: string, icon: React.ReactNode }) => (
  <div className="bg-stone-800 rounded-lg shadow-lg p-6 text-center flex flex-col items-center border border-stone-700">
    <div className="text-amber-400 mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-stone-400">{description}</p>
  </div>
);

export default function ServiciosMinerosPage() {
    return (
        <PageSection title={<>Servicios <span className="text-amber-400">Mineros</span></>}>
            <p className="text-lg text-stone-300 mb-12 max-w-3xl mx-auto text-center">
                Ofrecemos soluciones integrales para la industria minera, desde la exploración y desarrollo hasta la operación y cierre de minas, con un fuerte compromiso con la sostenibilidad y el medio ambiente.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
                <ServiceDetailCard
                    title="Exploración y Desarrollo Minero"
                    description="Servicios de perforación, muestreo y análisis para la identificación y cuantificación de yacimientos."
                    icon={<Gem size={48} />}
                />
                <ServiceDetailCard
                    title="Movimiento de Materiales y Extracción"
                    description="Operaciones eficientes de carguío y transporte de mineral y desmonte, optimizando los ciclos productivos."
                    icon={<Shovel size={48} />}
                />
                <ServiceDetailCard
                    title="Remediación Ambiental y Cierre de Minas"
                    description="Implementación de planes de rehabilitación y cierre, asegurando la recuperación de las áreas impactadas."
                    icon={<ShieldCheck size={48} />}
                />
                <ServiceDetailCard
                    title="Gestión de Flota y Mantenimiento"
                    description="Optimización de la disponibilidad de equipos a través de programas de mantenimiento preventivo y correctivo."
                    icon={<Wrench size={48} />}
                />
            </div>
            <div className="text-center mt-12">
                <Button asChild size="lg">
                    <Link href="/contacto">Conoce Nuestra Metodología</Link>
                </Button>
            </div>
        </PageSection>
    );
}
