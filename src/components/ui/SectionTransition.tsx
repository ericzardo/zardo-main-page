"use client";

import { useEffect, useRef, FC, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionTransitionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "scale";
}

const SectionTransition: FC<SectionTransitionProps> = ({
  children,
  className,
  delay = 0,
  direction = "up",
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("opacity-100");
              entry.target.classList.remove("translate-y-10", "-translate-x-10", "translate-x-10", "scale-95");
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(sectionRef.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={sectionRef}
      className={cn(
        "opacity-0 transition-all duration-700 ease-out will-change-transform",
        direction === "up" && "translate-y-10",
        direction === "left" && "-translate-x-10",
        direction === "right" && "translate-x-10",
        direction === "scale" && "scale-95",
        className
      )}
    >
      {children}
    </div>
  );
};

export default SectionTransition;