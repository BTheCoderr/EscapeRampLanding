import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, company, contact, currentSoftware, budget, urgency, tool, migratingFrom, struggles } = body;

    // Create transporter
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to yourself
      subject: 'New Early Access Request - Escape Ramp',
      html: `
        <h2>New Early Access Request</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Contact:</strong> ${contact}</p>
        <p><strong>Current Software:</strong> ${currentSoftware}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>Urgency:</strong> ${urgency}</p>
        <p><strong>Tool:</strong> ${tool}</p>
        <p><strong>Migrating From:</strong> ${migratingFrom}</p>
        <p><strong>Struggles:</strong> ${struggles}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
} 