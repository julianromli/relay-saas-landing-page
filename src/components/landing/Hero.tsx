import { ArrowRight } from "lucide-react"
import { DialRoot, useDialKit } from "dialkit"
import "dialkit/styles.css"
import { AppMockup } from "./AppMockup"
import { HeroPattern } from "./HeroPattern"
import { Badge, Button } from "./primitives"

export function Hero() {
  const pattern = useDialKit(
    "Hero pattern",
    {
      speed: [1, 0.2, 3, 0.05],
      shimmer: [0.45, 0, 1, 0.01],
      glow: [0.7, 0, 1, 0.01],
      packets: [3, 0, 8, 1],
      drift: false,
      accent: "#2863fa",
      pause: false,
    },
    { id: "hero-pattern", persist: true, defaultCollapsed: true }
  )

  return (
    <section className="relative overflow-hidden border-b border-[#e5e5e5] bg-[#f5f5f5]">
      {/* Decorative grid + network pattern (exported from Figma, now live) */}
      <HeroPattern
        speed={pattern.speed}
        shimmer={pattern.shimmer}
        glow={pattern.glow}
        packets={pattern.packets}
        drift={pattern.drift}
        accent={pattern.accent}
        paused={pattern.pause}
        className="absolute top-0 left-1/2 w-[1440px] max-w-none -translate-x-1/2"
      />
      <DialRoot position="bottom-right" theme="dark" />

      <div className="relative mx-auto flex w-full max-w-[1200px] flex-col items-center gap-14 px-6 pt-24 min-[1248px]:px-0">
        {/* Copy */}
        <div className="flex w-full max-w-[688px] flex-col items-center gap-6 text-center">
          <a href="#" className="group">
            <Badge variant="white" className="h-[22px] gap-1 pr-1.5 pl-2">
              Funnels 2.0 is live
              <ArrowRight className="size-3 transition-transform duration-150 group-hover:translate-x-0.5" />
            </Badge>
          </a>

          <h1 className="font-serif text-[40px] leading-[1.1] font-normal tracking-[-0.015em] text-[#09090b] sm:text-[48px] lg:text-[60px]">
            Product analytics
            <br />
            your whole team can read
          </h1>

          <p className="max-w-[560px] text-base leading-7 text-[#737373] sm:text-lg">
            Relay turns raw events into clear answers about activation, retention,
            and revenue. Set it up in ten minutes. No SQL needed.
          </p>

          <div className="flex items-center gap-3 pt-2">
            <Button variant="primary" size="lg">
              Start free trial
              <ArrowRight className="size-4" />
            </Button>
            <Button variant="secondary" size="lg">
              Book a demo
            </Button>
          </div>

          <p className="text-sm text-[#737373]">Free for 14 days · No credit card</p>
        </div>

        {/* Product mockup */}
        <div className="w-full">
          <AppMockup />
        </div>
      </div>
    </section>
  )
}
