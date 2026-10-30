"use client";

import { useState } from "react";
import HeatmapLegend from "./HeatmapLegend";

// PLACEHOLDERS: replace with a real Western Cape client's numbers and
// heatmap screenshots once the owner supplies them. The numbers must match
// the grid shown in the image.
const beforeMetrics = [
  { label: "Average Ranking", value: "[BEFORE]" },
  { label: "Marketshare", value: "[BEFORE %]" },
  { label: "Clicks per Month", value: "[BEFORE]" },
  { label: "Customers per Month", value: "[BEFORE]" },
];

const afterMetrics = [
  { label: "Average Ranking", value: "[AFTER]" },
  { label: "Marketshare", value: "[AFTER %]" },
  { label: "Clicks per Month", value: "[AFTER]" },
  { label: "Customers per Month", value: "[AFTER]" },
];

function HomeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6"
      aria-hidden="true"
    >
      <path d="M3 9.75L12 3l9 6.75V21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.75z" />
      <path d="M9 22V12h6v10" />
    </svg>
  );
}

export default function BeforeAfter() {
  const [active, setActive] = useState<"before" | "after">("before");

  const metrics = active === "before" ? beforeMetrics : afterMetrics;
  const badgeClass =
    active === "before"
      ? "bg-[#8B1A1A] text-white"
      : "bg-green-700 text-white";

  return (
    <div className="flex flex-col items-center gap-8 w-full">
      {/* Toggle */}
      <div className="flex items-center bg-neutral-100 p-1.5 rounded-full gap-1" role="group" aria-label="Show ranking before or after">
        <button
          onClick={() => setActive("before")}
          aria-pressed={active === "before"}
          className={`px-10 sm:px-12 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
            active === "before"
              ? "bg-[#8B1A1A] text-white shadow-md shadow-red-900/40 ring-1 ring-red-900/30"
              : "text-neutral-600 hover:text-neutral-900"
          }`}
        >
          Before
        </button>
        <button
          onClick={() => setActive("after")}
          aria-pressed={active === "after"}
          className={`px-10 sm:px-12 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
            active === "after"
              ? "bg-green-700 text-white shadow-md shadow-green-800/30 ring-1 ring-green-700/30"
              : "text-neutral-600 hover:text-neutral-900"
          }`}
        >
          After
        </button>
      </div>

      {/* Map key + legend */}
      <HeatmapLegend />

      {/* Cards row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full text-left">

      {/* Metrics card */}
      <div className="bg-white rounded-2xl p-6 sm:p-10 border border-neutral-200 shadow-sm">
        {/* Company row */}
        <div className="flex items-center gap-5 mb-8">
          <div className="w-14 h-14 bg-neutral-800 rounded-xl flex items-center justify-center flex-shrink-0">
            <HomeIcon />
          </div>
          <div>
            <p className="text-xl font-black text-black leading-tight">[CLIENT NAME]</p>
            <p className="text-base text-neutral-600 mt-0.5">[Trade, town]</p>
          </div>
        </div>

        {/* Metric rows */}
        <div className="flex flex-col gap-4">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="flex items-center justify-between gap-3 bg-neutral-50 rounded-xl px-4 sm:px-5 py-4"
            >
              <span className="text-base text-neutral-700 font-semibold">
                {m.label}
              </span>
              <span
                className={`text-sm font-bold px-4 py-1.5 rounded-full whitespace-nowrap ${badgeClass}`}
              >
                {m.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Heatmap image placeholder */}
      <div className="bg-white rounded-2xl border-2 border-dashed border-neutral-300 shadow-sm overflow-hidden">
        <div className="flex h-full min-h-[320px] md:min-h-[520px] flex-col items-center justify-center gap-3 p-8 text-center">
          <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold tracking-wider text-amber-900">
            PLACEHOLDER
          </span>
          <p className="text-lg font-black text-black">
            [CLIENT HEATMAP: {active === "before" ? "BEFORE" : "AFTER"}]
          </p>
          <p className="max-w-xs text-sm text-neutral-600 leading-relaxed">
            Real Western Cape client ranking grid goes here.
          </p>
        </div>
      </div>

      </div>
    </div>
  );
}
