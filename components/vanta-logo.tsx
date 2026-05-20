import Link from "next/link";

export function VantaLogo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="group inline-flex items-center gap-3" aria-label="VANTA Automations home">
      <span className="relative grid size-10 place-items-center border border-chartreuse/35 bg-chartreuse/10 shadow-glow">
        <span className="absolute -right-1 -top-1 size-2 bg-chartreuse" />
        <span className="font-heading text-lg font-bold leading-none text-chartreuse">V</span>
      </span>
      {!compact && (
        <span className="leading-none">
          <span className="block font-heading text-2xl font-semibold tracking-[0.02em] text-white">
            VANTA
          </span>
          <span className="mt-1 block text-[0.55rem] font-semibold uppercase tracking-[0.42em] text-chartreuse">
            Automations
          </span>
        </span>
      )}
    </Link>
  );
}
