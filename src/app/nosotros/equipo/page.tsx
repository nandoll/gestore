import { AboutUs } from "@/components/sections/AboutUs";

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

export default function EquipoPage() {
  return (
    <PageSection
      title={
        <>
          Equipo <span className="text-amber-400">Profesional</span>
        </>
      }
    >
      <p className="text-lg text-stone-300 mb-12 max-w-3xl mx-auto text-center">
        Nuestro equipo está compuesto por ingenieros, técnicos y especialistas
        altamente calificados y con una vasta experiencia en el sector. Su
        dedicación y conocimiento son la clave de nuestro éxito.
      </p>
      <AboutUs />
    </PageSection>
  );
}
