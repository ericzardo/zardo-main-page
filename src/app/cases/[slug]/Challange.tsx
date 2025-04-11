"use client";

import { useParams } from "next/navigation";
import { useTranslation } from "react-i18next";

const Challange = () => {
  const rawSlug = useParams()?.slug;
  const slug = Array.isArray(rawSlug) ? rawSlug[0] : rawSlug ?? "";

  const { t } = useTranslation(`cases/${slug}`);

  const points: string[] = t("challenge.points", { returnObjects: true }) as string[];
  const mission: string[] = t("challenge.mission", { returnObjects: true }) as string[];

  return (
    <section className="py-20 bg-brand-offwhite">
      <div className="container mx-auto px-4 max-w-4xl">
        <h3 className="section-heading text-brand-purpleDeep mb-6">
          {t("challenge.title")}
        </h3>
        <p className="text-brand-navy/80 mb-4 text-xl">{t("challenge.intro")}</p>

        <ul className="space-y-2 text-brand-navy/80 mb-4 text-lg">
          {points.map((point, index) => (
            <li key={index}>⬥ {point}</li>
          ))}
        </ul>

        <p className="text-brand-navy/80 text-xl font-semibold">
          {t("challenge.missionTitle")}
        </p>
        <ul className="space-y-2 text-brand-navy/80 mt-2 text-lg">
          {mission.map((item, index) => (
            <li key={index}>⬥ {item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Challange;
