"use client";

import { CheckCircle2, Mail, Send } from "lucide-react";
import { FormEvent, useState } from "react";

const appTypes = [
  "WinForms",
  "WPF",
  "ASP.NET",
  "Classic ASP",
  "Access",
  "Excel / Excel VBA",
  "VB6",
  "SQL Server",
  "帳票",
  "データベース",
  "バッチ処理",
  "外部連携",
  "その他",
];

const concernOptions = [
  "日々の業務に支障が出ている",
  "保守できる担当者が限られている",
  "セキュリティ面が心配",
  "手作業や二重入力が多い",
  "バックアップや復旧手順が不安",
  "開発元や前任者に相談しづらい",
  "改修の影響範囲がわからない",
  "将来的な移行やリプレースを考えたい",
  "その他",
];

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mjgqzvrp", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to submit the contact form.");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-md border border-[#d9ded6] bg-white p-6 shadow-[0_18px_60px_rgba(62,54,41,0.08)] sm:p-8"
    >
      <div className="flex items-center gap-3 border-b border-[#e3e6df] pb-5">
        <div className="flex size-12 items-center justify-center rounded-md bg-[#315940] text-white">
          <Mail size={24} strokeWidth={1.6} aria-hidden="true" />
        </div>
        <div>
          <h2 className="text-xl font-semibold">相談フォーム</h2>
          <p className="mt-1 text-sm text-[#5f6a61]">
            通常2営業日以内に返信します。営業目的のご連絡はいたしません。
          </p>
        </div>
      </div>

      {status === "success" ? (
        <div
          className="mt-6 rounded-md border border-[#b9d6bf] bg-[#f0f7f1] p-5 text-[#244331]"
          role="status"
        >
          <div className="flex items-start gap-3">
            <CheckCircle2
              size={24}
              strokeWidth={1.8}
              className="mt-0.5 shrink-0 text-[#315940]"
              aria-hidden="true"
            />
            <div>
              <p className="font-semibold">送信が完了しました</p>
              <p className="mt-2 text-sm leading-7">
                お問い合わせありがとうございます。内容を確認のうえ、通常2営業日以内にご連絡します。
              </p>
            </div>
          </div>
        </div>
      ) : null}

      {status === "error" ? (
        <p
          className="mt-6 rounded-md border border-[#e5b8b8] bg-[#fff5f5] p-4 text-sm font-semibold text-[#9c4f4d]"
          role="alert"
        >
          送信できませんでした。時間をおいてもう一度お試しください。
        </p>
      ) : null}

      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold">
          お名前
          <input
            name="name"
            type="text"
            autoComplete="name"
            required
            className="h-12 rounded-md border border-[#cfd8cf] bg-[#fbfaf7] px-4 text-base font-normal outline-none transition focus:border-[#315940] focus:bg-white focus:ring-2 focus:ring-[#315940]/15"
          />
        </label>

        <label className="grid gap-2 text-sm font-semibold">
          メールアドレス
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            className="h-12 rounded-md border border-[#cfd8cf] bg-[#fbfaf7] px-4 text-base font-normal outline-none transition focus:border-[#315940] focus:bg-white focus:ring-2 focus:ring-[#315940]/15"
          />
        </label>

        <label className="grid gap-2 text-sm font-semibold">
          会社名・組織名
          <input
            name="organization"
            type="text"
            autoComplete="organization"
            className="h-12 rounded-md border border-[#cfd8cf] bg-[#fbfaf7] px-4 text-base font-normal outline-none transition focus:border-[#315940] focus:bg-white focus:ring-2 focus:ring-[#315940]/15"
          />
        </label>

        <fieldset className="grid gap-3 rounded-md border border-[#d9ded6] bg-[#fbfaf7] p-4 lg:col-span-2">
          <legend className="px-1 text-sm font-semibold">相談対象</legend>
          <div className="grid gap-2 sm:grid-cols-3 lg:grid-cols-4">
            {appTypes.map((appType) => (
              <label
                key={appType}
                className="flex min-h-10 items-center gap-2 rounded-md border border-[#dce3dc] bg-white px-3 py-2 text-sm font-medium text-[#2f3932]"
              >
                <input
                  type="checkbox"
                  name="app_types[]"
                  value={appType}
                  className="size-4 rounded border-[#9caf9d] accent-[#315940]"
                />
                <span className="whitespace-nowrap">{appType}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset className="grid gap-3 rounded-md border border-[#d9ded6] bg-[#fbfaf7] p-4 lg:col-span-2">
          <legend className="px-1 text-sm font-semibold">
            気になっていること
          </legend>
          <div className="grid gap-2 sm:grid-cols-2">
            {concernOptions.map((concern) => (
              <label
                key={concern}
                className="flex min-h-10 items-center gap-3 rounded-md border border-[#dce3dc] bg-white px-3 py-2 text-sm font-medium text-[#2f3932]"
              >
                <input
                  type="checkbox"
                  name="concerns[]"
                  value={concern}
                  className="size-4 rounded border-[#9caf9d] accent-[#315940]"
                />
                <span>{concern}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <label className="grid gap-2 text-sm font-semibold lg:col-span-2">
          相談内容
          <textarea
            name="message"
            required
            rows={7}
            placeholder="対象システム、困っていること、相談したい内容などを入力してください。"
            className="min-h-40 resize-y rounded-md border border-[#cfd8cf] bg-[#fbfaf7] px-4 py-3 text-base font-normal leading-7 outline-none transition focus:border-[#315940] focus:bg-white focus:ring-2 focus:ring-[#315940]/15"
          />
        </label>

        <input
          type="hidden"
          name="_subject"
          value="ClavisFlow 相談フォームからのお問い合わせ"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-7 inline-flex h-12 w-full items-center justify-center gap-3 rounded-md bg-[#315940] px-6 text-base font-semibold text-white transition hover:bg-[#274a36] disabled:cursor-not-allowed disabled:bg-[#87998b]"
      >
        {status === "submitting" ? "送信中..." : "送信する"}
        <Send size={18} strokeWidth={2} aria-hidden="true" />
      </button>
    </form>
  );
}
