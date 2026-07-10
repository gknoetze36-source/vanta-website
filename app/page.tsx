import { AutomationFlow } from "@/components/automation-flow";
import { Button } from "@/components/button";
import { DashboardPreview } from "@/components/dashboard-preview";
import { FeatureCard } from "@/components/feature-card";
import { Footer } from "@/components/footer";
import { FloatingGhost } from "@/components/floating-ghost";
import { MotionSection } from "@/components/motion-section";
import { OfferTabs } from "@/components/offer-tabs";
import { Navbar } from "@/components/navbar";
import { PixelParticles } from "@/components/pixel-particles";

const features = [
  {
    icon: "calendar",
    title: "Online booking system",
    description: "Let customers book services online, with availability, service selection, and confirmations handled automatically."
  },
  {
    icon: "bot",
    title: "AI-powered receptionist",
    description: "Answer common customer questions, capture booking details, and qualify leads without a human on the phone."
  },
  {
    icon: "message",
    title: "WhatsApp communication",
    description: "Send confirmations, reminders, and updates through the channel customers actually check."
  },
  {
    icon: "bell",
    title: "Service reminders",
    description: "Automated reminders based on each vehicle's service history, so nothing falls through the cracks."
  },
  {
    icon: "chart",
    title: "Customer & vehicle management",
    description: "Complete customer records with full vehicle service history in one place."
  },
  {
    icon: "workflow",
    title: "Quotation & job management",
    description: "Create quotes, track jobs, and manage work from intake to completion."
  }
] as const;

const platformCapabilities = [
  ["Lead capture & follow-up", "Automatically capture new leads and follow up before they go cold."],
  ["Multi-branch & franchise support", "Run multiple locations or franchise operations from one connected system."],
  ["Team & user management", "Control who has access to what, across every branch and role."],
  ["Business analytics & reporting", "See bookings, jobs, and performance clearly, without digging through spreadsheets."],
  ["Secure cloud storage", "Business and customer data stored securely, accessible from anywhere."],
  ["Billing & subscription management", "Manage billing and subscriptions for your business without manual admin."]
];

const process = [
  ["Map", "Document the booking, reminder, message, and billing flows that create daily friction."],
  ["Configure", "Set tenant rules, templates, timing windows, escalation paths, and usage limits."],
  ["Launch", "Deploy the workflows, monitor every job, and refine the highest-value recovery loops."]
];

const faqs = [
  ["Who is VANTA built for?", "VANTA is built for automotive workshops and service businesses that want to reduce admin and automate day-to-day operations."],
  ["Does this replace my current tools?", "It can sit above existing booking, messaging, and payment tools first, then consolidate more workflow logic over time."],
  ["Can it support multiple branches?", "Yes. Multi-branch and franchise support is built in, with team and user management across locations."],
  ["What does the AI receptionist actually do?", "It handles common customer questions and captures booking details automatically, reducing missed calls and manual admin."]
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="relative overflow-hidden pb-24 pt-36 md:pb-32 md:pt-44">
        <PixelParticles />
        <div className="pixel-floor absolute bottom-0 left-0 right-0 h-24 opacity-30" />
        <FloatingGhost size={80} className="absolute right-6 top-28 hidden lg:block z-10" />
        <div className="container-shell relative z-10 grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-chartreuse/20 bg-chartreuse/[0.06] px-4 py-2 text-sm text-chartreuse">
              <span className="size-2 bg-chartreuse shadow-[0_0_18px_rgba(224,255,79,0.8)]" />
              AI-powered operating system for automotive workshops
            </div>
            <h1 className="text-balance font-heading text-5xl font-semibold tracking-[-0.06em] sm:text-6xl lg:text-7xl">
              Automate. Communicate. <span className="text-chartreuse">Grow.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/62">
              VANTA Automations is an AI-powered operating system for automotive workshops and service businesses — automating bookings, customer communication, and daily operations so you can focus on servicing vehicles instead of managing paperwork.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="mailto:Hello@Vantaautomations.co.za">Email VANTA</Button>
              <Button href="#dashboard" variant="secondary">View the OS</Button>
            </div>
            <div className="mt-10 grid gap-3 border-t border-white/10 pt-7 text-sm uppercase tracking-[0.24em] text-white/48 sm:grid-cols-3">
              {["Workflow automation", "Customer messaging", "Business modules"].map((label) => (
                <div key={label} className="flex items-center gap-3">
                  <span className="size-2 bg-chartreuse shadow-[0_0_18px_rgba(224,255,79,0.8)]" />
                  {label}
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
              <p className="text-sm uppercase tracking-[0.28em] text-chartreuse/80">Our mission</p>
              <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight">
                An all-in-one AI-powered operating system for workshops.
              </h2>
            </div>
            <p className="text-lg leading-8 text-white/62">
              We automate customer communication, business operations, and workflow management so workshops can focus on servicing vehicles instead of managing paperwork — reducing missed bookings, improving customer experience, and helping businesses scale efficiently.
            </p>
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
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-chartreuse/80">Full platform</p>
            <h2 className="font-heading text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
              Everything a growing workshop needs, in one system.
            </h2>
          </div>
          <p className="text-lg leading-8 text-white/58">
            Beyond bookings and messaging, VANTA covers the operational layer workshops need to run and scale.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {platformCapabilities.map(([name, body]) => (
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
              <Button href="mailto:Hello@Vantaautomations.co.za">Email VANTA</Button>
            </div>
          </div>
        </div>
      </MotionSection>

      <Footer />
    </main>
  );
}

