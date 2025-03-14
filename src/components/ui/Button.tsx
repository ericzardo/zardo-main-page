import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
}

const Button = ({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) => {
  const sizeClasses = {
    sm: "text-sm px-4 py-2",
    md: "px-6 py-3",
    lg: "text-lg px-8 py-4",
  };

  return (
    <button
      className={cn(
        "rounded-full font-medium transition-all duration-300 flex items-center justify-center",
        "transform hover:scale-90 focus:outline-none focus:ring-2 focus:ring-brand-purple/50",
        variant === "primary" && "bg-gradient-to-r from-brand-purple to-brand-purpleDark text-white shadow-md hover:shadow-lg",
        variant === "secondary" && "bg-transparent border border-brand-purple text-brand-purple shadow-md hover:bg-brand-purple/10",
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;