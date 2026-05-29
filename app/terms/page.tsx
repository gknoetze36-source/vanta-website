import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";

export const metadata: Metadata = {
  title: "Terms of Service | VANTA Automations",
  description: "Terms of Service for VANTA Automations services, software, automation systems, booking platforms, and related technologies."
};

const sections = [
  ["1. Services", "VANTA Automations provides services including but not limited to booking systems, automation services, reminder systems, WhatsApp and SMS integrations, software automation, subscription-based SaaS platforms, and technical support services."],
  ["2. Client Responsibilities", "Users and clients agree to provide accurate information, maintain lawful use of the platform, obtain appropriate customer consent for messaging, keep login credentials secure, and avoid unlawful, abusive, or spam-related activities."],
  ["3. Payments & Subscriptions", "Services may be billed monthly, annually, per usage, or according to agreed service plans. Failure to pay applicable fees may result in suspension of services, restricted access, or termination of accounts."],
  ["4. Messaging Services", "Clients are solely responsible for ensuring compliance with applicable messaging and consent laws when using WhatsApp, SMS, email, or automated communications. VANTA Automations is not responsible for third-party carrier failures, WhatsApp outages, delivery delays, blocked messages, or external platform restrictions."],
  ["5. Downtime & Availability", "While reasonable efforts are made to maintain reliable service availability, uninterrupted access cannot be guaranteed. Scheduled maintenance, infrastructure issues, third-party failures, or unforeseen technical events may affect service availability."],
  ["6. Intellectual Property", "All software systems, automation infrastructure, source code, workflows, branding, and proprietary technologies remain the intellectual property of VANTA Automations unless otherwise agreed in writing."],
  ["7. Limitation of Liability", "To the maximum extent permitted by South African law, VANTA Automations shall not be liable for indirect, consequential, incidental, or special damages arising from the use of the platform or services. This includes but is not limited to lost profits, missed appointments, business interruption, data loss, messaging failures, or third-party service outages."],
  ["8. Consumer Protection", "Nothing in these Terms limits any rights that consumers may have under applicable South African consumer protection legislation where such rights cannot legally be excluded."],
  ["9. Suspension & Termination", "VANTA Automations may suspend or terminate services where users violate these Terms, misuse the platform, engage in unlawful conduct, or fail to make required payments. Either party may terminate services with written notice in accordance with agreed subscription or service terms."],
  ["10. Changes to Services or Terms", "We reserve the right to modify services, update pricing, introduce new features, or revise these Terms from time to time."],
  ["11. Governing Law", "These Terms are governed by the laws of South Africa."]
];

export default function TermsPage() {
  return (
    <ContentPage
      eyebrow="Legal"
      title="Terms of Service"
      intro="These Terms of Service govern the use of services, software, automation systems, booking platforms, and related technologies provided by VANTA Automations."
    >
      <div className="mb-10 grid gap-4 border border-white/10 bg-white/[0.035] p-6 text-sm text-white/62 sm:grid-cols-2">
        <p><span className="text-chartreuse">Effective Date:</span> 14 May 2026</p>
        <p><span className="text-chartreuse">Last Updated:</span> 14 May 2026</p>
      </div>
      <p className="mb-10 max-w-4xl text-lg leading-8 text-white/62">
        By accessing or using our services, users agree to these Terms.
      </p>
      <div className="grid gap-4">
        {sections.map(([title, body]) => (
          <article key={title} className="border border-white/10 bg-white/[0.035] p-6">
            <h2 className="font-heading text-2xl font-semibold">{title}</h2>
            <p className="mt-3 leading-7 text-white/58">{body}</p>
          </article>
        ))}
      </div>
    </ContentPage>
  );
}
