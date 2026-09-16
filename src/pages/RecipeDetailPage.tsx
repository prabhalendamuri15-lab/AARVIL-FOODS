import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { HOMEPAGE_RECIPES } from '../data/recipes';
import { ProductService } from '../services/products';
import { Clock, ChefHat, Users, ChevronRight, CheckCircle2 } from 'lucide-react';
import type { Recipe, Product } from '../types';

export const RecipeDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRecipeAndProducts = async () => {
      setIsLoading(true);
      const found = HOMEPAGE_RECIPES.find(r => r.slug === slug);
      if (found) {
        setRecipe(found);
        
        // Fetch related products
        const allProducts = await ProductService.getAllProducts();
        const products = found.relatedProductIds
          .map(id => allProducts.find(p => p.id === id))
          .filter((p): p is Product => !!p);
        setRelatedProducts(products);
      } else {
        navigate('/404', { replace: true });
      }
      setIsLoading(false);
    };
    
    fetchRecipeAndProducts();
  }, [slug, navigate]);

  if (isLoading || !recipe) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-chilli-700"></div>
      </div>
    );
  }

  return (
    <div className="bg-warmCream-100 min-h-screen pb-20">
      
      {/* Hero Image */}
      <div className="w-full h-[40vh] md:h-[50vh] relative">
        <img src={recipe.heroImage} alt={recipe.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-darkBrown-900/40" />
        <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold text-white uppercase tracking-widest border border-white/30 mb-4">
              {recipe.region}
            </span>
            <h1 className="text-h2 md:text-h1 font-serif text-white mb-4 drop-shadow-md">{recipe.title}</h1>
            <p className="text-sm md:text-base text-warmCream-200 font-medium drop-shadow-md">{recipe.subtitle}</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="bg-white rounded-xl shadow-card border border-darkBrown-200 p-6 md:p-10">
          
          {/* Recipe Meta */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 pb-8 border-b border-darkBrown-100 text-sm font-semibold text-darkBrown-700 uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-chilli-700" />
              <span>Prep: {recipe.prepTimeMinutes}m / Cook: {recipe.cookTimeMinutes}m</span>
            </div>
            <div className="flex items-center gap-2">
              <ChefHat className="w-5 h-5 text-chilli-700" />
              <span>{recipe.difficulty}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-chilli-700" />
              <span>{recipe.servings} Servings</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-10">
            
            {/* Ingredients */}
            <div className="lg:col-span-4 space-y-6">
              <h3 className="font-serif text-xl font-bold text-darkBrown-900 mb-4">Ingredients</h3>
              <ul className="space-y-3">
                {recipe.ingredients.map((ing, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-mango-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-darkBrown-700">{ing}</span>
                  </li>
                ))}
              </ul>

              {relatedProducts.length > 0 && (
                <div className="pt-8 mt-8 border-t border-darkBrown-100">
                  <h4 className="font-serif text-base font-bold text-darkBrown-900 mb-4">Shop The Recipe</h4>
                  <div className="space-y-4">
                    {relatedProducts.map(p => (
                      <Link key={p.id} to={`/products/${p.slug}`} className="flex items-center gap-3 p-2 rounded-lg hover:bg-warmCream-200 transition-colors border border-transparent hover:border-darkBrown-200 group">
                        <img src={p.images[0]?.url || ''} alt={p.name} className="w-12 h-12 rounded object-cover border border-darkBrown-200" />
                        <div className="flex-1">
                          <h5 className="text-xs font-bold text-darkBrown-900 group-hover:text-chilli-700">{p.name}</h5>
                          <span className="text-[10px] text-darkBrown-500">View Product <ChevronRight className="w-3 h-3 inline" /></span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Instructions */}
            <div className="lg:col-span-8">
              <h3 className="font-serif text-xl font-bold text-darkBrown-900 mb-6">Instructions</h3>
              <div className="space-y-8">
                {recipe.instructions.map((step, idx) => (
                  <div key={idx} className="flex gap-4 md:gap-6">
                    <div className="shrink-0 w-8 h-8 rounded-full bg-chilli-100 text-chilli-800 font-serif font-bold flex items-center justify-center border border-chilli-200">
                      {idx + 1}
                    </div>
                    <div>
                      <p className="text-base text-darkBrown-700 leading-relaxed pt-1">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
