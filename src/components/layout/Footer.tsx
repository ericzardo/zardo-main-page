"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

const Footer = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [topIsHovered, setTopIsHovered] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 bg-brand-navy text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row gap-5 justify-between items-center">
          {/* Botão de voltar ao topo */}
          <button
            onClick={scrollToTop}
            onMouseEnter={() => setTopIsHovered(true)}
            onMouseLeave={() => setTopIsHovered(false)}
            className="text-white/70 flex gap-2 items-center transition-all cursor-pointer hover:scale-90 hover:text-white/80 duration-200 ease-out"
          >
            <ChevronDown className={`transition-transform duration-300 ${topIsHovered && "rotate-180"}`} /> 
            Back to Top
          </button>

          {/* Texto de direitos autorais */}
          <div className="text-white/70">
            2025 © zardo. All rights reserved.
          </div>

          {/* Botão de Follow Us com Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Botão principal */}
            <button
              className={`flex items-center gap-2 text-white/70 transition-all duration-300 ease-out ${
                isHovered ? "scale-90 text-white/80" : ""
              }`}
              aria-label="Follow us on social media"
            >
              Follow us
              <ChevronRight 
                className={`transition-transform duration-300 ${
                  isHovered ? "rotate-90 scale-75" : ""
                }`}
              />
            </button>

            {/* Dropdown de redes sociais */}
            <div
              className={`absolute flex gap-2 right-0 py-1 transition-all duration-300 ${
                isHovered ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
              }`}
            >
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center text-white/70 hover:text-white/80 transition-all hover:scale-90 duration-200 ease-out"
                title="Follow us on LinkedIn"
              >
                IN
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center text-white/70 hover:text-white/75 transition-all hover:scale-90 duration-200 ease-out"
                title="Follow us on Instagram"
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
