import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function AboutUs() {
  return (
    <section id="nosotros" className="py-20 bg-stone-800/50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white">
              Más de 15 años de experiencia{" "}
              <span className="text-amber-400">forjando el camino</span>
            </h2>
            <p className="mt-6 text-stone-300 text-lg">
              Desde nuestra fundación, en AndesMaq Soluciones nos hemos
              comprometido con la excelencia, la seguridad y la innovación.
              Nuestra misión es ser el socio estratégico que nuestros clientes
              necesitan para llevar sus proyectos al siguiente nivel, superando
              desafíos y entregando resultados medibles.
            </p>
            <p className="mt-4 text-stone-400">
              Contamos con certificaciones ISO 9001 que avalan la calidad de
              nuestros procesos y nuestro compromiso con la mejora continua.
              Creemos en el trabajo duro, la integridad y en construir
              relaciones a largo plazo.
            </p>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="#contacto">Conoce más</Link>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/slide_4.png"
              alt="Ing. Mateo Rojas, Gerente General"
              width={400}
              height={400}
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
            <Image
              src="/images/slide_5.png"
              alt="Certificación ISO 9001"
              width={400}
              height={400}
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
