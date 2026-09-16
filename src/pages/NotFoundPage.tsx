import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/common/Button';
import { Home } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="max-w-md mx-auto px-4 py-20 text-center space-y-4">
      <span className="text-6xl block">🌶️</span>
      <h1 className="text-h1 font-serif text-darkBrown-900">404 — Page Not Found</h1>
      <p className="text-body-sm text-darkBrown-600">
        The recipe or page you are looking for seems to have moved or does not exist.
      </p>
      <div className="pt-2">
        <Link to="/">
          <Button variant="primary" leftIcon={<Home className="w-4 h-4" />}>
            Return to Homepage
          </Button>
        </Link>
      </div>
    </div>
  );
};
