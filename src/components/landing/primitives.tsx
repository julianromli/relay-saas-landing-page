import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

/**
 * Design-system buttons extracted from the Figma frame
 * "Landing / Relay — Geist Sans + Serif".
 *
 * Primary: #2863fa base + white sheen gradient (16% -> 0), border black/10,
 * blue glow shadow + inset highlight. Radius 8.
 */
const buttonVariants = cva(
  "relative inline-flex cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap rounded-lg font-medium transition-[background-color,border-color,box-shadow,transform] duration-150 ease-out select-none active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground border border-black/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_1px_2px_rgba(40,99,250,0.24)] before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:bg-gradient-to-r before:from-white/16 before:to-transparent hover:brightness-[1.06]",
        secondary: "bg-[#e5e5e5] text-[#171717] hover:bg-[#dcdcdc]",
        soft: "bg-[#f5f5f5] text-[#171717] hover:bg-[#ececec]",
        outline: "border border-[#e5e5e5] bg-white text-[#09090b] hover:bg-[#fafafa]",
        ghost: "text-[#09090b] hover:bg-[#f5f5f5]",
        onColor:
          "bg-white text-[#2863fa] hover:bg-white/90",
      },
      size: {
        sm: "h-7 px-2.5 text-xs",
        md: "h-9 px-3 text-sm",
        lg: "h-9 px-3 text-sm",
        xl: "h-11 px-6 text-base font-semibold rounded-[10px]",
        full: "h-9 w-full px-3 text-sm",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      type="button"
      data-variant={variant}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
}

/** Small pill badge used across the design (status tags, counters). */
const badgeVariants = cva(
  "inline-flex items-center justify-center gap-0.5 whitespace-nowrap rounded-full px-2 font-medium",
  {
    variants: {
      variant: {
        neutral: "bg-[#f5f5f5] text-[#171717]",
        white: "bg-white text-[#09090b] border border-[#e5e5e5]",
        green: "bg-[#00bc7d]/20 text-[#004f3b]",
        purple: "bg-[#8e51ff]/20 text-[#4d179a]",
        amber: "bg-[#f0b100]/20 text-[#733e0a]",
        blue: "bg-[#2b7fff]/20 text-[#1c398e]",
      },
      size: {
        xs: "h-4 text-[10px]",
        sm: "h-5 text-xs",
        lg: "h-[22px] text-xs",
      },
    },
    defaultVariants: { variant: "neutral", size: "sm" },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, size }), className)} {...props} />
  )
}
