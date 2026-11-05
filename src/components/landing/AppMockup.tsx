import {
  Activity,
  Bell,
  BookOpen,
  ChartColumn,
  ChartSpline,
  ChevronDown,
  ChevronsUpDown,
  Download,
  Eye,
  FileText,
  Filter,
  Info,
  LayoutDashboard,
  Repeat,
  Route,
  Search,
  Sparkles,
  UsersRound,
} from "lucide-react"
import chartPlot from "@/assets/chart-plot.svg"
import { Badge, Button } from "./primitives"

/* ---------------------------------- data ---------------------------------- */

type NavItem = {
  icon: typeof LayoutDashboard
  name: string
  active?: boolean
  count?: string
  badge?: string
}

const NAV_GROUPS: Array<{ label: string; items: NavItem[] }> = [
  {
    label: "Analytics",
    items: [
      { icon: LayoutDashboard, name: "Overview" },
      { icon: Repeat, name: "Retention", active: true },
      { icon: Filter, name: "Funnels" },
      { icon: Route, name: "Paths" },
    ],
  },
  {
    label: "Data",
    items: [
      { icon: Activity, name: "Live events" },
      { icon: UsersRound, name: "Cohorts", count: "12" },
      { icon: FileText, name: "Reports", badge: "Beta" },
    ],
  },
  {
    label: "Automation",
    items: [
      { icon: Bell, name: "Alerts", count: "3" },
      { icon: Sparkles, name: "Insights" },
    ],
  },
]

const LINE_TABS = ["Overview", "Retention", "Funnels", "Paths", "Cohorts", "Revenue"]

const CHANNEL_ROWS: Array<{
  rank: string
  dot: string
  name: string
  users: string
  w4: string
  sessions: string
  bold?: boolean
}> = [
  { rank: "1", dot: "#8fc6ff", name: "Referral", users: "3,210", w4: "74%", sessions: "9.1", bold: true },
  { rank: "2", dot: "#297eff", name: "Product Hunt", users: "1,884", w4: "68%", sessions: "7.4" },
  { rank: "3", dot: "#155dfc", name: "Organic search", users: "8,402", w4: "63%", sessions: "6.8" },
  { rank: "4", dot: "#1447e6", name: "Newsletter", users: "2,115", w4: "61%", sessions: "6.2" },
  { rank: "5", dot: "#193cb8", name: "Partners", users: "964", w4: "57%", sessions: "5.9" },
  { rank: "6", dot: "#737373", name: "Paid social", users: "5,730", w4: "42%", sessions: "3.7" },
  { rank: "7", dot: "#e5e5e5", name: "Direct", users: "2,507", w4: "39%", sessions: "3.1" },
  { rank: "8", dot: "#e5e5e5", name: "Webinars", users: "3,040", w4: "36%", sessions: "2.9" },
  { rank: "9", dot: "#e5e5e5", name: "Affiliates", users: "1,122", w4: "33%", sessions: "2.6" },
  { rank: "10", dot: "#e5e5e5", name: "Events", users: "688", w4: "29%", sessions: "2.2" },
]

const FILTER_BUTTONS_LEFT = ["All users", "Last 30 days", "Weekly"]
const FILTER_BUTTONS_RIGHT = ["All plans", "All countries"]

/* --------------------------------- sidebar --------------------------------- */

