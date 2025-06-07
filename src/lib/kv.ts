import { createClient } from '@vercel/kv';

// This client will automatically use the KV_REST_API_URL and KV_REST_API_TOKEN environment variables
export const kv = createClient({
  url: process.env.KV_REST_API_URL || '',
  token: process.env.KV_REST_API_TOKEN || '',
});
