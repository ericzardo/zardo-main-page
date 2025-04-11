'use client'

import Image from "next/image";
import Link from "next/link";
import { Linkedin, Github } from "lucide-react";
import { SectionTransition } from "@zardo/ui-kit/animations";
import { useTranslation } from "react-i18next";

const Behind = () => {
  const { t } = useTranslation("behind");

  return (
    <section 
      className="relative py-20 md:py-32 bg-brand-navy rounded-[20px] md:rounded-[40px] lg:rounded-[60px]" 
      id="about"
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto px-4">
        <header className="mb-16 text-center">
          <SectionTransition delay={200}>
            <h2 
              id="about-heading"
              className="section-heading text-brand-offwhite"
            >
              {t("title")}
            </h2>
          </SectionTransition>
        </header>

        <article className="grid md:grid-cols-2 gap-12 items-center pt-20">
          <SectionTransition direction="left">
            <figure className="relative w-full max-w-md mx-auto shadow-md">
              <div className="rounded-xl overflow-hidden">
                <Image 
                  src="/me.webp" 
                  alt={t("imageAlt")}
                  className="w-full h-auto rounded-xl"
                  width={420}
                  height={420}
                  loading="lazy"
                />
                <div className="absolute p-4 flex items-end justify-between bottom-0 left-0 right-0 h-1/5 bg-gradient-to-t from-brand-navy/90 to-transparent">
                  <p className="text-brand-lavender">{t("moreAboutMe")}</p>

                  <nav className="flex items-center justify-end gap-2">
                    <Link 
                      target="_blank" 
                      href="https://www.linkedin.com/in/eric-zardo-a53630228/" 
                      aria-label={t("linkedinAria")}
                      rel="noopener noreferrer"
                      className="text-brand-offwhite transition-all duration-200 ease-out hover:scale-75 hover:text-brand-lavender" 
                      passHref
                    >
                      <Linkedin size={24} strokeWidth={1} aria-hidden="true"/>
                    </Link>
                    <Link 
                      target="_blank" 
                      href="https://github.com/ericzardo" 
                      aria-label={t("githubAria")}
                      rel="noopener noreferrer" 
                      className="text-brand-offwhite transition-all duration-200 ease-out hover:scale-75 hover:text-brand-lavender" 
                      passHref
                    >
                      <Github size={24} strokeWidth={1} aria-hidden="true"/>
                    </Link>
                  </nav>
                </div>
              </div>
            </figure>
          </SectionTransition>

          <SectionTransition direction="right">
            <section className="flex flex-col gap-8">
              <p className="text-brand-lavender">{t("paragraph1")}</p>
              <p className="text-brand-lavender">{t("paragraph2")}</p>
              <p className="text-brand-lavender">{t("paragraph3")}</p>
              <p className="text-brand-lavender">{t("paragraph4")}</p>
            </section>
          </SectionTransition>
        </article>
      </div>
    </section>
  );
};

export default Behind;
