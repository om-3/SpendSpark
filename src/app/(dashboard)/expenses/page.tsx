"use client";

import React, { useState } from 'react';
import ErrorBoundary from '@/components/error-boundary';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { PlusCircle, Search, Filter, Trash2, Edit2 } from 'lucide-react';

export default function ExpensesPage() {
  const [expenses, setExpenses] = useState([
    { id: 1, label: 'Groceries', amount: 54.20, category: 'Food', date: 'Oct 26, 2023' },
    { id: 2, label: 'Monthly Rent', amount: 850.00, category: 'Housing', date: 'Oct 01, 2023' },
    { id: 3, label: 'Starbucks', amount: 6.50, category: 'Food', date: 'Oct 25, 2023' },
    { id: 4, label: 'AWS Cloud', amount: 12.00, category: 'Education', date: 'Oct 15, 2023' },
    { id: 5, label: 'Bus Pass', amount: 45.00, category: 'Transport', date: 'Oct 05, 2023' },
  ]);

  return (
    <ErrorBoundary>
      <div className="space-y-8">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-3xl font-headline font-bold mb-2">My Expenses</h1>
          <p className="text-muted-foreground">Keep track of every cent and categorize your spending.</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Expense
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <Card className="md:col-span-1 bg-card border-border h-fit">
          <CardHeader>
            <CardTitle className="text-lg">Filters</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase text-muted-foreground">Search</label>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Find transaction..." className="pl-9 bg-secondary/50" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase text-muted-foreground">Category</label>
              <div className="flex flex-wrap gap-2">
                {['All', 'Food', 'Transport', 'Housing', 'Entertainment', 'Education'].map(cat => (
                  <Badge key={cat} variant={cat === 'All' ? 'default' : 'outline'} className="cursor-pointer">
                    {cat}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-3 bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle>History</CardTitle>
              <CardDescription>All transactions for the current semester</CardDescription>
            </div>
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-4 w-4" />
              Advanced
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Label</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {expenses.map((expense) => (
                  <TableRow key={expense.id} className="hover:bg-secondary/30">
                    <TableCell className="text-muted-foreground">{expense.date}</TableCell>
                    <TableCell className="font-medium">{expense.label}</TableCell>
                    <TableCell>
                      <Badge variant="secondary" className="bg-secondary/80 font-normal">
                        {expense.category}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right font-bold font-headline">
                      ${expense.amount.toFixed(2)}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                          <Edit2 className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-destructive">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
    </ErrorBoundary>
  );
}