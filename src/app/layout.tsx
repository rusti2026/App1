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
  title: "LSAI Quantum — Empowering businesses with AI-driven solutions",
  description:
    "LSAI Quantum is an engineering partner for AI, data, cyber security, cloud & digital transformation. From intelligent automation to predictive analytics, we create AI-driven solutions that redefine industries.",
  keywords: [
    "LSAI Quantum",
    "AI Transformation",
    "Digital Transformation",
    "Quantum Computing",
    "Gen AI",
    "Machine Learning",
    "Internet of Things",
    "Block Chain",
    "Cyber Security",
    "Cloud Engineering",
    "Data Analytics",
    "Managed Services",
  ],
  authors: [{ name: "LSAI Quantum Inc." }],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "LSAI Quantum — Empowering businesses with AI-driven solutions",
    description:
      "Engineering partner for AI, data, cyber security, cloud & digital transformation. From intelligent automation to predictive analytics.",
    url: "https://lsaiquantum.com",
    siteName: "LSAI Quantum",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LSAI Quantum — Empowering businesses with AI-driven solutions",
    description:
      "Engineering partner for AI, data, cyber security, cloud & digital transformation.",
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
