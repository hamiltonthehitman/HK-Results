"use client";

import { useState } from "react";
import { submitDetailerLead } from "../actions";
import { trackLead } from "../trackLead";

const BLUE = "#2563EB";

type Step = "detailer" | "reinvest" | "contact" | "sent" | "declined";

const inputClass =
  "w-full bg-white border border-neutral-300 rounded-lg px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-blue-600 transition-colors";
const labelClass = "block text-sm font-bold text-neutral-700 mb-1.5";
const cardClass =
  "w-full max-w-2xl mx-auto bg-white rounded-2xl p-6 sm:p-8 md:p-10 border border-neutral-200 shadow-lg";

function YesNo({ onYes, onNo }: { onYes: () => void; onNo: () => void }) {
  const btn = "flex-1 rounded-full border border-neutral-300 py-4 text-base font-semibold text-neutral-700 transition-colors hover:border-blue-600 hover:bg-blue-600 hover:text-white";
  return (
    <div className="flex gap-3">
      <button type="button" className={btn} onClick={onYes}>Yes</button>
      <button type="button" className={btn} onClick={onNo}>No</button>
    </div>
  );
}

export default function DetailerQuiz() {
  const [step, setStep] = useState<Step>("detailer");
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [fields, setFields] = useState({ fullName: "", phone: "", email: "" });

  const filled =
    fields.fullName.trim() !== "" &&
    fields.phone.replace(/\D/g, "").length >= 9 &&
    /^\S+@\S+\.\S+$/.test(fields.email.trim());

  function set(key: keyof typeof fields) {
    return (e: React.ChangeEvent<HTMLInputElement>) =>
      setFields((prev) => ({ ...prev, [key]: e.target.value }));
  }

  async function handleSubmit() {
    if (!filled) return;
    setStatus("sending");
    try {
      await submitDetailerLead({ ...fields, isDetailer: "Yes", canReinvest: "Yes" });
      trackLead();
      setStep("sent");
    } catch (error) {
      console.error("Detailer lead submission failed:", error);
      setStatus("error");
    }
  }

  if (step === "sent") {
    return (
      <div id="quiz" className={`${cardClass} text-center scroll-mt-28`}>
        <h2 className="text-xl font-black text-black mb-3">Thank you, we have your details.</h2>
        <p className="text-sm text-neutral-500 max-w-sm mx-auto leading-relaxed">
          Hamilton will phone you soon to talk about getting your detailing business more customers.
        </p>
      </div>
    );
  }

  if (step === "declined") {
    return (
      <div id="quiz" className={`${cardClass} text-center scroll-mt-28`}>
        <h2 className="text-xl font-black text-black mb-3">Thank you for your time.</h2>
        <p className="text-sm text-neutral-500 max-w-sm mx-auto leading-relaxed">
          Right now we only work with car detailers who can reinvest R1,000 a week into their business.
          You are welcome to come back whenever that changes.
        </p>
      </div>
    );
  }

  const n = step === "detailer" ? 1 : step === "reinvest" ? 2 : 3;

  return (
    <div id="quiz" className={`${cardClass} scroll-mt-28`}>
      <div className="flex items-center gap-2 mb-8" aria-label={`Step ${n} of 3`}>
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-1.5 flex-1 rounded-full" style={{ background: i <= n ? BLUE : "#e5e7eb" }} />
        ))}
      </div>

      {step === "detailer" && (
        <div className="flex flex-col gap-6">
          <h2 className="text-xl sm:text-2xl font-black text-black">Are you a car detailer?</h2>
          <YesNo onYes={() => setStep("reinvest")} onNo={() => setStep("declined")} />
        </div>
      )}

      {step === "reinvest" && (
        <div className="flex flex-col gap-6">
          <h2 className="text-xl sm:text-2xl font-black text-black">
            Do you have R1,000 to reinvest into getting new bookings?
          </h2>
          <YesNo onYes={() => setStep("contact")} onNo={() => setStep("declined")} />
        </div>
      )}

      {step === "contact" && (
        <form
          className="flex flex-col gap-5"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <h2 className="text-xl sm:text-2xl font-black text-black">Where can we reach you?</h2>
          <div>
            <label htmlFor="cd-name" className={labelClass}>Full Name <span className="text-blue-600">*</span></label>
            <input id="cd-name" autoComplete="name" className={inputClass} placeholder="John Smith" value={fields.fullName} onChange={set("fullName")} />
          </div>
          <div>
            <label htmlFor="cd-phone" className={labelClass}>Phone Number <span className="text-blue-600">*</span></label>
            <input id="cd-phone" autoComplete="tel" type="tel" className={inputClass} placeholder="+27 00 000 0000" value={fields.phone} onChange={set("phone")} />
          </div>
          <div>
            <label htmlFor="cd-email" className={labelClass}>Email <span className="text-blue-600">*</span></label>
            <input id="cd-email" autoComplete="email" type="email" className={inputClass} placeholder="john@company.com" value={fields.email} onChange={set("email")} />
          </div>
          {status === "error" && (
            <p className="text-sm text-red-500 text-center">Something went wrong. Please try again or WhatsApp us directly.</p>
          )}
          <button
            type="submit"
            disabled={!filled || status === "sending"}
            className="w-full rounded-full py-4 text-base font-bold text-white transition-opacity disabled:opacity-50"
            style={{ background: BLUE }}
          >
            {status === "sending" ? "Sending..." : "Submit"}
          </button>
        </form>
      )}
    </div>
  );
}
