"use client";

import { ArrowLeft, ArrowRight, FileBarChart } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

type ReportCarouselProps = {
  href: string;
  slides: string[];
  title: string;
  format: string;
};

export function ReportCarousel({
  href,
  slides,
  title,
  format,
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
    <div className="group overflow-hidden rounded-md border border-[#d7d2c6] bg-white/92 shadow-[0_16px_45px_rgba(62,54,41,0.09)] transition hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_20px_55px_rgba(62,54,41,0.12)]">
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
      <div className="flex min-w-0 items-center justify-between gap-4 px-5 py-4">
        <div>
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-[#6b746c]">
            <FileBarChart size={16} strokeWidth={1.7} aria-hidden="true" />
            {format} / {current + 1} of {slides.length}
          </p>
          <h3 className="mt-2 text-lg font-semibold text-[#1f2420]">{title}</h3>
        </div>
        <a
          href={href}
          className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[#315940]"
        >
          サンプルダウンロード
          <ArrowRight
            size={17}
            className="transition group-hover:translate-x-1"
            aria-hidden="true"
          />
        </a>
      </div>
    </div>
  );
}
