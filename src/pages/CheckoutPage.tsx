import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/common/Button';
import { Input } from '../components/common/Input';
import { Link } from 'react-router-dom';
import { CheckCircle2, ChevronRight, AlertTriangle } from 'lucide-react';

type CheckoutStep = 'contact' | 'shipping' | 'payment' | 'success';

export const CheckoutPage: React.FC = () => {
  const { cart, subtotalINR, clearCart } = useCart();
  const { user } = useAuth();

  const [step, setStep] = useState<CheckoutStep>('contact');
  const [error, setError] = useState('');

  // Form State
  const [email, setEmail] = useState(user?.email || '');
  const [phone, setPhone] = useState('');
  
  const [firstName, setFirstName] = useState(user?.name?.split(' ')[0] || '');
  const [lastName, setLastName] = useState(user?.name?.split(' ')[1] || '');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('India');

  const shippingCost = 150; // Mock flat rate
  const total = subtotalINR + (cart.length > 0 ? shippingCost : 0);

  if (cart.length === 0 && step !== 'success') {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <h1 className="text-h2 font-serif text-darkBrown-900 mb-4">Checkout</h1>
        <p className="text-darkBrown-600 mb-8">Your cart is empty. You cannot proceed to checkout.</p>
        <Link to="/shop">
          <Button variant="primary">Return to Shop</Button>
        </Link>
      </div>
    );
  }

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes('@') || phone.length < 10) {
      setError('Please provide a valid email and phone number.');
      return;
    }
    setError('');
    setStep('shipping');
  };

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName || !lastName || !address || !city || !state || !postalCode) {
      setError('Please fill in all required shipping fields.');
      return;
    }
    setError('');
    setStep('payment');
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock processing
    setTimeout(() => {
      clearCart();
      setStep('success');
    }, 1000);
  };

  if (step === 'success') {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <div className="w-16 h-16 bg-naturalGreen-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8 text-naturalGreen-600" />
        </div>
        <h1 className="text-h2 font-serif text-darkBrown-900 mb-4">Order Received</h1>
        <p className="text-darkBrown-600 mb-8 max-w-md mx-auto">
          Thank you for your purchase. We have received your order (Mock Order #SWA-{Date.now().toString().slice(-6)}) and will begin preparing it shortly.
        </p>
        <Link to="/account">
          <Button variant="primary">View My Orders</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-warmCream-200 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        {/* Breadcrumb Steps */}
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-darkBrown-500 mb-8">
          <span className={step === 'contact' ? 'text-darkBrown-900' : ''}>Contact</span>
          <ChevronRight className="w-3 h-3" />
          <span className={step === 'shipping' ? 'text-darkBrown-900' : ''}>Shipping</span>
          <ChevronRight className="w-3 h-3" />
          <span className={step === 'payment' ? 'text-darkBrown-900' : ''}>Payment</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Checkout Flow */}
          <div className="lg:col-span-7 space-y-8">
            
            {error && (
              <div className="p-4 bg-chilli-50 border border-chilli-200 text-chilli-800 rounded-md flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
                <p className="text-sm font-medium">{error}</p>
              </div>
            )}

            {step === 'contact' && (
              <div className="bg-white p-6 sm:p-8 rounded-xl border border-darkBrown-200 shadow-subtle">
                <h2 className="font-serif text-xl font-bold text-darkBrown-900 mb-6">Contact Information</h2>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <Input label="Email Address" type="email" required value={email} onChange={e => setEmail(e.target.value)} />
                  <Input label="Phone Number" type="tel" required value={phone} onChange={e => setPhone(e.target.value)} />
                  <div className="pt-4 flex justify-end">
                    <Button variant="primary" type="submit" rightIcon={<ChevronRight className="w-4 h-4" />}>Continue to Shipping</Button>
                  </div>
                </form>
              </div>
            )}

            {step === 'shipping' && (
              <div className="bg-white p-6 sm:p-8 rounded-xl border border-darkBrown-200 shadow-subtle">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-serif text-xl font-bold text-darkBrown-900">Shipping Address</h2>
                  <button onClick={() => setStep('contact')} className="text-xs text-chilli-700 font-bold hover:underline">Edit Contact</button>
                </div>
                <form onSubmit={handleShippingSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input label="First Name" required value={firstName} onChange={e => setFirstName(e.target.value)} />
                    <Input label="Last Name" required value={lastName} onChange={e => setLastName(e.target.value)} />
                  </div>
                  <Input label="Address" required value={address} onChange={e => setAddress(e.target.value)} />
                  <div className="grid grid-cols-2 gap-4">
                    <Input label="City" required value={city} onChange={e => setCity(e.target.value)} />
                    <Input label="State/Province" required value={state} onChange={e => setState(e.target.value)} />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Input label="Postal Code" required value={postalCode} onChange={e => setPostalCode(e.target.value)} />
                    <Input label="Country" required value={country} onChange={e => setCountry(e.target.value)} />
                  </div>
                  <div className="pt-4 flex justify-end">
                    <Button variant="primary" type="submit" rightIcon={<ChevronRight className="w-4 h-4" />}>Continue to Payment</Button>
                  </div>
                </form>
              </div>
            )}

            {step === 'payment' && (
              <div className="bg-white p-6 sm:p-8 rounded-xl border border-darkBrown-200 shadow-subtle">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-serif text-xl font-bold text-darkBrown-900">Payment Selection</h2>
                  <button onClick={() => setStep('shipping')} className="text-xs text-chilli-700 font-bold hover:underline">Edit Shipping</button>
                </div>
                
                <div className="p-4 mb-6 border border-yellow-300 bg-yellow-50 text-yellow-800 rounded-md text-sm">
                  <strong>Demo Mode:</strong> No actual payment processing will occur. Click the button below to mock a successful payment.
                </div>

                <form onSubmit={handlePaymentSubmit}>
                  <div className="border border-darkBrown-200 rounded-lg divide-y divide-darkBrown-100">
                    <label className="flex items-center p-4 cursor-pointer hover:bg-warmCream-100">
                      <input type="radio" name="payment" defaultChecked className="text-chilli-700 focus:ring-chilli-700 w-4 h-4" />
                      <span className="ml-3 font-medium text-darkBrown-900">Credit / Debit Card (Mock)</span>
                    </label>
                    <label className="flex items-center p-4 cursor-pointer hover:bg-warmCream-100">
                      <input type="radio" name="payment" className="text-chilli-700 focus:ring-chilli-700 w-4 h-4" />
                      <span className="ml-3 font-medium text-darkBrown-900">UPI / Net Banking (Mock)</span>
                    </label>
                  </div>

                  <div className="pt-8 flex justify-end">
                    <Button variant="primary" type="submit" size="lg">Place Demo Order — ₹{total.toFixed(2)}</Button>
                  </div>
                </form>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-xl border border-darkBrown-200 shadow-subtle sticky top-24">
            <h3 className="font-serif text-lg font-bold text-darkBrown-900 mb-6">Order Summary</h3>
            
            <div className="space-y-4 mb-6 max-h-[40vh] overflow-y-auto pr-2">
              {cart.map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-16 h-16 bg-warmCream-200 rounded overflow-hidden shrink-0">
                    <img src={item.product.images[0]?.url || ''} alt={item.product.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm text-darkBrown-900">{item.product.name}</h4>
                    <p className="text-xs text-darkBrown-500">{item.selectedVariant.size} × {item.quantity}</p>
                  </div>
                  <p className="font-semibold text-sm text-darkBrown-900">₹{(item.selectedVariant.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>

            <div className="border-t border-darkBrown-100 pt-4 space-y-3 text-sm">
              <div className="flex justify-between text-darkBrown-600">
                <span>Subtotal</span>
                <span>₹{subtotalINR.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-darkBrown-600">
                <span>Shipping</span>
                <span>₹{shippingCost.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-lg text-darkBrown-900 pt-3 border-t border-darkBrown-100">
                <span>Total</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
