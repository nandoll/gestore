import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black py-12">
      <div className="container mx-auto px-6 text-center text-stone-400">
        <p className="text-xl font-bold text-white">
          Andes<span className="text-amber-400">Maq</span> Soluciones
        </p>
        <div className="mt-4 flex justify-center space-x-6">
          <Link href="#servicios" className="hover:text-amber-400">
            Servicios
          </Link>
          <Link href="#nosotros" className="hover:text-amber-400">
            Nosotros
          </Link>
          <Link href="#proyectos" className="hover:text-amber-400">
            Proyectos
          </Link>
          <Link href="#contacto" className="hover:text-amber-400">
            Contacto
          </Link>
        </div>
        <p className="mt-8 text-sm">
          &copy; {new Date().getFullYear()} AndesMaq Soluciones S.A.C. Todos
          los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
