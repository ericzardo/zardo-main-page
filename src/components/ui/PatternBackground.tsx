import { FC } from 'react';
import { cn } from '@/lib/utils';

interface PatternBackgroundProps {
  className?: string;
  variant?: 'grid' | 'dots' | 'gradient' | 'geometric' | 'waves' | 'circuit';
  opacity?: number;
  animated?: boolean;
}

const PatternBackground: FC<PatternBackgroundProps> = ({
  className,
  variant = 'grid',
  opacity = 0.3,
  animated = false,
}) => {
  return (
    <div
      className={cn(
        'absolute inset-0 -z-10',
        variant === 'grid' && 'bg-grid-pattern',
        variant === 'dots' && 'bg-[radial-gradient(#b14aed_1px,transparent_1px)] [background-size:20px_20px]',
        variant === 'gradient' && 'bg-gradient-radial from-brand-lavender/30 to-brand-offwhite',
        variant === 'geometric' && 'bg-geometric-pattern',
        variant === 'waves' && 'bg-waves-pattern',
        variant === 'circuit' && 'bg-circuit-pattern',
        animated && 'animate-subtle-float',
        className
      )}
      style={{ opacity }}
    />
  );
};

export default PatternBackground;