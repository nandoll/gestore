import Image from "next/image";
import { InfiniteMovingCards } from "../ui/InfiniteMovingCards";

const clients = [
  { name: "Chinalco", logo: "/images/clientes/01.png" },
  { name: "Nexa", logo: "/images/clientes/2.svg" },
  { name: "Shougang Hierro Peru", logo: "/images/clientes/3.svg" },
  { name: "Hudbay", logo: "/images/clientes/4.webp" },
  { name: "Mining Ventures", logo: "/images/clientes/5.png" },
  { name: "EquiSpace", logo: "/images/clientes/6.svg" },
  { name: "Volcan", logo: "/images/clientes/7.svg" },
  { name: "WDR", logo: "/images/clientes/8.png" },
  { name: "Cerro Verde", logo: "/images/clientes/9.svg" },
];

// Dividir los clientes en dos filas
const half = Math.ceil(clients.length / 2);
const topRowClients = clients.slice(0, half);
const bottomRowClients = clients.slice(half);

const ClientLogo = ({
  logo,
  name,
  theme = "dark",
}: {
  logo: string;
  name: string;
  theme?: "dark" | "light";
}) => (
  <li className="flex-shrink-0">
    <div
      className={`flex items-center justify-center h-24 w-40 md:h-28 md:w-48 rounded-2xl ${
        theme === "dark" ? "bg-stone-800/60" : "bg-white/80"
      }`}
    >
      <Image
        src={logo}
        alt={name}
        width={120}
        height={50}
        className="object-contain max-h-[50px] md:max-h-[60px] w-auto"
      />
    </div>
  </li>
);

export function Clients() {
  return (
    <>
      {/* Version A: Fondo Oscuro por Defecto */}
      <section id="clientes-a" className="py-24 bg-stone-900">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-bold text-white">
                Confían en <span className="text-amber-400">Nosotros</span>
              </h2>
              <p className="mt-4 text-stone-400">
                Relaciones sólidas basadas en resultados y confianza mutua.
              </p>
            </div>
            <div className="flex flex-col gap-y-4 overflow-hidden">
              <InfiniteMovingCards speed="slow" direction="right">
                {topRowClients.map((client, idx) => (
                  <ClientLogo
                    key={`${client.name}-${idx}-a-top`}
                    {...client}
                    theme="dark"
                  />
                ))}
              </InfiniteMovingCards>
              <InfiniteMovingCards speed="slow" direction="left">
                {bottomRowClients.map((client, idx) => (
                  <ClientLogo
                    key={`${client.name}-${idx}-a-bottom`}
                    {...client}
                    theme="dark"
                  />
                ))}
              </InfiniteMovingCards>
            </div>
          </div>
        </div>
      </section>

      {/* Version B: Fondo de Contraste Ámbar
      <section id="clientes-b" className="py-24 bg-amber-400">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-bold text-stone-900">
                Nuestros <span className="text-white">Socios</span>
              </h2>
              <p className="mt-4 text-stone-800">
                Destacando a nuestros socios con una presentación visual
                alternativa.
              </p>
            </div>
            <div className="flex flex-col gap-y-4 overflow-hidden">
              <InfiniteMovingCards
                speed="slow"
                direction="right"
                className="[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
              >
                {topRowClients.map((client, idx) => (
                  <ClientLogo
                    key={`${client.name}-${idx}-b-top`}
                    {...client}
                    theme="dark"
                  />
                ))}
              </InfiniteMovingCards>
              <InfiniteMovingCards
                speed="slow"
                direction="left"
                className="[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
              >
                {bottomRowClients.map((client, idx) => (
                  <ClientLogo
                    key={`${client.name}-${idx}-b-bottom`}
                    {...client}
                    theme="dark"
                  />
                ))}
              </InfiniteMovingCards>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}
