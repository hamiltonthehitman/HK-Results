"use client";

import { useState } from "react";

const tiers = [
  {
    color: "bg-green-500",
    range: "1–3",
    text: "Top of Google — visible. Customers searching in this area see your business first. These positions drive the vast majority of clicks and calls.",
  },
  {
    color: "bg-yellow-400",
    range: "4–10",
    text: "Middle ground — some visibility. You appear on page one, but below the top results. Click-through rates drop sharply past position 3.",
  },
  {
    color: "bg-red-500",
    range: "20+",
    text: "Buried — effectively invisible. Customers in this area cannot find you. They're calling your competitors instead.",
  },
];

export default function HeatmapLegend() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full max-w-3xl flex flex-col items-center gap-3 -mt-4">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="inline-flex items-center gap-1.5 text-xs font-medium text-black hover:text-neutral-600 transition-colors"
      >
        <span className="w-4 h-4 rounded-full border border-current flex items-center justify-center text-[10px] font-bold leading-none flex-shrink-0">
          i
        </span>
        How to read the map
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`w-3 h-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <div
        className={`w-full overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border border-neutral-200 rounded-xl p-5 flex flex-col gap-4 shadow-sm text-left">
          {tiers.map((tier) => (
            <div key={tier.range} className="flex items-start gap-4">
              <div className="flex items-center gap-2 flex-shrink-0 pt-0.5">
                <span
                  className={`w-5 h-5 rounded-full ${tier.color} flex items-center justify-center text-white text-[9px] font-black leading-none flex-shrink-0`}
                />
                <span className="text-xs font-bold text-neutral-700 w-8">
                  {tier.range}
                </span>
              </div>
              <p className="text-xs text-neutral-500 leading-relaxed">{tier.text}</p>
            </div>
          ))}

          <p className="text-[10px] text-neutral-400 border-t border-neutral-100 pt-3 mt-1 leading-relaxed">
            Rankings are captured across a grid of locations around your business address.
          </p>
        </div>
      </div>
    </div>
  );
}
