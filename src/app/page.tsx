import {
  ArrowRight,
  Check,
  ChevronDown,
  Code2,
  Database,
  FileBarChart,
  FileSpreadsheet,
  GitCompareArrows,
  Mail,
  MessageCircle,
  Send,
  Search,
  Stethoscope,
  UserRound,
  UserX2,
  SplitIcon,
  ArchiveX,
  FileQuestion,
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
    text: "Excelファイルの構造や数式の問題点をチェック",
    tone: "green",
    url: "https://exceldoctor.clavisflow.net/",
  },
  {
    icon: Database,
    title: "Access Explorer",
    text: "Accessデータベースの構造を可視化",
    tone: "rose",
    url: "https://accessexplorer.clavisflow.net/",
  },
  {
    icon: GitCompareArrows,
    title: "Excel Compare",
    text: "Excelファイルの差分をわかりやすく比較",
    tone: "blue",
    url: "https://excelcompare.clavisflow.net/",
  },
];

const reportSamples = [
  {
    href: "/docs/clavisflow-report-sample.pptx",
    preview: "/report-previews/report-summary.png",
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
    ],
    icon: FileBarChart,
    title: "診断レポート",
    format: "PowerPoint",
    text: "経営判断や共有に使いやすい、要点をまとめたレポートです。",
  },
  {
    href: "/docs/clavisflow-detail-sample.xlsx",
    preview: "/report-previews/report-detail.png",
    icon: FileSpreadsheet,
    title: "診断詳細",
    format: "Excel",
    text: "調査結果や確認項目を一覧で追える、詳細データです。",
  },
];

