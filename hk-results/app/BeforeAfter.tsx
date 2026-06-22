"use client";

import { useState } from "react";
import Image from "next/image";
import HeatmapLegend from "./HeatmapLegend";

const beforeMetrics = [
  { label: "Average Ranking", value: "86" },
  { label: "Marketshare", value: "1%" },
  { label: "Clicks per Month", value: "5" },
  { label: "Customers per Month", value: "1–2" },
];

const afterMetrics = [
  { label: "Average Ranking", value: "1" },
  { label: "Marketshare", value: "82%" },
  { label: "Clicks per Month", value: "80" },
  { label: "Customers per Month", value: "15+" },
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
      : "bg-green-600 text-white";

  return (
    <div className="flex flex-col items-center gap-8 w-full">
      {/* Toggle */}
      <div className="flex items-center bg-neutral-100 p-1.5 rounded-full gap-1">
        <button
          onClick={() => setActive("before")}
          className={`px-12 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
            active === "before"
              ? "bg-[#8B1A1A] text-white shadow-md shadow-red-900/40 ring-1 ring-red-900/30"
              : "text-neutral-400 hover:text-neutral-700"
          }`}
        >
          Before
        </button>
        <button
          onClick={() => setActive("after")}
          className={`px-12 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
            active === "after"
              ? "bg-green-600 text-white shadow-md shadow-green-800/30 ring-1 ring-green-700/30"
              : "text-neutral-400 hover:text-neutral-700"
          }`}
        >
          After
        </button>
      </div>

      {/* Legend toggle */}
      <HeatmapLegend />

      {/* Cards row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">

      {/* Metrics card */}
      <div className="bg-white rounded-2xl p-10 border border-neutral-200 shadow-sm">
        {/* Company row */}
        <div className="flex items-center gap-5 mb-8">
          <div className="w-14 h-14 bg-neutral-800 rounded-xl flex items-center justify-center flex-shrink-0">
            <HomeIcon />
          </div>
          <div>
            <p className="text-xl font-black text-black leading-tight">Your Business</p>
            <p className="text-base text-neutral-400 mt-0.5">123 Main Street, Your City</p>
          </div>
        </div>

        {/* Metric rows */}
        <div className="flex flex-col gap-4">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="flex items-center justify-between bg-neutral-50 rounded-xl px-5 py-4"
            >
              <span className="text-base text-neutral-600 font-semibold">
                {m.label}
              </span>
              <span
                className={`text-sm font-bold px-4 py-1.5 rounded-full ${badgeClass}`}
              >
                {m.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Heatmap image card */}
      <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm overflow-hidden">
        <div className="relative w-full h-full min-h-[520px]">
          <Image
            src={active === "before" ? "/heatmap-before.webp" : "/heatmap-after.webp"}
            alt={active === "before" ? "Before ranking heatmap" : "After ranking heatmap"}
            fill
            className="object-cover transition-opacity duration-500"
          />
        </div>
      </div>

      </div>
    </div>
  );
}
