import Image from "next/image";

const equipment = [
  { src: "/images/4.1.png", alt: "Excavadoras" },
  { src: "/images/4.2.png", alt: "Volquetes" },
  { src: "/images/4.3.png", alt: "Rodillos" },
  { src: "/images/4.5.png", alt: "Cargadores Frontales" },
  { src: "/images/4.4.png", alt: "Motoniveladoras" },
];

export function Equipment() {
  return (
    <section id="equipos" className="py-20 bg-stone-800/50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white">
          Nuestra <span className="text-amber-400">Flota</span>
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-stone-400">
          Equipos de las mejores marcas para garantizar la eficiencia y
          seguridad en tu proyecto.
        </p>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {equipment.map((item) => (
            <div key={item.alt} className="text-center">
              <div className="bg-stone-700/50 rounded-lg p-4">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={200}
                  height={200}
                  className="rounded-lg mx-auto"
                />
              </div>
              <h4 className="mt-4 font-bold text-white">{item.alt}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
