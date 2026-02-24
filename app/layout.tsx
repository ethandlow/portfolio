import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScrollLinks } from "@/components/SmoothScrollLinks";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ethanlow.dev"),
  title: {
    default: "Ethan Low — Software Engineer",
    template: "%s | Ethan Low",
  },
  description:
    "I build fast, reliable software tools. Currently focused on trading infrastructure and risk management platforms.",
  keywords: ["software engineer", "developer", "trading platform", "fintech", "TypeScript", "React"],
  authors: [{ name: "Ethan Low" }],
  creator: "Ethan Low",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ethanlow.dev",
    siteName: "Ethan Low",
    title: "Ethan Low — Software Engineer",
    description:
      "I build fast, reliable software tools. Currently focused on trading infrastructure and risk management platforms.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ethan Low — Software Engineer",
    description:
      "I build fast, reliable software tools. Currently focused on trading infrastructure and risk management platforms.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-black text-[#ededed] antialiased">
        <SmoothScrollLinks />
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
