import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

// Simple in-memory counter (will reset on server restart)
let visitorCount = 0;

export async function GET() {
  try {
    // Increment the visitor count
    visitorCount += 1;
    
    return NextResponse.json({ count: visitorCount });
  } catch (error) {
    console.error('Error updating visitor count:', error);
    return NextResponse.json(
      { error: 'Failed to update visitor count' },
      { status: 500 }
    );
  }
}
