import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle, Star, Shield, BarChart } from "lucide-react";

const PageSection = ({ title, children }: { title: React.ReactNode, children: React.ReactNode }) => (
    <section className="py-20 bg-stone-900">
        <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-white text-center mb-12">{title}</h2>
            {children}
        </div>
    </section>
);

const FeatureCard = ({ title, description, icon }: { title: string, description: string, icon: React.ReactNode }) => (
  <div className="bg-stone-800 rounded-lg shadow-lg p-6 flex items-start space-x-4 border border-stone-700">
    <div className="text-amber-400 mt-1">{icon}</div>
    <div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-stone-400">{description}</p>
    </div>
  </div>
);

export default function OperacionEquiposPage() {
    return (
        <PageSection title={<>Operación de <span className="text-amber-400">Equipos</span></>}>
            <p className="text-lg text-stone-300 mb-12 max-w-3xl mx-auto text-center">
                Nuestro equipo de operadores certificados y con amplia experiencia garantiza la operación segura y eficiente de su maquinaria pesada, maximizando la productividad y minimizando riesgos.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
                <FeatureCard
                    title="Operadores Certificados"
                    description="Personal con las certificaciones y licencias necesarias para cada tipo de equipo."
                    icon={<CheckCircle size={24} />}
                />
                <FeatureCard
                    title="Experiencia Comprobada"
                    description="Años de experiencia en diversos entornos y condiciones de operación."
                    icon={<Star size={24} />}
                />
                <FeatureCard
                    title="Seguridad Prioritaria"
                    description="Estricto cumplimiento de protocolos de seguridad para proteger al personal y los activos."
                    icon={<Shield size={24} />}
                />
                <FeatureCard
                    title="Optimización del Rendimiento"
                    description="Habilidad para maximizar la eficiencia y vida útil de la maquinaria."
                    icon={<BarChart size={24} />}
                />
            </div>
            <div className="text-center mt-12">
                <Button asChild size="lg">
                    <Link href="/cotizacion?service=operacion">Solicitar Operadores Expertos</Link>
                </Button>
            </div>
        </PageSection>
    );
}
