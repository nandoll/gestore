import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/slide_3.png')" }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight shadow-lg">
          Soluciones que <span className="text-amber-400">Construyen</span>{" "}
          Futuro
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-stone-300 shadow-md">
          Líderes en alquiler de maquinaria pesada y ejecución de proyectos para
          minería y construcción en todo el Perú.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/cotizacion">Nuestros Servicios</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#contacto">Contáctanos</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
