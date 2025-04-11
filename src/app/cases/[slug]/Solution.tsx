"use client";

import { useParams } from "next/navigation";
import { useTranslation } from "react-i18next";

const Solution = () => {
  const rawSlug = useParams()?.slug;
  const slug = Array.isArray(rawSlug) ? rawSlug[0] : rawSlug ?? "";

  const { t } = useTranslation(`cases/${slug}`);
  const beforeAfter = t("solution.beforeAfter", { returnObjects: true }) as {
    before: string;
    after: string;
  }[];

  return (
    <section className="py-20 bg-brand-offwhite">
      <div className="container mx-auto px-4 max-w-4xl">
        <h3 className="section-heading text-brand-purpleDeep mb-6">
          {t("solution.title")}
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border border-brand-navy/20 text-sm text-left text-brand-navy/80">
            <thead className="bg-brand-navy text-white">
              <tr>
                <th className="px-4 py-2">{t("solution.beforeTitle")}</th>
                <th className="px-4 py-2">{t("solution.afterTitle")}</th>
              </tr>
            </thead>
            <tbody>
              {beforeAfter.map((item, index) => (
                <tr key={index} className="border-t border-brand-navy/20">
                  <td className="px-4 py-3">{item.before}</td>
                  <td className="px-4 py-3">{item.after}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Solution;
