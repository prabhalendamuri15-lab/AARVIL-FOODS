import { forwardRef } from 'react';
import type { InputHTMLAttributes } from 'react';
import { clsx } from 'clsx';
import { Check } from 'lucide-react';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string;
  sublabel?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, sublabel, className, checked, disabled, onChange, id, ...props }, ref) => {
    const boxId = id || label.toLowerCase().replace(/\s+/g, '-');

    return (
      <label htmlFor={boxId} className={clsx('flex items-start gap-3 cursor-pointer select-none', disabled && 'opacity-50 cursor-not-allowed', className)}>
        <div className="relative flex items-center justify-center mt-0.5">
          <input
            type="checkbox"
            ref={ref}
            id={boxId}
            checked={checked}
            disabled={disabled}
            onChange={onChange}
            className="peer sr-only"
            {...props}
          />
          <div className="w-5 h-5 border border-darkBrown-300 rounded bg-white transition-all peer-checked:bg-chilli-700 peer-checked:border-chilli-700 peer-focus-visible:ring-2 peer-focus-visible:ring-chilli-700 peer-focus-visible:ring-offset-1 flex items-center justify-center">
            <Check className="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-medium text-darkBrown-700">{label}</span>
          {sublabel && <span className="text-xs text-darkBrown-400">{sublabel}</span>}
        </div>
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';
