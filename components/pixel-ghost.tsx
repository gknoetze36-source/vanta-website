"use client";

const GHOST_GRID = [
  [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
  [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1],
  [1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1],
  [1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

type PixelGhostProps = {
  size?: number;
  eyeOffsetX?: number;
  eyeOffsetY?: number;
  color?: string;
  eyeColor?: string;
  glow?: boolean;
  className?: string;
};

export function PixelGhost({
  size = 96,
  eyeOffsetX = 0,
  eyeOffsetY = 0,
  color = "#E0FF4F",
  eyeColor = "#00272B",
  glow = true,
  className = ""
}: PixelGhostProps) {
  const cell = size / 12;

  return (
    <svg
      width={size}
      height={(size / 12) * 11}
      shapeRendering="crispEdges"
      className={className}
      style={
        glow
          ? { filter: "drop-shadow(0 0 14px rgba(224,255,79,0.5)) drop-shadow(0 0 32px rgba(224,255,79,0.22))" }
          : undefined
      }
    >
      {GHOST_GRID.map((row, ry) =>
        row.map((v, rx) =>
          v ? <rect key={`${rx}-${ry}`} x={rx * cell} y={ry * cell} width={cell} height={cell} fill={color} /> : null
        )
      )}
      <rect x={3 * cell + eyeOffsetX} y={4 * cell + eyeOffsetY} width={cell} height={cell} fill={eyeColor} />
      <rect x={7 * cell + eyeOffsetX} y={4 * cell + eyeOffsetY} width={cell} height={cell} fill={eyeColor} />
    </svg>
  );
}
