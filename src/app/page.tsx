import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import Behind from "@/components/sections/Behind";
import Contact from "@/components/sections/Contact";
import Slogan from "@/components/layout/Slogan";
import FAQ from "@/components/sections/FAQ";
import Services from "@/components/sections/ServicesList";
import Portfolio from "@/components/sections/Portfolio";
import Solutions from "@/components/sections/Solutions";
// import Benefits from "@/components/sections/Benefits";
import Process from "@/components/sections/Process";

export default function Home() {
  return (
    <div className="overflow-hidden bg-brand-offwhite">
      <Header />
      <Hero/>
      <Solutions/>
      <Portfolio/>
      <Services/>
      {/* <Benefits/> */}
      <Process />
      <Behind/>
      <Contact/>
      <FAQ/>
      <Slogan/>
      <Footer />
    </div>
  );
}
