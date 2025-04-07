"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@zardo/ui-kit";
import { SectionTransition } from "@zardo/ui-kit/animations"
import { PatternBackground } from "@zardo/ui-kit/layout";

import { useScrollToSection } from "@/hooks/useScrollToSection";

const Hero = () => {
  const scrollToSection = useScrollToSection();

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      id="hero"
    >
      <PatternBackground/>
      
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col items-center text-center max-w-7xl mx-auto">
          <SectionTransition>
            <div className="inline-block mb-4 px-3 py-1 bg-brand-lavender/30 backdrop-blur-sm rounded-full">
              <span className="text-sm font-medium text-brand-purpleDark">
                Innovative Solutions for Modern Companies
              </span>
            </div>
          </SectionTransition>

          <SectionTransition delay={200}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Transforming Ideas into
              <span className="block text-gradient">Powerful Digital Solutions</span>
            </h1>
          </SectionTransition>

          <SectionTransition delay={600}>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button 
                onClick={() => scrollToSection({ 
                  sectionId: "contact", 
                  offset: 80,
                  duration: 800
                })}
                aria-label="Get started by scrolling to contact section"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Button>
              <Button 
                variant="outline" 
                onClick={() => scrollToSection({ 
                  sectionId: "solutions", 
                  offset: 80,
                  duration: 800
                })}
                aria-label="Learn more by scrolling to solutions section"
              >
                Learn More
              </Button>
            </div>
          </SectionTransition>
        </div>
      </div>
    </section>
  );
};

export default Hero;
