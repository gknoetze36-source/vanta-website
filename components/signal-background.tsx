"use client";

import { useEffect, useRef } from "react";

type Node = { x: number; y: number; vx: number; vy: number };
type Pulse = { a: Node; b: Node; t: number; chartreuse: boolean };

const NODE_COUNT = 26;
const CONNECT_DIST = 220;

export function SignalBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    let raf = 0;
    let nodes: Node[] = [];
    let pulses: Pulse[] = [];

    function resize() {
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx?.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function init() {
      if (!canvas) return;
      nodes = Array.from({ length: NODE_COUNT }, () => ({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15
      }));
    }

    function maybeSpawnPulse() {
      if (Math.random() < 0.018 && nodes.length > 1) {
        const a = nodes[Math.floor(Math.random() * nodes.length)];
        const candidates = nodes.filter((n) => n !== a && Math.hypot(n.x - a.x, n.y - a.y) < CONNECT_DIST);
        if (candidates.length) {
          const b = candidates[Math.floor(Math.random() * candidates.length)];
          pulses.push({ a, b, t: 0, chartreuse: Math.random() > 0.35 });
        }
      }
    }

    function draw() {
      if (!canvas || !ctx) return;
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
      });

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const d = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
          if (d < CONNECT_DIST) {
            ctx.strokeStyle = `rgba(249,250,251,${(1 - d / CONNECT_DIST) * 0.08})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      nodes.forEach((n) => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(249,250,251,0.3)";
        ctx.fill();
      });

      maybeSpawnPulse();
      pulses.forEach((p) => (p.t += 0.012));
      pulses = pulses.filter((p) => p.t <= 1);
      pulses.forEach((p) => {
        const x = p.a.x + (p.b.x - p.a.x) * p.t;
        const y = p.a.y + (p.b.y - p.a.y) * p.t;
        const color = p.chartreuse ? "224,255,79" : "249,250,251";
        const grad = ctx.createRadialGradient(x, y, 0, x, y, 8);
        grad.addColorStop(0, `rgba(${color},0.9)`);
        grad.addColorStop(1, `rgba(${color},0)`);
        ctx.beginPath();
        ctx.arc(x, y, 8, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      });

      raf = requestAnimationFrame(draw);
    }

    resize();
    init();
    draw();

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[-1] h-full w-full opacity-80"
    />
  );
}
