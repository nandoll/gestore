"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contacto" className="py-20 bg-stone-900">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white">
            Iniciemos tu <span className="text-amber-400">Próximo Proyecto</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-stone-400">
            Ponte en contacto con nuestro equipo de especialistas. Estamos
            listos para asesorarte.
          </p>
        </div>
        <div className="mt-12 max-w-4xl mx-auto bg-stone-800 rounded-lg p-8 lg:p-12 shadow-2xl border border-stone-700">
          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-stone-300">
                  Nombre Completo
                </Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-stone-900 border-stone-700 text-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-stone-300">
                  Correo Electrónico
                </Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-stone-900 border-stone-700 text-white"
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <Label htmlFor="message" className="text-stone-300">
                  Mensaje
                </Label>
                <Textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="bg-stone-900 border-stone-700 text-white"
                />
              </div>
            </div>
            <div className="mt-8 text-right">
              <Button type="submit">Enviar Mensaje</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
