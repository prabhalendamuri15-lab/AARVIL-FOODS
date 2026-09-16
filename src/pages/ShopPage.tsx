import React, { useEffect, useState, useMemo } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import { ProductService } from '../services/products';
import { ProductCard } from '../components/common/ProductCard';
import { Search, SlidersHorizontal } from 'lucide-react';
import { Button } from '../components/common/Button';
import type { Product } from '../types';
import { SHOP_CATEGORIES, formatCategoryLabel } from '../data/navigation';

type SortOption = 'featured' | 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc';

export const ShopPage: React.FC = () => {
  const { category } = useParams<{ category?: string }>();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Filters
  const [selectedCategory, setSelectedCategory] = useState<string>(category || 'all');
  const [sortOption, setSortOption] = useState<SortOption>('featured');

  useEffect(() => {
    setSelectedCategory(category || 'all');
  }, [category]);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      let data: Product[] = [];
      if (searchQuery) {
        data = await ProductService.searchProducts(searchQuery);
      } else if (selectedCategory && selectedCategory !== 'all') {
        data = await ProductService.getProductsByCategory(selectedCategory);
      } else {
        data = await ProductService.getAllProducts();
      }
      setProducts(data);
      setIsLoading(false);
    };

    fetchProducts();
  }, [searchQuery, selectedCategory]);

  const sortedProducts = useMemo(() => {
    const sorted = [...products];
    switch (sortOption) {
      case 'price-asc':
        return sorted.sort((a, b) => a.price - b.price);
      case 'price-desc':
        return sorted.sort((a, b) => b.price - a.price);
      case 'name-asc':
        return sorted.sort((a, b) => a.name.localeCompare(b.name));
      case 'name-desc':
        return sorted.sort((a, b) => b.name.localeCompare(a.name));
      case 'featured':
      default:
        return sorted.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
    }
  }, [products, sortOption]);

  const heading = searchQuery
    ? 'Search Results'
    : selectedCategory === 'all'
      ? 'Shop All Products'
      : `${formatCategoryLabel(selectedCategory)} Collection`;

  return (
    <div className="bg-warmCream-100">
      <section className="bg-darkBrown text-warmCream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-mango-400">AARVIL Foods Shop</span>
            <h1 className="text-h1 font-serif mt-3">{heading}</h1>
            <p className="text-body-sm text-warmCream-300 mt-3 max-w-2xl">
              Browse hand-cured pickles, roasted masalas, and curated combos with clear category paths, search, and sorting.
            </p>
          </div>
        </div>
      </section>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
      
      {/* Header */}
      <div className="border-b border-darkBrown-200 pb-6 mb-8 flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
        <div>
          <h2 className="text-h2 font-serif text-darkBrown-800 capitalize">{heading}</h2>
          {searchQuery ? (
            <p className="text-xs text-chilli-700 font-semibold mt-2">Showing results for: "{searchQuery}"</p>
          ) : (
            <p className="text-body-sm text-darkBrown-600 mt-2">
              Discover our full catalog of sun-cured pickles, roasted masalas, and artisanal spice blends.
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-64 shrink-0 space-y-8">
          <div>
            <h3 className="font-serif font-bold text-lg mb-4 text-darkBrown-900 border-b border-darkBrown-200 pb-2">Categories</h3>
            <div className="flex lg:block gap-2 overflow-x-auto pb-2 lg:pb-0 lg:space-y-2">
              <Link to="/shop" className={`shrink-0 block px-3 py-2 rounded-md text-sm ${selectedCategory === 'all' ? 'bg-chilli-700 text-white font-bold' : 'bg-white lg:bg-transparent text-darkBrown-600 hover:text-chilli-700'}`}>All Products</Link>
              {SHOP_CATEGORIES.map((categoryLink) => (
                <Link
                  key={categoryLink.id}
                  to={categoryLink.href}
                  className={`shrink-0 block px-3 py-2 rounded-md text-sm ${selectedCategory === categoryLink.id ? 'bg-chilli-700 text-white font-bold' : 'bg-white lg:bg-transparent text-darkBrown-600 hover:text-chilli-700'}`}
                >
                  {categoryLink.label}
                </Link>
              ))}
            </div>
          </div>
        </aside>

        {/* Product Grid Area */}
        <main className="flex-1">
          
          {/* Controls Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 bg-white p-4 rounded-lg border border-darkBrown-200 shadow-subtle">
            <span className="text-sm text-darkBrown-600 font-medium">
              {sortedProducts.length} Product{sortedProducts.length !== 1 ? 's' : ''}
            </span>

            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-darkBrown-400" />
              <span className="text-xs text-darkBrown-500 uppercase tracking-wider font-semibold">Sort by:</span>
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value as SortOption)}
                className="bg-warmCream-100 border border-darkBrown-200 text-darkBrown-800 text-sm rounded-md focus:ring-chilli-700 focus:border-chilli-700 block p-1.5 cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name-asc">Name: A-Z</option>
                <option value="name-desc">Name: Z-A</option>
              </select>
            </div>
          </div>

          {/* Grid */}
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-chilli-700"></div>
            </div>
          ) : sortedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-xl border border-darkBrown-200 shadow-sm">
              <Search className="w-12 h-12 text-darkBrown-300 mx-auto mb-4" />
              <h3 className="font-serif text-xl font-bold text-darkBrown-900 mb-2">No products found</h3>
              <p className="text-sm text-darkBrown-600 mb-6">
                Try adjusting your search or filters to find what you're looking for.
              </p>
              <Link to="/shop">
                <Button variant="primary">Clear All Filters</Button>
              </Link>
            </div>
          )}

        </main>
      </div>
    </div>
    </div>
  );
};
