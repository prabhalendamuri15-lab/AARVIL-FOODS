import React from 'react';
import { Link } from 'react-router-dom';
import { HOMEPAGE_RECIPES } from '../data/recipes';
import { Clock, ChefHat, Users } from 'lucide-react';

export const RecipesPage: React.FC = () => {
  return (
    <div className="bg-warmCream-200 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        <div className="border-b border-darkBrown-200 pb-6 mb-12 text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-mango-700">OUR KITCHEN</span>
          <h1 className="text-h1 font-serif text-darkBrown-800 mt-2">Culinary Recipes & Pairings</h1>
          <p className="text-body-sm text-darkBrown-600 mt-4">
            Discover authentic regional dishes crafted to pair perfectly with AARVIL Foods sun-cured pickles and roasted masalas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {HOMEPAGE_RECIPES.map((recipe) => (
            <Link 
              key={recipe.id} 
              to={`/recipes/${recipe.slug}`}
              className="group bg-white rounded-xl border border-darkBrown-200 shadow-subtle overflow-hidden hover:shadow-card transition-all flex flex-col"
            >
              <div className="aspect-[4/3] bg-warmCream-300 relative overflow-hidden">
                <img 
                  src={recipe.heroImage} 
                  alt={recipe.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-chilli-700 uppercase tracking-widest border border-darkBrown-100">
                  {recipe.region}
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-serif font-bold text-lg text-darkBrown-900 group-hover:text-chilli-700 transition-colors mb-2">
                  {recipe.title}
                </h3>
                <p className="text-xs text-darkBrown-600 mb-6 flex-1 line-clamp-2">
                  {recipe.subtitle}
                </p>
                
                <div className="pt-4 border-t border-darkBrown-100 flex items-center justify-between text-[11px] text-darkBrown-500 font-medium">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{recipe.prepTimeMinutes + recipe.cookTimeMinutes} mins</span>
                  </div>
                  <div className="flex items-center gap-1.5 border-l border-darkBrown-200 pl-3">
                    <ChefHat className="w-3.5 h-3.5" />
                    <span>{recipe.difficulty}</span>
                  </div>
                  <div className="flex items-center gap-1.5 border-l border-darkBrown-200 pl-3">
                    <Users className="w-3.5 h-3.5" />
                    <span>{recipe.servings} serves</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
};