function Sidebar() {
  return (
    <aside className="hidden w-[236px] shrink-0 flex-col gap-4 border-r border-[#e5e5e5] bg-[#fafafa] p-3 md:flex">
      {/* Workspace switcher */}
      <button className="flex h-[42px] cursor-pointer items-center gap-2 rounded-lg bg-white pr-2 pl-2 text-left transition-colors hover:bg-white/70" type="button">
        <span className="flex size-6 items-center justify-center rounded-md bg-[#2863fa] text-xs font-semibold text-white">
          N
        </span>
        <span className="flex-1 text-sm font-medium text-[#09090b]">Northwind</span>
        <ChevronsUpDown className="size-3.5 text-[#737373]" />
      </button>

      {/* Segmented */}
      <div className="flex gap-0.5 rounded-lg bg-[#f5f5f5] p-[3px]">
        <span className="flex h-[30px] flex-1 items-center justify-center rounded-md bg-white px-2 text-sm font-medium text-[#09090b]">
          Dashboard
        </span>
        <span className="flex h-[30px] flex-1 items-center justify-center rounded-md px-2 text-sm font-medium text-[#737373]">
          Explore
        </span>
      </div>

      {/* Nav groups */}
      <nav className="flex flex-col gap-2">
        {NAV_GROUPS.map((group) => (
          <div key={group.label} className="flex flex-col gap-0.5">
            <span className="px-2 py-1 text-xs font-medium text-[#737373]">{group.label}</span>
            {group.items.map((item) => (
              <a
                key={item.name}
                href="#"
                className={
                  item.active
                    ? "flex h-8 items-center gap-2.5 rounded-md bg-[#f5f5f5] px-2 text-sm font-medium text-[#171717]"
                    : "flex h-8 items-center gap-2.5 rounded-md px-2 text-sm text-[#0a0a0a] transition-colors hover:bg-[#f0f0f0]"
                }
              >
                <item.icon
                  className={`size-4 ${item.active ? "text-[#171717]" : "text-[#737373]"}`}
                  strokeWidth={2}
                />
                <span className="flex-1">{item.name}</span>
                {item.count ? (
                  <span className="text-xs font-medium text-[#09090b]">{item.count}</span>
                ) : null}
                {item.badge ? <Badge variant="blue" size="xs">{item.badge}</Badge> : null}
              </a>
            ))}
          </div>
        ))}
      </nav>

      <div className="flex-1" />

      {/* Docs */}
      <a
        href="#"
        className="flex h-8 items-center gap-2.5 rounded-md px-2 text-sm text-[#0a0a0a] transition-colors hover:bg-[#f0f0f0]"
      >
        <BookOpen className="size-4 text-[#737373]" />
        <span className="flex-1">Docs</span>
      </a>

      {/* User */}
      <button className="flex cursor-pointer items-center gap-2.5 rounded-lg bg-white py-2 pr-2 pl-2.5 text-left" type="button">
        <span className="flex size-7 items-center justify-center rounded-full bg-[#2863fa] text-[10px] font-semibold text-white">
          AS
        </span>
        <span className="flex flex-1 flex-col">
          <span className="text-sm font-medium text-[#09090b]">Alex Smith</span>
          <span className="text-xs text-[#737373]">alex@northwind.io</span>
        </span>
        <ChevronsUpDown className="size-3.5 text-[#737373]" />
      </button>
    </aside>
  )
}

/* ------------------------------ retention card ----------------------------- */

function RetentionCard() {
  return (
    <div className="flex min-w-0 flex-1 flex-col rounded-[10px] border border-[#e5e5e5] bg-white">
      {/* Header */}
      <div className="flex h-[47px] items-center gap-2 border-b border-[#e5e5e5] px-3.5 py-2.5">
        <Eye className="size-[15px] text-[#737373]" />
        <span className="text-sm font-medium text-[#09090b]">Retention</span>
        <Info className="size-[13px] text-[#737373]" />
        <span className="truncate text-sm text-[#737373]">· Users who return in week 4</span>
        <span className="ml-auto flex shrink-0 gap-0.5 rounded-md bg-[#f5f5f5] p-0.5">
          <span className="flex h-[22px] w-6 items-center justify-center rounded bg-white">
            <ChartSpline className="size-[13px] text-[#171717]" />
          </span>
          <span className="flex h-[22px] w-6 items-center justify-center rounded">
            <ChartColumn className="size-[13px] text-[#737373]" />
          </span>
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-3 px-4 pt-4 pb-2">
        <div className="flex flex-col gap-0.5">
          <span className="text-sm text-[#737373]">Week-4 retention</span>
          <span className="flex items-baseline gap-2">
            <span className="text-[30px] leading-[30px] font-semibold tracking-[-0.01em] text-[#09090b]">61.0%</span>
            <span className="text-base font-medium text-[#00bc7d]">+4.7%</span>
          </span>
        </div>
        <img src={chartPlot} alt="Week-4 retention chart" className="w-full" />
      </div>

      {/* Footer */}
      <div className="flex items-center gap-2 border-t border-[#e5e5e5] bg-[#f5f5f5]/50 px-3.5 py-2.5">
        <span className="text-xs text-[#737373]">Showing data for 7 weeks</span>
        <Badge variant="green" size="xs">+4.7%</Badge>
        <span className="flex-1" />
        <span className="flex h-3.5 w-6 items-center justify-end rounded-full bg-[#2863fa] p-px">
          <span className="size-3 rounded-full bg-white" />
        </span>
        <span className="text-xs font-medium text-[#09090b]">Compare previous period</span>
      </div>
    </div>
  )
}

/* --------------------------- top channels card ----------------------------- */

