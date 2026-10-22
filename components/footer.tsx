import Link from "next/link";
import { COMPANY, LINKS } from "./site-info";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-rule">
      <div className="mx-auto max-w-5xl px-5 py-8 text-xs leading-6 text-mute">
        <nav className="mb-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-ink">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/what-we-do/" className="hover:underline">What we do</Link>
          <Link href="/about/" className="hover:underline">About us</Link>
          <Link href="/privacy/" className="hover:underline">Privacy</Link>
          <Link href="/terms/" className="hover:underline">Terms</Link>
          <Link href={LINKS.paia} className="hover:underline">PAIA manual</Link>
          <a href={LINKS.login} className="hover:underline">Log in</a>
        </nav>
        <p>
          {COMPANY.name}, reg. {COMPANY.registration}, {COMPANY.address}. Information Officer: {COMPANY.infoOfficer}.{" "}
          <a href={`mailto:${COMPANY.supportEmail}`} className="underline">{COMPANY.supportEmail}</a>,{" "}
          <a href={`mailto:${COMPANY.email}`} className="underline">{COMPANY.email}</a>
        </p>
      </div>
    </footer>
  );
}
