"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium transition-all duration-200 select-none",
  {
    variants: {
      variant: {
        // High contrast
        default:
          "border-transparent bg-primary text-primary-foreground shadow-sm hover:opacity-90",
        
        // Muted/Professional
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        
        // Classic outline
        outline: "text-foreground border-border hover:bg-accent hover:text-accent-foreground",

        // Soft/Tinted (The "Modern SaaS" look)
        subtle: 
          "border-primary/10 bg-primary/5 text-primary hover:bg-primary/10",
        
        // Success/Green tint
        success:
          "border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
        
        // Warning/Orange tint
        warning:
          "border-amber-500/20 bg-amber-500/10 text-amber-600 dark:text-amber-400",

        // Destructive/Red tint
        destructive:
          "border-destructive/20 bg-destructive/10 text-destructive",
      },
      size: {
        default: "px-2.5 py-0.5 text-xs",
        lg: "px-3 py-1 text-[13px]", // Slightly larger for hero sections
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    }
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
    showDot?: boolean; // Added for status-style badges
}

function Badge({ className, variant, size, showDot = false, ...props }: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    >
      {showDot && (
        <span 
          className={cn(
            "h-1.5 w-1.5 rounded-full bg-current",
            // Optional: add pulse effect for importance
            variant === "success" && "animate-pulse" 
          )} 
        />
      )}
      {props.children}
    </div>
  );
}

export { Badge, badgeVariants };