import { Footer } from "./footer";
import { Navbar } from "./navbar";

// Every inner page: slim header, a title and intro, the content, the legal footer.
export function ContentPage({ title, intro, children }: { title: string; intro: string; children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-5xl px-5 pt-12 md:pt-16">
        <h1 className="max-w-[22ch] font-heading text-[clamp(32px,4.4vw,48px)] font-bold leading-[1.08] tracking-[-0.02em]">{title}</h1>
        <p className="mt-4 max-w-[60ch] text-lg leading-8 text-mute">{intro}</p>
        <div className="mt-12">{children}</div>
      </main>
      <Footer />
    </>
  );
}

export function Section({ id, title, children }: { id?: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mt-16 scroll-mt-6 first:mt-0">
      <h2 className="mb-6 font-heading text-2xl font-bold tracking-[-0.01em] md:text-[28px]">{title}</h2>
      {children}
    </section>
  );
}
