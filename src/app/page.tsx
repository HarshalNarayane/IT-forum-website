import { Navbar, Footer } from "@/components";
import Hero from "@/sections/Hero/Hero";
import Stats from "@/sections/Stats/Stats";
import About from "@/sections/About/About";
import Committees from "@/sections/Committees/Committees";
import Events from "@/sections/Events/Events";
import Projects from "@/sections/Projects/Projects";
import Gallery from "@/sections/Gallery/Gallery";
import Achievements from "../sections/Achievements/Achievements";
import Contact from "@/sections/Contact/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Committees />
      <Events />
      <Projects />
      <Gallery />
      <Achievements />
      <Contact />
      <Footer />
    </>
  );
}