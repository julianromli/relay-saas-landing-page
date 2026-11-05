import { SiteHeader } from "@/components/landing/SiteHeader"
import { Hero } from "@/components/landing/Hero"
import { SocialProof } from "@/components/landing/SocialProof"
import { Features } from "@/components/landing/Features"
import { Pricing } from "@/components/landing/Pricing"
import { FinalCta } from "@/components/landing/FinalCta"
import { SiteFooter } from "@/components/landing/SiteFooter"

export function App() {
  return (
    <div className="min-h-svh bg-white text-[#09090b] antialiased">
      <SiteHeader />
      <main>
        <Hero />
        <SocialProof />
        <Features />
        <Pricing />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  )
}

export default App
