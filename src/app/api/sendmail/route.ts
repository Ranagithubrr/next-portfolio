import { NextRequest } from "next/server";
import nodemailer from "nodemailer";

const isValidEmail = (value: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ message: "Name, email, and message are required." }),
        { status: 400 }
      );
    }
    if (typeof name !== "string" || typeof email !== "string" || typeof message !== "string") {
      return new Response(JSON.stringify({ message: "Invalid payload." }), { status: 400 });
    }
    if (!isValidEmail(email)) {
      return new Response(JSON.stringify({ message: "Invalid email address." }), { status: 400 });
    }
    if (name.length > 120 || message.length > 5000) {
      return new Response(JSON.stringify({ message: "Input too long." }), { status: 400 });
    }

    const safeName = escapeHtml(name.trim());
    const safeEmail = escapeHtml(email.trim());
    const safeMessage = escapeHtml(message.trim());

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // STARTTLS
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        minVersion: "TLSv1.2",
      },
    });

    // Send the email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      replyTo: safeEmail,
      to: process.env.RECEIVING_EMAIL,
      subject: `Message From Portfolio by ${safeName}`,
      text: safeMessage,
      html: `<div style="font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto; border: 1px solid #dcdcdc; border-radius: 8px; padding: 20px; background-color: #ffffff;">
      <header style="border-bottom: 2px solid #4CAF50; padding-bottom: 10px; margin-bottom: 20px;">
        <h1 style="font-size: 20px; color: #4CAF50; margin: 0; text-align: center;">
          Contact Form Submission
        </h1>
      </header>
      <section style="margin-bottom: 20px;">
        <p style="font-size: 16px; margin: 10px 0;">
          <strong>Name:</strong> ${safeName}
        </p>
        <p style="font-size: 16px; margin: 10px 0;">
          <strong>Email:</strong> <a href="mailto:${safeEmail}" style="color: #4CAF50; text-decoration: none;">${safeEmail}</a>
        </p>
        <p style="font-size: 16px; margin: 10px 0;">
          <strong>Message:</strong>
        </p>
        <div style="font-size: 14px; padding: 15px; background: #f7f7f7; border: 1px solid #e0e0e0; border-radius: 5px; white-space: pre-wrap;">
          ${safeMessage}
        </div>
      </section>
      <footer style="margin-top: 30px; text-align: center; font-size: 12px; color: #666; border-top: 1px solid #dcdcdc; padding-top: 15px;">
        <p style="margin: 0;">
          This email was generated automatically from your website's contact form.
        </p>
        <p style="margin: 0;">
          <a href="mailto:${safeEmail}" style="color: #4CAF50; text-decoration: none;">Reply to ${safeEmail}</a>
        </p>
      </footer>
    </div>`,
    });

    return new Response(
      JSON.stringify({ message: "Email sent successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ message: "Error sending email" }),
      { status: 500 }
    );
  }
}
