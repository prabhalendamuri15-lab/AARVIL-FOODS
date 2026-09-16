import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Heart, Menu, ChevronDown, Sparkles, User } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { useCurrency } from '../../context/CurrencyContext';
import { MobileNav } from './MobileNav';
import { SearchModal } from './SearchModal';
import { CurrencySelectorModal } from './CurrencySelectorModal';
import { SHOP_CATEGORIES } from '../../data/navigation';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);

  const { itemCount, toggleCart } = useCart();
  const { wishlistCount } = useWishlist();
  const { currentCurrency } = useCurrency();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns on route change
  useEffect(() => {
    setIsShopDropdownOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={`w-full sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-subtle border-b border-darkBrown-100'
            : 'bg-warmCream-200 border-b border-darkBrown-200/70'
        }`}
      >
        <div className="border-b border-darkBrown-200/70 bg-white">
          <Link to="/" className="block w-full" aria-label="AARVIL Foods home">
            <img
              src="/brand/aarvil-foods-header-banner.png"
              alt="AARVIL Foods - The Taste of Godavari"
              className="block w-full h-auto"
            />
          </Link>
        </div>

        <div className="border-b border-darkBrown-100/80 bg-white/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between gap-4 h-16 lg:h-14">
              
              {/* Mobile Hamburger */}
              <div className="flex items-center gap-3 lg:hidden">
                <button
                  onClick={() => setIsMobileNavOpen(true)}
                  className="lg:hidden p-2 text-darkBrown-700 hover:text-chilli-700 transition-colors"
                  aria-label="Open mobile navigation menu"
                >
                  <Menu className="w-6 h-6" />
                </button>
              </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs font-semibold tracking-wider text-darkBrown-700 uppercase">
              
              {/* Shop Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsShopDropdownOpen(true)}
                onMouseLeave={() => setIsShopDropdownOpen(false)}
              >
                <Link
                  to="/shop"
                  className="flex items-center gap-1 py-2 hover:text-chilli-700 transition-colors"
                >
                  <span>SHOP</span>
                  <ChevronDown className="w-3.5 h-3.5 text-darkBrown-400" />
                </Link>

                {/* Mega Menu Dropdown */}
                {isShopDropdownOpen && (
                  <div className="absolute top-full left-0 w-80 bg-white rounded-md shadow-modal border border-darkBrown-100 p-4 grid grid-cols-1 gap-2 z-50 animate-fadeIn capitalize normal-case">
                    <div className="border-b border-darkBrown-100 pb-2 mb-1">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-darkBrown-400 block mb-1">Categories</span>
                      <Link to="/shop" className="block px-3 py-2 rounded text-sm hover:bg-warmCream-200 text-darkBrown-800 font-semibold hover:text-chilli-700">
                        All Products
                      </Link>
                      {SHOP_CATEGORIES.map((categoryLink) => (
                        <Link key={categoryLink.id} to={categoryLink.href} className="block px-3 py-2 rounded text-sm hover:bg-warmCream-200 text-darkBrown-800 font-semibold hover:text-chilli-700">
                          {categoryLink.label}
                        </Link>
                      ))}
                    </div>

                    <div className="pt-1">
                      <Link to="/shop" className="block text-xs font-bold text-chilli-700 hover:underline uppercase">
                        Explore Full Catalog &rarr;
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link to="/recipes" className="hover:text-chilli-700 transition-colors py-2">
                RECIPES
              </Link>
              <Link
                to="/flavour-map"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-mango-100 text-mango-800 text-xs font-bold hover:bg-mango-200 transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5 text-mango-600" />
                <span>FLAVOUR MAP</span>
              </Link>
              <Link to="/our-story" className="hover:text-chilli-700 transition-colors py-2">
                OUR STORY
              </Link>
              <Link to="/contact" className="hover:text-chilli-700 transition-colors py-2">
                CONTACT
              </Link>
            </nav>

            {/* Header Right Action Buttons */}
            <div className="flex items-center gap-2 sm:gap-4 lg:ml-auto">
              
              {/* Currency Selector Button */}
              <button
                onClick={() => setIsCurrencyOpen(true)}
                className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-md hover:bg-warmCream-300 text-xs font-semibold text-darkBrown-700 transition-colors border border-transparent hover:border-darkBrown-200"
                title="Change Currency"
              >
                <span>{currentCurrency.flagEmoji}</span>
                <span>{currentCurrency.code}</span>
              </button>

              {/* Search Toggle Button */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-darkBrown-700 hover:text-chilli-700 rounded-md transition-colors"
                aria-label="Search catalog"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Wishlist Button */}
              <Link
                to="/wishlist"
                className="relative p-2 text-darkBrown-700 hover:text-chilli-700 rounded-md transition-colors hidden sm:block"
                aria-label="View Wishlist"
              >
                <Heart className="w-5 h-5" />
                {wishlistCount > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-mango-500 text-darkBrown-800 font-bold text-[10px] flex items-center justify-center shadow-sm">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              <Link
                to="/account"
                className="hidden sm:block p-2 text-darkBrown-700 hover:text-chilli-700 rounded-md transition-colors"
                aria-label="View Account"
                title="Account"
              >
                <User className="w-5 h-5" />
              </Link>

              {/* Cart Drawer Trigger Button */}
              <button
                onClick={toggleCart}
                className="relative p-2.5 bg-chilli-700 hover:bg-chilli-800 text-white rounded-md transition-colors flex items-center gap-2 px-4 shadow-sm"
                aria-label="Open Shopping Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                <span className="hidden sm:inline-block text-xs font-bold tracking-wider uppercase">CART</span>
                {itemCount > 0 && (
                  <span className="w-5 h-5 rounded-full bg-mango-500 text-darkBrown-800 font-bold text-xs flex items-center justify-center ml-0.5 shadow-sm">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>

            </div>
          </div>
        </div>
      </header>

      {/* Modals & Mobile Navigation */}
      <MobileNav
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenCurrency={() => setIsCurrencyOpen(true)}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      <CurrencySelectorModal
        isOpen={isCurrencyOpen}
        onClose={() => setIsCurrencyOpen(false)}
      />
    </>
  );
};
