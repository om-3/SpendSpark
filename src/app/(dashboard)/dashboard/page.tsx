import React from 'react';
import ErrorBoundary from '@/components/error-boundary';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight, ArrowDownRight, CreditCard, Calendar, TrendingUp, AlertTriangle } from 'lucide-react';
import AIInsightsPanel from '@/components/ai-insights-panel';

export default function DashboardPage() {
  const stats = [
    { title: 'Total Spend', value: '$1,240.50', change: '+12%', trend: 'up', icon: TrendingUp },
    { title: 'Active Subs', value: '8', change: 'Stable', trend: 'neutral', icon: CreditCard },
    { title: 'Avg. Monthly', value: '$450.00', change: '-5%', trend: 'down', icon: Calendar },
  ];

  const upcomingRenewals = [
    { name: 'Spotify Student', cost: '$5.99', date: 'In 2 days', urgent: true },
    { name: 'Notion Plus', cost: '$10.00', date: 'In 5 days', urgent: false },
    { name: 'Adobe Creative Cloud', cost: '$19.99', date: 'In 12 days', urgent: false },
  ];

  return (
    <ErrorBoundary>
      <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-headline font-bold mb-2">Financial Overview</h1>
        <p className="text-muted-foreground">Here's what's happening with your expenses and subscriptions this month.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <Card key={stat.title} className="bg-card border-border hover:border-primary/50 transition-smooth">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold font-headline">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">
                <span className={stat.trend === 'up' ? 'text-destructive' : stat.trend === 'down' ? 'text-green-400' : 'text-muted-foreground'}>
                  {stat.change}
                </span>{' '}
                from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-7">
        <Card className="lg:col-span-4 bg-card border-border">
          <CardHeader>
            <CardTitle className="font-headline">Recent Spending Activity</CardTitle>
            <CardDescription>Your last 5 major transactions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { label: 'Campus Cafeteria', amount: '$12.50', category: 'Food', date: 'Today' },
                { label: 'Uni Bookshop', amount: '$85.00', category: 'Education', date: 'Yesterday' },
                { label: 'Uber Ride', amount: '$18.20', category: 'Transport', date: '2 days ago' },
                { label: 'AMC Cinema', amount: '$15.00', category: 'Entertainment', date: '3 days ago' },
                { label: 'Amazon.com', amount: '$42.30', category: 'Shopping', date: '4 days ago' },
              ].map((tx, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg hover:bg-secondary/50 transition-smooth">
                  <div className="flex flex-col">
                    <span className="font-medium">{tx.label}</span>
                    <span className="text-xs text-muted-foreground">{tx.category} • {tx.date}</span>
                  </div>
                  <span className="font-semibold">{tx.amount}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-3 bg-card border-border">
          <CardHeader>
             <div className="flex items-center justify-between">
                <CardTitle className="font-headline">Upcoming Renewals</CardTitle>
                <Badge variant="outline" className="border-primary/50 text-primary">Alerts Active</Badge>
             </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingRenewals.map((sub, i) => (
                <div key={i} className={`flex items-center justify-between p-4 rounded-xl border ${sub.urgent ? 'bg-destructive/10 border-destructive/30 glow-alert' : 'bg-secondary/30 border-border'}`}>
                  <div className="flex items-center gap-3">
                    {sub.urgent ? <AlertTriangle className="h-5 w-5 text-destructive" /> : <Calendar className="h-5 w-5 text-muted-foreground" />}
                    <div className="flex flex-col">
                      <span className="font-semibold">{sub.name}</span>
                      <span className="text-xs text-muted-foreground">{sub.date}</span>
                    </div>
                  </div>
                  <span className="font-bold text-accent">{sub.cost}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <AIInsightsPanel />
    </div>
    </ErrorBoundary>
  );
}