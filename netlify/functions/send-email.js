const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

exports.handler = async (event, context) => {
  // Enable CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const formData = new URLSearchParams(event.body);
    
    // Extract form data
    const email = formData.get('email');
    const company = formData.get('company');
    const contact = formData.get('contact');
    const currentSoftware = formData.get('current-software');
    const budget = formData.get('budget');
    const urgency = formData.get('urgency');
    const tool = formData.get('tool');
    const migratingFrom = formData.get('migrating-from');
    const struggles = formData.get('struggles');

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

    // Send email to admin
    const adminEmail = await resend.emails.send({
      from: 'Escape Ramp <noreply@escaperamp.com>',
      to: ['bferrell514@gmail.com'],
      subject: 'New Early Access Signup - Escape Ramp',
      html: `
        <h2>New Early Access Signup</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Contact:</strong> ${contact}</p>
        <p><strong>Current Software:</strong> ${currentSoftware || 'Not specified'}</p>
        <p><strong>Budget:</strong> ${budget || 'Not specified'}</p>
        <p><strong>Urgency:</strong> ${urgency || 'Not specified'}</p>
        <p><strong>Tool:</strong> ${tool || 'Not specified'}</p>
        <p><strong>Migrating From:</strong> ${migratingFrom || 'Not specified'}</p>
        <p><strong>Struggles:</strong> ${struggles || 'Not specified'}</p>
      `
    });

    // Send confirmation email to user
    const userEmail = await resend.emails.send({
      from: 'Escape Ramp <noreply@escaperamp.com>',
      to: [email],
      subject: 'Welcome to Escape Ramp Early Access!',
      html: `
        <h2>Welcome to Escape Ramp!</h2>
        <p>Hi ${contact},</p>
        <p>Thank you for joining our early access program! We're excited to have you on board.</p>
        <p>We'll notify you as soon as we open our private beta in Fall 2025. In the meantime, we'll keep you updated on our progress.</p>
        <p>Best regards,<br>The Escape Ramp Team</p>
      `
    });

    // Save submission to JSON file
    const fs = require('fs').promises;
    const path = require('path');
    const submissionsFile = path.join(process.cwd(), 'data', 'submissions.json');
    
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

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        success: true, 
        submissionId: submission.id 
      })
    };
  } catch (error) {
    console.error('Email sending error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Failed to send email' })
    };
  }
}; 