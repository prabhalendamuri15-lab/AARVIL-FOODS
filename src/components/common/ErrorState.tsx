import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import { Button } from './Button';

export interface ErrorStateProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
}

export const ErrorState: React.FC<ErrorStateProps> = ({
  title = 'Something unexpected happened',
  message = 'We encountered an error loading this section. Please try refreshing.',
  onRetry,
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-6 text-center max-w-md mx-auto">
      <div className="w-16 h-16 bg-chilli-50 rounded-full flex items-center justify-center mb-4 text-chilli-700">
        <AlertTriangle className="w-8 h-8" />
      </div>
      <h3 className="text-h3 font-serif text-darkBrown-800 mb-2">{title}</h3>
      <p className="text-body-sm text-darkBrown-600 mb-6">{message}</p>
      {onRetry && (
        <Button variant="outline" leftIcon={<RefreshCw className="w-4 h-4" />} onClick={onRetry}>
          Try Again
        </Button>
      )}
    </div>
  );
};
