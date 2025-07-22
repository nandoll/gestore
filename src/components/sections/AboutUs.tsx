import Image from "next/image";
import { Counter } from "@/components/ui/Counter";

const stats = [
  {
    value: 15,
    suffix: "+",
    label: "Años de Experiencia",
  },
  {
    value: 200,
    suffix: "+",
    label: "Proyectos Completados",
  },
  {
    value: 98,
    suffix: "%",
    label: "Clientes Satisfechos",
  },
  {
    value: 50,
    suffix: "+",
    label: "Maquinarias Pesadas",
  },
];

export function AboutUs() {
  return (
    <section id="nosotros" className="py-20 bg-stone-800/50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-1 gap-4">
            <Image
              src="/images/landing/nosotros.webp"
              alt="Operador en cabina de excavadora"
              width={400}
              height={400}
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-white">
              Nuestra trayectoria es nuestra{" "}
              <span className="text-amber-400">mejor garantía</span>
            </h2>
            <p className="mt-6 text-stone-300 text-lg">
              En AndesMaq, cada número cuenta una historia de compromiso,
              precisión y resultados. Nuestra experiencia no se mide solo en
              años, sino en la confianza que nuestros clientes depositan en
              nosotros para superar los desafíos más complejos de la industria.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <Counter
                    end={stat.value}
                    suffix={stat.suffix}
                    className="text-5xl font-bold text-amber-400"
                  />
                  <p className="mt-2 text-stone-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
