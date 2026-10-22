import type { Metadata } from "next";
import { LegalPointer } from "@/components/legal-pointer";
import { LINKS } from "@/components/site-info";

export const metadata: Metadata = {
  title: "Terms of Service | VANTA Automations",
  description: "Terms of Service for the PHANTA platform by VANTA Automations."
};

export default function TermsPage() {
  return (
    <LegalPointer
      title="Terms of Service"
      href={LINKS.terms}
      intro="The PHANTA Terms of Service, with the Data Processing Agreement, Billing & Payment Terms and Acceptable Use Policy, are published on the platform. Clients accept them when they start using PHANTA."
      points={[
        ["What's covered", "Use of PHANTA, fees and monthly billing, cancellation on 30 days' notice, data processing on the client's behalf, acceptable use, and the Meta and Google platform rules clients agree to."],
        ["Your accounts stay yours", "Your Facebook Page, WhatsApp number, ad accounts and Google Ads account remain yours. Meta and Google charge your own card for ads; VANTA never handles that money."],
        ["Questions", "Email info@vantaautomations.co.za."]
      ]}
    />
  );
}
