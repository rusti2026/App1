import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LSAI Quantum — Corporate Mystery & Escape-Room Team Experiences",
  description:
    "LSAI Quantum designs immersive murder-mystery and escape-room team-building experiences for enterprise teams of 10–100+. Engineered collaboration, leadership and creativity outcomes with measurable ROI.",
  keywords: [
    "LSAI Quantum",
    "corporate team building",
    "murder mystery",
    "escape room",
    "team experiences",
    "leadership",
    "collaboration",
    "creativity",
  ],
  authors: [{ name: "LSAI Quantum Inc." }],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "LSAI Quantum — Corporate Mystery & Escape-Room Team Experiences",
    description:
      "Engineered murder-mystery & escape-room experiences for enterprise teams. Branded dossiers, measurable team-skill outcomes, groups of 10–100+.",
    url: "https://lsaiquantum.com",
    siteName: "LSAI Quantum",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LSAI Quantum — Corporate Mystery & Escape-Room Team Experiences",
    description:
      "Engineered murder-mystery & escape-room experiences for enterprise teams.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
