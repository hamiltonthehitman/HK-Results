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
  timing: string;
}) {
  console.log("Submitting lead form data:", JSON.stringify(data));

  // Make.com webhook and Resend email are independent delivery channels.
  // Run them in parallel (not sequential) to stay well inside the host's
  // function execution timeout, and only fail the submission if BOTH
  // channels fail — a hiccup in one shouldn't lose the lead or show the
  // visitor an error when the other channel got through fine.
  const [webhookResult, emailResult] = await Promise.allSettled([
    fetch("https://hook.us2.make.com/m1jgrx8yg7f5rrskuc038xrtafe2pgzf", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((response) => {
      if (!response.ok) {
        throw new Error(`Make.com webhook returned status: ${response.status} ${response.statusText}`);
      }
      return response;
    }),
    resend.emails.send({
      from: "HK Results Website <onboarding@resend.dev>",
      to: "hamiltonkhohlakala@gmail.com",
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
            <tr><td style="padding:8px 0;color:#555"><strong>Start Timing</strong></td><td style="padding:8px 0">${data.timing}</td></tr>
          </table>
        </div>
      `,
    }).then((result) => {
      if (result.error) throw result.error;
      return result;
    }),
  ]);

  if (webhookResult.status === "fulfilled") {
    console.log("Successfully posted lead to Make.com webhook.");
  } else {
    console.error("Make.com webhook integration failed:", webhookResult.reason);
  }

  if (emailResult.status === "fulfilled") {
    console.log("Successfully sent Resend email notification. ID:", emailResult.value.data?.id);
  } else {
    console.error("Resend email notification failed:", emailResult.reason);
  }

  if (webhookResult.status === "rejected" && emailResult.status === "rejected") {
    throw new Error("Both lead delivery channels failed — webhook and email");
  }
}
