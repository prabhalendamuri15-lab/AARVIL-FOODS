import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

interface CategoryCardData {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  link: string;
  tag: string;
}

const CATEGORIES: CategoryCardData[] = [
  {
    id: 'cat-pickles',
    title: 'Artisanal Pickles',
    subtitle: 'Sun-cured Mango, Gongura, Garlic & Lemon preserves.',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=600',
    link: '/shop/pickles',
    tag: 'Hand-Cured'
  },
  {
    id: 'cat-masalas',
    title: 'Pure Masalas & Spices',
    subtitle: 'Fragrant Biryani, Garam Masala & Chettinad Pepper blends.',
    image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&q=80&w=600',
    link: '/shop/masalas',
    tag: 'Stone-Ground'
  },
  {
    id: 'cat-combos',
    title: 'Heritage Gift Sets',
    subtitle: 'Curated 4-jar sampler boxes for overseas family & gifting.',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=600',
    link: '/shop/combos',
    tag: 'Sampler Box'
  },
  {
    id: 'cat-best-sellers',
    title: 'Featured Flavours',
    subtitle: 'Beloved regional creations ordered most by food lovers.',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=600',
    link: '/shop',
    tag: 'Regional Classics'
  }
];

export const CategorySection: React.FC = () => {
  return (
    <section className="w-full py-20 lg:py-28 bg-white border-b border-darkBrown-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-chilli-700">CURATED SELECTION</span>
          <h2 className="text-h1 font-serif text-darkBrown-900">Explore Our Flavours</h2>
          <p className="text-body-sm text-darkBrown-600">
            From beloved regional pickles to fragrant roasted masalas, discover authentic recipes rooted in Indian kitchens.
          </p>
        </div>

        {/* 4 Category Cards Grid (Horizontal scroll on mobile, 4 cols on desktop) */}
        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto sm:overflow-visible pb-4 sm:pb-0 scrollbar-none">
          {CATEGORIES.map((category) => (
            <Link
              key={category.id}
              to={category.link}
              className="group relative rounded-xl overflow-hidden border border-darkBrown-200 aspect-[4/5] bg-warmCream-200 flex flex-col justify-end p-6 shadow-subtle hover:shadow-card transition-all duration-300 min-w-[260px] sm:min-w-0 flex-shrink-0 sm:flex-shrink"
            >
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-darkBrown-900/90 via-darkBrown-900/40 to-transparent transition-opacity group-hover:from-darkBrown-900/95" />

              {/* Tag Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 rounded-md bg-white/95 backdrop-blur-sm text-[10px] font-bold uppercase tracking-widest text-darkBrown-800 shadow-sm">
                  {category.tag}
                </span>
              </div>

              {/* Category Info */}
              <div className="relative z-10 space-y-2 text-white">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-xl font-bold group-hover:text-mango-400 transition-colors">
                    {category.title}
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white group-hover:bg-chilli-700 group-hover:text-white transition-all shrink-0">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <p className="text-xs text-darkBrown-200 leading-relaxed line-clamp-2">
                  {category.subtitle}
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};
