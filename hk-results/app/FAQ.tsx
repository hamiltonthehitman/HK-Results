"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How do I know you can actually guarantee top 3?",
    a: "Our guarantee is backed by experience. We've ranked dozens of local businesses across a wide range of industries and only work with businesses we believe we can get results for. Before you invest a cent, we assess your market, competition, and opportunities. If we're not confident we can get you into the top 3, we won't take you on. And if we don't achieve top 3 rankings within 90 days, we'll keep working for free until we do.",
  },
  {
    q: "What's this actually going to cost me total?",
    a: "Assuming we're a good fit and can help you get the results you're after, you'll have two pricing options. You can either go with a monthly plan at R4,000 per month or prepay for the quarter at R10,250 and lock in a lower overall cost.",
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
    a: "About 30 minutes total. One onboarding call where we get access to your Google Business Profile and gather some info about your business. After that, we handle absolutely everything — from optimisation, reviews, posts, and citations — all of it. You won't need to touch anything or learn anything technical. You just keep running your business while we get you ranked.",
  },
  {
    q: "What happens if you don't get the promised result?",
    a: "We closely monitor your rankings and provide regular progress updates throughout the campaign. If we don't achieve the agreed result by the promised deadline, we'll pause your billing and continue working at no additional cost until we do. Once we've delivered the result, billing resumes so we can continue maintaining and strengthening your rankings.",
  },
  {
    q: "Isn't a ranking guarantee a red flag?",
    a: "It's fair to be careful. A lot of agencies promise the number one spot and then go quiet. Nobody can promise you number one, and we don't. Before we start, we agree your search term and your area with you. Top 3 means Google suggests your business in the top three map spots for that search in that area. If we're not there after 90 days, you pay no monthly fee until we are.",
  },
  {
    q: "Am I locked into a contract?",
    a: "No. There is no contract and you can cancel any time. If you pay quarterly, we keep working until the end of the quarter you've paid for.",
  },
  {
    q: "Who owns my website, domain and Google profile?",
    a: "You do. Your website address (your domain), your website and your Google Business Profile stay in your name from day one. If you ever leave, they leave with you.",
  },
  {
    q: "I get most of my work from word of mouth. Do I need this?",
    a: "Word of mouth is great, and it sends people to Google too. When a friend recommends you, most people look you up before they call. If a competitor is in the top 3 and you aren't, some of them will call the competitor. Being in the top 3 helps you keep the people who were already sent your way, and it puts you in front of the ones who have never heard of you.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-2xl border border-neutral-200 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="px-5 sm:px-8 pt-8 pb-6">
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-blue-700 mb-3">
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
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                id={`faq-button-${i}`}
                className="w-full flex items-center justify-between gap-6 px-5 sm:px-8 py-5 text-left group"
              >
                <span
                  className={`text-base md:text-lg font-semibold leading-snug transition-colors duration-200 ${
                    isOpen ? "text-blue-700" : "text-neutral-800 group-hover:text-blue-700"
                  }`}
                >
                  {faq.q}
                </span>
                <span
                  aria-hidden="true"
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
                id={`faq-panel-${i}`}
                role="region"
                aria-labelledby={`faq-button-${i}`}
                hidden={!isOpen}
                className="overflow-hidden"
              >
                <p className="px-5 sm:px-8 pb-6 text-base text-neutral-600 leading-relaxed">
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
