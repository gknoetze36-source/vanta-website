import type { Metadata } from "next";
import { LegalPointer } from "@/components/legal-pointer";
import { LINKS } from "@/components/site-info";

export const metadata: Metadata = {
  title: "Privacy Policy | VANTA Automations",
  description: "How VANTA Automations and PHANTA collect, use and protect personal information under POPIA."
};

export default function PrivacyPage() {
  return (
    <LegalPointer
      title="Privacy Policy"
      href={LINKS.privacy}
      intro="VANTA Automations keeps one Privacy Policy, for this website and the PHANTA platform. It is published on the platform so it is always current."
      points={[
        ["Who is responsible", "Vanta Automations (Pty) Ltd. Our Information Officer, registered with the Information Regulator, is George Knoetze (info@vantaautomations.co.za)."],
        ["Clients' customers", "When a client uses PHANTA, the client decides how its customers' information is used and VANTA processes it on the client's behalf under a Data Processing Agreement (POPIA section 21)."],
        ["Who we share with", "Only the service providers that run PHANTA: Meta (WhatsApp, Facebook), Google (Google Ads), OpenAI, Railway, Cloudflare, Sentry and Paystack. Some are outside South Africa; the full policy explains the safeguards. We never sell personal information."],
        ["Messages", "WhatsApp messages are only sent to customers who agreed to hear from the business. Replying STOP stops specials and service reminders. Message text is cleared after 14 days."],
        ["Your rights", "You can ask to see, correct or delete your personal information, or object to its use. Email info@vantaautomations.co.za, or see our PAIA manual for formal requests. You may complain to the Information Regulator at inforegulator.org.za."]
      ]}
    />
  );
}
