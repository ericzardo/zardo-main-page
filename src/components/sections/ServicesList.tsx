"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const { t } = useTranslation("services");
  const containerRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const serviceKeys = ["web_dev", "web_apps", "ai_automation", "api_integrations", "business_workflows"];

  useLayoutEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1;
    }

    const items = gsap.utils.toArray(".list-item") as HTMLElement[];

    gsap.set(items, {
      opacity: 0.25,
      scale: 0.9,
    });

    gsap.set(items[0], {
      opacity: 1,
      scale: 1.1,
    });

    const scrollPerItem = 15;
    const scrollDuration = scrollPerItem * items.length;

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "-35px top",
      end: `+=${scrollDuration}%`,
      pin: true,
      scrub: 0.1,
      onUpdate: (self) => {
        const progress = self.progress;
        const totalItems = items.length;
        const currentIndex = Math.floor(progress * (totalItems - 1));

        items.forEach((item, index) => {
          const distance = Math.abs(index - currentIndex);
          const opacity = distance === 0 ? 1 : distance === 1 ? 0.75 : distance === 2 ? 0.5 : 0.25;
          const scale = distance === 0 ? 1.1 : 0.9;

          gsap.to(item, {
            opacity,
            scale,
            duration: 0.1,
            ease: "none",
          });
        });
      },
    });

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex justify-center items-center rounded-[20px] md:rounded-[40px] lg:rounded-[60px] overflow-hidden bg-brand-navy"
    >
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source
            src="https://videos.pexels.com/video-files/10915129/10915129-hd_3840_2160_30fps.mp4"
            type="video/mp4"
          />
        </video>

        <div className="absolute top-0 left-0 w-full h-full bg-brand-navy opacity-85"></div>
      </div>

      <div className="relative w-full flex flex-col justify-center items-center gap-6 py-16 md:py-28 lg:py-36 z-20">
        <ul ref={listRef} className="flex flex-col items-center gap-12">
          {serviceKeys.map((key) => (
            <li
              key={key}
              className="list-item text-4xl md:text-6xl lg:text-8xl text-brand-lavender transition-all duration-150 ease-linear cursor-pointer"
            >
              {t(`items.${key}`)}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services;
