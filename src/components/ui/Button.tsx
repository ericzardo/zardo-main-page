import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  "aria-label"?: string;
}

const Button = ({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "flex items-center justify-center gap-2 rounded-full font-medium transition-transform duration-300",
        "hover:scale-90 focus:outline-none focus:ring-2 focus:ring-brand-purple/50",
        {
          "bg-gradient-to-r from-brand-purple to-brand-purpleDark text-white shadow-md hover:shadow-lg":
            variant === "primary",
          "bg-transparent border border-brand-purple text-brand-purple shadow-md hover:bg-brand-purple/10":
            variant === "secondary",
          "text-sm px-4 py-2": size === "sm",
          "px-6 py-3": size === "md",
          "text-lg px-8 py-4": size === "lg",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
