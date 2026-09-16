import type { Currency } from '../types';

export const SUPPORTED_CURRENCIES: Currency[] = [
  {
    code: 'INR',
    symbol: '₹',
    name: 'Indian Rupee',
    exchangeRateFromINR: 1,
    flagEmoji: '🇮🇳'
  },
  {
    code: 'USD',
    symbol: '$',
    name: 'US Dollar',
    exchangeRateFromINR: 0.012, // 1 INR ~ $0.012 USD
    flagEmoji: '🇺🇸'
  },
  {
    code: 'GBP',
    symbol: '£',
    name: 'British Pound',
    exchangeRateFromINR: 0.0094,
    flagEmoji: '🇬🇧'
  },
  {
    code: 'EUR',
    symbol: '€',
    name: 'Euro',
    exchangeRateFromINR: 0.011,
    flagEmoji: '🇪🇺'
  },
  {
    code: 'AED',
    symbol: 'د.إ',
    name: 'UAE Dirham',
    exchangeRateFromINR: 0.044,
    flagEmoji: '🇦🇪'
  },
  {
    code: 'CAD',
    symbol: 'CA$',
    name: 'Canadian Dollar',
    exchangeRateFromINR: 0.016,
    flagEmoji: '🇨🇦'
  },
  {
    code: 'AUD',
    symbol: 'A$',
    name: 'Australian Dollar',
    exchangeRateFromINR: 0.018,
    flagEmoji: '🇦🇺'
  }
];

export const DEFAULT_CURRENCY = SUPPORTED_CURRENCIES[0];

/**
 * Converts INR base amount to selected currency and formats string nicely
 */
export function formatPrice(amountInINR: number, currency: Currency = DEFAULT_CURRENCY): string {
  const converted = amountInINR * currency.exchangeRateFromINR;
  
  // INR doesn't usually use decimals for whole price tags, others use 2 decimals if fraction exists
  if (currency.code === 'INR') {
    return `${currency.symbol}${Math.round(converted).toLocaleString('en-IN')}`;
  }

  // USD, EUR, GBP etc.
  return `${currency.symbol}${converted.toFixed(2)}`;
}
