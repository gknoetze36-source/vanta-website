import type { LucideIcon } from "lucide-react";
import { Info, LogIn, MessageSquareText, Rocket, ShieldCheck, Tag } from "lucide-react";
import { COMPANY, LINKS } from "@/components/site-info";

const APPS: [label: string, href: string, Icon: LucideIcon, highlight?: boolean][] = [
  ["About us", "/about/", Info],
  ["What we do", "/what-we-do/", MessageSquareText],
  ["Pricing", "/what-we-do/#pricing", Tag],
  ["Get started", `mailto:${COMPANY.supportEmail}?subject=Get%20started%20with%20PHANTA`, Rocket, true],
  ["Privacy & PAIA", "/privacy/", ShieldCheck],
  ["Log in", LINKS.login, LogIn]
];

// Welcome screen: one viewport, light, the floating ghost and six app-style buttons.
export default function Home() {
  return (
    <main className="flex min-h-[100svh] flex-col items-center justify-center gap-3 px-5 py-8 text-center">
      <span className="hero-ghost" aria-hidden="true" />
      <span className="hero-ghost-shadow" aria-hidden="true" />
      <h1 className="font-heading text-[clamp(30px,4vw,44px)] font-bold tracking-[-0.02em]">Vanta Automations</h1>
      <p className="mb-6 max-w-[40ch] text-base text-[#4A5F5B] md:text-lg">
        Bookings, reminders and WhatsApp replies, handled for service businesses.
      </p>
      <nav aria-label="Pages" className="grid grid-cols-[repeat(3,92px)] gap-x-3.5 gap-y-[18px] md:grid-cols-[repeat(6,104px)] md:gap-x-[18px] md:gap-y-[22px]">
        {APPS.map(([label, href, Icon, highlight]) => (
          <a key={label} href={href} className="app-tile group flex flex-col items-center gap-2 text-sm font-medium">
            <span className={`grid h-16 w-16 place-items-center rounded-[18px] transition-transform group-hover:-translate-y-[3px] md:h-[72px] md:w-[72px] ${highlight ? "bg-[#E0FF4F]" : "bg-[#00272B]"}`}>
              <Icon size={32} strokeWidth={1.75} color={highlight ? "#00272B" : "#E0FF4F"} aria-hidden="true" />
            </span>
            {label}
          </a>
        ))}
      </nav>
      <p className="mt-5 text-xs text-[#4A5F5B] md:mt-9">
        {COMPANY.name}, reg. {COMPANY.registration}, {COMPANY.address}
      </p>
    </main>
  );
}
