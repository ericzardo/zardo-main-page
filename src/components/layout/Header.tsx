"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Button from "../ui/Button";
import { useScrollToSection } from "@/hooks/useScrollToSection";

const NAV_ITEMS = ["projects", "about", "testimonials", "contact"];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollToSection = useScrollToSection();

  // Efeito de scroll otimizado
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = (id: string) => {
    scrollToSection({ 
      sectionId: id, 
      offset: 80, // 80px offset to account for header height
      duration: 800 // 800ms duration for a smooth but not too slow animation
    });
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-5 bg-gradient-to-b from-white/80 from-80% to-transparent" : "py-7 bg-white shadow-sm"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between relative">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-gradient">
          zardo
        </Link>

        {/* Navegação Desktop */}
        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              onClick={() => handleScrollToSection(item)}
              className="text-brand-navy font-medium hover:text-brand-purple transition-colors capitalize"
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Botão de ação Desktop */}
        <div className="hidden md:flex">
          <Button variant="primary" size="sm" onClick={() => handleScrollToSection("contact")}>
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-brand-navy" />
          ) : (
            <Menu className="w-6 h-6 text-brand-navy" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 top-[60px] z-40 bg-white/95 backdrop-blur-lg transform transition-transform duration-300 ease-in-out md:hidden flex flex-col items-center ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="container mx-auto px-4 py-8 flex flex-col gap-6 items-center">
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              onClick={() => handleScrollToSection(item)}
              className="text-lg text-brand-navy py-3 border-b border-brand-lavender/50 font-medium capitalize w-full text-center"
            >
              {item}
            </button>
          ))}
          <Button variant="primary" className="mt-4" onClick={() => handleScrollToSection("contact")}>
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;