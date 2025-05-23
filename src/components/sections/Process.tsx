"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionTransition } from "@zardo/ui-kit/animations";
import { useTranslation } from "react-i18next";
import { Search, Lightbulb, Code, LineChart } from "lucide-react";

const iconMap = {
  1: {
    icon: <Search className="w-8 h-8 text-brand-lavender" />,
    color: "bg-blue-500",
    delay: 300,
  },
  2: {
    icon: <Lightbulb className="w-8 h-8 text-brand-lavender" />,
    color: "bg-green-500",
    delay: 400,
  },
  3: {
    icon: <Code className="w-8 h-8 text-brand-lavender" />,
    color: "bg-orange-500",
    delay: 500,
  },
  4: {
    icon: <LineChart className="w-8 h-8 text-brand-lavender" />,
    color: "bg-purple-500",
    delay: 600,
  },
};

const ProcessSection = () => {
  const { t } = useTranslation("process");

  const steps = [1, 2, 3, 4].map((id) => ({
    id,
    title: t(`steps.${id}.title`),
    description: t(`steps.${id}.description`),
    ...iconMap[id as keyof typeof iconMap]
  }));

  return (
    <section className="relative py-16 md:py-24 bg-brand-offwhite overflow-hidden" id="projects">
      <div className="container mx-auto px-4">
        <div className="text-left mb-12">
          <h2 className="section-heading text-gradient">{t("title")}</h2>
          <p className="text-base text-brand-navy/60 max-w-2xl">
            {t("description")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <SectionTransition
              key={step.id}
              delay={step.delay}
              direction="right"
              className="relative"
            >
              {index < steps.length - 1 && (
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

                <h3 className="text-xl font-semibold text-brand-purpleDeep mb-3">
                  {step.title}
                </h3>
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
