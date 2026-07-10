"use client";

import { useEffect, useRef, useState } from "react";
import { PixelGhost } from "@/components/pixel-ghost";

type FloatingGhostProps = {
  size?: number;
  className?: string;
};

export function FloatingGhost({ size = 96, className = "" }: FloatingGhostProps) {
  const [bob, setBob] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;
    let raf = 0;
    let t = 0;
    const animate = () => {
      t += 0.03;
      setBob(Math.sin(t) * 8);
      raf = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(raf);
  }, []);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = wrapRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMouse({
      x: (e.clientX - rect.left) / rect.width - 0.5,
      y: (e.clientY - rect.top) / rect.height - 0.5
    });
  };

  return (
    <div
      ref={wrapRef}
      onMouseMove={handleMove}
      onMouseLeave={() => setMouse({ x: 0, y: 0 })}
      className={`pointer-events-auto select-none ${className}`}
      style={{ transform: `translateY(${bob}px) rotate(${mouse.x * 6}deg)` }}
    >
      <PixelGhost size={size} eyeOffsetX={mouse.x * 4} eyeOffsetY={mouse.y * 3} />
    </div>
  );
}
