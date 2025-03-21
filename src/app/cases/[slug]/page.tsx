"use client";

import { useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { cases } from "@/data/cases";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Slogan from "@/components/layout/Slogan";
import Contact from "@/components/sections/Contact";
import Hero from "./Hero";
import Challange from "./Challange";
import Solution from "./Solution";
import Features from "./Features";

gsap.registerPlugin(ScrollTrigger);

const CasePage = () => {
  const { slug } = useParams();
  const caseData = cases.find((item) => item.slug === slug);

  const imageOneRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const animateImage = (ref: React.RefObject<HTMLImageElement | null>) => {
      if (ref.current) {
        gsap.to(ref.current, {
          scale: 1.08,
          ease: "power1.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5,
          },
        });
      }
    };
  
    animateImage(imageOneRef);
  }, []);

  if (!caseData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="overflow-hidden bg-brand-offwhite">
      <Header />
      <Hero
        title={caseData.title}
        description={caseData.description[0]}
        banner={caseData.banner}
        tags={caseData.tags}
        date={caseData.date}
      />
      <Challange
        intro={caseData.challenge.intro}
        points={caseData.challenge.points}
        mission={caseData.challenge.mission}
      />

      {/* Mockup principal */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="relative rounded-3xl overflow-hidden shadow-lg">
            <Image
              ref={imageOneRef}
              src={caseData.images[0]}
              alt="Main mockup"
              className="object-cover w-full h-full transition-transform will-change-transform"
              width={2000}
              height={1000}
            />
          </div>
        </div>
      </section>


      <Solution solution={caseData.solution} />

      {/* Video Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="relative rounded-3xl overflow-hidden bg-brand-lavender p-4 md:p-8 lg:p-12 shadow-md">
            <div className="aspect-video relative">
              <video
                className="w-full h-full object-fill rounded-xl shadow-lg"
                autoPlay
                loop
                muted
                playsInline
                src={caseData.videos[0]}
              />
            </div>
          </div>
        </div>
      </section>


      <Features features={caseData.features} techs={caseData.techs} />
      
      {/* Mobile Mockups */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Mockup 1 */}
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src={caseData.images[1]}
                alt="Mobile mockup 1"
                className="object-cover w-full h-full relative z-10"
                loading="lazy"
                width={270}
                height={582}
              />
            </div>
            {/* Mockup 2 */}
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src={caseData.images[2]}
                alt="Mobile mockup 2"
                className="object-cover w-full h-full relative z-10"
                loading="lazy"
                width={270}
                height={582}
              />
            </div>
            {/* Mockup 3 */}
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src={caseData.images[3]}
                alt="Mobile mockup 3"
                className="object-cover w-full h-full relative z-10"
                loading="lazy"
                width={270}
                height={582}
              />
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Slogan />
      <Footer />
    </div>
  );
};

export default CasePage;
