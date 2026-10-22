import Link from "next/link";
import { COMPANY } from "./site-info";

export function Navbar() {
  return (
    <header className="border-b border-rule bg-paper">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-2 font-heading text-[17px] font-semibold text-ink">
          <span className="ghost-mark" aria-hidden="true" />
          Vanta Automations
        </Link>
        <div className="flex items-center gap-6 text-[15px] text-mute">
          <Link href="/what-we-do/" className="hidden hover:text-ink sm:inline">What we do</Link>
          <Link href="/about/" className="hidden hover:text-ink sm:inline">About us</Link>
          <a href={`mailto:${COMPANY.supportEmail}?subject=Get%20started%20with%20PHANTA`} className="rounded-[10px] bg-ink px-4 py-2 font-medium text-white hover:bg-[#06392F]">Get started</a>
        </div>
      </nav>
    </header>
  );
}
