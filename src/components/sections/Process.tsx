"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { processSteps } from "@/data/process";
import { SectionTransition } from "@zardo/ui-kit/animations";

const ProcessSection = () => {
  return (
    <section className="relative py-16 md:py-24 bg-brand-offwhite overflow-hidden" id="projects">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-heading text-gradient">Our Proven Process</h2>
          <p className="text-base text-brand-navy/60 max-w-2xl mx-auto">
            We follow a structured process to ensure your transformation is seamless, from start to finish.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative">
          
          {/* Process Steps */}
          {processSteps.map((step, index) => (
            <SectionTransition
              key={step.id}
              delay={step.delay}
              direction="right"
              className="relative"
            >
              {index < processSteps.length - 1 && (
                <div className="hidden lg:flex absolute top-20 -right-4 z-10 text-brand-purple">
                  <ArrowRight className="w-8 h-8" />
                </div>
              )}

              <div
                className={cn(
                  "glass-card h-full p-6 rounded-xl",
                  "transform transition-all duration-500 hover:-translate-y-2"
                )}
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                }}
              >
                <div
                  className={cn(
                    "w-16 h-16 rounded-full mb-6 flex items-center justify-center",
                    "bg-gradient-to-br",
                    step.color
                  )}
                >
                  {step.icon}
                  <div className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-md">
                    <span className="text-brand-purpleDeep font-bold text-sm">{step.id}</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-brand-purpleDeep mb-3">{step.title}</h3>
                <p className="text-brand-navy/80">{step.description}</p>
              </div>
            </SectionTransition>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ProcessSection;