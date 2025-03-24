import { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const inputVariants = cva(
  'w-full px-4 py-3 rounded-lg border focus:outline-none focus:border-brand-purple transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-white/70 border-brand-lavender/50',
        newsletter: 'bg-white placeholder:text-brand-navy/50 text-brand-navy shadow-md backdrop-blur-sm border-brand-lavender/50',
      },
      error: {
        true: 'border-red-500',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      error: false,
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  error?: boolean;
  errorMessage?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, error, errorMessage, id, ...props }, ref) => {
    return (
      <div className="w-full">
        <input
          ref={ref}
          id={id}
          className={cn(inputVariants({ variant, error }), className)}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${id}-error` : undefined}
          {...props}
        />
        {error && errorMessage && (
          <p id={`${id}-error`} className="mt-1 text-sm text-red-500" role="alert">
            {errorMessage}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input; 