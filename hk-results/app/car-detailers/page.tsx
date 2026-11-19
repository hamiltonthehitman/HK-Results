import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import DetailerQuiz from "./DetailerQuiz";
import WhatsAppFloat from "../WhatsAppFloat";

export const metadata: Metadata = {
  title: "More Customers for Car Detailers | HK Results",
  description:
    "We set up and manage your Meta ads free for 5 days. You only pay for the ad spend. 5 jobs in 5 days, guaranteed.",
  alternates: { canonical: "/car-detailers" },
};

export default function CarDetailersPage() {
  return (
    <>
      <WhatsAppFloat />

      <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 md:h-20 flex items-center justify-between gap-4">
          <Link href="/" aria-label="HK Results home">
            <Image
              src="/logo.png"
              alt="HK Results"
              width={88}
              height={88}
              className="object-contain brightness-0 invert -my-2 h-[72px] w-[72px] md:h-[88px] md:w-[88px]"
              priority
            />
          </Link>
          <a
            href="#quiz"
            className="inline-block text-sm md:text-base font-semibold tracking-wide px-4 md:px-5 py-2.5 md:py-3 bg-blue-600 text-white hover:bg-blue-700 transition-colors whitespace-nowrap"
          >
            Get started
          </a>
        </div>
      </header>

      <main className="flex-1 pt-28 pb-16 md:pt-40 md:pb-24 px-5 sm:px-6">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-[11px] sm:text-sm font-semibold tracking-[0.15em] sm:tracking-[0.25em] uppercase text-neutral-900 mb-5 text-balance">
            For car detailers · Free 5-day trial
          </p>
          <h1 className="text-[clamp(1.9rem,6.5vw,3.25rem)] font-bold leading-[1.05] tracking-tight">
            <span className="block">5 jobs in 5 days,</span>
            <span className="block text-blue-600 italic">
              <span className="relative inline-block pb-2 md:pb-3">
                guaranteed.
                <svg
                  className="absolute left-0 right-0 bottom-0 w-full h-[7px] md:h-[10px]"
                  viewBox="0 0 300 10"
                  preserveAspectRatio="none"
                  fill="none"
                  aria-hidden="true"
                >
                  <path d="M2 6.5 C60 2.5 150 2 298 4.5" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
                </svg>
              </span>
            </span>
          </h1>
        </div>

        <DetailerQuiz />
      </main>
    </>
  );
}
