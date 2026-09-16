import React from 'react';
import { Link } from 'react-router-dom';
import { FEATURED_PRODUCTS } from '../../data/products';
import { ProductCard } from '../common/ProductCard';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export const MasalaCollectionSection: React.FC = () => {
  const masalas = FEATURED_PRODUCTS.filter(p => p.category === 'masalas').slice(0, 3);
  const featuredHeroMasala = FEATURED_PRODUCTS.find(p => p.id === 'prod-003') || masalas[0];

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-darkBrown-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-mango-700">PURE SPICE BLENDS</span>
          <h2 className="text-h1 font-serif text-darkBrown-900">Bring the Kitchen to Life</h2>
          <p className="text-body-sm text-darkBrown-600">
            Whole spices roasted to perfection, stone-ground in small batches for uncompromised aroma.
          </p>
        </div>

        {/* Featured Masala Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          
          {/* Hero Feature Box (Cols 1-5) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-warmCream-200 to-warmCream-300 rounded-xl p-8 border border-darkBrown-200 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-chilli-700 text-white text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-mango-400" />
              <span>FEATURED BLEND</span>
            </div>

            <h3 className="font-serif text-2xl font-bold text-darkBrown-900">
              {featuredHeroMasala?.name}
            </h3>

            <p className="text-body-sm text-darkBrown-700 leading-relaxed">
              {featuredHeroMasala?.description}
            </p>

            <ul className="space-y-2 text-xs font-semibold text-darkBrown-800">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-naturalGreen-600" />
                <span>100% Whole Spices • No Added Fillers</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-naturalGreen-600" />
                <span>Slow Roasted for Maximum Essential Oils</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-naturalGreen-600" />
                <span>Sealed in Flavor-Lock Aluminum Tins</span>
              </li>
            </ul>

            <div className="pt-2">
              <Link to={`/products/${featuredHeroMasala?.slug}`} className="inline-block w-full text-center py-3 bg-chilli-700 hover:bg-chilli-800 text-white font-semibold text-xs rounded transition-colors uppercase tracking-wider">
                EXPLORE {featuredHeroMasala?.name}
              </Link>
            </div>
          </div>

          {/* Supporting Cards Grid (Cols 6-12) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {masalas.map(masala => (
              <ProductCard key={masala.id} product={masala} />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
