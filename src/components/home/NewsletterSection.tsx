import React, { useState } from 'react';
import { Mail, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '../common/Button';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setIsSubscribed(true);
  };

  return (
    <section className="py-16 lg:py-20 bg-warmCream-300 border-b border-darkBrown-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        <div className="w-12 h-12 rounded-full bg-chilli-700 text-white flex items-center justify-center mx-auto shadow-md">
          <Mail className="w-6 h-6" />
        </div>

        <div className="space-y-2 max-w-xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-chilli-700">HERITAGE DISPATCH</span>
          <h2 className="text-h1 font-serif text-darkBrown-900">Stay Close to the Flavour</h2>
          <p className="text-body-sm text-darkBrown-700">
            Subscribe to receive authentic seasonal recipes, new pickle batch announcements, and stories from traditional Indian kitchens.
          </p>
        </div>

        {isSubscribed ? (
          <div className="bg-white p-6 rounded-lg border border-naturalGreen-300 text-center max-w-md mx-auto space-y-2 animate-fadeIn">
            <CheckCircle2 className="w-8 h-8 text-naturalGreen-600 mx-auto" />
            <h3 className="font-serif font-bold text-lg text-darkBrown-900">Welcome to AARVIL Foods!</h3>
            <p className="text-xs text-darkBrown-600">
              Thank you for subscribing. We will send you our finest heritage recipes and seasonal updates.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-2">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 bg-white border border-darkBrown-300 rounded-md text-sm text-darkBrown-800 placeholder:text-darkBrown-400 focus:outline-none focus:ring-2 focus:ring-chilli-700"
                aria-label="Email address for newsletter"
              />
              <Button variant="primary" type="submit" rightIcon={<ArrowRight className="w-4 h-4" />}>
                SUBSCRIBE
              </Button>
            </div>
            {error && <p className="text-xs text-red-600 text-left font-medium">{error}</p>}
            <p className="text-[11px] text-darkBrown-500">
              Zero spam. Unsubscribe at any time with one click.
            </p>
          </form>
        )}

      </div>
    </section>
  );
};
