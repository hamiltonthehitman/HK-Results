import Image from "next/image";
import BeforeAfter from "./BeforeAfter";
import LeadCaptureForm from "./LeadCaptureForm";
import FAQ from "./FAQ";
import IconCards from "./IconCards";
import LocationBadge from "./LocationBadge";
import HeatmapLegend from "./HeatmapLegend";


export default function Home() {
  return (
    <>
      {/* ── Navbar ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <Image
            src="/logo.png"
            alt="HK Results"
            width={130}
            height={52}
            className="object-contain invert"
          />
          <nav className="hidden md:flex items-center gap-8 text-base font-medium tracking-wide text-white">
            <a href="#the-process" className="hover:opacity-50 transition-opacity">
              The Process
            </a>
            <a href="#before-after" className="hover:opacity-50 transition-opacity">
              Before &amp; After
            </a>
            <a href="#contact" className="hover:opacity-50 transition-opacity">
              Questions
            </a>
          </nav>
          <a
            href="#profile-analysis"
            className="hidden md:inline-block text-base font-semibold tracking-wider px-5 py-3 bg-white text-black hover:bg-neutral-200 transition-colors"
          >
            Get Started
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* ── Hero ── */}
        <section className="pt-36 pb-6 px-6">
          <div className="max-w-6xl mx-auto">
            {/* Meta stack: label top, location below, both centred */}
            <div className="flex flex-col items-center gap-1.5 mb-6">
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-neutral-400">
                Marketing Agency
              </p>
              <LocationBadge />
            </div>
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight mb-8">
              <span
                className="text-blue-600 italic"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                Guaranteed
              </span>
              <span className="text-black"> - </span>
              Top 3<br />
              Google Maps Rankings within 90 days.
            </h1>
            <p className="text-lg md:text-xl text-neutral-500 max-w-xl leading-relaxed mb-12 mx-auto">
              <strong className="font-bold text-blue-600">Dominate</strong> your local service area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#profile-analysis"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white text-sm font-semibold tracking-wider hover:bg-blue-700 transition-colors"
              >
                Get your FREE analysis
              </a>
              <a
                href="https://wa.me/27627963028"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 text-white text-sm font-semibold tracking-wider hover:bg-green-600 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.855L.057 23.882a.5.5 0 0 0 .61.61l6.087-1.461A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.693-.504-5.233-1.385l-.374-.217-3.882.932.96-3.808-.235-.386A9.945 9.945 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
            <div id="the-process" className="mt-12 flex flex-col items-center gap-5 text-center scroll-mt-20">
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-black max-w-2xl leading-snug">
                The <span className="text-blue-600">difference</span> between getting found and getting forgotten is.
              </h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-neutral-300 mt-2 animate-bounce"
              >
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </div>
          </div>
          </div>
        </section>


        {/* ── Icon Cards ── */}
        <section className="pt-2 pb-16 px-6">
          <IconCards />
        </section>

        {/* ── Before & After ── */}
        <section id="before-after" className="py-16 px-6">
          <div className="max-w-6xl mx-auto flex flex-col items-center gap-10 text-center">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight max-w-3xl">
              The <span className="text-blue-600">difference</span> between showing up and being invisible.
            </h2>
            <p className="text-base md:text-lg text-neutral-500 max-w-2xl -mt-4 leading-relaxed">
              This is likely where your business is ranking today and this is where we will position it within the next 90 days.
            </p>
            <BeforeAfter />
            <div className="flex justify-center mt-10">
              <a
                href="#profile-analysis"
                className="px-10 py-4 bg-blue-600 text-white text-sm font-semibold tracking-wider hover:bg-blue-700 transition-colors"
              >
                Get Free Analysis
              </a>
            </div>
          </div>
        </section>

        {/* ── Pricing ── */}
        <section id="pricing" className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-neutral-400 mb-4 text-center">
              Pricing
            </p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-center mb-16">
              <span className="text-black">Get more </span><span className="text-blue-600">customers!</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

              {/* Card 1 — Minimum */}
              <div className="bg-neutral-100 rounded-2xl p-10 flex flex-col gap-8 border border-neutral-200">
                <div className="flex flex-col gap-2">
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-500">Minimum</p>
                  <p className="text-4xl font-black text-black">R3,250 <span className="text-lg font-semibold text-neutral-500">/ Month</span></p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-lg font-black text-black leading-snug">First page on Google within 90 days.</p>
                  <p className="text-xs text-neutral-500 italic">*If first page is not achieved in 90 days, we work for free.</p>
                </div>
                <span className="flex w-full items-center gap-2 px-4 py-2.5 rounded-[7px] text-sm font-semibold bg-amber-500/15 text-amber-400 border border-amber-500/30">
                  <img src="/eye-icon.png" alt="" className="w-[36px] h-[36px] flex-shrink-0 object-contain" style={{mixBlendMode: "multiply"}} />
                  Visible on 25% of search results.
                </span>
                <ul className="flex flex-col gap-4 flex-1">
                  {[
                    "Full Competitor's Analysis",
                    "Updates Every Two Weeks",
                    "Ranking For Main Search-Term",
                    "Full Website Optimisation",
                    "High Quality Backlinks",
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-neutral-600">
                      <span className="text-black text-base font-black flex-shrink-0">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#profile-analysis"
                  className="text-center py-4 px-6 bg-blue-600 text-white text-sm font-semibold tracking-wider rounded-xl hover:bg-blue-700 transition-colors"
                >
                  Get Started
                </a>
              </div>

              {/* Card 2 — Standard */}
              <div className="bg-neutral-100 rounded-2xl p-10 flex flex-col gap-8 border border-neutral-200">
                <div className="flex flex-col gap-2">
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-500">Standard</p>
                  <p className="text-4xl font-black text-black">R4,250 <span className="text-lg font-semibold text-neutral-500">/ Month</span></p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-lg font-black text-black leading-snug">Top 3 on Google within 90 days.</p>
                  <p className="text-xs text-neutral-500 italic">*If top 3 is not achieved in 90 days, we work for free.</p>
                </div>
                <span className="flex w-full items-center gap-2 px-4 py-2.5 rounded-[7px] text-sm font-semibold bg-green-500/15 text-green-400 border border-green-500/30">
                  <img src="/eye-icon.png" alt="" className="w-[36px] h-[36px] flex-shrink-0 object-contain" style={{mixBlendMode: "multiply"}} />
                  Visible on 75%+ of search results.
                </span>
                <ul className="flex flex-col gap-4 flex-1">
                  {[
                    "Full Competitor's Analysis",
                    "Updates Every Two Weeks",
                    "Ranking For Main Search-Term",
                    "Full Website Optimisation",
                    "High Quality Backlinks",
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-neutral-600">
                      <span className="text-black text-base font-black flex-shrink-0">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#profile-analysis"
                  className="text-center py-4 px-6 bg-blue-600 text-white text-sm font-semibold tracking-wider rounded-xl hover:bg-blue-700 transition-colors"
                >
                  Get Started
                </a>
              </div>

              {/* Card 3 — Best (featured) */}
              <div className="relative flex flex-col">
                {/* Floating save badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg shadow-blue-600/30 whitespace-nowrap">
                    Save R1,750
                  </span>
                </div>
                <div className="bg-neutral-100 rounded-2xl p-10 flex flex-col gap-8 border-2 border-blue-600 shadow-lg shadow-blue-200 pt-12 flex-1">
                  <div className="flex flex-col gap-2">
                    <p className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-600">Best</p>
                    <p className="text-4xl font-black text-black">R11,000 <span className="text-lg font-semibold text-neutral-500">/ Quarter</span></p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-lg font-black text-black leading-snug">Top 3 on Google within 90 days.</p>
                    <p className="text-xs text-neutral-500 italic">*If top 3 is not achieved in 90 days, we work for free.</p>
                  </div>
                  <span className="flex w-full items-center gap-2 px-4 py-2.5 rounded-[7px] text-sm font-semibold bg-green-500/15 text-green-400 border border-green-500/30">
                    <img src="/eye-icon.png" alt="" className="w-[36px] h-[36px] flex-shrink-0 object-contain" style={{mixBlendMode: "multiply"}} />
                    Visible on 75%+ of search results.
                  </span>
                  <ul className="flex flex-col gap-4 flex-1">
                    {[
                      "Full Competitor's Analysis",
                      "Updates Every Two Weeks",
                      "Ranking For Main Search-Term",
                      "Full Website Optimisation",
                      "High Quality Backlinks",
                    ].map((f) => (
                      <li key={f} className="flex items-center gap-3 text-sm text-neutral-600">
                        <span className="text-black text-base font-black flex-shrink-0">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#profile-analysis"
                    className="text-center py-4 px-6 bg-blue-600 text-white text-sm font-semibold tracking-wider rounded-xl hover:bg-blue-700 transition-colors"
                  >
                    Get Started
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Profile Analysis CTA ── */}
        <section id="profile-analysis" className="py-24 px-6 border-b border-black/10">
          <div className="max-w-3xl mx-auto text-center flex flex-col gap-6">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-black">
              Get your profile <span className="text-blue-600">analyzed.</span>
            </h2>
            <p className="text-base md:text-lg text-neutral-500 leading-relaxed">
              Fill out the form and we will record your personalized analysis with the exact things that need to happen so you can rank in the top 3 within your area.
            </p>
          </div>
          <div className="mt-12 w-full">
            <LeadCaptureForm />
          </div>
        </section>

        {/* ── FAQ ── */}
        <section id="contact" className="py-24 px-6">
          <div className="max-w-6xl mx-auto flex justify-center">
            <FAQ />
          </div>
        </section>

      </main>

      {/* ── Footer Hero ── */}
      <footer className="bg-white px-6 border-t border-neutral-200">
        {/* Hero content */}
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center pt-24 pb-20 gap-8">
          {/* Logo */}
          <Image
            src="/logo.png"
            alt="HK Results"
            width={150}
            height={60}
            className="object-contain"
          />

          {/* Headline */}
          <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.05] text-black">
            Dominate your{" "}
            <span
              className="italic text-blue-600"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              local service area.
            </span>
          </h2>

          {/* Subheading */}
          <p className="text-base md:text-lg text-neutral-500 max-w-sm leading-relaxed">
            Built for local businesses.
          </p>
        </div>

        {/* Services list */}
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center pb-12 gap-4">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-neutral-400">
            Services
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {["Local SEO", "Web Design", "Google Ads", "Meta Ads", "Consulting"].map((s) => (
              <span key={s} className="text-sm text-neutral-600 font-medium">{s}</span>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-200" />

        {/* Footer bar */}
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center py-8 gap-2">
          <p className="text-sm font-bold text-black tracking-wide">
            © {new Date().getFullYear()} HK Results. All rights reserved.
          </p>
          <p className="text-xs text-neutral-400">
            Terms, conditions, and privacy information are available by email at{" "}
            <a
              href="mailto:hamilton@hkresults.co.za"
              className="text-neutral-500 hover:text-neutral-700 transition-colors"
            >
              hamilton@hkresults.co.za
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
