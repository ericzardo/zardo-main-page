"use client";

import { useState, FC } from "react";
import { ChevronDown } from "lucide-react";
import SectionTransition from "../ui/SectionTransition";
import PatternBackground from "../ui/PatternBackground";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-brand-lavender/30 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-4 text-left focus:outline-none"
      >
        <h3 className="text-lg font-medium text-brand-navy">{question}</h3>
        <span
          className={`ml-6 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <ChevronDown className="h-5 w-5 text-brand-purple" />
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-brand-navy/70">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqItems = [
    {
      question: "How long does it take to complete a project?",
      answer: "The timeline for each project depends on its scope. We focus on delivering results quickly, but we’ll work with you to establish realistic timelines based on your needs."
    },
    {
      question: "Do you offer AI-powered solutions?",
      answer: "Absolutely! We create intelligent solutions using AI to automate tasks, enhance user experiences, and provide innovative ways to drive business growth."
    },
    {
      question: "What types of businesses do you work with?",
      answer: "We work with small and medium-sized businesses across various industries, including retail, healthcare, restaurants, gyms, and more."
    },
    {
      question: "How much does a website or AI solution cost?",
      answer: "Pricing varies depending on the complexity of the project. We provide affordable solutions tailored to your business needs and budget."
    },
    {
      question: "Do I need a technical background to work with you?",
      answer: "Not at all! We make sure to explain everything in a simple and clear way, guiding you through the process with easy-to-understand language."
    }
  ];  

  return (
    <section className="relative py-16 md:py-24 bg-brand-offwhite" id="faq">
      <PatternBackground variant="circuit" opacity={0.15} />
      <div className="absolute top-20 left-10 w-72 h-72 bg-brand-purple/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-brand-purpleDark/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4">
        <SectionTransition direction="up">
          <div className="text-center mb-12">
            <span className="inline-block mb-3 px-3 py-1 bg-brand-lavender/30 backdrop-blur-sm rounded-full text-sm font-medium text-brand-purpleDark mx-auto">
              FAQ
            </span>
            <h2 className="section-heading text-gradient">
              Common Questions
            </h2>
          </div>
        </SectionTransition>
        
        <SectionTransition direction="up" delay={300}>
          <div className="max-w-3xl mx-auto bg-white/50 backdrop-blur-sm rounded-lg p-6 shadow-md border border-white/30">
            {faqItems.map((item, index) => (
              <FAQItem 
                key={index} 
                question={item.question} 
                answer={item.answer} 
              />
            ))}
          </div>
        </SectionTransition>
      </div>
    </section>
  );
};

export default FAQ;