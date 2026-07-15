"use server";

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

  const response = await fetch("https://hook.us2.make.com/m1jgrx8yg7f5rrskuc038xrtafe2pgzf", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`Make.com webhook returned status: ${response.status} ${response.statusText}`);
  }

  console.log("Successfully posted lead to Make.com webhook.");
}
