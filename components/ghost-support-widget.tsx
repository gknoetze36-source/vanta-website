"use client";

import { useEffect, useRef, useState } from "react";
import { Send, X } from "lucide-react";
import { COMPANY, LINKS } from "@/components/site-info";

type Link = [label: string, href: string];
type Topic = { keys: string[]; intro: string; steps?: string[]; links?: Link[]; next?: string[] };
type Msg = { role: "user" | "bot"; topic: Topic };

const EMAIL: Link = ["Email Vanta Automations", `mailto:${COMPANY.supportEmail}`];
const LOGIN: Link = ["Log in to PHANTA", LINKS.login];

// Same idea as the Ghost inside PHANTA: match the question to a topic, answer with steps, buttons and follow-ups.
const TOPICS: Topic[] = [
  {
    keys: ["what is", "phanta", "do you do", "services", "about", "how does it work", "features"],
    intro: "PHANTA is the Vanta Automations system for service businesses, starting with automotive workshops. It works for you after hours:",
    steps: [
      "A WhatsApp assistant that answers customers and books them in. It always says it's AI, and your team can reply themselves at any time.",
      "Your own online booking page, with new bookings showing live on your Dashboard.",
      "Booking confirmations, reminders and \"ready for collection\" messages sent for you.",
      "Flyer Lady: write a special once and post it to Facebook, with optional Facebook or Google ads on your own budget.",
      "A Results page showing which posts and ads brought bookings in."
    ],
    links: [EMAIL],
    next: ["How do I get started?", "What does it cost?", "How do you protect data?"]
  },
  {
    keys: ["start", "started", "onboard", "onboarding", "sign up", "signup", "register", "join", "try", "demo", "login", "log in", "account"],
    intro: "Getting started with PHANTA:",
    steps: [
      "Email us with your business name and town. We set up your account and send you your login.",
      "Log in to PHANTA with the link below.",
      "Inside PHANTA, the Ghost walks you through connecting WhatsApp, Facebook and Google, step by step."
    ],
    links: [LOGIN, EMAIL],
    next: ["What does it cost?", "What is PHANTA?"]
  },
  {
    keys: ["cost", "price", "pricing", "plan", "plans", "how much", "fee", "rand", "subscription"],
    intro: "PHANTA is a monthly subscription based on the size of your business, billed every 30 days, with 30 days' notice to cancel. Ads are optional and paid by you directly to Meta or Google, never through us. Email us for a quote.",
    links: [EMAIL],
    next: ["How do I get started?", "What is PHANTA?"]
  },
  {
    keys: ["whatsapp", "message", "messages", "chat", "ai", "bot", "reply"],
    intro: "PHANTA's WhatsApp assistant uses your business's own number:",
    steps: [
      "It answers questions and books customers in, and says clearly that it's AI.",
      "Your team can reply from PHANTA's Inbox, or from the WhatsApp Business app, and the AI steps back.",
      "Customers only get messages if they agreed to, and replying STOP stops specials and reminders.",
      "Reminders are only sent on weekdays 08:00 to 20:00 and Saturdays 09:00 to 13:00, never on Sundays or public holidays."
    ],
    next: ["How do you protect data?", "How do I get started?"]
  },
  {
    keys: ["marketing", "flyer", "special", "specials", "facebook", "instagram", "google", "ads", "advert", "promotion", "boost", "social"],
    intro: "Flyer Lady posts the specials you approve:",
    steps: [
      "Write a special once and approve it. Nothing is posted without your OK.",
      "Post it to your Facebook Page and as a WhatsApp Status picture, with a \"Book here\" link.",
      "Optional paid promotion: a Facebook ad and/or a Google search ad, with the amount and period you choose, charged to your own card.",
      "See the clicks and bookings from each special on the Results page."
    ],
    next: ["What does it cost?", "How do I get started?"]
  },
  {
    keys: ["popia", "popi", "privacy", "data", "personal information", "secure", "security", "protect", "safe", "information officer"],
    intro: "How we handle personal information under POPIA:",
    steps: [
      `${COMPANY.name} has a registered Information Officer: ${COMPANY.infoOfficer}.`,
      "Each client's customer data is kept separate, enforced by the database, and access keys are stored encrypted.",
      "For your customers we act on your behalf under a Data Processing Agreement. We never sell personal information.",
      "WhatsApp message text is cleared after 14 days, and inactive customers are anonymised after 3 years."
    ],
    links: [["Privacy Policy (POPIA)", LINKS.privacy], ["PAIA manual", LINKS.paia]],
    next: ["How do I request my information?", "Delete my data"]
  },
  {
    keys: ["paia", "request", "records", "access to information", "form 2", "manual", "my information"],
    intro: "To request a record or your personal information under PAIA or POPIA:",
    steps: [
      "Read our PAIA manual. It explains what we hold and how to ask.",
      `Send the request (PAIA Form 2, or a simple email for your own information) to ${COMPANY.email}.`,
      "We decide within 30 days. If you're unhappy with the answer, you can complain to the Information Regulator."
    ],
    links: [["PAIA manual", LINKS.paia], ["Email the Information Officer", `mailto:${COMPANY.email}?subject=PAIA%20%2F%20POPIA%20request`], ["Information Regulator", LINKS.regulator]],
    next: ["How do you protect data?", "Delete my data"]
  },
  {
    keys: ["delete", "deletion", "remove", "erase", "forget"],
    intro: "To have your personal information deleted:",
    steps: [
      "If you're a customer of one of our clients, ask that business first. They decide about your data, and we help them.",
      `Or email ${COMPANY.email} and we'll take care of it.`,
      "Data from Facebook can be deleted through our data deletion page."
    ],
    links: [["Data deletion page", LINKS.dataDeletion], ["Email the Information Officer", `mailto:${COMPANY.email}?subject=Deletion%20request`]],
    next: ["How do I request my information?"]
  },
  {
    keys: ["help", "support", "contact", "email", "phone", "call", "human", "person", "talk"],
    intro: "We usually reply within a day. Already a PHANTA user? The Ghost inside PHANTA answers setup questions straight away.",
    links: [EMAIL, LOGIN],
    next: ["How do I get started?"]
  }
];

