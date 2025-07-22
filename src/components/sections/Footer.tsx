import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  Instagram,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-amber-400 text-stone-600">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Columna 1: Logo y Descripción */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">
              Andes<span className="text-stone-800">Maq</span>
            </h3>
            <p className="text-stone-600">
              Tu socio estratégico en construcción y operaciones, comprometidos
              con la eficiencia y seguridad en cada proyecto.
            </p>
            <div className="flex space-x-4 mt-4">
              <Link href="#" className="text-stone-600 hover:text-stone-800">
                <Facebook />
              </Link>
              <Link href="#" className="text-stone-600 hover:text-stone-800">
                <Linkedin />
              </Link>
              <Link href="#" className="text-stone-600 hover:text-stone-800">
                <Instagram />
              </Link>
            </div>
          </div>

          {/* Columna 2: Navegación */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Navegación</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#servicios" className="hover:text-stone-800">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="#proyectos" className="hover:text-stone-800">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link href="#nosotros" className="hover:text-stone-800">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="#equipos" className="hover:text-stone-800">
                  Equipos
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="hover:text-stone-800">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Servicios */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">
              Nuestros Servicios
            </h4>
            <ul className="space-y-2">
              <li>
                <p className="hover:text-stone-800 cursor-pointer">
                  Alquiler de Maquinaria
                </p>
              </li>
              <li>
                <p className="hover:text-stone-800 cursor-pointer">
                  Proyectos de Construcción
                </p>
              </li>
              <li>
                <p className="hover:text-stone-800 cursor-pointer">
                  Servicios para Minería
                </p>
              </li>
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">
              Ponte en Contacto
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 text-amber-400 flex-shrink-0" />
                <span>Av. Principal 123, Lima, Perú </span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-amber-400 flex-shrink-0" />
                <a
                  href="mailto:contacto@andesmaq.pe"
                  className="hover:text-stone-800"
                >
                  contacto@andesmaq.pe
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-amber-400 flex-shrink-0" />
                <a href="tel:+51987654321" className="hover:text-stone-800">
                  (+51) 987 654 321
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-black py-4">
        <div className="container mx-auto px-6 text-center text-sm text-stone-500">
          <p>
            &copy; {new Date().getFullYear()} AndesMaq Soluciones S.A.C. Todos
            los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
