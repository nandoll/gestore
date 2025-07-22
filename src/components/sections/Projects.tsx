"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const projectsData = [
  {
    category: "Minería",
    title: "Expansión Minera del Sur",
    description:
      "Movimiento masivo de tierras y construcción de accesos para uno de los proyectos mineros más importantes de la región.",
    image: "/images/landing/proyecto-minero.webp",
    link: "/proyectos/expansion-minera",
  },
  {
    category: "Obra Civil",
    title: "Carretera Interoceánica",
    description:
      "Participación clave en la construcción de uno de los tramos más complejos de la vía, superando desafíos geográficos.",
    image: "/images/landing/proyecto-civil.webp",

    link: "/proyectos/carretera-interoceanica",
  },
  {
    category: "Industrial",
    title: "Plataforma para Planta de Gas",
    description:
      "Nivelación y compactación para la instalación de una planta de procesamiento, cumpliendo con los más altos estándares.",
    image: "/images/landing/proyecto-industrial.webp",
    link: "/proyectos/planta-gas",
  },
];

const categories = ["Minería", "Obra Civil", "Industrial"];

const imageVariants = {
  hidden: { opacity: 0, transition: { duration: 0.5, ease: "easeOut" } },
  visible: { opacity: 0.75, transition: { duration: 0.8, ease: "easeIn" } },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } },
};

export function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="proyectos" className="bg-stone-900 text-white py-20 sm:py-32">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold leading-tight"
          >
            Proyectos que <br />
            <span className="text-amber-500">Hablan por Nosotros</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-stone-400 text-lg"
          >
            Nuestra experiencia se refleja en la calidad y magnitud de las obras
            que hemos ejecutado. Cada proyecto es un testimonio de nuestra
            capacidad para entregar resultados excepcionales.
          </motion.p>
        </div>

        {/* Interactive Viewer */}
        <div className="relative w-full h-[80vh] min-h-[700px] rounded-2xl border border-stone-800 overflow-hidden">
          {/* Layer 1: Background Images */}
          <AnimatePresence>
            <motion.div
              key={activeIndex}
              className="absolute inset-0"
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <Image
                src={projectsData[activeIndex].image}
                alt={projectsData[activeIndex].title}
                fill
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>

          {/* Layer 2: Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>

          {/* Layer 3: Content */}
          <div className="relative z-10 h-full flex flex-col justify-between p-8 md:p-12">
            {/* Top Content: Title and Description */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                variants={textVariants}
                viewport={{ amount: 0.3 }}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <h3 className="text-4xl md:text-5xl font-bold">
                  {projectsData[activeIndex].title}
                </h3>
                <p className="mt-4 max-w-lg text-stone-300 text-lg">
                  {projectsData[activeIndex].description}
                </p>
                <Button
                  variant="link"
                  className="text-amber-500 p-0 mt-6 text-lg"
                >
                  Ver caso de estudio <ArrowRight className="ml-2 size-5" />
                </Button>
              </motion.div>
            </AnimatePresence>

            {/* Bottom Content: Category Selectors */}
            <div className="flex flex-col md:flex-row gap-4">
              {categories.map((category, index) => (
                <button
                  key={category}
                  onClick={() => setActiveIndex(index)}
                  className={`relative p-4 w-full md:w-48 h-24 rounded-lg transition-all duration-300 ease-in-out overflow-hidden border ${
                    activeIndex === index
                      ? "border-amber-500 bg-amber-500"
                      : "border-stone-700 bg-stone-800/50 backdrop-blur-sm"
                  }`}
                >
                  <div
                    className={`absolute inset-0 bg-cover bg-center transition-opacity duration-300 ${
                      activeIndex === index ? "opacity-0" : "opacity-20"
                    }`}
                    style={{
                      backgroundImage: `url(${projectsData[index].image})`,
                    }}
                  ></div>
                  <div className="relative z-10 flex flex-col items-start text-left">
                    <span className="font-mono text-sm">0{index + 1}</span>
                    <span className="font-bold text-lg mt-auto">
                      {category}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
