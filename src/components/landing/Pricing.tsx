import { Check, ChevronRight } from "lucide-react"
import pricingPattern from "@/assets/pricing-pattern.svg"
import { Badge, Button } from "./primitives"
import { Container } from "./Guides"

const PLANS = [
  {
    name: "Starter",
    desc: "For side projects and early teams.",
    price: "$0",
    per: "/month",
    cta: "Start for free",
    variant: "soft" as const,
    features: ["10k events per month", "Funnels and retention", "7-day data history"],
  },
  {
    name: "Growth",
    desc: "For teams that ship every week.",
    price: "$49",
    per: "/month",
    cta: "Start free trial",
    variant: "primary" as const,
    popular: true,
    features: [
      "1M events per month",
      "Everything in Starter",
      "Alerts and live events",
      "12-month data history",
    ],
  },
  {
    name: "Scale",
    desc: "For companies with large data needs.",
    price: "Custom",
    per: null,
    cta: "Contact sales",
    variant: "soft" as const,
    withChevron: true,
    features: [
      "Unlimited events",
      "Everything in Growth",
      "Warehouse sync",
      "SSO and audit logs",
    ],
  },
]

export function Pricing() {
  return (
    <section className="relative overflow-hidden border-b border-[#e5e5e5] bg-[#f5f5f5] py-24">
      <img
        src={pricingPattern}
        alt=""
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 w-[1440px] max-w-none -translate-x-1/2"
      />
      <Container className="relative flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="text-sm font-medium text-[#737373]">Pricing</span>
          <h2 className="font-serif text-[32px] leading-[1.15] font-normal tracking-[-0.015em] text-[#09090b] sm:text-[40px] lg:text-5xl lg:leading-14">
            Start free. Pay as you grow.
          </h2>
          <p className="text-base leading-6 text-[#737373]">
            All plans include unlimited seats and dashboards.
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col gap-6 rounded-xl border bg-white p-7 ${
                plan.popular ? "border-[#2863fa]" : "border-[#e5e5e5]"
              }`}
            >
              {/* Name + desc */}
              <div className="flex flex-col gap-2">
                <div className="flex h-6 items-center justify-between">
                  <span className="text-base font-semibold text-[#09090b]">{plan.name}</span>
                  {plan.popular ? <Badge>Most popular</Badge> : null}
                </div>
                <span className="text-sm text-[#737373]">{plan.desc}</span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-1">
                <span className="text-4xl leading-9 font-semibold text-[#09090b]">
                  {plan.price}
                </span>
                {plan.per ? <span className="text-sm text-[#737373]">{plan.per}</span> : null}
              </div>

              {/* CTA */}
              <Button variant={plan.variant} size="full">
                {plan.cta}
                {plan.withChevron ? <ChevronRight className="size-4" /> : null}
              </Button>

              {/* Features */}
              <div className="flex flex-col gap-2.5 border-t border-[#e5e5e5] pt-6">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-sm text-[#09090b]">
                    <Check className="size-4 shrink-0 text-[#09090b]" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
