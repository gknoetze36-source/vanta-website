"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { PixelGhost } from "@/components/pixel-ghost";

export function GhostSupportWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-3">
      {open && (
        <div className="w-72 rounded-2xl border border-white/10 bg-[#00272B]/95 backdrop-blur-xl p-5 shadow-[0_0_40px_rgba(0,0,0,0.4)]">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-3">
              <PixelGhost size={36} glow={false} />
              <div>
                <p className="font-heading text-sm font-semibold text-white">Need a hand?</p>
                <p className="text-xs text-white/50">Usually replies within a day</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close support widget"
              className="text-white/40 hover:text-white transition-colors"
            >
              <X size={16} />
            </button>
          </div>
          <p className="text-sm text-white/62 leading-6 mb-4">
            Questions about automations, pricing, or a custom workflow? Send us a message and we&apos;ll get back to
            you.
          </p>
          <a
            href="mailto:Hello@Vantaautomations.co.za"
            className="block w-full text-center rounded-full bg-[#E0FF4F] text-[#00272B] text-sm font-medium py-2.5 hover:bg-white transition-colors"
          >
            Email VANTA
          </a>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close support widget" : "Open support widget"}
        className="w-16 h-16 rounded-full bg-[#06392F] border border-[#E0FF4F]/25 flex items-center justify-center hover:border-[#E0FF4F]/60 transition-colors shadow-[0_0_24px_rgba(224,255,79,0.15)]"
      >
        <PixelGhost size={34} />
      </button>
    </div>
  );
}
