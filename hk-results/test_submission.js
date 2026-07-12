const { Resend } = require('resend');

const data = {
  fullName: "Test User",
  email: "hamilton@hkresults.co.za",
  phone: "+27 82 123 4567",
  website: "www.test.co.za",
  companyName: "Test Company",
  businessDo: "Plumbing",
  budget: "R2,000 – R5,000 / month",
  jobValue: "R1,000 – R5,000",
  customers: "5 – 15 per month",
  timing: "Today"
};

async function run() {
  console.log("\nTesting Resend API to registered email...");
  try {
    const apiKey = "re_eRS7Tg7o_EqGvMWp7mq3qc891hdqZnwa8"; // from .env.local
    const resend = new Resend(apiKey);
    const result = await resend.emails.send({
      from: "HK Results Website <onboarding@resend.dev>",
      to: "hamiltonkhohlakala@gmail.com",
      subject: `New Lead: ${data.fullName} — ${data.companyName}`,
      html: `<p>Test email</p>`,
    });
    console.log("Resend result:", result);
  } catch (err) {
    console.error("Resend error:", err);
  }
}

run();
