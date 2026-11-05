import { ChartNoAxesCombined } from "lucide-react"
import { Container, Guides } from "./Guides"

const COLUMNS = [
  {
    head: "Product",
    links: ["Funnels", "Retention", "Live events", "Pricing"],
  },
  {
    head: "Resources",
    links: ["Docs", "Changelog", "Guides", "Status"],
  },
  {
    head: "Company",
    links: ["About", "Customers", "Careers", "Contact"],
  },
]

export function SiteFooter() {
  return (
    <footer className="relative bg-white pt-14 pb-10">
      <Guides />
      <Container className="flex flex-col gap-12">
        {/* Top */}
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <a href="#" className="flex items-center gap-2">
              <span className="flex size-6 items-center justify-center rounded-md bg-[#2863fa]">
                <ChartNoAxesCombined className="size-3.5 text-white" strokeWidth={2.4} />
              </span>
              <span className="text-base font-semibold tracking-tight text-[#09090b]">
                Relay
              </span>
            </a>
            <p className="max-w-[284px] text-sm leading-5 text-[#737373]">
              Product analytics your whole team can read.
            </p>
          </div>

          {/* Link columns */}
          <div className="flex flex-wrap gap-x-16 gap-y-8 md:gap-x-20 lg:gap-20">
            {COLUMNS.map((col) => (
              <div key={col.head} className="flex flex-col gap-3">
                <span className="text-sm font-semibold text-[#09090b]">{col.head}</span>
                {col.links.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-sm leading-5 text-[#737373] transition-colors duration-150 hover:text-[#09090b]"
                  >
                    {link}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col justify-between gap-4 border-t border-[#e5e5e5] pt-6 sm:flex-row">
          <span className="text-sm leading-5 text-[#737373]">© 2026 Relay Inc.</span>
          <div className="flex gap-6">
            <a href="#" className="text-sm leading-5 text-[#737373] transition-colors hover:text-[#09090b]">
              Privacy
            </a>
            <a href="#" className="text-sm leading-5 text-[#737373] transition-colors hover:text-[#09090b]">
              Terms
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
