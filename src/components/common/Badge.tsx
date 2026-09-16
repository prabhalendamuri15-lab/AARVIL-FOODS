import type { ReactNode } from 'react';
import { clsx } from 'clsx';

export type BadgeVariant = 'best-seller' | 'new' | 'sale' | 'sold-out' | 'vegan' | 'gluten-free' | 'outline' | 'custom';

export interface BadgeProps {
  variant?: BadgeVariant;
  children: ReactNode;
  className?: string;
}

export const Badge = ({ variant = 'custom', children, className }: BadgeProps) => {
  const baseStyles = 'inline-flex items-center px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider rounded-sm select-none';

  const variantStyles: Record<BadgeVariant, string> = {
    'best-seller': 'bg-mango-500 text-darkBrown-800',
    'new': 'bg-chilli-700 text-white',
    'sale': 'bg-chilli-100 text-chilli-700 border border-chilli-300',
    'sold-out': 'bg-darkBrown-200 text-darkBrown-600',
    'vegan': 'bg-naturalGreen-500 text-white',
    'gluten-free': 'bg-naturalGreen-100 text-naturalGreen-700 border border-naturalGreen-300',
    'outline': 'border border-darkBrown-300 text-darkBrown-700 bg-warmCream-100',
    'custom': 'bg-warmCream-300 text-darkBrown-700',
  };

  return (
    <span className={clsx(baseStyles, variantStyles[variant], className)}>
      {children}
    </span>
  );
};
