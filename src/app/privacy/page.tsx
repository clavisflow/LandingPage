import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileText, Mail, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "プライバシーポリシー | ClavisFlow",
  description:
    "ClavisFlowにおける個人情報の取得、利用目的、管理、第三者提供、開示等の請求、お問い合わせ窓口について記載しています。",
};

const policySections = [
  {
    title: "1. 取得する情報",
    body: [
      "お問い合わせフォームの送信時に、お名前、メールアドレス、会社名・組織名、相談対象、相談内容などを取得します。",
      "サイトの運用上、アクセス日時、閲覧ページ、利用環境などが記録される場合があります。",
    ],
  },
  {
    title: "2. 利用目的",
    body: [
      "取得した情報は、お問い合わせへの回答、相談内容の確認、必要な連絡、サービス改善のために利用します。",
      "法令で認められる場合を除き、目的の範囲を超えて利用しません。",
    ],
  },
  {
    title: "3. 第三者提供",
    body: [
      "法令に基づく場合やご本人の同意がある場合を除き、個人情報を第三者に提供しません。",
    ],
  },
  {
    title: "4. 外部サービスの利用",
    body: [
      "お問い合わせフォームの送信処理にはFormspreeを利用しており、入力内容は同サービスを経由して安全に送信されます。",
    ],
  },
  {
    title: "5. 安全管理",
    body: [
      "取得した個人情報は、不正アクセス、紛失、改ざん、漏えい等を防ぐため、適切に管理します。",
    ],
  },
  {
    title: "6. 開示・訂正・利用停止等",
    body: [
      "開示、訂正、削除、利用停止等のご請求があった場合は、ご本人確認のうえ、法令に従って対応します。",
    ],
  },
  {
    title: "7. Cookie等の利用",
    body: [
      "本サイトでは、利便性向上や利用状況の把握のため、Cookie等を利用する場合があります。",
      "Cookieはブラウザの設定により無効にできます。",
    ],
  },
  {
    title: "8. ポリシーの変更",
    body: [
      "本ポリシーは、法令やサービス内容の変更に応じて改定することがあります。",
      "重要な変更がある場合は、本サイト上でお知らせします。",
    ],
  },
];

export default function PrivacyPage() {
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

      <section className="mx-auto max-w-[1040px] px-5 py-10 sm:px-8 lg:py-14">
        <div className="text-center">
          <div className="inline-flex size-16 items-center justify-center rounded-full bg-[#e4ebe1] text-[#315940]">
            <ShieldCheck size={32} strokeWidth={1.5} aria-hidden="true" />
          </div>
          <h1 className="mt-6 text-3xl font-semibold leading-tight sm:text-4xl">
            プライバシーポリシー
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[#404b43]">
            ClavisFlowは、お問い合わせやご相談に関して取得する個人情報を、
            必要な範囲で適切に取り扱います。
          </p>
          <p className="mt-4 text-sm text-[#6b746c]">制定日: 2026年7月7日</p>
        </div>

        <div className="mt-10 rounded-md border border-[#d9ded6] bg-white p-6 shadow-[0_18px_60px_rgba(62,54,41,0.08)] sm:p-8">
          <div className="flex items-center gap-3 border-b border-[#e3e6df] pb-5">
            <div className="flex size-12 items-center justify-center rounded-md bg-[#315940] text-white">
              <FileText size={24} strokeWidth={1.6} aria-hidden="true" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">個人情報の取扱い</h2>
              <p className="mt-1 text-sm text-[#5f6a61]">
                お問い合わせフォームを中心とした取扱い方針です。
              </p>
            </div>
          </div>

          <div className="mt-7 space-y-8">
            {policySections.map((section) => (
              <section key={section.title}>
                <h3 className="text-lg font-semibold text-[#1f2420]">
                  {section.title}
                </h3>
                <div className="mt-3 space-y-3 text-sm leading-7 text-[#404b43]">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}

            <section className="rounded-md border border-[#d9ded6] bg-[#fbfaf7] p-5">
              <div className="flex items-start gap-3">
                <Mail
                  size={22}
                  strokeWidth={1.7}
                  className="mt-0.5 shrink-0 text-[#315940]"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="text-lg font-semibold text-[#1f2420]">
                    9. お問い合わせ窓口
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#404b43]">
                    個人情報の取扱いに関するお問い合わせは、
                    お問い合わせフォームよりご連絡ください。
                  </p>
                  <Link
                    href="/contact"
                    className="mt-4 inline-flex h-10 items-center justify-center rounded-md bg-[#315940] px-5 text-sm font-semibold text-white transition hover:bg-[#274a36]"
                  >
                    お問い合わせフォームへ
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      <footer className="pb-8 text-center text-xs text-[#6b746c]">
        © 2026 ClavisFlow
      </footer>
    </main>
  );
}
