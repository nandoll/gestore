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

export default function MaquinariaPesadaPage() {
    return (
        <PageSection title={<>Maquinaria <span className="text-amber-400">Pesada</span></>}>
            <p className="text-lg text-stone-300 mb-12 max-w-3xl mx-auto text-center">
                Nuestra flota de maquinaria pesada incluye equipos de las marcas líderes, garantizando rendimiento, fiabilidad y seguridad en cada operación.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <EquipmentSpecCard
                    name="Excavadora CAT 330"
                    specs={["Peso Operativo: 30 ton", "Capacidad Cucharón: 2.0 m³", "Potencia Motor: 270 HP"]}
                    image="/images/4.1.png"
                />
                <EquipmentSpecCard
                    name="Cargador Frontal Komatsu WA470"
                    specs={["Capacidad Cucharón: 4.5 m³", "Potencia Motor: 250 HP", "Peso Operativo: 24 ton"]}
                    image="/images/4.5.png"
                />
                <EquipmentSpecCard
                    name="Volquete Volvo FMX"
                    specs={["Capacidad: 15 m³", "Potencia: 440 HP", "Tracción: 6x4"]}
                    image="/images/4.2.png"
                />
            </div>
        </PageSection>
    );
}
