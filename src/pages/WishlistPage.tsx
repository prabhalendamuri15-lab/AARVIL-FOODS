import React, { useEffect, useState } from 'react';
import { useWishlist } from '../context/WishlistContext';
import { ProductService } from '../services/products';
import { ProductCard } from '../components/common/ProductCard';
import { HeartCrack } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/common/Button';
import type { Product } from '../types';

export const WishlistPage: React.FC = () => {
  const { wishlist } = useWishlist();
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchWishlistProducts = async () => {
      setIsLoading(true);
      const allProducts = await ProductService.getAllProducts();
      const wProducts = allProducts.filter(p => wishlist.includes(p.id));
      setProducts(wProducts);
      setIsLoading(false);
    };

    fetchWishlistProducts();
  }, [wishlist]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div className="border-b border-darkBrown-200 pb-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-mango-700">YOUR SAVED ITEMS</span>
          <h1 className="text-h1 font-serif text-darkBrown-900 mt-2">Wishlist</h1>
        </div>
      </div>

      {isLoading ? (
        <div className="text-center py-20">Loading your wishlist...</div>
      ) : products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-24 bg-white rounded-xl border border-darkBrown-200">
          <HeartCrack className="w-12 h-12 text-darkBrown-300 mx-auto mb-4" />
          <h2 className="font-serif text-2xl text-darkBrown-900 mb-2">Your wishlist is empty</h2>
          <p className="text-darkBrown-600 mb-6 max-w-md mx-auto">
            Save your favorite artisanal pickles and masalas here to find them easily later.
          </p>
          <Link to="/shop">
            <Button variant="primary">DISCOVER FLAVOURS</Button>
          </Link>
        </div>
      )}
    </div>
  );
};
