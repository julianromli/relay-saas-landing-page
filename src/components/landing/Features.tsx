import { useState } from "react"
import { Check, ChevronRight, X } from "lucide-react"
import texture1 from "@/assets/texture-1.jpg"
import texture2 from "@/assets/texture-2.jpg"
import texture3 from "@/assets/texture-3.jpg"
import { Container, Guides } from "./Guides"
import { Badge } from "./primitives"

const TABS = ["Analyze", "Retain", "Automate"]

/* ---------------------------- card sub-elements ---------------------------- */

const cardShadow =
  "shadow-[0_4px_6px_-4px_rgba(0,0,0,0.1),0_10px_15px_-3px_rgba(0,0,0,0.1)]"

function Illustration({
  texture,
  children,
}: {
  texture: string
  children: React.ReactNode
}) {
  return (
    <div className="relative h-[400px] overflow-hidden rounded-2xl">
      <img
        src={texture}
        alt=""
        aria-hidden
        className="absolute inset-0 size-full object-cover"
      />
      {children}
    </div>
  )
}

function UserCard() {
  return (
    <div
      className={`absolute top-14 left-1/2 w-[304px] max-w-[calc(100%-32px)] -translate-x-1/2 rounded-[10px] bg-white p-4 ${cardShadow}`}
    >
      <div className="flex items-center gap-3.5">
        <span className="flex size-11 items-center justify-center rounded-lg bg-[#f5f5f5] text-sm font-semibold text-[#737373]">
          MC
        </span>
        <span className="flex flex-col gap-0.5">
          <span className="text-base font-semibold text-[#09090b]">Maya Chen</span>
          <span className="text-sm text-[#737373]">Signed up 3 days ago</span>
        </span>
      </div>
    </div>
  )
}

function StepRow({
  label,
  done,
}: {
  label: string
  done?: boolean
}) {
  return (
    <div className="flex items-center gap-3">
      {done ? (
        <span className="flex size-[22px] shrink-0 items-center justify-center rounded-full bg-[#00bc7d]">
          <Check className="size-[13px] text-[#004f3b]" strokeWidth={2.5} />
        </span>
      ) : (
        <span className="size-[22px] shrink-0 rounded-full bg-[#f5f5f5]" />
      )}
      <span
        className={`text-sm leading-5 ${done ? "font-medium text-[#09090b]" : "text-[#737373]"}`}
      >
        {label}
      </span>
    </div>
  )
}

function Connector({ dashed }: { dashed?: boolean }) {
  return (
    <div className="ml-1 flex w-[11px] justify-center py-0.5">
      {dashed ? (
        <span className="h-[14px] border-l border-dashed border-[#e5e5e5]" />
      ) : (
        <span className="h-[14px] w-px bg-[#00bc7d]" />
      )}
    </div>
  )
}

function StepsCard() {
  return (
    <div
      className={`absolute top-[146px] left-1/2 w-[304px] max-w-[calc(100%-32px)] -translate-x-1/2 rounded-[10px] bg-white p-5 ${cardShadow}`}
    >
      <div className="flex flex-col gap-0.5">
        <StepRow label="Signed up" done />
        <Connector />
        <StepRow label="Connected a source" done />
        <Connector dashed />
        <StepRow label="Built first chart" />
        <Connector dashed />
        <StepRow label="Invited a teammate" />
      </div>
    </div>
  )
}

const STREAM_ROWS: Array<{
  id: string
  user: string
  badge: string
  variant: "green" | "purple" | "amber" | "blue"
}> = [
  { id: "u_16398", user: "Saugat Y.", badge: "Activated", variant: "green" },
  { id: "u_16308", user: "Jake J.", badge: "Trial", variant: "purple" },
  { id: "u_17303", user: "Mike W.", badge: "At risk", variant: "amber" },
  { id: "u_16258", user: "Phil H.", badge: "Upgraded", variant: "blue" },
  { id: "u_16678", user: "Ben K.", badge: "Activated", variant: "green" },
  { id: "u_16912", user: "Lena O.", badge: "Trial", variant: "purple" },
  { id: "u_17045", user: "Tom R.", badge: "At risk", variant: "amber" },
]