const FALLBACK: Topic = {
  intro: "I'm not sure about that one. Try one of these, or email us and a person will answer.",
  keys: [],
  links: [EMAIL],
  next: ["What is PHANTA?", "How do I get started?", "POPIA & privacy", "PAIA manual"]
};
const WELCOME: Topic = {
  intro: "Hi 👻 I'm the Vanta Automations Ghost. Ask me about PHANTA, getting started, pricing, or POPIA and PAIA.",
  keys: [],
  next: ["What is PHANTA?", "How do I get started?", "POPIA & privacy", "PAIA manual"]
};

function match(question: string): Topic {
  const q = ` ${question.toLowerCase().replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ")} `;
  let best: Topic | null = null, bestScore = 0;
  for (const t of TOPICS) {
    const score = t.keys.reduce((n, k) => n + (q.includes(` ${k} `) || (k.includes(" ") && q.includes(k)) ? k.length : 0), 0);
    if (score > bestScore) { best = t; bestScore = score; }
  }
  return best ?? FALLBACK;
}

const QUICK: Link[] = [LOGIN, ["PAIA manual", LINKS.paia], ["POPIA / Privacy", LINKS.privacy], EMAIL];

export function GhostSupportWidget() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([{ role: "bot", topic: WELCOME }]);
  const [text, setText] = useState("");
  const end = useRef<HTMLDivElement>(null);

  useEffect(() => { end.current?.scrollIntoView({ block: "end" }); }, [msgs, open]);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const ask = (question: string) => {
    const q = question.trim();
    if (!q) return;
    setMsgs((m) => [...m, { role: "user", topic: { keys: [], intro: q } }, { role: "bot", topic: match(q) }]);
    setText("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-3">
      {open && (
        <section aria-label="Vanta Automations Ghost assistant" className="flex max-h-[min(640px,80vh)] w-[min(360px,calc(100vw-2rem))] flex-col rounded-2xl border border-rule bg-white text-ink shadow-[0_24px_60px_-24px_rgba(0,39,43,0.45)]">
          <header className="flex items-center justify-between border-b border-rule p-4">
            <div className="flex items-center gap-3">
              <span className="ghost-mark" aria-hidden="true" />
              <div>
                <p className="font-heading text-sm font-semibold">Vanta Automations Ghost</p>
                <p className="text-xs text-mute">Answers straight away. People reply within a day.</p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close the Ghost" className="text-mute transition-colors hover:text-ink">
              <X size={16} />
            </button>
          </header>

          <nav aria-label="Quick links" className="flex flex-wrap gap-2 border-b border-rule px-4 py-3">
            {QUICK.map(([label, href]) => (
              <a key={label} href={href} className="rounded-full border border-rule px-3 py-1 text-xs font-medium text-ink transition-colors hover:border-ink">
                {label}
              </a>
            ))}
          </nav>

          <div className="flex-1 space-y-3 overflow-y-auto p-4 text-sm" aria-live="polite">
            {msgs.map((m, i) =>
              m.role === "user" ? (
                <p key={i} className="ml-8 rounded-2xl bg-ink px-3 py-2 text-white">{m.topic.intro}</p>
              ) : (
                <div key={i} className="mr-4 rounded-2xl bg-paper px-3 py-3 leading-6 text-ink">
                  <p>{m.topic.intro}</p>
                  {m.topic.steps && (
                    <ol className="mt-2 list-decimal space-y-1 pl-5">{m.topic.steps.map((s) => <li key={s}>{s}</li>)}</ol>
                  )}
                  {m.topic.links && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {m.topic.links.map(([label, href]) => (
                        <a key={label} href={href} className="rounded-full bg-chartreuse px-3 py-1.5 text-xs font-medium text-ink transition-colors hover:bg-ink hover:text-white">
                          {label}
                        </a>
                      ))}
                    </div>
                  )}
                  {m.topic.next && i === msgs.length - 1 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {m.topic.next.map((n) => (
                        <button key={n} onClick={() => ask(n)} className="rounded-full border border-rule bg-white px-3 py-1 text-xs text-mute transition-colors hover:border-ink hover:text-ink">
                          {n}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )
            )}
            <div ref={end} />
          </div>

          <form onSubmit={(e) => { e.preventDefault(); ask(text); }} className="flex gap-2 border-t border-rule p-3">
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Ask the Ghost…"
              aria-label="Ask the Ghost a question"
              className="flex-1 rounded-full border border-rule bg-paper px-4 py-2 text-sm text-ink placeholder:text-mute focus:border-ink focus:outline-none"
            />
            <button type="submit" aria-label="Send" className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-chartreuse transition-colors hover:bg-[#06392F]">
              <Send size={15} />
            </button>
          </form>
        </section>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close the Ghost" : "Open the Ghost assistant"}
        aria-expanded={open}
        className="ghost-launcher"
      >
        <span className="ghost-shape" aria-hidden="true" />
        {!open && <span className="ghost-bubble">Need a hand? Ask me about PHANTA, POPIA or PAIA.</span>}
      </button>
    </div>
  );
}
