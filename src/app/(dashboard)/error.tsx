"use client";

import { useEffect } from "react";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DashboardError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log segment-specific errors for the dashboard.
    // Dashboard errors are often related to data fetching or chart rendering failures.
    console.error("Dashboard Segment Error:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center p-12 text-center bg-destructive/5 rounded-xl border border-destructive/20 mt-8">
      <AlertCircle className="h-12 w-12 text-destructive mb-4" />
      <h2 className="text-xl font-bold mb-2">Dashboard Error</h2>
      <p className="text-muted-foreground mb-6 max-w-sm">
        There was a problem loading this section of the dashboard.
      </p>
      <Button variant="destructive" onClick={() => reset()}>
        Reload Section
      </Button>
    </div>
  );
}
