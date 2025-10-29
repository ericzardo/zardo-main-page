"use client";

import { useTranslation } from "react-i18next";

import { SectionTransition } from "@zardo/ui-kit/animations";
import ProjectCard from "@/components/ui/ProjectCard";

const Portfolio = () => {
  const { t } = useTranslation("portfolio");

  const projects = [
    {
      image: "/projects/prospecting.leads.webp",
      alt: t("projects.prospectingLeads.alt"),
      title: t("projects.prospectingLeads.title"),
      description: t("projects.prospectingLeads.description"),
      tags: t("projects.prospectingLeads.tags", { returnObjects: true }) as string[],
      link: "cases/prospecting-leads",
      delay: 300,
    },
    {
      image: "/projects/mockups/diagnosis-mockup-2.webp",
      alt: t("projects.automatedDiagnosis.alt"),
      title: t("projects.automatedDiagnosis.title"),
      description: t("projects.automatedDiagnosis.description"),
      tags: t("projects.automatedDiagnosis.tags", { returnObjects: true }) as string[],
      link: "cases/automated-diagonsis",
      delay: 500,
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
