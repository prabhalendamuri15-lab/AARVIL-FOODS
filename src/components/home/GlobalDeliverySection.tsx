import React from 'react';
import { Globe, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../common/Button';

export const GlobalDeliverySection: React.FC = () => {
  const DESTINATIONS = [
    { name: 'India 🇮🇳', detail: 'Express Shipping' },
    { name: 'United States 🇺🇸', detail: 'Air Freight' },
    { name: 'United Kingdom 🇬🇧', detail: 'Air Freight' },
    { name: 'United Arab Emirates 🇦🇪', detail: 'Air Freight' },
    { name: 'Canada 🇨🇦', detail: 'Air Freight' },
    { name: 'Australia 🇦🇺', detail: 'Air Freight' },
  ];

  return (
    <section className="py-16 lg:py-20 bg-darkBrown text-warmCream-200 border-b border-darkBrown-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Description (Cols 1-6) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-darkBrown-600 text-mango-400 text-xs font-semibold uppercase tracking-wider">
              <Globe className="w-3.5 h-3.5" />
              <span>GLOBAL DELIVERY ARCHITECTURE</span>
            </div>

            <h2 className="text-h1 font-serif text-white leading-tight">
              International Delivery Available to Selected Destinations.
            </h2>

            <p className="text-body-sm text-darkBrown-300 leading-relaxed">
              We aim to bring authentic Indian pickles and masalas to food lovers across the globe. Destination availability, shipping rates, and delivery estimates are calculated at checkout.
            </p>

            <div className="space-y-2 text-xs text-darkBrown-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-mango-500 shrink-0" />
                <span>Availability varies by destination country and shipping policies</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-mango-500 shrink-0" />
                <span>Carefully packed for international travel</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-mango-500 shrink-0" />
                <span>Track your order online with your unique order number</span>
              </div>
            </div>

            <div className="pt-2">
              <Link to="/shipping-policy">
                <Button variant="secondary" size="md">
                  View Shipping Information
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Destination Grid (Cols 7-12) */}
          <div className="lg:col-span-6 space-y-3">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {DESTINATIONS.map((dest) => (
                <div
                  key={dest.name}
                  className="bg-darkBrown-600 p-4 rounded-lg border border-darkBrown-500 text-center space-y-1 hover:border-mango-500 transition-colors"
                >
                  <span className="font-serif font-bold text-sm text-white block">{dest.name}</span>
                  <span className="text-[11px] text-mango-400 block font-mono">{dest.detail}</span>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-darkBrown-400 text-center italic">
              Availability and shipping fees vary by destination country.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
