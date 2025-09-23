import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const pixelButtonVariants = cva(
  "inline-flex items-center justify-center font-pixel text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 btn-pixel",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground border-primary hover:bg-primary/90",
        start: "bg-gradient-neon text-primary-foreground border-primary glow-neon hover:scale-105",
        continue: "bg-gradient-power text-accent-foreground border-accent glow-power hover:scale-105",
        quit: "bg-gradient-retro text-destructive-foreground border-destructive hover:bg-destructive/90",
        level: "bg-card text-card-foreground border-border hover:bg-muted/50",
        chest: "bg-power-up text-power-up-foreground border-power-up glow-power hover:animate-pixel-bounce",
        boss: "bg-destructive text-destructive-foreground border-destructive animate-pulse hover:scale-110",
        portal: "bg-accent text-accent-foreground border-accent glow-neon animate-pulse",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 px-4 py-2",
        lg: "h-14 px-8 py-4",
        xl: "h-16 px-10 py-5 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface PixelButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof pixelButtonVariants> {
  asChild?: boolean;
}

const PixelButton = React.forwardRef<HTMLButtonElement, PixelButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(pixelButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
PixelButton.displayName = "PixelButton";

export { PixelButton, pixelButtonVariants };