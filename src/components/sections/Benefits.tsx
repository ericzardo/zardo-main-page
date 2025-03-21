import SectionTransition from "@/components/ui/SectionTransition";
import PatternBackground from "@/components/ui/PatternBackground";
import { CheckCircle } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      title: "A partnership for growth",
      description: "We believe in building long-lasting partnerships, with solutions that grow alongside your business and ensure sustainable results.",
      icon: <CheckCircle className="size-6 text-brand-purpleDark" />,
      delay: 300,
    },
    {
      title: "Focus on results",
      description: "What sets us apart is our ability to deliver tangible results. Our focus is not just on execution, but on the direct impact we bring to your business.",
      icon: <CheckCircle className="size-6 text-brand-purpleDark" />,
      delay: 400,
    },
    {
      title: "Powering digital evolution",
      description: "We connect your business to the future by accelerating digital transformation in a practical, hassle-free way, with solutions that truly make a difference.",
      icon: <CheckCircle className="size-6 text-brand-purpleDark" />,
      delay: 500,
    },
  ];
  
  return (
    <section className="relative py-16 md:py-24 bg-brand-offwhite overflow-hidden" id="benefits">
      <PatternBackground variant="circuit" opacity={0.2} />
      <div className="container mx-auto px-4">
        <SectionTransition direction="up" delay={100}>
          <div className="text-center mb-12">
            <h2 className="section-heading text-gradient">Why clients choose us?</h2>
          </div>
        </SectionTransition>

        <div className="flex flex-wrap justify-center gap-12">
          {benefits.map((benefit, index) => (
            <SectionTransition direction="up" delay={benefit.delay} key={index}>
              <div className="bg-brand-offwhite/80 rounded-xl p-6 shadow-md backdrop-blur-sm max-w-md flex flex-col gap-4 items-center text-center h-full">
                <div className="flex gap-2 items-center">
                  {benefit.icon}
                  <h3 className="text-2xl font-medium text-brand-navy/80">{benefit.title}</h3>
                </div>
                <p className="text-brand-navy/40">{benefit.description}</p>
              </div>
            </SectionTransition>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
