import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const machinery = [
    { name: "Excavadora Hidráulica", description: "Ideal para movimiento de tierras y excavaciones profundas.", image: "/images/4.1.png" },
    { name: "Volquete de Gran Capacidad", description: "Transporte eficiente de grandes volúmenes de tierra y materiales.", image: "/images/4.2.png" },
    { name: "Rodillo Compactador", description: "Esencial para la compactación de suelos en obras viales.", image: "/images/4.3.png" },
    { name: "Cargador Frontal", description: "Perfecto para carga y transporte de materiales a granel.", image: "/images/4.5.png" },
    { name: "Motoniveladora", description: "Utilizada para nivelar terrenos y refinar pendientes.", image: "/images/4.4.png" },
];

const PageSection = ({ title, children }: { title: React.ReactNode, children: React.ReactNode }) => (
    <section className="py-20 bg-stone-900">
        <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-white text-center mb-12">{title}</h2>
            {children}
        </div>
    </section>
);

const EquipmentDisplay = ({ name, description, image }: { name: string, description: string, image: string }) => (
    <div className="bg-stone-800 rounded-lg shadow-lg p-6 text-center border border-stone-700">
        <div className="relative w-full h-48 mb-4">
            <Image
                src={image}
                alt={name}
                fill
                style={{ objectFit: "contain" }}
                className="rounded-md"
            />
        </div>
        <h4 className="text-xl font-bold text-white mb-2">{name}</h4>
        <p className="text-stone-400 text-sm">{description}</p>
    </div>
);

export default function AlquilerMaquinariaPage() {
    return (
        <PageSection title={<>Alquiler de <span className="text-amber-400">Maquinaria Pesada</span></>}>
            <p className="text-lg text-stone-300 mb-12 max-w-3xl mx-auto text-center">
                Contamos con una moderna y diversa flota de maquinaria pesada disponible para alquiler, adaptada a las necesidades de sus proyectos de construcción y minería.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {machinery.map(item => <EquipmentDisplay key={item.name} {...item} />)}
            </div>
            <div className="text-center mt-12">
                <Button asChild size="lg">
                    <Link href="/cotizacion">Solicitar Catálogo Completo</Link>
                </Button>
            </div>
        </PageSection>
    );
}
