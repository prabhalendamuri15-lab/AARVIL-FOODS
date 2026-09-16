import React from 'react';
import type { SpiceLevel } from '../../types';
import { Flame } from 'lucide-react';
import { clsx } from 'clsx';

export interface SpiceMeterProps {
  level: SpiceLevel;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const SPICE_CONFIG: Record<SpiceLevel, { count: number; colorClass: string; bgClass: string; text: string }> = {
  Mild: { count: 1, colorClass: 'text-mango-500 fill-mango-500', bgClass: 'bg-mango-100', text: 'Mild Spice' },
  Medium: { count: 2, colorClass: 'text-orange-500 fill-orange-500', bgClass: 'bg-orange-100', text: 'Medium Spice' },
  Hot: { count: 3, colorClass: 'text-chilli-600 fill-chilli-600', bgClass: 'bg-chilli-100', text: 'Hot' },
  'Extra Hot': { count: 4, colorClass: 'text-chilli-800 fill-chilli-800 animate-pulse', bgClass: 'bg-chilli-200', text: 'Extra Hot 🌶️' },
};

export const SpiceMeter: React.FC<SpiceMeterProps> = ({
  level,
  showText = true,
  size = 'md',
  className,
}) => {
  const config = SPICE_CONFIG[level] || SPICE_CONFIG.Mild;

  const iconSizes = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };

  const textSizes = {
    sm: 'text-xs',
    md: 'text-xs font-semibold',
    lg: 'text-sm font-semibold',
  };

  return (
    <div
      className={clsx('inline-flex items-center gap-1.5', className)}
      title={`Spice Level: ${level}`}
      aria-label={`Spice Level: ${level}`}
    >
      <div className="flex items-center gap-0.5" aria-hidden="true">
        {[1, 2, 3, 4].map(idx => (
          <Flame
            key={idx}
            className={clsx(
              iconSizes[size],
              idx <= config.count ? config.colorClass : 'text-darkBrown-200 fill-transparent'
            )}
          />
        ))}
      </div>

      {showText && (
        <span className={clsx(textSizes[size], 'text-darkBrown-700 font-medium')}>
          {config.text}
        </span>
      )}
    </div>
  );
};
