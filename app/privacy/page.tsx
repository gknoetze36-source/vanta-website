import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";

export const metadata: Metadata = {
  title: "Privacy Policy | VANTA Automations",
  description: "Privacy Policy for VANTA Automations and how business, booking, customer communication, and service data may be handled."
};

const sections = [
  ["1. Information We May Collect", "We may collect business contact details, names, email addresses, phone numbers, booking details, service requirements, customer communication records, account information, technical logs, and information submitted through forms or direct communication."],
  ["2. How We Use Information", "We use information to provide automation services, manage bookings, send confirmations and reminders, support customer communication, improve workflows, provide technical support, maintain security, and operate the services requested by clients."],
  ["3. Customer Communication Data", "Where WhatsApp, SMS, email, or other messaging channels are used, communication data may be processed to send booking confirmations, reminders, service updates, customer support responses, and workflow notifications."],
  ["4. Client Responsibilities", "Clients are responsible for ensuring they have appropriate consent and lawful grounds to collect, upload, store, or send customer information through VANTA Automations systems."],
  ["5. Third-Party Services", "Our services may rely on third-party platforms such as hosting providers, messaging providers, WhatsApp, SMS gateways, email services, analytics tools, and payment or subscription systems. These providers may process data according to their own policies and service terms."],
  ["6. Data Security", "We take reasonable technical and organizational steps to protect information against unauthorized access, loss, misuse, or disclosure. No digital system can be guaranteed to be completely secure."],
  ["7. Data Retention", "Information is retained for as long as needed to provide services, meet legal or operational requirements, resolve disputes, maintain business records, or support active client accounts."],
  ["8. Access, Correction, and Deletion", "Clients or users may request access to, correction of, or deletion of personal information where applicable under South African law and where retention is not required for legitimate business, security, or legal reasons."],
  ["9. Children", "VANTA Automations services are intended for businesses and are not directed at children."],
  ["10. Updates to This Policy", "We may update this Privacy Policy from time to time to reflect service, legal, or operational changes."],
  ["11. Contact", "Privacy-related questions can be sent to Hello@Vantaautomations.co.za."]
];

export default function PrivacyPage() {
  return (
    <ContentPage
      eyebrow="Legal"
      title="Privacy Policy"
      intro="This Privacy Policy explains how VANTA Automations may collect, use, store, and protect information when providing automation, booking, communication, and workflow management services."
    >
      <div className="mb-10 grid gap-4 border border-white/10 bg-white/[0.035] p-6 text-sm text-white/62 sm:grid-cols-2">
        <p><span className="text-chartreuse">Effective Date:</span> 14 May 2026</p>
        <p><span className="text-chartreuse">Last Updated:</span> 14 May 2026</p>
      </div>
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
