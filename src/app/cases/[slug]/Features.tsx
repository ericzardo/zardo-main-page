import { ReactElement } from "react";

interface FeaturesProps {
  techs: { name: string; icon: ReactElement }[];
  features: string[];
}

const Features = ({ features, techs }: FeaturesProps) => {
  return (
    <section className="py-20 bg-brand-offwhite">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex flex-col gap-10">
          <h3 className="section-heading text-brand-purpleDeep mb-6">Key Features</h3>
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-brand-purple shrink-0"></span>
                <span className="text-brand-navy/80">{feature}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-6">
            <h4 className="text-2xl font-medium text-brand-purpleDeep">Technologies used</h4>
            <div className="flex flex-wrap gap-4">
              {techs.map((tech, index) => (
                <div key={index} className="flex items-center gap-2 px-4 py-2 rounded-full bg-brand-offwhite border border-brand-navy/10 text-brand-navy shadow-sm hover:scale-90 transition">
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
