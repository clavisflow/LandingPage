import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ClavisFlow | レガシーシステムの相談室",
  description:
    "VB6、Access、Excel VBA、WindowsForm、ASP、ASP.NET などのレガシーシステムを整理し、改善やリプレース判断を支援する相談サービスです。",
  alternates: {
    canonical: "https://clavisflow.net/",
  },
  openGraph: {
    title: "ClavisFlow | レガシーシステムの相談室",
    description:
      "VB6、Access、Excel VBA、WindowsForm、ASP、ASP.NET などのレガシーシステムを整理し、改善やリプレース判断を支援する相談サービスです。",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
