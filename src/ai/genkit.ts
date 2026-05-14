import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/google-genai';

// Validate the presence of the Google GenAI API key.
// This avoids runtime errors when the AI model is called later.
if (!process.env.GOOGLE_GENAI_API_KEY) {
  throw new Error('GOOGLE_GENAI_API_KEY environment variable not set');
}

export const ai = genkit({
  plugins: [googleAI({ apiKey: process.env.GOOGLE_GENAI_API_KEY })],
  model: 'googleai/gemini-2.5-flash',
});
