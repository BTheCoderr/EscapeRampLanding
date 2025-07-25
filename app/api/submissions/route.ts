import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

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

// Get all submissions
export async function GET() {
  try {
    await ensureDataDir();
    
    try {
      const data = await fs.readFile(submissionsFile, 'utf8');
      const submissions = JSON.parse(data);
      return NextResponse.json(submissions);
    } catch {
      // File doesn't exist yet, return empty array
      return NextResponse.json([]);
    }
  } catch (error) {
    console.error('Error reading submissions:', error);
    return NextResponse.json({ error: 'Failed to read submissions' }, { status: 500 });
  }
}

// Add new submission
export async function POST(request: NextRequest) {
  try {
    await ensureDataDir();
    
    const submission = await request.json();
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
    submissions.unshift(submission); // Add to beginning
    
    // Write back to file
    await fs.writeFile(submissionsFile, JSON.stringify(submissions, null, 2));
    
    return NextResponse.json({ success: true, id: submission.id });
  } catch (error) {
    console.error('Error saving submission:', error);
    return NextResponse.json({ error: 'Failed to save submission' }, { status: 500 });
  }
} 