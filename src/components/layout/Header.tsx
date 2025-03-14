"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import CustomButton from "../ui/Button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "py-5 bg-gradient-to-b from-80% from-white/80 to-transparent"
          : "py-7 bg-white shadow-sm"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between relative">
        {/* Logo totalmente à esquerda */}
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <span className="text-2xl font-bold text-gradient">zardo</span>
          </a>
        </div>

        {/* Desktop Navigation - Centralizado Absoluto */}
        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
          {["about", "features", "testimonials", "contact"].map((item) => (
            <a
              key={item}
              onClick={() => scrollToSection(item)}
              className="link text-brand-navy font-medium hover:text-brand-purple transition-colors capitalize cursor-pointer"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Botão totalmente à direita */}
        <div className="hidden md:flex items-center">
          <CustomButton variant="primary" size="sm">
            Get Started
          </CustomButton>
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
        className={cn(
          "fixed inset-0 top-[60px] z-40 bg-white/95 backdrop-blur-lg transform transition-transform duration-300 ease-in-out md:hidden flex flex-col items-center",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="container mx-auto px-4 py-8 flex flex-col gap-6 items-center">
          {["about", "features", "testimonials", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-lg text-brand-navy py-3 border-b border-brand-lavender/50 font-medium capitalize w-full text-center"
            >
              {item}
            </button>
          ))}
          <CustomButton variant="primary" className="mt-4">
            Get Started
          </CustomButton>
        </div>
      </div>
    </header>
  );
};

export default Header;