"use client";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useAnimationControls,
  easeInOut,
} from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Gem, HardHat, Shovel, Tractor } from "lucide-react";

const services = [
  {
    icon: Tractor,
    title: "Alquiler de Maquinaria",
    benefits: [
      "Flota moderna y diversa.",
      "Mantenimiento riguroso.",
      "Máxima operatividad.",
    ],
    image: "/images/slide_1.jpg",
  },
  {
    icon: HardHat,
    title: "Proyectos de Construcción",
    benefits: [
      "Ejecución integral de obras.",
      "Movimiento de tierras.",
      "Altos estándares de calidad.",
    ],
    image: "/images/slide_2.png",
  },
  {
    icon: Gem,
    title: "Servicios Mineros",
    benefits: [
      "Soluciones para el ciclo minero.",
      "Preparación de terrenos.",
      "Soporte operativo.",
    ],
    image: "/images/slide_3.png",
  },
  {
    icon: Shovel,
    title: "Operación de Equipos",
    benefits: [
      "Operadores certificados.",
      "Maximización del rendimiento.",
      "Operaciones seguras.",
    ],
    image: "/images/slide_4.png",
  },
];

const DURATION = 10; // 10 seconds

const imageVariants = {
  enter: { opacity: 0 },
  center: { opacity: 1 },
  exit: { opacity: 0 },
};

const kenBurnsVariants = {
  initial: { scale: 1.1, x: "2%" },
  animate: {
    scale: 1,
    x: 0,
    transition: {
      duration: 15,
      ease: "linear",
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

function TimerButton({
  index,
  activeIndex,
  isPaused,
  duration,
  onClick,
  onComplete,
}: {
  index: number;
  activeIndex: number;
  isPaused: boolean;
  duration: number;
  onClick: () => void;
  onComplete: () => void;
}) {
  const controls = useAnimationControls();
  const completionTriggered = useRef(false);

  useEffect(() => {
    if (index !== activeIndex) {
      controls.set({ strokeDashoffset: 113.097 });
      controls.stop();
      completionTriggered.current = false; // Reset flag for non-active buttons
      return;
    }

    // Reset the flag when this button becomes active
    completionTriggered.current = false;

    if (isPaused) {
      controls.stop();
    } else {
      controls.start({
        strokeDashoffset: 0,
        transition: { duration, ease: "linear" },
      });
    }
  }, [activeIndex, index, isPaused, controls, duration]);

  return (
    <button onClick={onClick} className="relative">
      <svg width="40" height="40" viewBox="0 0 40 40" className="-rotate-90">
        <circle
          cx="20"
          cy="20"
          r="18"
          stroke="#44403c"
          strokeWidth="3"
          fill="transparent"
        />
        <motion.circle
          cx="20"
          cy="20"
          r="18"
          stroke="#f59e0b"
          strokeWidth="3"
          fill="transparent"
          strokeDasharray="113.097"
          initial={{ strokeDashoffset: 113.097 }}
          animate={controls}
          onUpdate={(latest) => {
            if (latest.strokeDashoffset < 1 && !completionTriggered.current) {
              completionTriggered.current = true; // Set the flag to prevent multiple calls
              onComplete();
            }
          }}
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center font-bold">
        {index + 1}
      </span>
    </button>
  );
}

export function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section id="servicios" className="bg-stone-900 text-white py-20 sm:py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold leading-tight"
          >
            Soluciones <br />
            <span className="text-amber-500">Integrales y a Medida</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-stone-400 text-lg"
          >
            Ofrecemos un abanico de servicios especializados para cubrir cada
            fase de tu proyecto, garantizando eficiencia, seguridad y resultados
            que superan las expectativas.
          </motion.p>
        </div>

        <div
          className="relative grid grid-cols-1 lg:grid-cols-2 min-h-[70vh] rounded-2xl border border-stone-800 overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex flex-col justify-center p-8 md:p-12">
            <ul>
              {services.map((service, index) => (
                <motion.li
                  key={service.title}
                  onClick={() => setActiveIndex(index)}
                  className="cursor-pointer"
                  animate={{
                    paddingLeft: activeIndex === index ? "1rem" : "0rem",
                  }}
                >
                  <div className="py-4 border-b border-stone-800">
                    <div className="flex items-center gap-4">
                      <service.icon
                        className={cn(
                          "size-7 transition-colors",
                          activeIndex === index
                            ? "text-amber-500"
                            : "text-stone-600"
                        )}
                      />
                      <p
                        className={cn(
                          "text-2xl font-bold transition-colors",
                          activeIndex === index
                            ? "text-amber-500"
                            : "text-stone-600"
                        )}
                      >
                        {service.title}
                      </p>
                    </div>
                    <AnimatePresence>
                      {activeIndex === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="text-stone-400 mt-4 pl-11"
                        >
                          <ul className="space-y-2">
                            {service.benefits.map((benefit) => (
                              <li
                                key={benefit}
                                className="flex items-center gap-2"
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="relative min-h-[50vh] lg:min-h-full">
            <AnimatePresence initial={false}>
              <motion.div
                key={activeIndex}
                variants={imageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.8, ease: easeInOut }}
                className="absolute inset-0"
              >
                <motion.div
                  className="w-full h-full"
                  variants={kenBurnsVariants}
                  initial="initial"
                  animate="animate"
                >
                  <Image
                    src={services[activeIndex].image}
                    alt={services[activeIndex].title}
                    fill
                    className="object-cover"
                    priority={activeIndex === 0}
                  />
                </motion.div>
                <div className="absolute inset-0 bg-black/20"></div>
              </motion.div>
            </AnimatePresence>
            <div className="absolute top-8 right-8 flex flex-col gap-2">
              {services.map((_, index) => (
                <TimerButton
                  key={index}
                  index={index}
                  activeIndex={activeIndex}
                  isPaused={isPaused}
                  duration={DURATION}
                  onClick={() => setActiveIndex(index)}
                  onComplete={() =>
                    setActiveIndex((prev) => (prev + 1) % services.length)
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
