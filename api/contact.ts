import type { VercelRequest, VercelResponse } from "@vercel/node";
import { sendEmail } from "../src/lib/email";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const { fullName, email, phone, service, message } = req.body as {
    fullName?: string;
    email?: string;
    phone?: string;
    service?: string;
    message?: string;
  };

  if (!email || !fullName || !service) {
    res.status(400).json({ error: "Missing required fields." });
    return;
  }

  const subject = `New Lead: ${fullName} - ${service}`;

  const html = `
    <h2>New Lead Details</h2>
    <p><strong>Name:</strong> ${fullName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone || "N/A"}</p>
    <p><strong>Service:</strong> ${service}</p>
    <p><strong>Message:</strong></p>
    <p>${message || "N/A"}</p>
  `;

  try {
    await sendEmail({
      subject,
      html,
      replyTo: email,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error sending contact email", error);
    res.status(500).json({ error: "Failed to send email." });
  }
}

