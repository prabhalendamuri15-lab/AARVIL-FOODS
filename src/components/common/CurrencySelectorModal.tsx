import React from 'react';
import { useCurrency } from '../../context/CurrencyContext';
import { X, Check, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface CurrencySelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CurrencySelectorModal: React.FC<CurrencySelectorModalProps> = ({ isOpen, onClose }) => {
  const { currentCurrency, setCurrency, supportedCurrencies } = useCurrency();

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-darkBrown/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="relative bg-white rounded-lg shadow-modal border border-darkBrown-100 w-full max-w-md p-6 z-10 overflow-hidden"
          >
            <div className="flex items-center justify-between pb-4 border-b border-darkBrown-100 mb-4">
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-chilli-700" />
                <h3 className="font-serif text-h3 text-darkBrown-800">Select Currency</h3>
              </div>
              <button
                onClick={onClose}
                className="p-1 text-darkBrown-500 hover:text-darkBrown-800 rounded-md transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-darkBrown-500 mb-4">
              Prices will automatically display in your selected currency based on real-time estimates.
            </p>

            <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
              {supportedCurrencies.map(curr => {
                const isSelected = curr.code === currentCurrency.code;
                return (
                  <button
                    key={curr.code}
                    onClick={() => {
                      setCurrency(curr);
                      onClose();
                    }}
                    className={`w-full flex items-center justify-between p-3 rounded-md text-left transition-all ${
                      isSelected
                        ? 'bg-chilli-50 border border-chilli-300 text-chilli-800 font-medium'
                        : 'hover:bg-warmCream-200 text-darkBrown-700 border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl" role="img" aria-label={curr.name}>
                        {curr.flagEmoji}
                      </span>
                      <div>
                        <div className="text-sm font-semibold flex items-center gap-1.5">
                          <span>{curr.name}</span>
                          <span className="text-xs font-mono text-darkBrown-500">({curr.code})</span>
                        </div>
                        <div className="text-xs text-darkBrown-400">Symbol: {curr.symbol}</div>
                      </div>
                    </div>
                    {isSelected && <Check className="w-5 h-5 text-chilli-700 shrink-0" />}
                  </button>
                );
              })}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
