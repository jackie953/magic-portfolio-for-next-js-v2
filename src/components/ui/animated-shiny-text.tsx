"use client";

import type { ComponentPropsWithoutRef, CSSProperties, FC } from "react";
import { cn } from "@/lib/utils";

export interface AnimatedShinyTextProps extends ComponentPropsWithoutRef<"span"> {
  shimmerWidth?: number;
}

export const AnimatedShinyText: FC<AnimatedShinyTextProps> = ({
  children,
  className,
  shimmerWidth = 100,
  ...props
}) => {
  return (
    <span
      {...props}
      className={cn(
        // Basic layout
        "relative inline-block bg-clip-text",
        // Gradient shimmer (light + dark)
        "bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.85),transparent)]",
        "dark:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.9),transparent)]",
        // Animation
        "animate-shimmer",
        // Safari fix + enforce transparency last
        "[-webkit-text-fill-color:transparent] text-transparent",
        className
      )}
    >
      {children}
    </span>
  );
};
