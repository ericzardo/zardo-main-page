import React from "react";
import { CheckCircle } from "lucide-react";

export interface Benefit {
  title: string;
  description: string;
  icon: JSX.Element;
  delay: number;
}

export const benefits: Benefit[] = [
  {
    title: "A partnership for growth",
    description: "We believe in building long-lasting partnerships, with solutions that grow alongside your business and ensure sustainable results.",
    icon: <CheckCircle className="size-6 text-brand-purpleDark" />,
    delay: 300,
  },
  {
    title: "Focus on results",
    description: "What sets us apart is our ability to deliver tangible results. Our focus is not just on execution, but on the direct impact we bring to your business.",
    icon: <CheckCircle className="size-6 text-brand-purpleDark" />,
    delay: 400,
  },
  {
    title: "Powering digital evolution",
    description: "We connect your business to the future by accelerating digital transformation in a practical, hassle-free way, with solutions that truly make a difference.",
    icon: <CheckCircle className="size-6 text-brand-purpleDark" />,
    delay: 500,
  },
]; 