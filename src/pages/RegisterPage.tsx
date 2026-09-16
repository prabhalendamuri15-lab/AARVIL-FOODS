import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/common/Button';
import { Input } from '../components/common/Input';
import { useAuth } from '../context/AuthContext';
import { AuthService } from '../services/auth';

export const RegisterPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const { user, token } = await AuthService.register(name, email, password);
      login(user, token);
      navigate('/account', { replace: true });
    } catch (err: any) {
      setError(err.message || 'Failed to register');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto px-4 py-20">
      <div className="bg-white p-8 rounded-xl shadow-card border border-darkBrown-200">
        <h1 className="text-h2 font-serif text-darkBrown-900 mb-6 text-center">Create Account</h1>
        
        {error && (
          <div className="p-3 mb-6 bg-chilli-50 text-chilli-700 rounded border border-chilli-200 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Full Name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
              {isLoading ? 'CREATING ACCOUNT...' : 'REGISTER'}
            </Button>
          </div>
        </form>

        <p className="mt-6 text-center text-sm text-darkBrown-600">
          Already have an account?{' '}
          <Link to="/login" className="text-chilli-700 font-bold hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};
