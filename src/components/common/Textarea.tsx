import { forwardRef } from 'react';
import type { TextareaHTMLAttributes } from 'react';
import { clsx } from 'clsx';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, helperText, className, id, ...props }, ref) => {
    const areaId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    return (
      <div className="w-full flex flex-col gap-1.5">
        {label && (
          <label htmlFor={areaId} className="text-xs font-semibold text-darkBrown-700 tracking-wide uppercase">
            {label}
            {props.required && <span className="text-chilli-700 ml-0.5">*</span>}
          </label>
        )}
        <textarea
          ref={ref}
          id={areaId}
          className={clsx(
            'w-full px-4 py-2.5 bg-white border rounded-md text-sm text-darkBrown-700 placeholder:text-darkBrown-400 transition-colors focus:outline-none focus:ring-2 focus:ring-chilli-700 focus:border-chilli-700 min-h-[100px] resize-y disabled:bg-warmCream-200 disabled:cursor-not-allowed',
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

Textarea.displayName = 'Textarea';
