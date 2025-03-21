import SectionTransition from "@/components/ui/SectionTransition";
import PatternBackground from "@/components/ui/PatternBackground";
import ProjectCard from "@/components/ui/ProjectCard";

const Portfolio = () => {
  const projects = [
    {
      image: "/projects/chatt.on.webp",
      alt: "chatt.on project banner",
      title: "chatt.on",
      description: "A real-time chat platform with support for group discussions, private messaging, and administrative management of permissions and plans.",
      tags: ["Web Applications", "API Integration", "UX/UI"],
      link: "cases/chatt-on",
      delay: 300,
    },
    {
      image: "/projects/ebook.lp.webp",
      alt: "ebook landing page banner",
      title: "eBook LP",
      description: "A landing page focused on promoting Mente Smart’s ebook, highlighting key benefits and driving conversions through an engaging and streamlined user experience.",
      tags: ["Landing Page", "Web Development"],
      link: "cases/ebook-lp",
      delay: 400,
    },
  ];

  return (
    <section className="relative py-16 md:py-24 bg-brand-offwhite overflow-hidden" id="projects">
      <PatternBackground variant="circuit" opacity={0.2} />
      <div className="container mx-auto px-4">
        <SectionTransition direction="up" delay={100}>
          <div className="text-center mb-12">
            <h2 className="section-heading text-gradient">Success Cases</h2>
            <p className="text-base text-brand-navy/60 max-w-2xl mx-auto">
              Explore our portfolio of exceptional web development and custom automation workflows that drive results for businesses around the world.
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
