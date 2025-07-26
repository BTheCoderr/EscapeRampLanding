const fs = require('fs').promises;
const path = require('path');

const submissionsFile = path.join(process.cwd(), 'data', 'submissions.json');

// Ensure data directory exists
async function ensureDataDir() {
  const dataDir = path.join(process.cwd(), 'data');
  try {
    await fs.access(dataDir);
  } catch {
    await fs.mkdir(dataDir, { recursive: true });
  }
}

exports.handler = async (event, context) => {
  // Enable CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  try {
    await ensureDataDir();
    
    if (event.httpMethod === 'GET') {
      // Get all submissions
      try {
        const data = await fs.readFile(submissionsFile, 'utf8');
        const submissions = JSON.parse(data);
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify(submissions)
        };
      } catch {
        // File doesn't exist yet, return empty array
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify([])
        };
      }
    } else if (event.httpMethod === 'POST') {
      // Add new submission
      const submission = JSON.parse(event.body);
      submission.id = Date.now().toString();
      submission.timestamp = new Date().toISOString();
      
      // Read existing submissions
      let submissions = [];
      try {
        const data = await fs.readFile(submissionsFile, 'utf8');
        submissions = JSON.parse(data);
      } catch {
        // File doesn't exist yet, start with empty array
      }
      
      // Add new submission
      submissions.unshift(submission);
      
      // Write back to file
      await fs.writeFile(submissionsFile, JSON.stringify(submissions, null, 2));
      
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ success: true, id: submission.id })
      };
    } else {
      return {
        statusCode: 405,
        headers,
        body: JSON.stringify({ error: 'Method not allowed' })
      };
    }
  } catch (error) {
    console.error('Error handling submissions:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Internal server error' })
    };
  }
}; 