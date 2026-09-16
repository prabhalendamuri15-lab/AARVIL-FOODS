import type { ReactNode } from 'react';
import { PackageOpen } from 'lucide-react';
import { Button } from './Button';
import { Link } from 'react-router-dom';

export interface EmptyStateProps {
  title: string;
  description: string;
  actionText?: string;
  actionHref?: string;
  onAction?: () => void;
  icon?: ReactNode;
}

export const EmptyState = ({
  title,
  description,
  actionText,
  actionHref,
  onAction,
  icon = <PackageOpen className="w-12 h-12 text-darkBrown-400" />,
}: EmptyStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-6 text-center max-w-md mx-auto">
      <div className="w-20 h-20 bg-warmCream-300 rounded-full flex items-center justify-center mb-5 text-chilli-700">
        {icon}
      </div>
      <h3 className="text-h3 font-serif text-darkBrown-800 mb-2">{title}</h3>
      <p className="text-body-sm text-darkBrown-600 mb-6">{description}</p>
      {actionText && (
        <div>
          {actionHref ? (
            <Link to={actionHref}>
              <Button variant="primary">{actionText}</Button>
            </Link>
          ) : (
            <Button variant="primary" onClick={onAction}>{actionText}</Button>
          )}
        </div>
      )}
    </div>
  );
};
