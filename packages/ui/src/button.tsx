"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./styles/button.module.css";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "small" | "medium" | "large";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
}

export const Button = ({ 
  children, 
  variant = "primary", 
  size = "medium",
  fullWidth = false,
  className = "",
  ...props 
}: ButtonProps) => {
  const baseClasses = [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth ? styles.fullWidth : "",
    className
  ].filter(Boolean).join(" ");

  return (
    <button
      className={baseClasses}
      {...props}
    >
      {children}
    </button>
  );
};
