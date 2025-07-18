import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const PageSection = ({ title, children }: { title: React.ReactNode, children: React.ReactNode }) => (
    <section className="py-20 bg-stone-900">
        <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-white text-center mb-12">{title}</h2>
            {children}
        </div>
    </section>
);

const ProjectCard = ({ title, description, image }: { title: string, description: string, image: string }) => (
  <div className="bg-stone-800 rounded-lg shadow-lg overflow-hidden group border border-stone-700">
    <div className="relative w-full h-64">
        <Image src={image} alt={title} fill style={{objectFit: "cover"}} className="group-hover:scale-110 transition-transform duration-500" />
    </div>
    <div className="p-6">
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-stone-400">{description}</p>
    </div>
  </div>
);

export default function ProyectosConstruccionPage() {
    return (
        <PageSection title={<>Proyectos de <span className="text-amber-400">Construcción</span></>}>
            <p className="text-lg text-stone-300 mb-12 max-w-3xl mx-auto text-center">
                Nuestra experiencia abarca una amplia gama de proyectos de construcción, desde infraestructura vial hasta edificaciones industriales, garantizando calidad y cumplimiento.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
                <ProjectCard
                    title="Construcción Vial en Región Montañosa"
                    description="Desarrollo de una carretera de acceso en terreno complejo, superando desafíos geográficos y logísticos."
                    image="/images/slide_7.png"
                />
                <ProjectCard
                    title="Edificación de Planta Industrial"
                    description="Construcción de una moderna planta para procesamiento, con altos estándares de seguridad y eficiencia energética."
                    image="/images/slide_8.png"
                />
            </div>
            <div className="text-center mt-12">
                <Button asChild size="lg">
                    <Link href="/proyectos/casos-exito">Ver Casos de Éxito</Link>
                </Button>
            </div>
        </PageSection>
    );
}
