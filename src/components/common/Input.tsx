import { forwardRef } from 'react';
import type { InputHTMLAttributes } from 'react';
import { clsx } from 'clsx';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, className, id, ...props }, ref) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    return (
      <div className="w-full flex flex-col gap-1.5">
        {label && (
          <label htmlFor={inputId} className="text-xs font-semibold text-darkBrown-700 tracking-wide uppercase">
            {label}
            {props.required && <span className="text-chilli-700 ml-0.5">*</span>}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={clsx(
            'w-full px-4 py-2.5 bg-white border rounded-md text-sm text-darkBrown-700 placeholder:text-darkBrown-400 transition-colors focus:outline-none focus:ring-2 focus:ring-chilli-700 focus:border-chilli-700 disabled:bg-warmCream-200 disabled:cursor-not-allowed',
            error ? 'border-red-600 focus:ring-red-600' : 'border-darkBrown-200 hover:border-darkBrown-400',
            className
          )}
          {...props}
        />
        {error && <p className="text-xs text-red-600 font-medium">{error}</p>}
        {!error && helperText && <p className="text-xs text-darkBrown-400">{helperText}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';
