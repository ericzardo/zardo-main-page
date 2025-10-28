"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@zardo/ui-kit";
import { SectionTransition } from "@zardo/ui-kit/animations";
import { PatternBackground } from "@zardo/ui-kit/layout";
import { useTranslation } from "react-i18next";

import { useScrollToSection } from "@/hooks/useScrollToSection";

const Hero = () => {
  const scrollToSection = useScrollToSection();
  const { t } = useTranslation("hero");

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
                {t("tagline")}
              </span>
            </div>
          </SectionTransition>

          <SectionTransition delay={200}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              {t("headline.line1")}
              <span className="block text-gradient">{t("headline.line2")}</span>
            </h1>
          </SectionTransition>

          <SectionTransition delay={600}>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button 
                className="cta-get-started"
                onClick={() => scrollToSection({ 
                  sectionId: "projects", 
                  offset: 80,
                  duration: 800
                })}
                aria-label={t("actions.getStartedAria")}
              >
                {t("actions.getStarted")}
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Button>
              <Button 
                className="cta-learn-more"
                variant="outline" 
                onClick={() => scrollToSection({ 
                  sectionId: "contact", 
                  offset: 80,
                  duration: 800
                })}
                aria-label={t("actions.learnMoreAria")}
              >
                {t("actions.learnMore")}
              </Button>
            </div>
          </SectionTransition>
        </div>
      </div>
    </section>
  );
};

export default Hero;
