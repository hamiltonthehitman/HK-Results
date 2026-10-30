"use client";

import { useCallback, useEffect, useRef, useState } from "react";

// Add each real review here. Only `name` and `quote` are needed.
// `rating` (1 to 5) shows stars and `source` (for example "Google review") shows a tag.
// Leave both out unless they are true for that review.
// While this list is empty, marked placeholders show instead.
type Review = { name: string; quote: string; detail?: string; avatar?: string; rating?: number; source?: string };
const reviews: Review[] = [
  {
    name: "Sebastien Van Den Hoogen",
    quote: "I’m very happy with the service from Hamilton. He is so helpful and always keeps me in the loop on how things are going. Whenever I’ve had a question, he’s picked up the phone and been willing to help. That kind of service is hard to find. I’d happily recommend them to anyone.",
    avatar: "/reviews/sebastien-van-den-hoogen.jpg",
    rating: 5,
    source: "Google review",
  },
  {
    name: "Metteo Titus",
    quote: "Great service from start to finish. Hamilton and his team built us a website that really reflects our brand. I’d definitely recommend them!",
    avatar: "/reviews/metteo-titus.jpg",
    rating: 5,
    source: "Google review",
  },
  {
    name: "Jimmy Qokola",
    quote: "Really happy with the service. Hamiltons work has been keeping me busy, so I can say from experience that it works. Highly recommend.",
    avatar: "/reviews/jimmy.jpg",
    rating: 5,
    source: "Google review",
  },
];

const placeholders: Review[] = [
  { name: "[CLIENT NAME]", quote: "[TESTIMONIAL QUOTE]", detail: "[Trade, town]" },
  { name: "[CLIENT NAME]", quote: "[TESTIMONIAL QUOTE]", detail: "[Trade, town]" },
  { name: "[CLIENT NAME]", quote: "[TESTIMONIAL QUOTE]", detail: "[Trade, town]" },
];

function Stars({ count, faded }: { count: number; faded?: boolean }) {
  return (
    <span className={`flex gap-0.5 ${faded ? "opacity-30" : ""}`} aria-label={faded ? undefined : `${count} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} viewBox="0 0 24 24" className={`h-4 w-4 ${i < count ? "fill-amber-400" : "fill-neutral-200"}`} aria-hidden="true">
          <path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.9L12 17.8 5.8 21.1 7 14.2 2 9.3l6.9-1z" />
        </svg>
      ))}
    </span>
  );
}

function GoogleG() {
  return (
    <svg viewBox="0 0 48 48" className="h-5 w-5" aria-hidden="true">
      <path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9.1 3.6l6.8-6.8C35.8 2.4 30.3 0 24 0 14.6 0 6.5 5.4 2.6 13.2l7.9 6.1C12.4 13.6 17.7 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.1 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.4c-.5 2.9-2.2 5.3-4.6 7l7.3 5.7c4.3-4 6.8-9.9 6.8-17.2z" />
      <path fill="#FBBC05" d="M10.5 28.7c-.5-1.4-.8-2.9-.8-4.7s.3-3.2.8-4.7l-7.9-6.1C.9 16.4 0 20.1 0 24s.9 7.6 2.6 10.8l7.9-6.1z" />
      <path fill="#34A853" d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.3-5.7c-2 1.4-4.9 2.3-8.6 2.3-6.3 0-11.6-4.1-13.5-9.8l-7.9 6.1C6.5 42.6 14.6 48 24 48z" />
    </svg>
  );
}

function Arrow({ dir }: { dir: "prev" | "next" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
      <path d={dir === "prev" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"} />
    </svg>
  );
}

export default function Testimonials() {
  const isPlaceholder = reviews.length === 0;
  const items = isPlaceholder ? placeholders : reviews;
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const goTo = useCallback((i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollTo({ left: i * el.clientWidth, behavior: reduce ? "auto" : "smooth" });
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onScroll = () => setIndex(Math.round(el.scrollLeft / el.clientWidth));
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const prev = () => goTo(Math.max(index - 1, 0));
  const next = () => goTo(Math.min(index + 1, items.length - 1));

  return (
    <div className="flex flex-col items-center gap-8">
      <h3 className="text-2xl md:text-3xl font-black tracking-tight text-center">
        What our clients <span className="text-blue-600">say</span>
      </h3>

      <div
        className="w-full max-w-3xl rounded-3xl border border-neutral-200 bg-white shadow-[0_24px_60px_-28px_rgba(31,91,255,0.35)]"
        role="region"
        aria-roledescription="carousel"
        aria-label="Client reviews"
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") prev();
          if (e.key === "ArrowRight") next();
        }}
      >
        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {items.map((r, i) => (
            <figure
              key={i}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${items.length}`}
              className="flex w-full shrink-0 snap-center flex-col gap-6 p-7 sm:p-10 md:flex-row md:items-center md:gap-8"
            >
              <div
                className={`flex h-20 w-20 shrink-0 items-center justify-center self-start rounded-full bg-neutral-100 ring-4 ring-blue-600 ring-offset-2 md:self-center ${
                  isPlaceholder ? "text-[10px] font-bold tracking-wider text-neutral-500" : ""
                }`}
              >
                {r.avatar ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={r.avatar} alt="" className="h-full w-full rounded-full object-cover" />
                ) : (
                  isPlaceholder && "[PHOTO]"
                )}
              </div>

              <div className="flex min-w-0 flex-col gap-4">
                {isPlaceholder && (
                  <span className="self-start rounded-full bg-amber-100 px-3 py-1 text-xs font-bold tracking-wider text-amber-900">
                    PLACEHOLDER
                  </span>
                )}
                <blockquote className="text-lg font-bold leading-snug tracking-tight text-neutral-900 sm:text-xl md:text-2xl">
                  &ldquo;{r.quote}&rdquo;
                </blockquote>
                <figcaption className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <span className="text-base font-black text-black">{r.name}</span>
                  {(isPlaceholder || r.rating) && (
                    <>
                      <span className="h-1 w-1 rounded-full bg-blue-600" aria-hidden="true" />
                      <Stars count={r.rating ?? 5} faded={isPlaceholder} />
                    </>
                  )}
                  {(isPlaceholder || r.source) && (
                    <span className="flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-100 px-4 py-1.5 text-[13px] font-extrabold uppercase tracking-wider text-neutral-950">
                      {!isPlaceholder && r.source?.toLowerCase().includes("google") && <GoogleG />}
                      {isPlaceholder ? "[Source]" : r.source}
                    </span>
                  )}
                  {r.detail && <span className="w-full text-sm text-neutral-600">{r.detail}</span>}
                </figcaption>
              </div>
            </figure>
          ))}
        </div>

        <div className="flex items-center justify-between border-t border-neutral-100 px-7 py-4 sm:px-10">
          <div className="flex items-center gap-2" role="group" aria-label="Choose a review">
            {items.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Show review ${i + 1}`}
                aria-current={i === index}
                className={`h-2 rounded-full transition-all duration-300 ${i === index ? "w-6 bg-blue-600" : "w-2 bg-neutral-300 hover:bg-neutral-400"}`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={prev}
              disabled={index === 0}
              aria-label="Previous review"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-900 transition-colors hover:bg-neutral-100 disabled:opacity-30"
            >
              <Arrow dir="prev" />
            </button>
            <button
              type="button"
              onClick={next}
              disabled={index === items.length - 1}
              aria-label="Next review"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-900 transition-colors hover:bg-neutral-100 disabled:opacity-30"
            >
              <Arrow dir="next" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
