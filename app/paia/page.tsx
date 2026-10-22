import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";
import { COMPANY, LINKS } from "@/components/site-info";

export const metadata: Metadata = {
  title: "PAIA Manual | Vanta Automations",
  description: "PAIA manual of Vanta Automations (Pty) Ltd under section 51 of the Promotion of Access to Information Act and POPIA."
};

const A = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className="text-chartreuse underline-offset-4 hover:underline">{children}</a>
);

const sections: [string, React.ReactNode][] = [
  ["1. Purpose", <>This manual explains what records Vanta Automations (Pty) Ltd holds, how anyone can ask for access to them under the Promotion of Access to Information Act 2 of 2000 (PAIA), and how Vanta Automations processes personal information under the Protection of Personal Information Act 4 of 2013 (POPIA).</>],
  ["2. Contact details", (
    <ul className="grid gap-1">
      <li>Company: {COMPANY.name}</li>
      <li>Registration number: {COMPANY.registration}</li>
      <li>Head of the body and Information Officer: {COMPANY.infoOfficer}, Director</li>
      <li>Deputy Information Officer: none appointed. Requests go to the Information Officer.</li>
      <li>Address: {COMPANY.address}</li>
      <li>General enquiries: <A href={`mailto:${COMPANY.supportEmail}`}>{COMPANY.supportEmail}</A></li>
      <li>Email: <A href={`mailto:${COMPANY.email}`}>{COMPANY.email}</A></li>
    </ul>
  )],
  ["3. The Regulator's guide", <>The Information Regulator's guide on how to use PAIA and POPIA (section 10) is available in all official languages at <A href={LINKS.regulator}>inforegulator.org.za</A>, or from us on request.</>],
  ["4. Records available without a request", <>Our <A href={LINKS.privacy}>Privacy Policy</A>, <A href={LINKS.terms}>Terms of Service</A> (with the Data Processing Agreement, Billing Terms and Acceptable Use Policy), information on this website and our Facebook Page, and this manual. No notice has been published under section 52(2).</>],
  ["5. Records kept under other laws", <>Including the Companies Act 71 of 2008, Income Tax Act 58 of 1962, Tax Administration Act 28 of 2011, Value-Added Tax Act 89 of 1991 (if VAT-registered), Basic Conditions of Employment Act 75 of 1997 and Labour Relations Act 66 of 1995 (if we employ staff), POPIA, the Electronic Communications and Transactions Act 25 of 2002 and the Consumer Protection Act 68 of 2008.</>],
  ["6. Subjects and categories of records", (
    <ul className="grid gap-1">
      <li><b>Company:</b> incorporation, director and shareholder records, resolutions, contracts.</li>
      <li><b>Finance:</b> bank statements, invoices, payment and tax records.</li>
      <li><b>Clients (businesses using PHANTA):</b> account and contact details, subscription and billing history, accepted terms, support correspondence.</li>
      <li><b>Clients&apos; own customers</b> (held as Operator for the client): names, phone numbers, vehicles or other items serviced, bookings, WhatsApp messages. Requests for these go to the client concerned.</li>
      <li><b>Suppliers:</b> contracts, data-processing terms, invoices.</li>
      <li><b>IT and compliance:</b> system, security and audit logs, incident register, backups, privacy documents and data subject requests.</li>
    </ul>
  )],
  ["7. Processing of personal information", (
    <div className="grid gap-2">
      <p><b>Purposes:</b> running PHANTA for clients (WhatsApp messaging, bookings, Flyer Lady posts and ads, results), billing and tax, security and audit, and meeting legal obligations.</p>
      <p><b>Data subjects:</b> client owners and staff (name, email, phone, role, login records, billing details: cards are held by Paystack, not Vanta Automations); clients&apos; customers (name, phone, vehicle or item serviced, bookings, service history, WhatsApp messages, whose text is cleared after 14 days); suppliers (contact and banking details).</p>
      <p><b>Recipients:</b> our service providers, only as needed to run the service: Meta (WhatsApp, Facebook), Google (Google Ads), OpenAI (AI message drafts), Railway (hosting), Cloudflare (image storage), Sentry (error reports) and Paystack (payments); and authorities where the law requires.</p>
      <p><b>Cross-border transfers:</b> information is hosted and processed mainly in the United States and the European Union by these providers, under their binding data-protection terms (POPIA section 72).</p>
      <p><b>Security:</b> encrypted connections and encrypted access keys, database-enforced separation of each client&apos;s data, role-based access, login lockout and 12-character passwords, an audit log, automatic deletion schedules and a breach response plan.</p>
    </div>
  )],
  ["8. How to request a record", (
    <ol className="grid list-decimal gap-1 pl-5">
      <li>Complete Form 2 (Request for Access to Record) of the PAIA Regulations, 2021, from <A href={LINKS.regulator}>inforegulator.org.za</A> or from us.</li>
      <li>Send it to the Information Officer at <A href={`mailto:${COMPANY.email}`}>{COMPANY.email}</A> or to the address above.</li>
      <li>Identify the record and yourself, the form of access you want, and the right the record is needed to exercise or protect. Include proof of authority if you act for someone else.</li>
      <li>Prescribed request and access fees may apply (no request fee for your own personal information). We tell you the fee before we process the request.</li>
      <li>We decide within 30 days, extendable once by up to 30 days with reasons. No answer in time counts as a refusal.</li>
      <li>Refusals are only on the grounds in PAIA (for example someone else&apos;s privacy, confidential commercial information or legal privilege), with reasons.</li>
      <li>You may complain to the Information Regulator within 180 days, or apply to court.</li>
    </ol>
  )],
  ["9. POPIA requests", <>To object to processing, or to ask for your personal information to be corrected or deleted, use POPIA Forms 1 and 2 (POPIA Regulations, 2018) or email <A href={`mailto:${COMPANY.email}`}>{COMPANY.email}</A>. Facebook data can also be deleted at <A href={LINKS.dataDeletion}>app.vantaautomations.co.za/data-deletion</A>.</>],
  ["10. Availability and updates", <>This manual is on this website, at our address for inspection during office hours, available as a copy on request, and to the Information Regulator on request. We review it at least once a year and whenever our records, processing or contact details change.</>]
];

export default function PaiaPage() {
  return (
    <ContentPage
      eyebrow="Legal"
      title="PAIA Manual"
      intro="Prepared under section 51 of the Promotion of Access to Information Act 2 of 2000 and the Protection of Personal Information Act 4 of 2013."
    >
      <div className="mb-10 grid gap-4 border border-white/10 bg-white/[0.035] p-6 text-sm text-white/62 sm:grid-cols-2">
        <p><span className="text-chartreuse">Version:</span> 22 October 2026</p>
        <p><span className="text-chartreuse">Next review:</span> October 2027</p>
      </div>
      <div className="grid gap-4">
        {sections.map(([title, body]) => (
          <article key={title} className="border border-white/10 bg-white/[0.035] p-6">
            <h2 className="font-heading text-2xl font-semibold">{title}</h2>
            <div className="mt-3 leading-7 text-white/58">{body}</div>
          </article>
        ))}
      </div>
    </ContentPage>
  );
}
