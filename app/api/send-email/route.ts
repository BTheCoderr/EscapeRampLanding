import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

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
    const transactions = formData.get('transactions') as string;
    const bankAccounts = formData.get('bank-accounts') as string;
    const dataObjects = formData.getAll('data-objects') as string[];
    const dataCleanliness = formData.get('data-cleanliness') as string;
    const struggles = formData.get('struggles') as string;
    const termsAgreement = formData.get('terms-agreement') as string;

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json({ 
        error: 'Valid email address is required' 
      }, { status: 400 });
    }

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

    // Send email to admin
    const adminEmail = await resend.emails.send({
      from: 'Escape Ramp <onboarding@resend.dev>', // Use Resend's default domain
      to: ['bferrell514@gmail.com'],
      subject: 'New Early Access Signup - Escape Ramp',
      html: `
        <h2>New Early Access Signup!</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <p><strong>Contact Name:</strong> ${contact || 'N/A'}</p>
        <p><strong>Current Accounting Software:</strong> ${currentSoftware || 'N/A'}</p>
        <p><strong>Budget:</strong> ${budget || 'N/A'}</p>
        <p><strong>Urgency:</strong> ${urgency || 'N/A'}</p>
        <p><strong>What tool do you have?:</strong> ${tool || 'N/A'}</p>
        <p><strong>What are you migrating from?:</strong> ${migratingFrom || 'N/A'}</p>
        <p><strong>Approx. # of Transactions/Accounts:</strong> ${transactions || 'N/A'}</p>
        <p><strong># of Bank/Credit Card Accounts:</strong> ${bankAccounts || 'N/A'}</p>
        <p><strong>Data Objects Needed:</strong> ${dataObjects.length > 0 ? dataObjects.join(', ') : 'N/A'}</p>
        <p><strong>Data Cleanliness:</strong> ${dataCleanliness || 'N/A'}</p>
        <p><strong>Specific Struggles:</strong> ${struggles || 'N/A'}</p>
        <p><strong>Terms Agreement:</strong> ${termsAgreement ? 'Yes' : 'No'}</p>
        <p>Submission ID: ${submission.id}</p>
      `,
    });

    // Send confirmation email to user
    const userEmail = await resend.emails.send({
      from: 'Escape Ramp <onboarding@resend.dev>', // Use Resend's default domain
      to: [email],
      subject: 'Welcome to Escape Ramp Early Access!',
      html: `
        <h2>Welcome to Escape Ramp Early Access!</h2>
        <p>Hi ${contact || 'there'},</p>
        <p>Thank you for your interest in Escape Ramp. We'll be in touch with updates on our private beta launch.</p>
        <p>Best regards,<br/>The Escape Ramp Team</p>
      `,
    });

    console.log('Emails sent successfully:', { adminEmail, userEmail });

    return NextResponse.json({ 
      success: true, 
      submissionId: submission.id 
    });
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json({ 
      error: 'Failed to send email',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
} 