"use client";

import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import Image from "next/image";
import { gsap } from "gsap";
import SectionTransition from "@/components/ui/SectionTransition";
import PatternBackground from "@/components/ui/PatternBackground";

// Registro do plugin GSAP
gsap.registerPlugin();

// Lista de integrações com ícones e nomes
const integrations = [
  { name: "Google Sheets", icon: "/integration-logos/google-sheets.webp" },
  { name: "Airtable", icon: "/integration-logos/airtable.webp" },
  { name: "Notion", icon: "/integration-logos/notion.webp" },
  { name: "Google Analytics", icon: "/integration-logos/google-analytics.webp" },
  { name: "ClickUp", icon: "/integration-logos/clickup.webp" },
  { name: "Facebook", icon: "/integration-logos/facebook.webp" },
  { name: "Google Calendar", icon: "/integration-logos/google-calendar.webp" },
  { name: "Microsoft Excel", icon: "/integration-logos/excel.webp" },
  { name: "Calendly", icon: "/integration-logos/calendly.webp" },
  { name: "Stripe", icon: "/integration-logos/stripe.webp" },
  { name: "Whatsapp", icon: "/integration-logos/whatsapp.webp" },
  { name: "Hubspot", icon: "/integration-logos/hubspot.webp" },
  { name: "Google Drive", icon: "/integration-logos/google-drive.webp" },
  { name: "Microsoft Outlook", icon: "/integration-logos/outlook.webp" },
  { name: "Pipedrive", icon: "/integration-logos/pipedrive.webp" },
  { name: "Shopify", icon: "/integration-logos/shopify.webp" },
  { name: "Google Gmail", icon: "/integration-logos/google-gmail.webp" },
  { name: "Trello", icon: "/integration-logos/trello.webp" },
  { name: "X/Twitter", icon: "/integration-logos/twitter-x.webp" },
  { name: "Slack", icon: "/integration-logos/slack.webp" },
  { name: "Telegram", icon: "/integration-logos/telegram.webp" },
];

const AIAutomations = () => {
  // Tipagem para referências de animação (useRef) - Elementos HTML podem ser nulos inicialmente
  const chatbotAnimationContainer = useRef<HTMLDivElement | null>(null);
  const dashboardAnimationContainer = useRef<HTMLDivElement | null>(null);
  const workflowAnimationContainer = useRef<HTMLDivElement | null>(null);
  const machineLearningAnimationContainer = useRef<HTMLDivElement | null>(null);
  const marqueeRef = useRef<HTMLDivElement | null>(null);

  // Função para carregar animações Lottie
  const loadAnimation = (
    container: HTMLDivElement | null,
    path: string,
    settings: { scale?: number; speed?: number; x?: number; y?: number } = {}
  ) => {
    if (!container) return;

    const animation = lottie.loadAnimation({
      container,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path,
    });

    // Aplicar configurações de animação
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

    return () => animation.destroy();
  };

  // Carregar animações de forma eficiente
  useEffect(() => {
    if (chatbotAnimationContainer.current) {
      loadAnimation(chatbotAnimationContainer.current, "/animations/chatbot.json");
    }

    if (workflowAnimationContainer.current) {
      loadAnimation(workflowAnimationContainer.current, "/animations/workflow.json", {
        scale: 1.5,
        speed: 0.7,
        y: -17,
      });
    }

    if (machineLearningAnimationContainer.current) {
      loadAnimation(machineLearningAnimationContainer.current, "/animations/machine-learn.json", { scale: 2 });
    }

    if (dashboardAnimationContainer.current) {
      loadAnimation(dashboardAnimationContainer.current, "/animations/dashboard.json", { scale: 1.2, x: -20 });
    }
  }, []);

  // Animação das logos infinitas
  useEffect(() => {
    if (marqueeRef.current) {
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        duration: 20,
        repeat: -1,
        ease: "linear",
      });

      gsap.to(marqueeRef.current, {
        scaleX: 1.2,
        duration: 2,
        ease: "power2.out",
      });
    }
  }, []);

  // Tipagem para direction
  type Direction = "left" | "right" | "up" | "scale";

  return (
    <section className="relative py-16 md:py-24 bg-brand-offwhite overflow-hidden" id="ai-automations">
      <PatternBackground variant="circuit" opacity={0.2} />
      <div className="container mx-auto px-4">
        <SectionTransition direction="up">
          <div className="text-center mb-12">
            <h2 className="section-heading text-gradient">AI & Automations</h2>
            <p className="text-base text-brand-navy/60 max-w-2xl mx-auto">
              Intelligent automation for maximum efficiency. We optimize processes, eliminate repetitive tasks, and boost your business with customized AI solutions.
            </p>
          </div>
        </SectionTransition>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: "AI-Driven Assistance", description: "Experience seamless interaction with AI—quick, automated solutions with a human touch.", animationRef: chatbotAnimationContainer, direction: 'left' as Direction },
            { title: "AI-Powered Personalization", description: "Create personalized, automated experiences that adjust to user behavior in real time.", animationRef: machineLearningAnimationContainer, direction: 'right' as Direction },
            { title: "AI-Powered Insights", description: "Turn data into smart decisions with advanced analytics.", animationRef: dashboardAnimationContainer, direction: 'left' as Direction },
            { title: "AI-Powered Automation", description: "Integrate apps, automate processes, and keep everything in sync—effortlessly.", animationRef: workflowAnimationContainer, direction: 'right' as Direction },
          ].map(({ title, description, animationRef, direction }, index) => (
            <SectionTransition direction={direction} key={index}>
              <div className="relative bg-white/50 rounded-lg p-6 shadow-sm border border-white/30 backdrop-blur-sm flex flex-col md:flex-row items-center md:items-start w-full max-w-md mx-auto md:max-w-none">
                <div className="md:w-1/2 text-center md:text-left">
                  <h3 className="text-2xl font-medium text-brand-navy mb-2">{title}</h3>
                  <p className="text-brand-navy/70 mb-8">{description}</p>
                </div>
                <div className="md:w-1/2 flex justify-center">
                  <div ref={animationRef} className="w-[200px] h-[200px] md:w-[250px] md:h-[250px]"></div>
                </div>
              </div>
            </SectionTransition>
          ))}
        </div>

        <PatternBackground variant="circuit" opacity={0.2} />
        <div className="text-center mt-20 my-6">
          <SectionTransition delay={200}>
            <h3 className="text-2xl font-medium text-brand-purpleDeep mb-2">One AI, Endless Possibilities</h3>
          </SectionTransition>
        </div>

        {/* Faixa de logos centralizada sem esticar */}
        <div className="relative overflow-hidden w-full max-w-6xl mx-auto">
          <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-brand-offwhite to-transparent z-10" />
          <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-brand-offwhite to-transparent z-10" />
          <div className="w-full flex items-center">
            <div ref={marqueeRef} className="flex space-x-8">
              {integrations.concat(integrations).map((integration, index) => (
                <Image
                  key={index}
                  src={integration.icon}
                  alt={integration.name}
                  width={150}
                  height={40}
                  className="object-contain max-h-[40px] opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAutomations;
