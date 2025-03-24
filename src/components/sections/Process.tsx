"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import PatternBackground from "../ui/PatternBackground";
import { cn } from "@/lib/utils";
import { processSteps } from "@/data/process";

const ProcessSection = () => {
  return (
    <section className="relative py-16 md:py-24 bg-brand-offwhite overflow-hidden" id="projects">
      <PatternBackground variant="circuit" opacity={0.2} />

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-heading text-gradient">Our Proven Process</h2>
          <p className="text-base text-brand-navy/60 max-w-2xl mx-auto">
            We follow a structured process to ensure your transformation is seamless, from start to finish.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative">
          {/* Linha conectora (visível apenas em desktop) */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-brand-purple to-orange-500 opacity-30"></div>
          
          {/* Etapas do processo */}
          {processSteps.map((step, index) => (
            <div 
              key={step.id}
              className="relative"
              style={{
                animationDelay: `${step.delay}ms`,
              }}
            >
              {/* Conector para desktop */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:flex absolute top-20 -right-4 z-10 text-brand-purple">
                  <ArrowRight className="w-8 h-8" />
                </div>
              )}
              
              <div 
                className={cn(
                  "glass-card h-full p-6 rounded-xl",
                  "transform transition-all duration-500 hover:-translate-y-2",
                  "opacity-0 animate-[fade-in_0.6s_ease-out_forwards] translate-y-8",
                  "backdrop-blur-lg"
                )}
                style={{
                  animationDelay: `${parseInt(step.delay) + 100}ms`,
                  backgroundColor: "rgba(255, 255, 255, 0.05)"
                }}
              >
                <div className={cn(
                  "w-16 h-16 rounded-full mb-6 flex items-center justify-center",
                  "bg-gradient-to-br", step.color
                )}>
                  {step.icon}
                  <div className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-md">
                    <span className="text-brand-purpleDeep font-bold text-sm">{step.id}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-brand-purpleDeep mb-3">{step.title}</h3>
                <p className="text-brand-navy/80">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;