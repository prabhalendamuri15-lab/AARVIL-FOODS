import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ProductService } from '../services/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { Button } from '../components/common/Button';
import { Heart, Minus, Plus, ArrowRight, ShieldCheck, Truck } from 'lucide-react';
import type { Product, ProductVariant } from '../types';

export const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { wishlist, toggleWishlist } = useWishlist();

  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      if (slug) {
        const data = await ProductService.getProductBySlug(slug);
        if (data) {
          setProduct(data);
          setSelectedVariant(data.variants[0]);
        } else {
          // If not found, could redirect to 404 or show error
          navigate('/404', { replace: true });
        }
      }
      setIsLoading(false);
    };
    fetchProduct();
  }, [slug, navigate]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-chilli-700"></div>
      </div>
    );
  }

  if (!product || !selectedVariant) return null;

  const isWishlisted = wishlist.includes(product.id);

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  const images = product.images;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <nav className="mb-8 text-xs font-semibold text-darkBrown-500 uppercase tracking-wider flex items-center gap-2">
        <Link to="/" className="hover:text-chilli-700">Home</Link>
        <span>/</span>
        <Link to={`/shop/${product.category}`} className="hover:text-chilli-700">{product.category}</Link>
        <span>/</span>
        <span className="text-darkBrown-900">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-[4/5] sm:aspect-square bg-warmCream-200 rounded-xl overflow-hidden border border-darkBrown-100">
            <img 
              src={images[activeImageIndex]?.url || ''} 
              alt={product.name} 
              className="w-full h-full object-cover object-center"
            />
          </div>
          {images.length > 1 && (
            <div className="grid grid-cols-4 gap-4">
              {images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 ${activeImageIndex === idx ? 'border-chilli-700' : 'border-transparent hover:border-darkBrown-300'}`}
                >
                  <img src={img.url} alt={img.alt || `${product.name} image ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          {product.isFeatured && (
            <span className="inline-block bg-mango-200 text-mango-800 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm w-fit mb-4">
              Featured Pick
            </span>
          )}
          
          <h1 className="text-h2 font-serif text-darkBrown-900 mb-2">{product.name}</h1>
          <p className="text-xl font-bold text-chilli-700 mb-6">₹{selectedVariant.price.toFixed(2)}</p>
          
          <div className="prose prose-sm text-darkBrown-700 mb-8 leading-relaxed">
            <p>{product.description}</p>
          </div>

          <div className="space-y-6 mb-8 border-y border-darkBrown-100 py-6">
            
            {/* Variants */}
            <div>
              <span className="text-xs font-bold text-darkBrown-900 uppercase tracking-wider block mb-3">Size Options</span>
              <div className="flex flex-wrap gap-3">
                {product.variants.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-4 py-2 border rounded-md text-sm font-semibold transition-colors ${
                      selectedVariant.id === v.id
                        ? 'border-chilli-700 bg-chilli-50 text-chilli-800'
                        : 'border-darkBrown-200 text-darkBrown-600 hover:border-darkBrown-400'
                    }`}
                  >
                    {v.size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <div className="flex items-center border border-darkBrown-200 rounded-md bg-white w-fit">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-darkBrown-500 hover:text-darkBrown-900"
                  disabled={quantity <= 1}
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-semibold text-sm">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-darkBrown-500 hover:text-darkBrown-900"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <Button 
                variant="primary" 
                size="lg" 
                className="flex-1"
                onClick={handleAddToCart}
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                ADD TO CART - ₹{(selectedVariant.price * quantity).toFixed(2)}
              </Button>
              
              <button 
                onClick={() => toggleWishlist(product.id)}
                className={`p-3.5 border rounded-md flex items-center justify-center transition-colors ${
                  isWishlisted 
                    ? 'border-chilli-700 bg-chilli-50 text-chilli-700' 
                    : 'border-darkBrown-200 bg-white text-darkBrown-600 hover:border-darkBrown-400'
                }`}
                aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
              </button>
            </div>
          </div>

          <div className="space-y-3 text-sm text-darkBrown-600">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-naturalGreen-600" />
              <span>Authentic traditional recipe without artificial preservatives.</span>
            </div>
            <div className="flex items-center gap-3">
              <Truck className="w-5 h-5 text-chilli-700" />
              <span>Express shipping available at checkout.</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
