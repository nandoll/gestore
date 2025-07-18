import Image from "next/image";

const PageSection = ({ title, children }: { title: React.ReactNode, children: React.ReactNode }) => (
    <section className="py-20 bg-stone-900">
        <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-white text-center mb-12">{title}</h2>
            {children}
        </div>
    </section>
);

const TeamMemberCard = ({ name, role, image }: { name: string, role: string, image: string }) => (
  <div className="bg-stone-800 rounded-lg shadow-lg p-6 text-center border border-stone-700">
    <div className="relative w-32 h-32 rounded-full mx-auto mb-4 border-4 border-amber-400">
        <Image
            src={image}
            alt={name}
            fill
            style={{ objectFit: "cover" }}
            className="rounded-full"
        />
    </div>
    <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
    <p className="text-amber-400 text-sm">{role}</p>
  </div>
);

export default function EquipoPage() {
    return (
        <PageSection title={<>Equipo <span className="text-amber-400">Profesional</span></>}>
            <p className="text-lg text-stone-300 mb-12 max-w-3xl mx-auto text-center">
                Nuestro equipo está compuesto por ingenieros, técnicos y especialistas altamente calificados y con una vasta experiencia en el sector. Su dedicación y conocimiento son la clave de nuestro éxito.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <TeamMemberCard
                    name="Ing. Mateo Rojas"
                    role="Gerente General"
                    image="/images/slide_4.png"
                />
                <TeamMemberCard
                    name="Sofía Castillo"
                    role="Jefa de Operaciones"
                    image="/prototipos/portada1-EQUIpo-contacto.jpg"
                />
                <TeamMemberCard
                    name="Carlos Valdivia"
                    role="Especialista en Maquinaria"
                    image="/prototipos/portada1-nosotros.jpg"
                />
            </div>
        </PageSection>
    );
}
