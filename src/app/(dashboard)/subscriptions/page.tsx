"use client";

import React from 'react';
import ErrorBoundary from '@/components/error-boundary';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CalendarRange, CreditCard, ExternalLink, RefreshCw, Plus } from 'lucide-react';

export default function SubscriptionsPage() {
  const subscriptions = [
    { name: 'Spotify Student', cost: 5.99, cycle: 'Monthly', nextDate: 'Nov 02, 2023', color: 'bg-green-500/20 text-green-400' },
    { name: 'Netflix', cost: 15.99, cycle: 'Monthly', nextDate: 'Nov 05, 2023', color: 'bg-red-500/20 text-red-400' },
    { name: 'Notion Plus', cost: 10.00, cycle: 'Monthly', nextDate: 'Nov 10, 2023', color: 'bg-primary/20 text-primary' },
    { name: 'Github Copilot', cost: 0.00, cycle: 'Free (Student)', nextDate: 'Aug 12, 2024', color: 'bg-zinc-500/20 text-zinc-300' },
    { name: 'Adobe Creative Cloud', cost: 19.99, cycle: 'Monthly', nextDate: 'Nov 15, 2023', color: 'bg-accent/20 text-accent' },
    { name: 'Amazon Prime', cost: 69.00, cycle: 'Yearly', nextDate: 'Jan 22, 2024', color: 'bg-orange-500/20 text-orange-400' },
  ];

  return (
    <ErrorBoundary>
      <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-headline font-bold mb-2">Subscription Hub</h1>
          <p className="text-muted-foreground">Manage your recurring services and never miss a payment.</p>
        </div>
        <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
          <Plus className="mr-2 h-4 w-4" />
          Add Service
        </Button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {subscriptions.map((sub) => (
          <Card key={sub.name} className="bg-card border-border overflow-hidden hover:border-accent/50 transition-smooth group">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div className={`p-2 rounded-lg ${sub.color}`}>
                  <CreditCard className="h-6 w-6" />
                </div>
                <Badge variant="outline" className="border-border">
                  {sub.cycle}
                </Badge>
              </div>
              <CardTitle className="mt-4 text-xl font-headline">{sub.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground text-sm">Monthly Cost</span>
                <span className="text-xl font-bold font-headline text-accent">
                  ${sub.cost.toFixed(2)}
                </span>
              </div>
              <div className="p-3 bg-secondary/30 rounded-lg flex items-center gap-3">
                <CalendarRange className="h-4 w-4 text-muted-foreground" />
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">Next Renewal</span>
                  <span className="text-sm font-medium">{sub.nextDate}</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 pt-2">
                <Button variant="outline" size="sm" className="w-full">
                  <RefreshCw className="mr-2 h-3 w-3" />
                  Renew
                </Button>
                <Button variant="secondary" size="sm" className="w-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="mr-2 h-3 w-3" />
                  Site
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
    </ErrorBoundary>
  );
}