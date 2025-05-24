"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import { useTranslation } from 'react-i18next';
import { switchLanguage } from '@/lib/translate/service/switch';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Header, Footer, Slogan } from "@zardo/ui-kit/layout";
import { LoadingScreen } from "@zardo/ui-kit/feedback";
import { Linkedin, Instagram } from "lucide-react";

import Contact from "@/components/sections/Contact";
import Hero from "./Hero";
import Challange from "./Challange";
import Solution from "./Solution";
import Features from "./Features";
import { useScrollToSection } from "@/hooks/useScrollToSection";

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  instagram: <Instagram strokeWidth={2} className="size-6 text-white/60" />,
  linkedin: <Linkedin strokeWidth={2} className="size-6 text-white/60" />,
};

const CasePage = () => {
  const router = useRouter();
  const { slug } = useParams<{ slug: string }>();
  const { t: tHome, i18n } = useTranslation('home');
  const { t: tCase, ready } = useTranslation(`cases/${slug}`);
  const imageOneRef = useRef<HTMLImageElement>(null);
  const scrollToSection = useScrollToSection();

  const NAV_ITEMS = tHome('nav', { returnObjects: true }) as { label: string; href: string }[];
  const rawSocial = tHome('social', { returnObjects: true }) as { platform: keyof typeof iconMap; url: string; label: string }[];
  const SOCIAL_LINKS = rawSocial.map((item) => ({
    ...item,
    icon: iconMap[item.platform],
  }));

  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);

  useEffect(() => {
    if (imageOneRef.current) {
      gsap.to(imageOneRef.current, {
        scale: 1.08,
        ease: "power1.out",
        scrollTrigger: {
          trigger: imageOneRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5,
        },
      });
    }
  }, []);

  useEffect(() => {
    const storedLang = localStorage.getItem("preferredLanguage");
  
    if (storedLang && storedLang !== i18n.language) {
      switchLanguage(storedLang as "en" | "pt");
    }
  }, [i18n.language]);

  const caseTitle = tCase('slug', { defaultValue: "" });

  if (!isClient || !ready) return <LoadingScreen />;
  if (!caseTitle) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Case não encontrado.</p>
      </div>
    );
  }

  const images = tCase('gallery.images', { returnObjects: true }) as string[];
  const videos = tCase('gallery.videos', { returnObjects: true }) as string[];

  return (
    <>
      <div className="overflow-hidden bg-brand-offwhite relative">\
        <Header 
          navItems={NAV_ITEMS.map(nav => ({
            ...nav,
            onClick: () => scrollToSection({ sectionId: nav.href, offset: 80, duration: 800 }),
          }))}
          ctaLabel={tHome('cta')}
          ctaOnClick={() => router.push("/booking")}
          selector={{
            current: i18n.language,
            options: [
              { value: "pt", label: "Português", icon: "🇧🇷" },
              { value: "en", label: "English", icon: "🇺🇸" },
            ],
            onSelect: (lang: string) => {
              switchLanguage(lang as "en" | "pt");
            }
          }}
        />

        <Hero />

        <Challange />

        <section className="py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="relative rounded-3xl overflow-hidden shadow-lg will-change-transform">
              <Image
                ref={imageOneRef}
                src={images[0]}
                alt={`Main mockup ${caseTitle}`}
                width={1920}
                height={1080}
                priority
                quality={90}
                className="w-full h-full object-cover transition-transform will-change-transform select-none"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 2000px"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,..."
              />
            </div>
          </div>
        </section>

        <Solution />

        <section className="py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="relative rounded-3xl overflow-hidden bg-brand-lavender p-4 md:p-8 lg:p-12 shadow-md">
              <div className="aspect-video relative">
                <video
                  className="w-full h-full object-fill rounded-xl shadow-lg select-none"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  poster={images[0]}
                  src={videos[0]}
                />
              </div>
            </div>
          </div>
        </section>

        <Features />

        {images.length > 2 && (
          <section className="py-20">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {images.slice(1, 4).map((src, index) => (
                  <div key={index} className="relative rounded-2xl overflow-hidden">
                    <Image
                      src={src}
                      alt={`Mobile mockup ${index + 1}`}
                      width={270}
                      height={582}
                      loading="lazy"
                      quality={85}
                      className="w-full h-full object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 270px"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <Contact />

        <Slogan
          title={tHome('slogan.title')}
          description={tHome('slogan.description')}
        />

        <Footer
          email="contact@zardo.dev"
          socialLinks={SOCIAL_LINKS}
          onScrollToTop={() => scrollToSection({ sectionId: "hero", offset: 80, duration: 800 })}
          backToTopLabel={tHome("footer.backToTop")}
        />
      </div>
    </>
  );
};

export default CasePage;
