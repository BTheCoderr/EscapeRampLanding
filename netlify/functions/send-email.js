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
    
    // Debug: Log the raw form data
    console.log('Raw form data:', event.body);
    console.log('Form data entries:', Array.from(formData.entries()));

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

    // Validate email
    if (!email || typeof email !== 'string' || !email.includes('@')) {
      console.error('Invalid email:', email);
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ 
          error: 'Valid email address is required',
          receivedEmail: email 
        })
      };
    }

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

    // Check if RESEND_API_KEY is set
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set');
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ 
          error: 'Email service not configured',
          details: 'RESEND_API_KEY environment variable is missing'
        })
      };
    }

    console.log('Sending admin email to:', 'bferrell514@gmail.com');
    
    // Send email to admin
    let adminEmail;
    try {
      adminEmail = await resend.emails.send({
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
      console.log('Admin email sent successfully:', adminEmail);
    } catch (error) {
      console.error('Failed to send admin email:', error);
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ 
          error: 'Failed to send admin email',
          details: error.message
        })
      };
    }

    console.log('Sending user email to:', email);
    
    // Send confirmation email to user
    let userEmail;
    try {
      userEmail = await resend.emails.send({
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
      console.log('User email sent successfully:', userEmail);
    } catch (error) {
      console.error('Failed to send user email:', error);
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ 
          error: 'Failed to send user email',
          details: error.message
        })
      };
    }

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