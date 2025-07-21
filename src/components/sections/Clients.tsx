import Image from "next/image";

const clients = [
  { name: "Empresa Minera del Sur", logo: "/images/clientes/01.png" },
  { name: "Constructora Andina", logo: "/images/clientes/2.svg" },
  { name: "Proyecto Hidroeléctrico del Norte", logo: "/images/clientes/3.svg" },
  { name: "Cementos Pacasmayo", logo: "/images/clientes/4.webp" },
  { name: "Antamina", logo: "/images/clientes/5.png" },
  { name: "Antamina", logo: "/images/clientes/6.svg" },
  { name: "Antamina", logo: "/images/clientes/7.svg" },
  { name: "Antamina", logo: "/images/clientes/8.png" },
  { name: "Antamina", logo: "/images/clientes/9.svg" },
];

export function Clients() {
  return (
    <section id="clientes" className="py-20 bg-stone-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white">
          Confían en <span className="text-amber-400">Nosotros</span>
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-stone-400">
          Hemos tenido el privilegio de trabajar con algunas de las empresas más
          importantes del sector.
        </p>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {clients.map((client) => (
            <div key={client.name} className="flex justify-center">
              <Image
                src={client.logo}
                alt={client.name}
                width={150}
                height={75}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
