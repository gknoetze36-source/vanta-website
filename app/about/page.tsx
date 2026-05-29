import type { Metadata } from "next";
import { Button } from "@/components/button";
import { ContentPage } from "@/components/content-page";

export const metadata: Metadata = {
  title: "About and Services | VANTA Automations",
  description:
    "Learn how VANTA Automations helps businesses reduce manual work with booking systems, WhatsApp automation, workflow management, and custom software."
};

const services = [
  [
    "Booking & Scheduling Systems",
    "Custom booking platforms that allow customers to schedule appointments, request services, and receive automated confirmations and reminders."
  ],
  [
    "WhatsApp Business Automation",
    "Automated customer communication through WhatsApp, including booking confirmations, appointment reminders, status updates, and customer support workflows."
  ],
  [
    "Business Process Automation",
    "Automate repetitive business tasks, reduce manual data entry, and improve operational efficiency through custom workflow solutions."
  ],
  [
    "Customer Management Systems",
    "Centralized systems for managing customer information, service history, bookings, and communication records."
  ],
  [
    "Custom Software Solutions",
    "Tailored software designed around your business requirements, helping you manage operations more effectively and improve customer satisfaction."
  ]
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
      eyebrow="About / Services"
      title="Systems that make daily operations easier."
      intro="VANTA Automations helps businesses streamline operations through intelligent automation, booking systems, customer communication, and workflow management solutions."
    >
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-lg leading-8 text-white/62">
            Our goal is simple: reduce manual work, improve customer experience, and help businesses operate more efficiently. We build systems that automate repetitive tasks, manage bookings, track customer interactions, and provide real-time updates through modern communication channels such as WhatsApp.
          </p>
          <p className="mt-6 text-lg leading-8 text-white/62">
            We work with businesses that want to save time, improve organization, and scale their operations without increasing administrative overhead.
          </p>
          <div className="mt-8">
            <Button href="mailto:Hello@Vantaautomations.co.za">Email VANTA Automations</Button>
          </div>
        </div>
        <div className="grid gap-4">
          {services.map(([title, body], index) => (
            <article key={title} className="pixel-corner border border-white/10 bg-white/[0.035] p-6">
              <div className="mb-4 flex items-center gap-3">
                <span className="font-heading text-xl text-chartreuse">{String(index + 1).padStart(2, "0")}</span>
                <h2 className="font-heading text-2xl font-semibold">{title}</h2>
              </div>
              <p className="leading-7 text-white/58">{body}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-chartreuse/80">Why choose VANTA</p>
          <h2 className="font-heading text-4xl font-semibold tracking-[-0.04em]">
            Less admin. Clearer communication. More time to serve customers.
          </h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {benefits.map((benefit) => (
            <div key={benefit} className="flex items-center gap-3 border border-white/10 bg-white/[0.035] p-4 text-white/68">
              <span className="size-2 shrink-0 bg-chartreuse shadow-[0_0_18px_rgba(224,255,79,0.8)]" />
              {benefit}
            </div>
          ))}
        </div>
      </div>

      <div className="glass mt-16 rounded-[2rem] p-8 md:p-10">
        <p className="max-w-4xl text-xl leading-9 text-white/72">
          At VANTA Automations, we focus on delivering practical technology solutions that help businesses save time, improve service quality, and grow more effectively.
        </p>
      </div>
    </ContentPage>
  );
}
