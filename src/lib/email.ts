import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;

if (!resendApiKey) {
  // In non-production environments you might want to log this,
  // but avoid throwing immediately in case the file is imported on the client.
  console.warn("RESEND_API_KEY is not set in environment variables.");
}

const resend = resendApiKey ? new Resend(resendApiKey) : null;

type SendEmailArgs = {
  subject: string;
  html?: string;
  text?: string;
  replyTo?: string;
};

export async function sendEmail({
  subject,
  html,
  text,
  replyTo,
}: SendEmailArgs) {
  if (!resend) {
    throw new Error("Resend client is not configured. Missing RESEND_API_KEY.");
  }

  const to = ["it.ostojic@gmail.com", "info@mios.agency"];

  return resend.emails.send({
    from: "Mios Agency <info@mios.agency>",
    to,
    subject,
    html,
    text,
    reply_to: replyTo,
  });
}