function TopChannelsCard() {
  return (
    <div className="flex min-w-0 flex-1 flex-col rounded-[10px] border border-[#e5e5e5] bg-white">
      {/* Header */}
      <div className="flex h-[47px] items-center gap-2 border-b border-[#e5e5e5] px-3.5 py-2.5">
        <ChartColumn className="size-[15px] text-[#737373]" />
        <span className="text-sm font-medium text-[#09090b]">Top channels</span>
        <Info className="size-[13px] text-[#737373]" />
        <span className="truncate text-sm text-[#737373]">· By week-4 retention</span>
      </div>

      {/* Table */}
      <div className="grid grid-cols-[36px_minmax(0,1fr)_64px_64px_64px] gap-2 bg-[#f5f5f5]/50 px-3 py-2 text-xs font-medium text-[#737373]">
        <span>#</span>
        <span>Channel</span>
        <span className="text-right">Users</span>
        <span className="text-right">W4</span>
        <span className="text-right">Sessions</span>
      </div>
      {CHANNEL_ROWS.map((row, i) => (
        <div
          key={row.rank}
          className={`grid h-10 grid-cols-[36px_minmax(0,1fr)_64px_64px_64px] items-center gap-2 px-3 text-sm ${
            i % 2 === 1 ? "bg-[#f5f5f5]/50" : ""
          }`}
        >
          <span className="text-[#737373]">{row.rank}</span>
          <span className="flex min-w-0 items-center gap-2">
            <span
              className="size-2 shrink-0 rounded-full"
              style={{ backgroundColor: row.dot }}
            />
            <span
              className={`truncate ${row.bold ? "font-medium" : ""} text-[#09090b]`}
            >
              {row.name}
            </span>
          </span>
          <span className="text-right text-[#09090b]">{row.users}</span>
          <span className="text-right text-[#09090b]">{row.w4}</span>
          <span className="text-right text-[#09090b]">{row.sessions}</span>
        </div>
      ))}
    </div>
  )
}

/* ---------------------------------- main ----------------------------------- */

function MainPanel() {
  return (
    <div className="flex min-w-0 flex-1 flex-col">
      {/* Top bar */}
      <div className="flex h-[55px] items-center justify-between gap-4 border-b border-[#e5e5e5] px-5 py-2.5">
        <div className="flex h-[34px] w-[260px] max-w-full items-center gap-2 rounded-lg border border-[#e5e5e5] px-2.5 py-1.5">
          <Search className="size-3.5 shrink-0 text-[#737373]" />
          <span className="flex-1 truncate text-sm text-[#737373]">Search anything…</span>
          <span className="flex h-5 shrink-0 items-center rounded-md bg-[#f5f5f5] px-1 text-xs font-medium text-[#737373]">
            ⌘K
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            Share
          </Button>
          <Button variant="primary" size="sm">
            Export
            <Download className="size-3.5" />
          </Button>
        </div>
      </div>

      {/* Line tabs */}
      <div className="flex items-center gap-5 border-b border-[#e5e5e5] px-5">
        {LINE_TABS.map((tab) =>
          tab === "Retention" ? (
            <span
              key={tab}
              className="-mb-px border-b-[1.5px] border-[#2863fa] pt-3 pb-2.5 text-sm font-medium text-[#09090b]"
            >
              {tab}
            </span>
          ) : (
            <span key={tab} className="pt-3 pb-2.5 text-sm font-medium text-[#737373]">
              {tab}
            </span>
          )
        )}
      </div>

      {/* Filters */}
      <div className="flex items-center justify-between gap-4 px-5 py-3">
        <div className="flex items-center gap-2">
          {FILTER_BUTTONS_LEFT.map((label) => (
            <Button key={label} variant="outline" size="sm" className="px-2.5">
              {label}
              <ChevronDown className="size-3.5" />
            </Button>
          ))}
        </div>
        <div className="hidden items-center gap-2 sm:flex">
          {FILTER_BUTTONS_RIGHT.map((label) => (
            <Button key={label} variant="outline" size="sm" className="px-2.5">
              {label}
              <ChevronDown className="size-3.5" />
            </Button>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-3 px-5 pb-5 sm:flex-row">
        <div className="flex min-w-0 flex-[492] flex-col sm:basis-0">
          <RetentionCard />
        </div>
        <div className="flex min-w-0 flex-[400] flex-col sm:basis-0">
          <TopChannelsCard />
        </div>
      </div>
    </div>
  )
}

/* --------------------------------- exports --------------------------------- */

export function AppMockup() {
  return (
    <div className="rounded-2xl border border-[#e5e5e5] bg-white/80 p-2">
      <div className="flex overflow-hidden rounded-lg border border-[#e5e5e5] bg-white">
        <Sidebar />
        <MainPanel />
      </div>
    </div>
  )
}
