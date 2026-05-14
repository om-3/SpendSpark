'use server';
/**
 * @fileOverview A Genkit flow for generating financial insights and budget optimization recommendations.
 *
 * - financialInsightGenerator - A function that triggers the AI to analyze spending and subscription data.
 * - FinancialInsightGeneratorInput - The input type for the financialInsightGenerator function.
 * - FinancialInsightGeneratorOutput - The return type for the financialInsightGenerator function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

// Input Schema
const FinancialInsightGeneratorInputSchema = z.object({
  spendingData: z.array(
    z.object({
      category: z.string().describe('The category of the expense (e.g., Food, Transport, Entertainment).'),
      amount: z.number().describe('The amount of the expense.'),
      date: z.string().describe('The date of the expense in YYYY-MM-DD format.'),
    })
  ).describe('A list of recent spending transactions for the user.'),
  subscriptionData: z.array(
    z.object({
      name: z.string().describe('The name of the subscription.'),
      cost: z.number().describe('The cost of the subscription.'),
      billing_cycle: z.enum(['monthly', 'yearly']).describe('The billing cycle of the subscription (monthly or yearly).'),
      next_renewal_date: z.string().describe('The next renewal date of the subscription in YYYY-MM-DD format.'),
    })
  ).describe('A list of the user\'s active subscriptions.'),
});
export type FinancialInsightGeneratorInput = z.infer<typeof FinancialInsightGeneratorInputSchema>;

// Output Schema
const FinancialInsightGeneratorOutputSchema = z.object({
  insights: z.string().describe('Summary of spending patterns, key observations, and potential issues identified.'),
  recommendations: z.array(z.string()).describe('Actionable recommendations for budget optimization, such as reducing spending in certain categories or suggesting alternatives.'),
  subscriptionLeaks: z.array(z.string()).describe('Names of subscriptions identified as potential "leaks" (e.g., unused but active services, or subscriptions that are significantly more expensive than alternatives for similar value).'),
});
export type FinancialInsightGeneratorOutput = z.infer<typeof FinancialInsightGeneratorOutputSchema>;

// Wrapper function
export async function financialInsightGenerator(input: FinancialInsightGeneratorInput): Promise<FinancialInsightGeneratorOutput> {
  return financialInsightGeneratorFlow(input);
}

// Genkit Prompt Definition
const financialInsightPrompt = ai.definePrompt({
  name: 'financialInsightPrompt',
  input: {schema: FinancialInsightGeneratorInputSchema},
  output: {schema: FinancialInsightGeneratorOutputSchema},
  prompt: `You are an AI financial advisor named SpendSpark. Your goal is to analyze a user's spending patterns and subscription data to provide personalized recommendations for budget optimization. Identify potential 'subscription leaks' (unused but active services, or services that could be replaced by cheaper alternatives) and suggest ways to save money.\n\nAnalyze the following data:\n\n--- Spending Data ---\n{{#each spendingData}}\n- Category: {{this.category}}, Amount: {{this.amount}}, Date: {{this.date}}\n{{/each}}\n\n--- Subscription Data ---\n{{#each subscriptionData}}\n- Name: {{this.name}}, Cost: {{this.cost}}, Billing Cycle: {{this.billing_cycle}}, Next Renewal: {{this.next_renewal_date}}\n{{/each}}\n\nBased on the provided data, generate a summary of insights, a list of actionable recommendations, and identify any potential subscription leaks. Focus on practical advice and clear identification of wasteful spending.\n\nProvide your response in JSON format according to the output schema.`,
});

// Genkit Flow Definition
const financialInsightGeneratorFlow = ai.defineFlow(
  {
    name: 'financialInsightGeneratorFlow',
    inputSchema: FinancialInsightGeneratorInputSchema,
    outputSchema: FinancialInsightGeneratorOutputSchema,
  },
  async (input) => {
    try {
      // Execute the AI prompt with the user's spending and subscription data
      const {output} = await financialInsightPrompt(input);
      if (!output) {
        throw new Error('Failed to generate financial insights.');
      }
      return output;
    } catch (error) {
      // Catch and log any errors that occur during the flow to help with debugging
      console.error('Error in financialInsightGeneratorFlow:', error);
      throw new Error('An error occurred while generating financial insights. Please try again later.');
    }
  }
);
