"use server";

export async function submitLeadForm(data: {
  fullName: string;
  email: string;
  phone: string;
  website: string;
  companyName: string;
  businessDo: string;
  timing: string;
  reinvest?: string;
}) {
  console.log("Submitting lead form data:", JSON.stringify(data));

  const response = await fetch("https://hook.us2.make.com/m1jgrx8yg7f5rrskuc038xrtafe2pgzf", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      full_name: data.fullName,
      email: data.email,
      phone: data.phone,
      website: data.website,
      company_name: data.companyName,
      business_description: data.businessDo,
      start_timeline: data.timing,
      can_reinvest: data.reinvest ?? "",
    }),
  });

  if (!response.ok) {
    throw new Error(`Make.com webhook returned status: ${response.status} ${response.statusText}`);
  }

  console.log("Successfully posted lead to Make.com webhook.");
}
