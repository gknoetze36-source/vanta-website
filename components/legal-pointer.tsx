import { ExternalLink } from "lucide-react";
import { ContentPage } from "./content-page";

// The app holds the one current version of each policy; this page summarises and links to it.
export function LegalPointer({ title, intro, href, points }: { title: string; intro: string; href: string; points: [string, string][] }) {
  return (
    <ContentPage title={title} intro={intro}>
      <a href={href} className="mb-8 inline-flex items-center gap-2 rounded-[10px] bg-ink px-5 py-3 font-medium text-white hover:bg-[#06392F]">
        Read the full, current {title}
        <ExternalLink size={16} aria-hidden="true" />
      </a>
      <div className="grid gap-3">
        {points.map(([heading, body]) => (
          <article key={heading} className="card">
            <h2 className="font-heading text-xl font-bold">{heading}</h2>
            <p className="mt-2 max-w-[75ch] leading-7 text-mute">{body}</p>
          </article>
        ))}
      </div>
    </ContentPage>
  );
}
