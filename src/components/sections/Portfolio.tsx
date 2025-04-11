"use client";

import { useTranslation } from "react-i18next";

import { SectionTransition } from "@zardo/ui-kit/animations";
import ProjectCard from "@/components/ui/ProjectCard";

const Portfolio = () => {
  const { t } = useTranslation("portfolio");

  const projects = [
    {
      image: "/projects/chatt.on.webp",
      alt: t("projects.chattOn.alt"),
      title: t("projects.chattOn.title"),
      description: t("projects.chattOn.description"),
      tags: t("projects.chattOn.tags", { returnObjects: true }) as string[],
      link: "cases/chatt-on",
      delay: 300,
    },
    {
      image: "/projects/ebook.lp.webp",
      alt: t("projects.ebookLp.alt"),
      title: t("projects.ebookLp.title"),
      description: t("projects.ebookLp.description"),
      tags: t("projects.ebookLp.tags", { returnObjects: true }) as string[],
      link: "cases/ebook-lp",
      delay: 400,
    },
  ];

  return (
    <section className="relative py-16 md:py-24 bg-brand-offwhite overflow-hidden" id="projects">
      <div className="container mx-auto px-4">
        <SectionTransition direction="up" delay={100}>
          <div className="text-center mb-12">
            <h2 className="section-heading text-gradient">{t("title")}</h2>
            <p className="text-base text-brand-navy/60 max-w-2xl mx-auto">
              {t("description")}
            </p>
          </div>
        </SectionTransition>

        <div className="flex flex-wrap justify-center gap-12">
          {projects.map((project, index) => (
            <SectionTransition direction="up" delay={project.delay} key={index}>
              <ProjectCard {...project} />
            </SectionTransition>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
