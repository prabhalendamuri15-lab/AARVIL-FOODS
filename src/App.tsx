import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CurrencyProvider } from './context/CurrencyContext';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { OrderProvider } from './context/OrderContext';
import { ErrorBoundary } from './components/common/ErrorBoundary';
import { AnnouncementBar } from './components/common/AnnouncementBar';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { CartDrawer } from './components/cart/CartDrawer';

// Pages
import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { RecipesPage } from './pages/RecipesPage';
import { RecipeDetailPage } from './pages/RecipeDetailPage';
import { FlavourMapPage } from './pages/FlavourMapPage';
import { StoryPage } from './pages/StoryPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { OrderTrackingPage } from './pages/OrderTrackingPage';
import { AccountPage } from './pages/AccountPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { WishlistPage } from './pages/WishlistPage';
import { AdminPage } from './pages/AdminPage';
import { LegalPage } from './pages/LegalPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { AuthProvider } from './context/AuthContext';

export const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <CurrencyProvider>
        <AuthProvider>
          <CartProvider>
            <WishlistProvider>
              <OrderProvider>
                <Router>
                  <div className="w-full min-h-screen flex flex-col bg-warmCream text-darkBrown font-sans overflow-x-hidden">
                    <AnnouncementBar />
                    <Header />

                    <main className="flex-1 w-full overflow-x-hidden">
                      <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/shop" element={<ShopPage />} />
                        <Route path="/shop/:category" element={<ShopPage />} />
                        <Route path="/products/:slug" element={<ProductDetailPage />} />
                        <Route path="/product/:slug" element={<ProductDetailPage />} />
                        <Route path="/recipes" element={<RecipesPage />} />
                        <Route path="/recipes/:slug" element={<RecipeDetailPage />} />
                        <Route path="/flavour-map" element={<FlavourMapPage />} />
                        <Route path="/our-story" element={<StoryPage />} />
                        <Route path="/about" element={<StoryPage />} />
                        <Route path="/cart" element={<CartPage />} />
                        <Route path="/checkout" element={<CheckoutPage />} />
                        <Route path="/wishlist" element={<WishlistPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="/track-order" element={<OrderTrackingPage />} />
                        <Route path="/orders" element={<AccountPage />} />
                        <Route path="/orders/:id" element={<OrderTrackingPage />} />
                        <Route path="/account" element={<AccountPage />} />
                        <Route path="/account/orders" element={<AccountPage />} />
                        <Route path="/admin" element={<AdminPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/privacy" element={<LegalPage />} />
                        <Route path="/terms" element={<LegalPage />} />
                        <Route path="/refund-policy" element={<LegalPage />} />
                        <Route path="/shipping-policy" element={<LegalPage />} />
                        <Route path="/faq" element={<LegalPage />} />
                        <Route path="*" element={<NotFoundPage />} />
                      </Routes>
                    </main>

                    <CartDrawer />
                    <Footer />
                  </div>
                </Router>
              </OrderProvider>
            </WishlistProvider>
          </CartProvider>
        </AuthProvider>
      </CurrencyProvider>
    </ErrorBoundary>
  );
};

export default App;