function StreamTable() {
  return (
    <div
      className={`absolute top-14 left-8 w-[420px] max-w-none bg-white px-6 pt-4 pb-2 ${cardShadow}`}
    >
      <div className="grid grid-cols-[76px_52px_100px_96px] gap-4 border-b border-[#e5e5e5] pb-3 text-xs font-medium tracking-[0.06em] text-[#737373]">
        <span>USER ID</span>
        <span>TIME</span>
        <span>USER</span>
        <span>STATUS</span>
      </div>
      {STREAM_ROWS.map((row) => (
        <div
          key={row.id}
          className="grid h-[49px] grid-cols-[76px_52px_100px_96px] items-center gap-4 border-b border-[#e5e5e5]"
        >
          <span className="truncate text-sm text-[#09090b]">{row.id}</span>
          <span>
            <span className="block h-1.5 w-9 rounded-[3px] bg-[#f5f5f5]" />
          </span>
          <span className="truncate text-sm text-[#09090b]">{row.user}</span>
          <span className="truncate">
            <Badge variant={row.variant}>{row.badge}</Badge>
          </span>
        </div>
      ))}
    </div>
  )
}

function RuleCard() {
  return (
    <div
      className={`absolute top-[58px] left-1/2 w-[304px] max-w-[calc(100%-32px)] -translate-x-1/2 rounded-[10px] bg-white p-6 ${cardShadow}`}
    >
      <div className="border-b border-[#e5e5e5] pb-3.5">
        <span className="text-lg font-semibold text-[#09090b]">Alert #1</span>
      </div>
      <div className="flex flex-wrap items-center gap-2 py-4 text-sm leading-5 text-[#737373]">
        <span>If</span>
        <Badge variant="purple" size="lg">week-4 retention</Badge>
        <span>drops below</span>
        <Badge variant="green" size="lg">55%</Badge>
        <span>and</span>
        <Badge variant="purple" size="lg">plan</Badge>
        <span>equals</span>
        <Badge variant="green" size="lg">Growth</Badge>
        <span>then</span>
        <Badge variant="purple" size="lg">notify</Badge>
      </div>
      <div className="flex flex-col gap-2 pt-1">
        <span className="text-sm font-medium text-[#09090b]">Send to</span>
        <div className="flex h-[42px] items-center rounded-lg border border-[#e5e5e5] bg-white p-1.5">
          <span className="flex items-center gap-1.5 rounded-md bg-[#f5f5f5] px-2 py-1 text-sm font-medium text-[#171717]">
            #product-team
            <X className="size-3 text-[#737373]" />
          </span>
        </div>
      </div>
    </div>
  )
}

function LearnMore() {
  return (
    <a href="#" className="group flex items-center gap-2 pt-3 text-base font-medium text-[#09090b]">
      Learn more
      <span className="flex size-5 items-center justify-center rounded-full bg-[#2863fa] transition-transform duration-150 group-hover:translate-x-0.5">
        <ChevronRight className="size-3 text-white" strokeWidth={2.5} />
      </span>
    </a>
  )
}

/* --------------------------------- section --------------------------------- */

const FEATURES = [
  {
    title: "Activation tracking",
    copy: "See where each user is on the path to their first insight, and who needs a nudge.",
    texture: texture1,
    illustration: (
      <>
        <UserCard />
        <StepsCard />
      </>
    ),
  },
  {
    title: "Live user stream",
    copy: "Watch every signup, upgrade, and cancellation the moment it happens.",
    texture: texture2,
    illustration: <StreamTable />,
  },
  {
    title: "Smart alerts",
    copy: "Set a rule once. Relay posts to Slack when a metric moves past your limit.",
    texture: texture3,
    illustration: <RuleCard />,
  },
]

export function Features() {
  const [activeTab, setActiveTab] = useState(TABS[0])

  return (
    <section className="relative border-b border-[#e5e5e5] bg-white py-24">
      <Guides />
      <Container className="flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="font-serif text-[32px] leading-[1.15] font-normal tracking-[-0.015em] text-[#09090b] sm:text-[40px] lg:text-5xl lg:leading-14">
            Every answer, one click away
          </h2>
          <p className="max-w-[600px] text-base leading-7 text-[#737373] sm:text-lg sm:leading-7">
            Relay tracks the full user path, from first visit to paid plan. Your
            team asks a question and gets a chart, not a ticket.
          </p>
        </div>

        {/* Tabs */}
        <div className="mx-auto flex gap-1 rounded-full border border-[#e5e5e5] bg-white p-1">
          {TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`h-9 cursor-pointer rounded-full px-5 text-sm font-medium transition-colors duration-150 ${
                activeTab === tab
                  ? "bg-[#2863fa] text-white"
                  : "text-[#09090b] hover:bg-[#f5f5f5]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {FEATURES.map((feature) => (
            <div key={feature.title} className="flex flex-col">
              <Illustration texture={feature.texture}>
                {feature.illustration}
              </Illustration>
              <div className="flex flex-col gap-2 pt-6">
                <h3 className="text-xl font-semibold tracking-[-0.01em] text-[#09090b]">
                  {feature.title}
                </h3>
                <p className="text-base leading-6 text-[#737373]">{feature.copy}</p>
                <LearnMore />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
