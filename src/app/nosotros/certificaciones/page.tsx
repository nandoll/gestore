import { ShieldCheck, Globe, Award } from "lucide-react";

const PageSection = ({ title, children }: { title: React.ReactNode, children: React.ReactNode }) => (
    <section className="py-20 bg-stone-900">
        <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-white text-center mb-12">{title}</h2>
            {children}
        </div>
    </section>
);

const CertificationCard = ({ name, description, icon }: { name: string, description: string, icon: React.ReactNode }) => (
  <div className="bg-stone-800 rounded-lg shadow-lg p-6 text-center flex flex-col items-center border border-stone-700">
    <div className="text-amber-400 mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
    <p className="text-stone-400 text-sm">{description}</p>
  </div>
);

export default function CertificacionesPage() {
    return (
        <PageSection title={<>Nuestras <span className="text-amber-400">Certificaciones</span></>}>
            <p className="text-lg text-stone-300 mb-12 max-w-3xl mx-auto text-center">
                Nuestro compromiso con la calidad, la seguridad y el medio ambiente está respaldado por las siguientes certificaciones, que avalan nuestras operaciones y procesos.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <CertificationCard
                    name="ISO 9001: Gestión de Calidad"
                    description="Garantiza la estandarización y mejora continua de nuestros procesos para la satisfacción del cliente."
                    icon={<Award size={48} />}
                />
                <CertificationCard
                    name="ISO 14001: Gestión Ambiental"
                    description="Demuestra nuestro compromiso con la protección del medio ambiente y la prevención de la contaminación."
                    icon={<Globe size={48} />}
                />
                <CertificationCard
                    name="ISO 45001: Seguridad y Salud"
                    description="Asegura un entorno de trabajo seguro y saludable para todos nuestros colaboradores."
                    icon={<ShieldCheck size={48} />}
                />
            </div>
        </PageSection>
    );
}
