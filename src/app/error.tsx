'use client';

import { Reload } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Ban } from 'lucide-react';
import { useRouter } from 'next/navigation';

// Error boundaries must be Client Components

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center gap-6 pt-10">
      <Ban className="text-muted-foreground size-10" />
      <h1 className="text-preset-2 text-center">Something went wrong</h1>
      <p className="text-preset-5 text-muted-foreground text-center font-medium">
        We couldn&apos;t connect to the server (API error). Please try again in
        a few moments.
      </p>

      <Button variant="muted" size="sm" onClick={() => router.refresh()}>
        <Reload />
        Refresh
      </Button>
    </div>
  );
}
