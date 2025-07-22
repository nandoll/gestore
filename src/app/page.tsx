import { AboutUs } from "@/components/sections/AboutUs";
import { Clients } from "@/components/sections/Clients";
import { Contact } from "@/components/sections/Contact";
import { Equipment } from "@/components/sections/Equipment";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { Services } from "@/components/sections/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Services />
      <QuoteSection />
      <AboutUs />
      <Equipment />
      <Clients />
      <Contact />
    </>
  );
}
