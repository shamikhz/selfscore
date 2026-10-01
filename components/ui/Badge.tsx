import React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "neutral" | "primary" | "success" | "accent";
  size?: "sm" | "md";
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  className = "",
  variant = "neutral",
  size = "md",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center font-medium select-none rounded-full";

  const variantStyles = {
    neutral: "bg-surface-subtle text-muted-foreground border border-surface-border",
    primary: "bg-primary-subtle text-primary border border-primary/20",
    success: "bg-success-subtle text-success border border-success/20",
    accent: "bg-amber-50 text-accent border border-amber-200",
  };

  const sizeStyles = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-2.5 py-1 text-xs",
  };

  return (
    <span
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};
