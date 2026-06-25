"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);


export async function submitLeadForm(data: {
  fullName: string;
  email: string;
  phone: string;
  website: string;
  companyName: string;
  businessDo: string;
  budget: string;
  jobValue: string;
  customers: string;
  timing: string;
}) {
  await fetch("https://hook.us2.make.com/m1jgrx8yg7f5rrskuc038xrtafe2pgzf", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  await resend.emails.send({
    from: "HK Results Website <onboarding@resend.dev>",
    to: "hamilton@hkresults.co.za",
    subject: `New Lead: ${data.fullName} — ${data.companyName}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
        <h2 style="color:#2563eb">New Profile Analysis Request</h2>
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:8px 0;color:#555;width:160px"><strong>Name</strong></td><td style="padding:8px 0">${data.fullName}</td></tr>
          <tr><td style="padding:8px 0;color:#555"><strong>Email</strong></td><td style="padding:8px 0">${data.email}</td></tr>
          <tr><td style="padding:8px 0;color:#555"><strong>Phone</strong></td><td style="padding:8px 0">${data.phone}</td></tr>
          <tr><td style="padding:8px 0;color:#555"><strong>Website</strong></td><td style="padding:8px 0">${data.website || "—"}</td></tr>
          <tr><td style="padding:8px 0;color:#555"><strong>Company</strong></td><td style="padding:8px 0">${data.companyName}</td></tr>
        </table>
        <hr style="border:none;border-top:1px solid #e5e7eb;margin:16px 0"/>
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:8px 0;color:#555;width:160px"><strong>Business Type</strong></td><td style="padding:8px 0">${data.businessDo}</td></tr>
          <tr><td style="padding:8px 0;color:#555"><strong>Budget</strong></td><td style="padding:8px 0">${data.budget || "—"}</td></tr>
          <tr><td style="padding:8px 0;color:#555"><strong>Avg Job Value</strong></td><td style="padding:8px 0">${data.jobValue || "—"}</td></tr>
          <tr><td style="padding:8px 0;color:#555"><strong>Customers/Month</strong></td><td style="padding:8px 0">${data.customers || "—"}</td></tr>
          <tr><td style="padding:8px 0;color:#555"><strong>Start Timing</strong></td><td style="padding:8px 0">${data.timing}</td></tr>
        </table>
      </div>
    `,
  });
}
