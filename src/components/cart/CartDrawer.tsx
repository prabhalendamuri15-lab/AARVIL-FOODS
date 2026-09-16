import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Plus, Minus, ArrowRight, ShoppingBag, Truck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useCurrency } from '../../context/CurrencyContext';
import { Button } from '../common/Button';
import { EmptyState } from '../common/EmptyState';

export const CartDrawer: React.FC = () => {
  const { cart, isOpen, closeCart, removeFromCart, updateQuantity, itemCount, subtotalINR } = useCart();
  const { formatPrice, currentCurrency } = useCurrency();
  const navigate = useNavigate();

  // Free shipping calculation base INR threshold: ₹999 (~$12 USD)
  const FREE_SHIPPING_THRESHOLD_INR = 999;
  const progressPercent = Math.min(100, (subtotalINR / FREE_SHIPPING_THRESHOLD_INR) * 100);
  const remainingForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD_INR - subtotalINR);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-darkBrown/60 backdrop-blur-sm"
          />

          {/* Slide-over Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 max-w-full w-full sm:w-[420px] bg-white shadow-drawer flex flex-col z-10"
          >
            {/* Cart Header */}
            <div className="p-4 sm:p-5 border-b border-darkBrown-100 flex items-center justify-between bg-warmCream-100">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-chilli-700" />
                <h2 className="font-serif text-h3 text-darkBrown-800">Your Cart</h2>
                <span className="text-xs px-2 py-0.5 rounded-full bg-chilli-700 text-white font-semibold">
                  {itemCount}
                </span>
              </div>
              <button
                onClick={closeCart}
                className="p-1 text-darkBrown-500 hover:text-chilli-700 rounded-md transition-colors"
                aria-label="Close cart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Free Shipping Progress Indicator */}
            {itemCount > 0 && (
              <div className="bg-chilli-50 p-3 border-b border-chilli-100">
                <div className="flex items-center gap-2 text-xs font-semibold text-chilli-800 mb-1.5">
                  <Truck className="w-4 h-4 text-chilli-700 shrink-0" />
                  {remainingForFreeShipping > 0 ? (
                    <span>Add {formatPrice(remainingForFreeShipping)} more for FREE Express Shipping!</span>
                  ) : (
                    <span className="text-naturalGreen-700">🎉 Congratulations! You unlocked FREE Express Shipping!</span>
                  )}
                </div>
                <div className="w-full h-1.5 bg-chilli-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-chilli-700 transition-all duration-300 rounded-full"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>
            )}

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
              {cart.length === 0 ? (
                <EmptyState
                  title="Your cart is waiting for something delicious"
                  description="Explore our hand-cured pickles, stone-ground masalas, and curated gift boxes."
                  actionText="Explore Shop"
                  actionHref="/shop"
                  onAction={closeCart}
                />
              ) : (
                cart.map(item => (
                  <div
                    key={`${item.productId}-${item.variantId}`}
                    className="flex gap-4 p-3 bg-warmCream-100 rounded-md border border-darkBrown-100 group"
                  >
                    <img
                      src={item.product.images[0]?.url || 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=300'}
                      alt={item.product.name}
                      className="w-20 h-20 object-cover rounded border border-darkBrown-200 shrink-0"
                    />

                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="font-serif font-semibold text-sm text-darkBrown-800 line-clamp-1">
                            {item.product.name}
                          </h4>
                          <button
                            onClick={() => removeFromCart(item.productId, item.variantId)}
                            className="text-darkBrown-400 hover:text-chilli-700 p-0.5"
                            aria-label="Remove item"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <span className="text-xs text-darkBrown-500 font-medium">
                          Size: {item.selectedVariant.size}
                        </span>
                      </div>

                      <div className="flex items-center justify-between mt-2">
                        {/* Quantity Buttons */}
                        <div className="flex items-center border border-darkBrown-300 rounded bg-white overflow-hidden">
                          <button
                            onClick={() => updateQuantity(item.productId, item.variantId, item.quantity - 1)}
                            className="p-1 hover:bg-warmCream-200 text-darkBrown-700"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="px-2.5 text-xs font-semibold text-darkBrown-800">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.productId, item.variantId, item.quantity + 1)}
                            className="p-1 hover:bg-warmCream-200 text-darkBrown-700"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {/* Price */}
                        <span className="font-semibold text-sm text-chilli-700">
                          {formatPrice(item.selectedVariant.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Cart Footer Summary */}
            {itemCount > 0 && (
              <div className="p-4 sm:p-5 border-t border-darkBrown-100 bg-white space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-darkBrown-600 font-medium">Subtotal ({itemCount} items)</span>
                  <span className="font-serif font-bold text-lg text-darkBrown-800">
                    {formatPrice(subtotalINR)}
                  </span>
                </div>

                <p className="text-[11px] text-darkBrown-400 text-center">
                  Shipping, taxes, and duties calculated at checkout ({currentCurrency.code}).
                </p>

                <div className="grid grid-cols-1 gap-2 pt-1">
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full"
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                    onClick={() => {
                      closeCart();
                      navigate('/checkout');
                    }}
                  >
                    Proceed to Checkout
                  </Button>

                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full text-xs"
                    onClick={() => {
                      closeCart();
                      navigate('/cart');
                    }}
                  >
                    View Full Cart
                  </Button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
