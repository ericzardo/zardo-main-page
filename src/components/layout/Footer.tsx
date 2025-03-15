"use client";

import { ChevronDown, ChevronRight } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative py-12 bg-brand-navy text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row gap-5 justify-between items-center">
          
          {/* Botão de voltar ao topo */}
          <button
            onClick={scrollToTop}
            className="text-white/70 flex gap-2 items-center transition-all cursor-pointer hover:scale-90 hover:text-white/80 duration-200 ease-out group"
            aria-label="Back to top"
          >
            <ChevronDown className="transition-transform duration-300 group-hover:rotate-180" />
            Back to Top
          </button>

          {/* Texto de direitos autorais */}
          <p className="text-white/70">2025 © zardo. All rights reserved.</p>

          {/* Botão de Follow Us com Dropdown */}
          <div className="relative group">
            <button
              className="flex items-center gap-2 text-white/70 transition-all duration-300 ease-out group-hover:scale-90 group-hover:text-white/80"
              aria-label="Follow us on social media"
            >
              Follow us
              <ChevronRight className="transition-transform duration-300 group-hover:rotate-90 group-hover:scale-75" />
            </button>

            {/* Dropdown de redes sociais */}
            <div className="absolute flex gap-2 right-0 py-1 transition-all duration-300 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white/80 transition-all hover:scale-90 duration-200 ease-out"
                title="Follow us on LinkedIn"
                aria-label="Follow us on LinkedIn"
              >
                IN
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white/80 transition-all hover:scale-90 duration-200 ease-out"
                title="Follow us on Instagram"
                aria-label="Follow us on Instagram"
              >
                IG
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
