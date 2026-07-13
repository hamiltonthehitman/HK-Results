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

  // 1. Send lead data to Make.com Webhook
  try {
    const response = await fetch("https://hook.us2.make.com/m1jgrx8yg7f5rrskuc038xrtafe2pgzf", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Make.com webhook returned status: ${response.status} ${response.statusText}`);
    }
    console.log("Successfully posted lead to Make.com webhook.");
  } catch (error) {
    console.error("CRITICAL: Make.com webhook integration failed:", error);
    // Throw error so client-side knows the primary lead storage failed
    throw error;
  }

  // 2. Send email notification via Resend
  // NOTE: If using a free/sandbox Resend API key, you can only send to your own registered account email.
  // Once the domain 'hkresults.co.za' is verified in Resend, you can change the 'to' recipient
  // back to 'hamilton@hkresults.co.za' and the 'from' email to an address on your verified domain.
  try {
    const emailResult = await resend.emails.send({
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
    });

    if (emailResult.error) {
      console.error("Resend API error sending email notification:", emailResult.error);
    } else {
      console.log("Successfully sent Resend email notification. ID:", emailResult.data?.id);
    }
  } catch (error) {
    // Non-critical: Do not throw, as we already saved the lead via Make.com webhook successfully
    console.error("Non-critical: Resend email notification failed:", error);
  }
}
