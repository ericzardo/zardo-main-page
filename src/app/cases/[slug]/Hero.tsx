"use client";

import { useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import { useTranslation } from "react-i18next";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { formatDate } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const { slug } = useParams();
  const { t, i18n } = useTranslation(`cases/${slug}`);

  // Obtemos os dados diretamente do arquivo de tradução
  const title = t("hero.title");
  const description: string[] = t("hero.description", { returnObjects: true }) as string[];
  const tags: string[] = t("hero.tags", { returnObjects: true }) as string[];
  const note = i18n.exists(`cases/${slug}.hero.note`) ? t("hero.note") : null;
  const banner: string = t("hero.banner");
  const date: { from: string; to: string } = t("hero.date", { returnObjects: true }) as { from: string, to: string};

  useEffect(() => {
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        scale: 1.08,
        ease: "power1.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5,
        },
      });
    }
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-44 pb-24 bg-brand-navy"
      id="hero"
    >
      <div className="container mx-auto px-4 flex flex-col justify-start gap-10">
        <div className="flex justify-between lg:flex-row flex-col gap-8">
          <div className="flex flex-col gap-8 lg:max-w-3xl">
            <h1 className="section-heading text-brand-lavender mb-0">{title}</h1>
            {description.map((line, i) => (
              <p key={i} className="text-lg text-brand-lavender/85">{line}</p>
            ))}
            <div className="w-full flex gap-2 flex-wrap">
              {tags.map((tag, index) => (
                <div key={index} className="px-2 py-1 border border-brand-lavender text-brand-lavender rounded">
                  <p className="text-xs">{tag}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-end gap-6 lg:w-1/3 w-full">
            <div className="flex flex-col md:flex-row flex-wrap gap-4 w-full">
              <div className="flex flex-col flex-1 gap-2 p-4 rounded-lg bg-brand-navy/50 border border-brand-lavender/10">
                <p className="text-sm text-brand-lavender/85">{t("hero.durationLabel")}</p>
                <p className="text-brand-lavender font-medium">
                  {t("hero.duration")} {t("hero.durationUnit")}
                </p>
              </div>
              <div className="flex flex-col md:flex-1 gap-2 p-4 rounded-lg bg-brand-navy/50 border border-brand-lavender/10">
                <p className="text-sm text-brand-lavender/85">{t("hero.dateLabel")}</p>
                <p className="text-brand-lavender font-medium">
                  {formatDate(date.from)} - {formatDate(date.to)}
                </p>
              </div>
            </div>
            {note && (
              <div className="flex flex-col md:flex-1 gap-2 p-4 rounded-lg bg-brand-navy/50 border border-brand-lavender/10">
                <p className="text-sm text-brand-lavender/85">{t("hero.noteLabel")}</p>
                <p className="text-brand-lavender font-medium">{note}</p>
              </div>
            )}
          </div>
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-lg will-change-transform">
          <Image
            ref={imageRef}
            src={banner}
            alt={`${title} - Project showcase banner featuring ${tags.join(", ")}.`}
            className="object-cover w-full h-full transition-transform will-change-transform"
            loading="lazy"
            width={2000}
            height={1000}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
