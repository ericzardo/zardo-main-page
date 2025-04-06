import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

type ProjectCardProps = {
  image: string;
  alt: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
};

const ProjectCard = ({ image, alt, title, description, tags, link }: ProjectCardProps) => {
  return (
    <div className="flex flex-col items-center max-w-[600px] w-full gap-4">
      <Link href={link} className="block group relative w-full aspect-square rounded-lg overflow-hidden flex-shrink-0 shadow-md hover:scale-95 transition-all duration-200 ease-out">
        <div className="relative w-full h-full">
          <Image
            src={image}
            alt={alt}
            fill
            className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            loading="lazy"
          />

          {/* Overlay com informações no hover */}
          <div className="absolute inset-0 bg-brand-navy opacity-0 hover:bg-brand-navy/65 flex flex-col justify-between items-start p-10 group-hover:opacity-100 transition-opacity duration-200 ease-out">
            <div className="w-full flex items-center justify-between text-brand-lavender">
              <h3 className="text-2xl font-semibold">{title}</h3>
              {/* O botão "Read Case" ainda pode estar aqui se quiser */}
              <span className="text-sm flex gap-2 items-center cursor-pointer group-hover:scale-90 group-hover:text-brand-offwhite transition-all duration-200 ease-out">
                <p>Read Case</p>
                <ArrowRight className="size-6" />
              </span>
            </div>

            <div className="w-full flex gap-2 flex-wrap">
              {tags.map((tag, index) => (
                <div key={index} className="px-2 py-1 border border-brand-lavender text-brand-lavender rounded">
                  <p className="text-xs">{tag}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Link>

      <p className="text-sm text-brand-navy/80">
        <span className="text-base text-brand-purpleDeep">{title} /</span> {description}
      </p>
    </div>
  );
};

export default ProjectCard;
