"use client";

import { useRef, useEffect } from "react";
import lottie from "lottie-web";
import { gsap } from "gsap";
import { useTranslation } from "react-i18next";
import { SectionTransition } from "@zardo/ui-kit/animations";
import IntegrationCard from "@/components/ui/IntegrationsCard";

type Direction = "left" | "right";
type AnimationRef = { destroy: () => void; setSpeed: (speed: number) => void };

const Solutions = () => {
  const { t } = useTranslation("solutions");

  const chatbotAnimationContainer = useRef<HTMLDivElement | null>(null);
  const machineLearningAnimationContainer = useRef<HTMLDivElement | null>(null);
  const websiteAnimationContainer = useRef<HTMLDivElement | null>(null);
  const animationsRef = useRef<{ [key: string]: AnimationRef }>({});

  const loadAnimation = (
    container: HTMLDivElement | null,
    path: string,
    settings: { scale?: number; speed?: number; x?: number; y?: number } = {}
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

    gsap.to(container, {
      scale: settings.scale || 1,
      x: settings.x || 0,
      y: settings.y || 0,
      duration: 0.3,
      ease: "power2.out",
    });

    if (settings.speed) {
      animation.setSpeed(settings.speed);
    }
  };

  useEffect(() => {
    if (chatbotAnimationContainer.current) {
      loadAnimation(chatbotAnimationContainer.current, "/animations/chatbot.json", { speed: 0.5 });
    }
    if (websiteAnimationContainer.current) {
      loadAnimation(websiteAnimationContainer.current, "/animations/website.json", { scale: 1.3, speed: 0.5, y: -17 });
    }
    if (machineLearningAnimationContainer.current) {
      loadAnimation(machineLearningAnimationContainer.current, "/animations/machine-learn.json", { scale: 2.1, speed: 0.5 });
    }

    return () => {
      Object.values(animationsRef.current).forEach((animation) => {
        if (animation && typeof animation.destroy === "function") {
          animation.destroy();
        }
      });
      animationsRef.current = {};
    };
  }, []);

  const standardCards = [
    {
      title: t("cards.chatbot.title"),
      description: t("cards.chatbot.description"),
      animationRef: chatbotAnimationContainer,
      direction: "left" as Direction,
    },
    {
      title: t("cards.ml.title"),
      description: t("cards.ml.description"),
      animationRef: machineLearningAnimationContainer,
      direction: "right" as Direction,
    },
    {
      title: t("cards.website.title"),
      description: t("cards.website.description"),
      animationRef: websiteAnimationContainer,
      direction: "left" as Direction,
    },
  ];

  return (
    <section
      className="relative py-20 md:py-32 bg-brand-navy rounded-[20px] md:rounded-[40px] lg:rounded-[60px]"
      id="solutions"
      aria-labelledby="solutions-heading"
    >
      <main className="container mx-auto px-4">
        <header className="flex flex-col text-center md:text-left md:flex-row gap-8 mb-16 items-end justify-between">
          <SectionTransition direction="left">
            <h2 id="solutions-heading" className="section-heading text-brand-offwhite m-0">
              {t("heading")}
            </h2>
          </SectionTransition>
          <SectionTransition direction="right">
            <p className="text-brand-lavender text-lg">{t("description")}</p>
          </SectionTransition>
        </header>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8" aria-label="Our solutions">
          {standardCards.map(({ title, description, animationRef, direction }, index) => (
            <SectionTransition direction={direction} key={index}>
              <li>
                <article
                  className="relative bg-slate-900 rounded-lg p-6 shadow-lg border border-brand-offwhite/15 backdrop-blur-sm flex flex-col md:flex-row items-center md:items-start w-full max-w-md mx-auto md:max-w-none"
                  aria-labelledby={`solution-title-${index}`}
                >
                  <section className="md:w-1/2 text-center md:text-left">
                    <h3 id={`solution-title-${index}`} className="text-2xl font-medium text-brand-lavender mb-2">
                      {title}
                    </h3>
                    <p className="text-brand-lavender/80">{description}</p>
                  </section>
                  <figure className="md:w-1/2 flex justify-center">
                    <div
                      ref={animationRef}
                      className="w-[200px] h-[200px] md:w-[250px] md:h-[250px]"
                      aria-hidden="true"
                    ></div>
                  </figure>
                </article>
              </li>
            </SectionTransition>
          ))}

          <SectionTransition direction="right">
            <li>
              <IntegrationCard />
            </li>
          </SectionTransition>
        </ul>
      </main>
    </section>
  );
};

export default Solutions;
