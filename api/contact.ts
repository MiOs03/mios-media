import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const { fullName, email, phone, service, message, language } = req.body as {
    fullName?: string;
    email?: string;
    phone?: string;
    service?: string;
    message?: string;
    language?: "BS" | "EN" | "DE";
  };

  if (!email || !fullName || !service) {
    res.status(400).json({ error: "Missing required fields." });
    return;
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("RESEND_API_KEY is not set in environment variables.");
    res.status(500).json({ error: "Email service is not configured on the server." });
    return;
  }

  const resend = new Resend(apiKey);

  const isEnglish = language === "EN";

  const subject = isEnglish
    ? `New Inquiry: ${fullName}`
    : `Novi upit: ${fullName}`;

  const html = isEnglish
    ? `
    <h2>New Inquiry Details</h2>
    <p><strong>Name:</strong> ${fullName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone || "N/A"}</p>
    <p><strong>Service:</strong> ${service}</p>
    <p><strong>Message:</strong></p>
    <p>${message || "N/A"}</p>
  `
    : `
    <h2>Novi upit</h2>
    <p><strong>Ime:</strong> ${fullName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Telefon:</strong> ${phone || "N/A"}</p>
    <p><strong>Usluga:</strong> ${service}</p>
    <p><strong>Poruka:</strong></p>
    <p>${message || "N/A"}</p>
  `;

  try {
    await resend.emails.send({
      from: "Mios Agency <system@mios.agency>",
      to: ["it.ostojic@gmail.com", "info@mios.agency"],
      subject,
      html,
      reply_to: email,
    });

    // Optional auto-response to client
    if (email) {
      const autoResponseSubject = isEnglish
        ? "Thank you for reaching out to Mios Agency"
        : "Hvala na javljanju Mios Agency timu";

      const autoResponseHtml = isEnglish
        ? `
        <p>Hi ${fullName || ""},</p>
        <p>Thank you for reaching out to Mios Agency. We have received your inquiry and will get back to you as soon as possible.</p>
        <p>Best regards,<br/>Mios Agency</p>
      `
        : `
        <p>Zdravo ${fullName || ""},</p>
        <p>Hvala na javljanju Mios Agency timu. Zaprimili smo vaš upit i javit ćemo vam se u najkraćem mogućem roku.</p>
        <p>Srdačan pozdrav,<br/>Mios Agency</p>
      `;

      await resend.emails.send({
        from: "Mios Agency <system@mios.agency>",
        to: [email],
        subject: autoResponseSubject,
        html: autoResponseHtml,
      });
    }

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error sending contact email", error);
    res.status(500).json({ error: "Failed to send email." });
  }
}

