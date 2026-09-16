import React, { useState, useEffect } from 'react';
import { Search, X, ArrowRight, Tag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

export interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const POPULAR_SEARCHES = ['Mango Pickle', 'Gongura', 'Biryani Masala', 'Garlic Pickle', 'Garam Masala', 'Sambar Powder'];

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/shop?search=${encodeURIComponent(query.trim())}`);
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-darkBrown/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            className="relative bg-white rounded-lg shadow-modal border border-darkBrown-100 w-full max-w-2xl overflow-hidden z-10"
          >
            <form onSubmit={handleSearchSubmit} className="flex items-center border-b border-darkBrown-100 px-4 py-3.5">
              <Search className="w-5 h-5 text-darkBrown-400 shrink-0 mr-3" />
              <input
                type="text"
                autoFocus
                placeholder="Search pickles, masalas, recipes, or ingredients... (e.g. 'mango', 'spicy')"
                value={query}
                onChange={e => setQuery(e.target.value)}
                className="w-full bg-transparent text-base text-darkBrown-800 placeholder:text-darkBrown-400 focus:outline-none"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  className="p-1 text-darkBrown-400 hover:text-darkBrown-700"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <span className="hidden sm:inline-block ml-3 px-2 py-0.5 text-xs text-darkBrown-400 bg-warmCream-200 rounded font-mono">
                ESC
              </span>
            </form>

            <div className="p-6">
              <div className="mb-4">
                <span className="text-xs font-semibold text-darkBrown-500 uppercase tracking-wider block mb-2.5">
                  Popular Searches
                </span>
                <div className="flex flex-wrap gap-2">
                  {POPULAR_SEARCHES.map(term => (
                    <button
                      key={term}
                      onClick={() => {
                        setQuery(term);
                        navigate(`/shop?search=${encodeURIComponent(term)}`);
                        onClose();
                      }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-warmCream-200 text-darkBrown-700 hover:bg-chilli-700 hover:text-white transition-colors"
                    >
                      <Tag className="w-3 h-3" />
                      <span>{term}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-darkBrown-100 flex items-center justify-between text-xs text-darkBrown-500">
                <span>Looking for specific regional flavours?</span>
                <Link
                  to="/flavour-map"
                  onClick={onClose}
                  className="inline-flex items-center gap-1 text-chilli-700 hover:underline font-semibold"
                >
                  Explore Flavour Map <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
