"use client";

import React, { useState } from 'react';
import { financialInsightGenerator, type FinancialInsightGeneratorOutput } from '@/ai/flows/financial-insight-generator';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles, Loader2, AlertCircle, CheckCircle2, ListChecks } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function AIInsightsPanel() {
  const [loading, setLoading] = useState(false);
  const [insights, setInsights] = useState<FinancialInsightGeneratorOutput | null>(null);

  const generateInsights = async () => {
    setLoading(true);
    try {
      // Mock data for the demonstration
      const mockSpending = [
        { category: 'Food', amount: 350.50, date: '2023-10-25' },
        { category: 'Transport', amount: 120.00, date: '2023-10-24' },
        { category: 'Entertainment', amount: 80.00, date: '2023-10-22' },
        { category: 'Education', amount: 200.00, date: '2023-10-20' },
      ];
      const mockSubs = [
        { name: 'Netflix', cost: 15.99, billing_cycle: 'monthly' as const, next_renewal_date: '2023-11-05' },
        { name: 'Spotify Student', cost: 5.99, billing_cycle: 'monthly' as const, next_renewal_date: '2023-11-02' },
        { name: 'Adobe Suite', cost: 29.99, billing_cycle: 'monthly' as const, next_renewal_date: '2023-11-15' },
        { name: 'Gym Membership', cost: 45.00, billing_cycle: 'monthly' as const, next_renewal_date: '2023-11-01' },
      ];

      const result = await financialInsightGenerator({
        spendingData: mockSpending,
        subscriptionData: mockSubs
      });
      setInsights(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="bg-card border-primary/20 shadow-xl overflow-hidden relative">
      <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
        <Sparkles className="h-32 w-32 text-primary" />
      </div>
      <CardHeader>
        <div className="flex items-center gap-2">
          <div className="p-2 bg-primary/20 rounded-lg">
            <Sparkles className="h-5 w-5 text-primary" />
          </div>
          <div>
            <CardTitle className="font-headline text-xl">SpendSpark AI Intelligence</CardTitle>
            <CardDescription>Get personalized advice on how to optimize your student budget.</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {!insights && !loading && (
          <div className="text-center py-10">
            <p className="text-muted-foreground mb-6">Unlock deep analysis of your spending habits and find hidden "subscription leaks".</p>
            <Button onClick={generateInsights} size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8">
              Generate My Insights
            </Button>
          </div>
        )}

        {loading && (
          <div className="flex flex-col items-center justify-center py-12 gap-4">
            <Loader2 className="h-8 w-8 text-primary animate-spin" />
            <p className="text-sm font-medium animate-pulse">Analyzing your financial footprint...</p>
          </div>
        )}

        {insights && (
          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-1 space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                <AlertCircle className="h-4 w-4 text-destructive" />
                Subscription Leaks
              </h3>
              <div className="space-y-2">
                {insights.subscriptionLeaks.map((leak, i) => (
                  <div key={i} className="p-3 bg-destructive/10 border border-destructive/20 rounded-lg flex items-center gap-2">
                    <Badge variant="destructive" className="h-2 w-2 rounded-full p-0" />
                    <span className="text-sm font-medium">{leak}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-2 space-y-6">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2 mb-3">
                  <Sparkles className="h-4 w-4 text-primary" />
                  Key Observations
                </h3>
                <p className="text-sm leading-relaxed text-foreground/90 bg-secondary/30 p-4 rounded-xl border border-border">
                  {insights.insights}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2 mb-3">
                  <ListChecks className="h-4 w-4 text-accent" />
                  Smart Recommendations
                </h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {insights.recommendations.map((rec, i) => (
                    <div key={i} className="flex gap-3 p-3 bg-card border border-border rounded-lg items-start">
                      <CheckCircle2 className="h-4 w-4 text-green-400 shrink-0 mt-0.5" />
                      <span className="text-xs leading-normal">{rec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </CardContent>
      {insights && (
        <CardFooter className="bg-secondary/20 border-t border-border py-3 flex justify-center">
          <Button variant="ghost" size="sm" onClick={() => setInsights(null)} className="text-xs text-muted-foreground hover:text-foreground">
            Clear Results
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}