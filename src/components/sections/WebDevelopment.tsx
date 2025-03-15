"use client";

import { SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiFastify, SiExpress, SiPrisma, SiDocker } from "react-icons/si";
import SectionTransition from "@/components/ui/SectionTransition";
import PatternBackground from "@/components/ui/PatternBackground";

const WebDevelopment = () => {
  return (
    <section className="relative py-16 md:py-24 bg-brand-offwhite overflow-hidden">
      <PatternBackground variant="circuit" opacity={0.2} />
      <div className="container mx-auto px-4">
        <SectionTransition direction="up">
          <div className="text-center mb-12">
            <h2 className="section-heading text-gradient">
              Web Development
            </h2>
            <p className="text-base text-brand-navy/60 max-w-2xl mx-auto">
              Fast, scalable and personalized digital experiences. We develop innovative solutions to transform your online presence and boost your business.
            </p>
          </div>
        </SectionTransition>

        <div className="flex flex-col space-y-20">
          {/* Bloco Front-end */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
            {/* Texto */}
            <SectionTransition direction="left">
              <div className="flex flex-col justify-between gap-10 items-end text-right">
                <h3 className="text-2xl font-medium text-brand-navy mb-2">
                  We craft high-performance websites, applications, and platforms, ensuring security, efficiency, and an exceptional user experience.
                </h3>
                <div className="flex space-x-4 mt-4">
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 opacity-70 transition-all duration-200 ease-out hover:opacity-80 hover:scale-95">
                      <SiNextdotjs className="text-brand-navy w-6 h-6" />
                      <p>Next.js</p>
                    </div>
                    <div className="flex items-center gap-2 opacity-70 transition-all duration-200 ease-out hover:opacity-80 hover:scale-95">
                      <SiTypescript className="text-brand-navy w-6 h-6" />
                      <p>TypeScript</p>
                    </div>
                    <div className="flex items-center gap-2 opacity-70 transition-all duration-200 ease-out hover:opacity-80 hover:scale-95">
                      <SiReact className="text-brand-navy w-6 h-6" />
                      <p>React</p>
                    </div>
                    <div className="flex items-center gap-2 opacity-70 transition-all duration-200 ease-out hover:opacity-80 hover:scale-95">
                      <SiTailwindcss className="text-brand-navy w-6 h-6" />
                      <p>Tailwind CSS</p>
                    </div>
                  </div>
                </div>
              </div>
            </SectionTransition>

            {/* Imagem ou vídeo */}
            <SectionTransition direction="right">
              <div className="flex justify-center">
                <div className="relative w-fit max-w-80 rounded-lg overflow-hidden">
                  <video
                    src="https://videos.pexels.com/video-files/5495890/5495890-hd_1080_1920_30fps.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="rounded-lg shadow-md border border-white/30 backdrop-blur-sm"
                  />
                  <div className="absolute inset-0 bg-gradient-to-bl from-brand-purpleDeep/60 via-transparent to-brand-purpleDeep/60"></div>
                </div>
              </div>
            </SectionTransition>
          </div>

          {/* Bloco Back-end */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
            {/* Imagem ou vídeo */}
            <SectionTransition direction="left">
              <div className="flex justify-center">
                <div className="relative w-fit max-w-80 rounded-lg overflow-hidden">
                  <video
                    src="https://videos.pexels.com/video-files/6331337/6331337-hd_1080_1920_30fps.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="rounded-lg shadow-md border border-white/30 backdrop-blur-sm"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-purpleDeep/60 via-transparent to-brand-purpleDeep/60"></div>
                </div>
              </div>
            </SectionTransition>

            {/* Texto */}
            <SectionTransition direction="right">
              <div className="flex flex-col justify-between gap-10 items-start">
                <h3 className="text-2xl font-medium text-brand-navy mb-2">
                  We design robust APIs that seamlessly integrate with third-party services, ensuring security and scalability.
                </h3>
                <div className="flex space-x-4 mt-4">
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 opacity-70 transition-all duration-200 ease-out hover:opacity-80 hover:scale-95">
                      <SiFastify className="text-brand-navy w-8 h-8" />
                      <p>Fastify</p>
                    </div>
                    <div className="flex items-center gap-2 opacity-70 transition-all duration-200 ease-out hover:opacity-80 hover:scale-95">
                      <SiExpress className="text-brand-navy w-8 h-8" />
                      <p>Express</p>
                    </div>
                    <div className="flex items-center gap-2 opacity-70 transition-all duration-200 ease-out hover:opacity-80 hover:scale-95">
                      <SiPrisma className="text-brand-navy w-8 h-8" />
                      <p>Prisma</p>
                    </div>
                    <div className="flex items-center gap-2 opacity-70 transition-all duration-200 ease-out hover:opacity-80 hover:scale-95">
                      <SiDocker className="text-brand-navy w-8 h-8" />
                      <p>Docker</p>
                    </div>
                  </div>
                </div>

              </div>
            </SectionTransition>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDevelopment;
