"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
import {
  Wrench,
  Building,
  Mountain,
  ArrowLeft,
  Send,
  CheckCircle,
} from "lucide-react";
import { Services } from "@/components/sections/Services";

const CotizacionOnline = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: "",
    projectName: "",
    location: "",
    equipment: "",
    startDate: "",
    endDate: "",
    description: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (id: string, value: string) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const selectService = (service: string) => {
    setFormData((prev) => ({ ...prev, service }));
    setStep(2);
  };

  const Step1 = () => (
    <Card className="w-full max-w-4xl bg-stone-800 border-stone-700 text-white">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-amber-400">
          Iniciar Cotización
        </CardTitle>
        <CardDescription className="text-stone-300">
          Selecciona el tipo de servicio que necesitas.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid md:grid-cols-3 gap-6">
        <ServiceCard
          icon={<Wrench className="w-12 h-12 text-amber-400" />}
          title="Alquiler de Maquinaria"
          description="Accede a nuestra flota moderna y certificada."
          onClick={() => selectService("Alquiler de Maquinaria")}
        />
        <ServiceCard
          icon={<Building className="w-12 h-12 text-amber-400" />}
          title="Proyectos de Construcción"
          description="Soluciones integrales para obras civiles."
          onClick={() => selectService("Proyectos de Construcción")}
        />
        <ServiceCard
          icon={<Mountain className="w-12 h-12 text-amber-400" />}
          title="Servicios para Minería"
          description="Operaciones seguras y eficientes para el sector minero."
          onClick={() => selectService("Servicios para Minería")}
        />
      </CardContent>
    </Card>
  );

  const ServiceCard = ({
    icon,
    title,
    description,
    onClick,
  }: {
    icon: React.ReactNode;
    title: string;
    description: string;
    onClick: () => void;
  }) => (
    <div
      onClick={onClick}
      className="p-6 bg-stone-900 rounded-lg border border-stone-700 hover:bg-stone-700 hover:border-amber-400 cursor-pointer transition-all duration-300 flex flex-col items-center text-center"
    >
      {icon}
      <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-stone-400">{description}</p>
    </div>
  );

  const Step2 = () => (
    <Card className="w-full max-w-4xl bg-stone-800 border-stone-700 text-white">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-amber-400">
          Detalles del Proyecto
        </CardTitle>
        <CardDescription className="text-stone-300">
          Completa la información para preparar tu cotización personalizada.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="projectName" className="text-stone-300">
              Nombre del Proyecto
            </Label>
            <Input
              id="projectName"
              value={formData.projectName}
              onChange={handleInputChange}
              placeholder="Ej: Movimiento de tierras Mina Esperanza"
              className="bg-stone-900 border-stone-600 text-white"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="location" className="text-stone-300">
              Ubicación del Proyecto
            </Label>
            <Input
              id="location"
              value={formData.location}
              onChange={handleInputChange}
              placeholder="Ej: Arequipa, La Joya"
              className="bg-stone-900 border-stone-600 text-white"
            />
          </div>
        </div>

        {formData.service === "Alquiler de Maquinaria" && (
          <div className="space-y-2">
            <Label htmlFor="equipment" className="text-stone-300">
              Equipo Requerido
            </Label>
            <Select
              onValueChange={(value) => handleSelectChange("equipment", value)}
            >
              <SelectTrigger className="w-full bg-stone-900 border-stone-600 text-white">
                <SelectValue placeholder="Selecciona un equipo" />
              </SelectTrigger>
              <SelectContent className="bg-stone-900 border-stone-600 text-white">
                <SelectItem value="excavadora-cat-320d">
                  Excavadora CATERPILLAR 320D
                </SelectItem>
                <SelectItem value="volquete-volvo-fmx">
                  Volquete VOLVO FMX 15m³
                </SelectItem>
                <SelectItem value="rodillo-bomag-bw211">
                  Rodillo Vibratorio BOMAG BW 211
                </SelectItem>
                <SelectItem value="otro">
                  Otro (especificar en descripción)
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="startDate" className="text-stone-300">
              Fecha de Inicio Estimada
            </Label>
            <Input
              id="startDate"
              type="date"
              value={formData.startDate}
              onChange={handleInputChange}
              className="bg-stone-900 border-stone-600 text-white"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="endDate" className="text-stone-300">
              Fecha de Fin Estimada
            </Label>
            <Input
              id="endDate"
              type="date"
              value={formData.endDate}
              onChange={handleInputChange}
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
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Describe brevemente el alcance del trabajo, requerimientos especiales, etc."
            className="bg-stone-900 border-stone-600 text-white"
          />
        </div>

        <hr className="border-stone-700" />

        <h3 className="text-xl font-semibold text-amber-400 pt-4">
          Información de Contacto
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <Label htmlFor="contactName" className="text-stone-300">
              Nombre Completo
            </Label>
            <Input
              id="contactName"
              value={formData.contactName}
              onChange={handleInputChange}
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
              value={formData.contactEmail}
              onChange={handleInputChange}
              placeholder="tu@correo.com"
              className="bg-stone-900 border-stone-600 text-white"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contactPhone" className="text-stone-300">
              Teléfono / Celular
            </Label>
            <Input
              id="contactPhone"
              type="tel"
              value={formData.contactPhone}
              onChange={handleInputChange}
              placeholder="+51 987 654 321"
              className="bg-stone-900 border-stone-600 text-white"
            />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="secondary" onClick={() => setStep(1)}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Volver
        </Button>
        <Button variant="default" onClick={() => setStep(3)}>
          Enviar Solicitud <Send className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );

  const Step3 = () => (
    <Card className="w-full max-w-2xl bg-stone-800 border-stone-700 text-white text-center">
      <CardHeader>
        <div className="mx-auto bg-green-500/20 rounded-full p-4 w-fit">
          <CheckCircle className="w-16 h-16 text-green-400" />
        </div>
        <CardTitle className="text-3xl font-bold text-green-400 mt-4">
          ¡Solicitud Enviada!
        </CardTitle>
        <CardDescription className="text-stone-300">
          Gracias, {formData.contactName}.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-stone-200">
          Hemos recibido tu solicitud para el proyecto{" "}
          <span className="font-bold text-amber-400">
            {formData.projectName || "sin nombre"}
          </span>
          . Uno de nuestros especialistas se pondrá en contacto contigo a la
          brevedad en{" "}
          <span className="font-bold text-amber-400">
            {formData.contactEmail}
          </span>
          .
        </p>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button
          variant="secondary"
          onClick={() => {
            setStep(1);
            setFormData({
              service: "",
              projectName: "",
              location: "",
              equipment: "",
              startDate: "",
              endDate: "",
              description: "",
              contactName: "",
              contactEmail: "",
              contactPhone: "",
            });
          }}
        >
          Realizar otra cotización
        </Button>
      </CardFooter>
    </Card>
  );

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
      default:
        return <Step1 />;
    }
  };

  return (
    <div className="container mx-auto px-6 py-20 flex flex-col items-center justify-center">
      <div className="w-full flex items-center justify-center">
        {renderStep()}
      </div>
    </div>
  );
};

const CotizacionPage = () => {
  return (
    <>
      <CotizacionOnline />
      <Services />
    </>
  );
};

export default CotizacionPage;
