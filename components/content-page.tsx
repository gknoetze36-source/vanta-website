import Image from "next/image";
import { Footer } from "./footer";
import { Navbar } from "./navbar";
import { PixelParticles } from "./pixel-particles";

export function ContentPage({
  eyebrow,
  title,
  intro,
  children
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="relative overflow-hidden pb-16 pt-32 md:pb-20 md:pt-40">
        <PixelParticles />
        <div className="pixel-floor absolute bottom-0 left-0 right-0 h-20 opacity-25" />
        <div className="container-shell relative z-10 grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-chartreuse/80">{eyebrow}</p>
            <h1 className="text-balance font-heading text-5xl font-semibold tracking-[-0.06em] md:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/62">{intro}</p>
          </div>
          <div className="glass pixel-corner relative min-h-[260px] overflow-hidden p-6">
            <Image
              src="/images/vanta-logo-wide.png"
              alt="VANTA Automations"
              fill
              priority
              sizes="(min-width: 1024px) 520px, 100vw"
              className="object-cover object-left"
            />
          </div>
        </div>
      </section>
      <section className="container-shell py-16 md:py-20">{children}</section>
      <Footer />
    </main>
  );
}
