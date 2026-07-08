import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Kalam,
  Kiwi_Maru,
  Zen_Kurenaido,
} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const kalam = Kalam({
  variable: "--font-logo",
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

const zenKurenaido = Zen_Kurenaido({
  variable: "--font-handwritten",
  weight: "400",
  display: "swap",
  preload: false,
});

const kiwiMaru = Kiwi_Maru({
  variable: "--font-handwritten-accent",
  weight: "500",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "レガシーシステムの相談室 | ClavisFlow",
  description:
    "Windows業務システムの現状整理・改善を支援。WinForms、WPF、ASP.NET、Access、Excel VBA、VB6など、長く使われてきたシステムの診断から改善方針の整理、保守まで対応しています。",
  alternates: {
    canonical: "https://clavisflow.net/",
  },
  openGraph: {
    title: "レガシーシステムの相談室 | ClavisFlow",
    description:
      "Windows業務システムの現状整理・改善を支援。WinForms、WPF、ASP.NET、Access、Excel VBA、VB6など、長く使われてきたシステムの診断から改善方針の整理、保守まで対応しています。",
    url: "https://clavisflow.net/",
    type: "website",
  },
  icons: {
    icon: "/clavisflow-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} ${kalam.variable} ${zenKurenaido.variable} ${kiwiMaru.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
