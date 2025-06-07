import { NextRequest, NextResponse } from 'next/server';
import { kv } from '@/lib/kv';

export async function GET(request: NextRequest) {
  try {
    // Increment the visit count
    const count = await kv.incr('visits');
    
    // Get the current timestamp
    const timestamp = new Date().toISOString();
    
    // Get user agent and IP for better tracking (anonymized)
    const userAgent = request.headers.get('user-agent') || 'unknown';
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    
    // Store the visit details
    await kv.lpush('visit_history', JSON.stringify({
      timestamp,
      userAgent,
      ip: ip.split(',')[0].trim(), // Get the first IP if it's a list
      path: request.nextUrl.pathname
    }));
    
    // Return the current count and some stats
    const visitHistory = await kv.lrange('visit_history', 0, -1);
    const uniqueVisitors = new Set(visitHistory.map((v: string) => {
      try {
        const visit = JSON.parse(v);
        return visit.ip;
      } catch {
        return null;
      }
    })).size;
    
    return NextResponse.json({ 
      count,
      uniqueVisitors,
      timestamp
    });
  } catch (error) {
    console.error('Error recording visit:', error);
    return NextResponse.json(
      { error: 'Failed to record visit' },
      { status: 500 }
    );
  }
}
