import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, MessageCircle, ShieldCheck } from "lucide-react";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "無料相談フォーム | ClavisFlow",
  description:
    "Windowsアプリ、ASP.NET、Access・Excel VBAなど、長く使われてきた業務システムに関するご相談を受け付けています。困りごとが整理できていない段階でも、お気軽にご相談ください。",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] text-[#1f2420]">
      <header className="border-b border-[#d9ded6] bg-[#f8f6f0]">
        <div className="mx-auto flex h-20 max-w-[1120px] items-center justify-between px-5 sm:px-8">
          <Link
            href="/"
            className="brand-logo text-[1.7rem] text-[#2f5f43]"
            aria-label="ClavisFlow トップへ戻る"
          >
            ClavisFlow
          </Link>
          <Link
            href="/"
            className="inline-flex h-10 items-center gap-2 rounded-md border border-[#b8c4b8] bg-white px-4 text-sm font-semibold text-[#315940] transition hover:bg-[#f2f6f1]"
          >
            <ArrowLeft size={16} strokeWidth={2} aria-hidden="true" />
            トップへ戻る
          </Link>
        </div>
      </header>

      <section className="mx-auto grid max-w-[1040px] gap-8 px-5 py-10 sm:px-8 lg:py-14">
        <div className="text-center">
          <div className="inline-flex size-16 items-center justify-center rounded-full bg-[#e4ebe1] text-[#315940]">
            <MessageCircle size={32} strokeWidth={1.5} aria-hidden="true" />
          </div>
          <h1 className="mt-6 text-3xl font-semibold leading-tight sm:text-4xl">
            まずは状況をお聞かせください
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[#404b43]">
            保守、改修、リプレース前の現状整理など、<br/>
            まだ相談内容が固まっていない段階でも大丈夫です。
          </p>

        </div>

        <ContactForm />
      </section>

      <footer className="flex flex-col items-center gap-2 pb-8 text-center text-xs text-[#6b746c]">
        <Link href="/privacy" className="transition hover:text-[#315940]">
          プライバシーポリシー
        </Link>
        <span>© 2026 ClavisFlow</span>
      </footer>
    </main>
  );
}
