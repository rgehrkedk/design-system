"use client";

import React from "react";
import styles from "./styles/button.module.css";

export const Button = ({ 
  children, 
  variant = "primary", 
  size = "medium",
  fullWidth = false,
  className = "",
  ...props 
}) => {
  const baseClasses = [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth ? styles.fullWidth : "",
    className
  ].filter(Boolean).join(" ");

  return React.createElement("button", {
    className: baseClasses,
    ...props
  }, children);
};