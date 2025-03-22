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
import LoadingScreen from "@/components/ui/LoadingScreen";
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
    <>
      <LoadingScreen />
      <div className="overflow-hidden bg-brand-offwhite">
        <Header />
        <Hero
          title={caseData.title}
          description={caseData.description[0]}
          banner={caseData.banner}
          tags={caseData.tags}
          date={caseData.date}
          note={caseData.note}
        />
        <Challange
          intro={caseData.challenge.intro}
          points={caseData.challenge.points}
          mission={caseData.challenge.mission}
        />

        {/* Mockup principal */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="relative rounded-3xl overflow-hidden shadow-lg will-change-transform">
              <Image
                ref={imageOneRef}
                src={caseData.images[0]}
                alt="Main mockup"
                width={2000}
                height={1000}
                priority
                quality={90}
                className="w-full h-full object-cover transition-transform will-change-transform"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 2000px"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSAyVC08MTY3LjIyOUFTRjo/Tj4yMkhiS0hLPVBVW1xbOEVJW1L/2wBDARUXFx4aHjshITtLQktLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
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
                  preload="auto"
                  poster={caseData.images[0]}
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
              {[1, 2, 3].map((index) => (
                <div key={index} className="relative rounded-2xl overflow-hidden">
                  <Image
                    src={caseData.images[index]}
                    alt={`Mobile mockup ${index}`}
                    width={270}
                    height={582}
                    loading="lazy"
                    quality={85}
                    className="w-full h-full object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 270px"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <Contact />
        <Slogan />
        <Footer />
      </div>
    </>
  );
};

export default CasePage;
