import React from 'react';
import { Loader2 } from 'lucide-react';

export interface LoadingStateProps {
  message?: string;
}

export const LoadingState: React.FC<LoadingStateProps> = ({ message = 'Loading artisanal flavours...' }) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <Loader2 className="w-8 h-8 text-chilli-700 animate-spin mb-3" />
      <p className="text-sm font-medium text-darkBrown-600 tracking-wide uppercase">{message}</p>
    </div>
  );
};
