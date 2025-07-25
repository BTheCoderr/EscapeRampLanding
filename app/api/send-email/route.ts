import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { promises as fs } from 'fs';
import path from 'path';

const resend = new Resend(process.env.RESEND_API_KEY);
const submissionsFile = path.join(process.cwd(), 'data', 'submissions.json');

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    // Extract form data
    const email = formData.get('email') as string;
    const company = formData.get('company') as string;
    const contact = formData.get('contact') as string;
    const currentSoftware = formData.get('current-software') as string;
    const budget = formData.get('budget') as string;
    const urgency = formData.get('urgency') as string;
    const tool = formData.get('tool') as string;
    const migratingFrom = formData.get('migrating-from') as string;
    const struggles = formData.get('struggles') as string;

    // Create submission object
    const submission = {
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      email,
      company,
      contact,
      currentSoftware,
      budget,
      urgency,
      tool,
      migratingFrom,
      struggles,
    };

    // Send email to you (admin)
    const adminEmail = await resend.emails.send({
      from: 'Escape Ramp <noreply@escaperamp.com>',
      to: ['bferrell514@gmail.com'], // Your email
      subject: 'New Early Access Signup - Escape Ramp',
      html: `
        <h2>New Early Access Signup</h2>
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
    });

    // Send confirmation email to user
    const userEmail = await resend.emails.send({
      from: 'Escape Ramp <noreply@escaperamp.com>',
      to: [email],
      subject: 'Welcome to Escape Ramp Early Access!',
      html: `
        <h2>Thank you for joining Escape Ramp Early Access!</h2>
        <p>Hi ${contact},</p>
        <p>We're excited to have you on board! Your early access request has been received and we'll be in touch soon with more details about our migration service.</p>
        <p><strong>What happens next?</strong></p>
        <ul>
          <li>We'll review your information and reach out within 48 hours</li>
          <li>You'll get priority access when we launch our private beta</li>
          <li>We'll keep you updated on our progress</li>
        </ul>
        <p>Best regards,<br>The Escape Ramp Team</p>
      `,
    });

    // Save submission locally
    try {
      const dataDir = path.join(process.cwd(), 'data');
      await fs.mkdir(dataDir, { recursive: true });
      
      let submissions = [];
      try {
        const data = await fs.readFile(submissionsFile, 'utf8');
        submissions = JSON.parse(data);
      } catch {
        // File doesn't exist yet, start with empty array
      }
      
      submissions.unshift(submission);
      await fs.writeFile(submissionsFile, JSON.stringify(submissions, null, 2));
      console.log('Submission saved locally');
    } catch (error) {
      console.error('Error saving submission locally:', error);
    }

    console.log('Emails sent successfully:', { adminEmail, userEmail });

    return NextResponse.json({ success: true, submissionId: submission.id });
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
} 