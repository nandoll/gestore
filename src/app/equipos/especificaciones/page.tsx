import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FileText } from "lucide-react";

const PageSection = ({ title, children }: { title: React.ReactNode, children: React.ReactNode }) => (
    <section className="py-20 bg-stone-900">
        <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-white text-center mb-12">{title}</h2>
            {children}
        </div>
    </section>
);

export default function EspecificacionesPage() {
    return (
        <PageSection title={<>Especificaciones <span className="text-amber-400">Técnicas</span></>}>
            <p className="text-lg text-stone-300 mb-12 max-w-3xl mx-auto text-center">
                Acceda a las fichas técnicas completas de nuestra maquinaria y equipos para conocer en detalle sus capacidades y características.
            </p>
            <div className="bg-stone-800 border border-stone-700 rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-6">Fichas Técnicas Disponibles:</h3>
                <ul className="space-y-4">
                    <li>
                        <a href="#" className="text-amber-400 hover:underline text-lg flex items-center transition-colors">
                            <FileText className="w-5 h-5 mr-3" />
                            Ficha Técnica - Excavadora Hidráulica (PDF)
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-amber-400 hover:underline text-lg flex items-center transition-colors">
                            <FileText className="w-5 h-5 mr-3" />
                            Ficha Técnica - Cargador Frontal (PDF)
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-amber-400 hover:underline text-lg flex items-center transition-colors">
                            <FileText className="w-5 h-5 mr-3" />
                            Ficha Técnica - Perforadora de Rocas (PDF)
                        </a>
                    </li>
                </ul>
            </div>
        </PageSection>
    );
}
