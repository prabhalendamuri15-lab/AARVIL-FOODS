import type { HTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hoverable?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  bordered?: boolean;
}

export const Card = ({
  children,
  hoverable = true,
  padding = 'md',
  bordered = true,
  className,
  ...props
}: CardProps) => {
  const paddingClasses = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div
      className={clsx(
        'bg-white rounded-md overflow-hidden transition-all duration-300',
        bordered && 'border border-darkBrown-100',
        hoverable && 'hover:shadow-card hover:-translate-y-0.5 hover:border-darkBrown-300',
        paddingClasses[padding],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
