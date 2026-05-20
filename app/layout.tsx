import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gknoetze36-source.github.io/vanta-website"),
  title: "VANTA Automations | Intelligent business automation infrastructure",
  description:
    "Premium automation infrastructure for bookings, WhatsApp workflows, reminders, analytics, and customer communication across service businesses.",
  openGraph: {
    title: "VANTA Automations",
    description:
      "Automation infrastructure for service businesses that need cleaner bookings, faster communication, and measurable recovery.",
    url: "https://gknoetze36-source.github.io/vanta-website",
    siteName: "VANTA Automations",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
