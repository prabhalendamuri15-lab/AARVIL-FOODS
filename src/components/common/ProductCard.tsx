import React from 'react';
import type { Product } from '../../types';
import { useCurrency } from '../../context/CurrencyContext';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { SpiceMeter } from './SpiceMeter';
import { Badge } from './Badge';
import { Heart, ShoppingBag, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface ProductCardProps {
  product: Product;
  className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, className }) => {
  const { formatPrice } = useCurrency();
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const isFavorite = isInWishlist(product.id);
  const primaryVariant = product.variants[0];
  const primaryImage = product.images[0]?.url || 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=600';
  const hoverImage = product.images[1]?.url || primaryImage;

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (primaryVariant) {
      addToCart(product, primaryVariant, 1);
    }
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product.id);
  };

  const hasRatings = Boolean(product.rating && product.rating > 0 && product.reviewCount && product.reviewCount > 0);

  return (
    <div className={`group bg-white rounded-lg border border-darkBrown-100 hover:border-darkBrown-300 shadow-subtle hover:shadow-card transition-all duration-300 flex flex-col overflow-hidden relative ${className || ''}`}>
      
      {/* Product Image Area with Hover Zoom */}
      <Link to={`/products/${product.slug}`} className="relative aspect-square overflow-hidden bg-warmCream-200 block">
        <img
          src={primaryImage}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Hover Image Overlay if available */}
        {product.images[1] && (
          <img
            src={hoverImage}
            alt={`${product.name} secondary view`}
            loading="lazy"
            className="w-full h-full object-cover object-center absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"
          />
        )}

        {/* Badges Overlay */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.isBestSeller && <Badge variant="best-seller">Featured</Badge>}
          {product.isNewArrival && <Badge variant="new">New</Badge>}
          {product.compareAtPrice && product.compareAtPrice > product.price && (
            <Badge variant="sale">Sale</Badge>
          )}
        </div>

        {/* Wishlist Heart Button */}
        <button
          onClick={handleWishlistToggle}
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-darkBrown-700 hover:text-chilli-700 shadow-sm transition-all z-10"
          aria-label={isFavorite ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart className={`w-4 h-4 transition-colors ${isFavorite ? 'text-chilli-700 fill-chilli-700' : ''}`} />
        </button>

        {/* Quick Add Overlay Bar */}
        <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hidden sm:flex gap-2 z-10">
          <button
            onClick={handleQuickAdd}
            className="flex-1 py-2 px-3 bg-chilli-700 hover:bg-chilli-800 text-white text-xs font-semibold rounded shadow flex items-center justify-center gap-1.5 transition-colors"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Quick Add ({primaryVariant?.size})</span>
          </button>
        </div>
      </Link>

      {/* Product Content Details */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
        
        <div className="space-y-1.5">
          {/* Category Header */}
          <div className="flex items-center justify-between text-[11px] text-darkBrown-500 uppercase tracking-wider font-semibold">
            <span>{product.category}</span>
            {product.regionOrigin && <span className="text-mango-600 font-bold">{product.regionOrigin}</span>}
          </div>

          {/* Product Name */}
          <Link to={`/products/${product.slug}`} className="block">
            <h3 className="font-serif font-bold text-base text-darkBrown-900 group-hover:text-chilli-700 transition-colors line-clamp-1">
              {product.name}
            </h3>
          </Link>

          {/* Tagline / Subtitle */}
          <p className="text-xs text-darkBrown-600 line-clamp-2 leading-relaxed">
            {product.tagline || product.description}
          </p>
        </div>

        {/* Spice Level & Optional Ratings Row */}
        <div className="flex items-center justify-between pt-1 border-t border-darkBrown-100 text-xs">
          <SpiceMeter level={product.spiceLevel} size="sm" />
          
          {hasRatings && (
            <div className="flex items-center gap-1 text-darkBrown-700 font-semibold" title={`${product.rating} stars out of ${product.reviewCount} reviews`}>
              <Star className="w-3.5 h-3.5 text-mango-500 fill-mango-500" />
              <span>{product.rating}</span>
              <span className="text-darkBrown-400 font-normal">({product.reviewCount})</span>
            </div>
          )}
        </div>

        {/* Price & Action Row */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-baseline gap-2">
            <span className="font-serif font-bold text-lg text-chilli-700">
              {formatPrice(primaryVariant ? primaryVariant.price : product.price)}
            </span>
            {product.compareAtPrice && product.compareAtPrice > product.price && (
              <span className="text-xs text-darkBrown-400 line-through">
                {formatPrice(product.compareAtPrice)}
              </span>
            )}
          </div>

          {/* Mobile Quick Add Button */}
          <button
            onClick={handleQuickAdd}
            className="sm:hidden p-2 rounded bg-chilli-700 text-white hover:bg-chilli-800 transition-colors"
            aria-label="Add to cart"
          >
            <ShoppingBag className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
