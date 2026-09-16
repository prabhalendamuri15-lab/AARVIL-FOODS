import React from 'react';
import { HOMEPAGE_RECIPES } from '../../data/recipes';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';

export const RecipesSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-white border-b border-darkBrown-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-mango-700">HERITAGE KITCHEN</span>
            <h2 className="text-h1 font-serif text-darkBrown-900">From Our Kitchen</h2>
            <p className="text-body-sm text-darkBrown-600">
              Traditional regional recipes crafted with AARVIL Foods pickles and masalas.
            </p>
          </div>

          <Link
            to="/recipes"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-chilli-700 hover:text-chilli-900 hover:underline shrink-0"
          >
            <span>EXPLORE ALL RECIPES</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3 Recipe Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {HOMEPAGE_RECIPES.map((recipe) => (
            <div
              key={recipe.id}
              className="group bg-warmCream-100 rounded-lg overflow-hidden border border-darkBrown-200 shadow-subtle hover:shadow-card transition-all duration-300 flex flex-col justify-between"
            >
              <div className="aspect-[16/10] overflow-hidden bg-warmCream-300 relative">
                <img
                  src={recipe.heroImage}
                  alt={recipe.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-darkBrown-800">
                  {recipe.region}
                </div>
              </div>

              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-xs text-darkBrown-500 font-medium">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-chilli-700" />
                      {recipe.prepTimeMinutes + recipe.cookTimeMinutes} mins
                    </span>
                    <span>•</span>
                    <span>{recipe.difficulty}</span>
                  </div>

                  <Link to={`/recipes/${recipe.slug}`} className="block">
                    <h3 className="font-serif font-bold text-lg text-darkBrown-900 group-hover:text-chilli-700 transition-colors">
                      {recipe.title}
                    </h3>
                  </Link>

                  <p className="text-xs text-darkBrown-600 line-clamp-2 leading-relaxed">
                    {recipe.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-darkBrown-200/60 flex items-center justify-between">
                  <Link
                    to={`/recipes/${recipe.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-chilli-700 hover:underline"
                  >
                    <span>Read Full Recipe</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
