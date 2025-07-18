"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

const navigationItems = [
  {
    name: "Servicios",
    path: "/servicios",
    subItems: [
      { name: "Alquiler de Maquinaria", path: "/servicios/alquiler-maquinaria", description: "Flota moderna y certificada." },
      { name: "Proyectos de Construcción", path: "/servicios/proyectos-construccion", description: "Soluciones integrales para obras." },
      { name: "Servicios Mineros", path: "/servicios/servicios-mineros", description: "Operaciones seguras y eficientes." },
      { name: "Operación de Equipos", path: "/servicios/operacion-equipos", description: "Personal calificado y experto." },
    ],
  },
  {
    name: "Nosotros",
    path: "/nosotros",
    subItems: [
      { name: "Historia y Misión", path: "/nosotros/historia", description: "Nuestra trayectoria y valores." },
      { name: "Certificaciones", path: "/nosotros/certificaciones", description: "Compromiso con la calidad." },
      { name: "Equipo Profesional", path: "/nosotros/equipo", description: "Conoce a nuestros expertos." },
    ],
  },
  {
    name: "Proyectos",
    path: "/proyectos",
    subItems: [
        { name: "Obras Civiles", path: "/proyectos/obras-civiles", description: "Infraestructura que conecta." },
        { name: "Proyectos Mineros", path: "/proyectos/proyectos-mineros", description: "Desarrollo para la minería." },
        { name: "Casos de Éxito", path: "/proyectos/casos-exito", description: "Resultados que nos respaldan." },
    ]
  },
  {
    name: "Equipos",
    path: "/equipos",
  },
  {
    name: "Contacto",
    path: "/contacto",
  },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-stone-900/80 backdrop-blur-lg sticky top-0 left-0 right-0 z-50 border-b border-stone-800">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white">
          Andes<span className="text-amber-400">Maq</span>
        </Link>
        
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navigationItems.map((item) => (
              <NavigationMenuItem key={item.path}>
                {item.subItems ? (
                  <>
                    <NavigationMenuTrigger 
                      className={cn("bg-transparent text-stone-300 hover:text-amber-400 focus:text-amber-400 data-[active]:bg-stone-800/50 data-[state=open]:bg-stone-800/50", { "text-amber-400": pathname.startsWith(item.path) })}
                    >
                      {item.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-stone-900/95 border border-stone-800">
                        {item.subItems.map((subItem) => (
                          <ListItem
                            key={subItem.path}
                            href={subItem.path}
                            title={subItem.name}
                            className={cn({ "bg-stone-800": pathname === subItem.path})}
                          >
                            {subItem.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <Link href={item.path} legacyBehavior passHref>
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent text-stone-300 hover:text-amber-400 hover:bg-stone-800/50 focus:bg-stone-800/50", { "text-amber-400 bg-stone-800/50": pathname === item.path })}>
                      {item.name}
                    </NavigationMenuLink>
                  </Link>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden md:flex items-center space-x-4">
          <Button asChild>
            <Link href="/cotizacion">Cotizar Ahora</Link>
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6 text-white" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-stone-900 text-white border-l-stone-800">
              <div className="flex flex-col space-y-2 p-4">
                {navigationItems.map((item) => (
                  <div key={item.path}>
                    <Link
                      href={item.path}
                      className={cn("block py-2 px-4 text-lg font-semibold hover:bg-stone-800 rounded-md", { "text-amber-400": pathname.startsWith(item.path)})}
                      onClick={() => !item.subItems && setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.subItems && (
                      <div className="pl-4 border-l border-stone-700 ml-4">
                        {item.subItems.map((subItem) => (
                           <Link
                            key={subItem.path}
                            href={subItem.path}
                            className={cn("block py-2 px-4 text-stone-300 hover:bg-stone-800 rounded-md", { "text-amber-400": pathname === subItem.path})}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Button asChild className="w-full mt-6">
                  <Link href="/cotizacion" onClick={() => setIsMenuOpen(false)}>
                    Cotizar Ahora
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-stone-800 focus:bg-stone-800 text-white",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none text-amber-400">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-stone-400">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
