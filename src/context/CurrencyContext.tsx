import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { Currency } from '../types';
import { SUPPORTED_CURRENCIES, DEFAULT_CURRENCY, formatPrice as formatPriceUtil } from '../utils/currency';
import { storage } from '../utils/storage';

interface CurrencyContextType {
  currentCurrency: Currency;
  setCurrency: (currency: Currency) => void;
  formatPrice: (amountInINR: number) => string;
  supportedCurrencies: Currency[];
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const CurrencyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentCurrency, setCurrentCurrencyState] = useState<Currency>(() => {
    const savedCode = storage.get<string>('swathi_currency', DEFAULT_CURRENCY.code);
    return SUPPORTED_CURRENCIES.find(c => c.code === savedCode) || DEFAULT_CURRENCY;
  });

  const setCurrency = (currency: Currency) => {
    setCurrentCurrencyState(currency);
    storage.set('swathi_currency', currency.code);
  };

  const formatPrice = (amountInINR: number): string => {
    return formatPriceUtil(amountInINR, currentCurrency);
  };

  return (
    <CurrencyContext.Provider value={{ currentCurrency, setCurrency, formatPrice, supportedCurrencies: SUPPORTED_CURRENCIES }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = (): CurrencyContextType => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};
