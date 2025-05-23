'use client';

import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import { SectionTransition } from "@zardo/ui-kit/animations";
import { PatternBackground } from "@zardo/ui-kit/layout";
import AutomationCard from "../ui/AutomationCard";
import { useTranslation } from "react-i18next";

type AnimationRef = { destroy: () => void; setSpeed: (speed: number) => void };

const OurAutomations = () => {
  const { t } = useTranslation("ourautomations");

  const prospectingAnimationRef = useRef<HTMLDivElement | null>(null);
  const schedulingAnimationRef = useRef<HTMLDivElement | null>(null);
  const animationsRef = useRef<{ [key: string]: AnimationRef }>({});

  const loadAnimation = (
    container: HTMLDivElement | null,
    path: string,
    speed = 0.5,
    scale = 1,
    y = 0
  ) => {
    if (!container) return;

    if (animationsRef.current[path]) {
      animationsRef.current[path].destroy();
    }

    const animation = lottie.loadAnimation({
      container,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path,
    });

    animationsRef.current[path] = animation;
    animation.setSpeed(speed);

    container.style.transform = `scale(${scale}) translateY(${y}px)`;
  };

  useEffect(() => {
    loadAnimation(prospectingAnimationRef.current, "/animations/prospecting.json", 0.85, 1.2, -10);
    loadAnimation(schedulingAnimationRef.current, "/animations/process-integration.json", 0.5, 1.2, -5);

    return () => {
      Object.values(animationsRef.current).forEach((animation) => animation.destroy?.());
      animationsRef.current = {};
    };
  }, []);

  return (
    <section className="relative py-20" id="automations">
      <PatternBackground />

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="w-full text-right mb-14">
          <h2 className="section-heading text-gradient">{t("title")}</h2>
          <p className="text-base text-brand-navy/60 max-w-2xl ml-auto">
            {t("description")}
          </p>
        </div>

        <ul className="flex flex-col max-w-4/5 mx-auto gap-12">
          <SectionTransition direction="left">
            <li>
              <AutomationCard
                animationRef={prospectingAnimationRef}
                title={t("prospecting.title")}
                description={t("prospecting.description")}
                result={t("prospecting.result")}
              />
            </li>
          </SectionTransition>

          <SectionTransition direction="right">
            <li>
              <AutomationCard
                animationRef={schedulingAnimationRef}
                title={t("scheduling.title")}
                description={t("scheduling.description")}
                result={t("scheduling.result")}
              />
            </li>
          </SectionTransition>
        </ul>

        {/* <p className="mt-14 text-sm text-muted-foreground italic text-center">
          {t("note")}
        </p> */}
      </div>
    </section>
  );
};

export default OurAutomations;
