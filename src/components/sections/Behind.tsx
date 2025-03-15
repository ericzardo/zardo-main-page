import Image from "next/image";
import Link from "next/link";
import { Linkedin, Github } from "lucide-react";
import SectionTransition from "@/components/ui/SectionTransition";

const Behind = () => {
  return (
    <section className="relative py-20 md:py-32 bg-brand-navy rounded-[20px] md:rounded-[40px] lg:rounded-[60px]" id="about">
      <div className="container mx-auto px-4">
        {/* Título da seção */}
        <div className="mb-16 text-center">
          <SectionTransition delay={200}>
            <h2 className="section-heading font-medium text-brand-lavender">The guy behind Zardo</h2>
          </SectionTransition>
        </div>

        {/* Conteúdo da seção */}
        <div className="grid md:grid-cols-2 gap-12 items-center pt-20">
          {/* Coluna 1 - Imagem */}
          <SectionTransition direction="left">
            <div className="relative w-full max-w-md mx-auto shadow-md">
              <div className="rounded-xl overflow-hidden">
                <Image 
                  src="/me.jpg" 
                  alt="Founder of Zardo, Eric Zardo" // Acessibilidade
                  className="w-full h-auto rounded-xl"
                  width={420}
                  height={420}
                />
                {/* Gradiente escuro na parte inferior para melhor leitura */}
                <div className="absolute p-4 flex items-end justify-between bottom-0 left-0 right-0 h-1/5 bg-gradient-to-t from-brand-navy/90 to-transparent">
                  <p className="text-brand-lavender">/ More about me</p>

                  <div className="flex items-center justify-end gap-2">
                    <Link target="_blank" href="https://www.linkedin.com/in/eric-zardo-a53630228/" className="text-brand-offwhite transition-all duration-200 ease-out hover:scale-75 hover:text-brand-lavender" passHref>
                      <Linkedin size={24} strokeWidth={1}/>
                    </Link>
                    <Link target="_blank" href="https://github.com/ericzardo" className="text-brand-offwhite transition-all duration-200 ease-out hover:scale-75 hover:text-brand-lavender" passHref>
                      <Github size={24} strokeWidth={1}/>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SectionTransition>

          {/* Coluna 2 - Texto */}
          <SectionTransition direction="right">
            <div className="flex flex-col gap-8">
              <p className="text-brand-offwhite">
                Hi, I&apos;m Eric Zardo, from Porto Alegre, Brazil.
              </p>
              <p className="text-brand-offwhite">
                My journey into the tech world began with a fascination for how things work behind the scenes. Over time, this curiosity transformed into a love for coding and building things from scratch, whether it&apos;s creating websites, building APIs, or working on innovative web solutions.
              </p>
              <p className="text-brand-offwhite">
                I started my development career in 2020, and since then, I&apos;ve focused on refining my skills in web development, diving into front-end technologies like React.js, Next.js, and TailwindCSS, while also learning the ins and outs of back-end systems using Node.js and Fastify. I found a real passion for creating not just functional, but also intuitive, responsive, and user-centric designs that solve real-world problems.
              </p>
              <p className="text-brand-offwhite">
                At Zardo company, my goal is to help clients turn their ideas into powerful web solutions, while ensuring every project is scalable, efficient, and designed with the end user in mind. Let&apos;s work together and bring your vision to life!
              </p>
            </div>
          </SectionTransition>
        </div>
      </div>
    </section>
  );
};

export default Behind;
