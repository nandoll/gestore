import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { ChatWidget } from "@/components/ui/ChatWidget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AndesMaq Soluciones",
  description: "Alquiler de Maquinaria Pesada para Minería y Construcción",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark bg-stone-900 text-stone-50`}
      >
        <Header />
        <Breadcrumbs />
        <main>{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}