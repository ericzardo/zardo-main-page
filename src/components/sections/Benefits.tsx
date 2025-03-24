import SectionTransition from "@/components/ui/SectionTransition";
import PatternBackground from "@/components/ui/PatternBackground";
import { benefits } from "@/data/benefits";

const Benefits = () => {
  return (
    <section className="relative py-16 md:py-24 bg-brand-offwhite overflow-hidden" id="benefits">
      <PatternBackground variant="circuit" opacity={0.2} />
      <div className="container mx-auto px-4">
        <SectionTransition direction="up" delay={100}>
          <header className="text-center mb-12">
            <h2 className="section-heading text-gradient">Why clients choose us?</h2>
            <p className="text-brand-navy/60 mt-4">Discover the advantages of working with us</p>
          </header>
        </SectionTransition>

        <div className="flex flex-wrap justify-center gap-12">
          {benefits.map((benefit, index) => (
            <SectionTransition direction="up" delay={benefit.delay} key={index}>
              <article className="bg-brand-offwhite/80 rounded-xl p-6 shadow-md backdrop-blur-sm max-w-md flex flex-col gap-4 items-center text-center h-full">
                <div className="flex gap-2 items-center">
                  {benefit.icon}
                  <h3 className="text-2xl font-medium text-brand-navy/80">{benefit.title}</h3>
                </div>
                <p className="text-brand-navy/40">{benefit.description}</p>
              </article>
            </SectionTransition>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
