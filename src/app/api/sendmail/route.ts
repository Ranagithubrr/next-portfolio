import { NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();
    if (!name || !email || !message) {
      return;
    }
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send the email
    await transporter.sendMail({
      from: email,
      to: process.env.RECEIVING_EMAIL,
      subject: `Message From Portfolio by ${name}`,
      text: message,
      html: `<div style="font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto; border: 1px solid #dcdcdc; border-radius: 8px; padding: 20px; background-color: #ffffff;">
      <header style="border-bottom: 2px solid #4CAF50; padding-bottom: 10px; margin-bottom: 20px;">
        <h1 style="font-size: 20px; color: #4CAF50; margin: 0; text-align: center;">
          Contact Form Submission
        </h1>
      </header>
      <section style="margin-bottom: 20px;">
        <p style="font-size: 16px; margin: 10px 0;">
          <strong>Name:</strong> ${name}
        </p>
        <p style="font-size: 16px; margin: 10px 0;">
          <strong>Email:</strong> <a href="mailto:${email}" style="color: #4CAF50; text-decoration: none;">${email}</a>
        </p>
        <p style="font-size: 16px; margin: 10px 0;">
          <strong>Message:</strong>
        </p>
        <div style="font-size: 14px; padding: 15px; background: #f7f7f7; border: 1px solid #e0e0e0; border-radius: 5px; white-space: pre-wrap;">
          ${message}
        </div>
      </section>
      <footer style="margin-top: 30px; text-align: center; font-size: 12px; color: #666; border-top: 1px solid #dcdcdc; padding-top: 15px;">
        <p style="margin: 0;">
          This email was generated automatically from your website's contact form.
        </p>
        <p style="margin: 0;">
          <a href="mailto:${email}" style="color: #4CAF50; text-decoration: none;">Reply to ${email}</a>
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
      JSON.stringify({ message: "Error sending email", error }),
      { status: 500 }
    );
  }
}
