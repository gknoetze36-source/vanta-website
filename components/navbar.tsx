import Link from "next/link";
import { Button } from "./button";
import { VantaLogo } from "./vanta-logo";

const links = [
  ["Solutions", "#solutions"],
  ["Features", "#platform"],
  ["Automations", "#automations"],
  ["Plans", "#pricing"]
];

export function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-gunmetal/70 backdrop-blur-2xl">
      <nav className="container-shell flex h-20 items-center justify-between">
        <VantaLogo />

        <div className="hidden items-center gap-8 text-sm text-white/62 md:flex">
          {links.map(([label, href]) => (
            <Link key={label} href={href} className="transition hover:text-chartreuse">
              {label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Button href="#cta">Book a Demo</Button>
        </div>
      </nav>
    </header>
  );
}
