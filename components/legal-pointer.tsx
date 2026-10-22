import { ContentPage } from "./content-page";
import { COMPANY } from "./site-info";

// The app holds the one current version of each policy; this page summarises and links to it.
export function LegalPointer({ title, intro, href, points }: { title: string; intro: string; href: string; points: [string, string][] }) {
  return (
    <ContentPage eyebrow="Legal" title={title} intro={intro}>
      <a href={href} className="mb-10 block border border-chartreuse/40 bg-chartreuse/[0.06] p-6 text-lg text-chartreuse transition hover:bg-chartreuse/[0.12]">
        Read the full, current {title} -&gt;
      </a>
      <div className="grid gap-4">
        {points.map(([heading, body]) => (
          <article key={heading} className="border border-white/10 bg-white/[0.035] p-6">
            <h2 className="font-heading text-2xl font-semibold">{heading}</h2>
            <p className="mt-3 leading-7 text-white/58">{body}</p>
          </article>
        ))}
      </div>
      <p className="mt-10 text-sm text-white/45">
        {COMPANY.name} · Information Officer: {COMPANY.infoOfficer} · {COMPANY.email}
      </p>
    </ContentPage>
  );
}
