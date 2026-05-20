import { AutomationFlow } from "@/components/automation-flow";
import { Button } from "@/components/button";
import { DashboardPreview } from "@/components/dashboard-preview";
import { FeatureCard } from "@/components/feature-card";
import { Footer } from "@/components/footer";
import { MotionSection } from "@/components/motion-section";
import { OfferTabs } from "@/components/offer-tabs";
import { Navbar } from "@/components/navbar";
import { PixelParticles } from "@/components/pixel-particles";

const features = [
  {
    icon: "calendar",
    title: "Automated bookings",
    description: "Convert public inquiries into structured bookings with tenant-safe routing, service logic, and follow-up recovery."
  },
  {
    icon: "message",
    title: "WhatsApp messaging",
    description: "Send confirmations, reminders, missed-booking follow-ups, and payment nudges through channel-aware messaging."
  },
  {
    icon: "bot",
    title: "AI workflows",
    description: "Use AI where it creates leverage, while fixed rules, prices, limits, and workflows keep operations predictable."
  },
  {
    icon: "bell",
    title: "Customer reminders",
    description: "Industry-specific schedules for service reminders, checkups, appointments, recovery, and recurring work."
  },
  {
    icon: "chart",
    title: "Analytics",
    description: "Track bookings, usage, recovery rates, message spend, automation performance, and tenant ROI."
  },
  {
    icon: "workflow",
    title: "Business automations",
    description: "Reusable templates for workshops, salons, clinics, dentists, hotels, gyms, consultants, and repair teams."
  }
] as const;

const industries = [
  ["Workshops", "Bookings, service reminders, repair updates, missed-call recovery, and workflow performance."],
  ["Clinics", "Appointment confirmations, follow-up reminders, no-show recovery, and consent-aware messaging."],
  ["Salons", "Rebooking flows, waitlist recovery, stylist schedules, campaign nudges, and client reminders."],
  ["Hotels", "Guest requests, stay reminders, upsell workflows, service routing, and feedback collection."],
  ["Gyms", "Trial bookings, membership reminders, renewal recovery, class updates, and lead follow-up."],
  ["Consultants", "Lead qualification, calendar routing, proposal reminders, payment nudges, and pipeline visibility."]
];

const process = [
  ["Map", "Document the booking, reminder, message, and billing flows that create daily friction."],
  ["Configure", "Set tenant rules, templates, timing windows, escalation paths, and usage limits."],
  ["Launch", "Deploy the workflows, monitor every job, and refine the highest-value recovery loops."]
];

