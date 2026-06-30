import { ButtonHTMLAttributes } from "react";
import { cn } from "@/core/lib/utils";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      "bg-green-600 text-white hover:bg-green-700",

    secondary:
      "bg-black text-white hover:bg-gray-800",

    outline:
      "border border-green-600 text-green-700 bg-white hover:bg-green-50",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm rounded-lg",

    md: "px-6 py-3 rounded-xl",

    lg: "px-8 py-4 rounded-full text-lg",
  };

  return (
    <button
      className={cn(
        "font-semibold transition-all duration-300",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
}