const faqs = [
  {
    question: "費用はかかりますか？",
    answer: "初回相談は無料です。診断や調査が必要な場合は、対象範囲を確認したうえで事前にお見積りします。",
  },
  {
    question: "どのくらいの期間で診断してもらえますか？",
    answer: "小規模なAccessやExcel VBAであれば、資料確認後おおよそ1〜2週間が目安です。",
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
            <p className="brand-logo text-2xl text-[#2f5f43]">ClavisFlow</p>
            <p className="hidden text-sm font-semibold sm:block">
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
            <h1 className="hero-title text-[#111813]">
              <span className="hero-title-line">
                <span className="hero-word hero-word-vb">VB6</span>
                <span className="hero-kana hero-kana-ya">や</span>
                <span className="hero-word hero-word-access">Access、</span>
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
              無理にリプレースする前に、
              <br />
              まずは現状を整理してみませんか。
            </p>
            <a
              href="#contact"
              className="hero-cta mt-7 inline-flex min-h-12 max-w-full items-center justify-center gap-3 rounded-md bg-[#315940] px-7 py-3 text-white shadow-sm transition hover:bg-[#274a36]"
            >
              <Send size={18} strokeWidth={2.1} aria-hidden="true" />
              <span className="hero-cta-text">
                まずはお気軽にご相談ください（無料）
              </span>
            </a>
            <div className="mt-8 flex max-w-lg flex-wrap gap-3">
              {["VB6", "Access", "Excel VBA", "WinForms", "WPF", "Classic ASP", "ASP.NET", "C#", "VB.NET", "SQL Server"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="min-w-20 rounded-full border border-[#809283] bg-white/70 px-5 py-2 text-center text-sm font-medium text-[#1f2a22]"
                  >
                    {tag}
                  </span>
                ),
              )}
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

      <section className="mx-auto max-w-[1440px] px-5 py-3 sm:px-8">
        <div className="grid gap-5 rounded-md border border-[#e4dfd4] bg-[#f4f0e8] p-5 shadow-[0_18px_55px_rgba(62,54,41,0.06)] md:grid-cols-[0.58fr_2fr] md:p-5 lg:gap-6">
          <div className="md:border-r md:border-[#d8d1c3] md:pr-5">
            <h2 className="text-2xl font-semibold leading-snug">診断レポート例</h2>
            <p className="mt-4 text-sm leading-7 text-[#4b564e]">
              システム診断でご提供する成果物のサンプルをご覧いただけます。<br />
              診断レポート(PowerPoint)と診断詳細(Excel)のサンプルを掲載しています。
            </p>
          </div>
          <div className="grid items-start gap-5 lg:grid-cols-[1.48fr_0.82fr]">
            {reportSamples.map(({ href, preview, slides, icon: Icon, title, format }) => {
              if (slides) {
                return (
                  <ReportCarousel
                    key={href}
                    href={href}
                    slides={slides}
                    title={title}
                    format={format}
                  />
                );
              }

              return (
              <a
                key={href}
                href={href}
                  className="group overflow-hidden rounded-md border border-[#d7d2c6] bg-white/92 shadow-[0_12px_35px_rgba(62,54,41,0.07)] transition hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_18px_45px_rgba(62,54,41,0.1)]"
                >
                <div className="report-preview overflow-hidden border-b border-[#d7d2c6] bg-white">
                  <Image
                    src={preview}
                    alt={`${title}サンプルのプレビュー`}
                    width={1600}
                    height={900}
                    className="aspect-video w-full object-cover transition duration-300 group-hover:scale-[1.015]"
                  />
                </div>
                <div className="flex min-w-0 items-center justify-between gap-4 px-5 py-3">
                  <div>
                    <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-[#6b746c]">
                      <Icon size={16} strokeWidth={1.7} aria-hidden="true" />
                      {format}
                  </p>
                    <h3 className="mt-2 text-lg font-semibold text-[#1f2420]">
                      {title}
                    </h3>
                    </div>
                    <span className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[#315940]">
                    サンプルダウンロード
                    <ArrowRight
                      size={17}
                      className="transition group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1440px] gap-8 px-5 py-8 sm:px-8 md:grid-cols-[0.72fr_2.28fr]">
        <div>
          <h2 className="text-2xl font-semibold">無料ツールも公開中</h2>
          <p className="mt-5 text-base leading-8 text-[#404b43]">
            業務に役立つツールを
            <br />
            無料でご利用いただけます。
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {tools.map(({ icon: Icon, title, text, tone, url }) => (
            <a
              key={title}
              href={url}
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
            {/* <UserRound size={48} strokeWidth={1.2} /> */}
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
              25年以上、システム開発・保守に携わってきました。<br/>
              C#・ASP.NET・Blazorを中心に、VB6、VBA、Classic ASPなどにも対応しています。<br/>
              現場で培った経験をもとに、保守・改善・モダナイゼーションを支援します。
            </p>
            <div className="mt-4 text-sm flex flex-wrap gap-2">
              ・IPA プロジェクトマネージャ試験（高度情報処理技術者）<br/>
              ・AWS 認定 ソリューションアーキテクト – アソシエイト
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href="https://github.com/clavisflow"
                className="inline-flex h-8 items-center gap-1 rounded border border-[#9caf9d] px-3 text-xs font-medium"
              >
                <Code2 size={14} aria-hidden="true" />
                GitHub
              </a>
              <a
                href="https://zenn.dev/clavisflow"
                className="inline-flex h-8 items-center rounded border border-[#9caf9d] px-3 text-xs font-medium"
              >
                Zenn
              </a>
              <a
                href="https://x.com/clavisflow"

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
                <p className="pt-3 text-sm leading-7 text-[#4d584f]">{answer}</p>
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
            href="mailto:contact@example.com"
            className="inline-flex h-12 min-w-80 items-center justify-center gap-8 rounded-md bg-[#315940] px-8 text-base font-semibold text-white transition hover:bg-[#274a36]"
          >
            ご相談はこちら
            <ArrowRight size={20} aria-hidden="true" />
          </a>
        </div>
      </section>

      <footer className="pb-8 text-center text-xs text-[#6b746c]">
        © 2026 ClavisFlow
      </footer>
    </main>
  );
}
