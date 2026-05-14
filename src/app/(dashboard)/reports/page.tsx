"use client";

import React from 'react';
import ErrorBoundary from '@/components/error-boundary';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from '@/components/ui/chart';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line } from 'recharts';

const categoryData = [
  { name: 'Food', value: 450, fill: 'hsl(var(--chart-1))' },
  { name: 'Housing', value: 850, fill: 'hsl(var(--chart-2))' },
  { name: 'Transport', value: 120, fill: 'hsl(var(--chart-3))' },
  { name: 'Entertainment', value: 90, fill: 'hsl(var(--chart-4))' },
  { name: 'Other', value: 65, fill: 'hsl(var(--chart-5))' },
];

const trendData = [
  { month: 'Aug', amount: 1100 },
  { month: 'Sep', amount: 1350 },
  { month: 'Oct', amount: 1240 },
  { month: 'Nov', amount: 1180 },
  { month: 'Dec', amount: 1550 },
];

export default function ReportsPage() {
  return (
    <ErrorBoundary>
      <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-headline font-bold mb-2">Spending Analytics</h1>
        <p className="text-muted-foreground">Deep dive into your financial habits and trends.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="font-headline">Category Distribution</CardTitle>
            <CardDescription>Where your money went this month</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip 
                   contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))' }}
                   itemStyle={{ color: 'hsl(var(--foreground))' }}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="font-headline">Monthly Spending Trend</CardTitle>
            <CardDescription>Average monthly spend across the semester</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="month" 
                  stroke="hsl(var(--muted-foreground))" 
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis 
                   stroke="hsl(var(--muted-foreground))" 
                   fontSize={12}
                   tickLine={false}
                   axisLine={false}
                   tickFormatter={(value) => `$${value}`}
                />
                <Tooltip 
                   contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))' }}
                   itemStyle={{ color: 'hsl(var(--foreground))' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="amount" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={3}
                  dot={{ r: 4, fill: 'hsl(var(--primary))' }}
                  activeDot={{ r: 6, fill: 'hsl(var(--accent))' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="md:col-span-2 bg-card border-border">
          <CardHeader>
             <CardTitle className="font-headline">Daily Comparison</CardTitle>
             <CardDescription>Week-over-week spending analysis</CardDescription>
          </CardHeader>
          <CardContent className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={[
                { day: 'Mon', lastWeek: 45, thisWeek: 52 },
                { day: 'Tue', lastWeek: 32, thisWeek: 28 },
                { day: 'Wed', lastWeek: 60, thisWeek: 45 },
                { day: 'Thu', lastWeek: 48, thisWeek: 55 },
                { day: 'Fri', lastWeek: 85, thisWeek: 92 },
                { day: 'Sat', lastWeek: 110, thisWeek: 125 },
                { day: 'Sun', lastWeek: 40, thisWeek: 35 },
              ]}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(v) => `$${v}`} />
                <Tooltip 
                   contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))' }}
                   itemStyle={{ color: 'hsl(var(--foreground))' }}
                />
                <Legend />
                <Bar dataKey="thisWeek" name="This Week" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                <Bar dataKey="lastWeek" name="Last Week" fill="hsl(var(--muted))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
    </ErrorBoundary>
  );
}