"use client";

import { ArrowRight } from 'lucide-react';
import CustomButton from '../ui/Button';
import SectionTransition from '../ui/SectionTransition';
import PatternBackground from '../ui/PatternBackground';

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      id="hero"
    >
      <PatternBackground variant="circuit" opacity={0.3} />
      <div className="absolute top-1/4 -left-10 w-64 h-64 bg-brand-purple/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-10 w-72 h-72 bg-brand-purpleDark/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col items-center text-center max-w-6xl mx-auto">
          <SectionTransition>
            <div className="inline-block mb-4 px-3 py-1 bg-brand-lavender/30 backdrop-blur-sm rounded-full">
              <span className="text-sm font-medium text-brand-purpleDark">
                Innovative Solutions for Modern Enterprises
              </span>
            </div>
          </SectionTransition>

          <SectionTransition delay={200}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Transforming Ideas
              <span className="block text-gradient">Powerful Solutions</span>
            </h1>
          </SectionTransition>

          <SectionTransition delay={600}>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <CustomButton>
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </CustomButton>
              <CustomButton variant="secondary">
                Learn More
              </CustomButton>
            </div>
          </SectionTransition>

          <SectionTransition delay={800}>
            <div className="mt-16 md:mt-20 relative w-full max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-b from-brand-purple/20 to-brand-purpleDark/20 blur-3xl rounded-full -z-10 opacity-30" />
              <div className="rounded-2xl bg-white/50 backdrop-blur-md shadow-xl overflow-hidden border border-white/30 p-2">
                <div className="relative rounded-xl overflow-hidden aspect-video bg-brand-offwhite">
                  {/* Hero image or mockup */}
                  <div className="absolute inset-0 animate-pulse-slow bg-gradient-to-br from-brand-lavender/50 via-white to-brand-lavender/50" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-brand-purpleDark/70 font-medium">
                      [Interactive Product Demo]
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-5 left-5 h-2 w-2 bg-brand-purple rounded-full animate-pulse-slow" />
                  <div className="absolute top-5 left-10 h-2 w-2 bg-brand-purple/70 rounded-full animate-pulse-slow" style={{ animationDelay: '0.5s' }} />
                  <div className="absolute top-5 left-15 h-2 w-2 bg-brand-purple/40 rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }} />
                </div>
              </div>

              <div className="absolute -bottom-5 -right-5 h-24 w-24 bg-brand-purple/10 rounded-full blur-2xl" />
              <div className="absolute -top-5 -left-5 h-32 w-32 bg-brand-purpleDark/10 rounded-full blur-2xl" />
            </div>
          </SectionTransition>
        </div>
      </div>
    </section>
  );
};

export default Hero;
