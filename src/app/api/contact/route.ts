import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import nodemailer from 'nodemailer';

// Validation schema for contact form
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name is too long'),
  email: z.string().email('Invalid email address'),
  country: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters').max(2000, 'Message is too long'),
});

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();

    // Validate input
    const validation = contactSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        {
          success: false,
          error: 'Validation failed',
          details: validation.error.errors.map(err => ({
            field: err.path.join('.'),
            message: err.message,
          })),
        },
        { status: 400 }
      );
    }

    const { name, email, country, message } = validation.data;

    // Configure email transport using Gmail
    // NOTE: You'll need to set up app-specific password for Gmail
    // Go to: https://myaccount.google.com/apppasswords
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER || 'neuranova@gmail.com',
        pass: process.env.GMAIL_APP_PASSWORD, // App-specific password needed
      },
    });

    // Compose email
    const emailContent = {
      from: process.env.GMAIL_USER || 'neuranova@gmail.com',
      to: 'neuranova@gmail.com',
      replyTo: email, // Allow easy reply to the sender
      subject: `New Contact Form Message from ${name}`,
      text: `
New contact form submission:

Name: ${name}
Email: ${email}
${country ? `Country: ${country}` : ''}

Message:
${message}

---
This message was sent via the NeuraNova contact form.
      `.trim(),
      html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #E994A5 0%, #A855F7 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
    .content { background: #f9f9f9; padding: 20px; border: 1px solid #e0e0e0; border-top: none; border-radius: 0 0 8px 8px; }
    .field { margin-bottom: 15px; }
    .field-label { font-weight: bold; color: #555; }
    .field-value { margin-top: 5px; }
    .message-box { background: white; padding: 15px; border-left: 4px solid #E994A5; margin-top: 10px; }
    .footer { text-align: center; margin-top: 20px; color: #888; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2 style="margin: 0;">New Contact Form Submission</h2>
    </div>
    <div class="content">
      <div class="field">
        <div class="field-label">Name:</div>
        <div class="field-value">${name}</div>
      </div>

      <div class="field">
        <div class="field-label">Email:</div>
        <div class="field-value"><a href="mailto:${email}">${email}</a></div>
      </div>

      ${country ? `
      <div class="field">
        <div class="field-label">Country:</div>
        <div class="field-value">${country}</div>
      </div>
      ` : ''}

      <div class="field">
        <div class="field-label">Message:</div>
        <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
      </div>

      <div class="footer">
        This message was sent via the NeuraNova contact form.
      </div>
    </div>
  </div>
</body>
</html>
      `.trim(),
    };

    // Send email
    await transporter.sendMail(emailContent);

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your message! We will get back to you soon.',
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Error processing contact form:', error);

    // Handle specific error cases
    if (error instanceof Error) {
      // Check for authentication errors
      if (error.message.includes('Invalid login') || error.message.includes('Username and Password not accepted')) {
        console.error('Email authentication failed. Please set up Gmail app password in environment variables.');
        return NextResponse.json(
          {
            success: false,
            error: 'Email service configuration error. Please contact support.',
          },
          { status: 503 }
        );
      }

      return NextResponse.json(
        {
          success: false,
          error: 'Failed to send message',
          details: error.message,
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        error: 'An unexpected error occurred',
      },
      { status: 500 }
    );
  }
}

// Handle OPTIONS for CORS preflight
export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    }
  );
}
