"use client";

import { motion } from "framer-motion";

const particles = Array.from({ length: 58 }, (_, index) => ({
  id: index,
  left: `${4 + ((index * 31) % 92)}%`,
  top: `${7 + ((index * 17) % 84)}%`,
  delay: (index % 7) * 0.35,
  size: index % 9 === 0 ? 7 : index % 4 === 0 ? 5 : 3
}));

export function PixelParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute bg-chartreuse/50"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size
          }}
          animate={{
            opacity: [0.06, 0.58, 0.1],
            y: [0, -22, 0],
            x: [0, particle.id % 2 ? 8 : -8, 0],
            scale: [1, 1.4, 1]
          }}
          transition={{
            duration: 4.8,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}
