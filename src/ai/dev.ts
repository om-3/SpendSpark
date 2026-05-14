import { config } from 'dotenv';
const result = config();
if (result.error) {
  console.warn('Error loading .env file, using environment variables from runtime.');
}

import '@/ai/flows/financial-insight-generator.ts';