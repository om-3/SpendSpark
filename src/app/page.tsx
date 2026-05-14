"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Sparkles, Key, ArrowRight, ShieldCheck, Wallet, Zap } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

export default function LandingPage() {
  const [apiKey, setApiKey] = useState('');
  // Initialize with a default year to avoid hydration mismatch between server and client
  const [currentYear, setCurrentYear] = useState<number>(2026);
  // Track if the component has mounted to handle client-side only features (like localStorage)
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-landing');

  useEffect(() => {
    setMounted(true);
    try {
      // Sync the year on the client to ensure it's accurate
      setCurrentYear(new Date().getFullYear());
      // Safely access localStorage after the component has mounted
      const savedKey = localStorage.getItem('GEMINI_API_KEY');
      if (savedKey) setApiKey(savedKey);
    } catch (error) {
      // Log errors if browser storage is restricted or fails
      console.error('Failed to access localStorage:', error);
    }
  }, []);

  const handleStart = () => {
    if (apiKey.trim()) {
      localStorage.setItem('GEMINI_API_KEY', apiKey.trim());
    }
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      {/* Navigation */}
      <nav className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <Sparkles className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-headline text-xl font-bold tracking-tight">SpendSpark</span>
          </div>
          <Button variant="ghost" onClick={() => router.push('/dashboard')} suppressHydrationWarning>
            Skip to Demo
          </Button>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-12 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
                <Zap className="h-3 w-3" />
                AI-Powered Budgeting
              </div>
              <h1 className="text-5xl lg:text-7xl font-headline font-bold leading-tight">
                Master Your <span className="text-primary">Financial</span> Future.
              </h1>
              <p className="text-xl text-muted-foreground max-w-[600px] leading-relaxed">
                SpendSpark combines smart expense tracking with Gemini AI to find subscription leaks and optimize your student budget automatically.
              </p>
            </div>

            <Card className="max-w-md border-primary/20 bg-card/50 backdrop-blur shadow-2xl overflow-hidden">
              <CardHeader className="bg-primary/5 pb-4">
                <div className="flex items-center gap-2">
                  <Key className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">AI Configuration</CardTitle>
                </div>
                <CardDescription>
                  Enter your Gemini API key to enable SpendSpark's intelligent insights.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase text-muted-foreground">Gemini API Key</label>
                  <Input 
                    type="password" 
                    placeholder="Paste your API key here..." 
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    className="bg-secondary/50 border-border focus:ring-primary"
                    suppressHydrationWarning
                  />
                  <p className="text-[10px] text-muted-foreground flex items-center gap-1">
                    <ShieldCheck className="h-3 w-3" />
                    Stored locally in your browser.
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  onClick={handleStart} 
                  className="w-full h-12 text-lg font-bold bg-primary hover:bg-primary/90 transition-smooth group"
                  suppressHydrationWarning
                >
                  Start Saving
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>
            </Card>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex flex-col">
                <span className="text-2xl font-bold font-headline">100%</span>
                <span className="text-xs text-muted-foreground uppercase font-medium">Private</span>
              </div>
              <div className="h-8 w-px bg-border" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold font-headline">Zero</span>
                <span className="text-xs text-muted-foreground uppercase font-medium">Ads</span>
              </div>
              <div className="h-8 w-px bg-border" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold font-headline">Real-time</span>
                <span className="text-xs text-muted-foreground uppercase font-medium">Insights</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual */}
          <div className="relative hidden lg:block">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative rounded-2xl border border-border overflow-hidden shadow-2xl">
              {heroImage && (
                <Image 
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  width={1200}
                  height={800}
                  data-ai-hint={heroImage.imageHint}
                  className="object-cover"
                />
              )}
              {/* Overlay elements for "UI feel" */}
              <div className="absolute top-6 left-6 p-4 bg-background/80 backdrop-blur rounded-xl border border-border shadow-lg animate-bounce duration-[3000ms]">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Wallet className="h-5 w-5 text-green-400" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase text-muted-foreground">Savings Found</div>
                    <div className="text-lg font-bold">$24.99/mo</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-border/40 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
            <div>
              &copy; {mounted ? currentYear : '2026'} SpendSpark. Built for smart student budgeting.
            </div>
            <div className="flex items-center gap-6">
              <span className="font-medium text-foreground/80">Developed by Om Yerpude</span>
              <div className="flex items-center gap-4">
                <a 
                  href="https://github.com/om-3" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  GitHub
                </a>
                <a 
                  href="https://www.instagram.com/_om_3.y?igsh=MTA1aWYyYzRpczJueA==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
