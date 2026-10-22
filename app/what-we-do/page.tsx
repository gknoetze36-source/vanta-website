import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import { BellRing, Bot, CalendarCheck, Check, ClipboardList, FileText, MessageCircle } from "lucide-react";
import { ContentPage, Section } from "@/components/content-page";
import { COMPANY, LINKS } from "@/components/site-info";

export const metadata: Metadata = {
  title: "What we do | Vanta Automations",
  description: "Bookings, WhatsApp replies, reminders, specials and ads for service businesses."
};

const features: [LucideIcon, string, string][] = [
  [CalendarCheck, "Online booking system", "Let customers book services online, with availability, service selection, and confirmations handled automatically."],
  [Bot, "AI-powered receptionist", "Answer common customer questions, capture booking details, and qualify leads without a human on the phone."],
  [MessageCircle, "WhatsApp communication", "Send confirmations, reminders, and updates through the channel customers actually check."],
  [BellRing, "Service reminders", "Automated reminders based on each customer's service history, so nothing falls through the cracks."],
  [ClipboardList, "Customer & service records", "Complete customer records with full service history in one place."],
  [FileText, "Quotation & job management", "Create quotes, track jobs, and manage work from intake to completion."]
];

const included = [
  ["Lead capture & follow-up", "Automatically capture new leads and follow up before they go cold."],
  ["Multi-branch & franchise support", "Run multiple locations or franchise operations from one connected system."],
  ["Team & user management", "Control who has access to what, across every branch and role."],
  ["Business analytics & reporting", "See bookings, jobs, and performance clearly, without digging through spreadsheets."],
  ["Secure cloud storage", "Business and customer data stored securely, accessible from anywhere."],
  ["Billing & subscription management", "Manage billing and subscriptions for your business without manual admin."]
];

const steps = [
  ["Email us", "Tell us your business name and town. We set up your account."],
  ["Connect", "Link WhatsApp, Facebook and Google with guides that show every screen."],
  ["Let it run", "Bookings and replies come in, and the results page shows what worked."]
];

const plans = [
  ["Essential", "For small teams that need automated bookings, reminders, and cleaner customer communication."],
  ["Growth", "For growing businesses ready to connect communication, workflow routing, and operational recovery."],
  ["Advanced Automation", "For operators that need tailored automations, deeper reporting, priority setup, and future modules."]
];

const faqs = [
  ["Who is Vanta Automations built for?", "Vanta Automations is built for service businesses, starting with automotive workshops, that want to reduce admin and automate day-to-day operations."],
  ["Does this replace my current tools?", "It can sit above existing booking, messaging, and payment tools first, then consolidate more workflow logic over time."],
  ["Can it support multiple branches?", "Yes. Multi-branch and franchise support is built in, with team and user management across locations."],
  ["What does the AI receptionist actually do?", "It handles common customer questions and captures booking details automatically, reducing missed calls and manual admin."]
];

export default function WhatWeDoPage() {
  return (
    <ContentPage
      title="What we do"
      intro="We automate customer communication, business operations, and workflow management so clients can focus on the work instead of managing paperwork — reducing missed bookings, improving customer experience, and helping businesses scale efficiently."
    >
      <Section id="solutions" title="What PHANTA does">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(([Icon, title, body]) => (
            <article key={title} className="card">
              <span className="icon-tile"><Icon size={22} strokeWidth={1.75} aria-hidden="true" /></span>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-1 leading-7 text-mute">{body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Also included">
        <ul className="grid gap-x-10 gap-y-5 sm:grid-cols-2">
          {included.map(([title, body]) => (
            <li key={title} className="flex gap-3">
              <Check size={20} strokeWidth={2} className="mt-1 shrink-0 text-ink" aria-hidden="true" />
              <div><p className="font-semibold">{title}</p><p className="leading-7 text-mute">{body}</p></div>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="start" title="How you start">
        <ol className="grid gap-4 md:grid-cols-3">
          {steps.map(([title, body], i) => (
            <li key={title} className="card">
              <span className="inline-grid h-8 w-8 place-items-center rounded-lg bg-chartreuse font-bold">{i + 1}</span>
              <h3 className="mt-3 text-lg font-semibold">{title}</h3>
              <p className="mt-1 leading-7 text-mute">{body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="pricing" title="Plans">
        <div className="grid gap-4 md:grid-cols-3">
          {plans.map(([name, body]) => (
            <article key={name} className="card">
              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="mt-2 leading-7 text-mute">{body}</p>
              <p className="mt-4 text-sm font-medium">Custom setup</p>
            </article>
          ))}
        </div>
        <p className="mt-5 max-w-[65ch] leading-7 text-mute">
          One monthly subscription for your size, billed every 30 days, cancel on 30 days&apos; notice. Ads are optional and paid straight to Meta or Google from your own card.
        </p>
      </Section>

      <Section title="Questions">
        <dl className="grid gap-6 md:grid-cols-2">
          {faqs.map(([q, a]) => (
            <div key={q}><dt className="font-semibold">{q}</dt><dd className="mt-1 leading-7 text-mute">{a}</dd></div>
          ))}
        </dl>
      </Section>

      <section className="mt-16 rounded-2xl bg-ink p-8 text-white md:p-10">
        <h2 className="font-heading text-2xl font-bold md:text-3xl">Ready when you are.</h2>
        <p className="mt-2 max-w-[50ch] text-[#B5C9C2]">Email us your business name and town, and we&apos;ll set up your account.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={`mailto:${COMPANY.supportEmail}?subject=Get%20started%20with%20PHANTA`} className="rounded-[10px] bg-chartreuse px-5 py-3 font-medium text-ink hover:bg-white">Email us to get started</a>
          <a href={LINKS.login} className="rounded-[10px] border border-white/25 px-5 py-3 font-medium hover:border-white">Log in</a>
        </div>
      </section>
    </ContentPage>
  );
}