const faqs = [
  ["Is VANTA only for workshops?", "No. The workshop system is the first operating model, but VANTA is structured as a reusable automation platform for multiple service industries."],
  ["Does this replace my current tools?", "It can sit above existing booking, messaging, and payment tools first, then consolidate more workflow logic over time."],
  ["Can it support multiple locations?", "Yes. The platform is designed around controlled data, location routing, usage tracking, and reusable industry templates."],
  ["What happens after launch?", "You get a monitored automation layer with workflow logs, retry handling, message tracking, and monthly improvement targets."]
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="relative overflow-hidden pb-24 pt-36 md:pb-32 md:pt-44">
        <PixelParticles />
        <div className="pixel-floor absolute bottom-0 left-0 right-0 h-24 opacity-30" />
        <div className="container-shell relative z-10 grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-chartreuse/20 bg-chartreuse/[0.06] px-4 py-2 text-sm text-chartreuse">
              <span className="size-2 bg-chartreuse shadow-[0_0_18px_rgba(224,255,79,0.8)]" />
              Automation infrastructure for service businesses
            </div>
            <h1 className="text-balance font-heading text-5xl font-semibold tracking-[-0.06em] sm:text-6xl lg:text-7xl">
              Automate. Communicate. <span className="text-chartreuse">Grow.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/62">
              VANTA Automations streamlines business workflows, automates customer communication, and gives service teams a cleaner operating system for daily growth.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="mailto:hello@vantaautomations.co.za">Book a Demo</Button>
              <Button href="#dashboard" variant="secondary">View the OS</Button>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-7">
              {[
                ["99.9%", "workflow uptime"],
                ["24/7", "automation layer"],
                ["Future", "business modules"]
              ].map(([value, label]) => (
                <div key={label}>
                  <div className="font-heading text-2xl font-semibold text-chartreuse">{value}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.24em] text-white/42">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <DashboardPreview />
        </div>
      </section>

      <MotionSection className="container-shell py-16" delay={0.05}>
        <div className="glass rounded-[2rem] p-6">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-chartreuse/80">Trusted operating layer</p>
              <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight">Built for businesses that cannot afford missed communication.</h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-3">
              {[
                ["42k", "messages orchestrated"],
                ["31%", "booking recovery lift"],
                ["9", "industry templates"]
              ].map(([value, label]) => (
                <div key={label} className="rounded-3xl border border-white/10 bg-white/[0.035] p-5">
                  <strong className="font-heading text-3xl text-chartreuse">{value}</strong>
                  <p className="mt-2 text-sm text-white/52">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 grid gap-3 text-sm text-white/48 sm:grid-cols-4">
            {["Service teams", "Growing operators", "Customer-led businesses", "Future-ready workflows"].map((label) => (
              <div key={label} className="border border-white/10 bg-white/[0.025] px-4 py-4 text-center">
                {label}
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection id="solutions" className="container-shell py-20">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.7fr_1fr] lg:items-end">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-chartreuse/80">What we offer</p>
            <h2 className="font-heading text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
              Start with bookings. Expand into a full business automation layer.
            </h2>
          </div>
          <p className="text-lg leading-8 text-white/58">
            The booking system is the beginning. VANTA is structured so new business modules can be added as the platform grows.
          </p>
        </div>
        <OfferTabs />
      </MotionSection>

      <MotionSection id="platform" className="container-shell py-20">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-chartreuse/80">Platform</p>
          <h2 className="font-heading text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
            One automation core. Multiple industries. Zero rebuilt systems.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </MotionSection>

      <MotionSection id="industries" className="container-shell py-20">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.72fr_1fr] lg:items-end">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-chartreuse/80">Industries</p>
            <h2 className="font-heading text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
              Launch from proven templates, then tune the workflow to the business.
            </h2>
          </div>
          <p className="text-lg leading-8 text-white/58">
            VANTA keeps the operating core consistent while changing the rules, timing, language, and metrics around each industry.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {industries.map(([name, body]) => (
            <div key={name} className="border border-white/10 bg-white/[0.035] p-6">
              <div className="mb-5 flex items-center gap-3">
                <span className="size-2 bg-chartreuse shadow-[0_0_18px_rgba(224,255,79,0.7)]" />
                <h3 className="font-heading text-xl font-semibold">{name}</h3>
              </div>
              <p className="leading-7 text-white/56">{body}</p>
            </div>
          ))}
        </div>
      </MotionSection>

      <MotionSection id="dashboard" className="container-shell py-20">
        <div className="mb-10 grid gap-8 lg:grid-cols-[0.7fr_1fr] lg:items-end">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-chartreuse/80">Dashboard</p>
            <h2 className="font-heading text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
              Enterprise visibility without enterprise clutter.
            </h2>
          </div>
          <p className="text-lg leading-8 text-white/58">
            Monitor bookings, automation jobs, message activity, failed workflows, and growth signals from a calm dark-mode command center.
          </p>
        </div>
        <DashboardPreview />
      </MotionSection>

      <MotionSection id="automations" className="container-shell py-20">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-chartreuse/80">Automation engine</p>
          <h2 className="font-heading text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
            Event-driven workflows that feel invisible when everything works.
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/58">
            VANTA turns operational events into scheduled actions, routed messages, retries, logs, and measurable recovery.
          </p>
        </div>
        <AutomationFlow />
      </MotionSection>

      <MotionSection className="container-shell py-20">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-chartreuse/80">Implementation</p>
            <h2 className="font-heading text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
              A clean path from manual operations to monitored automation.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/58">
              Start with the workflows that leak revenue or time first, then expand into a reusable operating layer.
            </p>
          </div>
          <div className="grid gap-4">
            {process.map(([title, body], index) => (
              <div key={title} className="grid gap-4 border border-white/10 bg-white/[0.035] p-6 sm:grid-cols-[72px_1fr]">
                <div className="font-heading text-4xl font-semibold text-chartreuse">{String(index + 1).padStart(2, "0")}</div>
                <div>
                  <h3 className="font-heading text-2xl font-semibold">{title}</h3>
                  <p className="mt-2 leading-7 text-white/56">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection id="pricing" className="container-shell py-20">
        <div className="mb-10 max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-chartreuse/80">Plans</p>
          <h2 className="font-heading text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
            Choose the level of automation your business is ready for.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["Essential", "For small teams that need automated bookings, reminders, and cleaner customer communication."],
            ["Growth", "For growing businesses ready to connect communication, workflow routing, and operational recovery."],
            ["Advanced Automation", "For operators that need tailored automations, deeper reporting, priority setup, and future modules."]
          ].map(([name, body]) => (
            <div key={name} className="pixel-corner border border-white/10 bg-white/[0.035] p-7">
              <h3 className="font-heading text-2xl font-semibold">{name}</h3>
              <p className="mt-4 min-h-28 leading-7 text-white/56">{body}</p>
              <div className="mt-8 flex items-center gap-2 text-sm uppercase tracking-[0.26em] text-chartreuse">
                <span className="size-2 bg-chartreuse" />
                Custom setup
              </div>
            </div>
          ))}
        </div>
      </MotionSection>

      <MotionSection className="container-shell py-20">
        <div className="mb-10 max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-chartreuse/80">Questions</p>
          <h2 className="font-heading text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
            Built for practical rollout, not a vague automation promise.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map(([question, answer]) => (
            <div key={question} className="border border-white/10 bg-white/[0.035] p-6">
              <h3 className="font-heading text-xl font-semibold">{question}</h3>
              <p className="mt-3 leading-7 text-white/56">{answer}</p>
            </div>
          ))}
        </div>
      </MotionSection>

      <MotionSection id="cta" className="container-shell py-24">
        <div className="glass relative overflow-hidden rounded-[2.5rem] p-8 text-center md:p-14">
          <div className="absolute left-1/2 top-0 h-40 w-80 -translate-x-1/2 bg-chartreuse/15 blur-3xl" />
          <div className="relative z-10 mx-auto max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-chartreuse/80">Deploy the operating layer</p>
            <h2 className="font-heading text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
              Build the business that keeps working after closing time.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/58">
              Launch one reusable automation platform for bookings, reminders, messaging, workflow routing, and future business modules.
            </p>
            <div className="mt-9 flex justify-center">
              <Button href="mailto:hello@vantaautomations.co.za">Book a Demo</Button>
            </div>
          </div>
        </div>
      </MotionSection>

      <Footer />
    </main>
  );
}
