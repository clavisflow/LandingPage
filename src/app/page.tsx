import {
  ArchiveX,
  ArrowRight,
  Check,
  ChevronDown,
  Code2,
  Database,
  Download,
  FileBarChart,
  FileQuestion,
  FileSpreadsheet,
  GitCompareArrows,
  Mail,
  MessageCircle,
  Search,
  SplitIcon,
  Stethoscope,
  UserRound,
  UserX2,
} from "lucide-react";
import Image from "next/image";
import { ReportCarousel } from "./ReportCarousel";

const concerns = [
  {
    icon: UserX2,
    title: "担当者がいなくなった",
    text: "システムの全体像が分からない。",
  },
  {
    icon: ArchiveX,
    title: "ブラックボックス化",
    text: "古い技術で、仕様書も残っていない。",
  },
  {
    icon: FileQuestion,
    title: "改修コストが読めない",
    text: "ちょっとした変更でも影響範囲が分からない。",
  },
  {
    icon: SplitIcon,
    title: "リプレースすべきか判断できない",
    text: "現状維持とリプレース、どちらが最適か判断したい。",
  },
];

const capabilities = [
  "現状の整理・可視化",
  "リスクや課題の洗い出し",
  "改善の選択肢をご提案",
  "必要に応じた改善支援までサポート",
];

const flow = [
  {
    icon: MessageCircle,
    title: "ヒアリング（無料）",
    text: "現在の状況やお困りごとをお聞きします。",
  },
  {
    icon: Search,
    title: "調査・分析",
    text: "システムを調査し、課題を整理します。",
  },
  {
    icon: FileBarChart,
    title: "診断レポートのご提出",
    text: "分かりやすいレポートで現状と課題を可視化します。",
  },
  {
    icon: UserRound,
    title: "ご提案・ご相談",
    text: "改善の選択肢や今後の進め方をご提案します。",
  },
];

const tools = [
  {
    icon: Stethoscope,
    title: "Excel Doctor",
    text: "Excelファイルの構造や数式・マクロの問題点をチェック",
    tone: "green",
    url: "https://exceldoctor.clavisflow.net/",
  },
  {
    icon: GitCompareArrows,
    title: "Excel Compare",
    text: "Excelファイルの差分を分かりやすく比較。数式・書式・マクロまで比較可能。",
    tone: "blue",
    url: "https://excelcompare.clavisflow.net/",
  },
  {
    icon: Database,
    title: "Access Explorer",
    text: "Accessファイルの構造を可視化。そのまま仕様書として使えるレポート出力可能。",
    tone: "rose",
    url: "https://accessexplorer.clavisflow.net/",
  },
];

const reportSamples = [
  {
    href: "/docs/clavisflow-report-sample.pdf",
    slides: [
      "/report-previews/summary/slide-01.png",
      "/report-previews/summary/slide-02.png",
      "/report-previews/summary/slide-03.png",
      "/report-previews/summary/slide-04.png",
      "/report-previews/summary/slide-05.png",
      "/report-previews/summary/slide-06.png",
      "/report-previews/summary/slide-07.png",
      "/report-previews/summary/slide-08.png",
      "/report-previews/summary/slide-09.png",
      "/report-previews/summary/slide-10.png",
    ],
    icon: FileBarChart,
    title: "診断レポート",
    format: "PDF",
    text: "経営判断や共有に使いやすい、診断レポートです。",
  },
  {
    href: "/docs/clavisflow-detail-sample.xlsx",
    preview: "/report-previews/report-detail.png",
    icon: FileSpreadsheet,
    title: "診断結果詳細",
    format: "Excel",
    text: "診断結果を一覧で追える、詳細データです。",
  },
];

