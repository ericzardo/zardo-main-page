interface ChallangeProps {
  intro: string;
  points: string[];
  mission: string[];
}

const Challange = ({ intro, points, mission }: ChallangeProps) => {
  return (
    <section className="py-20 bg-brand-offwhite">
      <div className="container mx-auto px-4 max-w-4xl">
        <h3 className="section-heading text-brand-purpleDeep mb-6">Challenge</h3>
        <p className="text-brand-navy/80 mb-4 text-xl">
          {intro}
        </p>
        <ul className="space-y-2 text-brand-navy/80 mb-4 text-lg">
          {points.map((point, index) => (
            <li key={index}>⬥ {point}</li>
          ))}
        </ul>
        <p className="text-brand-navy/80 text-xl font-semibold">
          Our mission was to:
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
