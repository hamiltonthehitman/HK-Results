import type { ReactNode } from "react";

type Step = { title: string; text: string; icon: ReactNode };

const svg = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "h-9 w-9",
  "aria-hidden": true,
};

const steps: Step[] = [
  {
    title: "Map the grid",
    text: "We scan your service area point by point. You see exactly where you show up and where you vanish.",
    icon: (
      <svg {...svg}>
        <rect x="6" y="6" width="36" height="36" rx="4" />
        <path d="M18 6v36M30 6v36M6 18h36M6 30h36" />
        <circle cx="24" cy="24" r="3.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Full Google Business Profile Optimisation",
    text: "We rebuild your Google Business Profile, the listing people see on the map, so it follows Google's rules.",
    icon: (
      <svg {...svg}>
        <rect x="5" y="9" width="38" height="30" rx="4" />
        <path d="M5 17h38" />
        <path d="M14 26h20M14 32h12" />
        <circle cx="11" cy="13" r="0.8" fill="currentColor" />
        <circle cx="15" cy="13" r="0.8" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Fix the website",
    text: "We optimise your website so it backs up your profile and turns visitors into phone calls.",
    icon: (
      <svg {...svg}>
        <rect x="5" y="7" width="38" height="25" rx="3" />
        <path d="M17 41h14M24 32v9" />
        <path d="M13 24l6-6 5 4 8-8" />
      </svg>
    ),
  },
  {
    title: "Build local authority",
    text: "We get your business listed on the local websites Google trusts and publish content about your area. Google reads that as proof you belong at the top, and your ranking climbs area by area.",
    icon: (
      <svg {...svg}>
        <path d="M24 43s13-11.5 13-22a13 13 0 0 0-26 0c0 10.5 13 22 13 22z" />
        <circle cx="24" cy="21" r="5" />
        <path d="M19 6l5 4 5-4" />
      </svg>
    ),
  },
  {
    title: "Prove it every two weeks",
    text: "We scan again and send you your updated map. You watch the red turn green.",
    icon: (
      <svg {...svg}>
        <path d="M6 41h36" />
        <path d="M10 33l9-9 7 6 12-15" />
        <path d="M31 15h7v7" />
      </svg>
    ),
  },
];

export default function ProcessSteps() {
  return (
    <ol className="mx-auto w-full max-w-3xl divide-y divide-neutral-200 border-y border-neutral-200 text-left">
      {steps.map((step, i) => (
        <li key={step.title} className="flex gap-5 py-7 md:gap-8 md:py-9">
          <div className="flex flex-col items-center gap-3">
            <span className="text-sm font-black tracking-widest text-neutral-500">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-blue-600">{step.icon}</span>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-black tracking-tight text-black md:text-2xl">{step.title}</h3>
            <p className="text-base leading-relaxed text-neutral-600">{step.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
