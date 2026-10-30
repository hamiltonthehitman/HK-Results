import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import RankingGrid from "../components/RankingGrid";
import ClientLogos from "./ClientLogos";
import LeadCaptureForm from "./LeadCaptureForm";
import FAQ from "./FAQ";
import PopupForm from "./PopupForm";
import ProcessSteps from "./ProcessSteps";
import ResultsGallery from "./ResultsGallery";
import Testimonials from "./Testimonials";
import WhatsAppFloat from "./WhatsAppFloat";

const CTA = "Get your FREE analysis";

const heroHeading = Poppins({ subsets: ["latin"], weight: ["700"], style: ["normal", "italic"], display: "swap" });

const features = [
  "Full Competitor's Analysis",
  "Updates Every Two Weeks",
  "Ranking For Main Search-Term",
  "Full Website Optimisation",
  "High Quality Backlinks",
];

const plans = [
  {
    tier: "Minimum",
    price: "R3,000",
    period: "/ Month",
    guarantee: "First page on Google in 90 days, or we work free until you're there.",
    visibility: "Visible on 25% of search results.",
    visibilityClass: "bg-amber-500/15 text-amber-900 border-amber-500/40",
    badge: null as string | null,
    recommended: false,
  },
  {
    tier: "Standard",
    price: "R4,000",
    period: "/ Month",
    guarantee: "Top 3 on Google in 90 days, or we work free until you're there.",
    visibility: "Visible on 75%+ of search results.",
    visibilityClass: "bg-green-500/15 text-green-900 border-green-600/40",
    badge: "Recommended",
    recommended: true,
  },
  {
    tier: "Standard, paid quarterly",
    price: "R10,250",
    period: "/ Quarter",
    guarantee: "Top 3 on Google in 90 days, or we work free until you're there.",
    visibility: "Visible on 75%+ of search results.",
    visibilityClass: "bg-green-500/15 text-green-900 border-green-600/40",
    badge: "Save R1,750",
    recommended: false,
  },
];

