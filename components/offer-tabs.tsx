"use client";

import { motion } from "framer-motion";
import { BarChart3, CalendarCheck, MessageSquare, Workflow } from "lucide-react";
import { useState } from "react";

const offers = [
  {
    name: "Bookings",
    icon: CalendarCheck,
    title: "Booking automation is the first operating layer.",
    body:
      "Turn inquiries into structured bookings, confirmations, reminders, follow-ups, and recovery workflows without forcing your team to manually chase every customer.",
    bullets: ["Online booking flow", "WhatsApp confirmations", "No-show reminders", "Missed-booking recovery"]
  },
  {
    name: "Communication",
    icon: MessageSquare,
    title: "Consistent customer messaging without manual repetition.",
    body:
      "Send the right message at the right time across reminders, updates, nudges, and follow-ups while keeping templates and timing rules controlled.",
    bullets: ["Reminder sequences", "Status updates", "Customer follow-ups", "Message history"]
  },
  {
    name: "Workflows",
    icon: Workflow,
    title: "Reusable automations that can branch into more business needs.",
    body:
      "Start with booking operations, then expand into industry-specific workflows for service teams, consultants, clinics, hospitality, and future business systems.",
    bullets: ["Trigger-based actions", "Approval rules", "Task routing", "Reusable templates"]
  },
  {
    name: "Insights",
    icon: BarChart3,
    title: "Operational visibility without clutter.",
    body:
      "Track what is working, where customers drop off, which automations recover work, and what needs attention as the platform grows.",
    bullets: ["Workflow performance", "Booking recovery", "Message activity", "Growth signals"]
  }
];

export function OfferTabs() {
  const [active, setActive] = useState(0);
  const offer = offers[active];
  const Icon = offer.icon;

  return (
    <div className="grid gap-6 lg:grid-cols-[330px_1fr]">
      <div className="grid gap-3">
        {offers.map((item, index) => {
          const ItemIcon = item.icon;
          const selected = active === index;

          return (
            <button
              key={item.name}
              type="button"
              onClick={() => setActive(index)}
              className={`group flex items-center justify-between border px-5 py-4 text-left transition ${
                selected
                  ? "border-chartreuse/50 bg-chartreuse/[0.09] text-chartreuse shadow-glow"
                  : "border-white/10 bg-white/[0.025] text-white/58 hover:border-chartreuse/35 hover:text-white"
              }`}
            >
              <span className="flex items-center gap-3">
                <ItemIcon className="size-5" />
                <span className="font-heading text-lg font-semibold">{item.name}</span>
              </span>
              <span className="size-2 bg-current opacity-60" />
            </button>
          );
        })}
      </div>

      <motion.div
        key={offer.name}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="pixel-corner relative overflow-hidden border border-white/10 bg-white/[0.035] p-7"
      >
        <div className="absolute right-6 top-6 grid grid-cols-5 gap-1 opacity-40">
          {Array.from({ length: 20 }).map((_, index) => (
            <span key={index} className={`size-1.5 ${index % 3 === 0 ? "bg-chartreuse" : "bg-white/20"}`} />
          ))}
        </div>
        <Icon className="mb-8 size-10 text-chartreuse" />
        <h3 className="max-w-2xl font-heading text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
          {offer.title}
        </h3>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-white/58">{offer.body}</p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {offer.bullets.map((bullet) => (
            <div key={bullet} className="flex items-center gap-3 border border-white/10 bg-gunmetal/60 px-4 py-3">
              <span className="size-2 bg-chartreuse shadow-[0_0_16px_rgba(224,255,79,0.7)]" />
              <span className="text-sm text-white/68">{bullet}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
