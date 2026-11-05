import { ArrowRight } from "lucide-react"
import ctaPattern from "@/assets/cta-pattern.svg"
import { Button } from "./primitives"

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-[#2863fa]">
      {/* Circuit pattern + light gradient (exported from Figma) */}
      <img
        src={ctaPattern}
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />

      <div className="relative flex flex-col items-center px-6 pt-[80px] pb-[96px] text-center sm:pt-[120px] sm:pb-[150px]">
        <div className="flex w-full max-w-[540px] flex-col items-center gap-5">
          <h2 className="font-serif text-[32px] leading-[1.15] font-normal text-white sm:text-[40px] lg:text-5xl lg:leading-14">
            Start finding answers
            <br />
            in ten minutes
          </h2>
          <p className="text-base leading-7 text-white/70 sm:text-lg">
            Connect your first source, invite your team, and see week-4
            retention before lunch. Free for 14 days.
          </p>
          <span className="h-5" />
          <div className="rounded-2xl border border-white/30 bg-white/20 p-1.5">
            <Button variant="onColor" size="xl">
              Start free trial
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
