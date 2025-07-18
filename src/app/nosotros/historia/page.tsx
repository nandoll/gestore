import Image from "next/image";

const PageSection = ({ title, children }: { title: React.ReactNode, children: React.ReactNode }) => (
    <section className="py-20 bg-stone-900">
        <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-white text-center mb-12">{title}</h2>
            {children}
        </div>
    </section>
);

export default function HistoriaPage() {
    return (
        <PageSection title={<>Nuestra <span className="text-amber-400">Historia</span></>}>
            <div className="max-w-4xl mx-auto">
                <p className="text-lg text-stone-300 mb-6 leading-relaxed">
                    Fundada en 2008, AndesMaq Soluciones comenzó con la visión de ser un socio estratégico para los sectores de minería y construcción en el Perú. A lo largo de los años, hemos crecido y evolucionado, consolidándonos como un referente en el sector.
                </p>
                <p className="text-lg text-stone-300 mb-8 leading-relaxed">
                    Nuestra trayectoria está marcada por el compromiso con la excelencia, la innovación y la satisfacción del cliente, valores que nos han permitido superar desafíos y entregar resultados medibles en cada proyecto.
                </p>
                <div className="relative w-full h-96 rounded-lg shadow-lg mb-8">
                    <Image
                        src="/images/slide_1.jpg"
                        alt="Hitos de la Empresa"
                        fill
                        style={{ objectFit: "cover" }}
                        className="rounded-lg"
                    />
                </div>
                <div className="bg-stone-800 border border-stone-700 rounded-lg p-8">
                    <h3 className="text-3xl font-bold text-amber-400 mb-6 text-center">Nuestros Valores Fundamentales</h3>
                    <ul className="grid md:grid-cols-2 gap-6 text-lg">
                        <li className="flex items-start"><span className="text-amber-400 mr-3 mt-1">✓</span> <strong>Integridad:</strong> Actuamos con honestidad y transparencia.</li>
                        <li className="flex items-start"><span className="text-amber-400 mr-3 mt-1">✓</span> <strong>Innovación:</strong> Buscamos constantemente nuevas y mejores soluciones.</li>
                        <li className="flex items-start"><span className="text-amber-400 mr-3 mt-1">✓</span> <strong>Seguridad:</strong> La protección de nuestro personal y el entorno es nuestra máxima prioridad.</li>
                        <li className="flex items-start"><span className="text-amber-400 mr-3 mt-1">✓</span> <strong>Sostenibilidad:</strong> Nos comprometemos con prácticas responsables.</li>
                        <li className="flex items-start"><span className="text-amber-400 mr-3 mt-1">✓</span> <strong>Excelencia:</strong> Nos esforzamos por superar las expectativas siempre.</li>
                    </ul>
                </div>
            </div>
        </PageSection>
    );
}
