import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, Heart, Search, MapPin, BookOpen, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useWishlist } from '../../context/WishlistContext';
import { useCurrency } from '../../context/CurrencyContext';
import { SHOP_CATEGORIES } from '../../data/navigation';
import { BrandLogo } from './BrandLogo';
import type { LucideIcon } from 'lucide-react';

export interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSearch: () => void;
  onOpenCurrency: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({
  isOpen,
  onClose,
  onOpenSearch,
  onOpenCurrency,
}) => {
  const { wishlistCount } = useWishlist();
  const { currentCurrency } = useCurrency();

  const navLinks: Array<{
    title: string;
    href: string;
    tag?: string;
    icon?: LucideIcon;
  }> = [
    { title: 'Shop All', href: '/shop' },
    ...SHOP_CATEGORIES.map((category) => ({
      title: category.label,
      href: category.href,
      tag: 'Collection',
    })),
    { title: 'Flavours of India Map', href: '/flavour-map', icon: MapPin },
    { title: 'Culinary Recipes', href: '/recipes', icon: BookOpen },
    { title: 'Our Story', href: '/our-story' },
    { title: 'Track Order', href: '/track-order' },
    { title: 'Customer Account', href: '/account', icon: User },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-darkBrown/60 backdrop-blur-sm"
          />

          {/* Drawer Content */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 left-0 w-full max-w-xs bg-warmCream-100 text-darkBrown-800 shadow-drawer flex flex-col z-10"
          >
            {/* Header */}
            <div className="p-4 border-b border-darkBrown-200 flex items-center justify-between bg-white">
              <div className="flex min-w-0">
                <BrandLogo variant="mobile" />
              </div>
              <button
                onClick={onClose}
                className="p-2 text-darkBrown-600 hover:text-chilli-700 rounded-md"
                aria-label="Close navigation"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Currency & Search Action Bar */}
            <div className="p-3 bg-warmCream-200 border-b border-darkBrown-200 flex items-center justify-between gap-2">
              <button
                onClick={() => {
                  onClose();
                  onOpenSearch();
                }}
                className="flex-1 flex items-center gap-2 px-3 py-2 bg-white rounded-md border border-darkBrown-200 text-xs text-darkBrown-600 font-medium"
              >
                <Search className="w-3.5 h-3.5 text-chilli-700" />
                <span>Search Products...</span>
              </button>

              <button
                onClick={() => {
                  onClose();
                  onOpenCurrency();
                }}
                className="flex items-center gap-1 px-3 py-2 bg-white rounded-md border border-darkBrown-200 text-xs font-semibold text-darkBrown-800"
              >
                <span>{currentCurrency.flagEmoji}</span>
                <span>{currentCurrency.code}</span>
              </button>
            </div>

            {/* Nav Items */}
            <div className="flex-1 overflow-y-auto p-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.title}
                  to={link.href}
                  onClick={onClose}
                  className="flex items-center justify-between py-3 px-3 rounded-md hover:bg-white hover:shadow-subtle text-sm font-medium text-darkBrown-800 transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    {link.icon && <link.icon className="w-4 h-4 text-chilli-700" />}
                    <span>{link.title}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {link.tag && (
                      <span className="px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider rounded bg-mango-100 text-mango-700">
                        {link.tag}
                      </span>
                    )}
                    <ChevronRight className="w-4 h-4 text-darkBrown-400 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>

            {/* Footer Quick Links */}
            <div className="p-4 border-t border-darkBrown-200 bg-white space-y-3">
              <Link
                to="/wishlist"
                onClick={onClose}
                className="flex items-center justify-between text-xs font-semibold text-darkBrown-700 hover:text-chilli-700"
              >
                <span className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-chilli-700" />
                  Wishlist ({wishlistCount})
                </span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
              <div className="text-[11px] text-darkBrown-500 text-center pt-1">
                AARVIL Foods Pickles & Masalas • Globally Shipped
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
