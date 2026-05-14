"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // This logs the full error detail to the server/browser console as required.
    // This is crucial for diagnosing production issues that might be swallowed otherwise.
    console.error("Critical Application Error Caught by Next.js:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
      <p className="text-muted-foreground mb-8 max-w-md">
        An unexpected error occurred in the application. We've logged the details for investigation.
      </p>
      <button
        className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
