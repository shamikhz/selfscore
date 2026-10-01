import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "interactive" | "highlight" | "subtle" | "bordered";
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, className = "", variant = "default", ...props }, ref) => {
    const baseStyles = "rounded-xl transition-all";

    const variantStyles = {
      default:
        "bg-surface border border-surface-border p-5 sm:p-6 shadow-card",
      interactive:
        "bg-surface border border-surface-border p-5 sm:p-6 shadow-card hover:border-primary/40 hover:shadow-raised cursor-pointer active:scale-[0.995]",
      highlight:
        "bg-primary-subtle/50 border border-primary/20 p-5 sm:p-6 shadow-subtle",
      subtle:
        "bg-surface-subtle border border-surface-border/60 p-4 sm:p-5",
      bordered:
        "bg-surface border-2 border-surface-border p-5 sm:p-6",
    };

    return (
      <div
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";
