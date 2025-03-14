"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1;
    }

    const items = document.querySelectorAll(".list-item");
    
    items.forEach((item, index) => {
      const listItem = item as HTMLElement;

      
      const distance = Math.abs(index - 0);

      if (distance === 0) {
        listItem.style.opacity = "1";
      } else if (distance === 1) {
        listItem.style.opacity = "0.75";
      } else if (distance === 2) {
        listItem.style.opacity = "0.5";
      } else {
        listItem.style.opacity = "0.25";
      }
    });

    gsap.to(items, {
      scrollTrigger: {
        trigger: ".scroll-trigger-section",
        start: "5% top",
        end: "bottom top",
        scrub: 0.5,
        markers: false,
        pin: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const totalItems = items.length;
          const currentItemIndex = Math.floor(progress * totalItems);

          items.forEach((item, index) => {
            const distance = Math.abs(index - currentItemIndex);

            const listItem = item as HTMLElement;

            if (distance === 0) {
              listItem.style.opacity = "1";
              listItem.classList.add("!scale-110");
            } else if (distance === 1) {
              listItem.style.opacity = "0.75";
              listItem.classList.remove("!scale-110");
            } else if (distance === 2) {
              listItem.style.opacity = "0.5";
              listItem.classList.remove("!scale-110");
            } else if (distance === 3) {
              listItem.style.opacity = "0.25";
              listItem.classList.remove("!scale-110");
            } else {
              listItem.style.opacity = "0.25";
              listItem.classList.remove("!scale-110");
            }
          });

          if (progress === 1) {
            const lastItem = items[items.length - 1] as HTMLElement;
            lastItem.style.opacity = "1";
          }
        },
      },
    });
  }, []);

  return (
    <section className="scroll-trigger-section relative min-h-screen flex justify-center items-center rounded-[20px] md:rounded-[40px] lg:rounded-[60px] overflow-hidden">
    {/* Video com fundo */}
    <video
      ref={videoRef}
      className="absolute top-0 left-0 w-full h-full object-cover"
      autoPlay
      loop
      muted
    >
      <source src="https://videos.pexels.com/video-files/10915129/10915129-hd_3840_2160_30fps.mp4" type="video/mp4" />
    </video>

    {/* Camada de cor navy sobre o vídeo */}
    <div className="absolute top-0 left-0 w-full h-full bg-brand-navy opacity-85 z-10"></div> {/* Camada escurecendo o vídeo */}

    {/* Conteúdo da seção */}
    <div className="content-wrapper relative w-full flex flex-col justify-center items-center gap-6 py-16 md:py-28 lg:py-36 z-20">
      <ul className="scroll-trigger-list flex flex-col items-center gap-12">
        <li className="list-item text-4xl md:text-6xl lg:text-8xl text-brand-lavender opacity-40 transition-all ease-out transform scale-90 cursor-pointer">Web Development</li>
        <li className="list-item text-4xl md:text-6xl lg:text-8xl text-brand-lavender opacity-40 transition-all ease-out transform scale-90 cursor-pointer">Web Applications</li>
        <li className="list-item text-4xl md:text-6xl lg:text-8xl text-brand-lavender opacity-40 transition-all ease-out transform scale-90 cursor-pointer">AI Automation</li>
        <li className="list-item text-4xl md:text-6xl lg:text-8xl text-brand-lavender opacity-40 transition-all ease-out transform scale-90 cursor-pointer">API Integrations</li>
        <li className="list-item text-4xl md:text-6xl lg:text-8xl text-brand-lavender opacity-40 transition-all ease-out transform scale-90 cursor-pointer">Business Workflows</li>
      </ul>
    </div>
  </section>
  );
};

export default Services;
