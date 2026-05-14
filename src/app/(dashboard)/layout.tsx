import React from 'react';
import { SidebarProvider, Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarFooter, SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import { LayoutDashboard, ReceiptText, CalendarRange, BarChart3, Settings, UserCircle, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
    { icon: ReceiptText, label: 'Expenses', href: '/expenses' },
    { icon: CalendarRange, label: 'Subscriptions', href: '/subscriptions' },
    { icon: BarChart3, label: 'Reports', href: '/reports' },
    { icon: Settings, label: 'Settings', href: '/settings' },
  ];

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <Sidebar className="border-r border-border bg-card">
          <SidebarHeader className="p-6">
            <div className="flex items-center gap-2 px-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Sparkles className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-headline text-xl font-bold tracking-tight text-foreground">SpendSpark</span>
            </div>
          </SidebarHeader>
          <SidebarContent className="px-4 py-4">
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton asChild tooltip={item.label} className="transition-smooth hover:bg-secondary">
                    <Link href={item.href} className="flex items-center gap-3 py-6 px-3">
                      <item.icon className="h-5 w-5" />
                      <span className="text-base font-medium">{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter className="p-4 border-t border-border">
            <SidebarMenuButton className="w-full flex items-center gap-3 px-3 py-6 hover:bg-secondary rounded-lg">
              <UserCircle className="h-5 w-5" />
              <div className="flex flex-col text-left">
                <span className="text-sm font-semibold">Om Yerpude</span>
                <span className="text-xs text-muted-foreground">Developer</span>
              </div>
            </SidebarMenuButton>
          </SidebarFooter>
        </Sidebar>
        <SidebarInset className="bg-background">
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-6">
            <SidebarTrigger className="-ml-1" />
            <div className="flex-1"></div>
            <div className="flex items-center gap-4">
               <span className="text-sm text-muted-foreground">Welcome back, Om</span>
            </div>
          </header>
          <main className="flex-1 overflow-y-auto p-6 lg:p-10">
            {children}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}