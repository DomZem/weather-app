import * as React from 'react';

import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

export interface InputProps extends React.ComponentProps<'input'> {
  startIcon?: LucideIcon;
}

function Input({ className, type, startIcon, ...props }: InputProps) {
  const StartIcon = startIcon;

  return (
    <div className="relative w-full">
      {StartIcon && (
        <div className="absolute top-1/2 left-6 -translate-y-1/2 transform">
          <StartIcon size={20} className="text-muted-foreground" />
        </div>
      )}
      <input
        type={type}
        data-slot="input"
        className={cn(
          'placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground border-input bg-input h-14 w-full min-w-0 rounded-md border px-6 py-1 transition-[color] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
          'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
          'aria-invalid:ring-destructive/20 aria-invalid:border-destructive',
          startIcon ? 'pl-[3.75rem]' : '',
          className,
        )}
        {...props}
      />
    </div>
  );
}

export { Input };
