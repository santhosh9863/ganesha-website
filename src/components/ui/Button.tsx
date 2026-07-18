import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-br from-gold-300 via-gold-400 to-gold-500 text-white border-none shadow-[0_8px_24px_rgba(200,161,74,0.22)] hover:shadow-[0_12px_32px_rgba(200,161,74,0.30)] hover:brightness-110",
  secondary:
    "bg-transparent border-[1.5px] border-gold-400/40 text-gold-400 hover:bg-gold-400/[0.08] hover:border-gold-400/60",
  ghost:
    "bg-transparent border-none text-[#4A453C]/70 hover:text-[#1A1A1A]",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-10 px-5 text-sm gap-2",
  md: "h-12 px-7 text-sm gap-2.5",
  lg: "h-14 px-8 text-[15px] gap-3",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-xl font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-gold-400 focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, type ButtonProps, type ButtonVariant, type ButtonSize };
