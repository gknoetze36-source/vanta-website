import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        chartreuse: "#E0FF4F",
        paper: "#F2F5F1",
        ink: "#00272B",
        mute: "#4A5F5B",
        rule: "#D5DED8"
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"]
      },
    }
  },
  plugins: []
};

export default config;
