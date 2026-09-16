import React from 'react';
import { useCart } from '../context/CartContext';
import { useCurrency } from '../context/CurrencyContext';
import { Button } from '../components/common/Button';
import { EmptyState } from '../components/common/EmptyState';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowRight, ShieldCheck } from 'lucide-react';

export const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, itemCount, subtotalINR } = useCart();
  const { formatPrice, currentCurrency } = useCurrency();
  const navigate = useNavigate();

  if (itemCount === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16">
        <EmptyState
          title="Your cart is waiting for something delicious"
          description="Explore our hand-cured pickles, stone-ground masalas, and curated gift boxes."
          actionText="Browse Shop Catalog"
          actionHref="/shop"
        />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-h1 font-serif text-darkBrown-800 mb-8">Shopping Cart ({itemCount} items)</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {cart.map(item => (
            <div
              key={`${item.productId}-${item.variantId}`}
              className="flex gap-4 p-4 bg-white rounded-lg border border-darkBrown-200"
            >
              <img
                src={item.product.images[0]?.url || 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=300'}
                alt={item.product.name}
                className="w-24 h-24 object-cover rounded border border-darkBrown-200 shrink-0"
              />

              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between">
                    <h3 className="font-serif font-semibold text-lg text-darkBrown-800">
                      {item.product.name}
                    </h3>
                    <button
                      onClick={() => removeFromCart(item.productId, item.variantId)}
                      className="text-darkBrown-400 hover:text-chilli-700"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <span className="text-xs text-darkBrown-500 font-medium">
                    Package Size: {item.selectedVariant.size}
                  </span>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center border border-darkBrown-300 rounded bg-white">
                    <button
                      onClick={() => updateQuantity(item.productId, item.variantId, item.quantity - 1)}
                      className="p-1.5 hover:bg-warmCream-200 text-darkBrown-700"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-3 text-xs font-semibold text-darkBrown-800">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.productId, item.variantId, item.quantity + 1)}
                      className="p-1.5 hover:bg-warmCream-200 text-darkBrown-700"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  <span className="font-serif font-bold text-lg text-chilli-700">
                    {formatPrice(item.selectedVariant.price * item.quantity)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Card */}
        <div className="bg-white p-6 rounded-lg border border-darkBrown-200 h-fit space-y-4">
          <h2 className="font-serif text-h3 text-darkBrown-800 border-b border-darkBrown-100 pb-3">Order Summary</h2>
          
          <div className="flex justify-between text-sm">
            <span className="text-darkBrown-600">Subtotal</span>
            <span className="font-bold text-darkBrown-800">{formatPrice(subtotalINR)}</span>
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-darkBrown-600">Estimated Shipping</span>
            <span className="text-naturalGreen-700 font-semibold">Calculated at Checkout</span>
          </div>

          <div className="border-t border-darkBrown-100 pt-3 flex justify-between text-base font-bold text-darkBrown-900">
            <span>Estimated Total ({currentCurrency.code})</span>
            <span className="text-chilli-700 font-serif text-xl">{formatPrice(subtotalINR)}</span>
          </div>

          <Button
            variant="primary"
            size="lg"
            className="w-full mt-2"
            rightIcon={<ArrowRight className="w-4 h-4" />}
            onClick={() => navigate('/checkout')}
          >
            Proceed to Checkout
          </Button>

          <Link
            to="/shop"
            className="block text-center text-xs font-bold uppercase tracking-wider text-chilli-700 hover:text-chilli-800 pt-1"
          >
            Continue Shopping
          </Link>

          <div className="flex items-center justify-center gap-1.5 text-xs text-darkBrown-500 pt-2">
            <ShieldCheck className="w-4 h-4 text-naturalGreen-600" />
            <span>Vacuum-sealed leakproof export packaging</span>
          </div>
        </div>
      </div>
    </div>
  );
};
