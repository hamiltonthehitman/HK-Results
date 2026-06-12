"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How do I know you can actually guarantee top 3?",
    a: "Our guarantee is backed by experience. We've ranked dozens of local businesses across a wide range of industries and only work with businesses we believe we can get results for. Before you invest a cent, we assess your market, competition, and opportunities. If we're not confident we can get you into the top 3, we won't take you on. And if we don't achieve top 3 rankings within 90 days, we'll keep working for free until we do.",
  },
  {
    q: "What's this actually going to cost me total?",
    a: "Assuming we're a good fit and can help you get the results you're after, you'll have two pricing options. You can either go with a monthly plan at R4,250 per month or prepay for the quarter at R11,000 and lock in a lower overall cost.",
  },
  {
    q: "Will this work for my specific type of business?",
    a: "If you're a local business targeting customers in a specific area, our system is built for businesses like yours. We'll evaluate your market before we begin and tell you honestly whether we can help. If we can't deliver the results, we won't take your money.",
  },
  {
    q: "How long until I actually see results?",
    a: "Most clients see rankings start moving within a few weeks. You'll be able to watch your business climb up the map listings as we implement the strategy. Our guarantee is top 3 rankings within 90 days, but many businesses get there faster. And once you do, that's when the real results kick in: more calls, more leads, and more customers coming to you instead of the competition.",
  },
  {
    q: "How much of my time does this require?",
    a: "About 30 minutes total. One onboarding call where we get access to your Google Business Profile and gather some info about your business. After that, we handle absolutely everything — from optimization, reviews, posts, and citations — all of it. You won't need to touch anything or learn anything technical. You just keep running your business while we get you ranked.",
  },
  {
    q: "What happens if you don't get the promised result?",
    a: "We closely monitor your rankings and provide regular progress updates throughout the campaign. If we don't achieve the agreed result by the promised deadline, we'll pause your billing and continue working at no additional cost until we do. Once we've delivered the result, billing resumes so we can continue maintaining and strengthening your rankings.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-2xl border border-neutral-200 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="px-8 pt-8 pb-6">
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-blue-600 mb-3">
          Questions
        </p>
        <h2 className="text-2xl md:text-3xl font-black text-neutral-900 tracking-tight">
          Frequently Asked Questions
        </h2>
      </div>

      {/* Divider */}
      <div className="border-t border-neutral-100" />

      {/* Accordion rows */}
      <div>
        {faqs.map((faq, i) => {
          const isOpen = open === i;
          return (
            <div key={i} className="border-b border-neutral-100 last:border-b-0">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex items-center justify-between gap-6 px-8 py-5 text-left group"
              >
                <span
                  className={`text-sm md:text-base font-semibold leading-snug transition-colors duration-200 ${
                    isOpen ? "text-blue-700" : "text-neutral-800 group-hover:text-blue-700"
                  }`}
                >
                  {faq.q}
                </span>
                <span
                  className={`flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center text-lg font-light transition-all duration-300 ${
                    isOpen
                      ? "bg-blue-600 border-blue-600 text-white rotate-45"
                      : "border-neutral-300 text-neutral-400 group-hover:border-blue-400 group-hover:text-blue-500"
                  }`}
                >
                  +
                </span>
              </button>

              {/* Answer — smooth height transition */}
              <div
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{ maxHeight: isOpen ? "400px" : "0px" }}
              >
                <p className="px-8 pb-6 text-sm text-neutral-500 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
