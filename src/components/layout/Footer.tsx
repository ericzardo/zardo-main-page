"use client";

import { ChevronDown, Instagram, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { useScrollToSection } from "@/hooks/useScrollToSection";

const Footer = () => {
  const scrollToSection = useScrollToSection();

  const handleScrollToTop = () => {
    scrollToSection({ 
      sectionId: "hero", 
      offset: 0,
      duration: 800
    });
  };

  const handleSocialLink = (sectionId: string) => {
    scrollToSection({ 
      sectionId, 
      offset: 80,
      duration: 800
    });
  };

  return (
    <footer className="relative py-12 bg-brand-navy text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row gap-5 justify-between items-center">
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleSocialLink("instagram")}
              className="flex items-center justify-center hover:scale-90 hover:text-white/80 transition-all duration-200 ease-out"
              aria-label="Zardo's Instagram Profile"
            >
              <Instagram strokeWidth={2} className="size-6 text-white/60"/>
            </button>
            <button
              onClick={() => handleSocialLink("linkedin")}
              className="flex items-center justify-center hover:scale-90 hover:text-white/80 transition-all duration-200 ease-out"
              aria-label="Zardo's LinkedIn Profile"
            >
              <Linkedin strokeWidth={2} className="size-6 text-white/60"/>
            </button>
            <Link
              href="mailto:contact@zardo.tech"
              target="_blank"
              rel="noopener noreferrer" 
              className="flex items-center justify-center hover:scale-90 hover:text-white/80 transition-all duration-200 ease-out"
              aria-label="Send an email to contact@zardo.tech"
              title="Send email to contact@zardo.tech"
            >
              <Mail strokeWidth={2} className="size-6 text-white/60"/>
            </Link>
          </div>

          <p className="text-white/70">2025 © zardo. All rights reserved.</p>

          <button
            onClick={handleScrollToTop}
            className="text-white/70 flex gap-2 items-center transition-all cursor-pointer hover:scale-90 hover:text-white/80 duration-200 ease-out group"
            aria-label="Back to top"
          >
            <ChevronDown className="transition-transform duration-300 group-hover:rotate-180" />
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
