"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import SectionTransition from "@/components/ui/SectionTransition";
import PatternBackground from "@/components/ui/PatternBackground";

const Portfolio = () => {
  return (
    <section className="relative py-16 md:py-24 bg-brand-offwhite overflow-hidden" id="projects">
      <PatternBackground variant="circuit" opacity={0.2} />
      <div className="container mx-auto px-4">
        <SectionTransition direction="up">
          <div className="text-center mb-12">
            <h2 className="section-heading text-gradient">Success Stories</h2>
            <p className="text-base text-brand-navy/60 max-w-2xl mx-auto">
              Explore our portfolio of exceptional web development and custom automation workflows that drive results for businesses around the world.
            </p>
          </div>
        </SectionTransition>

        {/* Flex container para os cards */}
        <div className="flex flex-wrap justify-center gap-12">
          
          {/* Card */}
          <SectionTransition direction="up" delay={100}>
            <div className="flex flex-col items-center max-w-[600px] w-full gap-4">
              <div className="relative w-full aspect-square rounded-lg overflow-hidden group flex-shrink-0 shadow-md">
                <Image
                  src="/projects/chatt.on.png"
                  alt="chatt.on project banner"
                  fill
                  className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
                {/* Overlay com informações no hover */}
                <div className="absolute inset-0 bg-brand-navy bg-opacity-65 opacity-0 flex flex-col justify-between items-start p-10 group-hover:opacity-100 transition-opacity duration-200 ease-out">
                  <div className="w-full flex items-center justify-between text-brand-lavender">
                    <h3 className="text-2xl font-semibold">chatt.on</h3>
                    <div className="text-sm flex gap-2 items-center cursor-pointer hover:scale-90 hover:text-brand-offwhite transition-all duration-200 ease-out">
                      <p>Read Case</p>
                      <ArrowRight className="size-6" />
                    </div>
                  </div>

                  <div className="w-full flex gap-2">
                    <div className="px-2 py-1 border border-brand-lavender text-brand-lavender rounded">
                      <p className="text-xs">Web Applications</p>
                    </div>
                    <div className="px-2 py-1 border border-brand-lavender text-brand-lavender rounded">
                      <p className="text-xs">API Integration</p>
                    </div>
                    <div className="px-2 py-1 border border-brand-lavender text-brand-lavender rounded">
                      <p className="text-xs">UX/UI</p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-sm text-brand-navy/80">
                <span className="text-base text-brand-purpleDeep">chatt.on /</span> A real-time chat platform with support for group discussions, private messaging, and administrative management of permissions and plans.
              </p>
            </div>
          </SectionTransition>

          {/* Card */}
          <SectionTransition direction="up" delay={200}>
            <div className="flex flex-col items-center max-w-[600px] w-full gap-4">
              <div className="relative w-full aspect-square rounded-lg overflow-hidden group flex-shrink-0 shadow-md">
                <Image
                  src="/projects/chatt.on.png"
                  alt="chatt.on project banner"
                  fill
                  className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
                {/* Overlay com informações no hover */}
                <div className="absolute inset-0 bg-brand-navy bg-opacity-65 opacity-0 flex flex-col justify-between items-start p-10 group-hover:opacity-100 transition-opacity duration-200 ease-out">
                  <div className="w-full flex items-center justify-between text-brand-lavender">
                    <h3 className="text-2xl font-semibold">chatt.on</h3>
                    <div className="text-sm flex gap-2 items-center cursor-pointer hover:scale-90 hover:text-brand-offwhite transition-all duration-200 ease-out">
                      <p>Read Case</p>
                      <ArrowRight className="size-6" />
                    </div>
                  </div>

                  <div className="w-full flex gap-2">
                    <div className="px-2 py-1 border border-brand-lavender text-brand-lavender rounded">
                      <p className="text-xs">Web Applications</p>
                    </div>
                    <div className="px-2 py-1 border border-brand-lavender text-brand-lavender rounded">
                      <p className="text-xs">API Integration</p>
                    </div>
                    <div className="px-2 py-1 border border-brand-lavender text-brand-lavender rounded">
                      <p className="text-xs">UX/UI</p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-sm text-brand-navy/80">
                <span className="text-base text-brand-purpleDeep">chatt.on /</span> A real-time chat platform with support for group discussions, private messaging, and administrative management of permissions and plans.
              </p>
            </div>
          </SectionTransition>

          {/* Card */}
          <SectionTransition direction="up" delay={300}>
            <div className="flex flex-col items-center max-w-[600px] w-full gap-4">
              <div className="relative w-full aspect-square rounded-lg overflow-hidden group flex-shrink-0 shadow-md">
                <Image
                  src="/projects/chatt.on.png"
                  alt="chatt.on project banner"
                  fill
                  className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
                {/* Overlay com informações no hover */}
                <div className="absolute inset-0 bg-brand-navy bg-opacity-65 opacity-0 flex flex-col justify-between items-start p-10 group-hover:opacity-100 transition-opacity duration-200 ease-out">
                  <div className="w-full flex items-center justify-between text-brand-lavender">
                    <h3 className="text-2xl font-semibold">chatt.on</h3>
                    <div className="text-sm flex gap-2 items-center cursor-pointer hover:scale-90 hover:text-brand-offwhite transition-all duration-200 ease-out">
                      <p>Read Case</p>
                      <ArrowRight className="size-6" />
                    </div>
                  </div>

                  <div className="w-full flex gap-2">
                    <div className="px-2 py-1 border border-brand-lavender text-brand-lavender rounded">
                      <p className="text-xs">Web Applications</p>
                    </div>
                    <div className="px-2 py-1 border border-brand-lavender text-brand-lavender rounded">
                      <p className="text-xs">API Integration</p>
                    </div>
                    <div className="px-2 py-1 border border-brand-lavender text-brand-lavender rounded">
                      <p className="text-xs">UX/UI</p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-sm text-brand-navy/80">
                <span className="text-base text-brand-purpleDeep">chatt.on /</span> A real-time chat platform with support for group discussions, private messaging, and administrative management of permissions and plans.
              </p>
            </div>
          </SectionTransition>
          
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
