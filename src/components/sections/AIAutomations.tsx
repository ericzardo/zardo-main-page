"use client";

import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import Image from "next/image";
import { gsap } from "gsap";
import SectionTransition from "@/components/ui/SectionTransition";
import PatternBackground from "@/components/ui/PatternBackground";

gsap.registerPlugin();

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
  const chatbotAnimationContainer = useRef(null);
  const dashboardAnimationContainer = useRef(null);
  const workflowAnimationContainer = useRef(null);
  const machineLearningAnimationContainer = useRef(null);
  const marqueeRef = useRef(null);

  // Animação do chatbot
  useEffect(() => {
    if (chatbotAnimationContainer.current) {
      const animation = lottie.loadAnimation({
        container: chatbotAnimationContainer.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "/animations/chatbot.json",
      });

      return () => animation.destroy();
    }
  }, []);

  // Animação do workflow
  useEffect(() => {
    if (workflowAnimationContainer.current) {
      const animation = lottie.loadAnimation({
        container: workflowAnimationContainer.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "/animations/workflow.json",
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      });

      animation.setSpeed(0.7);

      gsap.to(workflowAnimationContainer.current, {
        scale: 1.5,
        y: -17,
        duration: 0.3,
        ease: "power2.out",
      });

      return () => animation.destroy();
    }
  }, []);

    // Animação da machine learning
    useEffect(() => {
      if (machineLearningAnimationContainer.current) {
        const animation = lottie.loadAnimation({
          container: machineLearningAnimationContainer.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          path: "/animations/machine-learn.json",
        });

        gsap.to(machineLearningAnimationContainer.current, {
          scale: 2,
          duration: 0.3,
          ease: "power2.out",
        });
  
        return () => animation.destroy();
      }
    }, []);

  // Animação do dashboard
  useEffect(() => {
    if (dashboardAnimationContainer.current) {
      const animation = lottie.loadAnimation({
        container: dashboardAnimationContainer.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "/animations/dashboard.json",
      });

      gsap.to(dashboardAnimationContainer.current, {
        scale: 1.2,
        x: -20,
        duration: 0.3,
        ease: "power2.out",
      });

      return () => animation.destroy();
    }
  }, []);

  // Animação infinita das logos
  useEffect(() => {
    if (marqueeRef.current) {
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        duration: 20,
        repeat: -1,
        ease: "linear",
      });

      // Expandindo suavemente o tamanho da área animada sem usar ScrollTrigger
      gsap.to(marqueeRef.current, {
        scaleX: 1.2, // Expansão natural da animação
        duration: 2,
        ease: "power2.out",
      });
    }
  }, []);

  return (
    <section className="relative py-16 md:py-24 bg-brand-offwhite overflow-hidden" id="ai-automations">
      <PatternBackground variant="circuit" opacity={0.2} />
      <div className="container mx-auto px-4">
        <SectionTransition direction="up">
          <div className="text-center mb-12">
            <span className="inline-block mb-3 px-3 py-1 bg-brand-lavender/30 backdrop-blur-sm rounded-full text-sm font-medium text-brand-purpleDark mx-auto">
              AI & Automations
            </span>
            <h2 className="section-heading text-gradient">
              Automate tasks, enhance workflows, and optimize productivity with AI-driven automation solutions.
            </h2>
          </div>
        </SectionTransition>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SectionTransition direction="left">
            <div className="relative bg-brand-lavender backdrop-blur-sm rounded-xl p-6 shadow-md flex flex-col md:flex-row items-center md:items-start w-full max-w-md mx-auto md:max-w-none">
              <div className="md:w-1/2 text-center md:text-left">
                <h3 className="text-2xl font-medium text-brand-navy mb-2">AI-Driven Assistance</h3>
                <p className="text-brand-navy/70 mb-8">
                  Experience seamless interaction with AI—quick, automated solutions with a human touch.
                </p>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div ref={chatbotAnimationContainer} className="w-[200px] h-[200px] md:w-[250px] md:h-[250px]"></div>
              </div>
            </div>
          </SectionTransition>

          <SectionTransition direction="right">
            <div className="relative bg-brand-lavender backdrop-blur-sm rounded-xl p-6 shadow-md flex flex-col md:flex-row items-center md:items-start w-full max-w-md mx-auto md:max-w-none">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-medium text-brand-navy mb-2">AI-Powered Personalization</h3>
                <p className="text-brand-navy/70">Create personalized, automated experiences that adjust to user behavior in real time.</p>
              </div>
              <div className="flex justify-center">
                <div ref={machineLearningAnimationContainer} className="w-[250px] h-[200px] md:w-[350px] md:h-[250px]"></div>
              </div>
            </div>
          </SectionTransition>

          <SectionTransition direction="left">
            <div className="relative bg-brand-lavender backdrop-blur-sm rounded-xl p-6 shadow-md flex flex-col md:flex-row items-center md:items-start w-full max-w-md mx-auto md:max-w-none">
              <div className="md:w-1/2 text-center md:text-left">
                <h3 className="text-2xl font-medium text-brand-navy mb-2">AI-Powered Insights</h3>
                <p className="text-brand-navy/70">Turn data into smart decisions with advanced analytics.</p>
              </div>
              <div className="md:w-2/3 flex justify-center">
                <div ref={dashboardAnimationContainer} className="w-[250px] h-[200px] md:w-[350px] md:h-[250px]"></div>
              </div>
            </div>
          </SectionTransition>

          <SectionTransition direction="right">
            <div className="relative bg-brand-lavender backdrop-blur-sm rounded-xl p-6 shadow-md flex flex-col md:flex-row items-center md:items-start w-full max-w-md mx-auto md:max-w-none">
              <div className="md:w-1/2 text-center md:text-left">
                <h3 className="text-2xl font-medium text-brand-navy mb-2">AI-Powered Automation</h3>
                <p className="text-brand-navy/70 mb-8">
                Integrate apps, automate processes, and keep everything in sync—effortlessly.
                </p>
              </div>
              <div className="md:w-1/2 flex justify-center overflow-hidden">
                <div ref={workflowAnimationContainer} className="max-w-[200px] md:max-w-[250px] object-fill object-center"></div>
              </div>
            </div>
          </SectionTransition>
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
                  width={150} // Garantindo tamanho fixo proporcional
                  height={40} // Mantendo proporção
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
