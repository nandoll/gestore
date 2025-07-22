"use client";

import Link from "next/link";
import { motion, easeOut } from "framer-motion";
import { Button } from "@/components/ui/button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: easeOut,
    },
  },
};

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Layer 1: Video Background */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="/images/landing/proyectos-4.webp" // Placeholder image while video loads
        >
          <source src="/images/hero.mp4" type="video/mp4" />
          Tu navegador no soporta el tag de video.
        </video>
      </div>

      {/* Layer 2: Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>

      {/* Layer 3: Content */}
      <motion.div
        className="relative z-20 text-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight shadow-lg"
          variants={itemVariants}
        >
          Tu socio estratégico en{" "}
          <span className="text-amber-500">
            construcción y operaciones mineras
          </span>
        </motion.h1>
        <motion.p
          className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-stone-300 shadow-md"
          variants={itemVariants}
        >
          Maximizamos la productividad de tu proyecto con maquinaria de última
          generación y un equipo experto comprometido con tus objetivos.
        </motion.p>
        <motion.div
          className="mt-8 flex justify-center gap-4"
          variants={itemVariants}
        >
          <Button asChild size="lg">
            <Link href="/cotizacion">Solicita una cotización</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/proyectos">Ver Proyectos</Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
