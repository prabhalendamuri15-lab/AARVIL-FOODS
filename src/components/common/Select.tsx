import { forwardRef } from 'react';
import type { SelectHTMLAttributes } from 'react';
import { clsx } from 'clsx';
import { ChevronDown } from 'lucide-react';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: SelectOption[];
  error?: string;
  helperText?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, options, error, helperText, className, id, ...props }, ref) => {
    const selectId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    return (
      <div className="w-full flex flex-col gap-1.5">
        {label && (
          <label htmlFor={selectId} className="text-xs font-semibold text-darkBrown-700 tracking-wide uppercase">
            {label}
            {props.required && <span className="text-chilli-700 ml-0.5">*</span>}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            className={clsx(
              'w-full px-4 py-2.5 pr-10 bg-white border rounded-md text-sm text-darkBrown-700 appearance-none transition-colors focus:outline-none focus:ring-2 focus:ring-chilli-700 focus:border-chilli-700 cursor-pointer disabled:bg-warmCream-200 disabled:cursor-not-allowed',
              error ? 'border-red-600 focus:ring-red-600' : 'border-darkBrown-200 hover:border-darkBrown-400',
              className
            )}
            {...props}
          >
            {options.map(opt => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-darkBrown-500 pointer-events-none" />
        </div>
        {error && <p className="text-xs text-red-600 font-medium">{error}</p>}
        {!error && helperText && <p className="text-xs text-darkBrown-400">{helperText}</p>}
      </div>
    );
  }
);

Select.displayName = 'Select';
