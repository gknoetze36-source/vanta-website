import type { LucideIcon } from "lucide-react";
import { ArrowRight, Info, MessageSquareText, ShieldCheck, Tag } from "lucide-react";
import { COMPANY } from "@/components/site-info";

const APPS: [label: string, href: string, Icon: LucideIcon][] = [
  ["About us", "/about/", Info],
  ["What we do", "/what-we-do/", MessageSquareText],
  ["Pricing", "/what-we-do/#pricing", Tag],
  ["Privacy & PAIA", "/privacy/", ShieldCheck]
];

// The outline squares from the company banner, drawn in the bottom corners (the right one is mirrored).
function Geometry({ side }: { side: "left" | "right" }) {
  return (
    <svg className={`home-geo ${side}`} viewBox="0 0 220 180" fill="none" strokeWidth="1.5" aria-hidden="true">
      <rect x="20" y="70" width="110" height="110" stroke="#0B8A8C" opacity=".35" />
      <rect x="95" y="40" width="70" height="70" stroke="#C8E33A" />
      <rect x="120" y="120" width="26" height="26" fill="#0B8A8C" stroke="none" opacity=".25" />
      <rect x="88" y="33" width="14" height="14" fill="#E0FF4F" stroke="none" />
    </svg>
  );
}

// Welcome screen: one viewport, the floating ghost, Get started, and four pages in a 2x2 grid.
export default function Home() {
  return (
    <main className="relative grid min-h-[100svh] grid-rows-[1fr_auto] overflow-hidden">
      <div className="flex flex-col items-center justify-center gap-3 px-5 pb-4 pt-8 text-center">
        <span className="hero-ghost" aria-hidden="true" />
        <span className="hero-ghost-shadow" aria-hidden="true" />
        <h1 className="font-heading text-[clamp(30px,4vw,44px)] font-bold tracking-[-0.02em]">Vanta Automations</h1>
        <p className="max-w-[40ch] text-base text-mute md:text-lg">
          Bookings, reminders and WhatsApp replies, handled for service businesses.
        </p>
        <a
          href={`mailto:${COMPANY.supportEmail}?subject=Get%20started%20with%20PHANTA`}
          className="mb-4 mt-2 inline-flex items-center gap-2 rounded-xl bg-ink px-6 py-3 font-medium text-white hover:bg-[#06392F]"
        >
          Get started <ArrowRight size={18} aria-hidden="true" />
        </a>
        <nav aria-label="Pages" className="grid grid-cols-[repeat(2,136px)] gap-x-[34px] gap-y-4">
          {APPS.map(([label, href, Icon]) => (
            <a key={label} href={href} className="group flex flex-col items-center gap-2 text-sm font-medium text-ink">
              <span className="grid h-16 w-16 place-items-center rounded-[18px] bg-ink transition-transform group-hover:-translate-y-[3px] md:h-[68px] md:w-[68px]">
                <Icon size={30} strokeWidth={1.75} color="#E0FF4F" aria-hidden="true" />
              </span>
              {label}
            </a>
          ))}
        </nav>
      </div>
      <Geometry side="left" />
      <Geometry side="right" />
      <div className="relative flex flex-col items-center gap-1.5 px-5 pb-[84px] text-center md:pb-5">
        <p className="home-tagline font-heading text-[15px] font-medium">Automate. Communicate. Grow.</p>
        <p className="text-xs text-mute">
          {COMPANY.name}, reg. {COMPANY.registration}
        </p>
      </div>
    </main>
  );
}
