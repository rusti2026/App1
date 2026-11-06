import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LSAI Quantum - Frontier AI, Quantum, Robotics, Cloud & Security",
  description:
    "LSAI Quantum builds frontier systems: quantum computing, enterprise AI agents, humanoid robots for household work, industrial AI for manufacturing, autonomous delivery drones, quantum-optimized shipping and supply chains, and AI-first drug discovery — plus AI transformation, machine learning, cloud engineering and cyber security.",
  keywords: [
    "LSAI Quantum",
    "Quantum Computing",
    "Enterprise AI Agents",
    "AI Agents",
    "Humanoid Robotics",
    "Household Robots",
    "Physical AI",
    "Industrial AI",
    "Manufacturing AI",
    "Delivery Drones",
    "Autonomous Delivery",
    "Quantum Shipping",
    "Supply Chain Optimization",
    "SCM",
    "Drug Discovery AI",
    "Medical AI",
    "Machine Learning",
    "Digital Transformation",
    "Cyber Security",
  ],
  authors: [{ name: "LSAI Quantum Inc." }],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "LSAI Quantum - Frontier AI, Quantum, Robotics, Cloud & Security",
    description:
      "Quantum computing, enterprise AI agents, humanoid household robots, industrial AI, delivery drones, quantum-optimized shipping and supply chains, and AI-first drug discovery.",
    url: "https://lsaiquantum.com",
    siteName: "LSAI Quantum",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LSAI Quantum - Frontier AI, Quantum, Robotics, Cloud & Security",
    description:
      "Quantum computing, enterprise AI agents, humanoid household robots, industrial AI, delivery drones, quantum shipping, SCM, medical AI, cloud engineering and cyber security.",
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
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
