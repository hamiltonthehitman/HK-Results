import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | HK Results",
  description: "How HK Results collects, uses and protects your personal information.",
  alternates: { canonical: "/privacy" },
};

const sections = [
  {
    h: "Who we are",
    body: [
      "This website is run by [BUSINESS NAME], trading as HK Results, based in Cape Town, South Africa. Our address is [ADDRESS].",
      "We are the \"responsible party\" under the Protection of Personal Information Act (POPIA). Our information officer is [INFORMATION OFFICER]. You can reach us at hamilton@hkresults.co.za.",
    ],
  },
  {
    h: "What information we collect",
    body: [
      "When you fill in the form on our website, we collect your full name, email address, phone number, company name, website address (if you give one), what your business does and how soon you want to start.",
      "When you use our website, Meta (Facebook) collects some information about your visit through a tracking tool called the Meta Pixel. This includes things like your device, your browser and the pages you view.",
      "If you message us on WhatsApp, we see your WhatsApp name, number and what you send us.",
    ],
  },
  {
    h: "Why we collect it",
    body: [
      "We use your details to contact you, record your free ranking map video, and tell you what it would take to reach the top 3 on Google Maps. If you become a client, we use them to do the work and send you invoices.",
      "We use Meta Pixel information to measure our adverts and show them to people who may find them useful.",
      "We only collect what we need for these reasons.",
    ],
  },
  {
    h: "Who we share it with",
    body: [
      "We do not sell your information. We share it only with the tools that help us run the business, such as the automation and email services that deliver your form to us, and Meta for advertising measurement.",
      "Some of these companies keep their servers outside South Africa. When that happens, we only use providers that protect your information to a standard similar to POPIA.",
    ],
  },
  {
    h: "How long we keep it",
    body: [
      "We keep your information for as long as we need it to deal with your enquiry or serve you as a client, and for the time the law asks us to keep business records. After that we delete it or remove anything that identifies you.",
    ],
  },
  {
    h: "How we protect it",
    body: [
      "We use reasonable technical and practical steps to keep your information safe, including secure connections on our website and limited access to enquiries. No system is perfectly safe, and we will tell you and the Information Regulator if there is a breach that affects you, as the law requires.",
    ],
  },
  {
    h: "Cookies and tracking",
    body: [
      "Our website uses the Meta Pixel, which can place cookies in your browser. You can block or delete cookies in your browser settings, and you can change how Meta uses your information in your Facebook ad settings.",
    ],
  },
  {
    h: "Your rights",
    body: [
      "Under POPIA you can ask us what information we hold about you, ask us to correct it, ask us to delete it, and object to us using it for marketing. You can also withdraw your consent at any time.",
      "To do any of these, email hamilton@hkresults.co.za. We will reply as soon as we can.",
      "If you are not happy with how we handle your information, you can complain to the Information Regulator of South Africa at inforegulator.org.za.",
    ],
  },
  {
    h: "Changes to this policy",
    body: ["If we change this policy, we will put the new version on this page and update the date below."],
  },
];

export default function Privacy() {
  return (
    <>
      <header className="bg-black border-b border-white/10">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" aria-label="HK Results home">
            <Image src="/logo.png" alt="HK Results" width={130} height={52} className="object-contain invert h-10 w-auto" />
          </Link>
          <Link href="/" className="text-sm font-semibold text-white hover:opacity-70 transition-opacity">
            Back to home
          </Link>
        </div>
      </header>

      <main className="flex-1 px-5 sm:px-6 py-14 md:py-20">
        <article className="max-w-3xl mx-auto flex flex-col gap-10">
          <div className="rounded-lg border-2 border-dashed border-amber-500 bg-amber-50 p-4 text-sm text-amber-900">
            <strong>DRAFT for review.</strong> This policy needs checking by the owner and a legal professional
            before it is treated as final. Fill in the [BRACKETED] details first.
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight">
              Privacy <span className="text-blue-600">policy</span>
            </h1>
            <p className="text-base text-neutral-600 leading-relaxed">
              This page explains what personal information we collect on hkresults.co.za, why we collect it and what
              you can do about it. We follow the Protection of Personal Information Act (POPIA).
            </p>
          </div>

          {sections.map((s) => (
            <section key={s.h} className="flex flex-col gap-3">
              <h2 className="text-2xl font-black tracking-tight">{s.h}</h2>
              {s.body.map((para) => (
                <p key={para} className="text-base text-neutral-700 leading-relaxed">
                  {para}
                </p>
              ))}
            </section>
          ))}

          <p className="text-sm text-neutral-600 border-t border-neutral-200 pt-6">
            Last updated: [DATE]. Questions? Email{" "}
            <a href="mailto:hamilton@hkresults.co.za" className="underline underline-offset-2 hover:text-blue-700">
              hamilton@hkresults.co.za
            </a>
            .
          </p>
        </article>
      </main>
    </>
  );
}
