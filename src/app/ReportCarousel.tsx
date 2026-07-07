"use client";

import { ArrowLeft, ArrowRight, Download, FileBarChart } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

type ReportCarouselProps = {
  href: string;
  slides: string[];
  title: string;
  format: string;
  text?: string;
};

export function ReportCarousel({
  href,
  slides,
  title,
  format,
  text,
}: ReportCarouselProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrent((index) => (index + 1) % slides.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, [slides.length]);

  const move = (direction: -1 | 1) => {
    setCurrent((index) => (index + direction + slides.length) % slides.length);
  };

  return (
    <div className="group overflow-hidden rounded-md border border-[#d7d2c6] bg-white/92 shadow-[0_12px_35px_rgba(62,54,41,0.07)]">
      <div className="border-b border-[#d7d2c6] bg-[#fbfaf7] px-5 py-3">
        <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-[#6b746c]">
          <FileBarChart size={16} strokeWidth={1.7} aria-hidden="true" />
          {format} / {current + 1} of {slides.length}
        </p>
      </div>
      <div className="report-preview relative overflow-hidden border-b border-[#d7d2c6] bg-white">
        <Image
          src={slides[current]}
          alt={`${title} ${current + 1}ページ目のプレビュー`}
          width={1600}
          height={900}
          priority={current === 0}
          className="aspect-video w-full object-cover transition duration-300"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/20 to-transparent" />
        <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-3">
          <div className="flex gap-1.5">
            {slides.map((slide, index) => (
              <button
                key={slide}
                type="button"
                className={`size-2.5 rounded-full border border-white/80 transition ${
                  index === current ? "bg-white" : "bg-white/35"
                }`}
                aria-label={`${index + 1}ページ目を表示`}
                onClick={() => setCurrent(index)}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              className="flex size-9 items-center justify-center rounded-full border border-white/70 bg-white/86 text-[#244331] shadow-sm transition hover:bg-white"
              aria-label="前のページ"
              onClick={() => move(-1)}
            >
              <ArrowLeft size={17} strokeWidth={1.9} aria-hidden="true" />
            </button>
            <button
              type="button"
              className="flex size-9 items-center justify-center rounded-full border border-white/70 bg-white/86 text-[#244331] shadow-sm transition hover:bg-white"
              aria-label="次のページ"
              onClick={() => move(1)}
            >
              <ArrowRight size={17} strokeWidth={1.9} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex min-w-0 items-end justify-between gap-4 px-5 py-4">
        <div>
          <h3 className="text-lg font-semibold text-[#1f2420]">{title}</h3>
          {text ? (
            <p className="mt-1 text-sm leading-6 text-[#4b564e]">{text}</p>
          ) : null}
        </div>
        <a
          href={href}
          className="inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-md bg-[#315940] px-4 text-sm font-semibold text-white transition hover:bg-[#274a36]"
        >
          <Download size={16} strokeWidth={2} aria-hidden="true" />
          サンプルをダウンロード
        </a>
      </div>
    </div>
  );
}
