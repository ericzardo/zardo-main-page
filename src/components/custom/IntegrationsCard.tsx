"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

gsap.registerPlugin();

const integrations = [
  { name: "Google Sheets", icon: "/integration-logos/google-sheets.webp" },
  { name: "Notion", icon: "/integration-logos/notion.webp" },
  { name: "Google Analytics", icon: "/integration-logos/google-analytics.webp" },
  { name: "Facebook", icon: "/integration-logos/facebook.webp" },
  { name: "Google Calendar", icon: "/integration-logos/google-calendar.webp" },
  { name: "Microsoft Excel", icon: "/integration-logos/excel.webp" },
  { name: "Calendly", icon: "/integration-logos/calendly.webp" },
  { name: "Stripe", icon: "/integration-logos/stripe.webp" },
  { name: "Whatsapp", icon: "/integration-logos/whatsapp.webp" },
  { name: "Airtable", icon: "/integration-logos/airtable.webp" },
];

const IntegrationsCard = () => {
  const marqueeTopRef = useRef<HTMLDivElement | null>(null);
  const marqueeBottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (marqueeTopRef.current) {
      gsap.to(marqueeTopRef.current, {
        x: "-50%",
        duration: 20,
        repeat: -1,
        ease: "linear",
      });
    }
    if (marqueeBottomRef.current) {
      gsap.to(marqueeBottomRef.current, {
        x: "50%",
        duration: 40,
        repeat: -1,
        ease: "linear",
      });
    }
  }, []);

  // Dividindo as logos em duas metades
  const mid = Math.ceil(integrations.length / 2);
  const integrationsTop = integrations.slice(0, mid);
  const integrationsBottom = integrations.slice(mid);

  return (
    <div className="relative bg-slate-900 rounded-xl p-6 shadow-lg border border-brand-offwhite/15 backdrop-blur-sm flex flex-col justify-between w-full max-w-md mx-auto md:max-w-none h-full overflow-hidden">
      <div className="text-center md:text-left mb-6 z-10 relative">
        <h3 className="text-2xl font-semibold text-brand-lavender mb-2">API Integrations & Automations</h3>
        <p className="text-brand-lavender/80">
          Seamlessly connect services and automate workflows with custom API integrations.
        </p>
      </div>

      {/* Marquee */}
      <div className="relative w-full flex flex-col items-center z-10">
        {/* Blur fixo nas laterais */}
        <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-slate-900 to-transparent z-10" />
        <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-slate-900 to-transparent z-10" />

        {/* Linha superior (marquee para a direita) */}
        <div className="w-full flex items-center overflow-hidden">
          <div ref={marqueeTopRef} className="flex space-x-8">
            {integrationsTop.concat(integrationsTop).map((integration, index) => (
              <Image
                key={index}
                src={integration.icon}
                alt={`${integration.name}"s logo`}
                width={150}
                height={40}
                className="object-contain max-h-[40px] opacity-70 hover:opacity-100 transition-opacity duration-300"
                loading="lazy"
              />
            ))}
          </div>
        </div>

        {/* Linha inferior (marquee para a esquerda) */}
        <div className="w-full flex items-center overflow-hidden mt-4">
          <div ref={marqueeBottomRef} className="flex space-x-8">
            {integrationsBottom.concat(integrationsBottom).map((integration, index) => (
              <Image
                key={index}
                src={integration.icon}
                alt={`${integration.name}"s logo`}
                width={150}
                height={40}
                className="object-contain max-h-[40px] opacity-70 hover:opacity-100 transition-opacity duration-300"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegrationsCard;
