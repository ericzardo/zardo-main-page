import { ReactElement } from "react";
import { Search, Lightbulb, Code, LineChart } from "lucide-react";

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: ReactElement;
  color: string;
  delay: number;
}

export const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Discovery",
    description: "We start by understanding your business goals, challenges, and requirements to create a personalized strategy.",
    icon: <Search className="w-8 h-8 text-brand-lavender" />,
    color: "bg-blue-500",
    delay: 300,
  },
  {
    id: 2,
    title: "Strategy",
    description: "In this step, we design a roadmap that aligns with your objectives, ensuring a clear path towards success.",
    icon: <Lightbulb className="w-8 h-8 text-brand-lavender" />,
    color: "bg-green-500",
    delay: 400,
  },
  {
    id: 3,
    title: "Execution",
    description: "We bring the plan to life by developing and deploying the solutions with precision and efficiency.",
    icon: <Code className="w-8 h-8 text-brand-lavender" />,
    color: "bg-orange-500",
    delay: 500,
  },
  {
    id: 4,
    title: "Optimization",
    description: "We continuously optimize the solution to enhance performance, ensuring it grows with your business needs.",
    icon: <LineChart className="w-8 h-8 text-brand-lavender" />,
    color: "bg-purple-500",
    delay: 600,
  },
]; 