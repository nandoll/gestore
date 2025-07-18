import Image from "next/image";

const PageSection = ({ title, children }: { title: React.ReactNode, children: React.ReactNode }) => (
    <section className="py-20 bg-stone-900">
        <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-white text-center mb-12">{title}</h2>
            {children}
        </div>
    </section>
);

const EquipmentSpecCard = ({ name, specs, image }: { name: string, specs: string[], image: string }) => (
  <div className="bg-stone-800 rounded-lg shadow-lg p-6 text-center border border-stone-700">
    <div className="relative w-full h-48 mb-4">
        <Image src={image} alt={name} fill style={{ objectFit: "contain" }} className="rounded-md" />
    </div>
    <h4 className="text-xl font-bold text-white mb-2">{name}</h4>
    <ul className="text-stone-400 text-sm list-disc list-inside text-left">
      {specs.map((spec, index) => (
        <li key={index}>{spec}</li>
      ))}
    </ul>
  </div>
);

export default function EquiposEspecializadosPage() {
    return (
        <PageSection title={<>Equipos <span className="text-amber-400">Especializados</span></>}>
            <p className="text-lg text-stone-300 mb-12 max-w-3xl mx-auto text-center">
                Además de la maquinaria pesada, disponemos de equipos especializados para tareas específicas que requieren precisión y alta tecnología.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
                <EquipmentSpecCard
                    name="Perforadora de Rocas"
                    specs={["Profundidad: Hasta 30m", "Diámetro: 76-152 mm", "Aplicación: Minería, Construcción"]}
                    image="/prototipos/portada1-servicios.jpg"
                />
                <EquipmentSpecCard
                    name="Equipo de Voladura Controlada"
                    specs={["Precisión: Alta", "Seguridad: Máxima", "Aplicación: Demoliciones, Minería"]}
                    image="/prototipos/portada1-proyectos.jpg"
                />
            </div>
        </PageSection>
    );
}
