import React from 'react';
import { FEATURED_PRODUCTS } from '../../data/products';
import { ProductCard } from '../common/ProductCard';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const BestSellersSection: React.FC = () => {
  const featuredFlavours = FEATURED_PRODUCTS.filter(p => p.isBestSeller || p.isFeatured).slice(0, 4);

  return (
    <section className="w-full py-20 lg:py-28 bg-warmCream-200 border-b border-darkBrown-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-mango-700">CURATED SELECTION</span>
            <h2 className="text-h1 font-serif text-darkBrown-900">Featured Flavours</h2>
            <p className="text-body-sm text-darkBrown-600">
              Discover popular pickles and fragrant spice masalas for your table.
            </p>
          </div>

          <Link
            to="/shop"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-chilli-700 hover:text-chilli-900 hover:underline shrink-0"
          >
            <span>VIEW ALL PRODUCTS</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredFlavours.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
};
