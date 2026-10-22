import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import { CalendarCheck, Check, Code2, MessageCircle, Users, Workflow } from "lucide-react";
import { ContentPage, Section } from "@/components/content-page";
import { COMPANY } from "@/components/site-info";

export const metadata: Metadata = {
  title: "About us | Vanta Automations",
  description:
    "Learn how Vanta Automations helps businesses reduce manual work with booking systems, WhatsApp automation, workflow management, and custom software."
};

const services: [LucideIcon, string, string][] = [
  [CalendarCheck, "Booking & Scheduling Systems", "Custom booking platforms that allow customers to schedule appointments, request services, and receive automated confirmations and reminders."],
  [MessageCircle, "WhatsApp Business Automation", "Automated customer communication through WhatsApp, including booking confirmations, appointment reminders, status updates, and customer support workflows."],
  [Workflow, "Business Process Automation", "Automate repetitive business tasks, reduce manual data entry, and improve operational efficiency through custom workflow solutions."],
  [Users, "Customer Management Systems", "Centralized systems for managing customer information, service history, bookings, and communication records."],
  [Code2, "Custom Software Solutions", "Tailored software designed around your business requirements, helping you manage operations more effectively and improve customer satisfaction."]
];

const benefits = [
  "Reduce administrative workload",
  "Improve customer communication",
  "Automate repetitive tasks",
  "Increase operational efficiency",
  "Scale your business with confidence",
  "Custom solutions built around your needs"
];

export default function AboutPage() {
  return (
    <ContentPage
      title="Systems that make daily operations easier."
      intro="Vanta Automations helps businesses streamline operations through intelligent automation, booking systems, customer communication, and workflow management solutions."
    >
      <div className="grid max-w-[65ch] gap-5 text-lg leading-8 text-mute">
        <p>Our goal is simple: reduce manual work, improve customer experience, and help businesses operate more efficiently. We build systems that automate repetitive tasks, manage bookings, track customer interactions, and provide real-time updates through modern communication channels such as WhatsApp.</p>
        <p>We work with businesses that want to save time, improve organization, and scale their operations without increasing administrative overhead.</p>
      </div>

      <Section title="What we build">
        <div className="grid gap-4 md:grid-cols-2">
          {services.map(([Icon, title, body]) => (
            <article key={title} className="card flex gap-4">
              <span className="icon-tile"><Icon size={22} strokeWidth={1.75} aria-hidden="true" /></span>
              <div><h3 className="text-lg font-semibold">{title}</h3><p className="mt-1 leading-7 text-mute">{body}</p></div>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Less admin. Clearer communication. More time to serve customers.">
        <ul className="grid gap-3 sm:grid-cols-2">
          {benefits.map((b) => (
            <li key={b} className="flex items-center gap-3"><Check size={20} strokeWidth={2} aria-hidden="true" />{b}</li>
          ))}
        </ul>
        <p className="mt-8 max-w-[65ch] text-lg leading-8 text-mute">
          At Vanta Automations, we focus on delivering practical technology solutions that help businesses save time, improve service quality, and grow more effectively.
        </p>
        <a href={`mailto:${COMPANY.supportEmail}`} className="mt-6 inline-block rounded-[10px] bg-ink px-5 py-3 font-medium text-white hover:bg-[#06392F]">Email Vanta Automations</a>
      </Section>
    </ContentPage>
  );
}
