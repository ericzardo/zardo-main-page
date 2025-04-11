"use client";

import { ReactElement } from "react";
import { useParams } from "next/navigation";
import { useTranslation } from "react-i18next";
import { SiJavascript, SiReact, SiTailwindcss, SiNodedotjs, SiFastify, SiPrisma, SiMysql, SiGit, SiDocker, SiNginx, SiHtml5, SiCss3 } from "react-icons/si";

const iconMap: Record<string, ReactElement> = {
  JavaScript: <SiJavascript />,
  React: <SiReact />,
  "Tailwind CSS": <SiTailwindcss />,
  "Node.js": <SiNodedotjs />,
  Fastify: <SiFastify />,
  Prisma: <SiPrisma />,
  MySQL: <SiMysql />,
  Git: <SiGit />,
  Docker: <SiDocker />,
  Nginx: <SiNginx />,
  HTML5: <SiHtml5 />,
  CSS3: <SiCss3 />
};


const Features = () => {
  const rawSlug = useParams()?.slug;
  const slug = Array.isArray(rawSlug) ? rawSlug[0] : rawSlug ?? "";

  const { t } = useTranslation(`cases/${slug}`);

  const features: string[] = t("features.list", { returnObjects: true }) as string[];
  const techNames: string[] = t("features.techs", { returnObjects: true }) as string[];

  const techs = techNames.map((name) => ({
    name,
    icon: iconMap[name] ?? <></>
  }));

  return (
    <section className="py-20 bg-brand-offwhite">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex flex-col gap-10">
          <h3 className="section-heading text-brand-purpleDeep mb-6">
            {t("features.title")}
          </h3>
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-brand-purple shrink-0"></span>
                <span className="text-brand-navy/80">{feature}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-6">
            <h4 className="text-2xl font-medium text-brand-purpleDeep">
              {t("features.techsTitle")}
            </h4>
            <div className="flex flex-wrap gap-4">
              {techs.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-brand-offwhite border border-brand-navy/10 text-brand-navy shadow-sm hover:scale-90 transition"
                >
                  {tech.icon}
                  <span className="text-sm">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
