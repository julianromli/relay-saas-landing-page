import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

/**
 * Vertical guide lines running along the 1200px content container's edges,
 * as drawn in the Figma frame (Guides layers).
 */
export function Guides({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-y-0 left-1/2 hidden w-[1200px] -translate-x-1/2 border-l border-r border-[#e5e5e5] min-[1248px]:block",
        className
      )}
    />
  )
}

export function Container({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-[1200px] px-6 min-[1248px]:px-0",
        className
      )}
    >
      {children}
    </div>
  )
}
