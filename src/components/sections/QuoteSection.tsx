"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Wrench, Building, Mountain, Send, X } from "lucide-react";

const services = [
  {
    id: "alquiler",
    icon: <Wrench className="w-12 h-12 text-amber-400" />,
    title: "Alquiler de Maquinaria",
    description: "Accede a nuestra flota moderna y certificada.",
  },
  {
    id: "construccion",
    icon: <Building className="w-12 h-12 text-amber-400" />,
    title: "Proyectos de Construcción",
    description: "Soluciones integrales para obras civiles.",
  },
  {
    id: "mineria",
    icon: <Mountain className="w-12 h-12 text-amber-400" />,
    title: "Servicios para Minería",
    description: "Operaciones seguras y eficientes para el sector minero.",
  },
];

const QuoteForm = ({
  serviceTitle,
  onClose,
}: {
  serviceTitle: string;
  onClose: () => void;
}) => {
  // Form state would be managed here
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="overflow-hidden"
    >
      <Card className="w-full bg-stone-800/50 border-stone-700 text-white mt-8">
        <CardHeader className="flex flex-row justify-between items-center">
          <div>
            <CardTitle className="text-2xl font-bold text-amber-400">
              Detalles para: {serviceTitle}
            </CardTitle>
            <CardDescription className="text-stone-300">
              Completa la información para preparar tu cotización.
            </CardDescription>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-6 w-6 text-stone-400" />
          </Button>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Form fields would go here, similar to Step2 in the original component */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="projectName" className="text-stone-300">
                Nombre del Proyecto
              </Label>
              <Input
                id="projectName"
                placeholder="Ej: Movimiento de tierras"
                className="bg-stone-900 border-stone-600 text-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location" className="text-stone-300">
                Ubicación
              </Label>
              <Input
                id="location"
                placeholder="Ej: Arequipa, La Joya"
                className="bg-stone-900 border-stone-600 text-white"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="description" className="text-stone-300">
              Descripción del Trabajo
            </Label>
            <Textarea
              id="description"
              placeholder="Describe brevemente el alcance del trabajo..."
              className="bg-stone-900 border-stone-600 text-white"
            />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label htmlFor="contactName" className="text-stone-300">
                Nombre Completo
              </Label>
              <Input
                id="contactName"
                placeholder="Tu nombre"
                className="bg-stone-900 border-stone-600 text-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contactEmail" className="text-stone-300">
                Correo Electrónico
              </Label>
              <Input
                id="contactEmail"
                type="email"
                placeholder="tu@correo.com"
                className="bg-stone-900 border-stone-600 text-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contactPhone" className="text-stone-300">
                Teléfono
              </Label>
              <Input
                id="contactPhone"
                type="tel"
                placeholder="+51 987 654 321"
                className="bg-stone-900 border-stone-600 text-white"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <Button variant="default">
              Enviar Solicitud <Send className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export function QuoteSection() {
  const [activeService, setActiveService] = useState<string | null>(null);

  const handleCardClick = (serviceId: string) => {
    setActiveService((prev) => (prev === serviceId ? null : serviceId));
  };

  return (
    <section id="cotizacion-interactiva" className="pb-24 bg-stone-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white">
          Inicia tu <span className="text-amber-400">Cotización</span>
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-stone-400">
          Selecciona un servicio para ver los detalles y completar tu solicitud.
        </p>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              {...service}
              isActive={activeService === service.id}
              onClick={() => handleCardClick(service.id)}
              isDimmed={activeService !== null && activeService !== service.id}
            />
          ))}
        </div>

        <AnimatePresence>
          {activeService && (
            <QuoteForm
              serviceTitle={
                services.find((s) => s.id === activeService)?.title || ""
              }
              onClose={() => setActiveService(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

const ServiceCard = ({
  icon,
  title,
  description,
  onClick,
  isActive,
  isDimmed,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void;
  isActive: boolean;
  isDimmed: boolean;
}) => (
  <div
    onClick={onClick}
    className={`p-6 bg-stone-900 rounded-lg border-2  cursor-pointer transition-all duration-300 flex flex-col items-center text-center
      ${isActive ? "border-amber-400" : "border-stone-700"}
      ${isDimmed ? "opacity-50" : "opacity-100 hover:border-amber-400"}
    `}
  >
    {icon}
    <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
    <p className="mt-2 text-sm text-stone-400">{description}</p>
  </div>
);
