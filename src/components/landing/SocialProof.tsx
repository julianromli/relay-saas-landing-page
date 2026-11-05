import logo1 from "@/assets/logos/logo-1.svg"
import logo2 from "@/assets/logos/logo-2.svg"
import logo3 from "@/assets/logos/logo-3.png"
import logo4 from "@/assets/logos/logo-4.svg"
import logo5 from "@/assets/logos/logo-5.svg"
import { Container, Guides } from "./Guides"

const LOGOS = [
  { src: logo1, alt: "Logoipsum 1", height: 28 },
  { src: logo2, alt: "Logoipsum 2", height: 28 },
  { src: logo3, alt: "Logoipsum 5", height: 28 },
  { src: logo4, alt: "Logoipsum 3", height: 28 },
  { src: logo5, alt: "Logoipsum 4", height: 34 },
]

export function SocialProof() {
  return (
    <section className="relative border-b border-[#e5e5e5] py-14">
      <Guides />
      <Container className="flex flex-col items-center gap-6">
        <p className="text-sm font-medium text-[#737373]">
          Trusted by 2,000+ product teams
        </p>
        <div className="flex w-full flex-wrap items-center justify-center gap-x-12 gap-y-4 px-2 min-[900px]:flex-nowrap min-[900px]:justify-between md:px-10">
          {LOGOS.map((logo) => (
            <img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              style={{ height: logo.height }}
              className="w-auto"
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
