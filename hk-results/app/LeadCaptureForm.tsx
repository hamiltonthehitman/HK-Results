"use client";

import { useState } from "react";

const CRIMSON = "#2563EB";

const budgetOptions = [
  "R0 – R2,000 / month",
  "R2,000 – R5,000 / month",
  "R5,000 – R10,000 / month",
  "R10,000+ / month",
];

const jobValueOptions = [
  "Under R1,000",
  "R1,000 – R5,000",
  "R5,000 – R15,000",
  "R15,000 – R50,000",
  "R50,000+",
];

const customersOptions = [
  "0 – 5 per month",
  "5 – 15 per month",
  "15 – 30 per month",
  "30+ per month",
];

const timingOptions = ["Today", "A few weeks", "Just exploring"];

export default function LeadCaptureForm() {
  const [step, setStep] = useState(1);
  const [timing, setTiming] = useState("Today");

  const [fields, setFields] = useState({
    fullName: "",
    email: "",
    phone: "",
    website: "",
    companyName: "",
    businessDo: "",
    budget: "",
    jobValue: "",
    customers: "",
  });

  function set(key: keyof typeof fields) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setFields((prev) => ({ ...prev, [key]: e.target.value }));
  }

  const inputClass =
    "w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-blue-600 transition-colors";

  const labelClass = "block text-sm font-bold text-neutral-200 mb-1.5";

  return (
    <div className="w-full max-w-2xl mx-auto bg-neutral-900 rounded-2xl p-8 md:p-10 border border-neutral-800 shadow-2xl">

      {/* ── Progress indicator ── */}
      <div className="flex items-center mb-10">
        {/* Step 1 */}
        <div className="flex items-center gap-2.5">
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-black flex-shrink-0"
            style={{ background: step >= 1 ? CRIMSON : "#404040", color: "white" }}
          >
            {step > 1 ? "✓" : "1"}
          </div>
          <span
            className="text-sm font-bold whitespace-nowrap"
            style={{ color: step >= 1 ? "white" : "#737373" }}
          >
            Contact Info
          </span>
        </div>

        {/* Connector */}
        <div className="flex-1 mx-4 h-px" style={{ background: step === 2 ? CRIMSON : "#404040" }} />

        {/* Step 2 */}
        <div className="flex items-center gap-2.5">
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-black flex-shrink-0"
            style={{ background: step === 2 ? CRIMSON : "#404040", color: "white" }}
          >
            2
          </div>
          <span
            className="text-sm font-bold whitespace-nowrap"
            style={{ color: step === 2 ? "white" : "#737373" }}
          >
            Business Details
          </span>
        </div>
      </div>

      {/* ── Step 1 ── */}
      {step === 1 && (
        <div className="flex flex-col gap-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className={labelClass}>Full Name <span className="text-blue-600">*</span></label>
              <input className={inputClass} placeholder="John Smith" value={fields.fullName} onChange={set("fullName")} />
            </div>
            <div>
              <label className={labelClass}>Email <span className="text-blue-600">*</span></label>
              <input className={inputClass} type="email" placeholder="john@company.com" value={fields.email} onChange={set("email")} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className={labelClass}>Phone Number <span className="text-blue-600">*</span></label>
              <input className={inputClass} type="tel" placeholder="+27 00 000 0000" value={fields.phone} onChange={set("phone")} />
            </div>
            <div>
              <label className={labelClass}>Website</label>
              <input className={inputClass} placeholder="www.yoursite.co.za" value={fields.website} onChange={set("website")} />
            </div>
          </div>

          <div>
            <label className={labelClass}>Company Name <span className="text-blue-600">*</span></label>
            <input className={inputClass} placeholder="Your Company Ltd." value={fields.companyName} onChange={set("companyName")} />
          </div>

          <button
            onClick={() => setStep(2)}
            className="mt-2 w-full py-4 rounded-xl text-sm font-bold tracking-wider text-white transition-colors"
            style={{ background: CRIMSON }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#1d4ed8")}
            onMouseLeave={(e) => (e.currentTarget.style.background = CRIMSON)}
          >
            Continue to Step 2 →
          </button>
        </div>
      )}

      {/* ── Step 2 ── */}
      {step === 2 && (
        <div className="flex flex-col gap-6">
          <div>
            <label className={labelClass}>What does your business do? <span className="text-blue-600">*</span></label>
            <input
              className={inputClass}
              placeholder="e.g. Plumbing in Cape Town"
              value={fields.businessDo}
              onChange={set("businessDo")}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className={labelClass}>Current Marketing Budget</label>
              <select className={inputClass} value={fields.budget} onChange={set("budget")}>
                <option value="" disabled>Select budget range...</option>
                {budgetOptions.map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
            </div>
            <div>
              <label className={labelClass}>Average value of one job/sale</label>
              <select className={inputClass} value={fields.jobValue} onChange={set("jobValue")}>
                <option value="" disabled>Select average value...</option>
                {jobValueOptions.map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
            </div>
          </div>
          <p className="text-xs text-neutral-500 -mt-3 italic">Our programs start from R3,250/month.</p>

          <div>
            <label className={labelClass}>Customers per month</label>
            <select className={inputClass} value={fields.customers} onChange={set("customers")}>
              <option value="" disabled>Select customers per month...</option>
              {customersOptions.map((o) => <option key={o} value={o}>{o}</option>)}
            </select>
          </div>

          <div>
            <label className={labelClass}>How soon are you looking to start the ranking process?</label>
            <div className="flex gap-3 mt-1">
              {timingOptions.map((t) => (
                <button
                  key={t}
                  onClick={() => setTiming(t)}
                  className="flex-1 py-2.5 rounded-full text-sm font-semibold border transition-all duration-200"
                  style={
                    timing === t
                      ? { background: "#1a1a1a", color: "white", borderColor: "#1a1a1a" }
                      : { background: "transparent", color: "#a3a3a3", borderColor: "#404040" }
                  }
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-4 mt-2">
            <button
              onClick={() => setStep(1)}
              className="flex-1 py-4 rounded-xl text-sm font-bold tracking-wider border border-neutral-600 text-neutral-300 hover:border-neutral-400 hover:text-white transition-colors bg-transparent"
            >
              ← Back
            </button>
            <button
              className="flex-1 py-4 rounded-xl text-sm font-bold tracking-wider text-white transition-colors"
              style={{ background: CRIMSON }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#1d4ed8")}
              onMouseLeave={(e) => (e.currentTarget.style.background = CRIMSON)}
            >
              Submit Analysis
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
