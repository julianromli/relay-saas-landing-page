import { ChartNoAxesCombined } from "lucide-react"
import { Button } from "./primitives"

const NAV_LINKS = ["Product", "Customers", "Pricing", "Docs", "Changelog"]

export function SiteHeader() {
  return (
    <header className="border-b border-[#e5e5e5] bg-[#f5f5f5]">
      <div className="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between px-6 min-[1248px]:px-0">
        {/* Brand */}
        <a href="#" className="flex items-center gap-2">
          <span className="flex size-6 items-center justify-center rounded-md bg-[#2863fa]">
            <ChartNoAxesCombined className="size-3.5 text-white" strokeWidth={2.4} />
          </span>
          <span className="text-base font-semibold tracking-tight text-[#09090b]">
            Relay
          </span>
        </a>

        {/* Links */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm font-medium leading-5 text-[#737373] transition-colors duration-150 hover:text-[#09090b]"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm">
            Sign in
          </Button>
          <Button variant="primary" size="sm">
            Get started
          </Button>
        </div>
      </div>
    </header>
  )
}
