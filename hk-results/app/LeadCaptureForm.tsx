"use client";

import { useState } from "react";
import { submitLeadForm } from "./actions";

const BLUE = "#2563EB";

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
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

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

  async function handleSubmit() {
    setStatus("sending");
    try {
      await submitLeadForm({ ...fields, timing });
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full bg-white border border-neutral-300 rounded-lg px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-blue-600 transition-colors";

  const labelClass = "block text-sm font-bold text-neutral-700 mb-1.5";

  if (status === "sent") {
    return (
      <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl p-10 border border-neutral-200 shadow-lg flex flex-col items-center text-center gap-4">
        <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h3 className="text-xl font-black text-black">We've received your request!</h3>
        <p className="text-sm text-neutral-500 max-w-sm leading-relaxed">
          Hamilton will review your details and get back to you shortly with a personalised analysis.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl p-8 md:p-10 border border-neutral-200 shadow-lg">

      {/* ── Progress indicator ── */}
      <div className="flex items-center mb-10">
        <div className="flex items-center gap-2.5">
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-black flex-shrink-0"
            style={{ background: step >= 1 ? BLUE : "#e5e7eb", color: step >= 1 ? "white" : "#6b7280" }}
          >
            {step > 1 ? "✓" : "1"}
          </div>
          <span className="text-sm font-bold whitespace-nowrap" style={{ color: step >= 1 ? "#111827" : "#6b7280" }}>
            Contact Info
          </span>
        </div>

        <div className="flex-1 mx-4 h-px" style={{ background: step === 2 ? BLUE : "#e5e7eb" }} />

        <div className="flex items-center gap-2.5">
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-black flex-shrink-0"
            style={{ background: step === 2 ? BLUE : "#e5e7eb", color: step === 2 ? "white" : "#6b7280" }}
          >
            2
          </div>
          <span className="text-sm font-bold whitespace-nowrap" style={{ color: step === 2 ? "#111827" : "#6b7280" }}>
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
            style={{ background: BLUE }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#1d4ed8")}
            onMouseLeave={(e) => (e.currentTarget.style.background = BLUE)}
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
          <p className="text-xs text-neutral-400 -mt-3 italic">Our programs start from R3,250/month.</p>

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
                      ? { background: BLUE, color: "white", borderColor: BLUE }
                      : { background: "transparent", color: "#6b7280", borderColor: "#d1d5db" }
                  }
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {status === "error" && (
            <p className="text-sm text-red-500 text-center">Something went wrong. Please try again or WhatsApp us directly.</p>
          )}

          <div className="flex gap-4 mt-2">
            <button
              onClick={() => setStep(1)}
              disabled={status === "sending"}
              className="flex-1 py-4 rounded-xl text-sm font-bold tracking-wider border border-neutral-300 text-neutral-600 hover:border-neutral-400 hover:text-neutral-800 transition-colors bg-transparent disabled:opacity-50"
            >
              ← Back
            </button>
            <button
              onClick={handleSubmit}
              disabled={status === "sending"}
              className="flex-1 py-4 rounded-xl text-sm font-bold tracking-wider text-white transition-colors disabled:opacity-70"
              style={{ background: BLUE }}
              onMouseEnter={(e) => { if (status !== "sending") e.currentTarget.style.background = "#1d4ed8"; }}
              onMouseLeave={(e) => { if (status !== "sending") e.currentTarget.style.background = BLUE; }}
            >
              {status === "sending" ? "Sending…" : "Submit Analysis"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
