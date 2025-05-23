'use client';

import { RefObject } from "react";

interface AutomationCardProps {
  title: string;
  description: string;
  result: string;
  animationRef: RefObject<HTMLDivElement | null>;
}

const AutomationCard = ({ title, description, result, animationRef }: AutomationCardProps) => {
  return (
    <article className="relative bg-brand-offwhite border border-brand-purpleDeep/10 rounded-2xl px-6 py-10 shadow-xs flex flex-col md:flex-row items-center gap-6 md:gap-12">
      <figure className="w-full md:w-1/2 flex justify-center">
        <div
          ref={animationRef}
          className="w-[220px] h-[220px] md:w-[260px] md:h-[260px]"
          aria-hidden="true"
        ></div>
      </figure>
      <section className="md:w-1/2 flex flex-col gap-6 text-center md:text-left">
        <h3 className="text-2xl font-semibold text-brand-purpleDeep mb-2">{title}</h3>
        <p className="text-brand-navy/80 mb-4">{description}</p>
        <p className="text-sm font-medium text-primary">{result}</p>
      </section>
    </article>
  );
};

export default AutomationCard;
