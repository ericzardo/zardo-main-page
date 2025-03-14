import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import Behind from "@/components/sections/Behind";
import Contact from "@/components/sections/Contact";
import Slogan from "@/components/layout/Slogan";
import FAQ from "@/components/sections/FAQ";
import Services from "@/components/sections/ServicesList";
import AIAutomations from "@/components/sections/AIAutomations";
import WebDevelopment from "@/components/sections/WebDevelopment";

export default function Home() {
  return (
    <div className="overflow-hidden bg-brand-offwhite">
      <Header />

      <Hero/>
      <Services/>
      <AIAutomations/>
      <WebDevelopment/>
      <Behind/>
      <Contact/>
      <FAQ/>
      <Slogan/>
      <Footer />
    </div>
  );
}