export default function Home() {
  return (
    <>
      <PopupForm />
      <WhatsAppFloat />

      {/* ── Navbar ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-neutral-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 md:h-20 flex items-center justify-between gap-4">
          <a href="#" aria-label="HK Results home">
            <Image
              src="/logo.png"
              alt="HK Results"
              width={88}
              height={88}
              className="object-contain -my-2 h-[72px] w-[72px] md:-my-2 md:h-[88px] md:w-[88px]"
              priority
            />
          </a>
          <nav aria-label="Main" className="hidden md:flex items-center gap-8 text-base font-medium tracking-wide text-black">
            <a href="#the-process" className="hover:opacity-60 transition-opacity">
              The Process
            </a>
            <a href="#pricing" className="hover:opacity-60 transition-opacity">
              Packages
            </a>
            <a href="#faq" className="hover:opacity-60 transition-opacity">
              Questions
            </a>
          </nav>
          <a
            href="#profile-analysis"
            className="inline-block text-sm md:text-base font-semibold tracking-wide px-4 md:px-5 py-2.5 md:py-3 bg-blue-600 text-white hover:bg-blue-700 transition-colors whitespace-nowrap"
          >
            Get started
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* ── 1. Hero ── */}
        <section className="pt-24 pb-12 md:pt-36 md:pb-24 lg:pt-28 lg:pb-12 px-5 sm:px-6">
          <div className="w-full grid items-center gap-12 lg:grid-cols-[55fr_45fr] lg:gap-x-20">
            <div className="text-center lg:text-left">
              <h1
                className={`${heroHeading.className} text-[clamp(1.7rem,6.3vw,2.25rem)] lg:text-[clamp(2.25rem,4.4vw,4rem)] font-bold leading-[1.2] sm:leading-[1.25] tracking-tight mb-6`}
              >
                <span className="text-blue-600 italic">Guaranteed</span>{" "}
                – Top&nbsp;3 Google Maps Rankings within 90 days
              </h1>

              <p className="text-[15px] sm:text-[17px] md:text-xl font-light text-neutral-600 max-w-xl mx-auto lg:mx-0 leading-[1.75] mb-9">
                Most people search on Google before they hire a local trade or service company. We get you ranking in the{" "}
                <span className="font-semibold text-neutral-950">top 3</span> right in front of people who are actively searching for your services.
              </p>

              <a
                href="#profile-analysis"
                className="inline-flex rounded-full items-center justify-center w-full sm:w-auto px-10 py-5 bg-blue-600 text-white text-base font-bold tracking-wide hover:bg-blue-700 transition-colors"
              >
                {CTA}
              </a>
            </div>

            <div className="flex justify-center lg:justify-end">
              <RankingGrid />
            </div>
          </div>
        </section>

        <ClientLogos />

        {/* ── 2. Only three get the call ── */}
        <section id="only-three" className="py-20 md:py-28 px-5 sm:px-6 bg-neutral-50 border-y border-neutral-200">
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-8">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
              The top <span className="text-blue-600">three</span> get the calls and the leads.
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl leading-relaxed">
              When someone in your service area searches for your trade, Google recommends 3 businesses. Those
              businesses get all the calls and leads.
            </p>

            <ResultsGallery />

            <p className="text-xl md:text-2xl font-black tracking-tight max-w-2xl leading-snug">
              Being the best at your trade isn&apos;t enough anymore. If you&apos;re not one of the three, the
              customer never knows you exist.
            </p>
          </div>
        </section>

        {/* ── 5. The 3 Spot Grid System ── */}
        <section id="the-process" className="py-20 md:py-28 px-5 sm:px-6">
          <div className="max-w-6xl mx-auto flex flex-col items-center gap-12 text-center">
            <div className="flex flex-col items-center gap-5 max-w-3xl">
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-neutral-600">The Process</p>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
                How we get you <span className="text-blue-600">there</span>
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed">
                We take care of the tech and details, so you can focus on your work while your business brings in more happy customers every single day.
              </p>
            </div>
            <ProcessSteps />
          </div>
        </section>

        {/* ── 6. Proof ── */}
        <section id="proof" className="py-20 md:py-28 px-5 sm:px-6 bg-neutral-50 border-y border-neutral-200">
          <div className="max-w-6xl mx-auto flex flex-col gap-16">
            <Testimonials />
          </div>
        </section>

        {/* ── 7. Pricing ── */}
        <section id="pricing" className="py-20 md:py-28 px-5 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col items-center gap-5 text-center mb-14">
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-neutral-600">Pricing</p>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight">
                Get more <span className="text-blue-600">customers!</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              {plans.map((plan) => (
                <div key={plan.tier} className="relative flex flex-col">
                  {plan.badge && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                      <span className="bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg shadow-blue-600/30 whitespace-nowrap">
                        {plan.badge}
                      </span>
                    </div>
                  )}
                  <div
                    className={`bg-neutral-100 rounded-2xl p-7 sm:p-9 flex flex-col gap-7 flex-1 ${
                      plan.recommended
                        ? "border-2 border-blue-600 shadow-lg shadow-blue-200 md:scale-[1.03] pt-11"
                        : "border border-neutral-200 pt-9"
                    }`}
                  >
                    <div className="flex flex-col gap-2">
                      <p
                        className={`text-xs font-semibold tracking-[0.2em] uppercase ${
                          plan.recommended ? "text-blue-700" : "text-neutral-600"
                        }`}
                      >
                        {plan.tier}
                      </p>
                      <p className="text-4xl font-black text-black">
                        {plan.price}{" "}
                        <span className="text-lg font-semibold text-neutral-600">{plan.period}</span>
                      </p>
                    </div>

                    <div className="rounded-xl bg-white border border-blue-600/30 p-4 flex gap-3 items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      >
                        <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
                        <path d="M9 12l2 2 4-4" />
                      </svg>
                      <p className="text-base font-bold leading-snug text-black">{plan.guarantee}</p>
                    </div>

                    <span
                      className={`flex w-full items-center gap-2 px-4 py-2.5 rounded-[7px] text-sm font-semibold border ${plan.visibilityClass}`}
                    >
                      <Image
                        src="/eye-icon.png"
                        alt=""
                        width={36}
                        height={36}
                        className="flex-shrink-0 object-contain"
                        style={{ mixBlendMode: "multiply" }}
                      />
                      {plan.visibility}
                    </span>

                    <ul className="flex flex-col gap-4 flex-1">
                      {features.map((f) => (
                        <li key={f} className="flex items-center gap-3 text-sm text-neutral-700">
                          <span className="text-black text-base font-black flex-shrink-0" aria-hidden="true">
                            ✓
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>

                    <a
                      href="#profile-analysis"
                      className={`text-center py-4 px-6 text-sm font-bold tracking-wide rounded-xl transition-colors ${
                        plan.recommended
                          ? "bg-blue-600 text-white hover:bg-blue-700"
                          : "bg-white text-blue-700 border border-blue-600 hover:bg-blue-50"
                      }`}
                    >
                      {CTA}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 mx-auto max-w-2xl text-center text-base text-neutral-600 leading-relaxed flex flex-col gap-2">
              <p>No contract. Cancel any time. If you pay quarterly, we keep working until the end of the quarter you&apos;ve paid for.</p>
              <p>Your website address, website and Google profile stay in your name.</p>
              <p>We take on one business per trade per area.</p>
            </div>
          </div>
        </section>

        {/* ── 9. Free ranking map form ── */}
        <section id="profile-analysis" className="py-20 md:py-28 px-5 sm:px-6 border-b border-black/10">
          <div className="max-w-3xl mx-auto text-center flex flex-col gap-6">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-black">
              Get your free <span className="text-blue-600">analysis.</span>
            </h2>
            <p className="text-base md:text-lg text-neutral-600 leading-relaxed">
              Tell us about your business and we&apos;ll record a personal video showing exactly where you rank
              across your area, and what it&apos;ll take to reach the top 3.
            </p>
          </div>
          <div className="mt-12 w-full">
            <LeadCaptureForm />
          </div>
        </section>

        {/* ── 10. FAQ ── */}
        <section id="faq" className="py-20 md:py-28 px-5 sm:px-6">
          <div className="max-w-6xl mx-auto flex justify-center">
            <FAQ />
          </div>
        </section>
      </main>

      {/* ── 11. Footer ── */}
      <footer className="bg-white px-5 sm:px-6 border-t border-neutral-200">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center pt-16 pb-12 gap-6">
          <Image
            src="/logo.png"
            alt="HK Results"
            width={110}
            height={110}
            className="object-contain h-auto w-[110px]"
          />
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-[1.1] text-black">
            Dominate your{" "}
            <span className="text-blue-600">local service area.</span>
          </h2>
          <p className="text-base md:text-lg text-neutral-600 max-w-sm leading-relaxed">Built for local businesses.</p>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col items-center text-center pb-10 gap-3">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-neutral-600">Services</p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {["Local SEO", "Web Design", "Google Ads", "Meta Ads", "Consulting"].map((s) => (
              <span key={s} className="text-sm text-neutral-700 font-medium">
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="border-t border-neutral-200" />

        <div className="max-w-4xl mx-auto flex flex-col items-center text-center py-8 gap-2">
          <p className="text-sm font-bold text-black tracking-wide">
            © {new Date().getFullYear()} HK Results. All rights reserved.
          </p>
          <p className="text-sm text-neutral-600">
            <Link href="/privacy" className="underline underline-offset-2 hover:text-blue-700">
              Privacy policy
            </Link>
            {" · "}
            <a
              href="mailto:hamilton@hkresults.co.za"
              className="underline underline-offset-2 hover:text-blue-700"
            >
              hamilton@hkresults.co.za
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
