"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const results = [
  { src: "/results-kerbore-calls-448.png", width: 1920, height: 759, alt: "Google Business Profile performance for Kerbore Properties: 448 calls made from the profile in April 2026" },
  { src: "/results-kerbore-calls-35.png", width: 1911, height: 730, alt: "Google Business Profile performance for Kerbore Properties: 35 calls made from the profile in April 2026, up 20.7%" },
  { src: "/results-kerbore-website-clicks-114.png", width: 1914, height: 739, alt: "Google Business Profile performance for Kerbore Properties: 114 website clicks from the profile in April 2026, up 12.9%" },
  { src: "/results-kerbore-chat-clicks-22.png", width: 1916, height: 732, alt: "Google Business Profile performance for Kerbore Properties: 22 chat clicks from the profile in April 2026" },
];

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "h-6 w-6",
  "aria-hidden": true,
};

export default function ResultsGallery() {
  const [open, setOpen] = useState<number | null>(null);
  const lastTrigger = useRef<HTMLElement | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    setOpen(null);
    lastTrigger.current?.focus();
  }, []);
  const step = useCallback((d: number) => setOpen((i) => (i === null ? i : (i + d + results.length) % results.length)), []);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, step]);

  return (
    <>
      <div className="grid w-full max-w-5xl grid-cols-1 gap-4 md:grid-cols-2">
        {results.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={(e) => {
              lastTrigger.current = e.currentTarget;
              setOpen(i);
            }}
            aria-label={`View full screen: ${img.alt}`}
            className="group relative cursor-zoom-in overflow-hidden rounded-xl border border-neutral-200"
          >
            <Image
              src={img.src}
              alt=""
              width={img.width}
              height={img.height}
              sizes="(min-width: 768px) 440px, 100vw"
              className="aspect-[5/2] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
            <span
              className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-white opacity-90 backdrop-blur"
              aria-hidden="true"
            >
              <svg {...iconProps} className="h-4 w-4">
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
              </svg>
            </span>
          </button>
        ))}
      </div>

      {open !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Results screenshot"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-8"
          onClick={close}
        >
          <button
            ref={closeRef}
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6 sm:top-6"
          >
            <svg {...iconProps}>
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Previous screenshot"
            className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-6"
          >
            <svg {...iconProps}>
              <path d="M15 5l-7 7 7 7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Next screenshot"
            className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6"
          >
            <svg {...iconProps}>
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <div
            className="max-h-[85vh] max-w-[calc(100vw-2rem)] overflow-auto rounded-lg sm:max-w-[calc(100vw-9rem)]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={results[open].src}
              alt={results[open].alt}
              width={results[open].width}
              height={results[open].height}
              sizes="100vw"
              className="h-auto w-[900px] max-w-none rounded-lg sm:max-h-[85vh] sm:w-auto sm:max-w-full"
            />
          </div>
          <p className="absolute bottom-4 left-0 right-0 text-center text-sm font-semibold text-white/70" aria-live="polite">
            {open + 1} / {results.length}
          </p>
        </div>
      )}
    </>
  );
}
