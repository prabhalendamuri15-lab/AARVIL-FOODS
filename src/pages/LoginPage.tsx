import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from '../components/common/Button';
import { Input } from '../components/common/Input';
import { useAuth } from '../context/AuthContext';
import { AuthService } from '../services/auth';

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/account';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const { user, token } = await AuthService.login(email, password);
      login(user, token);
      navigate(from, { replace: true });
    } catch (err: any) {
      setError(err.message || 'Failed to login');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto px-4 py-20">
      <div className="bg-white p-8 rounded-xl shadow-card border border-darkBrown-200">
        <h1 className="text-h2 font-serif text-darkBrown-900 mb-6 text-center">Welcome Back</h1>
        
        {error && (
          <div className="p-3 mb-6 bg-chilli-50 text-chilli-700 rounded border border-chilli-200 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Email Address"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          
          <div className="pt-2">
            <Button variant="primary" className="w-full" size="lg" type="submit" disabled={isLoading}>
              {isLoading ? 'SIGNING IN...' : 'SIGN IN'}
            </Button>
          </div>
        </form>

        <p className="mt-6 text-center text-sm text-darkBrown-600">
          Don't have an account?{' '}
          <Link to="/register" className="text-chilli-700 font-bold hover:underline">
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
};