const faqs = [
  {
    question: "費用はかかりますか？",
    answer: "初回相談は無料です。診断や調査が必要な場合は、対象範囲を確認したうえで事前にお見積りします。",
  },
  {
    question: "どのくらいの期間で診断してもらえますか？",
    answer: "ご相談内容にもよりますが、資料確認後おおよそ1〜2週間が目安です。",
  },
  {
    question: "相談だけでも大丈夫ですか？",
    answer: "大丈夫です。無理な営業はせず、現状整理だけでも次の判断がしやすくなるようにお手伝いします。",
  },
  {
    question: "対応エリアを教えてください。",
    answer: "全国対応しています。打ち合わせや診断、保守・開発はすべてオンラインで実施しています。",
  },
  {
    question: "改修も依頼できますか？",
    answer: "もちろんです。改修依頼のみでも承ります。",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] text-[#1f2420]">
      <header className="absolute left-0 right-0 top-0 z-20">
        <div className="hero-header-inner flex h-20 items-center justify-between">
          <div className="flex items-center gap-5">
            <p className="brand-logo text-[1.7rem] text-[#2f5f43]">ClavisFlow</p>
            <p className="text-xs font-semibold sm:text-sm">
              レガシーシステムの相談室
            </p>
          </div>
        </div>
      </header>

      <section className="hero-shell relative overflow-hidden border-b border-[#d9ded6] bg-[#f8f6f0]">
        <div className="hero-visual" aria-hidden="true" />
        <div className="hero-fade" aria-hidden="true" />

        <div className="hero-content relative z-10 flex min-h-[680px] items-center pb-16 pt-28">
          <div className="max-w-2xl">
            <h1 className="hero-title text-[#0b100d]">
              <span className="hero-title-line">
                <span className="hero-word hero-kana-mada">そのシステム、</span>
                {/* <span className="hero-kana hero-kana-ya"></span> */}
                {/* <span className="hero-word hero-word-access">システム</span> */}
              </span>
              <span className="hero-title-line hero-title-line-marked">
                <span className="hero-marker-target">
                  <span className="hero-kana hero-kana-mada">まだ</span>
                  <span className="hero-word hero-word-geneki">現役</span>
                </span>
                <span className="hero-kana hero-kana-tail">ですよね。</span>
              </span>
            </h1>
            <p className="mt-8 text-lg font-semibold leading-9 text-[#202620]">
              長く使われてきたシステムには、それだけの理由があります。
              <br />
              無理にリプレースする前に、
              <br />
              まずは現状を整理してみませんか。
            </p>
            <div className="mt-7 flex max-w-xl flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
              <a
                href="/contact"
                className="hero-cta hero-cta-primary inline-flex min-h-12 max-w-full items-center justify-center gap-3 rounded-md bg-[#315940] px-7 py-3 text-white shadow-sm transition hover:bg-[#274a36]"
              >
                <MessageCircle size={18} strokeWidth={2.1} aria-hidden="true" />
                <span className="hero-cta-text whitespace-nowrap">相談してみる (無料)</span>
              </a>
              <a
                href="#report-sample"
                className="hero-cta-secondary inline-flex min-h-12 max-w-full items-center justify-center gap-2 rounded-md border border-[#315940] bg-white/86 px-5 py-3 text-sm font-semibold text-[#315940] shadow-sm transition hover:bg-[#f4faf5]"
              >
                <FileBarChart size={17} strokeWidth={2} aria-hidden="true" />
                <span className="whitespace-nowrap">診断レポートを見る</span>
              </a>
            </div>
            <div className="mt-8 flex max-w-lg flex-wrap gap-3">
              {["Windowsアプリ", "WinForms", "WPF", "ASP.NET", "Classic ASP", "Access", "Excel VBA", "SQL Server", "C#", "VB.NET", "VB6"].map(
                (tag) => (
                <span
                  key={tag}
                  className="min-w-20 rounded-full border border-[#809283] bg-white/70 px-5 py-2 text-center text-sm font-medium text-[#1f2a22]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-10 sm:px-8 sm:py-12">
        <h2 className="text-center text-2xl font-semibold sm:text-3xl">
          こんなお悩みありませんか？
        </h2>
        <div className="mt-9 grid gap-y-8 md:grid-cols-4 md:divide-x md:divide-[#d9ded6]">
          {concerns.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="flex flex-col items-center px-5 text-center"
            >
              <Icon size={54} strokeWidth={1.4} className="text-[#56715e]" />
              <h3 className="mt-5 text-base font-semibold">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-[#455149]">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 pb-8 sm:px-8">
        <div className="grid gap-8 rounded-md bg-white/76 p-7 shadow-[0_18px_70px_rgba(62,54,41,0.08)] md:grid-cols-[0.85fr_1.65fr] md:p-8">
          <div className="md:border-r md:border-[#d9ded6] md:pr-8">
            <h2 className="text-2xl font-semibold">ClavisFlowでできること</h2>
            <ul className="mt-7 space-y-4">
              {capabilities.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base">
                  <Check
                    size={20}
                    strokeWidth={3}
                    className="mt-0.5 text-[#3f6c4f]"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">診断の流れ</h2>
            <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {flow.map(({ icon: Icon, title, text }, index) => (
                <article key={title} className="relative">
                  {index < flow.length - 1 ? (
                    <ArrowRight
                      size={18}
                      strokeWidth={1.6}
                      className="absolute -right-4 top-8 hidden text-[#b9c0b8] lg:block"
                      aria-hidden="true"
                    />
                  ) : null}
                  <div className="flex size-16 items-center justify-center rounded-full border border-[#dfe4dc] bg-white text-[#426850]">
                    <Icon size={30} strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-sm font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#4e5b52]">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="report-sample"
        className="scroll-mt-8 mx-auto max-w-[1440px] px-5 py-3 sm:px-8"
      >
        <div className="rounded-md border border-[#e4dfd4] bg-[#f4f0e8] p-5 shadow-[0_18px_55px_rgba(62,54,41,0.06)] md:p-6">
          <div>
            <h2 className="text-2xl font-semibold leading-snug">診断レポート例</h2>
            <p className="mt-4 text-sm leading-7 text-[#4b564e]">
              システム診断でご提供する成果物のサンプルを掲載しています。
            </p>
          </div>
          <div className="mt-5 grid items-start gap-5 lg:grid-cols-2">
            {reportSamples.map(
              ({ href, preview, slides, icon: Icon, title, format, text }) => {
                if (slides) {
                  return (
                    <ReportCarousel
                      key={href}
                      href={href}
                      slides={slides}
                      title={title}
                      format={format}
                      text={text}
                    />
                  );
                }

                return (
                  <article
                    key={href}
                    className="overflow-hidden rounded-md border border-[#d7d2c6] bg-white/92 shadow-[0_12px_35px_rgba(62,54,41,0.07)]"
                  >
                    <div className="border-b border-[#d7d2c6] bg-[#fbfaf7] px-5 py-3">
                      <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-[#6b746c]">
                        <Icon size={16} strokeWidth={1.7} aria-hidden="true" />
                        {format}
                      </p>
                    </div>
                    <div className="report-preview overflow-hidden border-b border-[#d7d2c6] bg-white">
                      <Image
                        src={preview}
                        alt={`${title}サンプルのプレビュー`}
                        width={1600}
                        height={900}
                        className="aspect-video w-full object-cover object-left-top"
                      />
                    </div>
                    <div className="flex min-w-0 flex-col gap-4 px-5 py-4 sm:flex-row sm:items-end sm:justify-between">
                      <div className="min-w-0">
                        <h3 className="text-lg font-semibold text-[#1f2420]">
                          {title}
                        </h3>
                        <p className="mt-1 text-sm leading-6 text-[#4b564e]">
                          {text}
                        </p>
                      </div>
                      <a
                        href={href}
                        className="inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-md bg-[#315940] px-4 text-sm font-semibold text-white transition hover:bg-[#274a36] sm:self-end"
                      >
                        <Download size={16} strokeWidth={2} aria-hidden="true" />
                        サンプルをダウンロード
                      </a>
                    </div>
                  </article>
                );
              },
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1440px] gap-8 px-5 py-8 sm:px-8 md:grid-cols-[0.72fr_2.28fr]">
        <div>
          <h2 className="text-2xl font-semibold">無料ツールも公開中</h2>
          <p className="mt-5 text-base leading-8 text-[#404b43]">
            日常業務の「困りごと」を見える化する<br />
            無料ツールを公開しています。
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {tools.map(({ icon: Icon, title, text, tone, url }) => (
            <a
              key={title}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-md border border-[#dce1d8] bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div
                className={`tool-icon tool-icon-${tone} flex size-16 items-center justify-center rounded-md`}
              >
                <Icon size={34} strokeWidth={1.4} aria-hidden="true" />
              </div>
              <h3 className="mt-5 font-semibold">{title}</h3>
              <p className="mt-3 min-h-12 text-sm leading-6 text-[#4b564e]">
                {text}
              </p>
              <ArrowRight
                size={18}
                className="ml-auto mt-3 text-[#3d5c46] transition group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-[1440px] gap-10 border-t border-[#d9ded6] px-5 py-8 sm:px-8 md:grid-cols-2">
        <div className="grid gap-7 sm:grid-cols-[8rem_1fr]">
          <div
            className="profile-photo flex size-28 items-center justify-center rounded-full bg-[#e5e1da] text-[#60705f]"
            aria-hidden="true"
          >
            <Image
              src="/profile-icon.png"
              alt="プロフィールアイコン"
              width={112}
              height={112}
              className="rounded-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold">プロフィール</h2>
            <p className="mt-4 text-sm leading-7 text-[#3f4942]">
              25年以上、システム開発・保守に携わってきました。
              <br />
              C#、ASP.NET、Blazorを中心に、VB6、VBA、Classic ASPなど、新旧さまざまな技術に対応しています。
              <br />
              困ったときに、「まず相談してみよう」と思っていただける技術者を目指しています。
            </p>
            <div className="mt-4 text-sm flex flex-wrap gap-2">
              ・IPA プロジェクトマネージャ試験（高度情報処理技術者）<br/>
              ・AWS 認定 ソリューションアーキテクト - アソシエイト
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href="https://github.com/clavisflow"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-8 items-center gap-1 rounded border border-[#9caf9d] px-3 text-xs font-medium"
              >
                <Code2 size={14} aria-hidden="true" />
                GitHub
              </a>
              <a
                href="https://zenn.dev/clavisflow"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-8 items-center rounded border border-[#9caf9d] px-3 text-xs font-medium"
              >
                Zenn
              </a>
              <a
                href="https://x.com/clavisflow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-8 items-center rounded border border-[#9caf9d] px-3 text-xs font-medium"
              >
                X
              </a>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold">よくあるご質問</h2>
          <div className="mt-4 divide-y divide-[#d9ded6] border-t border-[#d9ded6]">
            {faqs.map(({ question, answer }) => (
              <details key={question} className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold">
                  {question}
                  <ChevronDown
                    size={18}
                    className="shrink-0 transition group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <p className="pt-3 text-sm leading-7 text-[#4d584f]">
                  {answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-[1440px] px-5 pb-8 sm:px-8">
        <div className="grid items-center gap-7 rounded-md bg-[#f2f0ea] p-7 md:grid-cols-[5rem_1fr_auto] md:p-8">
          <div className="flex size-16 items-center justify-center rounded-full bg-white text-[#3f6c4f]">
            <Mail size={32} strokeWidth={1.4} aria-hidden="true" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold">
              まずは「ここが気になる」だけでも大丈夫です
            </h2>
            <p className="mt-3 text-base text-[#404b43]">
              相談は無料です。無理な営業は一切いたしません。
            </p>
          </div>
          <a
            href="/contact"
            className="inline-flex h-12 min-w-80 items-center justify-center gap-8 rounded-md bg-[#315940] px-8 text-base font-semibold text-white transition hover:bg-[#274a36]"
          >
            ご相談はこちら
            <ArrowRight size={20} aria-hidden="true" />
          </a>
        </div>
      </section>

      <footer className="flex flex-col items-center gap-2 pb-8 text-center text-xs text-[#6b746c]">
        <a href="/privacy" className="transition hover:text-[#315940]">
          プライバシーポリシー
        </a>
        <span>© 2026 ClavisFlow</span>
      </footer>
    </main>
  );
}
